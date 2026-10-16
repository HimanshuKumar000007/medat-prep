import React from "react";

export interface PortraitProps {
  photoId: string;
  className?: string;
  name?: string;
}

/**
 * 8 distinct synthetic portrait avatars with unique memorable facial/visual cues:
 * - hair color & style
 * - accessories (glasses, earrings, beard)
 * - distinct badge colors
 */
export const SyntheticPortrait: React.FC<PortraitProps> = ({
  photoId,
  className = "w-28 h-32",
  name = "Person",
}) => {
  const finalClass = `pointer-events-none select-none ${className}`;

  switch (photoId) {
    case "avatar-01":
      // Female, brown hair with high bun, green background, round glasses
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#ECFDF5" />
          {/* Bun */}
          <circle cx="50" cy="22" r="14" fill="#583101" />
          {/* Shoulders */}
          <path d="M15 120 C15 88 32 82 50 82 C68 82 85 88 85 120 Z" fill="#047857" />
          {/* Neck */}
          <rect x="42" y="65" width="16" height="22" fill="#E8B298" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="20" ry="24" fill="#F3D5B5" />
          {/* Hair sides */}
          <path d="M28 50 C28 32 38 26 50 26 C62 26 72 32 72 50 C72 40 68 34 50 34 C32 34 28 40 28 50 Z" fill="#583101" />
          {/* Glasses */}
          <circle cx="41" cy="52" r="7" fill="none" stroke="#0F172A" strokeWidth="2.5" />
          <circle cx="59" cy="52" r="7" fill="none" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M48 52 L52 52" stroke="#0F172A" strokeWidth="2.5" />
          {/* Eyes */}
          <circle cx="41" cy="52" r="2.5" fill="#1E293B" />
          <circle cx="59" cy="52" r="2.5" fill="#1E293B" />
          {/* Smile */}
          <path d="M44 65 Q50 70 56 65" stroke="#9A3412" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "avatar-02":
      // Male, short dark hair, blue background, neat collar
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#EFF6FF" />
          {/* Shoulders */}
          <path d="M12 120 C12 88 30 80 50 80 C70 80 88 88 88 120 Z" fill="#1D4ED8" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="20" fill="#E2A17E" />
          {/* Collar */}
          <polygon points="42,86 50,78 58,86 50,96" fill="#FFFFFF" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="21" ry="25" fill="#E8B298" />
          {/* Short Dark Hair */}
          <path d="M28 44 C28 26 40 22 50 22 C60 22 72 26 72 44 C68 32 60 30 50 30 C38 30 32 34 28 44 Z" fill="#1E293B" />
          {/* Eyes */}
          <ellipse cx="42" cy="50" rx="2.5" ry="3" fill="#0F172A" />
          <ellipse cx="58" cy="50" rx="2.5" ry="3" fill="#0F172A" />
          {/* Eyebrows */}
          <path d="M37 44 Q42 42 46 44" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 44 Q58 42 63 44" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Smile */}
          <path d="M43 65 Q50 71 57 65" stroke="#9A3412" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "avatar-03":
      // Female, long blonde hair, purple background
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#FAF5FF" />
          {/* Long Hair Back */}
          <path d="M24 45 C22 80 24 110 32 120 L68 120 C76 110 78 80 76 45 Z" fill="#EAB308" />
          {/* Shoulders */}
          <path d="M14 120 C14 90 32 84 50 84 C68 84 86 90 86 120 Z" fill="#7E22CE" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="22" fill="#F3D5B5" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="20" ry="24" fill="#FDE2D0" />
          {/* Hair Front */}
          <path d="M28 48 C28 26 40 22 50 22 C60 22 72 26 72 48 C68 34 60 30 50 30 C38 30 32 36 28 48 Z" fill="#FACC15" />
          {/* Eyes */}
          <circle cx="42" cy="51" r="2.5" fill="#0369A1" />
          <circle cx="58" cy="51" r="2.5" fill="#0369A1" />
          {/* Eyebrows */}
          <path d="M38 45 Q42 43 46 45" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" />
          <path d="M54 45 Q58 43 62 45" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" />
          {/* Smile */}
          <path d="M44 65 Q50 71 56 65" stroke="#BE123C" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "avatar-04":
      // Male, red/auburn hair, beard/mustache, amber background
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#FFFBEB" />
          {/* Shoulders */}
          <path d="M12 120 C12 88 30 82 50 82 C70 82 88 88 88 120 Z" fill="#B45309" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="20" fill="#E8B298" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="21" ry="25" fill="#F7D6C8" />
          {/* Auburn Hair */}
          <path d="M28 44 C28 26 38 22 50 22 C62 22 72 26 72 44 C66 30 58 28 50 28 C38 28 32 32 28 44 Z" fill="#C2410C" />
          {/* Beard */}
          <path d="M38 60 C38 78 62 78 62 60 C62 66 56 74 50 74 C44 74 38 66 38 60 Z" fill="#C2410C" />
          {/* Eyes */}
          <circle cx="42" cy="50" r="2.5" fill="#15803D" />
          <circle cx="58" cy="50" r="2.5" fill="#15803D" />
          {/* Eyebrows */}
          <path d="M37 44 Q42 42 46 44" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 44 Q58 42 63 44" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
          {/* Mustache */}
          <path d="M43 62 Q50 65 57 62" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "avatar-05":
      // Female, black curly hair, rose background
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#FFF1F2" />
          {/* Curly hair puff back */}
          <circle cx="32" cy="40" r="16" fill="#18181B" />
          <circle cx="68" cy="40" r="16" fill="#18181B" />
          <circle cx="50" cy="28" r="16" fill="#18181B" />
          {/* Shoulders */}
          <path d="M14 120 C14 90 32 84 50 84 C68 84 86 90 86 120 Z" fill="#BE123C" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="22" fill="#D97706" />
          {/* Head */}
          <ellipse cx="50" cy="54" rx="20" ry="24" fill="#D97706" />
          {/* Eyes */}
          <circle cx="42" cy="52" r="2.5" fill="#09090B" />
          <circle cx="58" cy="52" r="2.5" fill="#09090B" />
          {/* Eyebrows */}
          <path d="M38 46 Q42 44 46 46" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 46 Q58 44 62 46" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Smile */}
          <path d="M44 67 Q50 73 56 67" stroke="#78350F" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "avatar-06":
      // Male, mature gray/silver hair, glasses, slate background
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#F1F5F9" />
          {/* Shoulders */}
          <path d="M12 120 C12 88 30 82 50 82 C70 82 88 88 88 120 Z" fill="#334155" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="20" fill="#E2A17E" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="21" ry="25" fill="#F3D5B5" />
          {/* Gray Side Hair */}
          <path d="M28 48 C28 26 38 22 50 22 C62 22 72 26 72 48 C68 34 60 30 50 30 C38 30 32 34 28 48 Z" fill="#94A3B8" />
          {/* Rectangular Glasses */}
          <rect x="34" y="47" width="14" height="10" rx="2" fill="none" stroke="#0F172A" strokeWidth="2" />
          <rect x="52" y="47" width="14" height="10" rx="2" fill="none" stroke="#0F172A" strokeWidth="2" />
          <line x1="48" y1="52" x2="52" y2="52" stroke="#0F172A" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="41" cy="52" r="2" fill="#0F172A" />
          <circle cx="59" cy="52" r="2" fill="#0F172A" />
          {/* Smile */}
          <path d="M43 66 Q50 70 57 66" stroke="#9A3412" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "avatar-07":
      // Female, dark bob haircut, teal background
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#F0FDFA" />
          {/* Bob Hair Back */}
          <path d="M26 40 C24 70 28 80 34 82 L66 82 C72 80 76 70 74 40 Z" fill="#292524" />
          {/* Shoulders */}
          <path d="M14 120 C14 90 32 84 50 84 C68 84 86 90 86 120 Z" fill="#0D9488" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="22" fill="#E8B298" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="20" ry="24" fill="#F3D5B5" />
          {/* Bangs / Front Hair */}
          <path d="M28 40 C28 26 40 22 50 22 C60 22 72 26 72 40 C68 34 60 32 50 32 C40 32 32 34 28 40 Z" fill="#1C1917" />
          <path d="M30 40 L70 40 L68 46 L32 46 Z" fill="#1C1917" />
          {/* Eyes */}
          <circle cx="42" cy="52" r="2.5" fill="#047857" />
          <circle cx="58" cy="52" r="2.5" fill="#047857" />
          {/* Smile */}
          <path d="M44 66 Q50 71 56 66" stroke="#BE123C" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case "avatar-08":
    default:
      // Male, dark wavy hair, orange sweater, warm background
      return (
        <svg viewBox="0 0 100 120" className={finalClass} aria-label={name}>
          <rect width="100" height="120" rx="8" fill="#FFF7ED" />
          {/* Shoulders */}
          <path d="M12 120 C12 88 30 80 50 80 C70 80 88 88 88 120 Z" fill="#EA580C" />
          {/* Neck */}
          <rect x="42" y="66" width="16" height="20" fill="#E2A17E" />
          {/* Head */}
          <ellipse cx="50" cy="52" rx="21" ry="25" fill="#F3D5B5" />
          {/* Wavy hair */}
          <path d="M28 42 C28 24 38 20 50 20 C62 20 72 24 72 42 C68 30 58 28 50 28 C40 28 32 32 28 42 Z" fill="#3F2E23" />
          <circle cx="34" cy="30" r="5" fill="#3F2E23" />
          <circle cx="48" cy="24" r="5" fill="#3F2E23" />
          <circle cx="64" cy="28" r="5" fill="#3F2E23" />
          {/* Eyes */}
          <circle cx="42" cy="51" r="2.5" fill="#1C1917" />
          <circle cx="58" cy="51" r="2.5" fill="#1C1917" />
          {/* Eyebrows */}
          <path d="M37 45 Q42 43 46 45" stroke="#3F2E23" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 45 Q58 43 63 45" stroke="#3F2E23" strokeWidth="2.5" strokeLinecap="round" />
          {/* Smile */}
          <path d="M43 65 Q50 71 57 65" stroke="#9A3412" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
  }
};
