import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("reveal-visible");
    };

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) {
        reveal();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);

    if (el.getBoundingClientRect().top < (window.innerHeight || 0)) {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onScroll);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
