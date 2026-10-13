# Generates site/assets/vine-frame.svg: a hand-drawn style vine that traces the arched
# Stacy and Noah photo. Geometry matches .vine-wrap in styles.css (860 x 680 box,
# photo at 50,50 sized 760 x 570 with a 380 x 171 elliptical arch on top).
import math, random
random.seed(7)
G = '#5f7147'          # the green of the G in the logo
W, H = 860, 680
CX, CY, RX, RY = 430, 221, 394, 185   # arch ellipse, 14px outside the photo
LEFT, RIGHT, BOTTOM = 36, 824, 634

# Dense outline, clockwise: up the left side, over the arch, down the right, back along the bottom.
pts = [(LEFT, y) for y in range(BOTTOM, CY, -1)]
pts += [(CX + RX * math.cos(math.pi - a), CY - RY * math.sin(math.pi - a))
        for a in [i * math.pi / 900 for i in range(901)]]
pts += [(RIGHT, y) for y in range(CY, BOTTOM)]
pts += [(x, BOTTOM) for x in range(RIGHT, LEFT - 1, -1)]

seg, total = [0.0], 0.0
for (x1, y1), (x2, y2) in zip(pts, pts[1:]):
    total += math.hypot(x2 - x1, y2 - y1); seg.append(total)

def at(s):
    s %= total
    lo, hi = 0, len(seg) - 1
    while hi - lo > 1:
        mid = (lo + hi) // 2
        if seg[mid] <= s: lo = mid
        else: hi = mid
    (x1, y1), (x2, y2) = pts[lo], pts[hi]
    d = math.hypot(x2 - x1, y2 - y1) or 1
    tx, ty = (x2 - x1) / d, (y2 - y1) / d
    return x1, y1, tx, ty, ty, -tx          # point, tangent, outward normal

AMP, PERIOD = 5, 74
def vine(s):
    x, y, tx, ty, nx, ny = at(s)
    o = AMP * math.sin(2 * math.pi * s / PERIOD)
    return x + nx * o, y + ny * o, tx, ty, nx, ny

d = 'M' + ' L'.join('%.1f,%.1f' % vine(s)[:2] for s in [i * 3 for i in range(int(total / 3) + 1)]) + ' Z'
out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d">' % (W, H),
       '<g fill="none" stroke="%s" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' % G,
       '<path d="%s"/>' % d]

def deg(x, y): return math.degrees(math.atan2(y, x))

# Leaves: mostly outward, a few small ones tucked inward.
s, side = 10.0, 1
while s < total - 20:
    x, y, tx, ty, nx, ny = vine(s)
    out_side = side > 0 or random.random() < 0.35
    sign = 1 if out_side else -1
    length = random.uniform(19, 26) if out_side else random.uniform(11, 14)
    tilt = random.uniform(38, 58)
    ang = deg(tx, ty) + (-tilt if sign > 0 else tilt)
    w = length * 0.42
    out.append('<g transform="translate(%.1f %.1f) rotate(%.1f)"><path d="M0,0 Q%.1f,%.1f %.1f,0 Q%.1f,%.1f 0,0 Z" fill="%s" fill-opacity="0.85"/><path d="M2,0 L%.1f,0" stroke="#fbf8f2" stroke-width="0.9"/></g>'
               % (x, y, ang, length * 0.45, -w, length, length * 0.55, w, G, length * 0.75))
    side = -side
    s += random.uniform(34, 46)

# Curly tendrils, always outward.
s = 60.0
while s < total - 40:
    x, y, tx, ty, nx, ny = vine(s)
    flip = random.choice([1, -1])
    ang = deg(nx, ny)
    out.append('<path transform="translate(%.1f %.1f) rotate(%.1f) scale(1 %d)" d="M0,0 C8,-2 16,4 18,12 C20,20 12,24 8,19 C5,15 9,11 12,14" stroke-width="1.6"/>'
               % (x, y, ang, flip))
    s += random.uniform(150, 210)

# Little five-petal blossoms sitting on the vine.
s = 130.0
while s < total - 40:
    x, y, tx, ty, nx, ny = vine(s)
    x, y = x + nx * 9, y + ny * 9
    r = random.uniform(5.5, 7)
    petals = ''.join('<ellipse cx="0" cy="%.1f" rx="%.1f" ry="%.1f" transform="rotate(%d)"/>' % (-r, r * 0.55, r * 0.85, k * 72) for k in range(5))
    out.append('<g transform="translate(%.1f %.1f) rotate(%d)" fill="#fbf8f2" stroke-width="1.5">%s<circle r="%.1f" fill="%s" stroke="none"/></g>'
               % (x, y, random.randint(0, 72), petals, r * 0.38, G))
    s += random.uniform(190, 260)

out.append('</g></svg>')
open('site/assets/vine-frame.svg', 'w').write('\n'.join(out) + '\n')
print('total length %.0f' % total)
