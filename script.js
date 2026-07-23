const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 헤더: 스크롤 시 배경 블러
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// 스크롤 진입 시 fade-in (한 번만)
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "0px 0px -100px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// 히어로 치아 라인 드로잉
if (!reduceMotion) {
  document.querySelectorAll(".tooth-svg .draw").forEach((path, i) => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    path.style.animation = `drawIn 1.6s ${0.3 + i * 0.35}s cubic-bezier(0.22, 1, 0.36, 1) forwards`;
  });
}

// 모바일 메뉴
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);
