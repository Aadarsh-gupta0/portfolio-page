import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/8 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-violet-brand to-violet-deep text-sm font-bold text-white shadow-lg shadow-violet-brand/25">
            A
          </span>
          <span className="text-sm font-semibold tracking-tight text-paper/90 transition group-hover:text-white">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-white/12 px-3.5 py-2 text-sm font-medium text-paper/85 transition hover:border-violet-brand/50 hover:text-white sm:block"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-violet-brand px-4 py-2 text-sm font-semibold text-[#0b0910] shadow-lg shadow-violet-brand/25 transition hover:bg-violet-soft"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/12 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M3 3l10 10M13 3L3 13" /> : <path d="M2 5h12M2 11h12" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/8 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
