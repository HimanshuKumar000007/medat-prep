/* Dashboard icon set — 1.5px strokes, 24px grid, Lucide-style line language. */

type P = { className?: string };

function base(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    focusable: false as const,
  };
}

export const DIconHome = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="m3 10.5 9-7.5 9 7.5" />
    <path d="M5.5 9v11.5h13V9" />
    <path d="M9.75 20.5v-5.5h4.5v5.5" />
  </svg>
);

export const DIconClipboard = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M9 5H7.5A1.5 1.5 0 0 0 6 6.5v13A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 5H15" />
    <rect x="9" y="3" width="6" height="3.5" rx="1" />
    <path d="M9.5 11h5M9.5 14.5h5M9.5 18h3" />
  </svg>
);

export const DIconChat = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M21 11.6a8.4 8.4 0 0 1-8.5 8.2c-1.5 0-2.9-.3-4.1-1L3 20l1.3-5.1A8.4 8.4 0 1 1 21 11.6z" />
    <path d="M8.5 11.6h7" />
  </svg>
);

export const DIconGear = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v2.8M12 18.7v2.8M2.5 12h2.8M18.7 12h2.8M5.3 5.3l2 2M16.7 16.7l2 2M18.7 5.3l-2 2M7.3 16.7l-2 2" />
  </svg>
);

export const DIconHelp = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9.6 9.2a2.5 2.5 0 1 1 3.3 2.4c-.7.3-1 .9-1 1.6" />
    <path d="M12 16.3h.01" strokeWidth="2.4" />
  </svg>
);

export const DIconSearch = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 5 5" />
  </svg>
);

export const DIconBell = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M18 9a6 6 0 0 0-12 0c0 6.5-2.5 8-2.5 8h17S18 15.5 18 9z" />
    <path d="M10.2 20a2 2 0 0 0 3.6 0" />
  </svg>
);

export const DIconUser = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="8" r="3.8" />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </svg>
);

export const DIconLogout = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M9.5 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.5" />
    <path d="m16 16.5 4.5-4.5L16 7.5" />
    <path d="M20.5 12h-11" />
  </svg>
);

export const DIconLock = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="5" y="11" width="14" height="9.5" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </svg>
);

export const DIconBookmark = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M6.5 3.5h11V21l-5.5-3.8L6.5 21z" />
  </svg>
);

export const DIconBookmarkFilled = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
    <path d="M6.5 3.5h11V21l-5.5-3.8L6.5 21z" />
  </svg>
);

export const DIconRefresh = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const DIconPlus = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const DIconTrendUp = ({ className = "h-4 w-4" }: P) => (
  <svg {...base(className)}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M15.5 7H21v5.5" />
  </svg>
);

export const DIconTrendDown = ({ className = "h-4 w-4" }: P) => (
  <svg {...base(className)}>
    <path d="m3 7 6 6 4-4 8 8" />
    <path d="M21 11.5V17h-5.5" />
  </svg>
);

export const DIconTrendFlat = ({ className = "h-4 w-4" }: P) => (
  <svg {...base(className)}>
    <path d="M4 12h13" />
    <path d="m13.5 7.5 4.5 4.5-4.5 4.5" />
  </svg>
);

export const DIconWifiOff = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M2.5 8.5a14.5 14.5 0 0 1 5.9-3.3M10.9 5.2a14.5 14.5 0 0 1 10.6 3.3" />
    <path d="M5.5 12.5a9.5 9.5 0 0 1 4.8-2.5M14 10.1a9.5 9.5 0 0 1 4.5 2.4" />
    <path d="M8.5 16.2a5 5 0 0 1 7 0" />
    <path d="M12 19.5h.01" strokeWidth="2.4" />
    <path d="m3 3 18 18" />
  </svg>
);

export const DIconPanel = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9.5 4v16" />
  </svg>
);

export const DIconCard = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M3 10h18" />
    <path d="M7 14.5h4" />
  </svg>
);

export const DIconDownload = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M12 3.5V15" />
    <path d="m7 10.5 5 5 5-5" />
    <path d="M4.5 20.5h15" />
  </svg>
);

export const DIconTrash = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M4.5 6.5h15" />
    <path d="M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v1.5" />
    <path d="m6 6.5 1 13.5h10l1-13.5" />
    <path d="M10 10.5v6M14 10.5v6" />
  </svg>
);

export const DIconAlert = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M12 3.5 2.5 20h19z" />
    <path d="M12 9.5V14" />
    <path d="M12 17h.01" strokeWidth="2.4" />
  </svg>
);

export const DIconZap = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M13 2.5 4.5 14H11l-1.5 7.5L18 10h-6.5z" />
  </svg>
);

export const DIconFile = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M13.5 2.5H7A1.5 1.5 0 0 0 5.5 4v16A1.5 1.5 0 0 0 7 21.5h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" />
    <path d="M13.5 2.5v5h5" />
    <path d="M9 12.5h6M9 16h4" />
  </svg>
);

export const DIconDna = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M7 2.5c0 5 10 5 10 10s-10 5-10 10" />
    <path d="M17 2.5c0 5-10 5-10 10s10 5 10 10" />
    <path d="M8 5.5h8M8 18.5h8M9.5 12h5" strokeWidth="1.3" />
  </svg>
);

export const DIconBook = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21z" />
    <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    <path d="M9 8h7" />
  </svg>
);

export const DIconCheckCircle = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.5 12.2 2.4 2.4 4.8-5" />
  </svg>
);

export const DIconXCircle = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m9 9 6 6M15 9l-6 6" />
  </svg>
);

export const DIconSparkles = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
    <path d="M19 3v4M21 5h-4" />
  </svg>
);

export const DIconBot = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16.01" strokeWidth="2.5" />
    <line x1="16" y1="16" x2="16" y2="16.01" strokeWidth="2.5" />
  </svg>
);

export const DIconSend = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const DIconCopy = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const DIconMail = ({ className = "h-5 w-5" }: P) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
