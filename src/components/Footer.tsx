export default function Footer() {
  return (
    <footer className="bg-black text-white/50 py-8 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Michael Dane Lewis. All rights reserved.</p>
        <a
          href="#hero"
          className="hover:text-white transition-colors duration-200"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
