// components/Layout.tsx
import { useCallback, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import HorizontalScroll, { type HorizontalScrollHandle } from "./HorizontalScroll";


import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import "./Layout.css";

const ROUTES = ["/", "/about", "/projects"];
const ROUTE_NAMES = ["Home", "About", "Projects"];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef<HorizontalScrollHandle>(null);

  const activeIndex = useMemo(() => {
    const index = ROUTES.indexOf(location.pathname);
    return index === -1 ? 0 : index;
  }, [location.pathname]);

  const handleIndexChange = useCallback(
    (index: number) => {
      const path = ROUTES[index];
      if (path && path !== location.pathname) {
        navigate(path, { replace: true });
      }
    },
    [location.pathname, navigate]
  );

  const goTo = (index: number) => {
    const path = ROUTES[index];
    if (path !== location.pathname) {
      navigate(path);
    }
  };

  const getIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(ROUTES.length - 1, index));
    const path = clamped;
    return path;
  };

  const navigateButtonStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "15%",
    fontSize: "20px"
  };

  return (
    <div className="app-layout">
      <Header />
      <main className="scroll-main">
        <button
          type="button"
          className="scroll-arrow scroll-arrow-left"
          onClick={() => goTo(getIndex(activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Previous page"
          style={navigateButtonStyle}
        >{ROUTE_NAMES[getIndex(activeIndex - 1)]}</button>

        <HorizontalScroll
          ref={scrollRef}
          activeIndex={activeIndex}
          onIndexChange={handleIndexChange}
        >
          <Home />
          <About />
          <Projects />
        </HorizontalScroll>
        <button
          type="button"
          className="scroll-arrow scroll-arrow-right"
          onClick={() => goTo(getIndex(activeIndex + 1))}
          disabled={activeIndex === ROUTES.length - 1}
          aria-label="Next page"
          style={navigateButtonStyle}
        >{ROUTE_NAMES[getIndex(activeIndex + 1)]}</button>
      </main>
    </div>
  );
}
