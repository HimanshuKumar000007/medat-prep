# Physik Kapitel 4: Wärmelehre — Set 4 (Fragen 76 bis 100)

---

### Frage 76
**Kategorie:** Wärmelehre  
**Subkategorie:** Temperatur  
**Lernziel / Subskill:** Skaleninvarianz von Temperaturdifferenzen ($\Delta T = \Delta \vartheta$)  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Bei einem labordiagnostischen Versuch wird eine biologische Gewebeprobe um genau $\Delta \vartheta = 15{,}0\,^\circ\text{C}$ erwärmt.  
Welcher Temperaturerhöhung $\Delta T$ entspricht dies in der thermodynamischen Kelvin-Skala?

- (A) $\Delta T = 288{,}15\,\text{K}$
- (B) $\Delta T = 258{,}15\,\text{K}$
- (C) $\Delta T = 0{,}055\,\text{K}$
- (D) $\Delta T = 273{,}15\,\text{K}$
- (E) $\Delta T = 15{,}0\,\text{K}$ (da $1\,\text{K}$ exakt dieselbe Schrittweite wie $1\,^\circ\text{C}$ besitzt)

**Richtige Antwort:** E

**Erklärung:**
Die absolute Temperatur berechnet sich über $T = \vartheta + 273{,}15\,\text{K}$.  
Bildet man die Differenz zweier Temperaturen $T_2 - T_1$, kürzt sich der konstante Offset von $273{,}15$ heraus:
$$\Delta T = T_2 - T_1 = (\vartheta_2 + 273{,}15) - (\vartheta_1 + 273{,}15) = \vartheta_2 - \vartheta_1 = \Delta \vartheta$$
Eine Temperaturerhöhung um $15{,}0\,^\circ\text{C}$ entspricht somit exakt einer Zunahme um $15{,}0\,\text{Kelvin}$.  
*(Distraktor A addiert fälschlicherweise 273,15 zur Differenz, was nur für absolute Temperaturpunkte gilt).*

---

### Frage 77
**Kategorie:** Wärmelehre  
**Subkategorie:** Temperatur  
**Lernziel / Subskill:** Thermische Ausdehnung eines Hohlkörpers (Bohrung in einer Metallplatte)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In einer chirurgischen Stahlplatte befindet sich eine kreisrunde Bohrung (Loch) mit dem Durchmesser $d_0 = 10{,}0\,\text{mm}$ bei Raumtemperatur ($20\,^\circ\text{C}$). Die Platte wird für einen Sterilisationsvorgang gleichmäßig auf $150\,^\circ\text{C}$ erhitzt.  
Wie verändert sich der Durchmesser des Lochs durch diese thermische Erwärmung der Stahlplatte?

- (A) Der Durchmesser des Lochs wird kleiner, weil sich das umgebende Metall nach innen in den Hohlraum hinein ausdehnt.
- (B) Der Durchmesser des Lochs vergrößert sich exakt um denselben Betrag, um den sich ein aus demselben Metall bestehender massiver Zylinder mit dem Durchmesser $d_0$ ausdehnen würde.
- (C) Der Durchmesser bleibt exakt konstant, da sich radiale und tangentiale Ausdehnung gegenseitig aufheben.
- (D) Das Loch zieht sich bei $100\,^\circ\text{C}$ vollständig zu.
- (E) Der Durchmesser verkleinert sich quadratisch mit der Temperatur.

**Richtige Antwort:** B

**Erklärung:**
Die thermische Ausdehnung eines Festkörpers verhält sich wie eine **fotografische Vergrößerung**: Alle Abstände zwischen beliebigen Atomen des Körpers nehmen bei Temperaturerhöhung proportional zu ($L = L_0 (1 + \alpha \Delta T)$).  
Auch der Umfang der Bohrung $U = \pi \cdot d$ dehnt sich mit dem Ausdehnungskoeffizienten des Metalls aus:
$$U = U_0 (1 + \alpha \Delta T) \implies d = d_0 (1 + \alpha \Delta T)$$
Hohlräume, Bohrungen oder Innenvolumina dehnen sich bei Erwärmung stets genauso aus, als wären sie vollständig mit dem umgebenden Material ausgefüllt. Der Durchmesser wird größer.

---

### Frage 78
**Kategorie:** Wärmelehre  
**Subkategorie:** Temperatur  
**Lernziel / Subskill:** Physikalische Messprinzipien moderner Thermometer (Infrarot-Pyrometrie)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In der klinischen Notfallmedizin werden Körperkerntemperaturen häufig mit einem Infrarot-Ohrthermometer sekundenschnell am Trommelfell bestimmt.  
Welcher physikalische Effekt liegt dieser berührungslosen Temperaturmessung zugrunde?

- (A) Die Messung der thermischen Längenausdehnung eines Gallium-Flüssigkeitsfadens
- (B) Die Messung des osmotischen Drucks der Tränenflüssigkeit
- (C) Die Messung des frequenzabhängigen Schallwellenwiderstands im Gehörgang
- (D) Die Detektion der vom Trommelfell emittierten thermischen Infrarotstrahlung, deren spektrale Intensitätsverteilung und Gesamtleistung nach dem Stefan-Boltzmann-Gesetz streng mit der vierten Potenz der absoluten Temperatur skaliert ($P \propto T^4$)
- (E) Die Messung der elektrischen Leitfähigkeit des Cerumens

**Richtige Antwort:** D

**Erklärung:**
Jeder Körper mit einer Temperatur über dem absoluten Nullpunkt emittiert kontinuierlich elektromagnetische Temperaturstrahlung (Schwarzkörperstrahlung).  
Nach dem **Stefan-Boltzmann-Gesetz** ist die abgestrahlte Strahlungsleistung proportional zur vierten Potenz der absoluten Temperatur:
$$P = \varepsilon \cdot \sigma \cdot A \cdot T^4$$
Das Infrarot-Thermometer fokussiert die Wärmestrahlung des gut durchbluteten Trommelfells auf einen pyroelektrischen Sensor oder eine Thermosäule. Aus der gemessenen Infrarot-Strahlungsintensität berechnet der Mikroprozessor exakt die zugehörige Körperkerntemperatur in Kelvin bzw. Grad Celsius.

---

### Frage 79
**Kategorie:** Wärmelehre  
**Subkategorie:** Innere Energie & Wärmekapazität  
**Lernziel / Subskill:** Einleiten von Heißdampf in kaltes Wasser (Mischungsregel mit Phasenwechsel)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 45 Sekunden

In ein wärmeisoliertes Gefäß mit $m_W = 500\,\text{g}$ flüssigem Wasser von $\vartheta_W = 20\,^\circ\text{C}$ ($c_W \approx 4{,}2\,\frac{\text{kJ}}{\text{kg}\cdot\text{K}}$) wird gesättigter gasförmiger Wasserdampf von genau $100\,^\circ\text{C}$ eingeleitet, bis das gesamte Gemisch eine Endtemperatur von $\vartheta_{\text{misch}} = 40\,^\circ\text{C}$ erreicht.  
Konstanten: Spezifische Verdampfungswärme von Wasser $q_V \approx 2\,260\,\frac{\text{kJ}}{\text{kg}}$.  
Welche Masse an Wasserdampf $m_D$ muss hierfür näherungsweise kondensieren?

- (A) $m_D \approx 16{,}7\,\text{g}$ (ca. $17\,\text{g}$)
- (B) $m_D \approx 100\,\text{g}$
- (C) $m_D \approx 250\,\text{g}$
- (D) $m_D \approx 4{,}2\,\text{g}$
- (E) $m_D \approx 500\,\text{g}$

**Richtige Antwort:** A

**Erklärung:**
1. **Wärmeaufnahme des kalten Wassers bei Erwärmung von $20\,^\circ\text{C}$ auf $40\,^\circ\text{C}$:**
   $$Q_{\text{auf}} = m_W \cdot c_W \cdot \Delta T = 0{,}50\,\text{kg} \cdot 4{,}2\,\frac{\text{kJ}}{\text{kg}\cdot\text{K}} \cdot 20\,\text{K} = 42{,}0\,\text{kJ}$$
2. **Wärmeabgabe des kondensierenden und abkühlenden Dampfes:**
   - Freisetzung der Kondensationswärme bei $100\,^\circ\text{C}$:
     $$Q_1 = m_D \cdot q_V = m_D \cdot 2\,260\,\frac{\text{kJ}}{\text{kg}}$$
   - Abkühlung des entstandenen Heißwassers von $100\,^\circ\text{C}$ auf $40\,^\circ\text{C}$ ($\Delta T = 60\,\text{K}$):
     $$Q_2 = m_D \cdot c_W \cdot 60\,\text{K} = m_D \cdot 4{,}2 \cdot 60 = m_D \cdot 252\,\frac{\text{kJ}}{\text{kg}}$$
   - Gesamte Wärmeabgabe:
     $$Q_{\text{ab}} = m_D \cdot (2\,260 + 252)\,\frac{\text{kJ}}{\text{kg}} = m_D \cdot 2\,512\,\frac{\text{kJ}}{\text{kg}}$$
3. **Massenberechnung:**
   $$Q_{\text{ab}} = Q_{\text{auf}} \implies m_D = \frac{42{,}0\,\text{kJ}}{2\,512\,\frac{\text{kJ}}{\text{kg}}} \approx \frac{42}{2\,500}\,\text{kg} = 0{,}0168\,\text{kg} \approx 16{,}7\,\text{g}$$
Aufgrund der enormen Kondensationswärme reicht eine winzige Dampfmenge von ca. $17\,\text{g}$ aus, um einen halben Liter Wasser um $20\,^\circ\text{C}$ zu erwärmen!

---

### Frage 80
**Kategorie:** Wärmelehre  
**Subkategorie:** Innere Energie & Wärmekapazität  
**Lernziel / Subskill:** Mechanismen des Wärmetransports (Konduktion, Konvektion, Strahlung)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Der menschliche Organismus tauscht kontinuierlich thermische Energie mit seiner Umwelt über physikalische Transportmechanismen aus.  
Welche drei fundamentalen Mechanismen der Wärmeübertragung existieren in der Physik, und welcher davon benötigt **kein materielles Trägermedium** (kann sich im absoluten Vakuum ausbreiten)?

- (A) Osmose, Diffusion und Filtration; alle drei benötigen zwingend flüssiges Wasser.
- (B) Wärmeleitung, Konvektion und Sublimation; Konvektion breitet sich im Vakuum aus.
- (C) Wärmeleitung (Konduktion durch atomare Stöße), Konvektion (Wärmemitführung durch strömende Gase oder Flüssigkeiten) und Wärmestrahlung (Radiation); ausschließlich die **Wärmestrahlung** (elektromagnetische Wellen) breitet sich ohne Trägermaterie ungehindert durch das Vakuum aus.
- (D) Wärmeleitung und Kernspaltung; Wärmeleitung funktioniert im Vakuum am besten.
- (E) Im Vakuum ist die Übertragung thermischer Energie physikalisch unmöglich.

**Richtige Antwort:** C

**Erklärung:**
1. **Wärmeleitung (Konduktion):** Energietransport über mikroskopische Stöße benachbarter Atome/Moleküle ohne makroskopischen Massetransport (benötigt Materie, z. B. Metalle, Hautkontakt).
2. **Konvektion (Wärmeströmung):** Wärmetransport durch makroskopische Strömung eines Fluids (Flüssigkeit oder Gas; z. B. Blutkreislauf, Luftzug an der Haut).
3. **Wärmestrahlung (Radiation):** Emission und Absorption elektromagnetischer Wellen (vorwiegend im Infrarotbereich). Sie benötigt kein Medium (Sonneneinstrahlung durch das Weltall).

---

### Frage 81
**Kategorie:** Wärmelehre  
**Subkategorie:** Innere Energie & Wärmekapazität  
**Lernziel / Subskill:** Wärmestau und Anstieg der Körperkerntemperatur bei fehlender Wärmeabgabe  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 30 Sekunden

Bei einem Sportler ($m = 70\,\text{kg}$, mittlere spezifische Wärmekapazität $c_{\text{Körper}} \approx 3{,}5\,\frac{\text{kJ}}{\text{kg}\cdot\text{K}}$) fällt unter extremer Hitze und Dehydratation die Schweißsekretion vollständig aus. Die arbeitende Muskulatur produziert eine metabolische Netto-Wärmeleistung von $P = 490\,\text{W}$ ($490\,\text{J/s}$), die bei den herrschenden Bedingungen nicht an die Umwelt abgeführt werden kann.  
Um wie viel Grad pro Minute ($\Delta T / \Delta t$) steigt die Körperkerntemperatur des Sportlers unter diesen dramatischen Bedingungen an (Gefahr eines lebensbedrohlichen Hitzschlags)?

- (A) $0{,}002\,^\circ\text{C}$ pro Minute
- (B) $1{,}4\,^\circ\text{C}$ pro Minute
- (C) $0{,}70\,^\circ\text{C}$ pro Minute
- (D) $0{,}02\,^\circ\text{C}$ pro Minute
- (E) $0{,}12\,^\circ\text{C}$ pro Minute (entspricht einem gefährlichen Anstieg um $1{,}2\,^\circ\text{C}$ alle 10 Minuten)

**Richtige Antwort:** E

**Erklärung:**
1. **Gesamtwärmekapazität des Körpers:**
   $$C = m \cdot c = 70\,\text{kg} \cdot 3{,}5\,\frac{\text{kJ}}{\text{kg}\cdot\text{K}} = 245\,\frac{\text{kJ}}{\text{K}} = 245\,000\,\frac{\text{J}}{\text{K}}$$
2. **Wärmeproduktion pro Minute ($\Delta t = 60\,\text{s}$):**
   $$Q = P \cdot \Delta t = 490\,\frac{\text{J}}{\text{s}} \cdot 60\,\text{s} = 29\,400\,\text{J}$$
3. **Temperaturanstieg pro Minute:**
   $$\Delta T = \frac{Q}{C} = \frac{29\,400\,\text{J}}{245\,000\,\frac{\text{J}}{\text{K}}} = \frac{294}{2\,450} = \frac{6}{50} = 0{,}12\,\text{K} = 0{,}12\,^\circ\text{C}$$
Ohne Kühlung steigt die Körpertemperatur in nur 25 Minuten um $3\,^\circ\text{C}$ (von $37\,^\circ\text{C}$ auf tödliche $40\,^\circ\text{C}$).

---

### Frage 82
**Kategorie:** Wärmelehre  
**Subkategorie:** Innere Energie & Wärmekapazität  
**Lernziel / Subskill:** Wärmekapazität $C$ eines Körpers vs. spezifische Wärmekapazität $c$  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Welcher mathematische und physikalische Zusammenhang besteht zwischen der **Wärmekapazität $C$** eines konkreten Gegenstandes (z. B. einer Wärmflasche) und der **spezifischen Wärmekapazität $c$** des darin enthaltenen Materials?

- (A) $C = \frac{c}{m}$
- (B) $C = m \cdot c$ (die Wärmekapazität des Objekts ist das Produkt aus seiner Masse und der stoffspezifischen Wärmekapazität)
- (C) $C = \frac{m}{c}$
- (D) $C$ und $c$ sind physikalisch identisch und besitzen dieselbe SI-Einheit.
- (E) $C = c \cdot \Delta T^2$

**Richtige Antwort:** B

**Erklärung:**
- Die **spezifische Wärmekapazität $c$** ist eine intensive Materialeigenschaft (Einheit: $\frac{\text{J}}{\text{kg}\cdot\text{K}}$), bezogen auf $1\,\text{kg}$ Masse.
- Die **Wärmekapazität $C$** ist eine extensive Eigenschaft eines konkreten Körpers (Einheit: $\frac{\text{J}}{\text{K}}$). Sie berechnet sich nach:
  $$C = m \cdot c$$
Sie gibt an, wie viel Wärme dem gesamten Körper zugeführt werden muss, um seine Temperatur um $1\,\text{K}$ zu erhöhen ($Q = C \cdot \Delta T$).

---

### Frage 83
**Kategorie:** Wärmelehre  
**Subkategorie:** Aggregatzustände & Phasenübergänge  
**Lernziel / Subskill:** Latente Erstarrungswärme beim Gefrieren von Wasser  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Was geschieht aus thermodynamischer Sicht, wenn $m = 1{,}0\,\text{kg}$ flüssiges Wasser von genau $0\,^\circ\text{C}$ in einem Gefrierfach vollständig zu Eis von $0\,^\circ\text{C}$ erstarrt?

- (A) Das Wasser nimmt $334\,\text{kJ}$ Wärme aus der Gefrierfachluft auf.
- (B) Die Temperatur des Wassers sinkt während des Erstarrungsvorgangs kontinuierlich auf $-40\,^\circ\text{C}$ ab.
- (C) Das Wasser leistet mechanische Volumenarbeit an der Gefrierfachwand, ohne dass Wärme fließt.
- (D) Das Wasser gibt seine spezifische Erstarrungswärme von $Q_E \approx 334\,\text{kJ}$ an das Kühlaggregat ab, während seine Temperatur exakt auf dem Plateau von $0\,^\circ\text{C}$ verharrt.
- (E) Der Phasenwechsel erfolgt vollkommen ohne energetischen Umsatz, da Anfangs- und Endtemperatur identisch sind.

**Richtige Antwort:** D

**Erklärung:**
Erstarren ist der umgekehrte Prozess des Schmelzens.  
Um die beweglichen Wassermoleküle in das feste Kristallgitter des Eises einzubinden, muss ihnen die kinetische Energie entzogen werden, die sie zuvor gegen die Gitterkräfte aufrechterhalten hat.  
Pro Kilogramm Wasser wird exakt die **Erstarrungswärme** freigesetzt:
$$Q_E = m \cdot q_S = 1{,}0\,\text{kg} \cdot 334\,\frac{\text{kJ}}{\text{kg}} = 334\,\text{kJ}$$
Diese Wärme wird an die Umgebung (Kühlaggregat) abgegeben. Die Temperatur bleibt während des gesamten Gefrierens konstant bei $0\,^\circ\text{C}$ (Temperaturplateau).

---

### Frage 84
**Kategorie:** Wärmelehre  
**Subkategorie:** Aggregatzustände & Phasenübergänge  
**Lernziel / Subskill:** Der kritische Punkt im Phasendiagramm und überkritische Fluide  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Im Phasendiagramm eines Reinstoffes endet die Dampfdruckkurve (Siedekurve zwischen flüssig und gasförmig) an einem charakteristischen Endpunkt, dem **kritischen Punkt** (charakterisiert durch kritische Temperatur $T_k$ und kritischen Druck $p_k$).  
Welches physikalische Phänomen wird bei Temperaturen und Drücken oberhalb dieses kritischen Punktes beobachtet?

- (A) Flüssige und gasförmige Phase sind nicht mehr voneinander unterscheidbar; es existiert ein einziger homogener Zustand (**überkritisches Fluid**) ohne Phasengrenzfläche und ohne Oberflächenspannung.
- (B) Der Stoff zerfällt spontan in freie Atomkerne und Neutronen.
- (C) Die Massendichte des Stoffes fällt exakt auf den Wert null ab.
- (D) Der Stoff erstarrt unabhängig von der Temperatur zu einem ultraharten Diamantkristall.
- (E) Die Entropie des Stoffes nimmt negative Werte an.

**Richtige Antwort:** A

**Erklärung:**
Mit steigender Temperatur dehnt sich die Flüssigkeit aus (Dichte sinkt), während der Dampfdruck und damit die Dichte des gesättigten Dampfes stark ansteigen.  
Am **kritischen Punkt** werden die Dichten von Flüssigkeit und Dampf exakt identisch. Die Verdampfungswärme sinkt auf null, und die Phasengrenze (Meniskus) verschwindet. Oberhalb von $T_k$ und $p_k$ spricht man von einem **überkritischen Fluid** (supercritical fluid). Dieses füllt wie ein Gas jeden Raum vollständig aus, besitzt jedoch die hohe Dichte und das Lösungsvermögen einer Flüssigkeit (z. B. überkritisches $\text{CO}_2$ zur Entkoffeinierung von Kaffee).

---

### Frage 85
**Kategorie:** Wärmelehre  
**Subkategorie:** Aggregatzustände & Phasenübergänge  
**Lernziel / Subskill:** Druckabhängigkeit der Schmelztemperatur von Eis (Regelation und Le-Chatelier-Prinzip)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Bei den allermeisten chemischen Reinstoffen steigt die Schmelztemperatur bei Erhöhung des äußeren Drucks an, da die feste Phase ein kleineres Volumen einnimmt als die flüssige Schmelze. Bei Wasser bzw. Eis beobachtet man jedoch das entgegengesetzte Phänomen (**Druckaufschmelzung / Regelation**).  
Warum sinkt die Schmelztemperatur von Eis bei starker äußerer Druckbelastung unter $0\,^\circ\text{C}$ ab?

- (A) Weil Eis durch Kompression heißer wird als die Umgebung.
- (B) Weil hoher Druck die Bildung kovalenter Bindungen erzwingt.
- (C) Weil flüssiges Wasser eine höhere Dichte besitzt als festes Eis ($V_{\text{flüssig}} < V_{\text{fest}}$); nach dem Prinzip des kleinsten Zwanges (Le Chatelier) weicht das System dem äußeren Druck aus, indem es die Phase mit dem geringeren spezifischen Volumen (die flüssige Phase) begünstigt, sodass Eis unter hohem Druck bereits bei Temperaturen unter $0\,^\circ\text{C}$ schmilzt.
- (D) Weil Eis unter Druck seine spezifische Schmelzwärme verdoppelt.
- (E) Weil bei hohem Druck die Gravitationskräfte die elektrostatische Abstoßung überwinden.

**Richtige Antwort:** C

**Erklärung:**
Nach der **Clausius-Clapeyron-Gleichung** hängt die Steigung der Phasengrenzkurve von der Volumenänderung beim Phasenwechsel ab:
$$\frac{dp}{dT} = \frac{q_S}{T \cdot \Delta V}$$
Da Eis beim Schmelzen sein Volumen verringert ($\Delta V = V_{\text{Wasser}} - V_{\text{Eis}} < 0$, Dichteanomalie), ist die Steigung der Schmelzkurve im $p$-$T$-Diagramm für Wasser **negativ**!  
Wird von außen hoher Druck ausgeübt (z. B. unter den Kufen von Schlittschuhen oder am Grund von Gletschern), weicht das System thermodynamisch aus, indem es in den dichteren flüssigen Aggregatzustand übergeht: Der Schmelzpunkt sinkt unter $0\,^\circ\text{C}$.

---

### Frage 86
**Kategorie:** Wärmelehre  
**Subkategorie:** Osmotischer Druck  
**Lernziel / Subskill:** Prinzip der Umkehrosmose bei der Wasseraufbereitung  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In der Reinstwasseraufbereitung für Hämodialysestationen und bei der Meerwasserentsalzung wird das physikalische Verfahren der **Umkehrosmose** eingesetzt.  
Welche physikalische Bedingung muss an der semipermeablen Membran erfüllt sein, damit reines Wasser aus der Salzlösung in das Reinwasserkompartiment überströmt?

- (A) Die Temperatur der Salzlösung muss auf über $100\,^\circ\text{C}$ erhitzt werden.
- (B) Es muss ein absolutes Vakuum auf der Salzwasserseite angelegt werden.
- (C) Das Salzwasser muss mit Ultraschall bestrahlt werden, um die Ionenbindung aufzubrechen.
- (D) Der äußere hydrostatische Druck auf der Reinwasserseite muss den osmotischen Druck übersteigen.
- (E) Auf die konzentrierte Salzwasserseite muss von außen ein mechanischer Druck ausgeübt werden, der größer ist als der natürliche osmotische Druck der Lösung ($p > \Pi$), sodass Wassermoleküle entgegen dem osmotischen Gefälle durch die Membran ins Reinwasser gepresst werden.

**Richtige Antwort:** E

**Erklärung:**
Bei der natürlichen Osmose strömt Wasser spontan von der verdünnten zur konzentrierten Seite, getrieben vom osmotischen Druck $\Pi$.  
Übt man auf die konzentrierte Lösung mechanisch einen äußeren hydrostatischen Druck $p$ aus, der den osmotischen Druck übersteigt ($p > \Pi$), wird das chemische Potential des Wassers auf der Salzwasserseite höher als auf der Reinwasserseite: Die Flussrichtung kehrt sich um (**Umkehrosmose**). Wassermoleküle werden durch die semipermeable Membran filtriert, während Ionen, Bakterien und Pyrogene zurückgehalten werden.

---

### Frage 87
**Kategorie:** Wärmelehre  
**Subkategorie:** Osmotischer Druck  
**Lernziel / Subskill:** Volumeneffekt von Humanalbumin-Infusionen durch onkotischen Druck  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Einem Intensivpatienten mit akutem Volumenmangelschock werden $V_{\text{inf}} = 100\,\text{mL}$ einer hochkonzentrierten, hyperonkotischen $20\,\%$-igen Humanalbumin-Lösung intravenös verabreicht.  
Welcher Volumeneffekt auf das zirkulierende Plasmavolumen wird durch diese Infusion erzielt, und wie erklärt sich dieser biophysikalisch?

- (A) Das Plasmavolumen sinkt um $100\,\text{mL}$, da Albumin Wasser in das Interstitium treibt.
- (B) Das Plasmavolumen expandiert um ein Vielfaches des infundierten Volumens (zusätzlicher Einstrom von ca. $300 - 400\,\text{mL}$ Wasser aus dem Interstitium $\to$ Gesamtplasmaexpansion ca. $400 - 500\,\text{mL}$), da das Albumin im Gefäßbett verbleibt und durch seinen enormen onkotischen Druck interstitielle Flüssigkeit in die Blutbahn saugt.
- (C) Das Plasmavolumen steigt exakt nur um die infundierten $100\,\text{mL}$, da Proteine keinen osmotischen Sog ausüben können.
- (D) Das zirkulierende Volumen bleibt unverändert, da die Nieren das gesamte Albumin binnen Sekunden ausscheiden.
- (E) Es kommt zur sofortigen Hämolyse aller Erythrozyten im Gefäßbett.

**Richtige Antwort:** B

**Erklärung:**
Serumalbumin ist das quantitativ wichtigste Plasmaprotein und kann die intakte Kapillarwand wegen seiner Molekülgröße nicht frei passieren.  
Eine $20\,\%$-ige Albuminlösung besitzt einen ca. vier- bis fünffach höheren onkotischen Druck als normales Blutplasma (hyperonkotisch). Nach intravenöser Gabe erzeugt das Albumin einen massiven osmotischen Sog: Jedes Gramm Albumin bindet ca. $18\,\text{mL}$ Wasser im Gefäßraum. Aus dem umliegenden Interstitium strömen ca. $300 - 400\,\text{mL}$ Wasser in die Blutbahn nach, sodass die $100\,\text{mL}$-Infusion zu einer raschen **Volumenexpansion von ca. $400 - 500\,\text{mL}$** führt.

---

### Frage 88
**Kategorie:** Wärmelehre  
**Subkategorie:** Osmotischer Druck  
**Lernziel / Subskill:** Definition des Begriffs „Isotonie“ im medizinischen Kontext  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Was bedeutet die Bezeichnung einer Infusionslösung als **isoton** im medizinisch-klinischen Sprachgebrauch?

- (A) Die Lösung besitzt dieselbe elektrische Leitfähigkeit wie deionisiertes Wasser.
- (B) Die Lösung enthält dieselbe Masse an Proteinen wie menschliches Vollblut.
- (C) Die Lösung besitzt im Vorratsbeutel eine Temperatur von exakt $37\,^\circ\text{C}$.
- (D) Die Lösung weist denselben effektiven osmotischen Druck bzw. dieselbe Osmolarität auf wie das menschliche Blutplasma (ca. $290\,\text{mosmol/L}$), sodass Erythrozyten in ihr weder schwellen noch schrumpfen.
- (E) Die Lösung ist vollkommen frei von gelösten Teilchen ($0\,\text{mosmol/L}$).

**Richtige Antwort:** D

**Erklärung:**
Eine Lösung wird als **isoton** (oder isoosmotisch) zum Blutplasma bezeichnet, wenn ihre effektive Teilchenkonzentration (Osmolarität) der des Plasmas entspricht (ca. $285 - 295\,\text{mosmol/L}$, klinisch gerundet ca. $300\,\text{mosmol/L}$).  
In einem isotonen Milieu besteht zwischen dem Zellinneren der Erythrozyten und dem Außenraum kein osmotisches Druckgefälle: Der transmembranäre Wasserstrom ist im Gleichgewicht, und das Erythrozytenvolumen bleibt stabil.

---

### Frage 89
**Kategorie:** Wärmelehre  
**Subkategorie:** Arbeit und Wärme (1. Hauptsatz)  
**Lernziel / Subskill:** Isotherme Kompression eines idealen Gases ($W > 0 \implies Q < 0$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein ideales Gas wird in einem Zylinder isotherm bei konstanter Temperatur ($T = \text{konstant}$) langsam komprimiert. Dabei verrichtet die äußere Kraft am Gas eine mechanische Arbeit von $W = +600\,\text{J}$.  
Welche Wärmemenge $Q$ tauscht das Gas während dieser isothermen Kompression mit seiner Umgebung aus?

- (A) Das Gas gibt eine Wärmemenge von $Q = -600\,\text{J}$ an die Umgebung ab, da bei $\Delta T = 0$ die innere Energie unverändert bleibt ($\Delta U = 0 \implies Q = -W$).
- (B) Das Gas nimmt eine Wärmemenge von $Q = +600\,\text{J}$ aus der Umgebung auf.
- (C) $Q = 0\,\text{J}$, da isotherme Prozesse grundsätzlich vollkommen wärmeisoliert verlaufen.
- (D) $Q = +1\,200\,\text{J}$
- (E) Die abgegebene Wärme ist unberechenbar, da der Gasdruck nicht angegeben wurde.

**Richtige Antwort:** A

**Erklärung:**
Für ein ideales Gas hängt die innere Energie $U$ ausschließlich von der Temperatur ab.  
1. **Isothermer Prozess ($T = \text{konstant}$):**
   $$\Delta T = 0 \implies \Delta U = 0$$
2. **1. Hauptsatz der Wärmelehre:**
   $$\Delta U = Q + W \implies 0 = Q + W \iff Q = -W$$
Wird am Gas eine Kompressionsarbeit von $W = +600\,\text{J}$ verrichtet, muss die gesamte Energie als Wärme an das umgebende Kühlbad abgeführt werden ($Q = -600\,\text{J}$), damit die Temperatur des Gases nicht ansteigt.

---

### Frage 90
**Kategorie:** Wärmelehre  
**Subkategorie:** Arbeit und Wärme (1. Hauptsatz)  
**Lernziel / Subskill:** Thermischer Wirkungsgrad eines allgemeinen Kreisprozesses ($\eta = W_{\text{netto}} / Q_{\text{zu}}$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In einem thermodynamischen Kreisprozess nimmt ein Gas pro Zyklus eine Wärmemenge von $Q_{\text{zu}} = 5\,000\,\text{J}$ aus einem heißen Reservoir auf und gibt eine Abwärmemenge von $|Q_{\text{ab}}| = 3\,500\,\text{J}$ an ein Kältereservoir ab. Reibungsverluste werden vernachlässigt.  
Welche mechanische Nutzarbeit $W_{\text{netto}}$ verrichtet das Gas pro Zyklus an der Umgebung, und wie groß ist der thermische Wirkungsgrad $\eta$ dieses Kreisprozesses?

- (A) $W_{\text{netto}} = 3\,500\,\text{J}$; $\eta = 70\,\%$
- (B) $W_{\text{netto}} = 8\,500\,\text{J}$; $\eta = 59\,\%$
- (C) $W_{\text{netto}} = 1\,500\,\text{J}$; $\eta = 30\,\%$ (da $\eta = \frac{1\,500\,\text{J}}{5\,000\,\text{J}} = 0{,}30$)
- (D) $W_{\text{netto}} = 1\,500\,\text{J}$; $\eta = 15\,\%$
- (E) $W_{\text{netto}} = 5\,000\,\text{J}$; $\eta = 100\,\%$

**Richtige Antwort:** C

**Erklärung:**
1. **Nutzarbeit pro Zyklus:**
   Nach dem 1. Hauptsatz gilt für einen vollen Umlauf ($\Delta U = 0$):
   $$W_{\text{netto}} = Q_{\text{zu}} - |Q_{\text{ab}}| = 5\,000\,\text{J} - 3\,500\,\text{J} = 1\,500\,\text{J}$$
2. **Thermischer Wirkungsgrad:**
   $$\eta = \frac{W_{\text{netto}}}{Q_{\text{zu}}} = \frac{1\,500\,\text{J}}{5\,000\,\text{J}} = \frac{3}{10} = 0{,}30 = 30\,\%$$

---

### Frage 91
**Kategorie:** Wärmelehre  
**Subkategorie:** Arbeit und Wärme (1. Hauptsatz)  
**Lernziel / Subskill:** Adiabatische Temperaturgradienten in der Atmosphäre (Föhn-Effekt)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Wenn ein trockenes Luftpaket in der Erdatmosphäre über ein Gebirge strömt und auf der windabgewandten Seite (Lee) ins Tal absinkt, wird es durch den zunehmenden atmosphärischen Luftdruck komprimiert. Dieser Vorgang läuft näherungsweise adiabatisch mit dem trockenadiabatischen Temperaturgradienten von ca. $1{,}0\,^\circ\text{C}$ pro $100\,\text{m}$ Höhenunterschied ab.  
Welche Erwärmung erfährt dieses Luftpaket beim Absinken um eine Höhendifferenz von $\Delta h = 1\,500\,\text{m}$ ins Tal?

- (A) Es kühlt sich um $15\,^\circ\text{C}$ ab.
- (B) Die Temperatur bleibt konstant, da trockene Luft keine Wärme speichert.
- (C) Es erwärmt sich um $1{,}5\,^\circ\text{C}$.
- (D) Es kühlt sich um $1{,}5\,^\circ\text{C}$ ab.
- (E) Es erwärmt sich durch die adiabatische Kompression um genau $\Delta T = +15\,^\circ\text{C}$ (Föhn-Effekt).

**Richtige Antwort:** E

**Erklärung:**
Beim Absinken der Luftmasse steigt der hydrostatische Luftdruck. Die Umgebung verrichtet mechanische Kompressionsarbeit am Luftpaket ($W > 0$). Da der Vorgang rasch und an großen Luftmassen abläuft, findet praktisch kein Wärmeaustausch mit der Umgebung statt ($Q \approx 0$).  
Nach dem 1. Hauptsatz ($\Delta U = W > 0$) steigt die innere Energie und damit die Temperatur der Luft:
$$\Delta T = 1{,}0\,\frac{^\circ\text{C}}{100\,\text{m}} \cdot 1\,500\,\text{m} = +15\,^\circ\text{C}$$
Dies ist die physikalische Ursache des warmen, trockenen Fallwinds in den Alpentälern (**Föhn**).

---

### Frage 92
**Kategorie:** Wärmelehre  
**Subkategorie:** Arbeit und Wärme (1. Hauptsatz)  
**Lernziel / Subskill:** Freie Expansion eines idealen Gases ins Vakuum (Joule-Expansion)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 30 Sekunden

Ein starrer, thermisch perfekt isolierter Behälter besteht aus zwei Kammern A und B, die durch ein Ventil getrennt sind. In Kammer A befindet sich ein ideales Gas bei einer Temperatur von $T_1 = 300\,\text{K}$; Kammer B ist vollständig evakuiert (Vakuum). Nun wird das Ventil geöffnet, sodass das Gas frei in Kammer B expandiert, bis das gesamte Innenvolumen gleichmäßig ausgefüllt ist (**Joule-Expansion ins Vakuum**).  
Welche Aussage über die verrichtete Arbeit $W$, den Wärmeaustausch $Q$ und die Endtemperatur $T_2$ des idealen Gases ist physikalisch korrekt?

- (A) Das Gas leistet maximale mechanische Arbeit gegen das Vakuum ($W < 0$), wodurch seine Temperatur auf $0\,\text{K}$ abfällt.
- (B) Da das Gas gegen keinen äußeren Gegendruck expandiert ($p_{\text{außen}} = 0$), ist die verrichtete Arbeit $W = 0$; da das Gefäß isoliert ist, gilt $Q = 0 \implies \Delta U = 0$; folglich bleibt die Temperatur des idealen Gases unverändert bei $T_2 = 300\,\text{K}$.
- (C) Die innere Energie verdoppelt sich durch die Verdopplung des Volumens.
- (D) Das Gas nimmt spontan Wärme aus dem Vakuum auf, sodass die Temperatur auf $600\,\text{K}$ ansteigt.
- (E) Die Entropie des Gases sinkt bei dieser Expansion auf null ab.

**Richtige Antwort:** B

**Erklärung:**
Bei der freien Expansion ins Vakuum expandiert das Gas gegen einen äußeren Druck von null ($p_{\text{außen}} = 0$). Folglich wird keine mechanische Volumenarbeit an der Umgebung verrichtet:
$$W = -\int p_{\text{außen}} \, dV = 0$$
Da der Behälter thermisch isoliert ist, findet kein Wärmeaustausch statt:
$$Q = 0$$
Nach dem 1. Hauptsatz gilt:
$$\Delta U = Q + W = 0 \implies U = \text{konstant}$$
Da für ein ideales Gas die innere Energie ausschließlich eine Funktion der Temperatur ist ($U = U(T)$), folgt zwingend:
$$\Delta T = 0 \implies T_2 = T_1 = 300\,\text{K}$$

---

### Frage 93
**Kategorie:** Wärmelehre  
**Subkategorie:** 2. und 3. Hauptsatz & Entropie  
**Lernziel / Subskill:** Entropiezunahme beim spontanen Mischen idealer Gase (Mischungsentropie)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 35 Sekunden

Zwei verschiedene ideale Gase (z. B. Helium und Stickstoff) befinden sich bei identischem Druck und gleicher Temperatur in zwei durch eine Trennwand getrennten Kammern eines isolierten Systems. Nach dem Herausziehen der Trennwand vermischen sich die beiden Gase durch Diffusion spontan und vollständig.  
Welche Aussage über die Energie- und Entropiebilanz dieses Vorgangs ist zutreffend?

- (A) Die Gesamtenergie sinkt; die Gesamtentropie sinkt ebenfalls auf null ab.
- (B) Die Gesamtenergie steigt; die Gesamtentropie bleibt exakt konstant.
- (C) Da kein Wärmeaustausch stattfindet ($Q = 0$) und keine Arbeit geleistet wird ($W = 0$), bleibt die Gesamtentropie exakt unverändert ($\Delta S = 0$).
- (D) Die Gesamtenergie bleibt exakt konstant ($\Delta U = 0$); die Gesamtentropie nimmt irreversibel zu ($\Delta S_{\text{misch}} > 0$), da die mikroskopische Unordnung (Zahl der mikroskopisch realisierbaren Zustände $W$) durch die Durchmischung der Teilchensorten drastisch anwächst.
- (E) Die beiden Gase trennen sich nach kurzer Zeit von selbst wieder in ihre ursprünglichen Behälterhälften.

**Richtige Antwort:** D

**Erklärung:**
Das spontane Vermischen zweier verschiedener Gase ist ein klassischer thermodynamisch **irreversibler Prozess**.  
1. **Energie:** Da keine Wärme zu- oder abgeführt wird ($Q = 0$) und keine Volumenarbeit gegen eine äußere Begrenzung geleistet wird ($W = 0$), bleibt die innere Energie konstant: $\Delta U = 0$.
2. **Entropie:** Nach der Boltzmann-Formel $S = k_B \ln(W)$ nimmt die Zahl der zugänglichen Mikrozustände $W$ enorm zu, da jedes Teilchen nun das doppelte Volumen zur Verfügung hat. Es entsteht eine positive **Mischungsentropie** ($\Delta S > 0$). Dieser Vorgang kehrt sich niemals spontan um.

---

### Frage 94
**Kategorie:** Wärmelehre  
**Subkategorie:** 2. und 3. Hauptsatz & Entropie  
**Lernziel / Subskill:** Unmöglichkeit eines $100\,\%$-Wirkungsgrades bei zyklischen Wärmekraftmaschinen  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Warum kann selbst eine theoretisch ideale, vollkommen reibungsfreie zyklische Wärmekraftmaschine niemals einen thermischen Wirkungsgrad von $\eta = 100\,\%$ erreichen?

- (A) Weil der 2. Hauptsatz der Wärmelehre vorschreibt, dass bei jedem zyklischen Kreisprozess ein Teil der aufgenommenen Wärme als Abwärme an ein kälteres Reservoir abgegeben werden muss; $\eta = 100\,\%$ würde ein Kältereservoir am unerreichbaren absoluten Nullpunkt ($0\,\text{K}$) erfordern.
- (B) Weil der 1. Hauptsatz besagt, dass bei jeder Wärmeübertragung Masse vernichtet wird.
- (C) Weil mechanische Arbeit eine physikalisch minderwertigere Energieform als Wärme darstellt.
- (D) Weil ideale Gase bei Erwärmung ihre thermische Energie vollständig an die Gravitation verlieren.
- (E) Weil der Wirkungsgrad durch die Lichtgeschwindigkeit auf maximal $50\,\%$ gedeckelt ist.

**Richtige Antwort:** A

**Erklärung:**
Nach dem Carnot-Theorem lautet der maximale theoretische Wirkungsgrad einer Wärmekraftmaschine:
$$\eta = 1 - \frac{T_C}{T_H}$$
Ein Wirkungsgrad von $\eta = 1$ ($100\,\%$) erfordert zwingend:
$$\frac{T_C}{T_H} = 0 \iff T_C = 0\,\text{K}$$
Da der absolute Nullpunkt nach dem 3. Hauptsatz der Wärmelehre unerreichbar ist und jedes reale Kältereservoir (z. B. Umgebungsluft oder Kühlwasser) eine Temperatur von $T_C > 0\,\text{K}$ besitzt, muss jede zyklische Wärmekraftmaschine unvermeidbar Abwärme an die Umwelt abführen.

---

### Frage 95
**Kategorie:** Wärmelehre  
**Subkategorie:** 2. und 3. Hauptsatz & Entropie  
**Lernziel / Subskill:** Unerreichbarkeit des absoluten Nullpunkts nach dem 3. Hauptsatz  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In der modernen Tieftemperaturphysik können Gase durch Laserkühlung auf winzige Bruchteile eines Kelvins über dem absoluten Nullpunkt abgekühlt werden (z. B. $T = 10^{-9}\,\text{K}$).  
Warum kann der absolute Nullpunkt ($T = 0\,\text{K}$) dennoch durch keinen realen Prozess in einer endlichen Zahl von Schritten exakt erreicht werden?

- (A) Weil die Gravitationskonstante bei tiefen Temperaturen ihr Vorzeichen umkehrt.
- (B) Weil sich Teilchen bei $0\,\text{K}$ mit unendlicher Geschwindigkeit bewegen.
- (C) Weil nach dem 3. Hauptsatz die Entropiekurven verschiedener Zustände bei Annäherung an $0\,\text{K}$ zusammenlaufen ($\Delta S \to 0$); der Betrag an Entropie, der dem System pro Kühlschritt entzogen werden kann, strebt asymptotisch gegen null, sodass unendlich viele Schritte nötig wären.
- (D) Weil alle Kühlvorrichtungen bei $1\,\text{K}$ schmelzen.
- (E) Weil der absolute Nullpunkt durch ein physikalisches Gesetz bei $+4\,^\circ\text{C}$ liegt.

**Richtige Antwort:** C

**Erklärung:**
Jeder thermodynamische Kühlprozess beruht auf einer Abfolge von isothermen und adiabatischen Schritten zwischen zwei Zustandskurven (z. B. bei Magnetisierung und Entmagnetisierung).  
Nach dem 3. Hauptsatz der Wärmelehre (Nernst-Theorem) strebt die Entropie aller Reinstoffe für $T \to 0\,\text{K}$ gegen denselben Wert ($S \to 0$). Der Entropieabstand zwischen den Zustandskurven schrumpft bei Annäherung an den Nullpunkt zusammen. Um den verbleibenden Temperaturabstand zu überwinden, benötigt man unendlich viele Einzelschritte: Der absolute Nullpunkt ist **asymptotisch unerreichbar**.

---

### Frage 96
**Kategorie:** Wärmelehre  
**Subkategorie:** Gasgesetze & Ideales Gas  
**Lernziel / Subskill:** Dichteberechnung eines idealen Gases ($\rho = \frac{p \cdot M}{R \cdot T}$)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Welche Massendichte $\rho$ besitzt reines gasförmiges Stickstoffgas ($\text{N}_2$, molare Masse $M = 28\,\text{g/mol} = 0{,}028\,\text{kg/mol}$) bei einer Temperatur von $T = 300\,\text{K}$ und einem Druck von $p = 1{,}0 \cdot 10^5\,\text{Pa}$ ($1{,}0\,\text{bar}$)?  
Konstante: Allgemeine Gaskonstante $R \approx 8{,}3\,\frac{\text{J}}{\text{mol}\cdot\text{K}}$.

- (A) $\rho \approx 14\,\text{kg/m}^3$
- (B) $\rho \approx 0{,}11\,\text{kg/m}^3$
- (C) $\rho \approx 2{,}8\,\text{kg/m}^3$
- (D) $\rho \approx 28\,\text{kg/m}^3$
- (E) $\rho \approx 1{,}12\,\text{kg/m}^3$ (ca. $1{,}1\,\text{kg/m}^3$)

**Richtige Antwort:** E

**Erklärung:**
Aus der idealen Gasgleichung $p \cdot V = n \cdot R \cdot T = \frac{m}{M} \cdot R \cdot T$ folgt durch Umstellen nach der Dichte $\rho = \frac{m}{V}$:
$$\rho = \frac{p \cdot M}{R \cdot T}$$
Einsetzen der gegebenen SI-Zahlenwerte:
- Zähler: $p \cdot M = 1{,}0 \cdot 10^5\,\text{Pa} \cdot 0{,}028\,\frac{\text{kg}}{\text{mol}} = 2\,800\,\frac{\text{Pa}\cdot\text{kg}}{\text{mol}}$
- Nenner: $R \cdot T = 8{,}3\,\frac{\text{J}}{\text{mol}\cdot\text{K}} \cdot 300\,\text{K} = 2\,490\,\frac{\text{J}}{\text{mol}}$
$$\rho = \frac{2\,800}{2\,490}\,\frac{\text{kg}}{\text{m}^3} \approx \frac{2\,800}{2\,500}\,\frac{\text{kg}}{\text{m}^3} = \frac{28}{25}\,\frac{\text{kg}}{\text{m}^3} = 1{,}12\,\frac{\text{kg}}{\text{m}^3}$$
*(Dies entspricht sehr genau der tatsächlichen Dichte von Stickstoff und Luft unter Normalbedingungen von ca. $1{,}2\,\text{kg/m}^3$).*

---

### Frage 97
**Kategorie:** Wärmelehre  
**Subkategorie:** Gasgesetze & Ideales Gas  
**Lernziel / Subskill:** Gesetz von Dalton und Partialdrücke in der Atemluft  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Das **Gesetz von Dalton** besagt, dass der Gesamtdruck eines Gasgemisches gleich der Summe der Partialdrücke seiner Einzelkomponenten ist.  
Trockene Umgebungsluft auf Meereshöhe ($p_{\text{ges}} = 1\,000\,\text{hPa} = 1{,}0\,\text{bar}$) besteht näherungsweise zu $78\,\%$ aus Stickstoff ($\text{N}_2$), zu $21\,\%$ aus Sauerstoff ($\text{O}_2$) und zu $1\,\%$ aus Argon und Spurengasen.  
Welcher Sauerstoff-Partialdruck $p_{\text{O}_2}$ herrscht in dieser Atemluft?

- (A) $p_{\text{O}_2} = 21\,\text{hPa}$
- (B) $p_{\text{O}_2} = 210\,\text{hPa}$ ($0{,}21\,\text{bar}$)
- (C) $p_{\text{O}_2} = 780\,\text{hPa}$
- (D) $p_{\text{O}_2} = 1\,000\,\text{hPa}$
- (E) $p_{\text{O}_2} = 2{,}1\,\text{hPa}$

**Richtige Antwort:** B

**Erklärung:**
Nach dem Gesetz von Dalton ist der Partialdruck $p_i$ eines Gases im idealen Gemisch direkt proportional zu seinem Stoffmengen- bzw. Volumenanteil $x_i$:
$$p_i = x_i \cdot p_{\text{ges}}$$
Mit einem Sauerstoffanteil von $21\,\%$ ($x_{\text{O}_2} = 0{,}21$) und einem Gesamtdruck von $p_{\text{ges}} = 1\,000\,\text{hPa}$:
$$p_{\text{O}_2} = 0{,}21 \cdot 1\,000\,\text{hPa} = 210\,\text{hPa} = 0{,}21\,\text{bar}$$
*(Physiologische Bedeutung: Für die Sauerstoffsättigung des Hämoglobins in den Lungenalveolen ist nicht der Gesamtdruck, sondern ausschließlich der Sauerstoff-Partialdruck entscheidend).*

---

### Frage 98
**Kategorie:** Wärmelehre  
**Subkategorie:** Gasgesetze & Ideales Gas  
**Lernziel / Subskill:** Mittlere kinetische Translationsenergie eines Gasteilchens ($\langle E_{\text{kin}} \rangle = \frac{3}{2} k_B T$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Nach dem Gleichverteilungssatz der kinetischen Gastheorie besitzt ein einatomiges ideales Gasteilchen (wie Helium oder Argon) drei Translationsfreiheitsgrade der Bewegung ($x, y, z$).  
Welche mittlere kinetische Energie der Translation $\langle E_{\text{kin}} \rangle$ besitzt ein einzelnes Gasteilchen bei der thermodynamischen Temperatur $T$?

- (A) $\langle E_{\text{kin}} \rangle = k_B \cdot T^2$
- (B) $\langle E_{\text{kin}} \rangle = \frac{1}{2} m c^2$
- (C) $\langle E_{\text{kin}} \rangle = 3 \cdot R \cdot T$
- (D) $\langle E_{\text{kin}} \rangle = \frac{3}{2} k_B \cdot T$ (jeder Freiheitsgrad trägt im Mittel die kinetische Energie $\frac{1}{2} k_B T$ bei)
- (E) $\langle E_{\text{kin}} \rangle = 0$, da freie Teilchen erst im Vakuum kinetische Energie besitzen

**Richtige Antwort:** D

**Erklärung:**
Nach dem **Äquipartitionstheorem** (Gleichverteilungssatz) entfällt auf jeden quadratischen Freiheitsgrad der Bewegung im thermischen Gleichgewicht die mittlere Energie:
$$\langle E \rangle = \frac{1}{2} k_B \cdot T$$
Ein punktförmiges Teilchen kann sich in drei Raumdimensionen frei bewegen ($f = 3$ translatorische Freiheitsgrade: $\frac{1}{2}mv_x^2 + \frac{1}{2}mv_y^2 + \frac{1}{2}mv_z^2$).  
Die mittlere translatorische kinetische Energie eines Teilchens beträgt daher:
$$\langle E_{\text{kin}} \rangle = 3 \cdot \left(\frac{1}{2} k_B \cdot T\right) = \frac{3}{2} k_B \cdot T$$
Sie hängt ausschließlich von der Temperatur $T$ und der Boltzmann-Konstante $k_B$ ab, nicht von der Masse des Teilchens.

---

### Frage 99
**Kategorie:** Wärmelehre  
**Subkategorie:** Wärmekraftmaschinen & Carnot-Wirkungsgrad  
**Lernziel / Subskill:** Energiebilanz einer Kältemaschine im geschlossenen Raum  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein elektrischer Haushaltskühlschrank arbeitet als thermodynamische Kältemaschine: Unter Zufuhr elektrischer Kompressorarbeit $W_{\text{el}}$ wird dem Innenraum Wärme $Q_C$ entzogen und über die rückseitigen Kühlschlangen Wärme $Q_H$ an die Umgebung abgegeben.  
Welche Auswirkung hat es auf die Temperatur eines geschlossenen, wärmeisolierten Zimmers, wenn der Kühlschrank dort mit dauerhaft weit geöffneter Tür im Dauerbetrieb läuft?

- (A) Das Zimmer erwärmt sich im Laufe der Zeit kontinuierlich, da die an den Raum abgegebene Wärme gleich der Summe aus entzogener Innenraumwärme und zugeführter elektrischer Antriebsenergie ist ($Q_H = Q_C + W_{\text{el}}$).
- (B) Das Zimmer kühlt sich kontinuierlich bis auf den Gefrierpunkt ab.
- (C) Die Temperatur im Zimmer bleibt absolut unverändert, da sich Kühlung und Heizung exakt aufheben.
- (D) Der Kühlschrank erzeugt Kälte aus dem Nichts und kühlt den Raum isotherm.
- (E) Der Kompressor schaltet sich wegen eines inneren Kurzschlusses selbsttätig ab.

**Richtige Antwort:** A

**Erklärung:**
Ein Kühlschrank vernichtet keine Wärme, sondern pumpt sie lediglich von innen nach außen.  
Nach dem 1. Hauptsatz der Wärmelehre gilt für die an den Raum abgegebene Wärme:
$$Q_H = Q_C + W_{\text{el}}$$
Steht die Kühlschranktür offen, wird dem Zimmer die Wärme $Q_C$ entnommen, aber an der Rückseite die größere Wärmemenge $Q_H = Q_C + W_{\text{el}}$ wieder zugeführt.  
Netto wird dem Zimmer kontinuierlich die elektrische Leistung des Kompressors ($W_{\text{el}}$) als zusätzliche Wärme zugeführt. Der offene Kühlschrank wirkt physikalisch exakt wie ein gewöhnlicher elektrischer Heizlüfter!

---

### Frage 100
**Kategorie:** Wärmelehre  
**Subkategorie:** Anomalie des Wassers  
**Lernziel / Subskill:** Volumenänderung von flüssigem Wasser beim Erwärmen von $0\,^\circ\text{C}$ auf $4\,^\circ\text{C}$  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Was geschieht mit dem Volumen einer festen Masse reinen flüssigen Wassers, wenn man es langsam von $\vartheta_1 = 0\,^\circ\text{C}$ auf $\vartheta_2 = +4\,^\circ\text{C}$ erwärmt?

- (A) Das Volumen dehnt sich wie bei allen gewöhnlichen Flüssigkeiten streng linear aus.
- (B) Das Volumen verdoppelt sich schlagartig.
- (C) Das Volumen nimmt ab (das Wasser zieht sich bei dieser Erwärmung zusammen und erreicht bei $+4\,^\circ\text{C}$ sein Dichtemaximum bzw. kleinstes Volumen).
- (D) Das Wasser geht spontan in überhitzten Dampf über.
- (E) Das Volumen bleibt vollkommen konstant, da Wasser physikalisch inkompressibel ist.

**Richtige Antwort:** C

**Erklärung:**
Dies ist die fundamentale Manifestation der **Dichteanomalie des Wassers**:  
Beim Erwärmen von $0\,^\circ\text{C}$ auf $+4\,^\circ\text{C}$ bricht das weitmaschige, voluminöse Netzwerk aus Wasserstoffbrückenbindungen teilweise zusammen. Die Moleküle rücken dichter zusammen, sodass die Dichte von $\rho(0\,^\circ\text{C}) \approx 0{,}9998\,\text{g/cm}^3$ auf das Maximum von $\rho(4\,^\circ\text{C}) \approx 1{,}0000\,\text{g/cm}^3$ ansteigt.  
Folglich **verringert sich das Volumen** des Wassers in diesem Temperaturintervall. Erst oberhalb von $+4\,^\circ\text{C}$ überwiegt die normale thermische Expansionsbewegung, und das Wasser dehnt sich bei weiterer Erwärmung wieder aus.
