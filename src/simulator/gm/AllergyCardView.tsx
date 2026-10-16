import React from "react";
import type { AllergyCard, GmRecallCategory } from "../../data/questions/gm/types";
import { SyntheticPortrait } from "./SyntheticPortrait";

export interface AllergyCardViewProps {
  card: AllergyCard;
  highlightCategory?: GmRecallCategory;
  className?: string;
  size?: "normal" | "compact";
}

export const AllergyCardView: React.FC<AllergyCardViewProps> = ({
  card,
  highlightCategory,
  className = "",
  size = "normal",
}) => {
  const isCompact = size === "compact";

  const isFieldHighlighted = (field: GmRecallCategory) => {
    return highlightCategory === field || (highlightCategory === "cross_card" && field !== "photo");
  };

  return (
    <div
      onCopy={(e) => e.preventDefault()}
      className={`relative overflow-hidden rounded-2xl border-2 border-slate-300/90 bg-white shadow-md transition-all select-none ${
        isCompact ? "max-w-md p-3 sm:p-4" : "max-w-lg w-full p-2.5 xs:p-3.5 sm:p-6"
      } ${className}`}
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(255,255,255,1) 100%)",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* Top Header Strip resembling European Medical / Allergy Card */}
      <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2 sm:pb-3 mb-2.5 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-md bg-red-600 flex items-center justify-center text-white font-black text-[11px] sm:text-[13px] shadow-2xs shrink-0">
            ✚
          </div>
          <div>
            <h3 className="font-mono font-black text-slate-900 tracking-wider text-[11px] sm:text-[13px] leading-tight uppercase">
              ALLERGIEAUSWEIS
            </h3>
            <p className="text-[8px] sm:text-[9.5px] font-semibold tracking-wider text-slate-400 uppercase">
              CARTE D'ALLERGIE · ALLERGY CARD
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[9.5px] sm:text-[11px] font-bold text-slate-600 bg-slate-100 px-1.5 sm:px-2 py-0.5 rounded border border-slate-200">
            Nr. {card.cardNumber} / 8
          </span>
        </div>
      </div>

      {/* Primary Section: Photo + Name & Birthdate */}
      <div className="flex gap-2.5 xs:gap-3 sm:gap-5 items-start mb-2.5 sm:mb-4">
        {/* Photo Box */}
        <div
          className={`shrink-0 rounded-xl overflow-hidden border-2 bg-slate-50 p-0.5 sm:p-1 shadow-inner ${
            isFieldHighlighted("photo")
              ? "border-amber-500 ring-4 ring-amber-200"
              : "border-slate-300"
          }`}
        >
          <SyntheticPortrait
            photoId={card.photo}
            name={card.name}
            className={isCompact ? "w-18 h-22 sm:w-20 sm:h-24" : "w-[72px] h-[86px] xs:w-20 xs:h-24 sm:w-28 sm:h-32"}
          />
        </div>

        {/* Identity Details */}
        <div className="flex-1 space-y-1.5 sm:space-y-2.5 min-w-0">
          {/* Name Field */}
          <div
            className={`p-1.5 sm:p-2 rounded-lg transition-all ${
              isFieldHighlighted("name")
                ? "bg-amber-50 border border-amber-300 ring-2 ring-amber-200"
                : "bg-slate-50/80 border border-slate-200/80"
            }`}
          >
            <span className="block text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Name / Nom
            </span>
            <span className="block font-mono font-black text-slate-900 text-[13px] xs:text-[14.5px] sm:text-[17px] tracking-wide truncate">
              {card.name}
            </span>
          </div>

          {/* Birthday Field */}
          <div
            className={`p-1.5 sm:p-2 rounded-lg transition-all ${
              isFieldHighlighted("birthDate")
                ? "bg-amber-50 border border-amber-300 ring-2 ring-amber-200"
                : "bg-slate-50/80 border border-slate-200/80"
            }`}
          >
            <span className="block text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Geburtstag / Date de naiss.
            </span>
            <span className="block font-mono font-black text-slate-800 text-[12px] xs:text-[13px] sm:text-[15px]">
              {card.birthDate}
            </span>
          </div>
        </div>
      </div>

      {/* Grid of Medical & Identification Facts (6 Categories) */}
      <div className="grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-2.5">
        {/* Medikamenteneinnahme */}
        <div
          className={`p-1.5 xs:p-2 sm:p-2.5 rounded-xl border transition-all ${
            isFieldHighlighted("medication")
              ? "bg-amber-50 border-amber-400 ring-2 ring-amber-200"
              : "bg-slate-50/80 border-slate-200"
          }`}
        >
          <span className="block text-[8px] xs:text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Medikamente
          </span>
          <span
            className={`inline-flex items-center gap-1 font-mono font-black text-[11px] xs:text-[12px] sm:text-[14px] px-1.5 sm:px-2 py-0.5 rounded-md mt-0.5 ${
              card.medication
                ? "bg-amber-100 text-amber-900 border border-amber-200"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            {card.medication ? "✓ Ja" : "✗ Nein"}
          </span>
        </div>

        {/* Blutgruppe */}
        <div
          className={`p-1.5 xs:p-2 sm:p-2.5 rounded-xl border transition-all ${
            isFieldHighlighted("bloodGroup")
              ? "bg-amber-50 border-amber-400 ring-2 ring-amber-200"
              : "bg-slate-50/80 border-slate-200"
          }`}
        >
          <span className="block text-[8px] xs:text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Blutgruppe
          </span>
          <span className="inline-flex items-center font-mono font-black text-[12.5px] xs:text-[14px] sm:text-[16px] text-red-700 bg-red-50 border border-red-200 px-1.5 sm:px-2.5 py-0.5 rounded-md mt-0.5">
            {card.bloodGroup}
          </span>
        </div>

        {/* Allergien (Full Width) */}
        <div
          className={`col-span-2 p-1.5 xs:p-2 sm:p-2.5 rounded-xl border transition-all ${
            isFieldHighlighted("allergies")
              ? "bg-amber-50 border-amber-400 ring-2 ring-amber-200"
              : "bg-slate-50/80 border-slate-200"
          }`}
        >
          <span className="block text-[8px] xs:text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Bekannte Allergien
          </span>
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
            {card.allergies.length > 0 ? (
              card.allergies.map((allergy, aIdx) => (
                <span
                  key={`all-${card.id}-${aIdx}`}
                  className="font-sans font-bold text-[10px] xs:text-[11.5px] sm:text-[13px] text-slate-800 bg-white border border-slate-300 px-1.5 sm:px-2 py-0.5 rounded-md shadow-2xs"
                >
                  {allergy}
                </span>
              ))
            ) : (
              <span className="font-sans font-semibold text-[10px] sm:text-[12px] text-slate-400 italic">
                Keine bekannten Allergien
              </span>
            )}
          </div>
        </div>

        {/* Ausweisnummer */}
        <div
          className={`p-1.5 xs:p-2 sm:p-2.5 rounded-xl border transition-all ${
            isFieldHighlighted("idNumber")
              ? "bg-amber-50 border-amber-400 ring-2 ring-amber-200"
              : "bg-slate-50/80 border-slate-200"
          }`}
        >
          <span className="block text-[8px] xs:text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Ausweis-Nr.
          </span>
          <span className="font-mono font-black text-[11.5px] xs:text-[13px] sm:text-[15px] text-slate-900 tracking-wider">
            {card.idNumber}
          </span>
        </div>

        {/* Ausstellungsland */}
        <div
          className={`p-1.5 xs:p-2 sm:p-2.5 rounded-xl border transition-all ${
            isFieldHighlighted("country")
              ? "bg-amber-50 border-amber-400 ring-2 ring-amber-200"
              : "bg-slate-50/80 border-slate-200"
          }`}
        >
          <span className="block text-[8px] xs:text-[8.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Ausstellungsland
          </span>
          <span className="font-sans font-bold text-[11.5px] xs:text-[12.5px] sm:text-[14px] text-slate-800 truncate block">
            {card.country}
          </span>
        </div>
      </div>
    </div>
  );
};
