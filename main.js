document.getElementById("year").textContent = new Date().getFullYear();

if (typeof lucide !== "undefined") {
  lucide.createIcons({
    attrs: {
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  });
}

document.querySelector("[data-nav-search]")?.addEventListener("click", () => {
  document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
});

(function initScrollReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  const prefersReduced =
    typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -6% 0px",
      threshold: 0.08,
    }
  );

  nodes.forEach((el) => observer.observe(el));
})();

(function initSkyParallax() {
  const layers = document.querySelectorAll("[data-sky-parallax]");
  if (!layers.length) return;

  const prefersReduced =
    typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) return;

  let ticking = false;

  function update() {
    const y = window.scrollY || 0;
    layers.forEach((el) => {
      const speed = parseFloat(el.dataset.skyParallax || "0", 10);
      /* Descendo a página: camadas sobem (efeito “descida de avião”) */
      const offset = -y * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  update();
})();
