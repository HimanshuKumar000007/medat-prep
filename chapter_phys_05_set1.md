# MedAT BMS Physik — Kapitel 5: Elektrizitätslehre & Magnetismus
## SET 1 (Fragen 01 bis 25)


---

### Frage 01

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Ladungen

**Subkategorie:**
Elektrische Ladung & Coulomb-Gesetz

**Lernziel / Subskill:**
Quantelung der elektrischen Ladung ($Q = n \cdot e$)

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
Ein im Labor elektrostatisch aufgeladener Kunststoffstab trägt eine gemessene negative Überschussladung von $Q = -4{,}8 \cdot 10^{-18}\,\text{C}$.  
Wie vielen zusätzlichen Elementarladungen (Elektronen mit $e \approx 1{,}6 \cdot 10^{-19}\,\text{C}$) entspricht diese Ladungsmenge?

**Antwortoptionen:**
- (A) Genau 30 Elektronen
- (B) Genau 3 Elektronen
- (C) Genau 300 Elektronen
- (D) Genau $7{,}68 \cdot 10^{-37}$ Elektronen
- (E) Es ist unmöglich, da Ladungen in der Natur kontinuierlich und nicht gequantelt auftreten.

**Richtige Antwort:**
A

**Erklärung:**
Jede frei beobachtbare elektrische Ladung $Q$ ist nach dem Prinzip der Ladungsquantelung ein ganzzahliges Vielfaches der Naturkonstante der Elementarladung ($e \approx 1{,}6 \cdot 10^{-19}\,\text{C}$):
$$Q = n \cdot (-e) \implies n = \frac{|Q|}{e}$$
Einsetzen der Zahlenwerte:
$$n = \frac{4{,}8 \cdot 10^{-18}\,\text{C}}{1{,}6 \cdot 10^{-19}\,\text{C}} = \frac{4{,}8}{1{,}6} \cdot 10^{-18 - (-19)} = 3 \cdot 10^1 = 30$$
Der Stab trägt somit einen Überschuss von exakt 30 Elektronen.




---

### Frage 02

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Ladungen

**Subkategorie:**
Elektrische Ladung & Coulomb-Gesetz

**Lernziel / Subskill:**
Coulombsches Gesetz und Abstandsquadrat-Gesetz ($F_C \propto \frac{q_1 q_2}{r^2}$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Zwei punktförmige, entgegengesetzt geladene Ionen befinden sich im Vakuum im gegenseitigen Abstand $r$ und ziehen sich mit einer elektrostatischen Coulomb-Kraft von $F_0 = 18\,\text{nN}$ an.  
Nun wird der räumliche Abstand zwischen den Ionen auf das Dreifache vergrößert ($r' = 3r$), während gleichzeitig die Ladung eines der beiden Ionen verdoppelt wird ($q_1' = 2q_1$). Die Ladung des anderen Ions bleibt unverändert.  
Welche elektrostatische Anziehungskraft $F'$ wirkt nun zwischen den beiden Ionen?

**Antwortoptionen:**
- (A) $F' = 12\,\text{nN}$
- (B) $F' = 6\,\text{nN}$
- (C) $F' = 4{,}0\,\text{nN}$
- (D) $F' = 2\,\text{nN}$
- (E) $F' = 54\,\text{nN}$

**Richtige Antwort:**
C

**Erklärung:**
Nach dem Coulombschen Gesetz gilt für die Kraft zwischen zwei Punktladungen:
$$F_C = \frac{1}{4\pi\varepsilon_0} \cdot \frac{|q_1 \cdot q_2|}{r^2}$$
Wird die Ladung $q_1$ verdoppelt ($q_1' = 2q_1$) und der Abstand verdreifacht ($r' = 3r$), skaliert die neue Kraft gemäß:
$$F' = F_0 \cdot \frac{2}{3^2} = F_0 \cdot \frac{2}{9}$$
Einsetzen von $F_0 = 18\,\text{nN}$:
$$F' = 18\,\text{nN} \cdot \frac{2}{9} = 2 \cdot 2\,\text{nN} = 4{,}0\,\text{nN}$$
*(Klassische MedAT-Falle: Den Abstand nur linear mit 3 zu skalieren statt mit $3^2 = 9$).*




---

### Frage 03

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrisches Feld

**Subkategorie:**
Elektrisches Feld

**Lernziel / Subskill:**
Plattenkondensator bei Ladungserhaltung (getrennte Spannungsquelle)

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
45 Sekunden

**Frage:**
Ein Plattenkondensator mit der Plattenfläche $A$ und dem Plattenabstand $d$ wird an eine Gleichspannungsquelle angeschlossen, vollständig aufgeladen und danach **von der Spannungsquelle getrennt**, sodass die Ladung auf den Platten konstant bleibt ($Q = \text{konstant}$).  
Nun wird der Plattenabstand unter Aufwendung mechanischer Zugkraft auf das Doppelte vergrößert ($d' = 2d$).  
Welche Aussage über die Veränderung der Kapazität $C$, der elektrischen Feldstärke $E$ im Plattenzwischenraum und der im Feld gespeicherten elektrostatischen Energie $E_{\text{el}}$ ist physikalisch korrekt?

**Antwortoptionen:**
- (A) $C$ verdoppelt sich, $E$ verdoppelt sich, und $E_{\text{el}}$ bleibt konstant.
- (B) $C$ bleibt konstant, $E$ halbiert sich, und $E_{\text{el}}$ sinkt auf ein Viertel.
- (C) $C$ halbiert sich, $E$ halbiert sich, und $E_{\text{el}}$ bleibt konstant.
- (D) $C$ verdoppelt sich, $E$ bleibt konstant, und $E_{\text{el}}$ verdoppelt sich.
- (E) $C$ halbiert sich, $E$ bleibt exakt konstant, und $E_{\text{el}}$ verdoppelt sich.

**Richtige Antwort:**
E

**Erklärung:**
1. **Kapazität:**
   $$C = \varepsilon_0 \cdot \frac{A}{d} \implies C' = \varepsilon_0 \cdot \frac{A}{2d} = \frac{1}{2} C_0 \quad (\text{halbiert})$$
2. **Elektrische Feldstärke:**
   Da der Kondensator von der Quelle getrennt ist, bleibt die Ladung $Q$ und damit die Flächenladungsdichte $\sigma = \frac{Q}{A}$ konstant.  
   Für das homogene Feld gilt:
   $$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 \cdot A} = \text{konstant}$$
   *(Alternativ über die Spannung: $U' = \frac{Q}{C'} = 2U_0 \implies E' = \frac{U'}{d'} = \frac{2U_0}{2d} = \frac{U_0}{d} = E_0$).*
3. **Gespeicherte elektrostatische Energie:**
   $$E_{\text{el}} = \frac{Q^2}{2C} \implies E_{\text{el}}' = \frac{Q^2}{2 \cdot \frac{C_0}{2}} = 2 \cdot \left(\frac{Q^2}{2C_0}\right) = 2 \cdot E_{\text{el}, 0} \quad (\text{verdoppelt})$$
   Die Verdopplung der gespeicherten Energie resultiert aus der mechanischen Arbeit, die man gegen die gegenseitige elektrostatische Anziehungskraft der ungleichnamig geladenen Platten beim Auseinanderziehen verrichten muss!




---

### Frage 04

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrisches Feld

**Subkategorie:**
Elektrisches Feld

**Lernziel / Subskill:**
Energiespeicherung im Kondensator eines Defibrillators ($E_{\text{el}} = \frac{1}{2} C U^2$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Ein moderner klinischer Defibrillator besitzt einen internen Speicherkondensator mit der Kapazität $C = 50\,\mu\text{F}$ ($50 \cdot 10^{-6}\,\text{F}$). Für eine Notfall-Defibrillation bei Kammerflimmern wird der Kondensator auf eine Hochspannung von $U = 2\,000\,\text{V}$ ($2{,}0\,\text{kV}$) aufgeladen.  
Welche elektrostatische Energie $E_{\text{el}}$ ist im Kondensator gespeichert und steht für den Entladeimpuls bereit?

**Antwortoptionen:**
- (A) $E_{\text{el}} = 200\,\text{J}$
- (B) $E_{\text{el}} = 100\,\text{J}$
- (C) $E_{\text{el}} = 50\,\text{J}$
- (D) $E_{\text{el}} = 1\,000\,\text{J}$
- (E) $E_{\text{el}} = 0{,}10\,\text{J}$

**Richtige Antwort:**
B

**Erklärung:**
Die im elektrischen Feld eines Kondensators gespeicherte Energie berechnet sich nach:
$$E_{\text{el}} = \frac{1}{2} \cdot C \cdot U^2$$
Einsetzen der gegebenen SI-Werte:
$$E_{\text{el}} = \frac{1}{2} \cdot (50 \cdot 10^{-6}\,\text{F}) \cdot (2\,000\,\text{V})^2$$
$$(2\,000)^2 = 4 \cdot 10^6\,\text{V}^2$$
$$E_{\text{el}} = 25 \cdot 10^{-6} \cdot 4 \cdot 10^6\,\text{J} = 25 \cdot 4\,\text{J} = 100\,\text{J}$$
*(Häufige Falle: Vergessen des Faktors $\frac{1}{2} \to$ Distraktor A).*




---

### Frage 05

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Spannung

**Subkategorie:**
Elektrische Spannung & Potential

**Lernziel / Subskill:**
Homogenes elektrisches Feld über einer Biomembran ($E = \frac{U}{d}$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Eine neuronale Zellmembran besitzt eine Dicke von ca. $d = 7{,}0\,\text{nm}$ ($7{,}0 \cdot 10^{-9}\,\text{m}$) und trennt das Zytoplasma vom Extrazellulärraum. Im physiologischen Ruhezustand herrscht über der Membran eine Ruhepotentialdifferenz von $U = -70\,\text{mV}$ (Betrag $70 \cdot 10^{-3}\,\text{V}$).  
Welche enorme elektrische Feldstärke $E$ herrscht näherungsweise im homogenen Membraninneren?

**Antwortoptionen:**
- (A) $E = 1{,}0 \cdot 10^4\,\text{V/m}$
- (B) $E = 4{,}9 \cdot 10^{-10}\,\text{V/m}$
- (C) $E = 1{,}0 \cdot 10^{-6}\,\text{V/m}$
- (D) $E = 1{,}0 \cdot 10^7\,\text{V/m}$ ($10\,\text{Millionen Volt pro Meter}$)
- (E) $E = 4{,}9 \cdot 10^8\,\text{V/m}$

**Richtige Antwort:**
D

**Erklärung:**
Im homogenen elektrischen Feld (wie zwischen den Oberflächen einer Lipiddoppelschicht) gilt für den Betrag der Feldstärke:
$$E = \frac{U}{d}$$
Einsetzen der Zehnerpotenzen:
$$E = \frac{70 \cdot 10^{-3}\,\text{V}}{7{,}0 \cdot 10^{-9}\,\text{m}} = \frac{70}{7{,}0} \cdot 10^{-3 - (-9)}\,\frac{\text{V}}{\text{m}} = 10 \cdot 10^6\,\frac{\text{V}}{\text{m}} = 1{,}0 \cdot 10^7\,\frac{\text{V}}{\text{m}}$$
Biophysikalische Bedeutung: Obwohl das Membranpotential mit $70\,\text{mV}$ absolut klein ist, führt die extrem geringe Membrandicke von nur $7\,\text{nm}$ zu gigantischen Feldstärken von rund 10 Millionen V/m. Diese halten spannungsabhängige Ionenkanäle geschlossen oder öffnen sie.




---

### Frage 06

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Spannung

**Subkategorie:**
Elektrische Spannung & Potential

**Lernziel / Subskill:**
Beschleunigungsarbeit im E-Feld und kinetische Energie in Elektronenvolt ($\text{eV}$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Ein zweifach positiv geladenes Heliumion ($\alpha$-Teilchen mit der Ladung $q = +2e \approx 3{,}2 \cdot 10^{-19}\,\text{C}$) wird aus der Ruhe in einem evakuierten Linearbeschleuniger durch eine elektrische Potentialdifferenz von $U = 5\,000\,\text{V}$ ($5{,}0\,\text{kV}$) beschleunigt.  
Welche kinetische Energie $E_{\text{kin}}$ besitzt das Teilchen nach Durchlaufen dieser Spannung, ausgedrückt in Elektronenvolt ($\text{eV}$) und in Joule ($\text{J}$)?

**Antwortoptionen:**
- (A) $E_{\text{kin}} = 10\,\text{keV} = 1{,}6 \cdot 10^{-15}\,\text{J}$
- (B) $E_{\text{kin}} = 5{,}0\,\text{keV} = 8{,}0 \cdot 10^{-16}\,\text{J}$
- (C) $E_{\text{kin}} = 2{,}5\,\text{keV} = 4{,}0 \cdot 10^{-16}\,\text{J}$
- (D) $E_{\text{kin}} = 10\,\text{eV} = 1{,}6 \cdot 10^{-18}\,\text{J}$
- (E) $E_{\text{kin}} = 20\,\text{keV} = 3{,}2 \cdot 10^{-15}\,\text{J}$

**Richtige Antwort:**
A

**Erklärung:**
1. **Definition des Elektronenvolts ($\text{eV}$):**
   Ein Teilchen mit der Elementarladung $1e$ gewinnt beim Durchlaufen von $1\,\text{V}$ genau die Energie $1\,\text{eV}$.  
   Für ein Teilchen mit der Ladung $q = 2e$:
   $$E_{\text{kin}} = q \cdot U = (2e) \cdot (5\,000\,\text{V}) = 10\,000\,\text{eV} = 10\,\text{keV}$$
2. **Umrechnung in Joule ($1\,\text{eV} \approx 1{,}6 \cdot 10^{-19}\,\text{J}$):**
   $$E_{\text{kin}} = 10^4 \cdot (1{,}6 \cdot 10^{-19}\,\text{J}) = 1{,}6 \cdot 10^{-15}\,\text{J}$$
*(Häufige Falle: Zu übersehen, dass das Heliumion zweifach geladen ist, wodurch man fälschlicherweise auf 5 keV kommt $\to$ Distraktor B).*




---

### Frage 07

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Spannung

**Subkategorie:**
Elektrische Spannung & Potential

**Lernziel / Subskill:**
Physikalische Definition der elektrischen Spannung ($U = \frac{\Delta W}{q}$)

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
Welche fundamentale physikalische Definition und SI-Basiseinheitenkombination liegt der elektrischen Spannung von genau $1\,\text{Volt}$ ($1\,\text{V}$) zugrunde?

**Antwortoptionen:**
- (A) $1\,\text{V} = 1\,\frac{\text{C}}{\text{s}}$ (Coulomb pro Sekunde)
- (B) $1\,\text{V} = 1\,\frac{\text{N}}{\text{C}}$ (Newton pro Coulomb)
- (C) $1\,\text{V} = 1\,\frac{\text{J}}{\text{C}}$ (Joule pro Coulomb; Energieübertrag von $1\,\text{Joule}$ beim Transport einer Ladung von $1\,\text{Coulomb}$)
- (D) $1\,\text{V} = 1\,\text{A} \cdot \text{s}$ (Ampere mal Sekunde)
- (E) $1\,\text{V} = 1\,\frac{\text{W}}{\text{m}^2}$ (Watt pro Quadratmeter)

**Richtige Antwort:**
C

**Erklärung:**
Die elektrische Spannung $U$ ist definiert als die elektrische Potentialdifferenz bzw. die pro Ladungseinheit $q$ verrichtete Arbeit $\Delta W$:
$$U = \frac{\Delta W}{q} \implies 1\,\text{V} = 1\,\frac{\text{J}}{\text{C}} = 1\,\frac{\text{N}\cdot\text{m}}{\text{A}\cdot\text{s}} = 1\,\frac{\text{kg}\cdot\text{m}^2}{\text{A}\cdot\text{s}^3}$$
Spannung ist somit das Maß dafür, wie viel potentielle elektrische Energie jedem einzelnen Coulomb Ladung mitgegeben wird.




---

### Frage 08

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Stromstärke

**Subkategorie:**
Stromstärke, Leiter & Ohmscher Widerstand

**Lernziel / Subskill:**
Leitergeometrie und Widerstand eines Nervenaxons ($R = \rho \cdot \frac{l}{A}$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Der ohmsche Längswiderstand des Axoplasmas in einem zylindrischen Nervenaxon der Länge $l$ und dem Radius $r$ beträgt $R_0 = 80\,\text{k}\Omega$.  
Wie groß ist der elektrische Längswiderstand $R'$ in einem evolutionär angepassten Riesenaxon (z. B. beim Tintenfisch), wenn dieses bei gleicher Länge $l$ und identischem spezifischen Zytoplasma-Widerstand $\rho$ einen **viermal so großen Radius** besitzt ($r' = 4r$)?

**Antwortoptionen:**
- (A) $R' = 320\,\text{k}\Omega$
- (B) $R' = 20\,\text{k}\Omega$
- (C) $R' = 40\,\text{k}\Omega$
- (D) $R' = 80\,\text{k}\Omega$ (unverändert)
- (E) $R' = 5\,\text{k}\Omega$

**Richtige Antwort:**
E

**Erklärung:**
Der Widerstand eines zylindrischen Leiters hängt von der Querschnittsfläche $A = \pi \cdot r^2$ ab:
$$R = \rho \cdot \frac{l}{A} = \rho \cdot \frac{l}{\pi \cdot r^2} \implies R \propto \frac{1}{r^2}$$
Wird der Radius vervierfacht ($r' = 4r$), vergrößert sich die Querschnittsfläche um das $4^2 = 16$-Fache!  
Der neue Längswiderstand beträgt daher:
$$R' = \frac{R_0}{16} = \frac{80\,\text{k}\Omega}{16} = 5\,\text{k}\Omega$$
Biophysikalischer Hintergrund: Durch die 16-fache Verringerung des Innenwiderstands können Aktionspotentiale entlang des Riesenaxons mit extrem hoher Geschwindigkeit fortgeleitet werden.  
*(Klassische MedAT-Falle: Den quadratischen Zusammenhang der Fläche vergessen und nur durch 4 teilen $\to$ Distraktor B).*




---

### Frage 09

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Leiter

**Subkategorie:**
Stromstärke, Leiter & Ohmscher Widerstand

**Lernziel / Subskill:**
Ladungsträgertransport in Elektrolyten (Gelelektrophorese)

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
40 Sekunden

**Frage:**
In einer horizontalen Gelelektrophoresekammer wandern positiv geladene Natrium-Ionen ($\text{Na}^+$, $q = +e$) nach rechts zur Kathode, während negativ geladene Chlorid-Ionen ($\text{Cl}^-$, $q = -e$) nach links zur Anode wandern.  
An einer gedachten Querschnittsfläche des Gels passieren pro Sekunde ($\Delta t = 1{,}0\,\text{s}$) genau:
- $3{,}0 \cdot 10^{16}$ $\text{Na}^+$-Ionen nach rechts
- $2{,}0 \cdot 10^{16}$ $\text{Cl}^-$-Ionen nach links

Konstante: Elementarladung $e \approx 1{,}6 \cdot 10^{-19}\,\text{C}$.  
Welche elektrische Gesamtstromstärke $I$ wird in diesem Elektrolyten gemessen?

**Antwortoptionen:**
- (A) $I = 1{,}6\,\text{mA}$
- (B) $I = 8{,}0\,\text{mA}$
- (C) $I = 4{,}8\,\text{mA}$
- (D) $I = 0{,}0\,\text{mA}$ (da sich positive und negative Ladungen gegenseitig aufheben)
- (E) $I = 3{,}2\,\text{mA}$

**Richtige Antwort:**
B

**Erklärung:**
Physikalischer Kern: Elektrischer Strom ist als Transport von Ladung definiert.  
- Positive Ladungen ($\text{Na}^+$), die sich nach rechts bewegen, stellen einen Stromfluss **nach rechts** dar.  
- Negative Ladungen ($\text{Cl}^-$), die sich nach links bewegen, stellen definitionsgemäß (technische Stromrichtung = Fluss positiver Ladungsträger) **ebenfalls einen Stromfluss nach rechts** dar!  
Die beiden Ladungstransporte addieren sich somit konstruktiv:
$$\Delta Q_{\text{ges}} = (N_{\text{Na}} + N_{\text{Cl}}) \cdot e = (3{,}0 \cdot 10^{16} + 2{,}0 \cdot 10^{16}) \cdot (1{,}6 \cdot 10^{-19}\,\text{C})$$
$$\Delta Q_{\text{ges}} = 5{,}0 \cdot 10^{16} \cdot 1{,}6 \cdot 10^{-19}\,\text{C} = 8{,}0 \cdot 10^{-3}\,\text{C} = 8{,}0\,\text{mC}$$
Für die Stromstärke $I = \frac{\Delta Q_{\text{ges}}}{\Delta t}$ mit $\Delta t = 1{,}0\,\text{s}$ ergibt sich:
$$I = \frac{8{,}0 \cdot 10^{-3}\,\text{C}}{1{,}0\,\text{s}} = 8{,}0\,\text{mA}$$
*(Häufige Falle: Die beiden Ionenströme voneinander subtrahieren $\to$ Distraktor A).*




---

### Frage 10

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Leiter

**Subkategorie:**
Stromstärke, Leiter & Ohmscher Widerstand

**Lernziel / Subskill:**
Temperaturabhängigkeit des elektrischen Widerstands (Kaltleiter vs. Heißleiter)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Welche Aussage über das Temperaturverhalten des elektrischen Widerstands von metallischen Leitern (z. B. Kupferdrähte) im Vergleich zu biologischen Elektrolyten (z. B. physiologische Kochsalzlösung oder Blutplasma) ist physikalisch zutreffend?

**Antwortoptionen:**
- (A) Bei beiden Leitertypen sinkt der elektrische Widerstand mit steigender Temperatur streng exponentiell ab.
- (B) Metalle sind Heißleiter (ihr Widerstand sinkt bei Erwärmung), während Elektrolyte Kaltleiter sind.
- (C) Der Widerstand von Metallen ist vollkommen temperaturunabhängig.
- (D) Metalle verhalten sich als **Kaltleiter** (ihr ohmscher Widerstand steigt bei Erwärmung an, da stärkere thermische Gitterschwingungen die freien Leitungselektronen behindern), während Elektrolyte sich als **Heißleiter** verhalten (ihr Widerstand sinkt bei Erwärmung, da die Viskosität des Wassers abnimmt und die Ionenbeweglichkeit zunimmt).
- (E) Elektrolyte leiten Strom nur bei Temperaturen unterhalb des Gefrierpunkts.

**Richtige Antwort:**
D

**Erklärung:**
- **Metalle (Kaltleiter / PTC):** Ladungsträger sind freie Elektronen. Bei steigender Temperatur schwingen die Metallkationen im Kristallgitter heftiger um ihre Ruhelage. Dies vergrößert den Streuquerschnitt für die Elektronen $\to$ die mittlere freie Weglänge sinkt, der Widerstand **steigt** ($R(T) = R_0 (1 + \alpha \Delta T)$).
- **Elektrolyte (Heißleiter / NTC):** Ladungsträger sind hydratisierte Ionen. Bei Erwärmung sinkt die dynamische Viskosität des Wassers beträchtlich, wodurch die Ionen bei gleicher Feldstärke schneller durch die Lösung diffundieren können (höhere Ionenbeweglichkeit). Zudem nimmt bei schwachen Elektrolyten der Dissoziationsgrad zu. Der Widerstand **sinkt**.




---

### Frage 11

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Ohmsches Gesetz

**Subkategorie:**
Ohmsches Gesetz & Kirchhoffsche Gesetze

**Lernziel / Subskill:**
Reihenschaltung und ungleicher Spannungsteiler

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Zwei ohmsche Widerstände $R_1 = 30\,\Omega$ und $R_2 = 70\,\Omega$ sind in Reihe an eine ideale Gleichspannungsquelle mit der Gesamtspannung $U = 20\,\text{V}$ angeschlossen.  
Welche elektrische Stromstärke $I$ fließt durch die Schaltung, und welche Teilspannung $U_2$ fällt über dem Widerstand $R_2$ ab?

**Antwortoptionen:**
- (A) $I = 0{,}20\,\text{A}$ und $U_2 = 14\,\text{V}$
- (B) $I = 0{,}20\,\text{A}$ und $U_2 = 6\,\text{V}$
- (C) $I = 0{,}50\,\text{A}$ und $U_2 = 10\,\text{V}$
- (D) $I = 2{,}0\,\text{A}$ und $U_2 = 14\,\text{V}$
- (E) $I = 0{,}10\,\text{A}$ und $U_2 = 20\,\text{V}$

**Richtige Antwort:**
A

**Erklärung:**
1. **Gesamtwiderstand der Reihenschaltung:**
   $$R_{\text{ges}} = R_1 + R_2 = 30\,\Omega + 70\,\Omega = 100\,\Omega$$
2. **Stromstärke (nach dem Ohmschen Gesetz):**
   In einer Reihenschaltung ist der Strom an jeder Stelle identisch:
   $$I = \frac{U}{R_{\text{ges}}} = \frac{20\,\text{V}}{100\,\Omega} = 0{,}20\,\text{A} = 200\,\text{mA}$$
3. **Spannungsabfall an $R_2$ (Spannungsteilerregel):**
   $$U_2 = I \cdot R_2 = 0{,}20\,\text{A} \cdot 70\,\Omega = 14\,\text{V}$$
   *(Alternativ: $U_2 = U \cdot \frac{R_2}{R_1 + R_2} = 20\,\text{V} \cdot \frac{70}{100} = 14\,\text{V}$. Über $R_1$ fallen entsprechend $6\,\text{V}$ ab).*




---

### Frage 12

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Kirchhoffsche Gesetze

**Subkategorie:**
Ohmsches Gesetz & Kirchhoffsche Gesetze

**Lernziel / Subskill:**
Parallelschaltung von Widerständen und Gesamtstrom

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
In einem Sensorbauteil eines EKG-Verstärkers sind zwei Messwiderstände $R_1 = 20\,\Omega$ und $R_2 = 30\,\Omega$ parallel zueinander geschaltet. An dieser Parallelschaltung liegt eine konstante Betriebsspannung von $U = 12\,\text{V}$ an.  
Wie groß sind der äquivalente Gesamtwiderstand $R_{\text{ges}}$ der Schaltung und der aus der Spannungsquelle entnommene Gesamtstrom $I_{\text{ges}}$?

**Antwortoptionen:**
- (A) $R_{\text{ges}} = 50\,\Omega$ und $I_{\text{ges}} = 0{,}24\,\text{A}$
- (B) $R_{\text{ges}} = 25\,\Omega$ und $I_{\text{ges}} = 0{,}48\,\text{A}$
- (C) $R_{\text{ges}} = 12\,\Omega$ und $I_{\text{ges}} = 1{,}0\,\text{A}$
- (D) $R_{\text{ges}} = 10\,\Omega$ und $I_{\text{ges}} = 1{,}2\,\text{A}$
- (E) $R_{\text{ges}} = 600\,\Omega$ und $I_{\text{ges}} = 0{,}02\,\text{A}$

**Richtige Antwort:**
C

**Erklärung:**
1. **Gesamtwiderstand der Parallelschaltung:**
   $$\frac{1}{R_{\text{ges}}} = \frac{1}{R_1} + \frac{1}{R_2} \implies R_{\text{ges}} = \frac{R_1 \cdot R_2}{R_1 + R_2}$$
   $$R_{\text{ges}} = \frac{20 \cdot 30}{20 + 30}\,\Omega = \frac{600}{50}\,\Omega = 12\,\Omega$$
   *(Merksatz: Der Gesamtwiderstand einer Parallelschaltung ist stets kleiner als der kleinste Einzelwiderstand! Da $R_1 = 20\,\Omega$, muss $R_{\text{ges}} < 20\,\Omega$ sein).*
2. **Gesamtstromstärke:**
   $$I_{\text{ges}} = \frac{U}{R_{\text{ges}}} = \frac{12\,\text{V}}{12\,\Omega} = 1{,}0\,\text{A}$$
   *(Aufteilung der Teilströme: $I_1 = \frac{12\,\text{V}}{20\,\Omega} = 0{,}6\,\text{A}$; $I_2 = \frac{12\,\text{V}}{30\,\Omega} = 0{,}4\,\text{A} \implies I_1 + I_2 = 1{,}0\,\text{A}$).*




---

### Frage 13

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Kirchhoffsche Gesetze

**Subkategorie:**
Ohmsches Gesetz & Kirchhoffsche Gesetze

**Lernziel / Subskill:**
Kirchhoffsche Knotenregel (1. Kirchhoffsches Gesetz)

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
An einem elektrischen Leitungs-Verzweigungsknoten K treffen genau fünf Leiterdrähte zusammen. Mit Strommesszangen werden vier der fünf Ströme mit ihren Richtungen erfasst:
- Draht 1: Strom $I_1 = 3{,}0\,\text{A}$ fließt **in den Knoten K hinein**
- Draht 2: Strom $I_2 = 4{,}5\,\text{A}$ fließt **in den Knoten K hinein**
- Draht 3: Strom $I_3 = 2{,}0\,\text{A}$ fließt **aus dem Knoten K heraus**
- Draht 4: Strom $I_4 = 3{,}5\,\text{A}$ fließt **aus dem Knoten K heraus**

Welche Stromstärke $I_5$ fließt durch den fünften Draht, und in welche Richtung fließt dieser Strom bezogen auf den Knoten K?

**Antwortoptionen:**
- (A) $I_5 = 13{,}0\,\text{A}$, fließt aus dem Knoten heraus
- (B) $I_5 = 2{,}0\,\text{A}$, fließt in den Knoten hinein
- (C) $I_5 = 5{,}5\,\text{A}$, fließt in den Knoten hinein
- (D) $I_5 = 7{,}5\,\text{A}$, fließt aus dem Knoten heraus
- (E) $I_5 = 2{,}0\,\text{A}$, fließt aus dem Knoten heraus

**Richtige Antwort:**
E

**Erklärung:**
Nach dem **1. Kirchhoffschen Gesetz (Knotenregel)**, das auf der fundamentalen Ladungserhaltung beruht, kann sich an einem Schaltungsknoten keine elektrische Ladung ansammeln. Die Summe aller zufließenden Ströme muss gleich der Summe aller abfließenden Ströme sein:
$$\sum I_{\text{hinein}} = \sum I_{\text{heraus}}$$
1. **Summe der bekannten zufließenden Ströme:**
   $$\sum I_{\text{hinein}} = I_1 + I_2 = 3{,}0\,\text{A} + 4{,}5\,\text{A} = 7{,}5\,\text{A}$$
2. **Summe der bisher bekannten abfließenden Ströme:**
   $$\sum I_{\text{heraus}} = I_3 + I_4 = 2{,}0\,\text{A} + 3{,}5\,\text{A} = 5{,}5\,\text{A}$$
3. **Bilanz:**
   Da bisher $7{,}5\,\text{A}$ zufließen, aber erst $5{,}5\,\text{A}$ abfließen, fehlen genau:
   $$I_5 = 7{,}5\,\text{A} - 5{,}5\,\text{A} = 2{,}0\,\text{A}$$
Dieser Differenzstrom muss zwingend **aus dem Knoten herausfließen**.




---

### Frage 14

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Kirchhoffsche Gesetze

**Subkategorie:**
Ohmsches Gesetz & Kirchhoffsche Gesetze

**Lernziel / Subskill:**
Innenwiderstand einer realen Spannungsquelle und Klemmenspannung

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Eine wiederaufladbare Batterie eines mobilen Notfall-Beatmungsgeräts besitzt eine Leerlaufspannung (Quellenspannung) von $U_0 = 12{,}6\,\text{V}$ und einen unvermeidbaren inneren Innenwiderstand von $R_i = 0{,}02\,\Omega$.  
Beim Einschalten der Turbine zieht der Motor kurzzeitig eine hohe Stromstärke von $I = 150\,\text{A}$.  
Welche tatsächliche **Klemmenspannung** $U_{\text{Kl}}$ steht während dieses Laststroms an den äußeren Anschlüssen des Beatmungsgeräts noch zur Verfügung?

**Antwortoptionen:**
- (A) $U_{\text{Kl}} = 12{,}6\,\text{V}$
- (B) $U_{\text{Kl}} = 9{,}6\,\text{V}$
- (C) $U_{\text{Kl}} = 3{,}0\,\text{V}$
- (D) $U_{\text{Kl}} = 15{,}6\,\text{V}$
- (E) $U_{\text{Kl}} = 0{,}0\,\text{V}$

**Richtige Antwort:**
B

**Erklärung:**
Jede reale Spannungsquelle lässt sich als Serienschaltung einer idealen Spannungsquelle mit der Quellenspannung $U_0$ und einem Innenwiderstand $R_i$ modellieren.  
Fließt ein Laststrom $I$, fällt nach dem Ohmschen Gesetz ein Teil der Spannung bereits am Innenwiderstand im Inneren der Batterie ab (**innerer Spannungsabfall**):
$$U_i = I \cdot R_i = 150\,\text{A} \cdot 0{,}02\,\Omega = 3{,}0\,\text{V}$$
Die an den Klemmen nach außen abgegebene Nutzspannung (Klemmenspannung) bricht daher ein:
$$U_{\text{Kl}} = U_0 - U_i = U_0 - I \cdot R_i = 12{,}6\,\text{V} - 3{,}0\,\text{V} = 9{,}6\,\text{V}$$




---

### Frage 15

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Leistung und Arbeit

**Subkategorie:**
Elektrische Leistung & Energie

**Lernziel / Subskill:**
Spannungsabhängigkeit der elektrischen Leistung ($P = \frac{U^2}{R}$)

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
Welcher mathematische Zusammenhang beschreibt die elektrische Wirkleistung $P$, die an einem konstanten ohmschen Verbraucher mit dem Widerstand $R$ bei Anlegen einer Spannung $U$ umgesetzt wird?

**Antwortoptionen:**
- (A) $P = \frac{U}{R}$
- (B) $P = U \cdot R^2$
- (C) $P = \frac{R}{U^2}$
- (D) $P = \frac{U^2}{R}$ (die Leistung skaliert bei konstantem Widerstand mit dem Quadrat der anliegenden Spannung)
- (E) $P = \sqrt{\frac{U}{R}}$

**Richtige Antwort:**
D

**Erklärung:**
Die allgemeine elektrische Leistung lautet $P = U \cdot I$.  
Ersetzt man die Stromstärke über das Ohmsche Gesetz ($I = \frac{U}{R}$), folgt:
$$P = U \cdot \left(\frac{U}{R}\right) = \frac{U^2}{R}$$
Praktische MedAT-Bedeutung: Wird die Spannung an einem Heizwiderstand verdoppelt, verdoppelt sich nicht nur die Spannung, sondern auch die Stromstärke verdoppelt sich – die Heizleistung vervierfacht sich ($2^2 = 4$).




---

### Frage 16

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Leistung und Arbeit

**Subkategorie:**
Elektrische Leistung & Energie

**Lernziel / Subskill:**
Joulesche Stromwärme bei der chirurgischen Kauterisation ($W = I^2 \cdot R \cdot t$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
In der Hochfrequenzchirurgie (Elektrokauterisation) wird elektrischer Strom genutzt, um Blutgefäße gezielt durch Erwärmung zu veröden. Durch ein Gewebestück mit einem elektrischen Widerstand von $R = 50\,\Omega$ fließt für die Zeitdauer von $t = 2{,}0\,\text{s}$ ein effektiver Strom von $I = 2{,}0\,\text{A}$.  
Welche elektrische Energie $W_{\text{el}}$ wird in diesem Zeitintervall im Gewebe vollständig in thermische Energie (Joulesche Wärme) umgewandelt?

**Antwortoptionen:**
- (A) $W_{\text{el}} = 400\,\text{J}$
- (B) $W_{\text{el}} = 200\,\text{J}$
- (C) $W_{\text{el}} = 100\,\text{J}$
- (D) $W_{\text{el}} = 800\,\text{J}$
- (E) $W_{\text{el}} = 50\,\text{J}$

**Richtige Antwort:**
A

**Erklärung:**
Die umgesetzte thermische Energie berechnet sich aus Leistung mal Zeit:
$$W_{\text{el}} = P \cdot t$$
Mit $P = I^2 \cdot R$ folgt das **Joulesche Gesetz**:
$$W_{\text{el}} = I^2 \cdot R \cdot t$$
Einsetzen der Werte:
$$W_{\text{el}} = (2{,}0\,\text{A})^2 \cdot 50\,\Omega \cdot 2{,}0\,\text{s} = 4\,\text{A}^2 \cdot 50\,\Omega \cdot 2{,}0\,\text{s} = 200\,\text{W} \cdot 2{,}0\,\text{s} = 400\,\text{J}$$




---

### Frage 17

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektrische Leistung und Arbeit

**Subkategorie:**
Elektrische Leistung & Energie

**Lernziel / Subskill:**
Umrechnung von Kilowattstunden in Joule ($1\,\text{kWh} = 3{,}6\,\text{MJ}$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Ein medizinisches Dialysegerät auf einer Intensivstation verbraucht während einer kontinuierlichen Behandlung über mehrere Stunden eine elektrische Energie von genau $2{,}5\,\text{kWh}$.  
Welcher Energiemenge entspricht dieser Verbrauch in der SI-Basiseinheit Joule ($\text{J}$)?

**Antwortoptionen:**
- (A) $2{,}5 \cdot 10^3\,\text{J}$
- (B) $1{,}5 \cdot 10^5\,\text{J}$
- (C) $9{,}0 \cdot 10^6\,\text{J}$ ($9{,}0\,\text{MJ}$)
- (D) $3{,}6 \cdot 10^6\,\text{J}$
- (E) $2{,}5 \cdot 10^6\,\text{J}$

**Richtige Antwort:**
C

**Erklärung:**
Eine Kilowattstunde ($\text{kWh}$) ist das Produkt aus Leistung ($1\,\text{kW} = 1\,000\,\text{W}$) und Zeit ($1\,\text{h} = 3\,600\,\text{s}$):
$$1\,\text{kWh} = 1\,000\,\text{W} \cdot 3\,600\,\text{s} = 3\,600\,000\,\text{W}\cdot\text{s} = 3{,}6 \cdot 10^6\,\text{J} = 3{,}6\,\text{MJ}$$
Für einen Verbrauch von $2{,}5\,\text{kWh}$ gilt:
$$W = 2{,}5 \cdot (3{,}6 \cdot 10^6\,\text{J}) = \left(\frac{5}{2} \cdot 3{,}6\right) \cdot 10^6\,\text{J} = (5 \cdot 1{,}8) \cdot 10^6\,\text{J} = 9{,}0 \cdot 10^6\,\text{J} = 9{,}0\,\text{MJ}$$




---

### Frage 18

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Magnetfeld

**Subkategorie:**
Magnetfeld & Lorentzkraft

**Lernziel / Subskill:**
Lorentzkraft auf bewegte Ladungen ($F_L = q \cdot v \cdot B \cdot \sin\alpha$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Ein Elektron ($q = -e$) fliegt mit der konstanten Geschwindigkeit $v = 2 \cdot 10^6\,\text{m/s}$ durch ein homogenes statisches Magnetfeld mit der Flussdichte $B = 0{,}5\,\text{T}$.  
Unter welcher geometrischen Bedingung erfährt das Elektron durch das Magnetfeld **überhaupt keine Ablenkung bzw. Kraftwirkung** ($F_L = 0$)?

**Antwortoptionen:**
- (A) Ausschließlich dann, wenn das Magnetfeld vollständig abgeschirmt wird.
- (B) Wenn das Elektron exakt senkrecht zu den magnetischen Feldlinien fliegt ($\alpha = 90^\circ$).
- (C) Wenn das Elektron eine positive Ladung annimmt.
- (D) Wenn die Geschwindigkeit des Elektrons exakt der Lichtgeschwindigkeit entspricht.
- (E) Wenn sich das Elektron **exakt parallel (oder antiparallel) zu den magnetischen Feldlinien** bewegt ($\alpha = 0^\circ$ bzw. $\alpha = 180^\circ$, sodass $\sin\alpha = 0$ ist).

**Richtige Antwort:**
E

**Erklärung:**
Die magnetische Lorentzkraft auf ein geladenes Teilchen berechnet sich über das Kreuzprodukt:
$$\vec{F}_L = q \cdot (\vec{v} \times \vec{B}) \implies F_L = |q| \cdot v \cdot B \cdot \sin\alpha$$
wobei $\alpha$ der Winkel zwischen dem Geschwindigkeitsvektor $\vec{v}$ und dem Magnetfeldvektor $\vec{B}$ ist.  
- Fliegt das Teilchen parallel zum Magnetfeld ($\alpha = 0^\circ$ oder $180^\circ$), ist $\sin\alpha = 0 \implies F_L = 0$: Das Teilchen setzt seine geradlinig gleichförmige Bewegung völlig unbeeinflusst fort!
- Bei senkrechtem Eintritt ($\alpha = 90^\circ \implies \sin 90^\circ = 1$) ist die Lorentzkraft hingegen maximal.




---

### Frage 19

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Magnetfeld

**Subkategorie:**
Magnetfeld & Lorentzkraft

**Lernziel / Subskill:**
Kreisbahn im Magnetfeld und Massenspektrometrie ($r = \frac{m \cdot v}{q \cdot B}$)

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
40 Sekunden

**Frage:**
In der klinisch-toxikologischen Analytik werden Ionen in einem Massenspektrometer getrennt. Zwei einfach positiv geladene Molekül-Ionen ($q_1 = q_2 = +e$) treten mit **exakt derselben Geschwindigkeit** $v$ senkrecht in ein homogenes magnetisches Führungsfeld der Flussdichte $B$ ein.  
Ion 1 besitzt die Masse $m_1 = 20\,\text{u}$, Ion 2 die Masse $m_2 = 40\,\text{u}$. Die Ionen werden durch die Lorentzkraft auf kreisförmige Teilchenbahnen mit den Radien $r_1$ bzw. $r_2$ gezwungen.  
Welches Verhältnis der Bahnradien $\frac{r_2}{r_1}$ wird auf der Detektorblende gemessen?

**Antwortoptionen:**
- (A) $\frac{r_2}{r_1} = 4{,}0$
- (B) $\frac{r_2}{r_1} = 2{,}0$ (der Radius der Kreisbahn verdoppelt sich bei Verdopplung der Teilchenmasse)
- (C) $\frac{r_2}{r_1} = 1{,}0$ (beide Ionen beschreiben identische Bahnen, da Ladung und Geschwindigkeit gleich sind)
- (D) $\frac{r_2}{r_1} = 0{,}50$
- (E) $\frac{r_2}{r_1} = \sqrt{2} \approx 1{,}41$

**Richtige Antwort:**
B

**Erklärung:**
Die senkrecht zur Bewegungsrichtung wirkende Lorentzkraft fungiert als Zentripetalkraft, die das Teilchen auf eine Kreisbahn zwingt:
$$F_L = F_Z \iff q \cdot v \cdot B = \frac{m \cdot v^2}{r}$$
Kürzt man $v$ und stellt nach dem Bahnradius $r$ um:
$$r = \frac{m \cdot v}{q \cdot B}$$
Da Geschwindigkeit $v$, Ladung $q$ und Magnetfeld $B$ für beide Ionen identisch sind, ist der Bahnradius **direkt proportional zur Masse des Ions** ($r \propto m$):
$$\frac{r_2}{r_1} = \frac{m_2}{m_1} = \frac{40\,\text{u}}{20\,\text{u}} = 2{,}0$$
Das schwerere Ion besitzt eine größere Trägheit und wird weniger stark abgelenkt; sein Bahnradius ist exakt doppelt so groß.




---

### Frage 20

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Magnetfeld

**Subkategorie:**
Magnetfeld & Lorentzkraft

**Lernziel / Subskill:**
Magnetische Flussdichte $B$ und das MRT-Magnetfeld

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Für hochauflösende Magnetresonanztomographen (MRT) in der klinischen Bildgebung werden supraleitende Hauptmagnete mit einer magnetischen Flussdichte von $B = 3{,}0\,\text{Tesla}$ ($3{,}0\,\text{T}$) eingesetzt.  
Wie verhält sich die Stärke dieses diagnostischen MRT-Magnetfelds im Vergleich zum natürlichen statischen Erdmagnetfeld in Mitteleuropa (ca. $B_{\text{Erde}} \approx 50\,\mu\text{T} = 5 \cdot 10^{-5}\,\text{T}$)?

**Antwortoptionen:**
- (A) Das MRT-Feld ist etwa 60-mal stärker als das Erdmagnetfeld.
- (B) Das MRT-Feld ist etwa 600-mal stärker als das Erdmagnetfeld.
- (C) Das MRT-Feld ist schwächer als das Erdmagnetfeld.
- (D) Das MRT-Feld ist etwa **$60\,000$-mal stärker** als das Erdmagnetfeld.
- (E) Beide Felder sind von der Größenordnung her identisch.

**Richtige Antwort:**
D

**Erklärung:**
Das Verhältnis der beiden magnetischen Flussdichten berechnet sich über einfache Zehnerpotenzen:
$$\frac{B_{\text{MRT}}}{B_{\text{Erde}}} = \frac{3{,}0\,\text{T}}{50\,\mu\text{T}} = \frac{3{,}0\,\text{T}}{5{,}0 \cdot 10^{-5}\,\text{T}} = \frac{3{,}0}{5{,}0} \cdot 10^5 = 0{,}6 \cdot 10^5 = 60\,000$$
Das 3-Tesla-MRT-Feld übertrifft das Erdmagnetfeld um das 60.000-Fache. Dies erklärt, warum ferromagnetische metallische Gegenstände (z. B. Gasflaschen, Scheren) mit gewaltiger Beschleunigungskraft in die Öffnung des Magneten gerissen werden (Projektileffekt).




---

### Frage 21

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Wechselstrom

**Subkategorie:**
Wechselstrom

**Lernziel / Subskill:**
Zusammenhang zwischen Effektivwert und Spitzenspannung ($U_0 = \sqrt{2} \cdot U_{\text{eff}}$)

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
An einer europäischen Standard-Netzsteckdose liegt eine sinusförmige Wechselspannung mit dem Nenn-Effektivwert von $U_{\text{eff}} = 230\,\text{V}$ an.  
Welche maximale Scheitelspannung (Spitzenspannung / Amplitude $U_0$) tritt im periodischen Scheitelpunkt dieser Sinuskurve auf? (Hinweis: $\sqrt{2} \approx 1{,}41$).

**Antwortoptionen:**
- (A) $U_0 \approx 325\,\text{V}$
- (B) $U_0 = 230\,\text{V}$
- (C) $U_0 \approx 163\,\text{V}$
- (D) $U_0 = 460\,\text{V}$
- (E) $U_0 \approx 650\,\text{V}$

**Richtige Antwort:**
A

**Erklärung:**
Bei einer harmonischen, sinusförmigen Wechselspannung ist der Effektivwert $U_{\text{eff}}$ definiert als der Wert, der an einem ohmschen Widerstand die gleiche thermische Leistung wie ein entsprechender Gleichstrom erzeugt:
$$U_{\text{eff}} = \frac{U_0}{\sqrt{2}} \iff U_0 = \sqrt{2} \cdot U_{\text{eff}}$$
Mit $U_{\text{eff}} = 230\,\text{V}$ und $\sqrt{2} \approx 1{,}414$:
$$U_0 \approx 1{,}414 \cdot 230\,\text{V} \approx 325\,\text{V}$$
*(Die Spannung schwankt also periodisch zwischen $+325\,\text{V}$ und $-325\,\text{V}$; die Spitze-Spitze-Spannung beträgt sogar $650\,\text{V}$).*




---

### Frage 22

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Wechselstrom

**Subkategorie:**
Wechselstrom

**Lernziel / Subskill:**
Frequenz, Periodendauer und Umpolung im Stromnetz

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Die Netzfrequenz des europäischen Verbundnetzes beträgt konstant $f = 50\,\text{Hz}$ ($50\,\text{s}^{-1}$).  
Wie groß ist die Periodendauer $T$ einer einzelnen vollen Sinusschwingung, und wie oft pro Sekunde wechselt der Wechselstrom dabei seine Flussrichtung (Umpolung / Nulldurchgänge)?

**Antwortoptionen:**
- (A) $T = 50\,\text{ms}$; die Flussrichtung kehrt sich genau 50-mal pro Sekunde um.
- (B) $T = 2{,}0\,\text{ms}$; die Flussrichtung kehrt sich genau 25-mal pro Sekunde um.
- (C) $T = 20\,\text{ms}$; die Flussrichtung kehrt sich genau **100-mal pro Sekunde** um.
- (D) $T = 20\,\text{ms}$; die Flussrichtung bleibt stets in eine Richtung gerichtet.
- (E) $T = 0{,}05\,\text{s}$; die Flussrichtung kehrt sich 500-mal pro Sekunde um.

**Richtige Antwort:**
C

**Erklärung:**
1. **Periodendauer:**
   $$T = \frac{1}{f} = \frac{1}{50\,\text{Hz}} = 0{,}02\,\text{s} = 20\,\text{ms}$$
2. **Richtungswechsel:**
   In einer vollen Sinusperiode durchläuft der Strom eine positive und eine negative Halbwelle. Bei jedem Vorzeichenwechsel (beim Nulldurchgang) kehrt sich die physikalische Stromrichtung um: Es gibt **zwei Richtungswechsel pro Periode**.  
   Bei 50 Perioden pro Sekunde kehrt der Strom somit genau:
   $$2 \times 50 = 100\text{-mal pro Sekunde}$$
   seine Bewegungsrichtung um!




---

### Frage 23

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektromagnetische Wellen

**Subkategorie:**
Elektromagnetische Wellen & Spektrum

**Lernziel / Subskill:**
Grundgleichung elektromagnetischer Wellen ($c = \lambda \cdot f$)

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
40 Sekunden

**Frage:**
Ein therapeutischer Rubinlaser in der Augenheilkunde emittiert monochromatisches rotes Licht mit einer Vakuum-Wellenlänge von $\lambda = 600\,\text{nm}$ ($600 \cdot 10^{-9}\,\text{m} = 6{,}0 \cdot 10^{-7}\,\text{m}$).  
Die Ausbreitungsgeschwindigkeit elektromagnetischer Wellen im Vakuum beträgt $c = 3{,}0 \cdot 10^8\,\text{m/s}$.  
Welche Schwingungsfrequenz $f$ besitzt dieses Laserlicht?

**Antwortoptionen:**
- (A) $f = 2{,}0 \cdot 10^{14}\,\text{Hz}$
- (B) $f = 1{,}8 \cdot 10^{11}\,\text{Hz}$
- (C) $f = 5{,}0 \cdot 10^{12}\,\text{Hz}$
- (D) $f = 5{,}0 \cdot 10^{16}\,\text{Hz}$
- (E) $f = 5{,}0 \cdot 10^{14}\,\text{Hz}$ ($500\,\text{THz}$)

**Richtige Antwort:**
E

**Erklärung:**
Für alle elektromagnetischen Wellen im Vakuum gilt die fundamentale Wellengleichung:
$$c = \lambda \cdot f \iff f = \frac{c}{\lambda}$$
Einsetzen der gegebenen SI-Werte:
$$f = \frac{3{,}0 \cdot 10^8\,\frac{\text{m}}{\text{s}}}{6{,}0 \cdot 10^{-7}\,\text{m}} = \frac{3{,}0}{6{,}0} \cdot 10^{8 - (-7)}\,\text{s}^{-1} = 0{,}5 \cdot 10^{15}\,\text{Hz} = 5{,}0 \cdot 10^{14}\,\text{Hz} = 500\,\text{THz}$$
*(Typischer Zehnerpotenzfehler: $10^8 / 10^{-9}$ ohne Umrechnung der 600 in $6 \cdot 10^{-7}$ gerechnet $\to$ Distraktor D).*




---

### Frage 24

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Ausbreitungsgeschwindigkeit der elektromagnetischen Welle

**Subkategorie:**
Elektromagnetische Wellen & Spektrum

**Lernziel / Subskill:**
Vollständiges Spektrum nach Frequenz und Quantenenergie

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Welche der folgenden Reihenfolgen ordnet die Bereiche des elektromagnetischen Wellenspektrums streng monoton nach **steigender Frequenz $f$** (und damit gleichzeitig nach **steigender Photonenenergie $E = h \cdot f$** sowie **fallender Wellenlänge $\lambda$**)?

**Antwortoptionen:**
- (A) Gammastrahlung < Röntgenstrahlung < UV < Sichtbares Licht < Infrarot < Mikrowellen < Radiowellen
- (B) **Radiowellen < Mikrowellen < Infrarotstrahlung < Sichtbares Licht < Ultraviolettstrahlung < Röntgenstrahlung < Gammastrahlung**
- (C) Mikrowellen < Radiowellen < Sichtbares Licht < Infrarot < UV < Röntgenstrahlung < Gammastrahlung
- (D) Infrarot < Sichtbares Licht < Mikrowellen < UV < Röntgenstrahlung < Radiowellen < Gammastrahlung
- (E) Radiowellen < Infrarot < Mikrowellen < Sichtbares Licht < Röntgenstrahlung < UV < Gammastrahlung

**Richtige Antwort:**
B

**Erklärung:**
Die korrekte spektrale Einteilung lautet mit wachsender Frequenz (und sinkender Wellenlänge):
1. **Radiowellen:** Niedrigste Frequenz ($< 10^9\,\text{Hz}$), größte Wellenlänge ($> 1\,\text{m}$).
2. **Mikrowellen:** Radar, Mobilfunk, Mikrowellenherd ($1\,\text{mm} - 1\,\text{m}$).
3. **Infrarotstrahlung (Wärmestrahlung):** $780\,\text{nm} - 1\,\text{mm}$.
4. **Sichtbares Licht:** Ca. $380\,\text{nm}$ (Violett) bis $780\,\text{nm}$ (Rot).
5. **Ultraviolettstrahlung (UV):** $10\,\text{nm} - 380\,\text{nm}$.
6. **Röntgenstrahlung:** Ionisierend ($0{,}01\,\text{nm} - 10\,\text{nm}$).
7. **Gammastrahlung:** Höchste Frequenz ($> 10^{19}\,\text{Hz}$), ultrakurze Wellenlängen ($< 0{,}01\,\text{nm}$), höchste Quantenenergie.  
*(Option A stellt die exakt umgekehrte Reihenfolge dar).*




---

### Frage 25

**Kategorie:**
Elektrizitätslehre

**Official VMC-Stichwort:**
Elektromagnetische Wellen

**Subkategorie:**
Elektromagnetische Wellen & Spektrum

**Lernziel / Subskill:**
Spektralbereich des für den Menschen sichtbaren Lichts

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
In welchem Wellenlängenbereich des elektromagnetischen Spektrums liegt das für das menschliche Auge wahrnehmbare sichtbare Licht?

**Antwortoptionen:**
- (A) $10\,\text{nm}$ bis $100\,\text{nm}$
- (B) $1{,}0\,\mu\text{m}$ bis $10\,\mu\text{m}$
- (C) $780\,\text{nm}$ bis $1\,500\,\text{nm}$
- (D) **Etwa $380\,\text{nm}$ (violett) bis $780\,\text{nm}$ (rot)**
- (E) $1\,\text{m}$ bis $100\,\text{m}$

**Richtige Antwort:**
D

**Erklärung:**
Das menschliche Auge besitzt Photorezeptoren (Stäbchen und Zapfen auf der Retina), die für Photonen im Wellenlängenintervall von ca. **$380\,\text{nm}$ bis $780\,\text{nm}$** empfindlich sind:
- Kurzwelliges, energiereichstes Ende: **Violett / Blau** (ca. $380 - 450\,\text{nm}$)
- Mittlerer Bereich: **Grün / Gelb** (ca. $500 - 580\,\text{nm}$, Absorptionsmaximum der Netzhaut bei Tag ca. $555\,\text{nm}$)
- Langwelliges, energieärmeres Ende: **Rot** (ca. $650 - 780\,\text{nm}$)  
Unterhalb von $380\,\text{nm}$ schließt die Ultraviolettstrahlung an, oberhalb von $780\,\text{nm}$ die Infrarotstrahlung.




---

