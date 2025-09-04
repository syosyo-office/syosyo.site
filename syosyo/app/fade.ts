// app/fade.ts
export function initFade() {
  // 1) body フェードイン：既に読み込み済みでも必ず loaded を付与
  const applyLoaded = () => document.body.classList.add("loaded");

  if (document.readyState === "complete") {
    // すでに load 済み
    requestAnimationFrame(applyLoaded);
  } else {
    // これから load される
    window.addEventListener("load", applyLoaded, { once: true });
  }

  // 2) .fade-in 要素のフェード表示
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,             // 触れたら即表示
      rootMargin: "0px 0px -5% 0px", // ほんの少し早めに表示
    }
  );

  // すでにビューポートにいる要素もケア
  const els = Array.from(document.querySelectorAll<HTMLElement>(".fade-in"));
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    const inView = r.top < window.innerHeight && r.bottom > 0;
    if (inView) {
      el.classList.add("visible");
    } else {
      obs.observe(el);
    }
  });
}