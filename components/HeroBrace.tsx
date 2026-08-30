"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  eyebrow: string;
  titlePre: string;
  titleMain: string;
  subtitle: string;
  pillars: string[];
  scrollCue: string;
  ctaMenu: string;
  ctaFind: string;
};

/**
 * "Dalla Brace" — the hero is the mouth of the wood oven. The only light is a
 * warm ember-glow that the visitor's cursor carries across a char-grilled
 * scene, revealing it from darkness. Embers drift upward; the first scroll
 * lifts the dark into the cream "table" below.
 */
export default function HeroBrace({
  eyebrow,
  titlePre,
  titleMain,
  subtitle,
  pillars,
  scrollCue,
  ctaMenu,
  ctaFind,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Firelight tracking + parallax + rising embers, all on one rAF loop.
  // (The cinematic entrance is pure CSS, so the hero is never blank even if
  // this effect never runs.)
  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    // Light position, 0..1 in the hero box. Idle rest point: low-centre,
    // like the glow rising from the oven floor.
    const target = { x: 0.5, y: 0.72 };
    const cur = { x: 0.5, y: 0.72 };
    let pointerInside = false;
    let raf = 0;
    let running = true;

    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      const r = root.getBoundingClientRect();
      w = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // ---- Ember particles ----
    type Ember = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      life: number;
      max: number;
      warm: number; // 0 orange .. 1 yellow-white
    };
    const count = reduce ? 0 : Math.round(Math.min(90, Math.max(36, w / 16)));
    const embers: Ember[] = [];
    const spawn = (initial = false): Ember => {
      const max = 3200 + Math.random() * 3600;
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : h + Math.random() * 40,
        r: 0.6 + Math.random() * 1.8,
        vy: 14 + Math.random() * 30, // px/s upward
        vx: (Math.random() - 0.5) * 10,
        life: initial ? Math.random() * max : 0,
        max,
        warm: Math.random(),
      };
    };
    for (let i = 0; i < count; i++) embers.push(spawn(true));

    let last = performance.now();
    const render = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      // Ease the firelight toward its target (buttery drag).
      if (coarse || (!pointerInside && !reduce)) {
        // Ambient slow orbit when there is no cursor to carry the flame.
        const t = now / 4200;
        target.x = 0.5 + Math.cos(t) * 0.16;
        target.y = 0.66 + Math.sin(t * 1.3) * 0.08;
      }
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;

      root.style.setProperty("--mx", `${(cur.x * 100).toFixed(2)}%`);
      root.style.setProperty("--my", `${(cur.y * 100).toFixed(2)}%`);
      // Parallax offset for the layered image/text (subtle).
      root.style.setProperty("--px", `${((cur.x - 0.5) * 26).toFixed(1)}px`);
      root.style.setProperty("--py", `${((cur.y - 0.5) * 18).toFixed(1)}px`);

      if (ctx && count) {
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = "lighter";
        const lx = cur.x * w;
        const ly = cur.y * h;
        for (const e of embers) {
          e.life += dt * 1000;
          if (e.life >= e.max || e.y < -20) {
            Object.assign(e, spawn(false));
            continue;
          }
          // Drift up; sway; drawn a touch faster/brighter near the flame.
          const near = 1 - Math.min(1, Math.hypot(e.x - lx, e.y - ly) / 320);
          e.y -= (e.vy + near * 26) * dt;
          e.x += (e.vx + Math.sin((e.y + e.x) * 0.01) * 6) * dt;
          const p = e.life / e.max;
          const alpha = Math.sin(p * Math.PI) * (0.5 + near * 0.5);
          const g = 90 + e.warm * 110;
          const b = 30 + e.warm * 60;
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, ${g | 0}, ${b | 0}, ${alpha.toFixed(3)})`;
          ctx.arc(e.x, e.y, e.r + near * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    // ---- Pointer + scroll wiring ----
    const onMove = (ev: PointerEvent) => {
      const r = root.getBoundingClientRect();
      pointerInside = true;
      target.x = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width));
      target.y = Math.min(1, Math.max(0, (ev.clientY - r.top) / r.height));
    };
    const onLeave = () => {
      pointerInside = false;
    };
    const onScroll = () => {
      const r = root.getBoundingClientRect();
      const prog = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      root.style.setProperty("--scroll", prog.toFixed(3));
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    onScroll();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const letters = Array.from(titleMain);

  return (
    <section
      ref={rootRef}
      className="brace-hero relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#0b0908] text-cream"
    >
      {/* Layer 1 — the char-grilled scene, sunk into darkness */}
      <div className="brace-photo absolute inset-0">
        <Image
          src="/photos/12-carne-alla-brace.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Grade + directional darkness so the wordmark always reads */}
      <div className="brace-grade absolute inset-0" />
      {/* Firelight the cursor carries */}
      <div className="brace-light absolute inset-0" />
      {/* Rising embers */}
      <canvas ref={canvasRef} className="brace-embers absolute inset-0" />
      {/* Vignette + fade into the cream table below */}
      <div className="brace-vignette absolute inset-0" />

      {/* Content */}
      <div className="brace-content relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5">
        <p className="brace-kicker text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80 sm:text-sm">
          {eyebrow}
        </p>

        <h1 className="brace-title mt-4 font-serif leading-[0.86]">
          <span className="brace-pre block text-2xl font-medium text-cream/80 sm:text-3xl">
            {titlePre}
          </span>
          <span className="brace-main block text-[clamp(4.5rem,18vw,13rem)]">
            {letters.map((ch, i) => (
              <span
                key={i}
                className="brace-letter inline-block"
                style={{ animationDelay: `${420 + i * 90}ms` }}
              >
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <div className="brace-rule mt-6 h-[3px] w-0 rounded-full" />

        <p className="brace-sub mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
          {subtitle}
        </p>

        <ul className="brace-pillars mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-wider text-amber-100/85 sm:text-[0.95rem]">
          {pillars.map((p, i) => (
            <li key={p} className="flex items-center gap-4">
              {i > 0 && <span className="brace-dot" aria-hidden="true" />}
              {p}
            </li>
          ))}
        </ul>

        <div className="brace-cta mt-9 flex flex-wrap gap-3">
          <a href="#specialties" className="brace-btn brace-btn-primary">
            {ctaMenu}
          </a>
          <a href="#info" className="brace-btn brace-btn-ghost">
            {ctaFind}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="brace-scrollcue absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-cream/60">
        <span>{scrollCue}</span>
        <span className="brace-scrollcue-line" aria-hidden="true" />
      </div>
    </section>
  );
}
