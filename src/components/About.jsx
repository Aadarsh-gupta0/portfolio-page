import SectionHeading from './SectionHeading'

const BEATS = [
  {
    k: '01',
    title: 'Design first, but never only design',
    body: 'I start in Figma — type scale, spacing, states, the whole system. Then I build it myself, which means the handoff problem simply never happens.',
    tint: 'violet',
  },
  {
    k: '02',
    title: 'Ship it, then make it good',
    body: 'Most of my projects started as hackathon builds or itches I needed scratched. Getting something working end-to-end teaches more than a perfect plan does.',
    tint: 'aqua',
  },
  {
    k: '03',
    title: 'Currently levelling up',
    body: 'Backend architecture with Spring Boot and Go, and pushing Flutter further than toy apps — real state management, real API layers, real offline behaviour.',
    tint: 'amber',
  },
]

const TINTS = {
  violet: 'text-violet-brand border-violet-brand/30 bg-violet-brand/10',
  aqua: 'text-aqua border-aqua/30 bg-aqua/10',
  amber: 'text-amber-warm border-amber-warm/30 bg-amber-warm/10',
}

export default function About() {
  return (
    <section id="about" className="relative border-y border-white/6 bg-ink-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="I sit between the design file and the repo"
          blurb="A 3rd year B.Tech student at KIIT, part of GDG KIIT, and generally the person on a team who both argues about padding and then writes the component."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {BEATS.map((b) => (
            <div key={b.k} data-reveal className="reveal edge-lit rounded-2xl p-7">
              <span
                className={`inline-grid h-10 w-10 place-items-center rounded-xl border font-mono text-sm font-semibold ${TINTS[b.tint]}`}
              >
                {b.k}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-paper">{b.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
