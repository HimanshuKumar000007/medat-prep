import React from "react";
import type { FzOptionKey, FzQuestionData, FzPolygon } from "../../data/questions/fz/types";

interface FzAssemblySolutionFigureProps {
  fzData: FzQuestionData;
  className?: string;
}

const PIECE_PALETTE = [
  { fill: "#93c5fd", stroke: "#1d4ed8", bgSoft: "bg-blue-100", text: "text-blue-800", border: "border-blue-300" },
  { fill: "#86efac", stroke: "#15803d", bgSoft: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-300" },
  { fill: "#fde047", stroke: "#a16207", bgSoft: "bg-amber-100", text: "text-amber-800", border: "border-amber-300" },
  { fill: "#d8b4fe", stroke: "#7e22ce", bgSoft: "bg-purple-100", text: "text-purple-800", border: "border-purple-300" },
  { fill: "#fca5a5", stroke: "#b91c1c", bgSoft: "bg-rose-100", text: "text-rose-800", border: "border-rose-300" },
  { fill: "#fdba74", stroke: "#c2410c", bgSoft: "bg-orange-100", text: "text-orange-800", border: "border-orange-300" },
  { fill: "#67e8f9", stroke: "#0e7490", bgSoft: "bg-cyan-100", text: "text-cyan-800", border: "border-cyan-300" },
];

function computeCentroid(points: FzPolygon): [number, number] {
  if (!points || points.length === 0) return [0, 0];
  let a = 0;
  let cx = 0;
  let cy = 0;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const factor = points[i][0] * points[j][1] - points[j][0] * points[i][1];
    a += factor;
    cx += (points[i][0] + points[j][0]) * factor;
    cy += (points[i][1] + points[j][1]) * factor;
  }

  a = a / 2;
  if (Math.abs(a) < 1e-4) {
    // Fallback to bounding box midpoint
    const xs = points.map((p) => p[0]);
    const ys = points.map((p) => p[1]);
    return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2];
  }

  cx = cx / (6 * a);
  cy = cy / (6 * a);
  return [Math.round(cx * 10) / 10, Math.round(cy * 10) / 10];
}

export const FzAssemblySolutionFigure: React.FC<FzAssemblySolutionFigureProps> = ({
  fzData,
  className = "",
}) => {
  const isECorrect = fzData.correctAnswer === "E";

  if (isECorrect) {
    const optKeys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
    const totalPiecesArea = fzData.pieces.reduce((sum, p) => sum + (p.area || 0), 0);

    return (
      <div className={`rounded-2xl border border-amber-200 bg-amber-50/50 p-4 sm:p-5 space-y-4 ${className}`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-600 text-white text-[12px] font-black">
              E
            </span>
            <span className="text-[13px] sm:text-[14px] font-black text-amber-950 uppercase tracking-tight">
              Ausschlussprüfung: Keine der Figuren A–D ist konstruierbar
            </span>
          </div>
          <span className="text-[11.5px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300/60 px-2.5 py-0.5 rounded-full font-mono">
            Gesamtfläche der Teile: {totalPiecesArea} FE
          </span>
        </div>

        <p className="text-[12.5px] sm:text-[13px] text-amber-900/90 leading-relaxed">
          Alle vier vorgegebenen Figuren (A–D) weisen geometrische Widersprüche zur gegebenen Teilekonfiguration auf
          (z.&nbsp;B. Flächenabweichung, unpassende Kantenproportionen oder inkompatible Innenwinkel). Daher ist Option&nbsp;
          <strong className="text-amber-950 font-bold">E (Keine der Antwortmöglichkeiten ist richtig)</strong> die einzig korrekte Lösung.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
          {optKeys.map((key) => {
            const opt = fzData.options[key];
            const area = opt.area;
            const diff = area ? area - totalPiecesArea : null;

            return (
              <div
                key={key}
                className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3 flex flex-col items-center justify-between shadow-2xs"
              >
                <div className="w-full flex items-center justify-between mb-1">
                  <span className="font-mono font-black text-[12px] text-slate-700">Figur {key}</span>
                  <span className="text-[9.5px] font-black uppercase text-red-600 bg-red-50 border border-red-200/70 px-1.5 py-0.5 rounded">
                    ✕ Ungültig
                  </span>
                </div>

                <div className="w-full h-16 sm:h-20 flex items-center justify-center p-1">
                  {opt.polygon && (
                    <svg
                      viewBox={opt.viewBox || "-10 -10 120 120"}
                      preserveAspectRatio="xMidYMid meet"
                      className="w-full h-full opacity-60"
                    >
                      <polygon
                        points={opt.polygon.map(([x, y]) => `${x},${y}`).join(" ")}
                        fill="#cbd5e1"
                        stroke="#64748b"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div className="w-full text-center text-[10.5px] font-mono text-slate-600 border-t border-slate-100 pt-1 mt-1">
                  {area !== undefined ? (
                    <span>
                      Fläche: {area} FE{" "}
                      {diff !== null && diff !== 0 ? (
                        <span className={diff > 0 ? "text-amber-700 font-bold" : "text-red-700 font-bold"}>
                          ({diff > 0 ? `+${diff}` : diff})
                        </span>
                      ) : (
                        <span className="text-slate-500">(Kantenwiderspruch)</span>
                      )}
                    </span>
                  ) : (
                    <span>Inkompatibel</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // A, B, C, or D is correct
  const correctOpt = fzData.options[fzData.correctAnswer];
  const targetViewBox = fzData.targetFigure.viewBox || correctOpt?.viewBox || "-10 -10 120 120";

  return (
    <div className={`rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 sm:p-5 space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white text-[12px] font-black">
            ✓
          </span>
          <span className="text-[13px] sm:text-[14px] font-black text-emerald-950 uppercase tracking-tight">
            Geometrische Lösungskonstruktion (Figur {fzData.correctAnswer})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100/90 border border-emerald-300/60 px-2.5 py-0.5 rounded-full font-mono">
            {fzData.pieces.length} Teile · 100% lückenlos · Keine Überlappung
          </span>
        </div>
      </div>

      <p className="text-[12.5px] sm:text-[13px] text-emerald-900/90 leading-relaxed">
        Die folgenden {fzData.pieces.length} Teilstücke fügen sich durch reine zweidimensionale Drehung (ohne Spiegelung)
        exakt und lückenlos zur <strong className="text-emerald-950 font-bold">Figur {fzData.correctAnswer}</strong> zusammen:
      </p>

      {/* Assembly Vector Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Solution Assembled Target Canvas */}
        <div className="md:col-span-6 flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
          <span className="text-[10.5px] font-mono font-black text-emerald-800 uppercase mb-2 tracking-wider">
            ZUSAMMENGESETZTE ZIELFIGUR {fzData.correctAnswer}
          </span>
          <div className="w-full max-w-[240px] aspect-square flex items-center justify-center p-2">
            <svg
              viewBox={targetViewBox}
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full filter drop-shadow-xs"
            >
              {/* Outer boundary stroke for overall target */}
              {fzData.targetFigure.polygon && (
                <polygon
                  points={fzData.targetFigure.polygon.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              )}

              {/* Render each individual piece fitted into target space */}
              {fzData.pieces.map((piece, pIdx) => {
                const style = PIECE_PALETTE[pIdx % PIECE_PALETTE.length];
                const pointsStr = piece.points.map(([x, y]) => `${x},${y}`).join(" ");
                const [cx, cy] = computeCentroid(piece.points);

                return (
                  <g key={piece.id || pIdx}>
                    <polygon
                      points={pointsStr}
                      fill={style.fill}
                      stroke={style.stroke}
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Centroid piece index badge */}
                    <circle cx={cx} cy={cy} r="6.5" fill="#ffffff" stroke={style.stroke} strokeWidth="1.5" />
                    <text
                      x={cx}
                      y={cy + 3.2}
                      textAnchor="middle"
                      fontSize="8"
                      fontWeight="bold"
                      fill={style.stroke}
                      fontFamily="monospace"
                    >
                      {pIdx + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Legend of Pieces and Rotations */}
        <div className="md:col-span-6 space-y-2">
          <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
            Verwendete Teilstücke & Ausrichtung
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {fzData.pieces.map((piece, pIdx) => {
              const style = PIECE_PALETTE[pIdx % PIECE_PALETTE.length];
              const pieceNum = pIdx + 1;

              return (
                <div
                  key={piece.id || pIdx}
                  className={`flex items-center gap-2.5 p-2 rounded-lg border ${style.border} ${style.bgSoft} shadow-2xs`}
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-[10px] font-mono font-bold shadow-2xs"
                    style={{ backgroundColor: style.stroke }}
                  >
                    {pieceNum}
                  </span>
                  <div className="min-w-0 flex-1 text-[11.5px] leading-tight">
                    <span className={`font-black ${style.text}`}>Teil {pieceNum}</span>
                    <span className="text-slate-600 block text-[10px]">
                      {piece.points.length} Ecken · Fläche: {piece.area} FE
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-[10.5px] text-emerald-800/80 pt-1 flex items-center gap-1.5 font-medium">
            <span>ℹ️</span>
            <span>Alle Teile werden ohne Spiegelung (reine Rotation) eingepasst.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
