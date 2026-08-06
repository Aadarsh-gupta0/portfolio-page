import { education, experience, profile } from '../data/profile'
import SectionHeading from './SectionHeading'

const DOTS = {
  violet: 'bg-violet-brand shadow-violet-brand/40',
  aqua: 'bg-aqua shadow-aqua/40',
  amber: 'bg-amber-warm shadow-amber-warm/40',
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-aqua/8 blur-[130px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been designing"
          blurb="Two campus chapters, both roles where the design work ships rather than sitting in a file."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* role timeline */}
          <ol className="relative flex flex-col gap-5">
            {experience.map((job) => (
              <li key={job.org} data-reveal className="reveal edge-lit relative rounded-2xl p-7">
                <span
                  className={`absolute top-8 -left-px h-10 w-1 rounded-r-full ${DOTS[job.accent]} shadow-lg`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-paper">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-violet-soft">{job.org}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        className={`mt-2 h-1 w-1 shrink-0 rounded-full ${DOTS[job.accent]}`}
                        aria-hidden
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          {/* education */}
          <div data-reveal className="reveal edge-lit flex flex-col rounded-2xl p-7">
            <span className="font-mono text-xs tracking-widest text-aqua uppercase">Education</span>

            <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
              {education.degree}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-violet-soft">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {education.period} · {education.place}
            </p>

            <p className="mt-6 text-xs font-medium tracking-wide text-muted uppercase">
              Relevant coursework
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {education.coursework.map((c) => (
                <li
                  key={c}
                  className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <a
                href={profile.resumeRequest}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/14 px-5 py-3.5 text-sm font-semibold text-paper transition hover:border-violet-brand/50 hover:bg-white/5"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="1.5" y="3" width="13" height="10" rx="2" />
                  <path d="m2 4.5 6 4 6-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Request résumé
              </a>
              <p className="mt-2.5 text-center text-xs text-muted/70">
                Sent on request — just say hello.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
