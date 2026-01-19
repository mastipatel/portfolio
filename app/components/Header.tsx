export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-[rgba(10,12,10,0.8)] backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#about" className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rotate-12 rounded-[16px] border border-[rgba(143,230,74,0.35)] bg-[linear-gradient(145deg,rgba(143,230,74,0.15),rgba(17,19,17,0.95))] shadow-[0_14px_35px_rgba(0,0,0,0.5)]"></div>
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] border border-border bg-[linear-gradient(140deg,rgba(17,19,17,0.95),rgba(10,12,10,0.9))]">
              <span className="absolute inset-0 opacity-40">
                <span className="absolute -left-6 top-4 h-10 w-10 rounded-full bg-[rgba(143,230,74,0.12)] blur-md"></span>
                <span className="absolute -right-6 bottom-4 h-10 w-10 rounded-full bg-[rgba(143,230,74,0.08)] blur-md"></span>
              </span>
              <svg
                className="relative h-6 w-6"
                viewBox="0 0 100 100"
                role="img"
                aria-label="MP monogram"
              >
                <defs>
                  <linearGradient id="mp-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f2f2ec" />
                    <stop offset="100%" stopColor="#8fe64a" />
                  </linearGradient>
                </defs>
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fontFamily="Didot, 'Playfair Display', 'Times New Roman', serif"
                  fontSize="56"
                  letterSpacing="8"
                  fontWeight="600"
                  fill="url(#mp-grad)"
                >
                  MP
                </text>
              </svg>
            </div>
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-[rgba(143,230,74,0.6)] bg-[rgba(143,230,74,0.3)]"></span>
          </div>
          <span className="text-sm uppercase tracking-[0.3em] text-muted">Portfolio</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] text-muted md:flex">
          <li>
            <a href="#about" className="transition duration-300 hover:text-foreground">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="transition duration-300 hover:text-foreground">
              Education
            </a>
          </li>
          <li>
            <a href="#work" className="transition duration-300 hover:text-foreground">
              Work
            </a>
          </li>
          <li>
            <a href="#projects" className="transition duration-300 hover:text-foreground">
              Projects
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-[rgba(143,230,74,0.4)] bg-[rgba(19,23,19,0.9)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent transition duration-300 hover:border-accent hover:text-foreground"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
