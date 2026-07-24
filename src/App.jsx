import { useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
  CornerUpLeft,
  Menu,
  X,
  ArrowUpRight,
  FlaskConical,
  Leaf,
  Droplets,
  Sun,
} from "lucide-react";

const BG_IMAGE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_110248_b62f758d-f68c-4045-a7b4-91771d6d0a0f.png&w=1280&q=85";
const AVATAR =
  "https://polo-pecan-73837341.figma.site/_assets/v11/ca8093996e970200cbcf8bde8744175e52da5a79.png";
const CAPSULE_INLINE =
  "https://polo-pecan-73837341.figma.site/_assets/v11/6a7de4fbe9c9e2315040607320a9ff5e93117bf4.png";
const PRODUCT =
  "https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png";
const PANEL1_DECO =
  "https://polo-pecan-73837341.figma.site/_assets/v11/6736cbe6e26afa2cd7c04a91892a79f7640785b5.png";
const PANEL3_PRODUCT =
  "https://polo-pecan-73837341.figma.site/_assets/v11/30e8f38d1f993c357a3be2721557fc899d5640fc.png";

const NAV_LINKS = ["About", "Products", "Promotions", "Contact"];

const CARDS = [
  {
    Icon: FlaskConical,
    bg: "bg-black",
    text: "Experience our newly enhanced natural formula",
  },
  {
    Icon: Leaf,
    bg: "bg-emerald-800",
    text: "Pure organic ingredients sourced sustainably",
  },
  {
    Icon: Droplets,
    bg: "bg-cyan-800",
    text: "Advanced bioavailability for maximum absorption",
  },
  {
    Icon: Sun,
    bg: "bg-amber-700",
    text: "Clinically tested for daily energy & vitality",
  },
];

// overflow-hidden mask + span that slides/blurs up into view
function Word({ children, delay, dim = false }) {
  return (
    <span className="animate-word-reveal inline-block overflow-hidden align-bottom">
      <span
        className={dim ? "text-white/45" : "text-white"}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </span>
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % CARDS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: `url("${BG_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* NAVBAR */}
      <nav className="animate-fade-in relative z-20 flex items-center justify-between px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
        <a
          href="#"
          className="animate-slide-left delay-200 font-dm font-medium text-white"
          style={{ fontSize: "30px", letterSpacing: "-0.05em" }}
        >
          TerraElix
        </a>

        <div className="animate-fade-in delay-400 hidden items-center gap-8 lg:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-dm font-medium text-white/90 transition-colors hover:text-white"
              style={{ fontSize: "18px" }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="animate-slide-right delay-300 flex items-center gap-4 sm:gap-5 text-white">
          <button aria-label="Search" className="transition-opacity hover:opacity-70">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="transition-opacity hover:opacity-70">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Return" className="transition-opacity hover:opacity-70">
            <CornerUpLeft size={20} strokeWidth={1.5} />
          </button>
          <img
            src={AVATAR}
            alt="Account"
            className="h-8 w-8 rounded-full object-cover lg:h-10 lg:w-10"
          />
          <button
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {menuOpen && (
        <div className="animate-fade-in fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-black/90">
          <button
            aria-label="Close"
            className="absolute right-5 top-5 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-dm text-2xl font-medium text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* HERO CONTENT */}
      <section className="relative z-10 flex flex-1 flex-col justify-center px-5 sm:px-8 lg:px-10">
        <h1
          className="font-dm font-normal"
          style={{ letterSpacing: "-0.05em" }}
        >
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay={0.3}>The</Word> <Word delay={0.4}>Power</Word>{" "}
            <Word delay={0.5} dim>
              of
            </Word>
          </span>
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay={0.6} dim>
              Nature
            </Word>{" "}
            <Word delay={0.7} dim>
              in
            </Word>{" "}
            <Word delay={0.8}>Every</Word>
          </span>
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay={0.9}>Capsule</Word>
            <img
              src={CAPSULE_INLINE}
              alt=""
              aria-hidden="true"
              className="animate-scale-in delay-1000 ml-2 hidden align-middle sm:inline-block lg:ml-4"
              style={{ height: "clamp(60px, 10vw, 160px)", width: "auto" }}
            />
          </span>
        </h1>

        {/* CTA */}
        <div className="animate-fade-up delay-600 mt-8 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-8 lg:mt-[75px] lg:gap-[50px]">
          <a
            href="#"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-black font-inter font-medium text-white transition-opacity hover:opacity-90 sm:h-16 sm:w-[240px] md:w-[280px] lg:h-[72px] lg:w-[310px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Explore Now</span>
            <ArrowUpRight className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
          </a>
          <p
            className="max-w-[310px] font-inter font-normal text-sm text-white sm:text-base lg:text-lg"
            style={{ lineHeight: 1.45, letterSpacing: "-0.03em" }}
          >
            Discover our new plant-based supplements for daily balance and clean energy.
          </p>
        </div>
      </section>

      {/* MOBILE / TABLET PRODUCT IMAGE */}
      <div className="relative z-0 lg:hidden">
        <img
          src={PRODUCT}
          alt="TerraElix product"
          className="animate-scale-in delay-800 mx-auto w-[180%] max-w-[1296px] object-contain drop-shadow-2xl sm:w-[151%]"
          style={{ marginBottom: "-180px" }}
        />
      </div>

      {/* BOTTOM 3-PANEL GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
        {/* PANEL 1 */}
        <div className="animate-fade-up delay-900 relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#ECEDEC] p-6 sm:p-8 lg:p-10">
          <p
            className="relative z-10 max-w-[350px] font-dm font-normal text-2xl sm:text-[28px] lg:text-[35px]"
            style={{ lineHeight: 1.1, letterSpacing: "-0.05em" }}
          >
            Start your personalized path to natural balance
          </p>
          <a
            href="#"
            className="relative z-10 mt-6 inline-block font-inter font-normal text-base underline lg:text-lg"
            style={{ letterSpacing: "-0.03em" }}
          >
            Personal Assessment
          </a>
          <img
            src={PANEL1_DECO}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* PANEL 2 — auto-rotating carousel */}
        <div className="animate-fade-up delay-1000 flex min-h-[220px] flex-col justify-between bg-[#FEFDF9] p-6 sm:p-8 lg:p-10">
          <div className="relative flex-1">
            {CARDS.map(({ Icon, bg, text }, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "absolute inset-0 translate-y-4 opacity-0"
                }`}
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${bg}`}
                >
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.5} />
                </span>
                <p
                  className="font-inter font-normal text-sm text-black/80 sm:text-base lg:text-lg"
                  style={{ lineHeight: 1.2, letterSpacing: "-0.03em" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                  i === active ? "bg-black" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* PANEL 3 */}
        <div className="animate-fade-up delay-1100 flex min-h-[220px] items-center gap-4 bg-black p-6 sm:gap-6 sm:p-8 lg:p-10">
          <img
            src={PANEL3_PRODUCT}
            alt="TerraElix bottle"
            className="h-[82px] w-[120px] flex-shrink-0 object-contain sm:h-[110px] sm:w-[160px] lg:h-[142px] lg:w-[208px]"
          />
          <div>
            <p
              className="font-inter font-normal text-white text-2xl sm:text-3xl lg:text-[35px]"
              style={{ letterSpacing: "-0.05em" }}
            >
              +14K
            </p>
            <p
              className="mt-1 font-inter font-normal text-sm text-white/60 sm:text-base lg:text-lg"
              style={{ lineHeight: 1.2 }}
            >
              People have already optimized their wellness
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP FLOATING PRODUCT */}
      <img
        src={PRODUCT}
        alt=""
        aria-hidden="true"
        className="animate-scale-in delay-700 absolute z-0 hidden h-auto lg:block"
        style={{
          width: "clamp(600px, 80vw, 1412px)",
          bottom: "-10%",
          right: "clamp(-400px, -20vw, -100px)",
        }}
      />
    </div>
  );
}
