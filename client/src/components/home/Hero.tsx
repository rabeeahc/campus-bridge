import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            🌍 Built by international students
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Your guide to studying abroad.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            From visas and accommodation to banking, transport,
            food and university life. Campus Bridge helps you
            settle in with confidence.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button>
              Get Started →
            </Button>

            <Button variant="secondary">
              Explore Guides
            </Button>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Trusted by students building their future abroad.
          </p>

        </div>
      </Container>
    </section>
  );
}

export default Hero;