/* Custom inline SVG icon set — 2px single-weight strokes, no icon library. */

type P = { className?: string };

function base(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    focusable: false as const,
  };
}

export const LogoMark = ({ className = "h-8 w-8" }: P) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="9" fill="#0F172A" />
    <path
      d="M5 17h5l3-8 5 14 3.5-8H27"
      fill="none"
      stroke="#F8FAFC"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="7" y="23.5" width="5" height="2.6" rx="1.3" fill="#DC2626" />
    <rect x="13.5" y="23.5" width="5" height="2.6" rx="1.3" fill="#F8FAFC" />
    <rect x="20" y="23.5" width="5" height="2.6" rx="1.3" fill="#DC2626" />
  </svg>
);

export const IconArrowRight = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </svg>
);

export const IconCheck = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="m4.5 12.5 5 5L19.5 6.5" />
  </svg>
);

export const IconClose = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconChevron = ({ className = "h-4 w-4" }: P) => (
  <svg {...base(className)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconStar = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.5L12 17.4l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8z" />
  </svg>
);

export const IconFlame = ({ className = "h-4 w-4" }: P) => (
  <svg {...base(className)}>
    <path d="M12 3s1 2.6 3.2 5.2C17.3 10.7 18.5 12.6 18.5 15a6.5 6.5 0 0 1-13 0c0-1.9.7-3.4 1.8-4.8.5 1 1.2 1.8 2.2 2.3C9.5 9.6 10 6 12 3z" />
    <path d="M12 21a3 3 0 0 1-3-3c0-1.6 1.2-2.6 3-4 1.8 1.4 3 2.4 3 4a3 3 0 0 1-3 3z" />
  </svg>
);

export const IconBrain = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5 3 3 0 0 0 4.5 9.4 3.2 3.2 0 0 0 4 15.5 3 3 0 0 0 7 20h1.5A2.5 2.5 0 0 0 11 17.5v-11A2.5 2.5 0 0 0 9.5 4z" />
    <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5a3 3 0 0 1 2.5 2.9 3.2 3.2 0 0 1 .5 6.1 3 3 0 0 1-3 4.5H15.5A2.5 2.5 0 0 1 13 17.5v-11A2.5 2.5 0 0 1 14.5 4z" />
    <path d="M12 3.5v17" strokeDasharray="2.5 2.5" strokeWidth="1.4" />
  </svg>
);

export const IconMolecule = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="8" r="2.5" />
    <circle cx="10" cy="18" r="2.5" />
    <path d="m8.2 7 7.3 1M7 8.2l2.2 7.4M16.3 10l-4.6 6" />
  </svg>
);

export const IconPuzzle = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <path d="M9 4.5h6V8a2 2 0 1 0 4 0h1v6h-3.5a2 2 0 1 1 0 4H19v2.5H9.5v-3a2 2 0 1 0-4 0v3H4V10h3a2 2 0 1 1 0-4H4V4.5z" />
  </svg>
);

export const IconTextLines = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
    <path d="M8 8.5h8M8 12h8M8 15.5h5" />
  </svg>
);

export const IconHeart = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <path d="M12 20.5S4 15.5 4 9.8A4.3 4.3 0 0 1 8.3 5.5c1.6 0 3 .8 3.7 2a4.3 4.3 0 0 1 3.7-2A4.3 4.3 0 0 1 20 9.8c0 5.7-8 10.7-8 10.7z" />
    <path d="M7 11.5h2.4l1.4-2.6 2 4.4 1.4-1.8H17" strokeWidth="1.6" />
  </svg>
);

export const IconWire = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <path d="M3.5 16.5 8 8l3 5.5 2.5-4 2 3 5-6" />
    <circle cx="3.5" cy="16.5" r="1.6" />
    <circle cx="20.5" cy="6.5" r="1.6" />
  </svg>
);

export const IconMirror = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <path d="M12 3v18" strokeDasharray="2.5 3" strokeWidth="1.5" />
    <path d="M4 8v8l5-4z" />
    <path d="M20 8v8l-5-4z" strokeDasharray="2 2.5" strokeWidth="1.6" />
  </svg>
);

export const IconClock = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconCalendar = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="M8 13.5h3" />
  </svg>
);

export const IconUsers = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
    <path d="M15.5 5.8a3.2 3.2 0 0 1 0 5.4M17.8 14.6a5.5 5.5 0 0 1 2.7 4.9" />
  </svg>
);

export const IconTarget = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconSpark = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M12 3.5c.6 3.8 2.7 5.9 6.5 6.5-3.8.6-5.9 2.7-6.5 6.5-.6-3.8-2.7-5.9-6.5-6.5 3.8-.6 5.9-2.7 6.5-6.5z" />
    <path d="M18.5 15.5c.3 1.7 1.3 2.7 3 3-1.7.3-2.7 1.3-3 3-.3-1.7-1.3-2.7-3-3 1.7-.3 2.7-1.3 3-3z" strokeWidth="1.6" />
  </svg>
);

export const IconShield = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M12 3.5 5 6v6c0 4.4 3 7.6 7 8.5 4-.9 7-4.1 7-8.5V6z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
);

export const IconChart = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M4 4v16h16" />
    <path d="M7.5 15.5v-4M11.5 15.5V7.5M15.5 15.5v-6M19.5 15.5V10" strokeWidth="2.4" />
  </svg>
);

export const IconSend = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="m4 11 16-7-5.5 16-3-6.5z" />
    <path d="M11.5 13.5 20 4" />
  </svg>
);

export const IconEye = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconMemory = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <rect x="7.5" y="7.5" width="13" height="13" rx="2.5" />
    <path d="M16.5 4.5v-.5A1.5 1.5 0 0 0 15 2.5H5A1.5 1.5 0 0 0 3.5 4v10A1.5 1.5 0 0 0 5 15.5h.5" />
    <path d="M11 12h2.5M11 15.5h6" />
  </svg>
);

export const IconSequence = ({ className = "h-6 w-6" }: P) => (
  <svg {...base(className)}>
    <circle cx="4.5" cy="12" r="1.4" />
    <circle cx="9.5" cy="12" r="1.4" />
    <circle cx="14.5" cy="12" r="1.4" />
    <path d="M18.5 9.5a2.4 2.4 0 1 1 1.6 4.2c-.9.3-1.6.9-1.6 1.8" />
    <circle cx="18.6" cy="17.6" r="0.4" fill="currentColor" />
  </svg>
);

export const IconPlay = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M8 5.5v13l11-6.5z" />
  </svg>
);

export const IconQuote = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M4 13.2C4 8.9 6.6 5.9 10.2 4.5l.9 1.7c-2.2 1-3.6 2.7-3.9 4.6.4-.2.8-.2 1.3-.2 1.9 0 3.2 1.4 3.2 3.3 0 2-1.5 3.6-3.6 3.6-2.4 0-4.1-1.8-4.1-4.3zm9.8 0c0-4.3 2.6-7.3 6.2-8.7l.9 1.7c-2.2 1-3.6 2.7-3.9 4.6.4-.2.8-.2 1.3-.2 1.9 0 3.2 1.4 3.2 3.3 0 2-1.5 3.6-3.6 3.6-2.4 0-4.1-1.8-4.1-4.3z" />
  </svg>
);

export const IconRefresh = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21h5v-5" />
  </svg>
);

