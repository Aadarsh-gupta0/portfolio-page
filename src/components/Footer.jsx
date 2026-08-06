import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Designed and built in the same week.
        </p>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href="#top" className="transition hover:text-paper">
            Back to top
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-paper"
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-paper">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
