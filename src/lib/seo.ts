/**
 * src/lib/seo.ts
 *
 * Dedicated Route SEO & Metadata Manager for MedAT Prep.
 * Targets: "MedAT 2027", "MedAT Vorbereitung", "BMS üben", "MedAT-H", "MedAT-Z",
 * and Austrian city terms (Wien, Graz, Innsbruck, Linz).
 * Updates document.title, meta description, Open Graph tags, Twitter card,
 * and canonical link on every route transition.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogType?: string;
}

export const ROUTE_SEO_MAP: Record<string, RouteMeta> = {
  "/": {
    title: "MedAT 2027 Vorbereitung — BMS üben, KFF & Probetests | Wien, Graz, Innsbruck, Linz",
    description: "Online-Vorbereitung für den MedAT 2027 (MedAT-H & MedAT-Z). Didaktischer Lernplan, BMS üben, 5.000+ Fragen mit Erklärungen & kostenloser Einstufungstest für Wien, Graz, Innsbruck und Linz.",
    canonical: "https://medatprep.at/",
    keywords: "MedAT 2027, MedAT Vorbereitung, BMS üben, MedAT-H, MedAT-Z, MedUni Wien, Graz, Innsbruck, Linz, Einstufungstest, Aufnahmetest Medizin",
    ogType: "website",
  },
  "/einstufungstest": {
    title: "Kostenloser MedAT Einstufungstest 2027 — 24 Orientierungsfragen | MedAT Prep",
    description: "Mache den kostenlosen 24-Fragen-Einstufungstest für MedAT 2027. Sofortige Stärken-Schwächen-Analyse für BMS, KFF, TV & SEK für MedUni Wien, Graz, Innsbruck und Linz.",
    canonical: "https://medatprep.at/einstufungstest",
    keywords: "Einstufungstest MedAT, MedAT 2027 Einstufungstest, BMS üben, KFF Test, MedAT Orientierung, MedUni Wien, Graz, Innsbruck, Linz",
    ogType: "website",
  },
  "/medat-vorbereitung": {
    title: "MedAT Vorbereitung 2027: Leitfaden für MedAT-H & MedAT-Z | Wien, Graz, Innsbruck, Linz",
    description: "Umfassender Guide für deine MedAT 2027 Vorbereitung: BMS üben, KFF-Taktik, Quoten, Zeitplan und didaktische Strategien für MedUni Wien, Graz, Innsbruck und Linz.",
    canonical: "https://medatprep.at/medat-vorbereitung",
    keywords: "MedAT Vorbereitung, MedAT 2027, MedAT-H Vorbereitung, MedAT-Z Vorbereitung, BMS üben, Medizinstudium Österreich, Wien, Graz, Innsbruck, Linz",
    ogType: "article",
  },
  "/der-medat": {
    title: "Der MedAT 2027: Aufbau, Ablauf & Vorbereitung für MedAT-H & MedAT-Z",
    description: "Alles über den MedAT 2027: BMS (40%), KFF (40%), Textverständnis (10%) und SEK (10%). Struktur, Vorbereitungstipps und Quoten für Wien, Graz, Innsbruck und Linz.",
    canonical: "https://medatprep.at/der-medat",
    keywords: "Der MedAT, MedAT 2027 Aufbau, MedAT Struktur, MedAT-H, MedAT-Z, MedUni Wien, Aufnahmetest Medizin Österreich",
    ogType: "article",
  },
  "/medat-kurs-vergleich": {
    title: "MedAT Vorbereitungskurse im Vergleich 2027: MedAT Prep vs. 1.500 € Kurse",
    description: "Warum 1.500 € Kurse ausgedient haben: Großer Vergleich aller Vorbereitungsmethoden für MedAT 2027 (MedAT-H & MedAT-Z) in Wien, Graz, Innsbruck und Linz.",
    canonical: "https://medatprep.at/medat-kurs-vergleich",
    keywords: "MedAT Vorbereitungskurs, MedAT Kurs Vergleich, Beste MedAT Vorbereitung, MedAT Kosten, MedAT 2027, Wien, Graz, Innsbruck, Linz",
    ogType: "article",
  },
  "/medat-2027-termine-fristen": {
    title: "MedAT 2027 Termine, Fristen & Gebühren — Offizieller Leitfaden | MedAT Prep",
    description: "Alle Termine für den MedAT 2027: Anmeldung 1.–31. März 2027, 110 € Kostenbeitrag, Testtag voraussichtlich 9. Juli 2027 an MedUni Wien, Innsbruck, Graz (H+Z) und Linz (H).",
    canonical: "https://medatprep.at/medat-2027-termine-fristen",
    keywords: "MedAT 2027 Termine, MedAT Fristen, MedAT 2027 Testtag, MedAT Gebühr 110 Euro, MedUni Wien, Graz, Innsbruck, Linz, medizinstudieren.at",
    ogType: "article",
  },
  "/bms-masterplan-vorbereitung": {
    title: "BMS üben für MedAT 2027: Biologie, Chemie, Physik & Mathe Masterplan",
    description: "BMS üben mit System: Stichwortkatalog 2027 für Bio, Chemie, Physik und Mathematik nach VMC-Vorgaben für MedAT-H & MedAT-Z an den Unis Wien, Graz, Innsbruck, Linz.",
    canonical: "https://medatprep.at/bms-masterplan-vorbereitung",
    keywords: "BMS üben, BMS MedAT, Biologie MedAT, Chemie MedAT, Physik MedAT, Mathematik MedAT, VMC Stichwortkatalog 2027, MedAT 2027",
    ogType: "article",
  },
  "/kff-strategie-schnellste-punkte": {
    title: "KFF-Strategie MedAT 2027: Kognitive Fähigkeiten trainieren | MedAT Prep",
    description: "KFF-Strategien für den MedAT 2027: Zahlenfolgen, Gedächtnis, Figuren und Implikationen mit Höchstgeschwindigkeit lösen für deinen Studienplatz in Österreich.",
    canonical: "https://medatprep.at/kff-strategie-schnellste-punkte",
    keywords: "KFF MedAT, Kognitive Fähigkeiten und Fertigkeiten, Zahlenfolgen MedAT, Figuren zusammensetzen, Gedächtnis und Merkfähigkeit, MedAT 2027",
    ogType: "article",
  },
  "/quoten-bewerberzahlen-analyse": {
    title: "MedAT Quoten & Grenzrang-Analyse 2027: Wien, Graz, Innsbruck & Linz",
    description: "MedAT 2027 Quotenregelung im Detail: Österreich-Quote (75%), EU-Quote (20%), Drittstaaten (5%) sowie Grenzrang-Trends für Human- und Zahnmedizin.",
    canonical: "https://medatprep.at/quoten-bewerberzahlen-analyse",
    keywords: "MedAT Quoten, Österreicher-Quote, EU-Quote MedAT, Grenzrang MedAT, Bewerberzahlen MedUni Wien, Graz, Innsbruck, Linz 2027",
    ogType: "article",
  },
  "/tv-sek-emotionen-textverstaendnis": {
    title: "Textverständnis (TV) & SEK im MedAT 2027: Emotionen regulieren | MedAT Prep",
    description: "Trainiere Textverständnis und sozial-emotionale Kompetenzen (SEK) für den MedAT 2027. Didaktische Fallbeispiele und psychologische Auswertungen.",
    canonical: "https://medatprep.at/tv-sek-emotionen-textverstaendnis",
    keywords: "MedAT SEK, MedAT Textverständnis, Soziales Entscheiden, Emotionen regulieren, Emotionen erkennen, MedAT 2027",
    ogType: "article",
  },
  "/testtag-protokoll-mentale-staerke": {
    title: "MedAT 2027 Testtag-Protokoll & Packliste — Stressfrei durch den Prüfungstag",
    description: "Vollständiger Ablaufplan für den MedAT 2027 Testtag: Einlass, Hallenordnung, Verpflegung, Pacing und mentale Strategien für Wien, Graz, Innsbruck und Linz.",
    canonical: "https://medatprep.at/testtag-protokoll-mentale-staerke",
    keywords: "MedAT Testtag, MedAT Packliste, MedAT Ablauf, MedAT Einlass, Messe Wien, Messe Graz, Messe Innsbruck, Linz, MedAT 2027",
    ogType: "article",
  },
  "/medat-telegram-gruppe": {
    title: "MedAT 2027 Telegram-Gruppe & Community — Lerngruppen Wien, Graz, Innsbruck, Linz",
    description: "Tritt der kostenlosen MedAT 2027 Telegram-Gruppe bei: Vernetze dich mit Mitbewerber:innen für Wien, Graz, Innsbruck und Linz, tausche Alttests und Lerntipps.",
    canonical: "https://medatprep.at/medat-telegram-gruppe",
    keywords: "MedAT Telegram Gruppe, MedAT Community, MedAT Lerngruppe Wien, Graz, Innsbruck, Linz, MedAT 2027 Austausch",
    ogType: "website",
  },
  "/blog": {
    title: "MedAT Ratgeber & Blog 2027: Strategien, BMS-Wissen & Insider-Tipps",
    description: "Expertenratgeber für MedAT 2027: Aktuelle Analysen, BMS-Tipps, KFF-Übungsmethoden und Vorbereitungsstrategien von Ärzt:innen und Medizinstudierenden.",
    canonical: "https://medatprep.at/blog",
    keywords: "MedAT Blog, MedAT Ratgeber, MedAT 2027 Vorbereitung, BMS üben, Medizinstudium Österreich Tipps",
    ogType: "blog",
  },
  "/about": {
    title: "Über uns — MedAT Prep | Wiener Gründerärzte, Mission & Didaktik",
    description: "Lerne das Team hinter MedAT Prep kennen: Wiener Mediziner:innen und Didaktik-Experten für eine faire, bezahlbare und wissenschaftliche MedAT-Vorbereitung.",
    canonical: "https://medatprep.at/about",
    keywords: "Über MedAT Prep, MedAT Team, MedAT Ärzte Wien, Didaktische Leitung, MedUni Wien Absolventen",
    ogType: "website",
  },
  "/ueber-uns": {
    title: "Über uns — MedAT Prep | Wiener Gründerärzte, Mission & Didaktik",
    description: "Lerne das Team hinter MedAT Prep kennen: Wiener Mediziner:innen und Didaktik-Experten für eine faire, bezahlbare und wissenschaftliche MedAT-Vorbereitung.",
    canonical: "https://medatprep.at/ueber-uns",
    keywords: "Über MedAT Prep, MedAT Team, MedAT Ärzte Wien, Didaktische Leitung, MedUni Wien Absolventen",
    ogType: "website",
  },
  "/contact": {
    title: "Kontakt & Support — MedAT Prep | Schnelle Hilfe aus Wien",
    description: "Fragen zu deiner MedAT 2027 Vorbereitung oder deinem Account? Unser Support-Team aus Wien antwortet verlässlich und persönlich in durchschnittlich < 3,5 Stunden.",
    canonical: "https://medatprep.at/contact",
    keywords: "MedAT Kontakt, MedAT Support, MedAT Prep Hilfe, Wien Kundenservice",
    ogType: "website",
  },
  "/kontakt": {
    title: "Kontakt & Support — MedAT Prep | Schnelle Hilfe aus Wien",
    description: "Fragen zu deiner MedAT 2027 Vorbereitung oder deinem Account? Unser Support-Team aus Wien antwortet verlässlich und persönlich in durchschnittlich < 3,5 Stunden.",
    canonical: "https://medatprep.at/kontakt",
    keywords: "MedAT Kontakt, MedAT Support, MedAT Prep Hilfe, Wien Kundenservice",
    ogType: "website",
  },
  "/privacy": {
    title: "Datenschutz & DSGVO — MedAT Prep | 100% EU-Datenspeicherung",
    description: "Datenschutzerklärung von MedAT Prep: Konform mit DSGVO und österreichischem DSG. Serverstandorte in der EU, keine Weitergabe an Dritte.",
    canonical: "https://medatprep.at/privacy",
    keywords: "MedAT Datenschutz, MedAT DSGVO, Privatsphäre MedAT Prep",
    ogType: "website",
  },
  "/datenschutz": {
    title: "Datenschutz & DSGVO — MedAT Prep | 100% EU-Datenspeicherung",
    description: "Datenschutzerklärung von MedAT Prep: Konform mit DSGVO und österreichischem DSG. Serverstandorte in der EU, keine Weitergabe an Dritte.",
    canonical: "https://medatprep.at/datenschutz",
    keywords: "MedAT Datenschutz, MedAT DSGVO, Privatsphäre MedAT Prep",
    ogType: "website",
  },
  "/terms": {
    title: "AGB & Widerrufsbelehrung — MedAT Prep | KSchG & FAGG konform",
    description: "Allgemeine Geschäftsbedingungen und gesetzliche Widerrufsbelehrung (14 Tage Rücktrittsrecht) von MedAT Prep nach österreichischem Verbraucherrecht.",
    canonical: "https://medatprep.at/terms",
    keywords: "MedAT AGB, Widerrufsbelehrung MedAT Prep, Verbraucherschutz Österreich",
    ogType: "website",
  },
  "/agb": {
    title: "AGB & Widerrufsbelehrung — MedAT Prep | KSchG & FAGG konform",
    description: "Allgemeine Geschäftsbedingungen und gesetzliche Widerrufsbelehrung (14 Tage Rücktrittsrecht) von MedAT Prep nach österreichischem Verbraucherrecht.",
    canonical: "https://medatprep.at/agb",
    keywords: "MedAT AGB, Widerrufsbelehrung MedAT Prep, Verbraucherschutz Österreich",
    ogType: "website",
  },
  "/impressum": {
    title: "Impressum & Offenlegung (§ 5 ECG, § 25 Mediengesetz) — MedAT Prep Wien",
    description: "Rechtliche Anbieterkennzeichnung, Firmenbuchdaten und Offenlegung nach österreichischem Medien- und E-Commerce-Recht für MedAT Prep.",
    canonical: "https://medatprep.at/impressum",
    keywords: "Impressum MedAT Prep, Offenlegung Paragraph 5 ECG, Wien",
    ogType: "website",
  },
  "/disclaimer": {
    title: "Haftungsausschluss & Unabhängigkeit — MedAT Prep",
    description: "Transparenzhinweis zur Unabhängigkeit von MedAT Prep von den Medizinischen Universitäten Wien, Graz, Innsbruck und der JKU Linz.",
    canonical: "https://medatprep.at/disclaimer",
    keywords: "Haftungsausschluss MedAT Prep, Unabhängigkeit MedUni Wien, Graz, Innsbruck, Linz",
    ogType: "website",
  },
};

export function applyRouteMeta(pathname: string) {
  // Normalize pathname: strip trailing slash except for root
  const cleanPath = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const meta = ROUTE_SEO_MAP[cleanPath] || ROUTE_SEO_MAP["/"];

  document.title = meta.title;

  const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("description", meta.description);
  if (meta.keywords) setMeta("keywords", meta.keywords);

  // Open Graph
  setMeta("og:title", meta.title, "property");
  setMeta("og:description", meta.description, "property");
  setMeta("og:url", meta.canonical, "property");
  setMeta("og:type", meta.ogType || "website", "property");
  setMeta("og:locale", "de_AT", "property");

  // Twitter
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);

  // Canonical link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement("link");
    canonicalEl.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute("href", meta.canonical);
}

export function RouteSeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only apply on public routes (not inside logged-in /app)
    if (!pathname.startsWith("/app")) {
      applyRouteMeta(pathname);
    }
  }, [pathname]);

  return null;
}
