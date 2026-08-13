import { useCallback, useEffect, useState } from "react";

export function useCarousel({ items, perView = 1, autoplay = 0 }) {
  const total = items.length;
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (i) => setOffset(((i % total) + total) % total),
    [total]
  );

  const prev = useCallback(
    () => setOffset((current) => ((current - 1) % total + total) % total),
    [total]
  );

  const next = useCallback(
    () => setOffset((current) => ((current + 1) % total + total) % total),
    [total]
  );

  useEffect(() => {
    if (!autoplay || paused || total <= perView) return;
    const id = setInterval(next, autoplay);
    return () => clearInterval(id);
  }, [next, autoplay, paused, total, perView]);

  const ordered = [...items.slice(offset), ...items.slice(0, offset)].slice(0, perView);

  return { offset, go, prev, next, ordered, paused, setPaused };
}
