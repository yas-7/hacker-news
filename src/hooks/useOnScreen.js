import { useEffect, useState } from 'react';

export function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    const refCurrent = ref.current;

    return () => {
      observer.unobserve(refCurrent);
    };
  }, []);
  return isIntersecting;
}
