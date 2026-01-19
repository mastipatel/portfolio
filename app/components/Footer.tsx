export default function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(17,19,17,0.85)] px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Masti Patel</p>
          <p className="mt-2 text-xs text-muted">
            Copyright {new Date().getFullYear()}.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          <a href="https://github.com/mastipatel" className="transition hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mastipatel" className="transition hover:text-foreground">
            LinkedIn
          </a>
          <a href="mailto:mastipatel172000@gmail.com" className="transition hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
