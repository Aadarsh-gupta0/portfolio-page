export default function SectionHeading({ eyebrow, title, blurb, align = 'left' }) {
  return (
    <div data-reveal className={`reveal ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-violet-brand uppercase">
        <span className="h-px w-6 bg-violet-brand/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-paper sm:text-4xl">{title}</h2>
      {blurb && <p className="mt-4 text-base leading-relaxed text-muted">{blurb}</p>}
    </div>
  )
}
