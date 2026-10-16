import React from "react";
import type { FzCandidateOption, FzOptionKey } from "../../data/questions/fz/types";

interface FzOptionFigureProps {
  optionKey: FzOptionKey;
  option: FzCandidateOption;
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export const FzOptionFigure: React.FC<FzOptionFigureProps> = ({
  optionKey,
  option,
  isSelected,
  onSelect,
  disabled = false,
}) => {
  const isNoneOption = option.isNone || optionKey === "E" || !option.polygon;

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        if (!disabled) onSelect();
      }}
      onKeyDown={(e) => {
        if (!disabled && (e.key === " " || e.key === "Enter")) {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative flex flex-col items-center justify-between rounded-xl sm:rounded-2xl border p-2.5 sm:p-3 transition-all duration-150 cursor-pointer select-none active:scale-[0.99] ${
        optionKey === "E" ? "col-span-2 sm:col-span-1" : ""
      } ${
        isSelected
          ? "border-red-600 bg-red-50/40 ring-2 ring-red-500/25 shadow-xs"
          : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/70 hover:shadow-xs"
      } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {/* Top Header: Option Letter Badge + Radio */}
      <div className="w-full flex items-center justify-between mb-1 sm:mb-1.5">
        <span
          className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg text-[11px] sm:text-[12px] font-mono font-black uppercase transition-all ${
            isSelected
              ? "bg-red-600 text-white shadow-xs"
              : "border border-slate-200 bg-slate-100 text-slate-700 group-hover:bg-slate-200/90"
          }`}
        >
          {optionKey}
        </span>

        <span
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border flex items-center justify-center transition-all ${
            isSelected
              ? "border-red-600 bg-red-600 text-white shadow-2xs"
              : "border-slate-300 bg-white group-hover:border-slate-400"
          }`}
        >
          {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white animate-scale-in" />}
        </span>
      </div>

      {/* Main Content Area */}
      {isNoneOption ? (
        <div className="w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center p-2 text-center">
          <span
            className={`text-[11px] sm:text-[12px] font-semibold leading-snug px-1 transition-colors ${
              isSelected ? "text-red-900 font-bold" : "text-slate-600 group-hover:text-slate-800"
            }`}
          >
            Keine der Antwortmöglichkeiten ist richtig
          </span>
        </div>
      ) : (
        <div className="w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center p-1 sm:p-1.5">
          <svg
            viewBox={option.viewBox || "-10 -10 120 120"}
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full filter drop-shadow-2xs select-none pointer-events-none"
          >
            <defs>
              <linearGradient id={`fzOptGrad-${optionKey}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
            {option.polygon && (
              <polygon
                points={option.polygon.map(([x, y]) => `${x},${y}`).join(" ")}
                fill={`url(#fzOptGrad-${optionKey})`}
                stroke="#1e40af"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            )}
          </svg>
        </div>
      )}

      {/* Bottom Subtitle / Label */}
      <div className="mt-1 sm:mt-1.5 text-center">
        <span
          className={`text-[10px] sm:text-[11px] font-bold ${
            isSelected ? "text-red-700 font-black" : "text-slate-400 group-hover:text-slate-600"
          }`}
        >
          {isNoneOption ? "Option E" : `Figur ${optionKey}`}
        </span>
      </div>
    </div>
  );
};
