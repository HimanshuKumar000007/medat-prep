import React from "react";
import type { FzPiece } from "../../data/questions/fz/types";

interface FzPiecesCanvasProps {
  pieces: FzPiece[];
  viewBox?: string;
  className?: string;
}

export const FzPiecesCanvas: React.FC<FzPiecesCanvasProps> = ({
  pieces,
  viewBox = "0 0 380 120",
  className = "",
}) => {
  return (
    <div
      className={`relative w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 flex flex-col items-center justify-center shadow-xs overflow-hidden ${className}`}
    >
      {/* Canvas Header Tag */}
      <div className="w-full flex flex-wrap items-center justify-between gap-1 pb-2 border-b border-slate-200/60 mb-2">
        <span className="text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider text-slate-600 font-mono">
          VORGEGEBENE TEILE ({pieces.length} TEILSTÜCKE)
        </span>
        <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-400">
          Rein mentale Rotation · Keine Spiegelung
        </span>
      </div>

      {/* SVG Canvas — Pure Static Vector Display */}
      <div className="w-full max-w-2xl aspect-[38/12] flex items-center justify-center py-1">
        <svg
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full filter drop-shadow-2xs select-none pointer-events-none"
        >
          <defs>
            {/* Subtle gradient fill for official MedAT aesthetic */}
            <linearGradient id="fzPieceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>
            <filter id="pieceShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0.5" dy="1" stdDeviation="1" floodColor="#1e3a8a" floodOpacity="0.15" />
            </filter>
          </defs>

          {pieces.map((piece, idx) => {
            const pointsStr = piece.canvasPoints.map(([x, y]) => `${x},${y}`).join(" ");
            return (
              <g key={piece.id || idx} filter="url(#pieceShadow)">
                <polygon
                  points={pointsStr}
                  fill="url(#fzPieceGradient)"
                  stroke="#1d4ed8"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
