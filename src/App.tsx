const NAV_LINKS = ["Features", "Plans", "Security", "About"];

function Logo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="#1B133C"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Axon logo"
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
    </svg>
  );
}

export default function App() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-[130%] object-cover object-top"
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4"
          type="video/mp4"
        />
      </video>

      <header className="relative z-10 flex justify-center pt-4 md:pt-6">
        <nav className="flex items-center gap-6 bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-3 shadow-sm">
          <a href="#" aria-label="Axon home">
            <Logo />
          </a>
          <div className="hidden sm:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative z-10 mt-8 md:mt-16 flex flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium">
          <span className="flex w-5 h-5 items-center justify-center rounded bg-orange-500 font-bold text-white">
            Y
          </span>
          Funded by Y Combinator
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl">
          Deploy digital workers
          <br />
          for mundane workflows
        </h1>

        <p className="mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/70">
          Eliminate your tedious browser work and 10x your team's capacity. Put
          intelligent agents on every routine process so you grow faster and
          deliver more for clients — effortlessly.
        </p>

        <button
          type="button"
          className="mt-7 sm:mt-8 rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300"
        >
          Get Early Access
        </button>
      </div>
    </section>
  );
}
