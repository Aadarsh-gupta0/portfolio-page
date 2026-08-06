import { skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

const ACCENTS = {
  violet: { dot: 'bg-violet-brand', ring: 'group-hover:border-violet-brand/40' },
  aqua: { dot: 'bg-aqua', ring: 'group-hover:border-aqua/40' },
  amber: { dot: 'bg-amber-warm', ring: 'group-hover:border-amber-warm/40' },
}

// Doubled so the marquee can loop seamlessly at -50%.
const TICKER = [
  'Figma',
  'React',
  'Flutter',
  'Next.js',
  'Go',
  'Node.js',
  'Tailwind',
  'MongoDB',
  'Dart',
  'Flask',
  'Spring Boot',
  'MySQL',
  'Riverpod',
  'Express',
]

export default function Skills() {
  return (
    <section id="stack" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Stack"
          title="What I build with"
          blurb="Tools I reach for without thinking, grouped by where they sit in the pipeline."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g) => {
            const a = ACCENTS[g.accent]
            return (
              <div
                key={g.title}
                data-reveal
                className={`reveal edge-lit group rounded-2xl p-7 transition ${a.ring}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  <h3 className="text-sm font-semibold tracking-wide text-paper uppercase">
                    {g.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/4 px-3 py-1.5 text-sm text-paper/80 transition hover:border-white/20 hover:text-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* infinite ticker */}
      <div
        className="relative mt-16 flex overflow-hidden border-y border-white/6 py-5 select-none"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-ink-950 to-transparent" />
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10">
              <span className="font-mono text-lg font-medium text-muted/45 whitespace-nowrap">{t}</span>
              <span className="h-1 w-1 shrink-0 rounded-full bg-violet-brand/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
