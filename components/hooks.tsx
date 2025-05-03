import { useEffect, useRef, useState, Ref } from "react";

type IntersectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInView(options: IntersectionOptions = {}): {
  inView: boolean;
  ref: Ref<HTMLDivElement>;
} {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false); // <<< track if already triggered

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    // If an observer already exists, disconnect it to avoid memory leaks
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new observer
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        setInView(true);
        hasAnimated.current = true;
        observer.current?.disconnect(); // Disconnect after first trigger
      }
    }, options);

    // If the element is attached, start observing it
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    // Cleanup when the component unmounts or options change
    return () => {
      if (currentRef && observer.current) {
        observer.current.unobserve(currentRef);
      }
    };
  }, [options]);

  return { inView, ref };
}
