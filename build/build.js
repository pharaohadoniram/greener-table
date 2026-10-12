// Builds the finished site into _site/ from site/ (static files), templates/ and content/.
// Usage: node build/build.js
// GitHub runs this automatically on every save from Pages CMS (see .github/workflows/deploy.yml).
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_site');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
const readJSON = p => JSON.parse(read(p));

// ---------- text helpers ----------
const escapeHTML = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Typographic quotes, so text typed in the editor with plain quotes still looks right.
function smartQuotes(s) {
  return String(s ?? '')
    .replace(/(^|[\s([{—-])"/g, '$1“').replace(/"/g, '”')
    .replace(/(^|[\s([{—-])'/g, '$1‘').replace(/'/g, '’');
}

// Escape, then allow **bold** and *italic* from the editor.
// Also allows [link text](recipe.html?r=slug) for links between pages on this site.
const format = s => escapeHTML(smartQuotes(s))
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/\[([^\]]+)\]\(([a-z0-9-]+\.html(?:\?r=[a-z0-9-]+)?(?:#[a-z0-9-]+)?)\)/g, '<a href="$2">$1</a>');
const plain = s => escapeHTML(smartQuotes(String(s ?? '').replace(/\*/g, '')));
const slugify = s => String(s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const roman = n => ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'][n - 1] || String(n);
const sitePath = p => String(p ?? '').replace(/^\/+/, '');

const icons = {
  sun: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="7"/><path d="M20 4v5M20 31v5M4 20h5M31 20h5M8.7 8.7l3.5 3.5M27.8 27.8l3.5 3.5M8.7 31.3l3.5-3.5M27.8 12.2l3.5-3.5"/></svg>',
  leaf: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 32C8 18 18 8 33 7c0 15-10 25-25 25z"/><path d="M8 32L24 16"/></svg>',
  people: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="14" cy="16" r="6"/><circle cx="26" cy="16" r="6"/><path d="M5 34c1-6 5-9 9-9s8 3 9 9M17 34c1-6 5-9 9-9s8 3 9 9"/></svg>',
};

// ---------- tiny template engine ----------
// {{path}} formatted text · {{attr:path}} attribute-safe text · {{slug:path}} · {{{icon:path}}}
// {{#each list as x}} ... {{/each}} with {{@roman}}, @first, @notfirst · {{#if path}} ... {{/if}}
function lookup(scope, key) {
  return key.split('.').reduce((v, k) => (v == null ? undefined : v[k]), scope);
}
function findClose(tpl, from, open, close) {
  let depth = 1, i = from;
  const re = new RegExp(`\\{\\{(${open}|${close})`, 'g');
  re.lastIndex = from;
  let m;
  while ((m = re.exec(tpl))) {
    if (m[1] === close) { if (--depth === 0) return m.index; } else depth++;
  }
  throw new Error(`Unclosed ${open}`);
}
function render(tpl, scope) {
  let out = '', i = 0;
  while (i < tpl.length) {
    const start = tpl.indexOf('{{', i);
    if (start < 0) { out += tpl.slice(i); break; }
    out += tpl.slice(i, start);
    const each = /^\{\{#each ([\w.@]+) as (\w+)\}\}/.exec(tpl.slice(start));
    const iff = /^\{\{#if ([\w.@]+)\}\}/.exec(tpl.slice(start));
    if (each) {
      const bodyStart = start + each[0].length;
      const end = findClose(tpl, bodyStart, '#each', '/each');
      const body = tpl.slice(bodyStart, end);
      const list = lookup(scope, each[1]) || [];
      list.forEach((item, n) => {
        out += render(body, { ...scope, [each[2]]: item, '@roman': roman(n + 1), '@first': n === 0, '@notfirst': n > 0 });
      });
      i = end + '{{/each}}'.length;
    } else if (iff) {
      const bodyStart = start + iff[0].length;
      const end = findClose(tpl, bodyStart, '#if', '/if');
      const v = scope[iff[1]] !== undefined ? scope[iff[1]] : lookup(scope, iff[1]);
      if (Array.isArray(v) ? v.length : v) out += render(tpl.slice(bodyStart, end), scope);
      i = end + '{{/if}}'.length;
    } else {
      const triple = tpl.startsWith('{{{', start);
      const end = tpl.indexOf(triple ? '}}}' : '}}', start);
      const expr = tpl.slice(start + (triple ? 3 : 2), end).trim();
      const [kind, key] = expr.includes(':') ? expr.split(':') : ['text', expr];
      const v = scope[key] !== undefined ? scope[key] : lookup(scope, key);
      if (kind === 'attr') out += plain(v);
      else if (kind === 'slug') out += slugify(v);
      else if (kind === 'icon') out += icons[v] || icons.leaf;
      else out += format(v);
      i = end + (triple ? 3 : 2);
    }
  }
  return out;
}

// ---------- recipes ----------
// Converts the editor-friendly recipe files into the shape recipe.html renders.
function loadRecipes() {
  const dir = path.join(ROOT, 'content', 'recipes');
  const pairs = (list, a, b) => (list || []).filter(x => x && (x[a] || x[b])).map(x => [smartQuotes(x[a]), smartQuotes(x[b] || '')]);
  const md = s => format(s);
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => {
    const r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    const slug = slugify(path.basename(f, '.json'));
    return {
      slug, order: Number(r.order) || 999, featured: !!r.show_on_home_menu,
      home: { slug, photo: r.photo ? sitePath(r.photo) : '', title: r.title, subtitle: r.subtitle, region: r.region, menu_blurb: r.menu_blurb || r.intro, prep_minutes: r.prep_minutes, cook_minutes: r.cook_minutes, serves: r.serves },
      data: {
        slug,
        pdf: r.pdf ? sitePath(r.pdf).replace(/^recipes\//, '') : '',
        title: smartQuotes(r.title), subtitle: smartQuotes(r.subtitle), region: smartQuotes(r.region),
        intro: smartQuotes(r.intro), origin: smartQuotes(r.origin),
        glance: { prep: String(r.prep_minutes ?? ''), cook: String(r.cook_minutes ?? ''), serves: String(r.serves ?? '') },
        mise: pairs(r.mise_en_place, 'label', 'task'),
        ingredients: (r.ingredients || []).map(g => ({ group: smartQuotes(g.group), items: pairs(g.items, 'name', 'amount'), ...(g.note ? { swap: smartQuotes(g.note) } : {}) })),
        ...(r.prep_note ? { prepNote: format(r.prep_note) } : {}),
        steps: (r.steps || []).map(s => ({
          title: smartQuotes(s.title),
          items: (s.instructions || []).filter(Boolean).map(md),
          ...((s.note || []).filter(Boolean).length ? { note: { title: smartQuotes(s.note_title || 'Note'), items: s.note.filter(Boolean).map(md) } } : {}),
        })),
        ...(r.sauce && r.sauce.title ? { extra: { eyebrow: smartQuotes(r.sauce.eyebrow || 'On the side'), title: smartQuotes(r.sauce.title), method: smartQuotes(r.sauce.method || ''),
          versions: (r.sauce.versions || []).map(v => ({ name: smartQuotes(v.name), items: pairs(v.items, 'name', 'amount') })) } } : {}),
        tips: pairs(r.tips, 'label', 'tip'),
        nutrition: (r.nutrition || []).map(n => ({ name: smartQuotes(n.ingredient), facts: (n.facts || []).map(smartQuotes), notes: smartQuotes(n.notes || '') })),
        learn: (r.notebook || []).map(l => ({
          q: smartQuotes(l.question), paras: (l.answer || []).filter(Boolean).map(smartQuotes),
          ...((l.table || []).length ? { list: { title: smartQuotes(l.table_title || ''), items: pairs(l.table, 'label', 'text') } } : {}),
          ...((l.benefits || []).length ? { benefits: { title: smartQuotes(l.benefits_title || ''), items: pairs(l.benefits, 'label', 'text') } } : {}),
        })),
      },
    };
  }).sort((a, b) => a.order - b.order || a.data.title.localeCompare(b.data.title));
}

// ---------- build ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'site'), OUT, { recursive: true });

const recipes = loadRecipes();
const home = readJSON('content/home.json');
const settings = readJSON('content/settings.json');
const html = render(read('templates/index.html'), {
  ...home, settings, year: String(new Date().getFullYear()),
  featured: recipes.filter(r => r.featured).slice(0, Number((home.recipes_section || {}).max_on_home) || 6).map(r => r.home),
});
fs.writeFileSync(path.join(OUT, 'index.html'), html);

// Gallery page: photos.
const gallery = readJSON('content/gallery.json');
fs.writeFileSync(path.join(OUT, 'gallery.html'), render(read('templates/gallery.html'), {
  ...gallery, year: String(new Date().getFullYear()), footer_tagline: home.footer.tagline,
  photos: (gallery.photos || []).filter(p => p && p.image).map(p => ({ ...p, image: sitePath(p.image) })),
  // Three columns, filled in list order (first third, second third, last third), so each column’s first photo gets the arch.
  columns: (() => {
    const ps = (gallery.photos || []).filter(p => p && p.image).map(p => ({ ...p, image: sitePath(p.image) }));
    const per = Math.ceil(ps.length / 3);
    return [0, 1, 2].map(c => ({ photos: ps.slice(c * per, (c + 1) * per) })).filter(c => c.photos.length);
  })(),
}));

// Kind Words page: survey numbers plus testimonials (the first one is featured large).
const kind = readJSON('content/testimonials.json');
const quotes = (kind.testimonials || []).filter(t => t && t.quote);
fs.writeFileSync(path.join(OUT, 'testimonials.html'), render(read('templates/testimonials.html'), {
  ...kind, year: String(new Date().getFullYear()), footer_tagline: home.footer.tagline,
  stats: (kind.stats || []).filter(x => x && x.number), featured: quotes.slice(0, 1), more: quotes.slice(1),
}));

// recipe.html and recipes.html read this file.
const header = '/* Generated by build/build.js from content/recipes/. Edit recipes there (or in Pages CMS), not here. */\n';
fs.writeFileSync(path.join(OUT, 'recipes', 'recipes.js'), header + 'window.RECIPES = ' + JSON.stringify(recipes.map(r => r.data), null, 2) + ';\n');

// GitHub Pages: serve files as-is, and answer for the custom domain.
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
if (settings.site_url) fs.writeFileSync(path.join(OUT, 'CNAME'), new URL(settings.site_url).hostname + '\n');

// The top menu button text is editable in Pages CMS (Home page > Top menu).
const menuButton = plain((home.top_menu || {}).button_label || 'Request a Class');
for (const page of fs.readdirSync(OUT).filter(f => f.endsWith('.html'))) {
  const file = path.join(OUT, page);
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(/<!--menu-button-->[\s\S]*?<!--\/menu-button-->/g, menuButton));
}

// Cache busting: stamp every stylesheet and script link with a fingerprint of its contents,
// so browsers fetch the new file as soon as it changes instead of showing a saved copy.
const crypto = require('crypto');
const stamp = f => crypto.createHash('md5').update(fs.readFileSync(path.join(OUT, f))).digest('hex').slice(0, 8);
for (const page of fs.readdirSync(OUT).filter(f => f.endsWith('.html'))) {
  const file = path.join(OUT, page);
  const htmlOut = fs.readFileSync(file, 'utf8').replace(/(href|src)="((?:[\w-]+\/)*[\w.-]+\.(?:css|js))"/g,
    (m, attr, ref) => fs.existsSync(path.join(OUT, ref)) ? `${attr}="${ref}?v=${stamp(ref)}"` : m);
  fs.writeFileSync(file, htmlOut);
}

console.log(`Built _site/ with ${recipes.length} recipes (${recipes.filter(r => r.featured).length} on the home menu).`);
