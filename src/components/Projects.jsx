import { projects } from '../data/projects'
import ProjectCard, { FeaturedCard } from './ProjectCard'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-deep/12 blur-[130px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've designed and shipped"
          blurb="Eight projects, one throughline: I don't hand off a Figma file and walk away. Each of these went from a blank artboard to a working build."
        />

        <div className="mt-14 flex flex-col gap-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div data-reveal className="reveal mt-12 text-center">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/14 px-6 py-3.5 text-sm font-semibold text-paper transition hover:border-violet-brand/50 hover:bg-white/5"
          >
            Browse all repositories
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.9" className="transition group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
