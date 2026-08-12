import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (event) => {
      el.style.background = `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(34,211,238,0.055), transparent 65%)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      aria-hidden="true"
    />
  );
}
