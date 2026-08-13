import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const handleMove = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(34,211,238,0.055), transparent 65%)`;
        frame = 0;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      aria-hidden="true"
    />
  );
}
