import { profile, stats } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'
import HeroArt from './art/HeroArt'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-violet-deep/25 blur-[120px] animate-drift" />
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-aqua/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(169,112,255,0.10),transparent_60%)]" />
        <div className="grain-overlay absolute inset-0 opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-brand/30 bg-violet-brand/10 px-3.5 py-1.5 text-xs font-medium text-violet-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
            </span>
            Open to internships &amp; freelance
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-[4.1rem]">
            <span className="text-gradient">{profile.tagline}</span>
          </h1>

          <p className="mt-5 font-mono text-base text-muted sm:text-lg">
            <span className="text-violet-soft">{profile.first}</span>
            <span className="text-muted/50"> — </span>
            <span className="text-paper">{typed}</span>
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.18em] bg-aqua animate-blink" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {profile.blurb}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-brand px-6 py-3.5 text-sm font-semibold text-[#0b0910] shadow-xl shadow-violet-brand/25 transition hover:bg-violet-soft"
            >
              See my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition group-hover:translate-x-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/14 px-6 py-3.5 text-sm font-semibold text-paper transition hover:border-violet-brand/50 hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-violet-brand">
                <path d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8Z" />
                <circle cx="8" cy="6" r="1.8" />
              </svg>
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-aqua">
                <rect x="2.5" y="5" width="11" height="8.5" rx="1.5" />
                <path d="M5.75 5V3.5A1 1 0 0 1 6.75 2.5h2.5a1 1 0 0 1 1 1V5" />
              </svg>
              {profile.org}
            </span>
          </div>
        </div>

        {/* hero art */}
        <div className="relative mx-auto w-full max-w-md animate-float lg:max-w-none">
          <HeroArt />
        </div>
      </div>

      {/* stats strip */}
      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8 lg:mt-20">
        <dl className="edge-lit grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/2 px-6 py-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-paper">{s.value}</span>
                <span className="mt-1 block text-xs font-medium tracking-wide text-muted uppercase">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
