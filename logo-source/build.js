const ot=require('opentype.js'), fs=require('fs');
const GV=ot.loadSync('GreatVibes-Regular.ttf'), SC=ot.loadSync('CormorantSC-SemiBold.ttf');
const OUT=__dirname+'/../site/brand/';
const C={g:'#56663f',ink:'#2d2a25',vine:'#56663f',tomato:'#b0674a',carrot:'#c8894a',mush:'#9c7a5e',stem:'#efe4d2',leaf:'#7d8f66',hi:'#fbf8f2'};
function word(font,str,x,y,size,track){let d='',cx=x;for(const ch of str){const gl=font.charToGlyph(ch);d+=gl.getPath(cx,y,size).toPathData(2);cx+=gl.advanceWidth*size/font.unitsPerEm+track;}return {d,w:cx-x-track};}
const L={ // layout params
  gx:150,gy:262,gs:300,
  the:{x:58,y:118,s:50,t:5}, reener:{x:364,y:252,s:76,t:6}, table:{x:420,y:352,s:50,t:7}
};
// G is drawn with a matching stroke so it reads slightly heavier than the raw font
const gStroke=(c,w)=>`stroke="${c}" stroke-width="${w}" stroke-linejoin="round"`;
function veg(X,Y){
 // tidy still life sitting on the vine: carrot behind, mushroom front left, tomato front right
 const st=`stroke="${C.ink}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;
 return `<g transform="translate(${X},${Y+2}) scale(1.12)">
 <g transform="translate(94,-90) rotate(-22)">
  <path d="M12 16 C6 4 -2 -2 -10 -2 C-6 6 2 12 12 16 Z M14 16 C12 2 16 -8 22 -14 C24 -4 20 8 14 16 Z M16 16 C24 6 32 2 40 4 C34 12 26 16 16 16 Z" fill="${C.leaf}" ${st}/>
  <path d="M1 16 C8 12 20 12 27 16 C24 40 19 66 14 92 C9 66 4 40 1 16 Z" fill="${C.carrot}" ${st}/>
  <path d="M7 34 L14 33 M9 52 L17 51" fill="none" stroke="${C.ink}" stroke-width="2" stroke-linecap="round" opacity=".55"/>
 </g>
 <g transform="translate(52,-66)">
  <path d="M4 34 C2 14 18 4 34 6 C50 2 70 16 68 36 C66 56 50 68 35 68 C18 68 6 54 4 34 Z" fill="${C.tomato}" ${st}/>
  <path d="M15 26 C17 19 22 15 28 14" fill="none" stroke="${C.hi}" stroke-width="3.2" stroke-linecap="round" opacity=".7"/>
  <path d="M35 12 L23 5 L30 14 L17 17 L32 18 L35 27 L38 18 L52 20 L41 13 L49 4 Z" fill="${C.leaf}" ${st}/>
  <path d="M36 8 C36 3 38 -1 42 -3" fill="none" ${st}/>
 </g>
 <g transform="translate(0,-60)">
  <path d="M18 30 C19 40 18 50 15 58 C22 61 34 61 40 58 C37 50 36 40 38 30" fill="${C.stem}" ${st}/>
  <path d="M0 30 C2 10 16 0 28 0 C42 0 56 10 58 28 C58 34 46 35 29 35 C12 35 0 35 0 30 Z" fill="${C.mush}" ${st}/>
  <path d="M12 12 C16 8 21 6 27 5" fill="none" stroke="${C.hi}" stroke-width="3" stroke-linecap="round" opacity=".6"/>
 </g></g>`;
}
function svg(mode){
 const g=GV.getPath('G',L.gx,L.gy,L.gs).toPathData(2);
 const the=word(SC,'The',L.the.x,L.the.y,L.the.s,L.the.t), re=word(SC,'reener',L.reener.x,L.reener.y,L.reener.s,L.reener.t), ta=word(SC,'Table',L.table.x,L.table.y,L.table.s,L.table.t);
 const ink=mode==='reverse'?'#fbf8f2':C.ink, gc=mode==='reverse'?'#dfe4d6':C.g;
 const X=L.reener.x+re.w+22, Y=300;
 // vine: a filled ribbon that grows out of the G crossbar at the same thickness and tapers toward the vegetables
 // a free-standing straight rule with a small curl at each end, clear of both the G and the mushroom
 const x0=408, x1=X-16, vy=301;
 const vine=`<path d="M${x0+10} ${vy} H${x1-10}
  M${x0+10} ${vy} C${x0+2} ${vy} ${x0-2} ${vy-4} ${x0} ${vy-8} C${x0+2} ${vy-12} ${x0+8} ${vy-11} ${x0+7} ${vy-7} C${x0+6} ${vy-4} ${x0+2} ${vy-5} ${x0+3} ${vy-7}
  M${x1-10} ${vy} C${x1-2} ${vy} ${x1+2} ${vy-4} ${x1} ${vy-8} C${x1-2} ${vy-12} ${x1-8} ${vy-11} ${x1-7} ${vy-7} C${x1-6} ${vy-4} ${x1-2} ${vy-5} ${x1-3} ${vy-7}"
  fill="none" stroke="${gc}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="36 4 ${X+175-36} 390" role="img" aria-label="The Greener Table">
 ${vine}
 <path d="${g}" fill="${gc}" ${gStroke(gc,4)}/>
 <path d="${the.d}${re.d}${ta.d}" fill="${ink}"/>
 ${veg(X,Y)}
</svg>`;
}
fs.writeFileSync(OUT+'logo.svg',svg());
function horiz(mode){
 const ink=mode==='reverse'?'#fbf8f2':C.ink, gc=mode==='reverse'?'#dfe4d6':C.g;
 const y=100, s=44, t=4;
 const the=word(SC,'The',0,y,s,t);
 const gx=the.w+10, gp=GV.getPath('G',gx,y+4,150), gb=gp.getBoundingBox();
 const re=word(SC,'reener',gx+110,y,s,t);
 const ta=word(SC,'Table',gx+110+re.w+22,y,s,t);
 const end=gx+110+re.w+22+ta.w;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-4} ${gb.y1-6} ${end+12} ${gb.y2-gb.y1+12}" role="img" aria-label="The Greener Table">
 <path d="${gp.toPathData(2)}" fill="${gc}" ${gStroke(gc,2.4)}/>
 <path d="${the.d}${re.d}${ta.d}" fill="${ink}"/>
</svg>`;}
fs.writeFileSync(OUT+'logo-horizontal.svg',horiz());
fs.writeFileSync(OUT+'logo-reverse.svg',svg('reverse'));
{const gp=GV.getPath('G',0,0,300),b=gp.getBoundingBox(),w=b.x2-b.x1,h=b.y2-b.y1,sz=Math.max(w,h)+60;
fs.writeFileSync(OUT+'monogram.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${sz} ${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${sz/2}" fill="#f6f1e8"/><path transform="translate(${(sz-w)/2-b.x1},${(sz-h)/2-b.y1})" d="${gp.toPathData(2)}" fill="${C.g}" ${gStroke(C.g,4)}/></svg>`);}
fs.writeFileSync(OUT+'logo-horizontal-reverse.svg',horiz('reverse'));
console.log('ok');
