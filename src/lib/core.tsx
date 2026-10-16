import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------- Analytics (event taxonomy stub) ---------------- */
export function track(event: string, props: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  (w.dataLayer ||= []).push({ event, ...props, ts: Date.now() });
  console.debug("[medat-prep]", event, props);
}

export type ToastKind = "success" | "info" | "error" | "xp";

export function toast(message: string, kind: ToastKind = "success") {
  window.dispatchEvent(new CustomEvent("mprep:toast", { detail: { message, kind } }));
}

export function reducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
}

export const fmt = (n: number) => n.toLocaleString("de-AT");

/* ---------------- Scroll reveal (once, threshold 0.15) ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Count-up on view ---------------- */
export function useCountUp(target: number, duration = 1500, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      setVal(target);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
          setVal(target * eased);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  const display = (Math.round(val * 10 ** decimals) / 10 ** decimals).toLocaleString("de-AT", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return { ref, display };
}

/* ---------------- Scroll parallax (decorative elements) ---------------- */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (reducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      el.style.transform = `translate3d(0, ${(-y * speed * 0.12).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}

/* ---------------- MedAT countdown ---------------- */
export interface NextMedAT {
  date: Date;
  year: number;
  label: string;
  shortLabel: string;
  registrationLabel: string;
}

const KNOWN_TEST_DAYS: Record<number, number> = { 2026: 3, 2027: 2 }; // confirmed: 3.7.2026 / 2.7.2027

function firstFridayOfJuly(year: number): Date {
  const d = new Date(year, 6, 1, 8, 0, 0);
  d.setDate(1 + ((5 - d.getDay() + 7) % 7));
  return d;
}

export function nextMedAT(): NextMedAT {
  const now = new Date();
  for (let y = now.getFullYear(); y <= now.getFullYear() + 5; y++) {
    const date = KNOWN_TEST_DAYS[y]
      ? new Date(y, 6, KNOWN_TEST_DAYS[y], 8, 0, 0)
      : firstFridayOfJuly(y);
    if (date.getTime() > now.getTime()) {
      return {
        date,
        year: y,
        label: date.toLocaleDateString("de-AT", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        shortLabel: date.toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" }),
        registrationLabel: `Internet-Anmeldung: 1.–31. März ${y}`,
      };
    }
  }
  const d = firstFridayOfJuly(now.getFullYear() + 6);
  return {
    date: d,
    year: d.getFullYear(),
    label: d.toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" }),
    shortLabel: d.toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" }),
    registrationLabel: "",
  };
}

export function useCountdown(target: Date) {
  const compute = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor(diff / 3_600_000) % 24,
      minutes: Math.floor(diff / 60_000) % 60,
      seconds: Math.floor(diff / 1_000) % 60,
    };
  };
  const [t, setT] = useState(compute);
  useEffect(() => {
    const id = window.setInterval(() => setT(compute()), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.getTime()]);
  return t;
}

/* ---------------- Auth state helper ---------------- */
export function isUserLoggedIn(): boolean {
  if (typeof window === "undefined" || !window.localStorage) return false;
  try {
    if (localStorage.getItem("medat_user_logged_out") === "true") {
      return false;
    }
    const uid = localStorage.getItem("medat_current_user_id");
    if (uid && uid.trim().length > 0) return true;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("sb-") && key.endsWith("-auth-token")) {
        const item = localStorage.getItem(key);
        if (item) {
          const parsed = JSON.parse(item);
          if (parsed?.user?.id || parsed?.access_token) return true;
        }
      }
    }
  } catch {}
  return false;
}

export function markUserLoggedOut(): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    localStorage.setItem("medat_user_logged_out", "true");
    localStorage.removeItem("medat_current_user_id");
  } catch {}
}

export function clearUserLoggedOut(): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    localStorage.removeItem("medat_user_logged_out");
  } catch {}
}

