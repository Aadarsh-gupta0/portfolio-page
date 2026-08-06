import ProjectArt from './art/ProjectArt'

function Tag({ children }) {
  return (
    <li className="rounded-md border border-white/10 bg-white/4 px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </li>
  )
}

function StatusPill({ status }) {
  const tone =
    status === 'Live'
      ? 'border-aqua/40 bg-aqua/12 text-aqua'
      : status === 'In progress'
        ? 'border-amber-warm/40 bg-amber-warm/12 text-amber-warm'
        : 'border-white/14 bg-white/6 text-muted'
  return (
    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tone}`}>{status}</span>
  )
}

function Links({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-aqua transition hover:text-white"
        >
          Live demo
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.9" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M5.5 10.5 10.5 5.5M6.5 5.5h4v4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-1.5 text-muted transition hover:text-paper"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
        Source
      </a>
    </div>
  )
}

/** Wide, two-column treatment for the strongest projects. */
export function FeaturedCard({ project, flip }) {
  return (
    <article
      data-reveal
      className="reveal edge-lit group grid overflow-hidden rounded-3xl lg:grid-cols-2"
    >
      <div
        className={`relative aspect-[400/260] overflow-hidden lg:aspect-auto lg:min-h-[300px] ${
          flip ? 'lg:order-2' : ''
        }`}
      >
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
          <ProjectArt art={project.art} />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
        <div className="flex flex-wrap items-center gap-2.5">
          <StatusPill status={project.status} />
          <span className="font-mono text-xs text-muted/70">{project.year}</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-paper sm:text-[1.7rem]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-violet-soft">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>

        <div className="pt-1">
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}

/** Compact card for the rest of the grid. */
export default function ProjectCard({ project }) {
  return (
    <article
      data-reveal
      className="reveal edge-lit group flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[400/260] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]">
          <ProjectArt art={project.art} />
        </div>
        <div className="absolute top-3 right-3">
          <StatusPill status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-paper">{project.title}</h3>
          <p className="mt-1 text-sm text-violet-soft">{project.tagline}</p>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>

        <div className="border-t border-white/8 pt-4">
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}
