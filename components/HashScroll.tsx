"use client";

import { useEffect } from "react";

// On load, browsers jump to the URL's #hash before images below have loaded,
// so the target ends up in the wrong place once the page reflows. This re-runs
// the scroll a few times as layout settles — e.g. after switching language on
// the menu, you land on the same section in the new language.
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length < 2) return;

    let cancelled = false;
    const scroll = () => {
      if (cancelled) return;
      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        return;
      }
      el?.scrollIntoView({ block: "start" });
    };

    scroll();
    const raf = requestAnimationFrame(scroll);
    const timers = [setTimeout(scroll, 150), setTimeout(scroll, 500)];
    window.addEventListener("load", scroll);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("load", scroll);
    };
  }, []);

  return null;
}
