document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Nav background after scrolling past the hero top
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Scroll-triggered reveals (once)
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("in-view");
      if (entry.target.classList.contains("stats")) animateCounts(entry.target);
      io.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
);
document.querySelectorAll(".reveal, .arc-divider").forEach((el) => io.observe(el));

// Count-up for stats
function animateCounts(scope) {
  scope.querySelectorAll(".count").forEach((el) => {
    const target = Number(el.dataset.target);
    if (reduceMotion) {
      el.textContent = target;
      return;
    }
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// Demo form: acknowledge without a backend
const form = document.querySelector(".reserve-form");
form?.addEventListener("submit", () => {
  const note = document.querySelector(".form-note");
  note.textContent = "접수되었습니다. 순서대로 연락드리겠습니다. (데모 페이지입니다)";
  form.reset();
});
