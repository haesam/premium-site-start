const nav = document.getElementById("nav");

const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "0px 0px -100px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
