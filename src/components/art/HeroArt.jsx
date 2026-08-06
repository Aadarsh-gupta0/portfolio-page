/**
 * Hero centrepiece. The composition is the thesis of the whole site:
 * a design surface on the left, a code surface on the right, and a live
 * path carrying something between them.
 */
export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 460 460"
      className="h-full w-full"
      role="img"
      aria-label="Abstract illustration of a design canvas connected to a code editor"
    >
      <defs>
        <radialGradient id="ha-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8a4ff" />
          <stop offset="55%" stopColor="#a970ff" />
          <stop offset="100%" stopColor="#6d3fd4" />
        </radialGradient>
        <radialGradient id="ha-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a970ff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a970ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ha-wire" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4adede" />
          <stop offset="50%" stopColor="#a970ff" />
          <stop offset="100%" stopColor="#ffb86b" />
        </linearGradient>
        <linearGradient id="ha-panel" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <circle cx="230" cy="230" r="215" fill="url(#ha-halo)" />

      {/* orbit rings */}
      <g fill="none" stroke="#a970ff" strokeOpacity="0.22">
        <circle cx="230" cy="230" r="196" strokeDasharray="2 12" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 230 230"
            to="360 230 230"
            dur="60s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="230" cy="230" r="158" strokeOpacity="0.14" />
        <ellipse cx="230" cy="230" rx="196" ry="76" strokeOpacity="0.16" transform="rotate(-22 230 230)" />
      </g>

      {/* connective wire: design → code */}
      <path
        id="ha-path"
        d="M120 268 C 172 214, 196 300, 230 230 S 292 152, 344 196"
        fill="none"
        stroke="url(#ha-wire)"
        strokeOpacity="0.85"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle r="5" fill="#fff">
        <animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ha-path" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" dur="5.5s" repeatCount="indefinite" />
      </circle>

      {/* LEFT — design canvas with a bezier node */}
      <g transform="translate(48 178)">
        <rect width="146" height="122" rx="14" fill="url(#ha-panel)" stroke="#fff" strokeOpacity="0.16" />
        <text x="14" y="24" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#c8a4ff" fillOpacity="0.8">
          canvas
        </text>
        <path
          d="M22 92 C 52 40, 88 108, 124 52"
          fill="none"
          stroke="#c8a4ff"
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* bezier handles */}
        <g stroke="#4adede" strokeOpacity="0.7" strokeWidth="1.2">
          <line x1="22" y1="92" x2="52" y2="52" />
          <line x1="124" y1="52" x2="94" y2="90" />
        </g>
        {[
          [22, 92],
          [124, 52],
        ].map(([x, y], i) => (
          <rect key={i} x={x - 4.5} y={y - 4.5} width="9" height="9" fill="#0b0910" stroke="#4adede" strokeWidth="1.8" />
        ))}
        {[
          [52, 52],
          [94, 90],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="#4adede" fillOpacity="0.9" />
        ))}
        {/* swatches */}
        {['#a970ff', '#4adede', '#ffb86b'].map((c, i) => (
          <circle key={c} cx={20 + i * 16} cy={108} r="5" fill={c} fillOpacity="0.9" />
        ))}
      </g>

      {/* RIGHT — code editor */}
      <g transform="translate(266 132)">
        <rect width="146" height="128" rx="14" fill="url(#ha-panel)" stroke="#fff" strokeOpacity="0.16" />
        <g fill="#ff6b6b" fillOpacity="0.7">
          <circle cx="16" cy="16" r="3.5" />
          <circle cx="28" cy="16" r="3.5" fill="#ffb86b" />
          <circle cx="40" cy="16" r="3.5" fill="#3ddc97" />
        </g>
        {[
          [14, 0, 54, '#a970ff'],
          [24, 12, 78, '#ffffff'],
          [24, 12, 46, '#4adede'],
          [34, 24, 62, '#ffffff'],
          [24, 12, 70, '#ffb86b'],
          [14, 0, 38, '#a970ff'],
        ].map(([_, indent, w, c], i) => (
          <g key={i}>
            <text
              x="10"
              y={44 + i * 15}
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              fill="#fff"
              fillOpacity="0.2"
            >
              {i + 1}
            </text>
            <rect
              x={26 + indent}
              y={38 + i * 15}
              width={w}
              height="6"
              rx="3"
              fill={c}
              fillOpacity={c === '#ffffff' ? 0.28 : 0.75}
            />
          </g>
        ))}
      </g>

      {/* core */}
      <g>
        <circle cx="230" cy="230" r="26" fill="url(#ha-core)" />
        <circle cx="230" cy="230" r="26" fill="none" stroke="#c8a4ff" strokeOpacity="0.6" strokeWidth="1.5">
          <animate attributeName="r" values="26;54;26" dur="4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
        <path
          d="M230 214 L242 230 L230 246 L218 230 Z"
          fill="#0b0910"
          fillOpacity="0.55"
        />
      </g>
    </svg>
  )
}
