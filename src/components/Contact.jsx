import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_bottom,rgba(169,112,255,0.16),transparent_70%)]"
      />

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div data-reveal className="reveal">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-violet-brand uppercase">
            <span className="h-px w-6 bg-violet-brand/60" />
            Contact
            <span className="h-px w-6 bg-violet-brand/60" />
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Got something worth building?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            I'm looking for internships and freelance work where design and engineering aren't two
            separate jobs. If that sounds like your team, my inbox is open — and the résumé goes
            out to anyone who asks.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-brand px-7 py-4 text-sm font-semibold text-[#0b0910] shadow-xl shadow-violet-brand/25 transition hover:bg-violet-soft"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="1.5" y="3" width="13" height="10" rx="2" />
                <path d="m2 4.5 6 4 6-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/14 px-7 py-4 text-sm font-semibold text-paper transition hover:border-violet-brand/50 hover:bg-white/5"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              GitHub
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/14 px-7 py-4 text-sm font-semibold text-paper transition hover:border-violet-brand/50 hover:bg-white/5"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M3.4 5.5h2.3V14H3.4V5.5Zm1.15-3.7a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM7.3 5.5h2.2v1.17h.03c.31-.58 1.06-1.2 2.18-1.2 2.33 0 2.76 1.5 2.76 3.45V14h-2.3V9.38c0-1.1-.02-2.52-1.55-2.52-1.55 0-1.79 1.2-1.79 2.44V14H7.3V5.5Z" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
