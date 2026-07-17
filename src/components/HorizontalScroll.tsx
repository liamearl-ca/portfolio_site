import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import "./HorizontalScroll.css";

interface HorizontalScrollProps {
  children: React.ReactNode[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export interface HorizontalScrollHandle {
  scrollToIndex: (index: number) => void;
}

const HorizontalScroll = forwardRef<HorizontalScrollHandle, HorizontalScrollProps>(
  ({ children, activeIndex, onIndexChange }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isProgrammaticScroll = useRef(false);

    const scrollToIndex = useCallback((index: number) => {
      const container = containerRef.current;
      if (!container) return;
      isProgrammaticScroll.current = true;
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: "smooth",
      });
    }, []);

    useImperativeHandle(ref, () => ({ scrollToIndex }), [scrollToIndex]);

    useEffect(() => {
      scrollToIndex(activeIndex);
    }, [activeIndex, scrollToIndex]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      let settleTimeout: ReturnType<typeof setTimeout>;
      const handleScroll = () => {
        clearTimeout(settleTimeout);
        settleTimeout = setTimeout(() => {
          if (isProgrammaticScroll.current) {
            isProgrammaticScroll.current = false;
            return;
          }
          const index = Math.round(container.scrollLeft / container.clientWidth);
          onIndexChange(index);
        }, 120);
      };

      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        clearTimeout(settleTimeout);
      };
    }, [onIndexChange]);

    return (
      <div className="horizontal-scroll" ref={containerRef}>
        {children.map((child, index) => (
          <div className="horizontal-scroll-page" key={index}>
            {child}
          </div>
        ))}
      </div>
    );
  }
);

export default HorizontalScroll;
