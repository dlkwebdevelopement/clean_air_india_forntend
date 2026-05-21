import { useEffect, useRef, useState } from "react";

/**
 * LazySlider - Defers slick-carousel initialization until the slider
 * is visible in the viewport using IntersectionObserver.
 *
 * WHY: slick reads offsetWidth on every slide during init, causing
 * 233ms of forced reflows that block page rendering.
 * By deferring init until the element is in view, slick's reflows
 * happen AFTER the page is painted (not blocking LCP/FCP).
 *
 * Usage: wrap any <Slider> component with <LazySlider>
 */
const LazySlider = ({ children, fallbackHeight = "300px", rootMargin = "200px" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in viewport on mount (e.g. above-the-fold slider)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        // Start loading 200px before the element enters the viewport
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? (
        children
      ) : (
        // Placeholder preserves layout space so page doesn't shift when slider loads
        <div style={{ minHeight: fallbackHeight, width: "100%" }} aria-hidden="true" />
      )}
    </div>
  );
};

export default LazySlider;
