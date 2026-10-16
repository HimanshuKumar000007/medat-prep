const fs = require('fs');

const filePath = 'src/data/questions/json/textverstaendnis.json';
const all = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const updates = {
  // Q01: Distractor cleanup
  'tv-sim10-q01': {
    options: {
      A: 'Die Homöostase beschreibt die Anpassung an psychosoziale Reize, während die Allostase die starre Temperaturregulation steuert.',
      B: 'Die Allostase erzwingt unveränderliche Sollwerte im Blut, während die Homöostase ständige Sollwertverschiebungen beschreibt.',
      C: 'Die Homöostase zielt auf die Konstanthaltung von Parametern ab, während die Allostase eine dynamische, antizipatorische Anpassung physiologischer Sollwerte beschreibt.',
      D: 'Die Allostase setzt erst nach dem vollständigen Versagen aller physiologischen Rückkopplungsschleifen im Notfall ein.',
      E: 'Die Homöostase reguliert ausschließlich akute Notfallsituationen, während Allostase für basale Ruhebedingungen zuständig ist.'
    }
  },

  // Q02: Plausible consequences of chronic glucocorticoid excess
  'tv-sim10-q02': {
    options: {
      A: 'Er bewirkt strukturelle Veränderungen im Hippocampus, wodurch die hemmende Rückregulation der Stressachse weiter geschwächt wird.',
      B: 'Er verstärkt die hemmende Rückkopplung im limbischen System, sodass die Ausschüttung von Stresshormonen dauerhaft unterdrückt wird.',
      C: 'Er beschränkt seine schädigende Wirkung ausschließlich auf periphere Gefäße, ohne die neuronale Architektur des Gehirns zu verändern.',
      D: 'Er führt über eine akute Aktivierung des Sympathikus zu einer kurzfristigen Steigerung der zerebralen Lernleistung.',
      E: 'Er verhindert die Freisetzung von Katecholaminen und blockiert dadurch die neuronale Signalübertragung im Hirnstamm.'
    },
    explanation: 'Absatz 2 führt aus: Im Gehirn bewirkt ein anhaltender Glukokortikoidexzess strukturelle Remodellierungen, insbesondere eine Atrophie dendritischer Verzweigungen im Hippocampus, was die negative Rückkopplungshemmung der Stressachse weiter schwächt (Option A).'
  },

  // Q04: Plausible weaknesses in original testing strategy
  'tv-sim10-q04': {
    options: {
      A: 'Die ausschließliche Durchführung von In-vitro-Zellkulturtests anstelle von Toxizitätsprüfungen an lebenden Organismen.',
      B: 'Das Fehlen systematischer Prüfungen auf fruchtschädigende Wirkungen (Teratogenität) an trächtigen Tieren.',
      C: 'Die Beschränkung der Tierversuche auf Primaten, bei denen keinerlei toxische Reaktionen beobachtet wurden.',
      D: 'Die fehlerhafte Annahme, dass embryonale Fehlbildungen ausschließlich durch die orale Darreichungsform verursacht werden.',
      E: 'Das Unterlassen von Langzeitbeobachtungen zur akuten Toxizität bei ausschließlich männlichen Tieren.'
    },
    explanation: 'Absatz 1 benennt die methodische Lücke explizit: Präklinische Tierversuche beschränkten sich auf akute Toxizität an erwachsenen Nagern; systematische Prüfungen auf fruchtschädigende Wirkungen (Teratogenität) bei trächtigen Tieren waren weder gesetzlich vorgeschrieben noch wissenschaftlich etabliert (Option B).'
  },

  // Q06: Plausible alternative regulatory interpretations
  'tv-sim10-q06': {
    options: {
      A: 'Präklinische Teratogenitätstests können auf eine einzige Nagerspezies beschränkt werden, sofern die Dosierung drastisch erhöht wird.',
      B: 'Die Sicherheit eines Wirkstoffs lässt sich bereits im Reagenzglas vollständig nachweisen, wodurch Tierversuche regulatorisch entbehrlich werden.',
      C: 'Negative Toxizitätsbefunde bei einer einzelnen Tierart garantieren keine Sicherheit beim Menschen, weshalb reproduktionstoxische Prüfungen an mehreren Spezies verbindlich wurden.',
      D: 'Ein Wirkstoff kann nach erfolgreichen präklinischen Tests ohne nachgelagerte Überwachungssysteme direkt dauerhaft zugelassen werden.',
      E: 'Bei chiralen Wirkstoffen genügt die Prüfung des reinen pharmakologisch aktiven Enantiomers, da In-vivo-Umwandlungen vernachlässigbar sind.'
    },
    explanation: 'Absatz 2 und 3 synthetisieren die regulatorische Reform: Wegen der ausgeprägten Interspezies-Variabilität erlaubt ein negativer Befund bei Nagern keinen Rückschluss auf den Menschen; der Gesetzgeber schrieb daher verbindliche Teratogenitätstests an mehreren Tierspezies (inklusive Nicht-Nagern) sowie eine nachgelagerte Pharmakovigilanz verbindlich vor (Option C).'
  },

  // Q07: Plausible immune-regulation alternatives
  'tv-sim10-q07': {
    question: 'Welche physiologische Schutzfunktion erfüllen Immuncheckpoints laut Text im gesunden Organismus?',
    options: {
      A: 'Sie fungieren als molekulare Bremsen, die die T-Zell-Aktivität dämpfen, um gesunde Gewebe vor Autoimmunreaktionen zu schützen.',
      B: 'Sie stimulieren die unbegrenzte Vermehrung von T-Zellen zur dauerhaften Steigerung der Entzündungsbereitschaft.',
      C: 'Sie aktivieren cytotoxische T-Zellen selektiv zur Zerstörung intakter körpereigener Drüsenorgane.',
      D: 'Sie verhindern die Erkennung von Fremdantigenen durch antigenpräsentierende Zellen.',
      E: 'Sie blockieren die Ausschüttung von Hormonen aus der Hypophyse im Rahmen von Stressreaktionen.'
    },
    explanation: 'Absatz 1 beschreibt die physiologische Funktion: Als molekulare Bremsen dämpfen Checkpoint-Rezeptoren wie PD-1 und CTLA-4 die T-Zell-Aktivität ab, um überschießende Entzündungsreaktionen zu begrenzen und Autoimmunerkrankungen zu verhindern (Option A).'
  },

  // Q09: Plausible explanations for immune-related adverse events
  'tv-sim10-q09': {
    options: {
      A: 'Die verabreichten monoklonalen Antikörper entfalten eine direkte unspezifische Zytotoxizität auf gesunde Organzellen.',
      B: 'Durch die systemische Aufhebung der molekularen Bremsen attackieren enthemmte T-Zellen auch gesunde Gewebe.',
      C: 'Die Checkpoint-Inhibitoren unterdrücken die Bildung neuer T-Lymphozyten im Knochenmark, was zu sekundären Organinfektionen führt.',
      D: 'Die Nebenwirkungen treten ausschließlich dann auf, wenn der Tumor keine Neoantigene aufweist und die Antikörper ungebunden bleiben.',
      E: 'Die Immuntherapie wirkt streng lokal im Tumorgewebe, wodurch die Nebenwirkungen durch absterbende Tumorzellen hervorgerufen werden.'
    },
    explanation: 'Absatz 3 führt aus: Da Checkpoint-Inhibitoren systemisch wirken und die physiologische Selbsttoleranz aufheben, können autoreaktive T-Zell-Klone gesunde Organe attackieren, was zu Entzündungsreaktionen ähnlich klassischen Autoimmunerkrankungen führt (Option B).'
  },

  // Q10: Improved question difficulty connecting population vs high-risk
  'tv-sim10-q10': {
    question: 'Welche Konsequenz ergibt sich aus dem Präventionsparadoxon laut Text für die Wahl einer wirksamen Präventionsstrategie?',
    options: {
      A: 'Dass Präventionsprogramme ausschließlich auf Personen mit extremen Risikowerten beschränkt werden sollten, um Kosten zu minimieren.',
      B: 'Dass Maßnahmen auf Bevölkerungsebene wirkungslos sind, weil der individuelle Nutzen für den Einzelnen zu gering ausfällt.',
      C: 'Dass eine reine Ausrichtung auf Hochrisikopersonen unzureichend ist, weil die Mehrheit der Krankheitsfälle in der großen Gruppe mit nur mäßigem Risiko auftritt.',
      D: 'Dass universelle Strukturmaßnahmen wie Steuern nur dann greifen, wenn jeder Bürger sein individuelles Risiko um mindestens die Hälfte senkt.',
      E: 'Dass individuelle Verhaltensappelle erfolgreicher sind als strukturelle Maßnahmen, da sie das Präventionsparadoxon vollständig aufheben.'
    },
    correctAnswer: 'C',
    correct_answer: 'C',
    explanation: 'Absatz 1 und 2 verbinden das Präventionsparadoxon mit den strategischen Konsequenzen: Da der überwiegende Teil aller Krankheitsereignisse in der zahlenmäßig weitaus größeren Gruppe von Menschen mit nur leicht oder mäßig erhöhten Risikofaktoren auftritt, greift ein reiner Hochrisikoansatz zu kurz, weshalb populationsweite Strategien erforderlich sind (Option C).'
  },

  // Q11: Plausible limitations of high-risk strategy
  'tv-sim10-q11': {
    options: {
      A: 'Er führt bei den behandelten Hochrisikopatienten zu keinerlei persönlicher Motivation, da der individuelle Nutzen verschwindend gering ist.',
      B: 'Er erfordert zwingend populationsweite gesetzliche Restriktionen wie Tabaksteuern, die gesunde Bürger belasten.',
      C: 'Er ist medizinisch unbrauchbar, weil Hochrisikopersonen per se den größten Anteil aller Krankheitsfälle in der Gesamtbevölkerung ausmachen.',
      D: 'Er lässt sich diagnostisch nicht umsetzen, da leicht erhöhte Risikofaktoren labormedizinisch nicht von extremen Werten unterschieden werden können.',
      E: 'Er verhindert bevölkerungsweit nur einen kleineren Teil aller Fälle, da die Mehrzahl der Erkrankungen in der großen Gruppe mit nur mäßigen Risiken entsteht.'
    },
    explanation: 'Absatz 2 begründet: Obwohl der Hochrisikoansatz klinisch plausibel und für Betroffene motivierend ist, verhindert er bevölkerungsweit nur einen kleineren Teil der Fälle, da die Mehrheit der Ereignisse in der zahlenmäßig viel größeren Gruppe mit nur leicht oder mäßig erhöhten Risikofaktoren auftritt (Option E).'
  },

  // Q12: Plausible policy/strategy interpretations
  'tv-sim10-q12': {
    options: {
      A: 'Präventionspolitik sollte sich vorrangig auf informative Aufklärungskampagnen stützen, da diese von allen Bevölkerungsschichten gleichermaßen wirksam genutzt werden.',
      B: 'Um gesundheitliche Ungleichheiten nicht zu vertiefen, müssen strukturelle Rahmenbedingungen (Verhältnisprävention) Vorrang vor reinen individuellen Verhaltensappellen haben.',
      C: 'Eine gerechte Gesundheitsförderung erfordert die ausschließliche Konzentration auf den Hochrisikoansatz, da dieser sozioökonomische Unterschiede vollständig nivelliert.',
      D: 'Populationsweite Strukturmaßnahmen sind entbehrlich, sofern freiwillige Verhaltensanreize für Gruppen mit hoher Gesundheitskompetenz intensiviert werden.',
      E: 'Da das Präventionsparadoxon unüberwindbar ist, sollte die Gesundheitspolitik Präventionsbudgets vollständig zugunsten kurativer Therapien streichen.'
    },
    explanation: 'Absatz 3 synthetisiert das Problem: Reine Verhaltensappelle erreichen überproportional privilegierte Gruppen und verschärfen Ungleichheiten (Inverse Care Law); eine gerechte und effektive Politik muss daher primär an den strukturellen Lebensverhältnissen (Verhältnisprävention) ansetzen, anstatt sich auf individuelle Verhaltensappelle zu beschränken (Option B).'
  }
};

let count = 0;
all.forEach(q => {
  if (updates[q.id]) {
    Object.assign(q, updates[q.id]);
    count++;
  }
});

console.log('Updated questions count:', count);
fs.writeFileSync(filePath, JSON.stringify(all, null, 2), 'utf-8');
console.log('Successfully updated textverstaendnis.json!');
