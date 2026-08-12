import { useReveal } from "../lib/useReveal";

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
