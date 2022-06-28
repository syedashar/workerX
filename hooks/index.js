import { useEffect, useState } from "react";
import Router from "next/router";

// get window dimensions

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

// detect outside click hook

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

// use page top hook

function usePageTop() {
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isPageTop = window.scrollY < 50;
      setIsPageTop(isPageTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isPageTop;
}

// temporary fix for transition on page load

const OPACITY_EXIT_DURATION = 0.4;

const routeChange = () => {
  const tempFix = () => {
    const elements = document.querySelectorAll('style[media="x"]');
    elements.forEach((elem) => elem.removeAttribute("media"));
    setTimeout(() => {
      elements.forEach((elem) => elem.remove());
    }, OPACITY_EXIT_DURATION * 1000);
  };
  tempFix();
};

const useTransitionFix = () => {
  useEffect(() => {
    Router.events.on("routeChangeComplete", routeChange);
    Router.events.on("routeChangeStart", routeChange);

    return () => {
      Router.events.off("routeChangeComplete", routeChange);
      Router.events.off("routeChangeStart", routeChange);
    };
  }, []);

  useEffect(() => {
    Router.router?.push(Router.router?.pathname);
  }, []);
};

export { useWindowDimensions, useOnClickOutside, usePageTop, useTransitionFix };
