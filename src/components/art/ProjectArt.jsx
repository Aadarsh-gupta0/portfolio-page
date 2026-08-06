import { useId } from 'react'

/**
 * Generated cover art — one composition per project, no image files.
 * Each motif abstracts what the project actually does, so the thumbnail
 * carries meaning instead of being decorative filler.
 *
 * Gradient/filter ids are namespaced with useId() so multiple cards can
 * render on the same page without clobbering each other's defs.
 */

const W = 400
const H = 260

function Frame({ uid, from, to, children, glow = '#a970ff' }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      role="presentation"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${uid}-grid`} width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width={W} height={H} fill={`url(#${uid}-bg)`} />
      <rect width={W} height={H} fill={`url(#${uid}-grid)`} />
      <ellipse cx={W * 0.5} cy={H * 0.42} rx={190} ry={130} fill={`url(#${uid}-glow)`} />
      {children}
    </svg>
  )
}

/* ── job_app: a stack of opportunity cards being swept by a search pass ── */
function Listings({ uid }) {
  return (
    <Frame uid={uid} from="#1a1030" to="#0b0916" glow="#a970ff">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${64 + i * 10} ${58 + i * 46})`} opacity={1 - i * 0.22}>
          <rect
            width="272"
            height="38"
            rx="10"
            fill="#ffffff"
            fillOpacity={0.07 - i * 0.015}
            stroke="#a970ff"
            strokeOpacity={0.4 - i * 0.1}
          />
          <rect x="12" y="11" width="16" height="16" rx="5" fill="#a970ff" fillOpacity="0.75" />
          <rect x="38" y="12" width="96" height="6" rx="3" fill="#fff" fillOpacity="0.5" />
          <rect x="38" y="23" width="58" height="5" rx="2.5" fill="#fff" fillOpacity="0.22" />
          <rect
            x="216"
            y="13"
            width="44"
            height="13"
            rx="6.5"
            fill="#4adede"
            fillOpacity={0.22 - i * 0.05}
          />
        </g>
      ))}
      {/* search pass */}
      <circle cx="312" cy="64" r="26" fill="none" stroke="#4adede" strokeOpacity="0.7" strokeWidth="2.5" />
      <path d="M331 83 L352 104" stroke="#4adede" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="312" cy="64" r="26" fill="none" stroke="#4adede" strokeOpacity="0.35" strokeWidth="1.5">
        <animate attributeName="r" values="26;44;26" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.35;0;0.35" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </Frame>
  )
}

/* ── Kinesis: a small network firing, over a motion waveform ── */
function Neural({ uid }) {
  const layers = [
    [70, [70, 130, 190]],
    [170, [56, 106, 156, 206]],
    [270, [86, 146]],
    [340, [116]],
  ]
  const edges = []
  for (let l = 0; l < layers.length - 1; l++) {
    layers[l][1].forEach((y1) =>
      layers[l + 1][1].forEach((y2) => edges.push([layers[l][0], y1, layers[l + 1][0], y2])),
    )
  }
  return (
    <Frame uid={uid} from="#06181d" to="#0a0a18" glow="#4adede">
      <path
        d="M0 214 Q 24 190 44 214 T 88 214 T 132 200 T 176 226 T 220 206 T 264 214 T 308 194 T 352 218 T 400 210"
        fill="none"
        stroke="#4adede"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      {edges.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#4adede"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
      ))}
      {layers.map(([x, ys], li) =>
        ys.map((y, i) => (
          <circle key={`${li}-${i}`} cx={x} cy={y} r={li === 3 ? 9 : 6} fill={li === 3 ? '#a970ff' : '#4adede'} fillOpacity={li === 3 ? 0.95 : 0.8}>
            <animate
              attributeName="fill-opacity"
              values={li === 3 ? '0.95;0.55;0.95' : '0.8;0.3;0.8'}
              dur={`${2.4 + ((li + i) % 3) * 0.6}s`}
              repeatCount="indefinite"
            />
          </circle>
        )),
      )}
    </Frame>
  )
}

/* ── Pathfinder: a station graph with the winning route lit up ── */
function GraphArt({ uid }) {
  const nodes = [
    [52, 190],
    [118, 104],
    [150, 214],
    [222, 152],
    [268, 68],
    [318, 200],
    [356, 112],
  ]
  const dim = [
    [0, 2],
    [2, 3],
    [1, 4],
    [3, 5],
    [4, 6],
    [2, 5],
  ]
  const path = [0, 1, 3, 6]
  return (
    <Frame uid={uid} from="#1d1206" to="#0b0912" glow="#ffb86b">
      {dim.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#fff"
          strokeOpacity="0.16"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
      ))}
      <polyline
        points={path.map((i) => nodes[i].join(',')).join(' ')}
        fill="none"
        stroke="#ffb86b"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="440"
        strokeDashoffset="440"
      >
        <animate attributeName="stroke-dashoffset" from="440" to="0" dur="2.6s" repeatCount="indefinite" />
      </polyline>
      {nodes.map(([x, y], i) => {
        const on = path.includes(i)
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={on ? 8 : 5.5} fill={on ? '#ffb86b' : '#ffffff'} fillOpacity={on ? 1 : 0.32} />
            {on && <circle cx={x} cy={y} r="8" fill="none" stroke="#ffb86b" strokeOpacity="0.4" strokeWidth="1.5" />}
          </g>
        )
      })}
    </Frame>
  )
}

/* ── CampusFeed: a month grid spilling into event cards ── */
function Feed({ uid }) {
  return (
    <Frame uid={uid} from="#160f2c" to="#090a16" glow="#c8a4ff">
      <g transform="translate(44 52)">
        <rect width="146" height="158" rx="12" fill="#fff" fillOpacity="0.06" stroke="#c8a4ff" strokeOpacity="0.3" />
        <rect x="0" y="0" width="146" height="26" rx="12" fill="#c8a4ff" fillOpacity="0.18" />
        <rect x="14" y="10" width="46" height="6" rx="3" fill="#fff" fillOpacity="0.55" />
        {Array.from({ length: 20 }).map((_, i) => {
          const hot = [6, 9, 15].includes(i)
          return (
            <rect
              key={i}
              x={14 + (i % 5) * 24}
              y={40 + Math.floor(i / 5) * 26}
              width="16"
              height="16"
              rx="4"
              fill={hot ? '#a970ff' : '#ffffff'}
              fillOpacity={hot ? 0.9 : 0.12}
            />
          )
        })}
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(216 ${58 + i * 52})`}>
          <rect width="142" height="42" rx="10" fill="#fff" fillOpacity="0.07" stroke="#fff" strokeOpacity="0.12" />
          <rect x="0" y="0" width="4" height="42" rx="2" fill={['#a970ff', '#4adede', '#ffb86b'][i]} />
          <rect x="16" y="12" width="76" height="6" rx="3" fill="#fff" fillOpacity="0.5" />
          <rect x="16" y="24" width="46" height="5" rx="2.5" fill="#fff" fillOpacity="0.22" />
        </g>
      ))}
    </Frame>
  )
}

/* ── Pokémon To-Do: three columns, one card caught mid-drag ── */
function Kanban({ uid }) {
  const cols = [
    { x: 34, tint: '#57d97d', n: 3 },
    { x: 148, tint: '#4adede', n: 2 },
    { x: 262, tint: '#ff7a5c', n: 2 },
  ]
  return (
    <Frame uid={uid} from="#0f1c14" to="#0a0a15" glow="#57d97d">
      {cols.map((c, ci) => (
        <g key={ci} transform={`translate(${c.x} 44)`}>
          <rect width="104" height="176" rx="12" fill="#fff" fillOpacity="0.05" stroke={c.tint} strokeOpacity="0.28" />
          <rect x="14" y="14" width="44" height="6" rx="3" fill={c.tint} fillOpacity="0.85" />
          {Array.from({ length: c.n }).map((_, i) => (
            <g key={i} transform={`translate(12 ${34 + i * 44})`}>
              <rect width="80" height="34" rx="8" fill="#fff" fillOpacity="0.09" />
              <circle cx="14" cy="12" r="5" fill={c.tint} fillOpacity="0.9" />
              <rect x="26" y="9" width="42" height="5" rx="2.5" fill="#fff" fillOpacity="0.45" />
              <rect x="26" y="20" width="26" height="4" rx="2" fill="#fff" fillOpacity="0.2" />
            </g>
          ))}
        </g>
      ))}
      {/* the dragged card, tilted and lifted */}
      <g transform="translate(196 150) rotate(-7)">
        <rect width="86" height="36" rx="8" fill="#141024" stroke="#ffb86b" strokeOpacity="0.9" strokeWidth="1.5" />
        <circle cx="16" cy="13" r="5.5" fill="#ffb86b" />
        <rect x="28" y="10" width="44" height="5" rx="2.5" fill="#fff" fillOpacity="0.6" />
        <rect x="28" y="21" width="28" height="4" rx="2" fill="#fff" fillOpacity="0.28" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="196 150; 196 138; 196 150"
          dur="3s"
          additive="sum"
          repeatCount="indefinite"
        />
      </g>
    </Frame>
  )
}

/* ── Zerodha: candlesticks with a trend overlay ── */
function Candles({ uid }) {
  const bars = [
    [46, 150, 190, 158, 182],
    [78, 128, 176, 140, 168],
    [110, 136, 184, 146, 172],
    [142, 100, 150, 112, 142],
    [174, 108, 158, 118, 148],
    [206, 74, 128, 86, 120],
    [238, 90, 140, 100, 132],
    [270, 58, 112, 68, 104],
    [302, 70, 124, 80, 116],
    [334, 44, 100, 54, 92],
  ]
  return (
    <Frame uid={uid} from="#061a14" to="#0a0a16" glow="#4adede">
      {bars.map(([x, hi, lo, ot, ob], i) => {
        const up = i % 3 !== 1
        const c = up ? '#3ddc97' : '#ff6b6b'
        return (
          <g key={i}>
            <line x1={x} y1={hi} x2={x} y2={lo} stroke={c} strokeOpacity="0.55" strokeWidth="1.5" />
            <rect x={x - 6} y={ot} width="12" height={ob - ot} rx="2" fill={c} fillOpacity="0.85" />
          </g>
        )
      })}
      <polyline
        points={bars.map(([x, , , ot]) => `${x},${ot - 12}`).join(' ')}
        fill="none"
        stroke="#4adede"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="24" y1="220" x2="376" y2="220" stroke="#fff" strokeOpacity="0.14" strokeWidth="1" />
    </Frame>
  )
}

/* ── Smart Home: a roofline with live device toggles ── */
function HomeArt({ uid }) {
  return (
    <Frame uid={uid} from="#221405" to="#0b0913" glow="#ffb86b">
      <path
        d="M118 128 L200 66 L282 128 L282 206 L118 206 Z"
        fill="#fff"
        fillOpacity="0.06"
        stroke="#ffb86b"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M104 136 L200 56 L296 136" fill="none" stroke="#ffb86b" strokeOpacity="0.9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="184" y="160" width="32" height="46" rx="4" fill="#ffb86b" fillOpacity="0.22" stroke="#ffb86b" strokeOpacity="0.5" />
      {[
        [56, 84, '#4adede', true],
        [56, 148, '#a970ff', false],
        [318, 84, '#a970ff', true],
        [318, 148, '#4adede', true],
      ].map(([x, y, tint, on], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect width="42" height="24" rx="12" fill={on ? tint : '#ffffff'} fillOpacity={on ? 0.35 : 0.1} stroke={tint} strokeOpacity="0.6" />
          <circle cx={on ? 30 : 12} cy="12" r="8" fill={tint} fillOpacity={on ? 1 : 0.4} />
        </g>
      ))}
      <circle cx="200" cy="112" r="10" fill="#ffb86b" fillOpacity="0.9" />
      <circle cx="200" cy="112" r="10" fill="none" stroke="#ffb86b" strokeOpacity="0.5" strokeWidth="1.5">
        <animate attributeName="r" values="10;24;10" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </Frame>
  )
}

/* ── OMFED: editorial spread with a drop cap ── */
function Editorial({ uid }) {
  return (
    <Frame uid={uid} from="#1c1526" to="#0a0912" glow="#c8a4ff">
      <rect x="40" y="40" width="150" height="180" rx="8" fill="#efecf8" fillOpacity="0.09" stroke="#efecf8" strokeOpacity="0.18" />
      <text
        x="62"
        y="118"
        fontFamily="Outfit, sans-serif"
        fontSize="72"
        fontWeight="700"
        fill="#c8a4ff"
        fillOpacity="0.9"
      >
        O
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="62" y={140 + i * 16} width={i === 3 ? 62 : 106} height="6" rx="3" fill="#fff" fillOpacity="0.22" />
      ))}
      <rect x="210" y="40" width="150" height="86" rx="8" fill="#c8a4ff" fillOpacity="0.16" stroke="#c8a4ff" strokeOpacity="0.35" />
      <circle cx="285" cy="83" r="26" fill="#c8a4ff" fillOpacity="0.3" />
      <circle cx="285" cy="83" r="14" fill="#ffb86b" fillOpacity="0.7" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="210" y={144 + i * 16} width={i === 4 ? 88 : 150} height="6" rx="3" fill="#fff" fillOpacity="0.18" />
      ))}
    </Frame>
  )
}

const REGISTRY = {
  listings: Listings,
  neural: Neural,
  graph: GraphArt,
  feed: Feed,
  kanban: Kanban,
  candles: Candles,
  home: HomeArt,
  editorial: Editorial,
}

export default function ProjectArt({ art }) {
  const uid = useId().replace(/:/g, '')
  const Art = REGISTRY[art] ?? Listings
  return <Art uid={uid} />
}
