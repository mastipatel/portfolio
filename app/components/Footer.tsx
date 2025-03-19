export default function Footer() {
  return (
    <footer className="bg-primary text-primary p-6 w-full mt-8 font-bold">
      <div className="max-w-7xl mx-auto text-center">
        <p>© 2025 Masti Patel</p>
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="https://github.com/mastipatel"
            className="hover:text-primary transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mastipatel"
            className="hover:text-primary transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mastipatel172000@gmail.com"
            className="hover:text-primary transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
