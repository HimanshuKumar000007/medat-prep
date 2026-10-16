import type { EeSimulationData } from "./types";

export const EE_SIMULATION_1: EeSimulationData = {
  simulationId: "ee-sim1",
  simNumber: 1,
  title: "Simulation 1 — Emotionen erkennen",
  subtitle: "14 Aufgaben · 21 Min. Prüfungszeit (~90s pro Aufgabe)",
  timeLimitSeconds: 1260, // 21 minutes
  questions: [
    // ─── Q01 (Leicht) ───
    {
      id: "ee-sim1-q01",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 1,
      person: {
        name: "Lukas",
        context: "Biologiestudent vor dem Prüfungsserver",
      },
      scenario:
        "Lukas hat wochenlang intensiv für eine anspruchsvolle Anatomieprüfung gelernt und hatte große Sorge durchzufallen, da er den Stoff stellenweise überwältigend fand. Als er das offizielle Prüfungsergebnis im Online-Portal öffnet, stellt er fest, dass er mit der Bestnote 'Sehr gut' bestanden hat.",
      emotions: [
        { id: "A", label: "Freude", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "likely" },
        { id: "C", label: "Neid", correctProbability: "unlikely" },
        { id: "D", label: "Niedergeschlagenheit", correctProbability: "unlikely" },
        { id: "E", label: "Stolz", correctProbability: "likely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die Bestnote nach Wochen der Anspannung löst unmittelbar intensive Freude und Erleichterung aus; zudem ist Stolz über die eigene Leistung naheliegend. Neid (auf andere) und Niedergeschlagenheit widersprechen dem hervorragenden persönlichen Ergebnis völlig.",
      rationaleByEmotion: {
        A: "Freude über das herausragende Prüfungsergebnis ist unmittelbar plausibel.",
        B: "Erleichterung tritt ein, da die wochenlange quälende Sorge vor dem Durchfallen schlagartig abfällt.",
        C: "Neid ist unbegründet, da Lukas selbst die Bestnote erreicht hat und kein Vergleich mit anderen geschildert wird.",
        D: "Niedergeschlagenheit ist das Gegenteil der durch diesen Erfolg ausgelösten Stimmung.",
        E: "Stolz ist hochgradig wahrscheinlich, da Lukas viel Arbeit investiert und das bestmögliche Resultat erzielt hat.",
      },
    },

    // ─── Q02 (Leicht) ───
    {
      id: "ee-sim1-q02",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 2,
      person: {
        name: "Miriam",
        context: "Assistenzärztin bei der Stationsvisite",
      },
      scenario:
        "Miriam hat während der morgendlichen Visite versehentlich eine Medikamentendosierung in die falsche Patientenkurve eingetragen. Der leitende Oberarzt bemerkt die Verwechslung rechtzeitig vor der Verabreichung, stellt Miriam jedoch vor dem gesamten versammelten Pflegeteam und mehreren PJ-Studierenden lautstark und herablassend bloß.",
      emotions: [
        { id: "A", label: "Scham", correctProbability: "likely" },
        { id: "B", label: "Verlegenheit", correctProbability: "likely" },
        { id: "C", label: "Ärger", correctProbability: "likely" },
        { id: "D", label: "Begeisterung", correctProbability: "unlikely" },
        { id: "E", label: "Gelassenheit", correctProbability: "unlikely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Das öffentliche Zurechtweisen vor Kollegen und Studierenden löst typischerweise Scham und Verlegenheit über den eigenen Fehler aus, gepaart mit Ärger über den herablassenden Ton des Oberarztes. Begeisterung und Gelassenheit sind in dieser akuten Demütigungssituation vollkommen unwahrscheinlich.",
      rationaleByEmotion: {
        A: "Scham ist sehr wahrscheinlich, da ihr eigener Fehler im Beisein vieler Kollegen und Untergebener offengelegt wurde.",
        B: "Verlegenheit entsteht unweigerlich durch die peinliche öffentliche Zurschaustellung.",
        C: "Ärger über die unprofessionelle, herablassende Art der Zurechtweisung ist psychologisch hochgradig plausibel.",
        D: "Begeisterung entbehrt jeder situativen Grundlage.",
        E: "Gelassenheit ist bei einem akuten öffentlichen Tadel und einem Beinahe-Fehler nicht plausibel.",
      },
    },

    // ─── Q03 (Leicht) ───
    {
      id: "ee-sim1-q03",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 3,
      person: {
        name: "Julian",
        context: "Krankenpflegeschüler nach der Nachtschicht",
      },
      scenario:
        "Julian kehrt nach einer kräftezehrenden Zwölf-Stunden-Nachtschicht erschöpft in seine WG zurück und sehnt sich ausschließlich nach Ruhe und Schlaf. Beim Aufschließen stellt er fest, dass seine Mitbewohner die Küche verwüstet haben, aus dem Wohnzimmer laute Bässe dröhnen und dort eine ungeplante Party in vollem Gange ist.",
      emotions: [
        { id: "A", label: "Ärger", correctProbability: "likely" },
        { id: "B", label: "Frustration", correctProbability: "likely" },
        { id: "C", label: "Dankbarkeit", correctProbability: "unlikely" },
        { id: "D", label: "Entspannung", correctProbability: "unlikely" },
        { id: "E", label: "Überforderung", correctProbability: "likely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Die Zerstörung des dringend benötigten Ruhebedürfnisses durch rücksichtsloses Verhalten führt unmittelbar zu Ärger und Frustration. Angesichts der physischen Erschöpfung ist auch Überforderung wahrscheinlich. Dankbarkeit und Entspannung sind diametral entgegengesetzt.",
      rationaleByEmotion: {
        A: "Ärger über die Rücksichtslosigkeit der Mitbewohner ist eine direkte und zu erwartende Reaktion.",
        B: "Frustration stellt sich ein, weil das Ziel des ungestörten Schlafens verwehrt wird.",
        C: "Dankbarkeit hat keinerlei Anknüpfungspunkt im Geschehen.",
        D: "Entspannung ist bei Lärm, Chaos und Schlafmangel unmöglich.",
        E: "Überforderung ist wahrscheinlich, da zu akuter körperlicher Erschöpfung nun unerwartetes Konfliktpotenzial hinzukommt.",
      },
    },

    // ─── Q04 (Leicht) ───
    {
      id: "ee-sim1-q04",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 4,
      person: {
        name: "Sophie",
        context: "Medizinisch-technische Laborantin",
      },
      scenario:
        "Sophie arbeitet seit zwei Monaten präzise an einer empfindlichen Zellkultur-Versuchsreihe für eine Krebsstudie. Als der Laborleiter sie unvermittelt zu sich bittet, eröffnet er ihr, dass ein defekter Inkubator die Proben über Nacht vollständig zerstört hat und die gesamte Arbeit der letzten Wochen unwiederbringlich verloren ist.",
      emotions: [
        { id: "A", label: "Enttäuschung", correctProbability: "likely" },
        { id: "B", label: "Erleichterung", correctProbability: "unlikely" },
        { id: "C", label: "Bestürzung", correctProbability: "likely" },
        { id: "D", label: "Freude", correctProbability: "unlikely" },
        { id: "E", label: "Frustration", correctProbability: "likely" },
      ],
      difficulty: "Leicht",
      explanation:
        "Der plötzliche Verlust einer zweimonatigen Forschungsarbeit durch einen Gerätedefekt löst Bestürzung, Enttäuschung und tief sitzende Frustration aus. Erleichterung und Freude stehen im krassen Widerspruch zum Ereignis.",
      rationaleByEmotion: {
        A: "Enttäuschung ist unvermeidlich, da das erhoffte Ergebnis zunichtegemacht wurde.",
        B: "Erleichterung ist unpassend, da kein bedrohlicher Zustand abgewendet wurde, sondern wertvolle Arbeit verloren ging.",
        C: "Bestürzung über das plötzliche, unverschuldete Scheitern des Projekts ist hochgradig plausibel.",
        D: "Freude ist gänzlich ausgeschlossen.",
        E: "Frustration über die verlorene Mühe und den Zwang zum Neustart ist eindeutig wahrscheinlich.",
      },
    },

    // ─── Q05 (Mittel) ───
    {
      id: "ee-sim1-q05",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 5,
      person: {
        name: "David",
        context: "Praktikant in einem Forschungsinstitut",
      },
      scenario:
        "David hat über Tage hinweg hochkomplexe statistische Grafiken für eine Fachpublikation erstellt. Im Institutskolloquium lobt der Abteilungsleiter die Brillanz und Exaktheit der Schaubilder vor allen Kollegen ausdrücklich. Auf den Folien und im Handout fehlt Davids Name jedoch vollständig; stattdessen ist dort nur der Name des Abteilungsleiters aufgeführt.",
      emotions: [
        { id: "A", label: "Stolz", correctProbability: "likely" },
        { id: "B", label: "Enttäuschung", correctProbability: "likely" },
        { id: "C", label: "Gleichgültigkeit", correctProbability: "unlikely" },
        { id: "D", label: "Kränkung", correctProbability: "likely" },
        { id: "E", label: "Angst", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "David erlebt eine ambivalente Situation: Das offene Lob vor allen Kollegen erzeugt berechtigten Stolz, während das Verschweigen seiner Urheberschaft auf den Unterlagen Enttäuschung und Kränkung hervorruft. Gleichgültigkeit ist bei dieser hohen persönlichen Involviertheit unwahrscheinlich; Angst ist mangels Bedrohungslage unbegründet.",
      rationaleByEmotion: {
        A: "Stolz ist wahrscheinlich, da seine Arbeit vor dem gesamten Kollegium als brillant gelobt wurde.",
        B: "Enttäuschung ist wahrscheinlich, weil die offizielle schriftliche Würdigung verweigert wurde.",
        C: "Gleichgültigkeit ist unwahrscheinlich, da David viel Mühe investiert hat und ihm die Anerkennung wichtig ist.",
        D: "Kränkung ist wahrscheinlich, da er sich um die formale Autorschaft betrogen fühlt.",
        E: "Angst ist unwahrscheinlich, da weder Sanktionen noch berufliche Gefahren im Raum stehen.",
      },
    },

    // ─── Q06 (Mittel) ───
    {
      id: "ee-sim1-q06",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 6,
      person: {
        name: "Elena",
        context: "Medizinstudentin beim Seminareferat",
      },
      scenario:
        "Elena hält ihr erstes großes Referat vor 40 Kommilitonen und dem Prüfungsvorsitzenden. Nach fünf Minuten fällt der Beamer aus und lässt sich nicht mehr starten. Ohne ihre vorbereiteten Folien und Notizen trägt Elena die verbleibenden zehn Minuten frei vor, strukturiert die anatomischen Zusammenhänge an der Tafel und beendet den Vortrag fehlerfrei unter langanhaltendem Beifall des Publikums.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Stolz", correctProbability: "likely" },
        { id: "C", label: "Scham", correctProbability: "unlikely" },
        { id: "D", label: "Nervosität", correctProbability: "likely" },
        { id: "E", label: "Ärger", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Nach dem überstandenen Stresstest und dem anerkennenden Beifall sind Erleichterung und Stolz dominant. Die körperliche Nervosität klingt unmittelbar nach einem solchen Adrenalinstoß erst langsam ab. Für Scham gibt es nach der bravourösen Leistung keinen Anlass; Ärger über die Technik tritt hinter dem Triumph des Gelingens zurück.",
      rationaleByEmotion: {
        A: "Erleichterung über das Meistern der extremen Stresssituation ist hochgradig wahrscheinlich.",
        B: "Stolz auf die eigene improvisierte Leistung und den Beifall ist sehr wahrscheinlich.",
        C: "Scham ist unbegründet, da Elena keinen Fehler gemacht, sondern brilliert hat.",
        D: "Nervosität ist als vegetative Nachwirkung des akuten Ausfalls direkt nach dem Vortrag noch präsent.",
        E: "Ärger ist unwahrscheinlich, da das überaus positive Gesamtergebnis die technische Panne überstrahlt.",
      },
    },

    // ─── Q07 (Mittel) ───
    {
      id: "ee-sim1-q07",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 7,
      person: {
        name: "Jonas",
        context: "Gesundheits- und Krankenpfleger auf der Palliativstation",
      },
      scenario:
        "Jonas hat über mehrere Wochen eine ältere Krebspatientin betreut und mit ihr vertraute Gespräche geführt. Zu Schichtbeginn teilt ihm die Stationsleitung mit, dass die Patientin in den frühen Morgenstunden friedlich und schmerzfrei im Kreise ihrer Angehörigen eingeschlafen ist. Auf seinem Schreibtisch liegt ein handgeschriebener Brief der Angehörigen, in dem sie sich von Herzen für seine menschliche Wärme bedanken.",
      emotions: [
        { id: "A", label: "Trauer", correctProbability: "likely" },
        { id: "B", label: "Trost", correctProbability: "likely" },
        { id: "C", label: "Schuldgefühl", correctProbability: "unlikely" },
        { id: "D", label: "Rührung", correctProbability: "likely" },
        { id: "E", label: "Wut", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Der Verlust einer nahestehenden Patientin löst Trauer aus, die jedoch durch das friedliche Sterben im Familienkreis getröstet wird. Der Dankesbrief sorgt für emotionale Rührung. Schuldgefühle sind mangels Versäumnissen unbegründet; Wut hat in diesem friedlichen Abschied keinen Raum.",
      rationaleByEmotion: {
        A: "Trauer um den Abschied von einer geschätzten Person ist eine natürliche und wahrscheinliche Reaktion.",
        B: "Trost über den schmerzfreien, friedlichen Verlauf und die Anwesenheit der Angehörigen ist plausibel.",
        C: "Schuldgefühle sind unwahrscheinlich, da die Versorgung optimal verlief und der Dank der Angehörigen dies bestätigt.",
        D: "Rührung über den persönlichen Dankesbrief der Familie ist sehr wahrscheinlich.",
        E: "Wut ist angesichts des friedlichen, erwarteten Verlaufs gänzlich unpassend.",
      },
    },

    // ─── Q08 (Mittel) ───
    {
      id: "ee-sim1-q08",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 8,
      person: {
        name: "Clara",
        context: "Doktorandin der Biochemie",
      },
      scenario:
        "Clara erfährt bei einem Treffen, dass ihre beste Freundin und Laborkollegin das renommierte Auslandsstipendium für Oxford erhalten hat. Clara hatte sich mit gleicher Leidenschaft um denselben Platz beworben; mit ihrer Absage ist ihr lang geplanter Forschungsaufenthalt mangels alternativer Fördermittel vorerst gescheitert.",
      emotions: [
        { id: "A", label: "Mitfreude", correctProbability: "likely" },
        { id: "B", label: "Enttäuschung", correctProbability: "likely" },
        { id: "C", label: "Neid", correctProbability: "likely" },
        { id: "D", label: "Gleichmut", correctProbability: "unlikely" },
        { id: "E", label: "Hoffnungslosigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "In dieser Konkurrenzsituation zwischen Freundinnen treten ambivalente Gefühle auf: Mitfreude für die Freundin existiert neben Enttäuschung über das eigene Scheitern und einem Anflug von Neid. Gleichmut ist bei dieser existenziellen Weichenstellung unmöglich; von völliger Hoffnungslosigkeit kann bei einem einzelnen Stipendienrückschlag noch nicht gesprochen werden.",
      rationaleByEmotion: {
        A: "Mitfreude für die beste Freundin ist trotz des eigenen Schmerzes wahrscheinlich.",
        B: "Enttäuschung über die eigene Absage und den geplatzten Auslandsaufenthalt ist unausweichlich.",
        C: "Neid ist als menschliche Begleitemotion in einer direkten Vergabesituation um ein einziges Gut plausibel.",
        D: "Gleichmut widerspricht der geschilderten intensiven Leidenschaft für das Projekt.",
        E: "Hoffnungslosigkeit ist unwahrscheinlich, da eine Absage ein herber Rückschlag, aber kein Lebensbankrott ist.",
      },
    },

    // ─── Q09 (Mittel) ───
    {
      id: "ee-sim1-q09",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 9,
      person: {
        name: "Fabian",
        context: "Wachleiter im Rettungsdienst",
      },
      scenario:
        "Fabian muss in fünf Minuten ein Kündigungsgespräch mit einem jungen Rettungssanitäter führen, dessen Probezeit wegen wiederholter organisatorischer Nachlässigkeiten nicht verlängert wird. Fabian schätzt den jungen Mann menschlich sehr und weiß, wie sehr dieser an dem Beruf hängt. Die Entscheidung der Dienststellenleitung ist jedoch endgültig und unumstößlich.",
      emotions: [
        { id: "A", label: "Unbehagen", correctProbability: "likely" },
        { id: "B", label: "Anspannung", correctProbability: "likely" },
        { id: "C", label: "Schadenfreude", correctProbability: "unlikely" },
        { id: "D", label: "Bedauern", correctProbability: "likely" },
        { id: "E", label: "Gleichgültigkeit", correctProbability: "unlikely" },
      ],
      difficulty: "Mittel",
      explanation:
        "Kurz vor einem unausweichlichen Trennungsgespräch mit einem sympathischen Mitarbeiter erlebt Fabian Unbehagen, akute innere Anspannung und Bedauern über die Situation. Schadenfreude und Gleichgültigkeit widersprechen Fabians menschlicher Wertschätzung für den Betroffenen.",
      rationaleByEmotion: {
        A: "Unbehagen vor der Überbringung einer existentiell belastenden Nachricht ist sehr wahrscheinlich.",
        B: "Anspannung fünf Minuten vor Beginn des schwierigen Gesprächs ist physiologisch und psychologisch typisch.",
        C: "Schadenfreude ist ausgeschlossen, da Fabian den Kollegen schätzt und ihm den Verlust nicht wünscht.",
        D: "Bedauern über das unvermeidliche Ausscheiden des Mitarbeiters ist eindeutig wahrscheinlich.",
        E: "Gleichgültigkeit ist unwahrscheinlich, da Fabian die Tragweite für den jungen Mann bewusst ist.",
      },
    },

    // ─── Q10 (Schwer) ───
    {
      id: "ee-sim1-q10",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 10,
      person: {
        name: "Rebecca",
        context: "Erfahrene Oberärztin in der klinischen Fallkonferenz",
      },
      scenario:
        "Rebecca hat über Wochen einen Behandlungsplan für eine multimorbide Patientin erarbeitet. Ein junger Assistenzarzt äußerte dabei vorsichtig Zweifel bezüglich einer seltenen Kreuzreaktion. In der interdisziplinären Expertenkonferenz bestätigt der Chefpharmakologe vor 20 Fachärzten die Korrektheit des Einwands des Assistenzarztes: Rebeccas Plan hätte zu einem lebensgefährlichen Nierenversagen geführt. Der Klinikdirektor lobt die offene Diskussionskultur der Abteilung ausdrücklich.",
      emotions: [
        { id: "A", label: "Erleichterung", correctProbability: "likely" },
        { id: "B", label: "Verlegenheit", correctProbability: "likely" },
        { id: "C", label: "Dankbarkeit", correctProbability: "likely" },
        { id: "D", label: "Bitterkeit", correctProbability: "unlikely" },
        { id: "E", label: "Triumph", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Rebecca spürt Erleichterung darüber, dass der Patientin kein schwerer Schaden zugefügt wurde, Dankbarkeit für den aufmerksamen Einwand und Verlegenheit über das eigene Übersehen vor versammelter Runde. Bitterkeit ist unbegründet, da die Kultur konstruktiv ist und kein feindseliger Angriff vorlag; Triumph ist das Gegenteil eines aufgedeckten Behandlungsfehlers.",
      rationaleByEmotion: {
        A: "Erleichterung ist sehr wahrscheinlich, da ein potentiell tödliches Nierenversagen rechtzeitig verhindert wurde.",
        B: "Verlegenheit ist unvermeidlich, da ihr als erfahrener Oberärztin ein gravierender Fehler vor dem Kollegium nachgewiesen wurde.",
        C: "Dankbarkeit gegenüber dem Assistenzarzt und Pharmakologen für das Bewahren vor einem Kunstfehler ist wahrscheinlich.",
        D: "Bitterkeit ist unwahrscheinlich, da kein ungerechter Angriff geschildert wird und der Fokus auf dem Schutz der Patientin liegt.",
        E: "Triumph ist völlig abwegig, da Rebecca sachlich im Unrecht war.",
      },
    },

    // ─── Q11 (Schwer) ───
    {
      id: "ee-sim1-q11",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 11,
      person: {
        name: "Simon",
        context: "Gründer und Medizintechnik-Entwickler",
      },
      scenario:
        "Simon hat mit seinem fünfköpfigen Team über drei Jahre hinweg ein innovatives Diagnosegerät für Herzrhythmusstörungen entwickelt. Ein internationaler Pharmakonzern erwirbt das Patent für mehrere Millionen Euro. Bei den finalen Vertragsgesprächen eröffnet der Konzernvorstand jedoch, dass das Produkt unter fremdem Konzernnamen vertrieben und Simons bisheriges Entwicklungslabor zum Monatsende komplett aufgelöst wird.",
      emotions: [
        { id: "A", label: "Genugtuung", correctProbability: "likely" },
        { id: "B", label: "Wehmut", correctProbability: "likely" },
        { id: "C", label: "Ohnmacht", correctProbability: "likely" },
        { id: "D", label: "Sorglosigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Reue", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Simon empfindet Genugtuung über die Bestätigung und den finanziellen Erfolg seiner Erfindung, gleichzeitig aber tiefe Wehmut über das Ende seines vertrauten Teams und Ohnmacht angesichts der radikalen Konzernentscheidung. Sorglosigkeit ist angesichts des drastischen Umbruchs unwahrscheinlich; Reue ist unwahrscheinlich, da der Verkauf ein gezieltes und hoch dotiertes Ziel war.",
      rationaleByEmotion: {
        A: "Genugtuung über die medizinische Reife und den millionenschweren Wert des Produkts ist plausibel.",
        B: "Wehmut über die Auflösung des eng zusammengeschweißten Teams nach drei Jahren Arbeit ist sehr wahrscheinlich.",
        C: "Ohnmacht gegenüber den Konzernvorgaben und dem Verlust der eigenen Kontrollmacht ist naheliegend.",
        D: "Sorglosigkeit widerspricht der tiefgreifenden Zäsur und der Verantwortung für die Mitarbeiter.",
        E: "Reue ist unwahrscheinlich, da die Veräußerung ein logischer wirtschaftlicher Meilenstein war.",
      },
    },

    // ─── Q12 (Schwer) ───
    {
      id: "ee-sim1-q12",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 12,
      person: {
        name: "Hanna",
        context: "Medizinstudentin im Praktischen Jahr (PJ)",
      },
      scenario:
        "Hanna hat bei einem bisher diagnostisch unklaren Fall eigenständig seltene Laborparameter recherchiert und den Verdacht auf Morbus Wilson geäußert, der sich in der Biopsie voll bestätigt. Bei der Chefarztvisite stellt der Stationsarzt den Fall vor und präsentiert die diagnostische Entdeckung wortreich als seinen eigenen Geistesblitz. Hanna steht schweigend in der zweiten Reihe daneben und wird mit keinem Wort erwähnt.",
      emotions: [
        { id: "A", label: "Bestätigung", correctProbability: "likely" },
        { id: "B", label: "Empörung", correctProbability: "likely" },
        { id: "C", label: "Hilflosigkeit", correctProbability: "likely" },
        { id: "D", label: "Selbstzweifel", correctProbability: "unlikely" },
        { id: "E", label: "Ehrfurcht", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Hanna erfährt fachliche Bestätigung, da ihre unkonventionelle Diagnose korrekt war. Die unverschämte Aneignung durch den Stationsarzt erzeugt akute Empörung, gepaart mit Hilflosigkeit aufgrund der hierarchischen Machtlosigkeit als PJ-Studentin. Selbstzweifel sind unbegründet, da die Biopsie recht gab; Ehrfurcht vor dem unredlichen Kollegen ist ausgeschlossen.",
      rationaleByEmotion: {
        A: "Innere Bestätigung darüber, dass ihr medizinisches Urteil exakt zutraf, ist sehr wahrscheinlich.",
        B: "Empörung über den offenen Ideenklau und die Unfairness des Vorgesetzten ist unmittelbar plausibel.",
        C: "Hilflosigkeit ist wahrscheinlich, da sie in der förmlichen Chefarztvisite die Hierarchie nicht sprengen kann.",
        D: "Selbstzweifel sind unwahrscheinlich, da die Tatsachen ihre fachliche Kompetenz objektiv belegen.",
        E: "Ehrfurcht vor dem Stationsarzt entsteht bei einem solchen Verhalten keinesfalls.",
      },
    },

    // ─── Q13 (Schwer) ───
    {
      id: "ee-sim1-q13",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 13,
      person: {
        name: "Maximilian",
        context: "Erstsemesterstudent im Medizinstudium",
      },
      scenario:
        "Maximilian hatte seiner Lerngruppe zugesagt, die Zusammenfassung für den Stoffwechselteil der Biochemie-Klausur zu erstellen. Wegen privater Ablenkung hat er die Aufgabe oberflächlich und voller fehlerhafter Enzymreaktionen abgeliefert. Die Gruppe bemerkte die Mängel erst am Vorabend des Tests, korrigierte sie in einer Nachtschicht ohne Maximilian und schloss ihn anschließend wortlos aus dem gemeinsamen Gruppenchat aus.",
      emotions: [
        { id: "A", label: "Schuldgefühl", correctProbability: "likely" },
        { id: "B", label: "Verunsicherung", correctProbability: "likely" },
        { id: "C", label: "Einsamkeit", correctProbability: "likely" },
        { id: "D", label: "Wut", correctProbability: "unlikely" },
        { id: "E", label: "Selbstzufriedenheit", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Maximilian wird mit den Folgen seines eigenen Pflichtversäumnisses konfrontiert: Er spürt Schuldgefühle gegenüber der Gruppe, Verunsicherung über sein weiteres Studium und Einsamkeit durch den plötzlichen sozialen Ausschluss. Wut auf die Gruppe ist unwahrscheinlich, da die Ursache unstrittig bei ihm lag; Selbstzufriedenheit scheidet völlig aus.",
      rationaleByEmotion: {
        A: "Schuldgefühle darüber, die Freunde hängen gelassen und ihnen eine Nachtschicht aufgebürdet zu haben, sind sehr wahrscheinlich.",
        B: "Verunsicherung über das eigene Ansehen und die zukünftige Isolation im Semester ist plausibel.",
        C: "Einsamkeit stellt sich durch den abrupten Ausschluss aus dem sozialen Lernnetzwerk ein.",
        D: "Wut ist unwahrscheinlich, da Maximilian sich seines eigenen Fehlverhaltens bewusst sein muss.",
        E: "Selbstzufriedenheit widerspricht dem handfesten Versagen und der sozialen Ächtung diametral.",
      },
    },

    // ─── Q14 (Schwer) ───
    {
      id: "ee-sim1-q14",
      simulationId: "ee-sim1",
      subtest: "EE",
      questionNumber: 14,
      person: {
        name: "Theresa",
        context: "Assistenzärztin in der Notfallaufnahme",
      },
      scenario:
        "Theresa hat in einer fordernden Zwölf-Stunden-Schicht zwei Schwerverletzte nach einem Verkehrsunfall erfolgreich stabilisiert und an die Intensivstation übergeben. Als sie sich erschöpft umziehen will, erfährt sie von der Triage-Schwester, dass im Warteraum ein älterer Patient mit unklaren Brustschmerzen kollabiert ist, weil er während ihrer Notfallversorgung übersehen und zu niedrig eingestuft worden war.",
      emotions: [
        { id: "A", label: "Erschöpfung", correctProbability: "likely" },
        { id: "B", label: "Bestürzung", correctProbability: "likely" },
        { id: "C", label: "Zerrissenheit", correctProbability: "likely" },
        { id: "D", label: "Teilnahmslosigkeit", correctProbability: "unlikely" },
        { id: "E", label: "Hochstimmung", correctProbability: "unlikely" },
      ],
      difficulty: "Schwer",
      explanation:
        "Theresa erlebt das Aufeinandertreffen von körperlicher Erschöpfung nach der Schicht und akuter Bestürzung über den Notfall im Warteraum. Die Ambivalenz zwischen gelungener Lebensrettung und dem übersehenen Patienten erzeugt spürbare innere Zerrissenheit. Teilnahmslosigkeit und Hochstimmung sind in diesem ernsten klinischen Dilemma unwahrscheinlich.",
      rationaleByEmotion: {
        A: "Körperliche und mentale Erschöpfung nach 12 Stunden Akutmedizin ist unausweichlich.",
        B: "Bestürzung über den Zwischenfall im Warteraum ist für eine verantwortungsbewusste Ärztin hochgradig plausibel.",
        C: "Innere Zerrissenheit zwischen dem Stolz auf die geretteten Unfallopfer und dem Entsetzen über den kollabierten Patienten ist wahrscheinlich.",
        D: "Teilnahmslosigkeit widerspricht dem empathischen Engagement und der ärztlichen Pflicht.",
        E: "Hochstimmung wird durch die Hiobsbotschaft im Warteraum sofort im Keim erstickt.",
      },
    },
  ],
};
