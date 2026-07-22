import Button from "../ui/Button";
import Container from "../ui/Container";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌉</span>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Campus Bridge
              </h1>

              <p className="text-xs text-slate-500">
                Study abroad made easier
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Explore
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Community
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Universities
            </a>
          </nav>

          <Button>Get Started →</Button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;