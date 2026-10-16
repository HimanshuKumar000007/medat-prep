const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'questions', 'json', 'textverstaendnis.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Updates map for simulation 11
const updates = {
  'tv-sim11-q01': {
    options: {
      A: 'Sie beschleunigen das ungerichtete Auswachsen neuer Axonkollateralen zwischen benachbarten kortikalen Arealen.',
      B: 'Sie bauen inhibitorische Synapsen vollständig ab, um die kortikale Erregbarkeit dauerhaft zu maximieren.',
      C: 'Sie unterdrücken selektiv die Aktivität hemmender Interneurone, um das synaptische Zeitfenster weiter offenzuhalten.',
      D: 'Sie stabilisieren synaptische Kontaktstellen physikalisch und begrenzen dadurch das weitere Auswachsen von Nervenfasern.',
      E: 'Sie lösen bestehende synaptische Verknüpfungen auf, um sensorischen Reizen eine kontinuierliche Neuorganisation zu ermöglichen.'
    },
    explanation: 'Laut Text umhüllen PNNs inhibitorische Interneurone und bestehen aus einem dichten Gerüst von CSPGs, welche synaptische Kontaktstellen physikalisch stabilisieren und das Auswachsen neuer Axonkollateralen sterisch behindern. Option D beschreibt diese stabilisierende und plastizitätsbegrenzende Funktion exakt. A und E behaupten das Gegenteil (Auswachsen bzw. Auflösung). B und C widersprechen der Rolle der PNNs beim Schutz hemmender Interneurone.'
  },
  'tv-sim11-q02': {
    options: {
      A: 'Eine dauerhafte und irreversible Verfestigung der perineuronalen Netze um alle kortikalen Nervenzellen.',
      B: 'Eine temporäre Auflösung perineuronaler Netze und eine Wiedereröffnung juveniler Plastizität im Kortex.',
      C: 'Eine beschleunigte Ausreifung hemmender Interneurone unter vollständigem Erhalt der extrazellulären Matrix.',
      D: 'Eine dauerhafte Wiedereröffnung der Plastizität ohne die physiologische Notwendigkeit einer zeitlichen Begrenzung.',
      E: 'Eine selektive Hemmung motorischer Neulernprozesse bei gleichzeitiger Konsolidierung sensorischer Schaltkreise.'
    },
    explanation: 'Der Text beschreibt, dass der enzymatische Abbau der Zuckerseitenketten der CSPGs durch Chondroitinase ABC im adulten Kortex zu einer vorübergehenden Auflösung der PNNs und zu einer vollständigen Wiedereröffnung der juvenilen Plastizität im visuellen System führte (Option B). A beschreibt das genaue Gegenteil. C widerspricht dem Matrixabbau. D übersieht, dass der Effekt temporär ist. E widerspricht dem therapeutischen Potenzial für Neulernprozesse.'
  },
  'tv-sim11-q04': {
    question: 'Welche primäre Zielsetzung verfolgte der ursprüngliche klinische Einsatz der Präimplantationsdiagnostik (PID) laut Text?',
    options: {
      A: 'Die gezielte Vermeidung der Übertragung schwerer monogener Erbkrankheiten bei Paaren mit bekanntem genetischem Risiko.',
      B: 'Die Vorhersage statistischer Wahrscheinlichkeiten für weit verbreitete multifaktorielle Volkskrankheiten im Erwachsenenalter.',
      C: 'Die gezielte Optimierung nicht-krankheitsbezogener physischer und kognitiver Leistungsmerkmale vor der Implantation.',
      D: 'Der routinemäßige Ausschluss spontaner Chromosomenaberrationen bei allen Paaren ohne familiäre Vorbelastung.',
      E: 'Die Steigerung embryonaler Einnistungsraten durch direkte gentechnische Modifikation des Genoms im IVF-Labor.'
    },
    explanation: 'Laut Text wurde die PID ursprünglich für Paare mit einem bekannten, hohen Risiko für schwerwiegende monogene Erbkrankheiten wie Chorea Huntington oder Mukoviszidose entwickelt (Option A). B beschreibt das moderne polygene PRS-Screening. C betrifft die kontrovers diskutierte eugenische Optimierung (Enhancement). D und E sind unzutreffende Verallgemeinerungen bzw. verwechseln Selektionsdiagnostik mit Genom-Editierung.'
  },
  'tv-sim11-q06': {
    options: {
      A: 'Die Befürchtung, dass Eltern durch die Fokussierung auf Einzelrisiken die allgemeine medizinische Vorsorge für ihre Kinder vernachlässigen.',
      B: 'Die Annahme, dass durch den Abbau von Kostenbarrieren der Übergang von therapeutischer Indikation zu eugenischer Optimierung verhindert werden kann.',
      C: 'Das Risiko, dass gesetzliche Begrenzungen auf schwere Krankheiten zu einem vollständigen Stillstand der reproduktionsmedizinischen Forschung führen.',
      D: 'Die Sorge, dass eine verstärkte embryonale Diagnostik das Auftreten spontaner Erbkrankheiten in nachfolgenden Generationen irreversibel erhöht.',
      E: 'Das Verwischen der Grenze zwischen Krankheitsvermeidung und selektiver Optimierung sowie die Gefahr einer Instrumentalisierung des Eltern-Kind-Verhältnisses.'
    },
    explanation: 'Laut Text verweisen Kritiker auf das Slippery-Slope-Argument: Der Übergang von der Krankheitsprävention zur Optimierung verläuft fließend. Zudem birgt die Selektion das ethische Risiko, die Eltern-Kind-Beziehung von bedingungsloser Annahme in ein konsumorientiertes Qualitäts- und Optimierungsverhältnis zu verwandeln (Option E). A, B, C und D spiegeln nicht die im Text dargestellten ethischen Kernargumente wider.'
  },
  'tv-sim11-q07': {
    options: {
      A: 'Die Annahme, dass Schadstoffe erst dann biologische Reaktionen hervorrufen, wenn alle hormonellen Rezeptoren vollständig gesättigt sind.',
      B: 'Die traditionelle Annahme, dass die Toxizität eines Stoffes ausschließlich von seiner chemischen Abbaubarkeit in der Leber abhängt.',
      C: 'Die Auffassung, dass Umweltchemikalien im Gegensatz zu körpereigenen Hormonen keine spezifischen Bindungsstellen im Körper nutzen können.',
      D: 'Das Dogma, dass die toxische Wirkung stets linear oder monoton mit der Dosis ansteigt und unterhalb fester Schwellenwerte unbedenklich ist.',
      E: 'Das Modell, wonach eine Schadwirkung unabhängig von der Konzentration stets mit gleicher Intensität und Geschwindigkeit einsetzt.'
    },
    explanation: 'Der Text beschreibt das Paracelsus-Dogma („Die Dosis macht das Gift“), nach dem die Schadwirkung mit steigender Konzentration stetig zunimmt und unterhalb einer Schwellendosis als biologisch unbedenklich galt. Genau dieses lineare bzw. monotone Schwellenwertmodell wird durch endokrine Disruptoren widerlegt (Option D). A, B, C und E stellen andere toxikologische oder physiologische Annahmen dar, die nicht dem beschriebenen Dogma entsprechen.'
  },
  'tv-sim11-q08': {
    question: 'Welcher zelluläre Mechanismus führt laut Text dazu, dass endokrine Disruptoren bereits bei minimalen Dosen Effekte auslösen, während hohe Konzentrationen zu einer Abschwächung der Wirkung führen?',
    options: {
      A: 'Eine vollständige Blockade der hepatischen Ausscheidungsenzyme durch minimale Schadstoffmengen.',
      B: 'Die hohe Empfindlichkeit von Rezeptoren bei Minimaldosen gegenüber einer Internalisierung und Herabregulation (Down-Regulation) bei hohen Konzentrationen.',
      C: 'Die spontane chemische Neutralisierung von Hormonrezeptoren durch die permanente Bindung von Weichmachern an die Zellmembran.',
      D: 'Eine gesteigerte Synthese körpereigener Hormone als kompensatorische Reaktion auf hohe Schadstoffdosen.',
      E: 'Eine irreversible Zerstörung der Hormonrezeptoren bereits bei geringster Exposition, die bei höheren Dosen paradoxerweise ausbleibt.'
    },
    explanation: 'Der Text erklärt nicht-monotone Dosis-Wirkungs-Kurven dadurch, dass physiologische Hormonrezeptoren evolutiv auf winzigste Hormonmengen ansprechen (Bindung bei Minimaldosen), während hohe Dosen zur Internalisierung und Herabregulation (Down-Regulation) der Rezeptoren führen, wodurch das Gewebe unempfindlicher wird (Option B). A, C, D und E nennen falsche Mechanismen, die im Text nicht beschrieben werden.'
  },
  'tv-sim11-q10': {
    options: {
      A: 'Sie verschieben Routineentscheidungen systematisch auf den Schichtbeginn des Folgetages, um Konflikte mit Patienten zu vermeiden.',
      B: 'Sie weichen unbewusst auf kognitiv weniger anstrengende Standardoptionen oder konfliktvermeidende Verordnungen aus.',
      C: 'Sie kompensieren nachlassende Konzentration durch eine striktere und zeitintensivere Einhaltung klinischer Hygieneroutinen.',
      D: 'Sie verlagern zeitintensive Vorsorgeuntersuchungen bevorzugt in die späten Nachmittagsstunden, um den Vormittag für Notfälle freizuhalten.',
      E: 'Sie delegieren diagnostische Abwägungen sofort an nachgeordnete Pflegekräfte, um eigene Behandlungsfehler formell abzuwenden.'
    },
    explanation: 'Bei Erschöpfung der exekutiven Ressourcen greift das Gehirn laut Text unbewusst auf energieeffiziente kognitive Abkürzungen zurück: Behandler tendieren zu risikovermeidenden Standardvorgaben (Defaults), zur Aufschiebung von Entscheidungen oder zum Nachgeben gegenüber äußeren Anforderungen (Option B). A, C, D und E sind falsche Verhaltensmuster; Hygiene-Compliance und Nachmittags-Vorsorgeuntersuchungen brechen laut Text sogar signifikant ein.'
  },
  'tv-sim11-q11': {
    options: {
      A: 'Ein tatsächlicher Anstieg bakterieller Sekundärinfektionen im Patientenkollektiv während der Abendstunden.',
      B: 'Ein erhöhtes Patientenaufkommen gegen Schichtende, das eine Verkürzung der Konsultationszeit aus rein kapazitären Gründen erzwingt.',
      C: 'Das Nachlassen der mentalen Energie, die erforderlich wäre, um Patienten über die Unwirksamkeit von Antibiotika aufzuklären und Widerstände abzubauen.',
      D: 'Eine fehlerhafte Voreinstellung in elektronischen Verschreibungssystemen, die Antibiotika standardmäßig als Erstlinienmedikation vorgibt.',
      E: 'Ein Mangel an erfahrenem Aufsichtspersonal in Ambulanzen während der Schichtwechselzeiten.'
    },
    explanation: 'Laut Text schwindet mit zunehmender Schichtdauer die mentale Willenskraft, aufwendige Aufklärungsgespräche zu führen und gegen Patientenerwartungen zu argumentieren. Das voreilige Rezeptieren eines Antibiotikums dient daher als kognitiv bequemer Ausweg zur Konfliktvermeidung (Option C). A, B, D und E nennen alternative organisatorische oder epidemiologische Annahmen, die nicht der im Text nachgewiesenen psychologischen Ursache entsprechen.'
  },
  'tv-sim11-q12': {
    options: {
      A: 'Behandlungsfehler lassen sich primär durch intensivere Fortbildungskurse und Schulungen zur individuellen Stressbewältigung nachhaltig senken.',
      B: 'Eine bloße Verkürzung der Schichtzeiten genügt vollständig, um Fehlentscheidungen ohne Veränderung der klinischen Entscheidungsprozesse zu verhindern.',
      C: 'Die vollständige Automatisierung diagnostischer Entscheidungen durch Algorithmen sollte menschliche Urteile im Schichtdienst gänzlich ersetzen.',
      D: 'Fehlervermeidung erfordert strukturelle Reformen der Arbeits- und Entscheidungsarchitektur, da Fehler das Resultat biologischer Grenzen der Informationsverarbeitung sind.',
      E: 'Klinische Fehler sind vorrangig als persönliches Fehlverhalten einzelner Mitarbeiter zu sanktionieren, um die allgemeine Sorgfaltspflicht zu stärken.'
    },
    explanation: 'Der Text schließt synthesenhaft, dass Fehler das unvermeidbare Produkt ergonomisch mangelhafter Arbeitsorganisation und biologischer Grenzen der menschlichen Kognition sind. Wirksame Prävention verlangt daher strukturelle Reformen der Entscheidungsarchitektur (Option D). Appelle an Disziplin (A/E) greifen ins Leere, und isolierte Schichtzeitkürzungen (B) oder ein vollständiger Verzicht auf menschliche Entscheidungen (C) werden vom Text nicht gefordert.'
  }
};

let updatedCount = 0;
data.forEach(q => {
  if (updates[q.id]) {
    const u = updates[q.id];
    if (u.question) q.question = u.question;
    if (u.options) q.options = u.options;
    if (u.explanation) q.explanation = u.explanation;
    updatedCount++;
  }
});

console.log('Updated items:', updatedCount);
fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully written to', file);
