import React, { useMemo } from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
  as?: "div" | "span" | "p" | "h2" | "h3";
  isExplanation?: boolean;
}

/**
 * MathText renders text containing LaTeX math formulas with professional typography.
 * Supports:
 * - Block math: $$ ... $$ or \[ ... \] -> rendered inside an elegant .math-display-card
 * - Standalone boxed math: \boxed{ ... } -> rendered as highlighted principle card
 * - Inline math: $ ... $ or \( ... \) -> rendered seamlessly within text flow
 * - Structured bullet lines (• / -) -> formatted with clean spacing and bullet markers
 */
const MathTextBase: React.FC<MathTextProps> = ({
  text,
  className = "",
  as: Component = "span",
  isExplanation = false,
}) => {
  const renderedContent = useMemo(() => {
    if (!text) return null;

    // Token regex matches display math, boxed math, inline math
    const tokenRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\boxed\{[\s\S]*?\}|\$(?:\\\$|[^$\n])+?\$|\\\([\s\S]*?\\\))/g;

    // Regex to detect embedded SVG blocks
    const svgRegex = /(<svg[\s\S]*?<\/svg>)/gi;
    const segments = text.split(svgRegex);

    // Helper to render a string segment with math tokens
    const renderInlineWithMath = (segment: string, lineKey: string | number) => {
      const parts = segment.split(tokenRegex);

      return parts.map((part, index) => {
        if (!part) return null;

        let isDisplay = false;
        let math = "";

        if (part.startsWith("$$") && part.endsWith("$$")) {
          isDisplay = true;
          math = part.slice(2, -2).trim();
        } else if (part.startsWith("\\[") && part.endsWith("\\]")) {
          isDisplay = true;
          math = part.slice(2, -2).trim();
        } else if (part.startsWith("\\boxed{") && part.endsWith("}")) {
          isDisplay = true;
          math = part.trim();
        } else if (part.startsWith("$") && part.endsWith("$")) {
          isDisplay = false;
          math = part.slice(1, -1).trim();
        } else if (part.startsWith("\\(") && part.endsWith("\\)")) {
          isDisplay = false;
          math = part.slice(2, -2).trim();
        }

        if (math) {
          try {
            const html = katex.renderToString(math, {
              displayMode: isDisplay,
              throwOnError: false,
              strict: false,
              trust: true,
              output: "html", // Prevents MathML duplicate plain text collisions (like h4π)
            });

            if (isDisplay) {
              return (
                <div
                  key={`${lineKey}-disp-${index}`}
                  className="math-display-card my-3 py-3 px-4 sm:px-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all text-center"
                >
                  <div
                    className="overflow-x-auto py-1 text-center scrollbar-thin scrollbar-thumb-slate-200"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              );
            }

            return (
              <span
                key={`${lineKey}-inline-${index}`}
                className="inline-block align-middle px-0.5 math-inline-wrapper"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (e) {
            console.warn("KaTeX render error:", math, e);
            return <span key={`${lineKey}-err-${index}`}>{part}</span>;
          }
        }

        // Non-math text part: support bold (**text**) and italic (*text*)
        const mdParts = part.split(/(\*\*.*?\*\*|\*.*?\*)/g);
        return mdParts.map((sub, sIdx) => {
          if (!sub) return null;
          if (sub.startsWith("**") && sub.endsWith("**") && sub.length >= 4) {
            return (
              <strong key={`${lineKey}-b-${index}-${sIdx}`} className="font-semibold text-slate-900">
                {sub.slice(2, -2)}
              </strong>
            );
          }
          if (sub.startsWith("*") && sub.endsWith("*") && sub.length >= 2) {
            return (
              <em key={`${lineKey}-i-${index}-${sIdx}`} className="italic">
                {sub.slice(1, -1)}
              </em>
            );
          }
          return <span key={`${lineKey}-txt-${index}-${sIdx}`}>{sub}</span>;
        });
      });
    };

    const isTableRow = (line: string): boolean => {
      if (!line) return false;
      const t = line.trim();
      return t.startsWith("|") && t.endsWith("|") && t.length > 2;
    };

    const isTableDivider = (line: string): boolean => {
      if (!line) return false;
      const t = line.trim();
      return t.startsWith("|") && t.endsWith("|") && /^\|(\s*:?-+:?\s*\|)+$/.test(t);
    };

    // Map over segments: if SVG, render as SVG card; otherwise, render text lines with math & tables
    return segments.map((seg, segIdx) => {
      if (!seg) return null;
      const trimmedSeg = seg.trim();

      if (trimmedSeg.toLowerCase().startsWith("<svg") && trimmedSeg.toLowerCase().endsWith("</svg>")) {
        return (
          <div
            key={`svg-card-${segIdx}`}
            className="my-3.5 flex justify-center items-center p-2.5 sm:p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden max-w-md mx-auto select-none"
            dangerouslySetInnerHTML={{ __html: trimmedSeg }}
          />
        );
      }

      const lines = seg.split("\n");
      const renderedLines: React.ReactNode[] = [];
      let lineIdx = 0;

      while (lineIdx < lines.length) {
        const line = lines[lineIdx];
        const trimmed = line.trim();

        // Check if a markdown table starts here
        if (isTableRow(line) && lineIdx + 1 < lines.length && isTableDivider(lines[lineIdx + 1])) {
          const header = line.trim().slice(1, -1).split("|").map((s) => s.trim());
          const divider = lines[lineIdx + 1].trim().slice(1, -1).split("|").map((s) => s.trim());
          const alignments = divider.map((d) => {
            if (d.startsWith(":") && d.endsWith(":")) return "text-center";
            if (d.endsWith(":")) return "text-right";
            return "text-left";
          });

          const rows: string[][] = [];
          let nextIdx = lineIdx + 2;
          while (nextIdx < lines.length && isTableRow(lines[nextIdx])) {
            rows.push(lines[nextIdx].trim().slice(1, -1).split("|").map((s) => s.trim()));
            nextIdx++;
          }

          renderedLines.push(
            <div
              key={`tbl-wrap-${segIdx}-${lineIdx}`}
              className="my-3.5 overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-2xs"
            >
              <table className="w-full border-collapse text-left text-[13.5px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/90 text-[12px] sm:text-[12.5px] font-bold text-slate-700 uppercase tracking-wider">
                    {header.map((h, hIdx) => (
                      <th
                        key={`th-${hIdx}`}
                        className={`px-4 py-3 border-r border-slate-200/60 last:border-r-0 ${alignments[hIdx] || "text-left"}`}
                      >
                        {renderInlineWithMath(h, `th-${segIdx}-${lineIdx}-${hIdx}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {rows.map((row, rIdx) => (
                    <tr
                      key={`tr-${rIdx}`}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={`td-${cIdx}`}
                          className={`px-4 py-2.5 border-r border-slate-100 last:border-r-0 ${alignments[cIdx] || "text-left"}`}
                        >
                          {renderInlineWithMath(cell, `td-${segIdx}-${lineIdx}-${rIdx}-${cIdx}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );

          lineIdx = nextIdx;
          continue;
        }

        if (!trimmed) {
          renderedLines.push(<div key={`space-${segIdx}-${lineIdx}`} className="h-2" />);
          lineIdx++;
          continue;
        }

        // Check if line is a bullet item (•, -, *)
        const isBullet = trimmed.startsWith("•") || trimmed.startsWith("- ") || trimmed.startsWith("* ");
        if (isBullet) {
          const bulletContent = trimmed.replace(/^[•\-*]\s*/, "");
          renderedLines.push(
            <div
              key={`bullet-${segIdx}-${lineIdx}`}
              className="flex items-start gap-2.5 my-1.5 py-1.5 px-3 rounded-xl bg-slate-50/70 border border-slate-200/60 text-slate-800 text-[14px] sm:text-[14.5px] leading-relaxed transition-colors hover:bg-slate-50"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/70 text-slate-600 text-[11px] font-bold mt-0.5 select-none">
                •
              </span>
              <div className="flex-1 min-w-0">
                {renderInlineWithMath(bulletContent, `b-${segIdx}-${lineIdx}`)}
              </div>
            </div>
          );
          lineIdx++;
          continue;
        }

        // Check if the whole line is a display formula
        if (
          (trimmed.startsWith("$$") && trimmed.endsWith("$$")) ||
          (trimmed.startsWith("\\[") && trimmed.endsWith("\\]")) ||
          (trimmed.startsWith("\\boxed{") && trimmed.endsWith("}"))
        ) {
          renderedLines.push(
            <div key={`line-disp-${segIdx}-${lineIdx}`}>
              {renderInlineWithMath(trimmed, `disp-${segIdx}-${lineIdx}`)}
            </div>
          );
          lineIdx++;
          continue;
        }

        renderedLines.push(
          <div key={`line-${segIdx}-${lineIdx}`} className="leading-relaxed my-0.5">
            {renderInlineWithMath(line, `l-${segIdx}-${lineIdx}`)}
          </div>
        );
        lineIdx++;
      }

      return renderedLines;
    });
  }, [text]);

  return <Component className={className}>{renderedContent}</Component>;
};

export const MathText = React.memo(MathTextBase);
export default MathText;
