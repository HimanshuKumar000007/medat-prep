# 🧪 Chapter 2: Mikrokosmos & elektromagnetische Strahlung — Fragenkatalog

> **Offizieller MedAT-BMS Fragenkatalog (Fach Chemie, Kapitel 2: Mikrokosmos & elektromagnetische Strahlung) auf AHS-Matura-Niveau**

---

## 📚 Set 1: BMS Foundation / Learn (Unschärferelation, Licht- & Wellennatur, Photonenenergie, Photoeffekt, De-Broglie & Linienspektren)

### Frage 1 (chem-02-set1-q001)
**Thema:** Heisenbergsche Unschärferelation — Grundlagen & Formelverständnis

Die Heisenbergsche Unschärferelation verknüpft die Unschärfe des Ortes $\Delta x$ mit der Unschärfe des Impulses $\Delta p$ eines quantenmechanischen Teilchens. Welche der folgenden mathematischen Beziehungen gibt diese fundamentale Naturkonstante und Ungleichung korrekt wieder?

- **A:** $\Delta x \cdot \Delta p \le \frac{h}{4\pi}$
- **B:** $\frac{\Delta x}{\Delta p} \ge \frac{h}{4\pi}$
- **C:** $\Delta x \cdot \Delta v \ge \frac{h \cdot m}{4\pi}$
- **D:** $\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$
- **E:** $\Delta x \cdot \Delta p \ge 4\pi \cdot h$

**Richtige Antwort:** **D**

**Erklärung:**
Die Heisenbergsche Unschärferelation lautet in ihrer exakten Formulierung:
$$\Delta x \cdot \Delta p \ge \frac{h}{4\pi} \quad \text{bzw.} \quad \Delta x \cdot \Delta p \ge \frac{\hbar}{2}$$
Da der Impuls als $p = m \cdot v$ definiert ist (für nicht-relativistische Geschwindigkeiten mit konstanter Masse $m$), gilt mit $\Delta p = m \cdot \Delta v$:
$$\Delta x \cdot m \cdot \Delta v \ge \frac{h}{4\pi} \iff \Delta x \cdot \Delta v \ge \frac{h}{4\pi \cdot m}$$
Analyse der Falschantworten:
- A setzt fälschlicherweise ein Kleiner-Gleich-Zeichen ($\le$), was bedeuten würde, dass das Produkt beliebig klein sein könnte.
- B bildet fälschlicherweise einen Quotienten statt eines Produkts.
- C multipliziert die Masse im Zähler statt durch sie zu dividieren.
- E vertauscht Zähler und Nenner von $4\pi$ und $h$.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Formelverständnis*

---

### Frage 2 (chem-02-set1-q002)
**Thema:** Unschärferelation — Masseabhängigkeit und makroskopische Objekte

Warum spielt die Heisenbergsche Unschärferelation bei makroskopischen Objekten (z. B. einer rollenden Stahlkugel mit $m = 0{,}1\,\text{kg}$) im Alltag keine beobachtbare Rolle, während sie die Struktur der Atomhülle eines Elektrons ($m \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$) vollständig dominiert?

- **A:** Weil das Plancksche Wirkungsquantum $h$ bei großen Massen seinen Wert verändert und gegen unendlich strebt.
- **B:** Weil die Unschärferelation nur für elektrisch geladene Teilchen gilt und ungeladene oder makroskopische Körper ihr nicht unterliegen.
- **C:** Weil die Gravitationskraft die quantenmechanische Unschärfe bei Massen über $1\,\mu\text{g}$ exakt neutralisiert.
- **D:** Weil makroskopische Objekte keine De-Broglie-Wellenlänge besitzen können.
- **E:** Weil das Produkt aus Orts- und Geschwindigkeitsunschärfe umgekehrt proportional zur Masse ist ($\Delta x \cdot \Delta v \ge \frac{h}{4\pi m}$) und aufgrund der Kleinheit von $h$ bei großen Massen unmessbar klein wird.

**Richtige Antwort:** **E**

**Erklärung:**
Aus $\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$ folgt unmittelbar für die Geschwindigkeitsunschärfe:
$$\Delta x \cdot \Delta v \ge \frac{h}{4\pi \cdot m}$$
Das Plancksche Wirkungsquantum $h \approx 6{,}626 \cdot 10^{-34}\,\text{J}\cdot\text{s}$ ist eine winzige Naturkonstante.
- Bei einer Kugel mit $m = 0{,}1\,\text{kg}$ ist der Nenner ($4\pi \cdot m \approx 1{,}25\,\text{kg}$) von makroskopischer Größenordnung, wodurch das Produkt $\Delta x \cdot \Delta v \approx 10^{-34}\,\text{m}^2/\text{s}$ beträgt. Eine Ortsunschärfe von $10^{-18}\,\text{m}$ erfordert somit lediglich eine völlig unmessbare Geschwindigkeitsunschärfe von $10^{-16}\,\text{m/s}$.
- Beim Elektron hingegen führt die winzige Masse von $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$ im Nenner dazu, dass der Quotient $\frac{h}{4\pi m_e} \approx 6 \cdot 10^{-5}\,\text{m}^2/\text{s}$ beträgt. Beschränkt man ein Elektron auf den Durchmesser eines Atoms ($10^{-10}\,\text{m}$), resultiert daraus eine enorme Geschwindigkeitsunschärfe von rund $10^6\,\text{m/s}$.
Analyse der Falschantworten: $h$ ist eine fundamentale Naturkonstante (A ist falsch). Die Unschärfe gilt universell für alle Massen, unabhängig von der Ladung (B ist falsch). Gravitation hebt Quanteneffekte nicht auf (C ist falsch). Auch makroskopische Körper besitzen eine theoretische De-Broglie-Wellenlänge (D ist falsch).

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Masseabhängigkeit*

---

### Frage 3 (chem-02-set1-q003)
**Thema:** Grenzen klassischer Bahnen & Orbitalbegriff

Das klassische Bohrsche Atommodell beschrieb Elektronen auf festen Kreisbahnen mit wohldefiniertem Bahnradius $r$ und exakter Bahngeschwindigkeit $v$. Welche fundamentale quantenmechanische Konsequenz erzwingt die Aufgabe dieses klassischen Bahnkonzepts in der modernen Chemie?

- **A:** Elektronen bewegen sich auf elliptischen Bahnen, deren Exzentrizität durch die Spinquantenzahl bestimmt wird.
- **B:** Die Heisenberg-Relation verbietet dem Elektron, einen Spin zu besitzen, wenn es sich in der Nähe des Kerns aufhält.
- **C:** Die Elektronen stürzen wegen der Unschärferelation nach $10^{-8}\,\text{s}$ in den Atomkern, wodurch nur instabile Isotope entstehen.
- **D:** Das Elektron verliert seine Teilchenmasse vollständig und existiert im Atom ausschließlich als reines Photon.
- **E:** Da Ort und Impuls eines Elektrons nicht gleichzeitig exakt bestimmt sein können, kann keine exakte Trajektorie (Bahn) existieren; stattdessen beschreibt man Aufenthaltswahrscheinlichkeiten über Wellenfunktionen ($|\psi|^2$, Orbitale).

**Richtige Antwort:** **E**

**Erklärung:**
Eine klassische „Bahn“ oder Trajektorie setzt voraus, dass zu jedem Zeitpunkt sowohl der momentane Aufenthaltsort $\vec{x}(t)$ als auch der zugehörige Impuls $\vec{p}(t)$ exakt definiert sind. Die Heisenbergsche Unschärferelation ($\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$) verbietet diese gleichzeitige Schärfe prinzipiell. Daher bricht das Konzept starrer Planetenbahnen für atomare Teilchen zusammen. Die moderne quantenmechanische Beschreibung ersetzt feste Bahnen durch dreidimensionale Wellenfunktionen $\psi(\vec{r})$, wobei das Betragsquadrat $|\psi(\vec{r})|^2$ die räumliche Wahrscheinlichkeitsdichte angibt, das Elektron an einem bestimmten Ort anzutreffen. Raumbereiche mit typischerweise $90\,\%$-iger Aufenthaltswahrscheinlichkeit nennt man Orbitale.
Analyse der Falschantworten: Elliptische Bahnen (Sommerfeld-Modell) sind ebenfalls klassisch überholt (A ist falsch). Der Spin ist eine intrinsische Eigenschaft und unabhängig vom Kernabstand (B ist falsch). Das Elektron stürzt eben gerade nicht in den Kern; die Unschärferelation garantiert die Nullpunktsenergie und Kernstabilität (C ist falsch). Das Elektron behält stets seine Ruhemasse und Ladung (D ist falsch).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Orbitale, Wellenfunktion*

---

### Frage 4 (chem-02-set1-q004)
**Thema:** Wellennatur des Lichts — Grundgleichung & Periodendauer

Eine monochromatische elektromagnetische Welle breitet sich im Vakuum mit der Lichtgeschwindigkeit $c = 3 \cdot 10^8\,\text{m/s}$ aus und besitzt eine Frequenz von $f = 6 \cdot 10^{14}\,\text{Hz}$. Welche Wellenlänge $\lambda$ und welche Periodendauer $T$ weist diese Strahlung auf?

- **A:** $\lambda = 500\,\text{nm}$ und $T \approx 1{,}67 \cdot 10^{-15}\,\text{s}$
- **B:** $\lambda = 500\,\text{nm}$ und $T = 6 \cdot 10^{-14}\,\text{s}$
- **C:** $\lambda = 200\,\text{nm}$ und $T \approx 1{,}67 \cdot 10^{-15}\,\text{s}$
- **D:** $\lambda = 1800\,\text{nm}$ und $T = 3 \cdot 10^{-8}\,\text{s}$
- **E:** $\lambda = 50\,\text{nm}$ und $T \approx 3{,}33 \cdot 10^{-14}\,\text{s}$

**Richtige Antwort:** **A**

**Erklärung:**
Die grundlegenden Wellengleichungen lauten:
1. Wellenlänge:
$$c = \lambda \cdot f \implies \lambda = \frac{c}{f} = \frac{3 \cdot 10^8\,\text{m/s}}{6 \cdot 10^{14}\,\text{s}^{-1}} = 0{,}5 \cdot 10^{-6}\,\text{m} = 500\,\text{nm}$$
2. Periodendauer:
$$T = \frac{1}{f} = \frac{1}{6 \cdot 10^{14}\,\text{s}^{-1}} = \frac{1}{6} \cdot 10^{-14}\,\text{s} \approx 0{,}167 \cdot 10^{-14}\,\text{s} = 1{,}67 \cdot 10^{-15}\,\text{s}$$
Analyse der Falschantworten:
- B berechnet die Wellenlänge zwar richtig, setzt für die Periodendauer jedoch eine falsche Zehnerpotenz an.
- C verrechnet sich beim Bruch $3/6$ zu 0,2.
- D multipliziert $c$ mit $f$ statt zu dividieren.
- E weist einen Zehnerpotenzfehler um den Faktor 10 auf.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Wellennatur, Frequenz*

---

### Frage 5 (chem-02-set1-q005)
**Thema:** Transversalwellen — Polarisation und Feldorientierung

Elektromagnetische Strahlung wird physikalisch als Transversalwelle beschrieben. Welche geometrische Beziehung besteht zwischen dem elektrischen Feldvektor $\vec{E}$, dem magnetischen Feldvektor $\vec{B}$ und dem Ausbreitungsvektor $\vec{c}$ im Vakuum?

- **A:** $\vec{E}$ und $\vec{B}$ stehen antiparallel zueinander und schwingen beide in Ausbreitungsrichtung $\vec{c}$.
- **B:** $\vec{E}$ und $\vec{B}$ schwingen parallel zueinander und stehen senkrecht auf $\vec{c}$.
- **C:** $\vec{E}$, $\vec{B}$ und $\vec{c}$ stehen jeweils paarweise senkrecht aufeinander ($\vec{E} \perp \vec{B} \perp \vec{c}$).
- **D:** $\vec{E}$ schwingt kreisförmig um $\vec{B}$, während $\vec{c}$ stets in Richtung des stärkeren Feldes zeigt.
- **E:** Nur $\vec{E}$ steht senkrecht auf $\vec{c}$, während $\vec{B}$ immer exakt parallel zu $\vec{c}$ orientiert ist.

**Richtige Antwort:** **C**

**Erklärung:**
Elektromagnetische Wellen sind reine Transversalwellen. Das bedeutet per definitionem, dass die Feldvektoren senkrecht zur Ausbreitungsrichtung schwingen. Aus den Maxwell-Gleichungen folgt, dass der elektrische Feldvektor $\vec{E}$, der magnetische Induktionsvektor $\vec{B}$ und der Richtungsvektor der Ausbreitung $\vec{c}$ ein orthogonales Rechtssystem aufspannen:
$$\vec{E} \perp \vec{B}, \quad \vec{E} \perp \vec{c}, \quad \vec{B} \perp \vec{c}$$
Analyse der Falschantworten: Schwingungen in Ausbreitungsrichtung (A) kennzeichnen Longitudinalwellen (z. B. Schall). Schwingen $\vec{E}$ und $\vec{B}$ parallel zueinander (B), kann sich keine elektromagnetische Welle ausbreiten. Eine Komponente parallel zu $\vec{c}$ (E) existiert im freien Vakuum nicht.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Transversalwelle, Vektorfelder*

---

### Frage 6 (chem-02-set1-q006)
**Thema:** Elektromagnetisches Spektrum — Reihung & Photonenenergie

Welche der folgenden Reihenfolgen ordnet die Abschnitte des elektromagnetischen Spektrums streng nach steigender Photonenenergie (vom energieärmsten zum energiereichsten Strahlungstyp)?

- **A:** Radiowellen < Mikrowellen < Infrarot (IR) < Sichtbares Licht (VIS) < Ultraviolett (UV) < Röntgenstrahlung < Gammastrahlung
- **B:** Gammastrahlung < Röntgenstrahlung < Ultraviolett < Sichtbares Licht < Infrarot < Mikrowellen < Radiowellen
- **C:** Radiowellen < Infrarot < Mikrowellen < Sichtbares Licht < Ultraviolett < Röntgenstrahlung < Gammastrahlung
- **D:** Sichtbares Licht < Infrarot < Mikrowellen < Radiowellen < Ultraviolett < Röntgenstrahlung < Gammastrahlung
- **E:** Mikrowellen < Radiowellen < Infrarot < Sichtbares Licht < Röntgenstrahlung < Ultraviolett < Gammastrahlung

**Richtige Antwort:** **A**

**Erklärung:**
Die Energie eines einzelnen Photons ist über $E = h \cdot f = \frac{h \cdot c}{\lambda}$ direkt proportional zur Frequenz $f$ und umgekehrt proportional zur Wellenlänge $\lambda$.
Von niedrigster Frequenz (größte Wellenlänge, geringste Photonenenergie) zu höchster Frequenz (kürzeste Wellenlänge, höchste Photonenenergie) lautet die Reihung:
1. Radiowellen ($\lambda > 1\,\text{m}$, $f < 300\,\text{MHz}$)
2. Mikrowellen ($\lambda \approx 1\,\text{mm} - 1\,\text{m}$)
3. Infrarotstrahlung ($\lambda \approx 780\,\text{nm} - 1\,\text{mm}$)
4. Sichtbares Licht ($\lambda \approx 380 - 780\,\text{nm}$)
5. Ultraviolettstrahlung ($\lambda \approx 10 - 380\,\text{nm}$)
6. Röntgenstrahlung ($\lambda \approx 0{,}01 - 10\,\text{nm}$)
7. Gammastrahlung ($\lambda < 0{,}01\,\text{nm}$)
Analyse der Falschantworten:
- B ist exakt die umgekehrte Reihenfolge (fallende Photonenenergie).
- C vertauscht Mikrowellen und Infrarot.
- D beginnt fälschlicherweise in der Mitte mit sichtbarem Licht.
- E vertauscht Radiowellen/Mikrowellen sowie UV/Röntgen.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Elektromagnetisches Spektrum, Photonenenergie*

---

### Frage 7 (chem-02-set1-q007)
**Thema:** Sichtbares Licht (VIS) — Spektralfarben & Wellenlängen

Der für das menschliche Auge sichtbare Bereich des elektromagnetischen Spektrums (VIS) erstreckt sich von ca. $380\,\text{nm}$ bis $780\,\text{nm}$. Welche Zuordnung zwischen Farbe, Wellenlänge und relativer Photonenenergie innerhalb des sichtbaren Spektrums ist korrekt?

- **A:** Rotes Licht hat mit ca. $400\,\text{nm}$ die kürzeste Wellenlänge und die höchste Photonenenergie.
- **B:** Violettes Licht hat mit ca. $750\,\text{nm}$ die längste Wellenlänge und die niedrigste Frequenz.
- **C:** Rotes Licht hat eine Wellenlänge von ca. $700\,\text{nm}$ und besitzt eine geringere Photonenenergie als blaues Licht (ca. $450\,\text{nm}$).
- **D:** Grünes Licht (ca. $520\,\text{nm}$) besitzt energiereichere Photonen als violettes Licht (ca. $400\,\text{nm}$).
- **E:** Gelbes Licht besitzt eine höhere Frequenz als blaues Licht, weshalb es vom Auge heller wahrgenommen wird.

**Richtige Antwort:** **C**

**Erklärung:**
Innerhalb des VIS-Spektrums gilt der Farbverlauf entlang steigender Wellenlänge:
$$\text{Violett} (\approx 380\text{–}430\,\text{nm}) \to \text{Blau} (\approx 430\text{–}490\,\text{nm}) \to \text{Grün} (\approx 490\text{–}560\,\text{nm}) \to \text{Gelb} (\approx 560\text{–}590\,\text{nm}) \to \text{Rot} (\approx 630\text{–}780\,\text{nm})$$
Da $E = \frac{h \cdot c}{\lambda}$ ist:
- Kürzere Wellenlänge (Violett/Blau) = höhere Frequenz = höhere Photonenenergie.
- Längere Wellenlänge (Rot) = niedrigere Frequenz = niedrigere Photonenenergie.
Rotes Licht ($\approx 700\,\text{nm}$) hat folglich eine deutlich geringere Photonenenergie als blaues Licht ($\approx 450\,\text{nm}$).
Analyse der Falschantworten: A vertauscht die Wellenlängen von Rot und Violett. B ordnet Violett die Wellenlänge von Rot zu. D behauptet fälschlich, dass Grün energiereicher als Violett sei. E vertauscht die Frequenzordnung von Gelb und Blau.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Sichtbares Licht, Spektralfarben, Photonenenergie*

---

### Frage 8 (chem-02-set1-q008)
**Thema:** Teilchennatur des Lichts — Planck-Einstein-Beziehung

Ein Laser emittiert Photonen mit einer Frequenz von $f = 5 \cdot 10^{14}\,\text{Hz}$. Wie groß ist die Energie $E$ eines einzelnen Photons? (Verwende für die Planck-Konstante den gerundeten Wert $h = 6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s}$).

- **A:** $1{,}32 \cdot 10^{-48}\,\text{J}$
- **B:** $1{,}1 \cdot 10^{-19}\,\text{J}$
- **C:** $3{,}3 \cdot 10^{-20}\,\text{J}$
- **D:** $3{,}3 \cdot 10^{-19}\,\text{J}$
- **E:** $7{,}58 \cdot 10^{47}\,\text{J}$

**Richtige Antwort:** **D**

**Erklärung:**
Die Energie eines einzelnen Photons berechnet sich direkt über die Planck-Einstein-Gleichung:
$$E = h \cdot f$$
Einsetzen der Werte:
$$E = (6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s}) \cdot (5 \cdot 10^{14}\,\text{s}^{-1}) = 33{,}0 \cdot 10^{-20}\,\text{J} = 3{,}3 \cdot 10^{-19}\,\text{J}$$
Analyse der Falschantworten:
- A teilt $h$ durch $f$.
- B rechnet mit einem falschen Vorfaktor ($6{,}6 / 6$).
- C begeht einen Zehnerpotenzfehler bei der Verschiebung des Kommas ($33 \cdot 10^{-20} \neq 3{,}3 \cdot 10^{-20}$).
- E teilt $f$ durch $h$.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Photonenenergie, Planck-Gleichung, Kopfrechnen*

---

### Frage 9 (chem-02-set1-q009)
**Thema:** Licht-Materie-Wechselwirkung — Spektralbereiche & Molekülprozesse

Elektromagnetische Strahlung regt in Abhängigkeit von ihrer Photonenenergie unterschiedliche physikalische Prozesse in Molekülen an. Welche Zuordnung zwischen Spektralbereich und angeregtem molekularem Prozess ist korrekt?

- **A:** Mikrowellen $\to$ Ionisation von kernnahen Rumpfelektronen
- **B:** Radiowellen $\to$ Herauslösen von Valenzelektronen (äußerer Photoeffekt)
- **C:** Sichtbares Licht (VIS) $\to$ Spaltung von Atomkernen (Kernspaltung)
- **D:** Röntgenstrahlung $\to$ Ausschließlich Anregung molekularer Rotationszustände
- **E:** Infrarotstrahlung (IR) $\to$ Anregung von Molekülschwingungen (Bindungsstreckung und -biegung)

**Richtige Antwort:** **E**

**Erklärung:**
Die Quantenmechanik erlaubt Molekülen nur diskrete Energieübergänge:
- Mikrowellen ($E \approx 10^{-4}\,\text{eV}$): Sehr geringe Photonenenergie, regt rein die Rotation von polaren Molekülen an.
- Infrarotstrahlung ($E \approx 10^{-2} - 1\,\text{eV}$): Entspricht exakt den energetischen Abständen von Molekülschwingungen (Valenz- und Deformationsschwingungen kovalenter Bindungen, IR-Spektroskopie).
- UV/VIS-Strahlung ($E \approx 1{,}5 - 10\,\text{eV}$): Regt Übergänge von Valenzelektronen in energetisch höhere Molekülorbitale (z. B. $\pi \to \pi^*$) an.
- Röntgen- und Gammastrahlung ($E > 100\,\text{eV}$): Hochenergetisch, führt zur Ionisation (Herausschlagen von inneren Rumpfelektronen) bzw. zu Kernreaktionen.
Analyse der Falschantworten: Mikrowellen können niemals ionisieren (A). Radiowellen sind viel zu energiearm für den Photoeffekt (B). VIS-Licht besitzt nicht annähernd die Energie für Kernspaltungen (C). Röntgenstrahlung regt keine Rotationen an, sondern ionisiert (D).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht-Materie-Wechselwirkung, Infrarot, Schwingungsspektroskopie*

---

### Frage 10 (chem-02-set1-q010)
**Thema:** Äußerer Photoeffekt — 1-zu-1-Wechselwirkung & Grenzfrequenz

Beim äußeren Photoelektrischen Effekt wird eine saubere Zinkplatte im Hochvakuum mit Licht unterschiedlicher Frequenz und Intensität bestrahlt. Welche Beobachtung stützt Einsteins Lichtquantenhypothese (Photonenkonzept) gegenüber der klassischen Wellentheorie?

- **A:** Selbst extrem intensives rotes Licht vermag kein einziges Elektron herauszulösen, während schwaches ultraviolettes Licht sofort Elektronen freisetzt.
- **B:** Die kinetische Energie der austretenden Elektronen verdoppelt sich, wenn man die Lichtintensität bei konstanter Frequenz verdoppelt.
- **C:** Bei sehr schwacher Lichtintensität dauert es mehrere Stunden, bis sich genügend Energie auf einem Elektron angesammelt hat, um es freizusetzen.
- **D:** Die Zahl der pro Zeiteinheit freigesetzten Elektronen hängt ausschließlich von der Wellenlänge des Lichts ab, nicht jedoch von der Intensität.
- **E:** Elektronen werden nur dann emittiert, wenn die Frequenz des Lichts exakt unterhalb der Grenzfrequenz $f_0$ liegt ($f < f_0$).

**Richtige Antwort:** **A**

**Erklärung:**
Klassisch wurde Licht rein als kontinuierliche Welle beschrieben: Jedes Licht müsste bei hinreichend hoher Intensität (hohe Feldstärke) nach gewisser Zeit genügend Energie auf ein Elektron übertragen, um dieses herauszulösen. Das Experiment zeigt jedoch das Gegenteil:
1. Fällt Licht mit $f < f_0$ ein (wobei $h \cdot f_0 = W_A$ die materialspezifische Austrittsarbeit ist), wird unabhängig von der Intensität kein einziges Elektron emittiert (rotes Licht liefert $h \cdot f < W_A$).
2. Ist $f > f_0$ (z. B. UV-Licht), setzt die Emission verzögerungsfrei ein ($< 10^{-9}\,\text{s}$), selbst bei minimaler Bestrahlungsstärke.
Dies beweist die 1-zu-1-Wechselwirkung: Ein einzelnes Photon überträgt seine gesamte Energie $h \cdot f$ in einem elementaren Stoßprozess auf genau ein einzelnes Elektron.
Analyse der Falschantworten: Die kinetische Energie hängt von der Frequenz ab, nicht von der Intensität (B ist falsch). Es gibt keine Akkumulationszeit (C ist falsch). Die Zahl der Elektronen ist direkt proportional zur Intensität (D ist falsch). Emission erfordert $f \ge f_0$, nicht $f < f_0$ (E ist falsch).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Grenzfrequenz, Einsteinsche Hypothese*

---

### Frage 11 (chem-02-set1-q011)
**Thema:** Einsteinsche Photoeffekt-Gleichung — Kinetische Energie

Licht der Frequenz $f$ trifft auf eine Metalloberfläche mit der Austrittsarbeit $W_A$. Welcher fundamentale Zusammenhang beschreibt die maximale kinetische Energie $E_{\text{kin,max}}$ der emittierten Photoelektronen?

- **A:** $E_{\text{kin,max}} = h \cdot f + W_A$
- **B:** $E_{\text{kin,max}} = \frac{h \cdot f}{W_A}$
- **C:** $E_{\text{kin,max}} = \frac{1}{2} m_e \cdot c^2 - W_A$
- **D:** $E_{\text{kin,max}} = W_A - h \cdot f$
- **E:** $E_{\text{kin,max}} = h \cdot f - W_A$

**Richtige Antwort:** **E**

**Erklärung:**
Die Energiebilanz des elementaren Photoabsorptionsprozesses nach Albert Einstein (1905) lautet:
$$E_{\text{Photon}} = W_A + E_{\text{kin,max}}$$
Das eingestrahlte Photon mit der Energie $E_{\text{Photon}} = h \cdot f$ muss zunächst die energetische Hürde überwinden, die das Elektron im Metallgitter bindet (Austrittsarbeit $W_A$). Der verbleibende Energieüberschuss steht dem freigesetzten Elektron als kinetische Energie zur Verfügung:
$$E_{\text{kin,max}} = h \cdot f - W_A$$
Analyse der Falschantworten:
- A addiert die Austrittsarbeit fälschlicherweise, was den Energieerhaltungssatz verletzt.
- B bildet einen Quotienten.
- C setzt fälschlicherweise die Ruheenergie bzw. die Lichtgeschwindigkeit $c$ anstelle der tatsächlichen Elektronengeschwindigkeit ein.
- D würde für reale Emissionen ($h \cdot f > W_A$) einen negativen Energiewert liefern.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Einsteinsche Gleichung, Austrittsarbeit*

---

### Frage 12 (chem-02-set1-q012)
**Thema:** Photoeffekt — Berechnung von Grenzfrequenz & kinetischer Energie

Die Austrittsarbeit eines Alkalimetalls beträgt $W_A = 2{,}0\,\text{eV}$. Die Metalloberfläche wird mit monochromatischem Licht bestrahlt, dessen Photonen jeweils eine Energie von $E_{\text{Photon}} = 3{,}5\,\text{eV}$ besitzen. Welche maximale kinetische Energie besitzen die emittierten Photoelektronen?

- **A:** $0\,\text{eV}$ (Es tritt keine Emission auf, da die Austrittsarbeit zu hoch ist)
- **B:** $1{,}5\,\text{eV}$
- **C:** $5{,}5\,\text{eV}$
- **D:** $7{,}0\,\text{eV}$
- **E:** $1{,}75\,\text{eV}$

**Richtige Antwort:** **B**

**Erklärung:**
Die Berechnung erfolgt über die Einsteinsche Gleichung für den Photoeffekt:
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A$$
Da $E_{\text{Photon}} = 3{,}5\,\text{eV} > W_A = 2{,}0\,\text{eV}$ ist, wird die Schwelle überschritten und Photoelektronen werden sofort freigesetzt:
$$E_{\text{kin,max}} = 3{,}5\,\text{eV} - 2{,}0\,\text{eV} = 1{,}5\,\text{eV}$$
Analyse der Falschantworten:
- A ignoriert, dass $3{,}5\,\text{eV} > 2{,}0\,\text{eV}$ ist.
- C addiert die beiden Werte ($3{,}5 + 2{,}0 = 5{,}5\,\text{eV}$).
- D multipliziert die Werte ($3{,}5 \cdot 2{,}0$).
- E dividiert $3{,}5 / 2{,}0$.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Kinetische Energie, eV-Rechnung*

---

### Frage 13 (chem-02-set1-q013)
**Thema:** Photoeffekt — Trennung von Intensität und Frequenz

Eine Photozelle wird mit monochromatischem Licht bestrahlt, dessen Frequenz $f$ größer ist als die Grenzfrequenz $f_0$ der Photokathode. Nun wird die Intensität der Strahlung verdoppelt, während die Frequenz $f$ exakt konstant gehalten wird. Welche Aussage über den resultierenden Photostrom und die maximale kinetische Energie $E_{\text{kin,max}}$ der austretenden Elektronen ist korrekt?

- **A:** Sowohl der Photostrom als auch $E_{\text{kin,max}}$ verdoppeln sich.
- **B:** $E_{\text{kin,max}}$ verdoppelt sich, während der Photostrom unverändert bleibt.
- **C:** Der Photostrom verdoppelt sich, während $E_{\text{kin,max}}$ exakt unverändert bleibt.
- **D:** Weder der Photostrom noch $E_{\text{kin,max}}$ verändern sich.
- **E:** Der Photostrom vervierfacht sich, während $E_{\text{kin,max}}$ um den Faktor $\sqrt{2}$ ansteigt.

**Richtige Antwort:** **C**

**Erklärung:**
Dies ist die zentrale Verständnishürde des Photoeffekts:
1. Intensität bedeutet bei konstanter Frequenz schlicht eine höhere Anzahl von Photonen pro Fläche und Zeiteinheit ($I = N_{\text{Photonen}} \cdot hf / (A \cdot t)$). Da jedes Elektron durch genau ein Photon freigesetzt wird, führt eine Verdopplung der Photonenanzahl zu einer Verdopplung der emittierten Elektronen pro Zeiteinheit $\to$ der Sättigungs-Photostrom verdoppelt sich.
2. Die maximale kinetische Energie $E_{\text{kin,max}} = hf - W_A$ hängt ausschließlich von der Frequenz des einzelnen Photons und der materialspezifischen Austrittsarbeit ab. Da $f$ konstant gehalten wird, ändert sich die Energie der einzelnen Photonen nicht $\to E_{\text{kin,max}}$ bleibt exakt gleich.
Analyse der Falschantworten: A, B und E unterliegen dem Irrglauben, dass eine intensivere Welle die einzelnen Elektronen mit mehr Wucht herausschleudern würde. D übersieht den proportionalen Anstieg der Elektronenzahl mit der Photonenanzahl.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Intensität, Photostrom, Kinetische Energie*

---

### Frage 14 (chem-02-set1-q014)
**Thema:** Einstein-Gerade — Steigung & Naturkonstante

Trägt man in einem Diagramm die experimentell ermittelte maximale kinetische Energie $E_{\text{kin,max}}$ der emittierten Photoelektronen auf der Ordinate ($y$-Achse) gegen die Frequenz $f$ des eingestrahlten Lichts auf der Abszisse ($x$-Achse) auf, erhält man für jedes Metall eine lineare Funktionsgerade (Einstein-Gerade). Welche Aussage über die Steigung und die Achsenabschnitte dieser Geraden trifft zu?

- **A:** Die Steigung der Geraden ist materialspezifisch und hängt von der Austrittsarbeit des Metalls ab.
- **B:** Metalle mit größerer Austrittsarbeit weisen eine steilere Gerade auf als Metalle mit geringer Austrittsarbeit.
- **C:** Die Steigung entspricht der Lichtgeschwindigkeit $c$, und der $y$-Achsenabschnitt ist stets positiv.
- **D:** Die Steigung entspricht für alle Metalle universell dem Planckschen Wirkungsquantum $h$, und die Nullstelle auf der Frequenzachse entspricht der Grenzfrequenz $f_0$.
- **E:** Die Steigung entspricht der Elementarladung $e$, wenn die Energie in Joule gemessen wird.

**Richtige Antwort:** **D**

**Erklärung:**
Die Einstein-Gleichung lässt sich direkt als Geradengleichung $y = k \cdot x + d$ lesen:
$$E_{\text{kin,max}} = h \cdot f - W_A$$
- Variable auf der $y$-Achse: $y = E_{\text{kin,max}}$
- Variable auf der $x$-Achse: $x = f$
- Steigung der Geraden: $k = h$ (Plancksches Wirkungsquantum)
- Ordinatenabschnitt (bei $f = 0$): $d = -W_A$ (negative Austrittsarbeit)
- Nullstelle (Schnittpunkt mit der $x$-Achse bei $E_{\text{kin,max}} = 0$): $0 = h \cdot f_0 - W_A \implies f_0 = \frac{W_A}{h}$ (Grenzfrequenz).
Da $h$ eine universelle Naturkonstante ist, verlaufen die Einstein-Geraden für alle Metalle streng parallel zueinander. Sie unterscheiden sich lediglich durch eine horizontale Verschiebung entlang der Frequenzachse.
Analyse der Falschantworten: A und B behaupten fälschlicherweise eine Materialabhängigkeit der Steigung. C nennt $c$ statt $h$. E verwechselt die Steigung mit dem Umrechnungsfaktor zur Einheit Elektronenvolt.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Einstein-Gerade, Steigung, Planck-Konstante*

---

### Frage 15 (chem-02-set1-q015)
**Thema:** De-Broglie-Hypothese — Materiewellen & Impuls

Louis de Broglie postulierte 1924, dass nicht nur Licht Teilchencharakter besitzt, sondern auch massebehaftete Materieteilchen Welleneigenschaften aufweisen. Wie lautet die fundamentale De-Broglie-Gleichung für die Wellenlänge $\lambda$ eines Teilchens mit der Masse $m$ und der Geschwindigkeit $v$?

- **A:** $\lambda = \frac{h \cdot v}{m}$
- **B:** $\lambda = \frac{h}{p} = \frac{h}{m \cdot v}$
- **C:** $\lambda = \frac{p}{h} = \frac{m \cdot v}{h}$
- **D:** $\lambda = \frac{h \cdot c}{m \cdot v^2}$
- **E:** $\lambda = \frac{m \cdot c^2}{h}$

**Richtige Antwort:** **B**

**Erklärung:**
De Broglie verknüpfte die Photonenbeziehung $p = \frac{h}{\lambda}$ symmetrisch mit klassischen Materieteilchen:
$$\lambda = \frac{h}{p}$$
Da der nicht-relativistische Impuls $p$ das Produkt aus Masse $m$ und Geschwindigkeit $v$ ist ($p = m \cdot v$), gilt:
$$\lambda = \frac{h}{m \cdot v}$$
Analyse der Falschantworten:
- A multipliziert die Geschwindigkeit im Zähler.
- C invertiert den Bruch ($p/h$ statt $h/p$).
- D bringt fälschlicherweise die Lichtgeschwindigkeit $c$ in eine Formel für nicht-relativistische Materieteilchen ein.
- E ist eine Umstellung der Ruheenergie $E = mc^2 = hf$ nach einer Frequenz und stellt keine Wellenlänge dar.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Teilchen-Welle-Dualismus, De-Broglie, Materiewellen*

---

### Frage 16 (chem-02-set1-q016)
**Thema:** De-Broglie-Wellenlänge — Proportionalitätslogik

Ein Elektron bewegt sich zunächst mit der Geschwindigkeit $v_1$ und besitzt dabei die De-Broglie-Wellenlänge $\lambda_1 = 1{,}2\,\text{nm}$. Durch ein elektrisches Feld wird das Elektron so beschleunigt, dass sich seine Geschwindigkeit auf $v_2 = 3 \cdot v_1$ verdreifacht. Wie groß ist seine neue De-Broglie-Wellenlänge $\lambda_2$?

- **A:** $\lambda_2 = 3{,}6\,\text{nm}$
- **B:** $\lambda_2 = 1{,}2\,\text{nm}$
- **C:** $\lambda_2 = 0{,}4\,\text{nm}$
- **D:** $\lambda_2 = 0{,}133\,\text{nm}$
- **E:** $\lambda_2 = 10{,}8\,\text{nm}$

**Richtige Antwort:** **C**

**Erklärung:**
Nach der De-Broglie-Formel gilt:
$$\lambda = \frac{h}{m \cdot v}$$
Da die Planck-Konstante $h$ und die Masse des Elektrons $m$ unverändert bleiben, ist die De-Broglie-Wellenlänge streng umgekehrt proportional zur Geschwindigkeit $v$ ($\lambda \propto 1/v$).
Wird die Geschwindigkeit um den Faktor 3 vervielfacht ($v_2 = 3 \cdot v_1$), muss die Wellenlänge um genau denselben Faktor sinken (Drittelung):
$$\lambda_2 = \frac{\lambda_1}{3} = \frac{1{,}2\,\text{nm}}{3} = 0{,}4\,\text{nm}$$
Analyse der Falschantworten:
- A multipliziert fälschlicherweise mit 3 ($1{,}2 \cdot 3 = 3{,}6$).
- B geht von einer Geschwindigkeitsunabhängigkeit aus.
- D teilt durch 9 (Verwechslung mit der kinetischen Energie $E_{\text{kin}} \propto v^2$).
- E multipliziert mit dem Quadrat des Faktors ($1{,}2 \cdot 9$).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Proportionalität, Kopfrechnen*

---

### Frage 17 (chem-02-set1-q017)
**Thema:** Experimenteller Nachweis von Materiewellen — Davisson-Germer-Versuch

Welcher Meilenstein der modernen Physik lieferte 1927 den ersten direkten experimentellen Beweis dafür, dass Elektronen tatsächlich Welleneigenschaften im Sinne der De-Broglie-Hypothese besitzen?

- **A:** Die Beobachtung von Interferenzringen und Beugungsmustern bei der Streuung eines Elektronenstrahls an einem Nickel-Einkristall (Davisson-Germer-Experiment)
- **B:** Die Bestimmung der spezifischen Elektronenladung im Millikan-Öltröpfchen-Versuch
- **C:** Die Ablenkung von Alpha-Teilchen an einer dünnen Goldfolie im Rutherford-Streuexperiment
- **D:** Die Messung der Schwarzkörperstrahlung durch Max Planck
- **E:** Der Nachweis der Kernspaltung von Uran durch Otto Hahn und Lise Meitner

**Richtige Antwort:** **A**

**Erklärung:**
Interferenz und Beugung sind die unbestechlichen Kennzeichen von Wellen. Da die De-Broglie-Wellenlänge von thermischen oder mäßig beschleunigten Elektronen in der Größenordnung von $0{,}1\,\text{nm}$ liegt, eignen sich makroskopische optische Gitter nicht zur Beugung. Clinton Davisson und Lester Germer nutzten die regelmäßigen Netzebenenabstände eines Nickel-Einkristalls als dreidimensionales Beugungsgitter. Sie beobachteten konstruktive und destruktive Interferenzmaxima der gestreuten Elektronen exakt bei den Winkeln, die nach der Bragg-Gleichung für Wellen der berechneten De-Broglie-Wellenlänge $\lambda = \frac{h}{p}$ vorhergesagt wurden.
Analyse der Falschantworten:
- B (Millikan) wies die Quantisierung der elektrischen Ladung $e$ nach.
- C (Rutherford) bewies die Existenz des winzigen, massereichen Atomkerns.
- D (Planck) führte die Quantenhypothese für Strahlungsoszillatoren ein.
- E (Hahn/Meitner) betrifft nukleare Kernspaltung.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Teilchen-Welle-Dualismus, Davisson-Germer, Elektronenbeugung*

---

### Frage 18 (chem-02-set1-q018)
**Thema:** Quantisierte Energieniveaus des Wasserstoffatoms — Bohrsche Formel

Die diskreten Energieniveaus des Elektrons im Wasserstoffatom lassen sich in guter Näherung über die Formel $E_n = -\frac{13{,}6\,\text{eV}}{n^2}$ ($n = 1, 2, 3, \dots$) beschreiben. Welche Energie besitzt das Elektron im zweiten angeregten Zustand ($n = 3$)?

- **A:** $-13{,}6\,\text{eV}$
- **B:** $-6{,}8\,\text{eV}$
- **C:** $-3{,}4\,\text{eV}$
- **D:** $-1{,}51\,\text{eV}$
- **E:** $+4{,}53\,\text{eV}$

**Richtige Antwort:** **D**

**Erklärung:**
Für das Wasserstoffatom gilt:
- Grundzustand: $n = 1 \implies E_1 = -\frac{13{,}6\,\text{eV}}{1^2} = -13{,}6\,\text{eV}$
- Erster angeregter Zustand: $n = 2 \implies E_2 = -\frac{13{,}6\,\text{eV}}{2^2} = -\frac{13{,}6\,\text{eV}}{4} = -3{,}4\,\text{eV}$
- Zweiter angeregter Zustand: $n = 3 \implies E_3 = -\frac{13{,}6\,\text{eV}}{3^2} = -\frac{13{,}6\,\text{eV}}{9} \approx -1{,}51\,\text{eV}$
Achtung bei der Nomenklatur: Der „zweite angeregte Zustand“ entspricht der Hauptquantenzahl $n = 3$ (Grundzustand ist $n = 1$, 1. Anregung ist $n = 2$).
Analyse der Falschantworten:
- A ist der Grundzustand ($n = 1$).
- B dividiert fälschlich linear durch 2 ($13{,}6 / 2$).
- C ist der erste angeregte Zustand ($n = 2$).
- E dividiert linear durch 3 und setzt ein falsches positives Vorzeichen.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Quantisierte Energieniveaus, Bohrsche Formel*

---

### Frage 19 (chem-02-set1-q019)
**Thema:** Spektralserien des Wasserstoffs — Spektralbereiche & Niveaus

Beim Wasserstoffatom entstehen Linienspektren durch Übergänge des Elektrons zwischen diskreten Energieniveaus $n_1$ und $n_2$. Welche Aussage über die Spektralserien des Wasserstoffs ist korrekt?

- **A:** Die Balmer-Serie umfasst alle Übergänge auf das Grundniveau $n = 1$ und liegt vollständig im fernen Infrarotbereich.
- **B:** Bei Übergängen von $n = 3 \to n = 2$ wird ein Photon absorbiert, wodurch eine helle Emissionslinie entsteht.
- **C:** Die Paschen-Serie umfasst Übergänge auf das Niveau $n = 2$ und erzeugt das typische sichtbare Lichtspektrum.
- **D:** Alle Serien des Wasserstoffatoms erzeugen ausschließlich Linien im Bereich der harten Röntgenstrahlung.
- **E:** Die Lyman-Serie umfasst alle Übergänge auf das Niveau $n = 1$; aufgrund der großen Energiedifferenzen liegen diese Spektrallinien im energiereichen Ultraviolettbereich (UV).

**Richtige Antwort:** **E**

**Erklärung:**
Die Spektralserien des Wasserstoffatoms werden nach dem jeweiligen unteren Endniveau $n_1$ benannt:
1. Lyman-Serie ($n_1 = 1$, Übergänge von $n_2 \ge 2 \to 1$): Da der energetische Sprung zu $E_1 = -13{,}6\,\text{eV}$ am größten ist ($\Delta E \ge 10{,}2\,\text{eV}$), besitzen die emittierten Photonen die höchsten Frequenzen $\to$ Ultraviolett (UV).
2. Balmer-Serie ($n_1 = 2$, Übergänge von $n_2 \ge 3 \to 2$): Die Energiesprünge liegen zwischen $1{,}89\,\text{eV}$ und $3{,}40\,\text{eV} \to$ Sichtbarer Bereich (VIS) (z. B. die rote $H_\alpha$-Linie bei $656\,\text{nm}$ für $3 \to 2$).
3. Paschen-Serie ($n_1 = 3$, Übergänge von $n_2 \ge 4 \to 3$): Geringere Energiesprünge $\to$ Infrarotbereich (IR).
Analyse der Falschantworten: A vertauscht Lyman und Balmer. B behauptet fälschlich, dass beim Herabfallen ($3 \to 2$) ein Photon absorbiert statt emittiert wird. C ordnet Paschen dem Niveau $n = 2$ zu. D behauptet Röntgenstrahlung.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Linienspektren, Lyman-Serie, Balmer-Serie, Wasserstoff*

---

### Frage 20 (chem-02-set1-q020)
**Thema:** Absorption vs. Emission — Energiebilanz eines Quantensprungs

Ein Elektron in einem Wasserstoffatom springt durch Wechselwirkung mit einem Photon vom Zustand $n = 1$ ($E_1 = -13{,}6\,\text{eV}$) in den Zustand $n = 2$ ($E_2 = -3{,}4\,\text{eV}$). Welche Aussage über diesen quantenmechanischen Prozess ist korrekt?

- **A:** Das Atom emittiert ein Photon mit der Energie $17{,}0\,\text{eV}$.
- **B:** Das Atom absorbiert ein Photon mit der Energie $10{,}2\,\text{eV}$.
- **C:** Das Elektron gibt Energie an das Vakuum ab und verringert seine kinetische Energie um $3{,}4\,\text{eV}$.
- **D:** Das Atom absorbiert ein Photon mit einer kontinuierlich variablen Energie zwischen $3{,}4\,\text{eV}$ und $13{,}6\,\text{eV}$.
- **E:** Ein solcher Übergang ist nach den quantenmechanischen Auswahlregeln unmöglich, da die Hauptquantenzahl konstant bleiben muss.

**Richtige Antwort:** **B**

**Erklärung:**
1. Richtung des Übergangs: Da das Elektron von einem energetisch tieferen Niveau ($n = 1$) auf ein energetisch höheres Niveau ($n = 2$) angehoben wird, muss Energie zugeführt werden. Es handelt sich somit zwingend um eine Absorption.
2. Energieerhaltung: Die Energie des absorbierten Photons muss exakt der Energiedifferenz der beiden Quantenniveaus entsprechen (Bohrsche Frequenzbedingung):
$$\Delta E = E_2 - E_1 = -3{,}4\,\text{eV} - (-13{,}6\,\text{eV}) = 10{,}2\,\text{eV}$$
Das Photon muss folglich eine exakte Energie von $10{,}2\,\text{eV}$ besitzen.
Analyse der Falschantworten:
- A nennt fälschlicherweise eine Emission und addiert die Beträge ($13{,}6 + 3{,}4 = 17{,}0$).
- C behauptet eine Energieabgabe bei einem Anregungsprozess.
- D ignoriert die Diskretheit der Quantenübergänge.
- E verwechselt Auswahlregeln; Übergänge zwischen verschiedenen Hauptquantenzahlen sind absolut alltäglich.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Absorption, Emission, Quantensprung, Energieerhaltung*

---

### Frage 21 (chem-02-set1-q021)
**Thema:** Proportionalitätslogik — Photonenenergie & Wellenlänge

Die Wellenlänge einer monochromatischen Strahlung wird von $\lambda_1 = 800\,\text{nm}$ auf $\lambda_2 = 200\,\text{nm}$ geviertelt. Welche Auswirkung hat diese Veränderung auf die Frequenz $f$ und die Energie $E$ der einzelnen Photonen?

- **A:** Sowohl die Frequenz als auch die Photonenenergie werden geviertelt.
- **B:** Die Frequenz vervierfacht sich, während die Photonenenergie halbiert wird.
- **C:** Die Frequenz halbiert sich, während die Photonenenergie um das 16-fache ansteigt.
- **D:** Sowohl die Frequenz als auch die Photonenenergie vervierfachen sich.
- **E:** Die Frequenz bleibt konstant, während die Photonenenergie vervierfacht wird.

**Richtige Antwort:** **D**

**Erklärung:**
Die Zusammenhänge lauten:
1. $c = \lambda \cdot f \implies f = \frac{c}{\lambda} \implies f \propto \frac{1}{\lambda}$. Wird die Wellenlänge um den Faktor 4 verringert (Viertelung), muss die Frequenz um den Faktor 4 ansteigen (Vervierfachung).
2. $E = h \cdot f = \frac{h \cdot c}{\lambda} \implies E \propto f \propto \frac{1}{\lambda}$. Da die Photonenenergie $E$ streng linear von der Frequenz $f$ und umgekehrt proportional zur Wellenlänge $\lambda$ abhängt, führt die Vervierfachung der Frequenz direkt zu einer Vervierfachung der Photonenenergie.
Analyse der Falschantworten: A nimmt eine direkte Proportionalität zwischen Wellenlänge und Energie an. B, C und E verletzen die fundamentalen Zusammenhänge $c = \lambda \cdot f$ bzw. $E = h \cdot f$.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Proportionalitätslogik, Wellenlänge, Frequenz, Photonenenergie*

---

### Frage 22 (chem-02-set1-q022)
**Thema:** Schnelle Berechnung — Kopfrechentrick mit $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$

Für schnelle Berechnungen im MedAT ist das Produkt aus dem Planckschen Wirkungsquantum und der Vakuumlichtgeschwindigkeit in handlichen Einheiten extrem nützlich: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$. Welche Energie besitzt demnach ein Photon des sichtbaren Lichts mit einer Wellenlänge von $\lambda = 620\,\text{nm}$ (orangeroter Bereich)?

- **A:** $0{,}5\,\text{eV}$
- **B:** $1{,}0\,\text{eV}$
- **C:** $2{,}0\,\text{eV}$
- **D:** $3{,}1\,\text{eV}$
- **E:** $4{,}0\,\text{eV}$

**Richtige Antwort:** **C**

**Erklärung:**
Die Photonenenergie lautet:
$$E = \frac{h \cdot c}{\lambda}$$
Mit der Faustformel $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$ lässt sich die Rechnung ohne mühsame Zehnerpotenzen von Joule in Sekundenbruchteilen im Kopf durchführen:
$$E = \frac{1240\,\text{eV}\cdot\text{nm}}{620\,\text{nm}} = \frac{1240}{620}\,\text{eV} = 2{,}0\,\text{eV}$$
Da $124 = 2 \cdot 62$ ist, kürzt sich der Bruch glatt zu exakt $2{,}0\,\text{eV}$.
Analyse der Falschantworten:
- A teilt $620 / 1240 = 0{,}5$.
- B schätzt viel zu niedrig.
- D teilt $1240 / 400 \approx 3{,}1\,\text{eV}$ (entspräche violettem Licht).
- E ist doppelt so groß wie das richtige Ergebnis.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Kopfrechentrick, Photonenenergie, eV-nm*

---

### Frage 23 (chem-02-set1-q023)
**Thema:** Unschärferelation — Ortsunschärfe und Nullpunktsenergie

Warum stürzt ein Elektron in einem Atom nicht unter kontinuierlicher Abstrahlung elektromagnetischer Wellen in den positiv geladenen Atomkern, wie es die klassische Elektrodynamik zwingend für eine beschleunigte Ladung vorhersagt?

- **A:** Weil die starke Kernkraft das Elektron im Abstand von $10^{-10}\,\text{m}$ abstößt.
- **B:** Weil eine exakte Lokalisierung des Elektrons im Kern ($\Delta x \to 0$) nach der Unschärferelation zu einer gegen unendlich gehenden Impuls- und kinetischen Energieunschärfe führen würde, sodass ein quantenmechanischer Gleichgewichtszustand (Nullpunktsenergie) mit endlichem Radius resultiert.
- **C:** Weil die Gravitationskraft des Kerns bei winzigen Abständen abstoßend wirkt.
- **D:** Weil Elektronen erst dann Strahlung emittieren können, wenn sie die Lichtgeschwindigkeit überschreiten.
- **E:** Weil der Atomkern durch eine undurchdringliche Barriere aus isolierenden Neutrinos abgeschirmt wird.

**Richtige Antwort:** **B**

**Erklärung:**
Nach der klassischen Physik müsste ein Elektron, das den Kern umkreist, permanent beschleunigt werden (Zentripetalbeschleunigung) und daher wie eine winzige Antenne elektromagnetische Wellen abstrahlen. Dadurch würde es in Sekundenbruchteilen ($10^{-11}\,\text{s}$) spiralförmig in den Kern stürzen. Die Quantenmechanik verhindert diesen Kollaps fundamental über die Unschärferelation: Würde sich das Elektron exakt im Kern aufhalten, wäre seine Ortsunschärfe $\Delta x$ extrem klein (Größenordnung des Kerns $\approx 10^{-15}\,\text{m}$). Aus $\Delta p \ge \frac{h}{4\pi \Delta x}$ folgt, dass die Impulsunschärfe und damit die kinetische Nullpunktsenergie des Elektrons ($E_{\text{kin}} \approx \frac{(\Delta p)^2}{2m}$) ins Unermessliche ansteigen würde. Das Elektron würde mit enormer Wucht aus dem Kern herauskatapultiert. Das Atom minimiert seine Gesamtenergie bei einem endlichen mittleren Kernabstand von etwa $0{,}5 \cdot 10^{-10}\,\text{m}$ (Bohrscher Radius).
Analyse der Falschantworten: Die starke Kernkraft wirkt nicht auf Elektronen (Leptonen) (A ist falsch). Gravitation ist vernachlässigbar und stets anziehend (C ist falsch). D und E sind physikalisch unsinnige Scheinerklärungen.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Atomstabilität, Nullpunktsenergie*

---

### Frage 24 (chem-02-set1-q024)
**Thema:** De-Broglie-Wellenlänge — Quantitative Berechnung von Teilchen

Ein Proton besitzt eine Masse von $m_p \approx 1{,}6 \cdot 10^{-27}\,\text{kg}$ und bewegt sich mit einer Geschwindigkeit von $v = 4 \cdot 10^5\,\text{m/s}$. Wie groß ist seine De-Broglie-Wellenlänge $\lambda$? (Verwende $h \approx 6{,}4 \cdot 10^{-34}\,\text{J}\cdot\text{s}$).

- **A:** $1{,}0 \cdot 10^{-12}\,\text{m}$ ($1\,\text{pm}$)
- **B:** $1{,}0 \cdot 10^{-9}\,\text{m}$ ($1\,\text{nm}$)
- **C:** $2{,}5 \cdot 10^{-10}\,\text{m}$
- **D:** $6{,}4 \cdot 10^{-15}\,\text{m}$
- **E:** $4{,}0 \cdot 10^{-18}\,\text{m}$

**Richtige Antwort:** **A**

**Erklärung:**
Die De-Broglie-Gleichung lautet:
$$\lambda = \frac{h}{m \cdot v}$$
1. Berechnung des Impulses $p = m \cdot v$:
$$p = (1{,}6 \cdot 10^{-27}\,\text{kg}) \cdot (4 \cdot 10^5\,\text{m/s}) = 6{,}4 \cdot 10^{-22}\,\text{kg}\cdot\text{m/s}$$
2. Berechnung der Wellenlänge:
$$\lambda = \frac{6{,}4 \cdot 10^{-34}\,\text{J}\cdot\text{s}}{6{,}4 \cdot 10^{-22}\,\text{kg}\cdot\text{m/s}} = 1{,}0 \cdot 10^{-12}\,\text{m} = 1\,\text{pm}$$
Analyse der Falschantworten:
- B verrechnet sich bei den Zehnerpotenzen um den Faktor $10^3$.
- C dividiert $p$ durch $h$ oder verwendet die Masse eines Elektrons.
- D vergisst die Geschwindigkeit im Nenner.
- E addiert Exponenten fehlerhaft.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Proton, Impuls, Kopfrechnen*

---

### Frage 25 (chem-02-set1-q025)
**Thema:** Photoeffekt — Zusammenspiel aller Kernformeln & Grenzfrequenz

Ein monochromatischer Lichtstrahl mit einer Wellenlänge von $\lambda = 310\,\text{nm}$ fällt auf eine Metalloberfläche. Die materialspezifische Austrittsarbeit beträgt $W_A = 2{,}5\,\text{eV}$. Welche maximale kinetische Energie besitzen die austretenden Photoelektronen? (Nutze den Zusammenhang $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $0\,\text{eV}$ (Keine Elektronen, da $\lambda > 300\,\text{nm}$)
- **B:** $1{,}5\,\text{eV}$
- **C:** $4{,}0\,\text{eV}$
- **D:** $6{,}5\,\text{eV}$
- **E:** $2{,}5\,\text{eV}$

**Richtige Antwort:** **B**

**Erklärung:**
Dieser Aufgabentyp integriert die Wellenformel und die Einsteinsche Gleichung:
1. Photonenenergie berechnen:
$$E_{\text{Photon}} = \frac{h \cdot c}{\lambda} = \frac{1240\,\text{eV}\cdot\text{nm}}{310\,\text{nm}} = 4{,}0\,\text{eV}$$
(Da $4 \cdot 310 = 1240$ ist, ergibt sich exakt $4{,}0\,\text{eV}$).
2. Kinetische Energie über die Einstein-Gleichung bestimmen:
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A = 4{,}0\,\text{eV} - 2{,}5\,\text{eV} = 1{,}5\,\text{eV}$$
Da $E_{\text{Photon}} > W_A$ ist, werden Photoelektronen mit einer maximalen kinetischen Energie von $1{,}5\,\text{eV}$ freigesetzt.
Analyse der Falschantworten:
- A unterliegt der Fehlannahme, dass bei über $300\,\text{nm}$ kein Photoeffekt möglich sei.
- C gibt lediglich die Photonenenergie an und vergisst den Abzug der Austrittsarbeit.
- D addiert fälschlicherweise die Photonenenergie und die Austrittsarbeit ($4{,}0 + 2{,}5 = 6{,}5\,\text{eV}$).
- E nennt die Austrittsarbeit selbst.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Einsteinsche Gleichung, Grenzfrequenz, Kopfrechenformat*

---


## 📚 Set 2: Core Practice / Understand & Apply (Unschärferelation, Lichtwellen, Photoeffekt, De-Broglie & atomare Quantensprünge)

### Frage 26 (chem-02-set2-q026)
**Thema:** Unschärferelation — Quantitative Abschätzung der Geschwindigkeitsunschärfe

Ein Elektron ($m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$) wird innerhalb eines typischen Atomdurchmessers lokalisiert, sodass seine Ortsunschärfe $\Delta x = 10^{-10}\,\text{m}$ ($0{,}1\,\text{nm}$) beträgt. Welcher Mindestwert resultiert daraus näherungsweise für die Geschwindigkeitsunschärfe $\Delta v$ des Elektrons?
(Hinweis: Nutze die gerundete Hilfskonstante $\frac{h}{4\pi \cdot m_e} \approx 6 \cdot 10^{-5}\,\text{m}^2/\text{s}$).

- **A:** $\Delta v \ge 6 \cdot 10^{-15}\,\text{m/s}$
- **B:** $\Delta v \ge 6 \cdot 10^{-5}\,\text{m/s}$
- **C:** $\Delta v \ge 6 \cdot 10^5\,\text{m/s}$
- **D:** $\Delta v \ge 3 \cdot 10^8\,\text{m/s}$
- **E:** $\Delta v \ge 1{,}5 \cdot 10^{14}\,\text{m/s}$

**Richtige Antwort:** **C**

**Erklärung:**
Aus der Heisenbergschen Unschärferelation folgt:
$$\Delta x \cdot \Delta p \ge \frac{h}{4\pi} \iff \Delta x \cdot m_e \cdot \Delta v \ge \frac{h}{4\pi} \iff \Delta v \ge \frac{h}{4\pi \cdot m_e \cdot \Delta x}$$
Mit der angegebenen Hilfskonstante $\frac{h}{4\pi \cdot m_e} \approx 6 \cdot 10^{-5}\,\text{m}^2/\text{s}$ und $\Delta x = 10^{-10}\,\text{m}$ ergibt sich:
$$\Delta v \ge \frac{6 \cdot 10^{-5}\,\text{m}^2/\text{s}}{10^{-10}\,\text{m}} = 6 \cdot 10^{-5 - (-10)}\,\text{m/s} = 6 \cdot 10^5\,\text{m/s}$$
Diese enorme Unschärfe (ca. $600\,\text{km/s}$, rund $0{,}2\,\%$ der Lichtgeschwindigkeit) belegt quantitativ, warum das Elektron im Atom keine klassische ruhende oder fest umrissene Bahn einnehmen kann.
Analyse der Falschantworten:
- A multipliziert die Exponenten fälschlich ($-5 + (-10) = -15$).
- B vergisst die Division durch $\Delta x$.
- D setzt pauschal die Vakuumlichtgeschwindigkeit ein.
- E dividiert fälschlich $\Delta x$ durch die Hilfskonstante.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Geschwindigkeitsunschärfe, Elektron*

---

### Frage 27 (chem-02-set2-q027)
**Thema:** Unschärferelation — Vergleich zweier Teilchen (Elektron vs. Proton)

Ein Proton ist rund 1836-mal schwerer als ein Elektron ($m_p \approx 1836 \cdot m_e$). Angenommen, ein Elektron und ein Proton werden mit der exakt gleichen Ortsunschärfe $\Delta x$ in einer quantenmechanischen Falle festgehalten. Wie verhält sich die minimale Geschwindigkeitsunschärfe des Protons ($\Delta v_p$) zu jener des Elektrons ($\Delta v_e$)?

- **A:** $\Delta v_p \approx 1836 \cdot \Delta v_e$
- **B:** $\Delta v_p \approx \Delta v_e$
- **C:** $\Delta v_p \approx \frac{\Delta v_e}{\sqrt{1836}}$
- **D:** $\Delta v_p \approx \frac{\Delta v_e}{1836}$
- **E:** $\Delta v_p \approx 1836^2 \cdot \Delta v_e$

**Richtige Antwort:** **D**

**Erklärung:**
Für die minimale Geschwindigkeitsunschärfe gilt nach Heisenberg:
$$\Delta v_{\text{min}} = \frac{h}{4\pi \cdot m \cdot \Delta x}$$
Da $\Delta x$ für beide Teilchen identisch ist, gilt:
$$\Delta v \propto \frac{1}{m}$$
Setzt man die Massen ins Verhältnis:
$$\frac{\Delta v_p}{\Delta v_e} = \frac{m_e}{m_p} = \frac{m_e}{1836 \cdot m_e} = \frac{1}{1836} \implies \Delta v_p \approx \frac{\Delta v_e}{1836}$$
Das Proton besitzt bei gleicher Ortsunschärfe eine um den Faktor 1836 kleinere Geschwindigkeitsunschärfe als das leichtere Elektron. Seine Impulsunschärfe $\Delta p = m \cdot \Delta v$ ist hingegen bei beiden Teilchen identisch!
Analyse der Falschantworten:
- A nimmt eine direkte Proportionalität zur Masse an (Falle: Masse steht im Nenner).
- B verwechselt Geschwindigkeitsunschärfe $\Delta v$ mit der Impulsunschärfe $\Delta p$.
- C nimmt fälschlicherweise eine Wurzelabhängigkeit an (wie bei der De-Broglie-Wellenlänge über die kinetische Energie).
- E quadriert den Massenfaktor.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Masseabhängigkeit, Proton, Elektron*

---

### Frage 28 (chem-02-set2-q028)
**Thema:** Wellennatur des Lichts — Frequenz und Photonenenergie im VIS-Bereich

Gelboranges Licht besitzt im Vakuum eine Wellenlänge von $\lambda = 600\,\text{nm}$. Welche Frequenz $f$ und welche Energie $E$ (in Joule) besitzt ein einzelnes Photon dieser Strahlung?
(Konstanten: $c = 3 \cdot 10^8\,\text{m/s}$, $h = 6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s}$).

- **A:** $f = 5 \cdot 10^{14}\,\text{Hz}$ und $E = 3{,}3 \cdot 10^{-19}\,\text{J}$
- **B:** $f = 2 \cdot 10^{14}\,\text{Hz}$ und $E = 1{,}32 \cdot 10^{-19}\,\text{J}$
- **C:** $f = 5 \cdot 10^{14}\,\text{Hz}$ und $E = 6{,}6 \cdot 10^{-19}\,\text{J}$
- **D:** $f = 5 \cdot 10^5\,\text{Hz}$ und $E = 3{,}3 \cdot 10^{-28}\,\text{J}$
- **E:** $f = 1{,}8 \cdot 10^{15}\,\text{Hz}$ und $E = 1{,}19 \cdot 10^{-18}\,\text{J}$

**Richtige Antwort:** **A**

**Erklärung:**
1. Frequenz berechnen:
$$c = \lambda \cdot f \implies f = \frac{c}{\lambda} = \frac{3 \cdot 10^8\,\text{m/s}}{600 \cdot 10^{-9}\,\text{m}} = \frac{3 \cdot 10^8}{6 \cdot 10^{-7}\,\text{m}} = 0{,}5 \cdot 10^{15}\,\text{Hz} = 5 \cdot 10^{14}\,\text{Hz}$$
2. Photonenenergie berechnen:
$$E = h \cdot f = (6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s}) \cdot (5 \cdot 10^{14}\,\text{s}^{-1}) = 33 \cdot 10^{-20}\,\text{J} = 3{,}3 \cdot 10^{-19}\,\text{J}$$
Analyse der Falschantworten:
- B verrechnet sich bei $3 / 6$ zu $0{,}2$.
- C verdoppelt die Energie fälschlicherweise ($6{,}6$ statt $3{,}3$).
- D verwechselt Nanometer ($10^{-9}\,\text{m}$) mit Millimetern ($10^{-3}\,\text{m}$).
- E multipliziert $c$ mit $\lambda$ statt zu dividieren.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Wellenlänge, Frequenz, Photonenenergie*

---

### Frage 29 (chem-02-set2-q029)
**Thema:** Elektromagnetisches Spektrum — Quantitativer Vergleich (Röntgen vs. Mikrowelle)

Ein medizinisches Röntgengerät arbeitet mit Photonen der Wellenlänge $\lambda_{\text{Rö}} = 0{,}1\,\text{nm}$. Ein Mikrowellengerät nutzt elektromagnetische Strahlung mit $\lambda_{\text{Mikro}} = 10\,\text{cm}$. Um welchen Faktor ist die Energie eines Röntgenphotons größer als die eines Mikrowellenphotons?

- **A:** $10^3$ (1.000-fach)
- **B:** $10^6$ (1.000.000-fach)
- **C:** $10^{12}$ (1.000.000.000.000-fach)
- **D:** $10^9$ (1.000.000.000-fach)
- **E:** $10^{-9}$ (ein Milliardstel)

**Richtige Antwort:** **D**

**Erklärung:**
Da für die Photonenenergie $E = \frac{h \cdot c}{\lambda}$ gilt, verhält sich die Energie zweier Photonen streng umgekehrt proportional zu ihren Wellenlängen:
$$\frac{E_{\text{Rö}}}{E_{\text{Mikro}}} = \frac{\lambda_{\text{Mikro}}}{\lambda_{\text{Rö}}}$$
Einheiten angleichen:
- $\lambda_{\text{Mikro}} = 10\,\text{cm} = 0{,}1\,\text{m} = 10^{-1}\,\text{m}$
- $\lambda_{\text{Rö}} = 0{,}1\,\text{nm} = 0{,}1 \cdot 10^{-9}\,\text{m} = 10^{-10}\,\text{m}$
Quotient bilden:
$$\frac{E_{\text{Rö}}}{E_{\text{Mikro}}} = \frac{10^{-1}\,\text{m}}{10^{-10}\,\text{m}} = 10^{-1 - (-10)} = 10^9$$
Ein Röntgenphoton trägt somit eine Milliarde mal ($10^9$) mehr Energie als ein Mikrowellenphoton. Das verdeutlicht, warum Röntgenstrahlung chemische Bindungen ionisieren und DNA schädigen kann, während Mikrowellen lediglich molekulare Rotationen anregen.
Analyse der Falschantworten:
- A und B verrechnen sich bei der Umrechnung von $\text{cm}$ in $\text{m}$ bzw. $\text{nm}$ in $\text{m}$.
- C addiert Exponenten statt sie zu subtrahieren.
- E invertiert das Verhältnis.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, EM-Spektrum, Röntgenstrahlung, Mikrowellen, Zehnerpotenzen*

---

### Frage 30 (chem-02-set2-q030)
**Thema:** Licht-Materie-Wechselwirkung — Farbigkeit organischer Moleküle & Orbitalübergänge

Organische Farbstoffe wie $\beta$-Carotin (orange) oder Azofarbstoffe absorbieren Strahlung im sichtbaren Bereich (VIS). Welcher quantenmechanische Prozess auf molekularer Ebene ist für diese selektive Lichtabsorption verantwortlich?

- **A:** Die Schwingungsanregung polarer $\text{C--H}$-Einfachbindungen
- **B:** Die Anregung von $\pi$-Elektronen aus dem höchsten besetzten Molekülorbital (HOMO) in das niedrigste unbesetzte Molekülorbital (LUMO) entlang eines ausgedehnten konjugierten Doppelbindungssystems
- **C:** Das Herausschlagen von Elektronen aus der inneren K-Schale des Kohlenstoffs (Photoionisation)
- **D:** Die Umklappung des Kernspins von Wasserstoffatomen im Erdmagnetfeld
- **E:** Die dauerhafte thermische Spaltung kovalenter Bindungen unter Bildung freier Radikale

**Richtige Antwort:** **B**

**Erklärung:**
Farbigkeit entsteht, wenn ein Molekül Photonen im VIS-Bereich ($380 - 780\,\text{nm}$, entsprechend Quantenenergien von etwa $1{,}6 - 3{,}2\,\text{eV}$) absorbiert; das menschliche Auge nimmt daraufhin die Komplementärfarbe wahr.
In isolierten Molekülen erfordern elektronische Übergänge ($\sigma \to \sigma^*$) energiereiche UV-Strahlung ($> 6\,\text{eV}$). Liegt jedoch ein System konjugierter Doppelbindungen vor (alternierende Doppel- und Einfachbindungen), delokalisieren die $\pi$-Elektronen über das gesamte Gerüst. Mit zunehmender Konjugationslänge sinkt der energetische Abstand zwischen dem höchsten besetzten Molekülorbital (HOMO) und dem niedrigsten unbesetzten Molekülorbital (LUMO). Bei hinreichend vielen Doppelbindungen (z. B. 11 konjugierte Doppelbindungen bei $\beta$-Carotin) rückt dieser HOMO-LUMO-Abstand exakt in den Bereich des sichtbaren Lichts (blaues Licht wird absorbiert, orange transmittiert).
Analyse der Falschantworten: Bindungsschwingungen liegen im IR-Bereich (A). Photoionisation von K-Schalen erfordert Röntgenstrahlung (C). Kernspins werden durch energiearme Radiowellen im NMR-Bereich angeregt (D). Lichtabsorption ist zunächst ein reversibler photophysikalischer Anregungsprozess und führt nicht zwingend zur Bindungsspaltung (E).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht-Materie-Wechselwirkung, Konjugierte Systeme, HOMO-LUMO, Farbigkeit*

---

### Frage 31 (chem-02-set2-q031)
**Thema:** Photoeffekt — Grenzwellenlänge & Spektralbereich

Die Austrittsarbeit einer Caesium-Photokathode beträgt $W_A = 2{,}48\,\text{eV}$. Welche maximale Grenzwellenlänge $\lambda_0$ darf einfallendes Licht besitzen, um an diesem Material gerade noch Photoelektronen auslösen zu können?
(Verwende den Zusammenhang $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $\lambda_0 = 248\,\text{nm}$ (UV-C)
- **B:** $\lambda_0 = 310\,\text{nm}$ (UV-A)
- **C:** $\lambda_0 = 500\,\text{nm}$ (Blaugrünes sichtbares Licht)
- **D:** $\lambda_0 = 620\,\text{nm}$ (Rotes Licht)
- **E:** $\lambda_0 = 1240\,\text{nm}$ (Infrarot)

**Richtige Antwort:** **C**

**Erklärung:**
Photoelektronen werden genau dann freigesetzt, wenn die Energie der einfallenden Photonen mindestens so groß ist wie die Austrittsarbeit:
$$E_{\text{Photon}} \ge W_A \iff \frac{h \cdot c}{\lambda} \ge W_A \iff \lambda \le \frac{h \cdot c}{W_A} = \lambda_0$$
Die Grenzwellenlänge $\lambda_0$ ist die maximale Wellenlänge, bei der der Photoeffekt noch stattfindet:
$$\lambda_0 = \frac{1240\,\text{eV}\cdot\text{nm}}{2{,}48\,\text{eV}}$$
Kopfrechnung:
$$\frac{1240}{2{,}48} = \frac{124000}{248} = \frac{1000 \cdot 124}{2 \cdot 124} = \frac{1000}{2} = 500\,\text{nm}$$
Licht mit Wellenlängen $\lambda \le 500\,\text{nm}$ (violettes, blaues und UV-Licht) löst Elektronen aus. Strahlung mit $\lambda > 500\,\text{nm}$ (gelbes, rotes Licht, Infrarot) ist wirkungslos.
Analyse der Falschantworten:
- A setzt den Zahlenwert von $W_A$ direkt als Wellenlänge an.
- B teilt $1240 / 4$.
- D teilt $1240 / 2$.
- E setzt $W_A = 1\,\text{eV}$ an.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Grenzwellenlänge, Caesium, Kopfrechentrick*

---

### Frage 32 (chem-02-set2-q032)
**Thema:** Photoeffekt — Gegenfeldmethode & Gegenspannung

In einem Photoeffekt-Experiment treffen Photonen mit einer Energie von $E_{\text{Photon}} = 4{,}0\,\text{eV}$ auf eine Metallplatte mit der Austrittsarbeit $W_A = 2{,}5\,\text{eV}$. Welche Gegenspannung $U_0$ (Bremsspannung) muss an die Photozelle angelegt werden, um den Photostrom exakt auf null zu reduzieren?

- **A:** $U_0 = 1{,}5\,\text{V}$
- **B:** $U_0 = 2{,}5\,\text{V}$
- **C:** $U_0 = 4{,}0\,\text{V}$
- **D:** $U_0 = 6{,}5\,\text{V}$
- **E:** $U_0 = 0{,}625\,\text{V}$

**Richtige Antwort:** **A**

**Erklärung:**
Bei der Gegenfeldmethode wird zwischen Emitter und Kollektor eine regulierbare Gegenspannung angelegt. Die schnellsten Elektronen mit der maximalen kinetischen Energie $E_{\text{kin,max}}$ erreichen die Gegenelektrode gerade dann nicht mehr, wenn die elektrostatische Bremsarbeit $W_{\text{Brems}} = e \cdot U_0$ gleich ihrer kinetischen Energie ist:
$$E_{\text{kin,max}} = e \cdot U_0$$
Aus der Einstein-Gleichung folgt:
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A = 4{,}0\,\text{eV} - 2{,}5\,\text{eV} = 1{,}5\,\text{eV}$$
Gleichsetzen:
$$e \cdot U_0 = 1{,}5\,\text{eV} \implies U_0 = 1{,}5\,\text{V}$$
Die Einheit Elektronenvolt ($\text{eV}$) kürzt sich durch die Elementarladung $e$ direkt zur Spannung in Volt ($\text{V}$) heraus.
Analyse der Falschantworten:
- B nennt die zur Austrittsarbeit äquivalente Spannung.
- C nennt die Photonenenergie als Spannung.
- D addiert fälschlich Photonenenergie und Austrittsarbeit ($4{,}0 + 2{,}5 = 6{,}5\,\text{V}$).
- E bildet den Quotienten $2{,}5 / 4{,}0$.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Gegenfeldmethode, Bremsspannung, Elektronenvolt*

---

### Frage 33 (chem-02-set2-q033)
**Thema:** Photoeffekt — Nichtlineare Skalierung der kinetischen Energie

Eine Metallplatte mit der Austrittsarbeit $W_A > 0$ wird mit monochromatischem Licht der Frequenz $f_1$ bestrahlt, wobei $h \cdot f_1 > W_A$ gilt. Die austretenden Elektronen besitzen die maximale kinetische Energie $E_{\text{kin,1}}$. Nun wird die Frequenz des eingestrahlten Lichts verdoppelt ($f_2 = 2 \cdot f_1$). Welche Aussage über die neue maximale kinetische Energie $E_{\text{kin,2}}$ ist mathematisch und physikalisch zutreffend?

- **A:** $E_{\text{kin,2}} = 2 \cdot E_{\text{kin,1}}$ (Die kinetische Energie verdoppelt sich exakt)
- **B:** $E_{\text{kin,2}} = E_{\text{kin,1}}$ (Die kinetische Energie bleibt konstant)
- **C:** $E_{\text{kin,2}} < 2 \cdot E_{\text{kin,1}}$ (Die kinetische Energie steigt, erreicht aber nicht das Doppelte)
- **D:** $E_{\text{kin,2}} = 4 \cdot E_{\text{kin,1}}$ (Die kinetische Energie vervierfacht sich)
- **E:** $E_{\text{kin,2}} > 2 \cdot E_{\text{kin,1}}$ (Die kinetische Energie steigt auf mehr als das Doppelte an)

**Richtige Antwort:** **E**

**Erklärung:**
Dies ist eine klassische MedAT-Denkfalle, die lineares Proportionalitätsdenken entlarvt:
1. Zustand 1:
$$E_{\text{kin,1}} = h \cdot f_1 - W_A \implies h \cdot f_1 = E_{\text{kin,1}} + W_A$$
2. Zustand 2 mit $f_2 = 2 \cdot f_1$:
$$E_{\text{kin,2}} = h \cdot (2 \cdot f_1) - W_A = 2 \cdot (h \cdot f_1) - W_A$$
Setzt man $h \cdot f_1$ aus Zustand 1 ein:
$$E_{\text{kin,2}} = 2 \cdot (E_{\text{kin,1}} + W_A) - W_A = 2 \cdot E_{\text{kin,1}} + 2 \cdot W_A - W_A = 2 \cdot E_{\text{kin,1}} + W_A$$
Da die Austrittsarbeit $W_A$ eine positive reelle Zahl ist ($W_A > 0$), gilt zwingend:
$$E_{\text{kin,2}} > 2 \cdot E_{\text{kin,1}}$$
Zahlenbeispiel zur Veranschaulichung: Sei $W_A = 2\,\text{eV}$ und $h f_1 = 3\,\text{eV} \implies E_{\text{kin,1}} = 3 - 2 = 1\,\text{eV}$.
Bei Frequenzverdopplung:
$h f_2 = 6\,\text{eV} \implies E_{\text{kin,2}} = 6 - 2 = 4\,\text{eV}$.
Die kinetische Energie vervierfacht sich hier sogar ($4 > 2 \cdot 1$).
Analyse der Falschantworten: A vernachlässigt den konstanten Subtraktionswert $W_A$. B, C und D widersprechen der exakten algebraischen Ableitung.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Einsteinsche Gleichung, Proportionalitätsfalle, Algebra*

---

### Frage 34 (chem-02-set2-q034)
**Thema:** De-Broglie-Wellenlänge — Massenvergleich bei gleicher Geschwindigkeit

Ein Alphateilchen ($^4_2\text{He}^{2+}$-Kern) besitzt näherungsweise die vierfache Masse eines Protons ($m_\alpha \approx 4 \cdot m_p$). Beide Teilchen bewegen sich im Vakuum mit der exakt gleichen nicht-relativistischen Geschwindigkeit $v$. Wie verhält sich die De-Broglie-Wellenlänge des Alphateilchens ($\lambda_\alpha$) zu der des Protons ($\lambda_p$)?

- **A:** $\lambda_\alpha = 4 \cdot \lambda_p$
- **B:** $\lambda_\alpha = 2 \cdot \lambda_p$
- **C:** $\lambda_\alpha = \lambda_p$
- **D:** $\lambda_\alpha = \frac{1}{4} \cdot \lambda_p$
- **E:** $\lambda_\alpha = \frac{1}{2} \cdot \lambda_p$

**Richtige Antwort:** **D**

**Erklärung:**
Nach Louis de Broglie gilt für die Wellenlänge eines Materieteilchens:
$$\lambda = \frac{h}{p} = \frac{h}{m \cdot v}$$
Bei identischer Geschwindigkeit $v$ gilt:
$$\lambda \propto \frac{1}{m}$$
Das Verhältnis der Wellenlängen beträgt daher:
$$\frac{\lambda_\alpha}{\lambda_p} = \frac{m_p}{m_\alpha} = \frac{m_p}{4 \cdot m_p} = \frac{1}{4} \implies \lambda_\alpha = \frac{1}{4} \cdot \lambda_p$$
Das schwerere Alphateilchen besitzt bei gleicher Geschwindigkeit einen viermal so großen Impuls ($p_\alpha = 4 \cdot p_p$) und folglich eine viermal kürzere De-Broglie-Wellenlänge.
Analyse der Falschantworten:
- A nimmt fälschlicherweise an, dass die Wellenlänge mit der Masse zunimmt.
- B und E wenden fälschlich eine Quadratwurzel auf den Massenfaktor an (was nur bei gleicher kinetischer Energie gälte, nicht bei gleicher Geschwindigkeit!).
- C ignoriert die Masseabhängigkeit.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Alphateilchen, Proton, Impuls*

---

### Frage 35 (chem-02-set2-q035)
**Thema:** De-Broglie-Wellenlänge — Verknüpfung mit kinetischer Energie

In einem Elektronenmikroskop werden Elektronen der Masse $m_e$ durch eine elektrische Spannung beschleunigt. Wenn die kinetische Energie eines Elektrons durch Erhöhung der Beschleunigungsspannung vervierfacht wird ($E_{\text{kin,2}} = 4 \cdot E_{\text{kin,1}}$), wie ändert sich dadurch seine De-Broglie-Wellenlänge $\lambda$?

- **A:** $\lambda$ vervierfacht sich ($\lambda_2 = 4 \cdot \lambda_1$)
- **B:** $\lambda$ verdoppelt sich ($\lambda_2 = 2 \cdot \lambda_1$)
- **C:** $\lambda$ viertelt sich ($\lambda_2 = \frac{1}{4} \cdot \lambda_1$)
- **D:** $\lambda$ halbiert sich ($\lambda_2 = \frac{1}{2} \cdot \lambda_1$)
- **E:** $\lambda$ bleibt exakt gleich

**Richtige Antwort:** **D**

**Erklärung:**
Die kinetische Energie ist mit dem Impuls verknüpft über:
$$E_{\text{kin}} = \frac{p^2}{2m} \iff p = \sqrt{2m \cdot E_{\text{kin}}}$$
Setzt man diesen Ausdruck in die De-Broglie-Gleichung ein, erhält man:
$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m \cdot E_{\text{kin}}}} \implies \lambda \propto \frac{1}{\sqrt{E_{\text{kin}}}}$$
Wird die kinetische Energie vervierfacht ($E_{\text{kin,2}} = 4 \cdot E_{\text{kin,1}}$):
$$\lambda_2 = \frac{h}{\sqrt{2m \cdot 4 \cdot E_{\text{kin,1}}}} = \frac{h}{2 \cdot \sqrt{2m \cdot E_{\text{kin,1}}}} = \frac{1}{2} \cdot \lambda_1$$
Die De-Broglie-Wellenlänge halbiert sich.
Analyse der Falschantworten:
- A und B nehmen an, dass $\lambda$ mit der Energie steigt.
- C vergisst die Quadratwurzel aus der kinetischen Energie und nimmt fälschlicherweise $\lambda \propto 1/E_{\text{kin}}$ an.
- E nimmt Unabhängigkeit von der Energie an.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Kinetische Energie, Elektronenmikroskop, Wurzelbeziehung*

---

### Frage 36 (chem-02-set2-q036)
**Thema:** Wasserstoffatom — Balmer-Serie & H_alpha-Linie

Im Emissionsspektrum von atomarem Wasserstoff entsteht die prominente rote $H_\alpha$-Linie durch den Übergang eines Elektrons vom Niveau $n = 3$ auf das Niveau $n = 2$. Gegeben sind die Energiewerte: $E_2 = -3{,}40\,\text{eV}$ und $E_3 = -1{,}51\,\text{eV}$. Welche Wellenlänge $\lambda$ besitzt das emittierte Photon?
(Verwende $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** ca. $250\,\text{nm}$
- **B:** ca. $486\,\text{nm}$
- **C:** ca. $656\,\text{nm}$
- **D:** ca. $820\,\text{nm}$
- **E:** ca. $1240\,\text{nm}$

**Richtige Antwort:** **C**

**Erklärung:**
1. Energiedifferenz des Quantensprungs berechnen:
$$\Delta E = E_3 - E_2 = -1{,}51\,\text{eV} - (-3{,}40\,\text{eV}) = -1{,}51\,\text{eV} + 3{,}40\,\text{eV} = 1{,}89\,\text{eV}$$
2. Wellenlänge über die Rydberg-Einstein-Beziehung berechnen:
$$\lambda = \frac{h \cdot c}{\Delta E} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{1{,}89\,\text{eV}}$$
Kopfrechen-Abschätzung:
Da $1{,}89 \approx 1{,}9$ ist:
$$\frac{1240}{1{,}9} \approx \frac{1240}{2} \cdot 1{,}05 \approx 620 \cdot 1{,}05 \approx 656\,\text{nm}$$
$656\,\text{nm}$ liegt im roten Bereich des sichtbaren Lichts und ist die weltbekannte $H_\alpha$-Linie der Balmer-Serie.
Analyse der Falschantworten:
- A entspricht UV-Strahlung (zu hohe Energie).
- B ist $486\,\text{nm}$ (die blaugrüne $H_\beta$-Linie für den Übergang $4 \to 2$ mit $\Delta E = 2{,}55\,\text{eV}$).
- D liegt im Infrarotbereich (Paschen-Serie).
- E entspräche einer Energie von exakt $1{,}0\,\text{eV}$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Balmer-Serie, H-alpha, Spektrallinien*

---

### Frage 37 (chem-02-set2-q037)
**Thema:** Ionisierungsenergie des Wasserstoffs & Seriengrenze

Um ein Wasserstoffatom aus seinem Grundzustand ($n = 1$, $E_1 = -13{,}6\,\text{eV}$) vollständig zu ionisieren, muss das Elektron ins Unendliche ($n \to \infty$, $E_\infty = 0\,\text{eV}$) befördert werden. Welche maximale Grenzwellenlänge $\lambda_{\text{Lyman,max}}$ (Seriengrenze der Lyman-Serie) vermag diese Ionisation im Grundzustand durch einen Ein-Photonen-Prozess direkt zu bewirken?
(Verwende $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** ca. $91\,\text{nm}$ (Fernes Ultraviolett)
- **B:** ca. $365\,\text{nm}$ (UV-A)
- **C:** ca. $500\,\text{nm}$ (Sichtbares Licht)
- **D:** ca. $820\,\text{nm}$ (Infrarot)
- **E:** ca. $0{,}01\,\text{nm}$ (Gammastrahlung)

**Richtige Antwort:** **A**

**Erklärung:**
Die Ionisierungsenergie aus dem Grundzustand beträgt:
$$\Delta E_{\text{Ion}} = E_\infty - E_1 = 0\,\text{eV} - (-13{,}6\,\text{eV}) = 13{,}6\,\text{eV}$$
Die maximal zulässige Wellenlänge für diesen Prozess (Grenzwellenlänge der Lyman-Serie) ist:
$$\lambda_{\text{Grenz}} = \frac{h \cdot c}{\Delta E_{\text{Ion}}} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{13{,}6\,\text{eV}}$$
Kopfrechnung:
$13{,}6 \cdot 100 = 1360$, $13{,}6 \cdot 90 = 1224$.
Folglich liegt der Wert knapp über 90, exakt bei rund $91{,}2\,\text{nm}$. Dies liegt tief im energiereichen Vakuum-Ultraviolettbereich (VUV). Photonen mit $\lambda \le 91{,}2\,\text{nm}$ können ein H-Atom aus dem Grundzustand ionisieren; der Energieüberschuss geht als kinetische Energie an das freie Elektron über.
Analyse der Falschantworten:
- B ($365\,\text{nm}$) ist die Seriengrenze der Balmer-Serie ($n = 2$, $\Delta E = 3{,}4\,\text{eV}$).
- C liegt im sichtbaren Licht (viel zu energiearm).
- D ($820\,\text{nm}$) ist die Seriengrenze der Paschen-Serie ($n = 3$, $\Delta E = 1{,}51\,\text{eV}$).
- E ist harte Gammastrahlung.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Ionisierungsenergie, Lyman-Kante, Seriengrenze*

---

### Frage 38 (chem-02-set2-q038)
**Thema:** Quantenmechanisches Orbitalmodell — Aufenthaltswahrscheinlichkeitsdichte

In der Quantenmechanik wird der Zustand eines Elektrons im Wasserstoffatom durch die Schrödinger-Wellenfunktion $\psi(r, \theta, \phi)$ beschrieben. Welche physikalische Bedeutung kommt dem mathematischen Ausdruck $|\psi|^2$ bzw. der radialen Verteilungsfunktion $4\pi r^2 |\psi|^2$ zu?

- **A:** $|\psi|^2$ gibt die elektrostatische Ladung des Atomkerns am Ort $r$ an.
- **B:** $|\psi|^2$ ist die dreidimensionale räumliche Wahrscheinlichkeitsdichte; für das kugelsymmetrische $1s$-Orbital besitzt die radiale Wahrscheinlichkeit $4\pi r^2 |\psi|^2$, das Elektron in einer Kugelschale im Abstand $r$ zu finden, ihr Maximum exakt beim Bohrschen Radius $a_0$.
- **C:** $|\psi|^2$ ist die exakte Umlaufgeschwindigkeit des Elektrons in Metern pro Sekunde.
- **D:** $|\psi|^2$ beschreibt die De-Broglie-Wellenlänge des Atomkerns.
- **E:** Aus $|\psi|^2$ lässt sich der exakte Zeitpunkt berechnen, an dem das Elektron mit dem Proton kollidiert.

**Richtige Antwort:** **B**

**Erklärung:**
Nach Max Born (1926) besitzt die quantenmechanische Wellenfunktion $\psi$ selbst keine direkte materielle Realität, aber ihr Betragsquadrat $|\psi|^2$ ist die räumliche Aufenthaltswahrscheinlichkeitsdichte ($dP = |\psi|^2 dV$):
1. Für das $1s$-Orbital ist die reine Dichte $|\psi|^2$ direkt am Kern ($r = 0$) maximal und fällt exponentiell nach außen ab.
2. Fragt man jedoch nach der Wahrscheinlichkeit, das Elektron in einer Kugelschale mit der Dicke $dr$ im Abstand $r$ anzutreffen, muss man $|\psi|^2$ mit dem Kugelvolumenelement $4\pi r^2 dr$ multiplizieren.
3. Da $4\pi r^2$ bei $r = 0$ verschwindet und mit $r^2$ wächst, während $|\psi|^2$ abfällt, besitzt das Produkt $P(r) = 4\pi r^2 |\psi|^2$ ein Maximum. Dieses liegt beim Wasserstoff-Grundzustand exakt beim klassischen Bohrschen Radius $a_0 \approx 0{,}053\,\text{nm}$ ($53\,\text{pm}$).
Analyse der Falschantworten: A, C, D und E sind fundamentale Fehlinterpretationen der Quantenmechanik; Ort und Impuls sind nicht deterministisch vorgegeben (E ist falsch).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Schrödinger-Gleichung, Wellenfunktion, Bornsche Wahrscheinlichkeitsinterpretation, Bohr-Radius*

---

### Frage 39 (chem-02-set2-q039)
**Thema:** Licht-Materie-Wechselwirkung — Auswahlregel der Infrarotspektroskopie

Warum sind die Hauptbestandteile der Erdatmosphäre, molekularer Stickstoff ($\text{N}_2$) und molekularer Sauerstoff ($\text{O}_2$), im Infrarotbereich transparent (keine Treibhausgase), während Kohlenstoffdioxid ($\text{CO}_2$) und Wasserdampf ($\text{H}_2\text{O}$) stark Infrarotstrahlung absorbieren?

- **A:** Weil $\text{N}_2$ und $\text{O}_2$ keine chemischen Bindungen besitzen, die schwingen könnten.
- **B:** Weil die Masse von $\text{N}_2$ exakt der Masse des einfallenden Photons entspricht.
- **C:** Weil $\text{N}_2$ und $\text{O}_2$ ausschließlich bei Temperaturen unterhalb von $-100\ ^\circ\text{C}$ existieren.
- **D:** Weil $\text{CO}_2$ durch Infrarotstrahlung ionisiert wird, während $\text{N}_2$ unzerstörbar ist.
- **E:** Weil eine Molekülschwingung nur dann IR-Strahlung absorbieren kann, wenn sich während der Schwingungsbewegung das elektrische Dipolmoment des Moleküls ändert ($\frac{d\mu}{dt} \neq 0$).

**Richtige Antwort:** **E**

**Erklärung:**
Die grundlegende Auswahlregel der Infrarot-(IR)-Spektroskopie verlangt, dass das elektrische Wechselfeld der Lichtwelle mit dem Molekül wechselwirken muss. Dies ist nur möglich, wenn die Schwingung mit einer periodischen Änderung des elektrischen Dipolmoments $\mu$ einhergeht:
- Homonukleare zweiatomige Moleküle wie $\text{N}\equiv\text{N}$ und $\text{O}=\text{O}$ besitzen kein permanentes Dipolmoment. Bei der Schwingung entlang der Bindungsachse bleibt das Dipolmoment strikt null ($\Delta \mu = 0$). Sie sind daher IR-inaktiv.
- $\text{CO}_2$ ist zwar linear und besitzt im Grundzustand kein permanentes Dipolmoment, jedoch führen die asymmetrische Streckschwingung und die Biegeschwingungen zu einer periodischen Verschiebung des Ladungsschwerpunkts ($\Delta \mu \neq 0$) $\to$ stark IR-aktiv (Treibhausgas).
- $\text{H}_2\text{O}$ ist gewinkelt, besitzt ein permanentes Dipolmoment und alle drei Grundschwingungen sind stark IR-aktiv.
Analyse der Falschantworten: $\text{N}_2$ und $\text{O}_2$ besitzen sehr starke kovalente Bindungen (A ist falsch). B ist physikalisch unmöglich (Photonen haben keine Ruhemasse). C ist absurd. IR-Strahlung reicht bei weitem nicht zur Ionisation aus (D ist falsch).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Infrarotspektroskopie, Dipolmoment, Auswahlsregeln, Treibhauseffekt*

---

### Frage 40 (chem-02-set2-q040)
**Thema:** Photoeffekt — Photostrom-Spannungs-Kennlinie (I-U-Diagramm)

In einem Photoeffekt-Experiment wird die Stromstärke $I$ als Funktion der angelegten Spannung $U$ gemessen. Welche grafische Veränderung der Kennlinie tritt auf, wenn man die Frequenz des Lichts erhöht ($f_2 > f_1$), während die Bestrahlungsstärke (Intensität) so austariert wird, dass die Anzahl der Photonen pro Sekunde konstant bleibt?

- **A:** Der Sättigungsstrom verdoppelt sich, während die Gegenspannung unverändert bleibt.
- **B:** Die Kennlinie verschiebt sich auf der Spannungsachse zu betragsmäßig größeren negativen Gegenspannungen (weiter nach links), während der Sättigungsstrom unverändert bleibt.
- **C:** Die Kennlinie bleibt vollkommen identisch, da die Photonenanzahl konstant ist.
- **D:** Die Gegenspannung sinkt auf null Volt ab.
- **E:** Die Kennlinie rotiert um $90^\circ$ im Uhrzeigersinn.

**Richtige Antwort:** **B**

**Erklärung:**
Zwei Parameter bestimmen die I-U-Kennlinie:
1. Sättigungs-Photostrom ($I_{\text{Sättigung}}$): Dieser wird erreicht, wenn alle aus der Kathode emittierten Elektronen von der Anode abgesaugt werden. Er hängt linear von der Anzahl der emittierten Elektronen pro Sekunde und damit von der eintreffenden Photonenanzahl pro Sekunde ab. Da diese konstant gehalten wird, bleibt der Sättigungsstrom gleich hoch.
2. Gegenspannung ($U_0$): Die minimale Bremsspannung, bei der der Photostrom abreißt ($I = 0$), gehorcht der Beziehung:
$$e \cdot U_0 = h \cdot f - W_A \implies U_0 = \frac{h}{e} \cdot f - \frac{W_A}{e}$$
Wird die Frequenz $f$ erhöht ($f_2 > f_1$), besitzen die Photoelektronen eine höhere maximale kinetische Energie $E_{\text{kin,max}}$. Man benötigt eine größere Gegenspannung (auf der negativen Spannungsachse weiter links), um sie abzubremsen.
Analyse der Falschantworten: A beschreibt eine Intensitätserhöhung bei gleicher Frequenz. C ignoriert die Zunahme der kinetischen Energie. D und E sind physikalisch abwegig.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, I-U-Kennlinie, Gegenspannung, Sättigungsstrom*

---

### Frage 41 (chem-02-set2-q041)
**Thema:** Spektrallinien — Fraunhofer-Linien als atomare Absorptionsspektren

Im kontinuierlichen Spektrum des Sonnenlichts entdeckte Joseph von Fraunhofer hunderte scharfe, dunkle Linien (Fraunhofer-Linien). Welche fundamentale Erklärung beschreibt die Entstehung dieser dunklen Absorptionslinien?

- **A:** Das Sonnenlicht wird durch Staubpartikel im interplanetaren Raum rein mechanisch blockiert.
- **B:** Im heißen Kern der Sonne können Atome nur bei bestimmten diskreten Frequenzen Licht emittieren.
- **C:** Die kühlere Gasatmosphäre der Sonne (Photosphäre/Chromosphäre) absorbiert aus dem kontinuierlichen Wärmespektrum des Sonneninneren exakt jene diskreten Frequenzen, die den quantisierten Übergängen ihrer Atome (z. B. Wasserstoff, Helium, Natrium) entsprechen.
- **D:** Fraunhofer-Linien entstehen durch Beugungseffekte an der Linse des astronomischen Teleskops.
- **E:** Die Linien markieren jene Wellenlängen, bei denen Licht mit Licht destruktiv interferiert.

**Richtige Antwort:** **C**

**Erklärung:**
Das Innere der Sonne strahlt näherungsweise wie ein Schwarzer Strahler ein kontinuierliches Spektrum aller Wellenlängen ab. Durchquert dieses kontinuierliche Licht die kühleren äußeren Gasschichten der Sonne (und später die Erdatmosphäre), werden Photonen, deren Energie exakt einer Energiedifferenz $\Delta E = E_n - E_m$ der dort vorhandenen Atome entspricht, resonant absorbiert (Resonanzabsorption). Die Atome werden in höhere Zustände angeregt und emittieren diese Photonen anschließend isotrop in alle Raumrichtungen (Re-Emission). In der ursprünglichen Beobachtungsrichtung zur Erde fehlt diese Intensität, weshalb an diesen diskreten Stellen des Spektrums dunkle Absorptionslinien erscheinen. Dies ermöglichte u. a. die Entdeckung des Elements Helium auf der Sonne vor seiner Entdeckung auf der Erde.
Analyse der Falschantworten: A, D und E sind optisch-mechanische Fehlkonzepte. B ignoriert, dass das Sonneninnere ein Kontinuum abstrahlt.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Fraunhofer-Linien, Absorptionsspektrum, Sonnenstrahlung*

---

### Frage 42 (chem-02-set2-q042)
**Thema:** Teilchen-Welle-Dualismus — Photonenimpuls und Strahlungsdruck

Obwohl ein Photon eine Ruhemasse von exakt null besitzt ($m_0 = 0$), übt Licht beim Auftreffen auf eine Oberfläche einen mechanischen Druck (Strahlungsdruck) aus. Welcher Ausdruck verknüpft die Energie $E$ bzw. die Wellenlänge $\lambda$ eines Photons mit seinem relativistischen Impuls $p$?

- **A:** $p = \frac{E}{c} = \frac{h}{\lambda}$
- **B:** $p = E \cdot c = h \cdot \lambda$
- **C:** $p = \frac{E}{c^2}$
- **D:** $p = \frac{h \cdot c}{\lambda^2}$
- **E:** Ein Photon besitzt keinen Impuls, da seine Masse null ist.

**Richtige Antwort:** **A**

**Erklärung:**
Nach der speziellen Relativitätstheorie gilt die Energie-Impuls-Beziehung:
$$E^2 = (p \cdot c)^2 + (m_0 \cdot c^2)^2$$
Für ein Photon mit Ruhemasse $m_0 = 0$ vereinfacht sich dies strikt zu:
$$E = p \cdot c \iff p = \frac{E}{c}$$
Da für Photonen $E = \frac{h \cdot c}{\lambda}$ ist, folgt durch Einsetzen:
$$p = \frac{\frac{h \cdot c}{\lambda}}{c} = \frac{h}{\lambda}$$
Ein Photon trägt somit den wohlbestimmten Impuls $p = \frac{h}{\lambda}$. Trifft es auf eine Wand, überträgt es diesen Impuls (bei Absorption $\Delta p = p$, bei idealer Reflexion $\Delta p = 2p$). Die Summe dieser Impulsüberträge pro Zeit und Fläche manifestiert sich makroskopisch als messbarer Strahlungsdruck.
Analyse der Falschantworten:
- B multipliziert fälschlich mit $c$.
- C ist die relativistische dynamische Masse $m = E/c^2$, nicht der Impuls.
- D dividiert durch $\lambda^2$.
- E unterliegt dem Newtonschen Missverständnis, dass Impuls zwingend eine Ruhemasse erfordert.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photonenimpuls, Strahlungsdruck, De-Broglie, Relativitätstheorie*

---

### Frage 43 (chem-02-set2-q043)
**Thema:** Transversale Wellennatur — Polarisation von Licht

Schallwellen in Luft können nicht polarisiert werden, Lichtwellen hingegen lassen sich mithilfe von Polarisationsfiltern linear polarisieren. Welche fundamentale wellenphysikalische Eigenschaft begründet diesen Unterschied?

- **A:** Schallwellen breiten sich mit Schallgeschwindigkeit aus, Lichtwellen mit Lichtgeschwindigkeit.
- **B:** Schallwellen sind Longitudinalwellen (Schwingung parallel zur Ausbreitungsrichtung), während Lichtwellen Transversalwellen sind (Schwingung senkrecht zur Ausbreitungsrichtung).
- **C:** Lichtwellen bestehen aus masselosen Teilchen, Schallwellen aus Atomen.
- **D:** Schallwellen besitzen keine Frequenz, sondern nur eine Amplitude.
- **E:** Polarisationsfilter absorbieren Photonen anhand ihrer Masse.

**Richtige Antwort:** **B**

**Erklärung:**
Polarisation ist ein Phänomen, das ausschließlich bei Transversalwellen auftreten kann:
- Bei einer Transversalwelle (wie Licht) steht der Feldvektor $\vec{E}$ senkrecht auf der Ausbreitungsrichtung $\vec{c}$. In dieser senkrechten Ebene existieren unendlich viele Schwingungsrichtungen. Ein Polarisationsfilter lässt nur jene Komponente passieren, die parallel zu seiner Durchlassachse schwingt $\to$ lineares Polarisieren.
- Bei einer Longitudinalwelle (wie Schall in Gasen und Flüssigkeiten) schwingen die Teilchen exakt entlang der Ausbreitungsrichtung (Dichtemodulation aus Kompression und Verdünnung). Es gibt keine Freiheitsgrade senkrecht zur Ausbreitungsrichtung, weshalb eine Polarisation geometrisch unmöglich ist.
Analyse der Falschantworten: Geschwindigkeit (A) und Teilchennatur (C) haben keinen Einfluss auf die Polarisierbarkeit. D ist physikalisch unsinnig (Schall hat wohldefinierte Frequenzen). E ist eine Scheinerklärung.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Transversalwelle, Polarisation, Schallwellen*

---

### Frage 44 (chem-02-set2-q044)
**Thema:** Quantisierte Energieniveaus wasserstoffähnlicher Ionen (Z > 1)

Für wasserstoffähnliche Einelektronensysteme (wie $\text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$) skalieren die Bohrschen Energieniveaus mit dem Quadrat der Kernladungszahl $Z$:
$$E_n = -13{,}6\,\text{eV} \cdot \frac{Z^2}{n^2}$$
Welche Energie besitzt das Elektron im Grundzustand ($n = 1$) eines einfach ionisierten Helium-Ions ($\text{He}^+, Z = 2$)?

- **A:** $-13{,}6\,\text{eV}$
- **B:** $-27{,}2\,\text{eV}$
- **C:** $-108{,}8\,\text{eV}$
- **D:** $-3{,}4\,\text{eV}$
- **E:** $-54{,}4\,\text{eV}$

**Richtige Antwort:** **E**

**Erklärung:**
Für Helium gilt die Kernladungszahl $Z = 2$.
Einsetzen in die Formel für den Grundzustand ($n = 1$):
$$E_1 = -13{,}6\,\text{eV} \cdot \frac{2^2}{1^2} = -13{,}6\,\text{eV} \cdot 4 = -54{,}4\,\text{eV}$$
Da der Kern die doppelte positive Ladung trägt ($+2e$), zieht er das einzelne Elektron viermal so stark an (Coulomb-Gesetz und kleinerer Bahnradius kompensieren sich zu einer $Z^2$-Abhängigkeit der Energie). Um das Elektron aus $\text{He}^+$ abzuspalten (zweite Ionisierungsenergie von Helium), muss folglich die enorme Energie von $+54{,}4\,\text{eV}$ aufgewendet werden.
Analyse der Falschantworten:
- A setzt $Z = 1$ (Wasserstoff) an.
- B multipliziert fälschlich linear mit $Z = 2$ ($-13{,}6 \cdot 2 = -27{,}2\,\text{eV}$).
- C multipliziert fälschlich mit $Z^3 = 8$ ($-13{,}6 \cdot 8 = -108{,}8\,\text{eV}$).
- D teilt fälschlich durch $Z^2 = 4$ ($-13{,}6 / 4 = -3{,}4\,\text{eV}$).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffähnliche Ionen, Helium, Energieniveaus, Kernladungszahl*

---

### Frage 45 (chem-02-set2-q045)
**Thema:** Photoeffekt — Vergleich zweier Metalle bei identischer Bestrahlung

Zwei verschiedene Metallplatten A und B werden im Vakuum mit identischem ultraviolettem Licht der Photonenenergie $E_{\text{Photon}} = 5{,}0\,\text{eV}$ bestrahlt. Metall A besitzt die Austrittsarbeit $W_A = 2{,}0\,\text{eV}$, Metall B besitzt die Austrittsarbeit $W_B = 4{,}0\,\text{eV}$. In welchem Verhältnis stehen die maximalen kinetischen Energien der emittierten Photoelektronen $\frac{E_{\text{kin,max}}(A)}{E_{\text{kin,max}}(B)}$?

- **A:** $1 : 2$
- **B:** $2 : 1$
- **C:** $5 : 2$
- **D:** $3 : 1$
- **E:** $4 : 1$

**Richtige Antwort:** **D**

**Erklärung:**
Berechnung der kinetischen Energien für beide Metalle über die Einstein-Gleichung:
1. Für Metall A:
$$E_{\text{kin,max}}(A) = E_{\text{Photon}} - W_A = 5{,}0\,\text{eV} - 2{,}0\,\text{eV} = 3{,}0\,\text{eV}$$
2. Für Metall B:
$$E_{\text{kin,max}}(B) = E_{\text{Photon}} - W_B = 5{,}0\,\text{eV} - 4{,}0\,\text{eV} = 1{,}0\,\text{eV}$$
Verhältnis bilden:
$$\frac{E_{\text{kin,max}}(A)}{E_{\text{kin,max}}(B)} = \frac{3{,}0\,\text{eV}}{1{,}0\,\text{eV}} = 3 = \frac{3}{1}$$
Obwohl die Austrittsarbeit von B doppelt so groß ist wie die von A ($4{,}0\,\text{eV}$ vs. $2{,}0\,\text{eV}$), sind die resultierenden kinetischen Energien im Verhältnis $3 : 1$! Dies unterstreicht erneut den nicht-proportionalen Charakter der Subtraktion.
Analyse der Falschantworten:
- B bildet das umgekehrte Verhältnis der Austrittsarbeiten ($4 / 2 = 2 : 1$).
- A bildet das direkte Verhältnis der Austrittsarbeiten ($2 / 4 = 1 : 2$).
- C teilt die Photonenenergie durch die Austrittsarbeit von A ($5 / 2$).
- E quadriert das Verhältnis der Austrittsarbeiten.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Austrittsarbeit, Kinetische Energie, Verhältnisrechnung*

---

### Frage 46 (chem-02-set2-q046)
**Thema:** Photonenfluss & Strahlungsleistung — Schnelle Zehnerpotenzrechnung

Ein Dauerstrichlaser emittiert rotes Licht mit einer Wellenlänge von $\lambda = 620\,\text{nm}$ bei einer optischen Ausgangsleistung von $P = 3{,}2\,\text{mW}$ ($3{,}2 \cdot 10^{-3}\,\text{W}$). Wie viele Photonen sendet dieser Laser pro Sekunde aus?
(Hinweise: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$; $1\,\text{eV} \approx 1{,}6 \cdot 10^{-19}\,\text{J}$).

- **A:** $1{,}0 \cdot 10^{13}\,\text{Photonen/s}$
- **B:** $6{,}25 \cdot 10^{15}\,\text{Photonen/s}$
- **C:** $1{,}0 \cdot 10^{16}\,\text{Photonen/s}$
- **D:** $3{,}2 \cdot 10^{18}\,\text{Photonen/s}$
- **E:** $2{,}0 \cdot 10^{19}\,\text{Photonen/s}$

**Richtige Antwort:** **C**

**Erklärung:**
1. Energie eines einzelnen Photons bestimmen:
$$E_{\text{Photon}} = \frac{h \cdot c}{\lambda} = \frac{1240\,\text{eV}\cdot\text{nm}}{620\,\text{nm}} = 2{,}0\,\text{eV}$$
Umrechnung in Joule:
$$E_{\text{Photon}} = 2{,}0 \cdot (1{,}6 \cdot 10^{-19}\,\text{J}) = 3{,}2 \cdot 10^{-19}\,\text{J}$$
2. Photonenrate $N/t$ über die Leistung $P = \frac{\Delta E_{\text{gesamt}}}{\Delta t} = \frac{N \cdot E_{\text{Photon}}}{\Delta t}$ berechnen:
$$\frac{N}{\Delta t} = \frac{P}{E_{\text{Photon}}} = \frac{3{,}2 \cdot 10^{-3}\,\text{J/s}}{3{,}2 \cdot 10^{-19}\,\text{J}} = 1{,}0 \cdot 10^{-3 - (-19)} = 1{,}0 \cdot 10^{16}\,\text{s}^{-1}$$
Der Laser emittiert exakt $1{,}0 \cdot 10^{16}$ Photonen pro Sekunde.
Analyse der Falschantworten:
- A verrechnet sich bei den Zehnerpotenzen um den Faktor $10^3$.
- B teilt fälschlicherweise $2\,\text{mW}$ durch die Energie.
- D vergisst die Umrechnung von $\text{eV}$ in Joule.
- E multipliziert die Leistung mit der Photonenenergie.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Strahlungsleistung, Photonenfluss, Kopfrechnen, Zehnerpotenzen*

---

### Frage 47 (chem-02-set2-q047)
**Thema:** Elektronenmikroskopie — Auflösungsvermögen & De-Broglie-Wellenlänge

Warum können moderne Transmissionselektronenmikroskope (TEM) einzelne Atome mit einer Auflösung von unter $0{,}1\,\text{nm}$ abbilden, während die Auflösung klassischer Lichtmikroskope physikalisch prinzipiell auf ca. $200 - 300\,\text{nm}$ limitiert ist?

- **A:** Weil Elektronen keine Materieteilchen sind, sondern reine Photonen ohne Beugungsphänomene.
- **B:** Weil die De-Broglie-Wellenlänge schneller Elektronen um mehrere Größenordnungen kürzer ist als die Wellenlänge des sichtbaren Lichts, wodurch die Abbe’sche Beugungsgrenze zu dramatisch kleineren Abständen verschoben wird.
- **C:** Weil Elektronen unendlich kleine Quarks besitzen, die das Licht bündeln.
- **D:** Weil Lichtmikroskope durch die Heisenbergsche Unschärferelation zerstört werden.
- **E:** Weil Elektronen eine negative Ladung tragen und daher nicht mit Materie wechselwirken.

**Richtige Antwort:** **B**

**Erklärung:**
Nach dem Abbe’schen Beugungslimit ist das minimale Auflösungsvermögen $d_{\text{min}}$ eines Mikroskops direkt proportional zur Wellenlänge der verwendeten Strahlung:
$$d_{\text{min}} \approx \frac{\lambda}{2 \cdot \text{NA}}$$
- Lichtmikroskop: Verwendet sichtbares Licht ($\lambda \approx 400 - 700\,\text{nm}$); selbst bei optimaler Ölimmersion liegt das Limit bei ca. $200\,\text{nm}$. Kleinere Strukturen (wie Viren, Proteine oder Atome) können wegen Beugung nicht getrennt aufgelöst werden.
- Elektronenmikroskop: Elektronen werden z. B. auf $100\,\text{keV}$ beschleunigt. Nach de Broglie besitzt ein solches Elektron eine Wellenlänge von nur $\lambda \approx 0{,}0037\,\text{nm}$ ($3{,}7\,\text{pm}$). Diese extrem kurze Wellenlänge reduziert die Beugungseffekte drastisch und ermöglicht die direkte Abbildung atomarer Gitterabstände.
Analyse der Falschantworten: A verneint die Teilchennatur des Elektrons. C ist physikalischer Unsinn (Elektronen sind fundamentale Leptonen ohne Quarks). D ist eine Scheinerklärung. E ist falsch (Elektronen wechselwirken stark über Coulomb-Kräfte).

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Elektronenmikroskop, Abbe-Limit, Auflösungsvermögen*

---

### Frage 48 (chem-02-set2-q048)
**Thema:** Rydberg-Ritzsches Kombinationsprinzip — Kaskadierende Spektrallinien

Ein angeregtes Atom geht in einer zweistufigen Kaskade vom Niveau $n = 4$ über den Zwischenzustand $n = 2$ in den Grundzustand $n = 1$ über. Dabei werden nacheinander zwei Photonen mit den Wellenlängen $\lambda_{4\rightarrow 2}$ und $\lambda_{2\rightarrow 1}$ emittiert. Welche mathematische Beziehung gilt für die Wellenlänge $\lambda_{4\rightarrow 1}$ eines Photons, das beim direkten Übergang von $n = 4$ nach $n = 1$ emittiert würde?

- **A:** $\lambda_{4\rightarrow 1} = \lambda_{4\rightarrow 2} + \lambda_{2\rightarrow 1}$
- **B:** $\lambda_{4\rightarrow 1} = \lambda_{4\rightarrow 2} \cdot \lambda_{2\rightarrow 1}$
- **C:** $\lambda_{4\rightarrow 1} = \sqrt{\lambda_{4\rightarrow 2} \cdot \lambda_{2\rightarrow 1}}$
- **D:** $\lambda_{4\rightarrow 1} = \frac{\lambda_{4\rightarrow 2} + \lambda_{2\rightarrow 1}}{2}$
- **E:** $\frac{1}{\lambda_{4\rightarrow 1}} = \frac{1}{\lambda_{4\rightarrow 2}} + \frac{1}{\lambda_{2\rightarrow 1}}$

**Richtige Antwort:** **E**

**Erklärung:**
Die Energieerhaltung verlangt, dass die gesamte Energiedifferenz beim direkten Sprung gleich der Summe der beiden Teilsprünge ist:
$$\Delta E_{4\rightarrow 1} = \Delta E_{4\rightarrow 2} + \Delta E_{2\rightarrow 1}$$
Da für jedes emittierte Photon $\Delta E = h \cdot f = \frac{h \cdot c}{\lambda}$ gilt, setzt man dies ein:
$$\frac{h \cdot c}{\lambda_{4\rightarrow 1}} = \frac{h \cdot c}{\lambda_{4\rightarrow 2}} + \frac{h \cdot c}{\lambda_{2\rightarrow 1}}$$
Dividiert man die gesamte Gleichung durch die Konstante $h \cdot c$, erhält man das berühmte Rydberg-Ritzsche Kombinationsprinzip:
$$\frac{1}{\lambda_{4\rightarrow 1}} = \frac{1}{\lambda_{4\rightarrow 2}} + \frac{1}{\lambda_{2\rightarrow 1}}$$
Falle: Man darf niemals die Wellenlängen addieren (A ist falsch)! Bei Quantensprüngen addieren sich die Frequenzen und reziproken Wellenlängen (Wellenzahlen), da die Energie umgekehrt proportional zur Wellenlänge ist.
Analyse der Falschantworten: A, B, C und D verletzen den Energieerhaltungssatz.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Spektrallinien, Rydberg-Ritz, Energieerhaltung, Wellenlänge*

---

### Frage 49 (chem-02-set2-q049)
**Thema:** Licht-Materie-Wechselwirkung — Photochemische DNA-Schädigung durch UV-C

Das Absorptionsmaximum von Nukleinsäuren (DNA und RNA) liegt bei einer Wellenlänge von ca. $\lambda \approx 260\,\text{nm}$ (UV-C-Bereich). Welcher primäre photochemische Schädigungsmechanismus wird durch die Absorption dieser Strahlung in Zellen ausgelöst?

- **A:** Die vollständige thermische Verdampfung des Zellwassers
- **B:** Die dauerhafte Umwandlung von Guanin in molekulares Eisen
- **C:** Das Herauslösen von Kernprotonen aus den Phosphatgruppen
- **D:** Die Spaltung von Wasserstoffatomen in Quarks
- **E:** Die Anregung von $\pi$-Elektronen in den aromatischen Pyrimidinbasen (insbesondere Thymin), was zur kovalenten Dimerisierung benachbarter Thyminmoleküle (Cyclobutan-Thymin-Dimere) führt und die DNA-Replikation blockiert

**Richtige Antwort:** **E**

**Erklärung:**
UV-C-Licht bei $260\,\text{nm}$ besitzt eine Photonenenergie von:
$$E = \frac{1240\,\text{eV}\cdot\text{nm}}{260\,\text{nm}} \approx 4{,}77\,\text{eV}$$
Diese Energie entspricht exakt den Resonanzen der aromatischen Ringsysteme der DNA-Basen (Adenin, Guanin, Cytosin, Thymin).
Durch die elektronische Anregung ($\pi \to \pi^*$) der Kohlenstoff-Doppelbindungen in Pyrimidinbasen kommt es zu einer photochemischen [2+2]-Cycloaddition zwischen zwei benachbarten Thymin-Resten desselben DNA-Strangs. Das resultierende Cyclobutan-Thymin-Dimer verzerrt die Doppelhelix-Geometrie massiv, wodurch DNA-Polymerasen bei der Replikation blockieren. Dies führt zu Mutationen (z. B. Hautkrebs) oder zum Zelltod (Grundlage der UV-C-Entkeimung).
Analyse der Falschantworten: Wasser absorbiert bei $260\,\text{nm}$ kaum (A ist falsch). Kernreaktionen (B, C, D) erfordern Megaelektronenvolt ($\text{MeV}$), keine $4{,}8\,\text{eV}$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht-Materie-Wechselwirkung, UV-Strahlung, DNA-Schädigung, Thymin-Dimer*

---

### Frage 50 (chem-02-set2-q050)
**Thema:** Unschärferelation — Energie-Zeit-Unschärfe & Natürliche Linienbreite

Neben der Orts-Impuls-Unschärfe existiert die Heisenbergsche Energie-Zeit-Unschärferelation:
$$\Delta E \cdot \Delta t \ge \frac{\hbar}{2} = \frac{h}{4\pi}$$
Welche fundamentale physikalisch-chemische Konsequenz hat diese Ungleichung für die Spektrallinien angeregter atomarer Zustände?

- **A:** Da angeregte Zustände eine endliche mittlere Lebensdauer $\tau = \Delta t$ vor dem spontanen Zerfall besitzen, ist ihre Energie nicht unendlich scharf definiert, woraus eine unvermeidbare natürliche Linienbreite $\Delta f$ der emittierten Spektrallinie resultiert.
- **B:** Angeregte Zustände können beliebig lange existieren, ohne Energie zu verlieren.
- **C:** Die emittierte Photonenenergie ist exakt null, wenn $\Delta t > 1\,\text{s}$ ist.
- **D:** Die Energie-Zeit-Unschärfe bewirkt, dass Atome bei Raumtemperatur kontinuierlich an Masse zunehmen.
- **E:** Sie erzwingt, dass Elektronen im Grundzustand eine kürzere Lebensdauer besitzen als in hoch angeregten Zuständen.

**Richtige Antwort:** **A**

**Erklärung:**
Die Energie-Zeit-Unschärferelation besagt, dass ein Quantenzustand nur dann eine mathematisch exakt scharfe Energie besitzen kann ($\Delta E \to 0$), wenn er unendlich lange existiert ($\Delta t \to \infty$).
1. Der Grundzustand eines stabilen Atoms ist zeitlich unbegrenzt stabil ($\Delta t = \infty$), weshalb seine Energie $E_1$ absolut scharf ist ($\Delta E = 0$).
2. Angeregte Zustände zerfallen jedoch durch spontane Emission nach einer typischen Lebensdauer von z. B. $\tau \approx 10^{-8}\,\text{s}$ ($10\,\text{ns}$).
3. Aus $\Delta E \ge \frac{h}{4\pi \cdot \tau}$ folgt eine unvermeidbare Energieunschärfe $\Delta E$ des Niveaus.
4. Wegen $\Delta E = h \cdot \Delta f$ führt dies zu einer Frequenzunschärfe $\Delta f \ge \frac{1}{4\pi \cdot \tau}$.
Jede reale atomare Spektrallinie besitzt daher selbst bei absolutem Nullpunkt und im Vakuum eine intrinsische endliche spektrale Breite, die sogenannte natürliche Linienbreite (Lorentz-Profil).
Analyse der Falschantworten: B ignoriert die spontane Emission. C, D und E sind absurde Fehlinterpretationen der Energie-Zeit-Relation.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Energie-Zeit-Unschärfe, Natürliche Linienbreite, Spektrallinien*

---


## 📚 Set 3: Application & Transfer (Photoeffekt, De-Broglie, Unschärferelation, Wasserstoff-Spektrum & elektromagnetische Strahlung)

### Frage 51 (chem-02-set3-q051)
**Thema:** Photoeffekt — Rückwärtsinduktion der Austrittsarbeit aus zwei Frequenzen

In einer Versuchsreihe zum äußeren Photoelektrischen Effekt wird dieselbe Metalloberfläche nacheinander mit zwei verschiedenen monochromatischen Lichtquellen bestrahlt:

1. Lichtquelle 1 mit der Frequenz $f_1$ erzeugt Photoelektronen mit einer maximalen kinetischen Energie von $E_{\text{kin,1}} = 1{,}0\,\text{eV}$.
2. Lichtquelle 2 besitzt die 1,5-fache Frequenz ($f_2 = 1{,}5 \cdot f_1$) und setzt Photoelektronen mit $E_{\text{kin,2}} = 2{,}5\,\text{eV}$ frei.

Wie groß ist die materialcharakteristische Austrittsarbeit $W_A$ dieses Metalls?

- **A:** $W_A = 0{,}5\,\text{eV}$
- **B:** $W_A = 1{,}5\,\text{eV}$
- **C:** $W_A = 3{,}0\,\text{eV}$
- **D:** $W_A = 2{,}0\,\text{eV}$
- **E:** $W_A = 3{,}5\,\text{eV}$

**Richtige Antwort:** **D**

**Erklärung:**
Man stellt für beide Messungen die Einsteinsche Photoeffekt-Gleichung auf:
(1) $h \cdot f_1 - W_A = 1{,}0\,\text{eV} \implies h \cdot f_1 = 1{,}0\,\text{eV} + W_A$
(2) $h \cdot f_2 - W_A = 2{,}5\,\text{eV} \implies 1{,}5 \cdot (h \cdot f_1) - W_A = 2{,}5\,\text{eV}$

Setzt man Gl. (1) in Gl. (2) ein:
$$1{,}5 \cdot (1{,}0\,\text{eV} + W_A) - W_A = 2{,}5\,\text{eV}$$
$$1{,}5\,\text{eV} + 1{,}5 \cdot W_A - W_A = 2{,}5\,\text{eV}$$
$$1{,}5\,\text{eV} + 0{,}5 \cdot W_A = 2{,}5\,\text{eV}$$
Subtrahiere $1{,}5\,\text{eV}$:
$$0{,}5 \cdot W_A = 1{,}0\,\text{eV} \implies W_A = \frac{1{,}0\,\text{eV}}{0{,}5} = 2{,}0\,\text{eV}$$
(Probe: $h f_1 = 3{,}0\,\text{eV} \implies E_{\text{kin,1}} = 3{,}0 - 2{,}0 = 1{,}0\,\text{eV}$; $h f_2 = 4{,}5\,\text{eV} \implies E_{\text{kin,2}} = 4{,}5 - 2{,}0 = 2{,}5\,\text{eV}$. Passt exakt).

Analyse der Falschantworten:
- A subtrahiert fälschlich $2{,}5 - 2 \cdot 1{,}0 = 0{,}5\,\text{eV}$.
- B zieht lediglich die Differenz $2{,}5 - 1{,}0 = 1{,}5\,\text{eV}$ heran.
- C ist der Wert der Photonenenergie $h f_1$, nicht die Austrittsarbeit.
- E addiert $1{,}0 + 2{,}5$.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Gleichungssystem, Austrittsarbeit, Rückwärtsinduktion*

---

### Frage 52 (chem-02-set3-q052)
**Thema:** Photoeffekt — Schwellenwert-Logik an zwei Metallen bei gleicher Bestrahlung

Zwei verschiedene Metallplatten, Caesium ($W_A(\text{Cs}) = 2{,}1\,\text{eV}$) und Platin ($W_A(\text{Pt}) = 5{,}3\,\text{eV}$), werden im Vakuum mit monochromatischem Licht der Wellenlänge $\lambda = 310\,\text{nm}$ bestrahlt. Welche Beobachtung wird an den beiden Platten gemacht?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** An beiden Metallplatten werden Photoelektronen freigesetzt, an Platin jedoch mit höherer kinetischer Energie.
- **B:** An Caesium treten Photoelektronen mit $E_{\text{kin,max}} = 1{,}9\,\text{eV}$ aus; an Platin wird kein einziges Elektron freigesetzt.
- **C:** An Platin treten Elektronen mit $E_{\text{kin,max}} = 1{,}3\,\text{eV}$ aus; Caesium emittiert keine Elektronen.
- **D:** An keiner der beiden Metallplatten können Elektronen austreten, da die Wellenlänge im UV-Bereich liegt.
- **E:** An Caesium treten Elektronen mit $E_{\text{kin,max}} = 4{,}0\,\text{eV}$ aus, da die Austrittsarbeit vernachlässigt werden kann.

**Richtige Antwort:** **B**

**Erklärung:**
1. Photonenenergie berechnen:
$$E_{\text{Photon}} = \frac{h \cdot c}{\lambda} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{310\,\text{nm}} = 4{,}0\,\text{eV}$$

2. Schwellenwert-Bedingung prüfen:
- Caesium: Da $E_{\text{Photon}} = 4{,}0\,\text{eV} > W_A(\text{Cs}) = 2{,}1\,\text{eV}$ ist, findet der Photoeffekt statt:
$$E_{\text{kin,max}}(\text{Cs}) = 4{,}0\,\text{eV} - 2{,}1\,\text{eV} = 1{,}9\,\text{eV}$$
- Platin: Da $E_{\text{Photon}} = 4{,}0\,\text{eV} < W_A(\text{Pt}) = 5{,}3\,\text{eV}$ ist, reicht die Energie des einzelnen Photons nicht aus, um die Austrittsarbeit zu überwinden. Es wird kein einziges Elektron emittiert, unabhängig von der Strahlungsintensität.

Analyse der Falschantworten:
- A ignoriert die Schwellenwertbedingung bei Platin.
- C vertauscht die Metalle.
- D verkennt, dass $310\,\text{nm}$ energiereich genug für Caesium ist.
- E vergisst den Abzug der Austrittsarbeit ($4{,}0 - 2{,}1$).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Austrittsarbeit, Caesium, Schwellenwert*

---

### Frage 53 (chem-02-set3-q053)
**Thema:** Photoeffekt — Gegenfeldmethode & Berechnung der Bremsspannung

Licht einer Quecksilberdampflampe mit der Wellenlänge $\lambda = 248\,\text{nm}$ fällt auf eine Kalium-Photokathode ($W_A = 2{,}3\,\text{eV}$). Welche Gegenspannung $U_0$ muss zwischen Kathode und Anode angelegt werden, damit der Photostrom exakt abreißt?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $U_0 = 5{,}0\,\text{V}$
- **B:** $U_0 = 7{,}3\,\text{V}$
- **C:** $U_0 = 2{,}3\,\text{V}$
- **D:** $U_0 = 2{,}7\,\text{V}$
- **E:** $U_0 = 0{,}54\,\text{V}$

**Richtige Antwort:** **D**

**Erklärung:**
1. Photonenenergie über den Kopfrechentrick ermitteln:
$$E_{\text{Photon}} = \frac{1240\,\text{eV}\cdot\text{nm}}{248\,\text{nm}} = \frac{1240}{248}\,\text{eV} = 5{,}0\,\text{eV}$$
(Denn $5 \cdot 248 = 1240$.)

2. Maximale kinetische Energie bestimmen:
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A = 5{,}0\,\text{eV} - 2{,}3\,\text{eV} = 2{,}7\,\text{eV}$$

3. Bremsspannung ableiten:
An der Abreißgrenze des Photostroms gilt:
$$e \cdot U_0 = E_{\text{kin,max}} \implies e \cdot U_0 = 2{,}7\,\text{eV} \implies U_0 = 2{,}7\,\text{V}$$

Analyse der Falschantworten:
- A ist das Potential, das der gesamten Photonenenergie entspricht ($5{,}0\,\text{V}$), ohne Abzug von $W_A$.
- B addiert fälschlich Photonenenergie und Austrittsarbeit ($5{,}0 + 2{,}3 = 7{,}3\,\text{V}$).
- C ist das Potential der Austrittsarbeit ($2{,}3\,\text{V}$).
- E dividiert $2{,}7 / 5{,}0$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Gegenfeldmethode, Bremsspannung, Kopfrechnen*

---

### Frage 54 (chem-02-set3-q054)
**Thema:** Unschärferelation — Skalierung der Geschwindigkeitsunschärfe bei Ortsveränderung

Ein Elektron befindet sich zunächst in einem räumlichen Bereich mit der Ortsunschärfe $\Delta x_1$. Seine minimale Geschwindigkeitsunschärfe beträgt dabei $\Delta v_1 = 4 \cdot 10^5\,\text{m/s}$.
Durch eine veränderte elektrostatische Fokussierung wird die Ortsunschärfe des Elektrons auf ein Viertel des ursprünglichen Werts komprimiert ($\Delta x_2 = \frac{1}{4}\,\Delta x_1 = 0{,}25 \cdot \Delta x_1$).
Welcher Mindestwert resultiert daraus für die neue Geschwindigkeitsunschärfe $\Delta v_2$?

- **A:** $\Delta v_2 = 1 \cdot 10^5\,\text{m/s}$
- **B:** $\Delta v_2 = 2 \cdot 10^5\,\text{m/s}$
- **C:** $\Delta v_2 = 4 \cdot 10^5\,\text{m/s}$
- **D:** $\Delta v_2 = 8 \cdot 10^5\,\text{m/s}$
- **E:** $\Delta v_2 = 1{,}6 \cdot 10^6\,\text{m/s}$

**Richtige Antwort:** **E**

**Erklärung:**
Nach der Heisenbergschen Unschärferelation gilt für ein Teilchen mit konstanter Masse $m$:
$$\Delta x \cdot \Delta v \ge \frac{h}{4\pi \cdot m} \implies \Delta v_{\text{min}} \propto \frac{1}{\Delta x}$$
Die minimale Geschwindigkeitsunschärfe verhält sich streng umgekehrt proportional zur Ortsunschärfe.
Wird die Ortsunschärfe geviertelt ($\Delta x_2 = \frac{1}{4}\,\Delta x_1$ bzw. $0{,}25 \cdot \Delta x_1$), muss sich die minimale Geschwindigkeitsunschärfe vervierfachen:
$$\Delta v_2 = 4 \cdot \Delta v_1 = 4 \cdot (4 \cdot 10^5\,\text{m/s}) = 16 \cdot 10^5\,\text{m/s} = 1{,}6 \cdot 10^6\,\text{m/s}$$

Analyse der Falschantworten:
- A viertelt fälschlich auch die Geschwindigkeit (direkte statt reziproke Proportionalität).
- B halbiert fälschlicherweise (Wurzelfehler).
- C nimmt Unabhängigkeit vom Ort an.
- D verdoppelt lediglich.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Geschwindigkeitsunschärfe, Proportionalität*

---

### Frage 55 (chem-02-set3-q055)
**Thema:** De-Broglie-Wellenlänge — Impuls- und Geschwindigkeitsverdopplung

Ein Elektron bewegt sich mit der nicht-relativistischen Geschwindigkeit $v_1$ und besitzt die De-Broglie-Wellenlänge $\lambda_1 = 0{,}8\,\text{nm}$.
Welche neue De-Broglie-Wellenlänge $\lambda_2$ weist das Elektron auf, wenn seine Geschwindigkeit verdoppelt wird ($v_2 = 2 \cdot v_1$)?

- **A:** $\lambda_2 = 0{,}4\,\text{nm}$
- **B:** $\lambda_2 = 0{,}8\,\text{nm}$
- **C:** $\lambda_2 = 1{,}6\,\text{nm}$
- **D:** $\lambda_2 = 0{,}2\,\text{nm}$
- **E:** $\lambda_2 = 3{,}2\,\text{nm}$

**Richtige Antwort:** **A**

**Erklärung:**
Die De-Broglie-Gleichung lautet:
$$\lambda = \frac{h}{p} = \frac{h}{m \cdot v}$$
Da Masse $m$ und Planck-Konstante $h$ konstant sind, gilt:
$$\lambda \propto \frac{1}{v}$$
Wird die Geschwindigkeit verdoppelt ($v_2 = 2 \cdot v_1$), halbiert sich die De-Broglie-Wellenlänge:
$$\lambda_2 = \frac{\lambda_1}{2} = \frac{0{,}8\,\text{nm}}{2} = 0{,}4\,\text{nm}$$

Analyse der Falschantworten:
- B nimmt Geschwindigkeitsunabhängigkeit an.
- C verdoppelt $\lambda$ fälschlich ($0{,}8 \cdot 2 = 1{,}6\,\text{nm}$).
- D viertelt fälschlich (Verwechslung mit kinetischer Energie $E_{\text{kin}} \propto v^2$).
- E multipliziert mit 4.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Geschwindigkeit, Wellenlänge, Proportionalität*

---

### Frage 56 (chem-02-set3-q056)
**Thema:** Wasserstoffspektrum — Vergleich der Lyman- und Balmer-Quantensprünge

Betrachtet werden zwei fundamentale Quantensprünge im Wasserstoffatom:

- Übergang A: Ein Elektron springt von $n = 2$ nach $n = 1$ (Lyman-$\alpha$).
- Übergang B: Ein Elektron springt von $n = 3$ nach $n = 2$ (Balmer-$\alpha$).

Welche Aussage über die dabei emittierten Photonen ist physikalisch korrekt?
(Energieniveaus: $E_1 = -13{,}6\,\text{eV}$; $E_2 = -3{,}4\,\text{eV}$; $E_3 = -1{,}51\,\text{eV}$).

- **A:** Photon A besitzt eine geringere Energie und eine größere Wellenlänge als Photon B.
- **B:** Photon A liegt im sichtbaren Bereich, während Photon B im ultravioletten Bereich liegt.
- **C:** Photon A besitzt eine mehr als fünffach höhere Energie als Photon B und weist eine deutlich kürzere Wellenlänge auf.
- **D:** Beide Photonen besitzen exakt dieselbe Frequenz, da bei beiden Übergängen $\Delta n = 1$ gilt.
- **E:** Bei beiden Übergängen wird jeweils ein Photon absorbiert, nicht emittiert.

**Richtige Antwort:** **C**

**Erklärung:**
1. Energiedifferenzen berechnen:
- Übergang A ($2 \rightarrow 1$):
$$\Delta E_A = E_2 - E_1 = -3{,}4\,\text{eV} - (-13{,}6\,\text{eV}) = 10{,}2\,\text{eV}$$
- Übergang B ($3 \rightarrow 2$):
$$\Delta E_B = E_3 - E_2 = -1{,}51\,\text{eV} - (-3{,}4\,\text{eV}) = 1{,}89\,\text{eV}$$

2. Vergleich anstellen:
$$\frac{\Delta E_A}{\Delta E_B} = \frac{10{,}2\,\text{eV}}{1{,}89\,\text{eV}} \approx 5{,}4$$
(mehr als 5-fach so groß!).
Da $\lambda = \frac{h \cdot c}{\Delta E}$ gilt, besitzt Photon A eine viel kürzere Wellenlänge ($\lambda_A \approx \frac{1240}{10{,}2} \approx 121{,}6\,\text{nm}$, UV-Bereich) als Photon B ($\lambda_B \approx \frac{1240}{1{,}89} \approx 656\,\text{nm}$, roter sichtbarer Bereich).

Analyse der Falschantworten:
- A und B vertauschen die Relationen von Lyman und Balmer.
- D unterliegt dem Trugschluss, dass gleiche Hauptquantenzahldifferenzen ($\Delta n = 1$) gleiche Energiesprünge bedeuteten (die Bohrschen Niveaus rücken mit steigendem $n$ wegen $\propto 1/n^2$ immer dichter zusammen!).
- E verkennt, dass beim Herabfallen auf tiefere Niveaus Photonen emittiert werden.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Lyman-Serie, Balmer-Serie, Spektrallinien, Vergleich*

---

### Frage 57 (chem-02-set3-q057)
**Thema:** Photoeffekt — Grenzwellenlänge und minimale Austrittsarbeit

Für ein bestimmtes Experiment soll eine Photokathode eingesetzt werden, die bereits durch rotes Licht der Wellenlänge $\lambda = 620\,\text{nm}$ Photoelektronen emittiert. Wie groß darf die Austrittsarbeit $W_A$ des Kathodenmaterials höchstens sein?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** maximal $0{,}5\,\text{eV}$
- **B:** maximal $1{,}0\,\text{eV}$
- **C:** maximal $4{,}0\,\text{eV}$
- **D:** maximal $3{,}1\,\text{eV}$
- **E:** maximal $2{,}0\,\text{eV}$

**Richtige Antwort:** **E**

**Erklärung:**
Damit Licht der Wellenlänge $\lambda = 620\,\text{nm}$ Photoelektronen auslösen kann, muss die Energie der einzelnen Photonen mindestens gleich der Austrittsarbeit sein:
$$E_{\text{Photon}} \ge W_A \iff W_A \le \frac{h \cdot c}{\lambda}$$
Mit dem Kopfrechentrick $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$:
$$W_A \le \frac{1240\,\text{eV}\cdot\text{nm}}{620\,\text{nm}} = 2{,}0\,\text{eV}$$
Die Austrittsarbeit des Metalls darf somit höchstens $2{,}0\,\text{eV}$ betragen (z. B. Caesium oder Rubidium). Wäre $W_A > 2{,}0\,\text{eV}$, reicht die Photonenenergie von rotem Licht nicht aus.

Analyse der Falschantworten:
- A dividiert $620 / 1240 = 0{,}5\,\text{eV}$ (reziproker Formelfehler).
- B schätzt zu niedrig.
- C berechnet die Photonenenergie für UV-Licht mit $\lambda = 310\,\text{nm}$.
- D berechnet die Photonenenergie für violettes Licht mit $\lambda = 400\,\text{nm}$ ($1240 / 400 = 3{,}1\,\text{eV}$).

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Grenzwellenlänge, Austrittsarbeit, Kopfrechenformat*

---

### Frage 58 (chem-02-set3-q058)
**Thema:** De-Broglie-Wellenlänge — Massenvergleich bei gleichem Impuls

Ein Elektron ($m_e$) und ein Proton ($m_p \approx 1836 \cdot m_e$) bewegen sich im Vakuum so, dass beide Teilchen den exakt gleichen linearen Impuls besitzen ($p_e = p_p$).
Welche Aussage über ihre De-Broglie-Wellenlängen ($\lambda_e, \lambda_p$) und ihre Geschwindigkeiten ($v_e, v_p$) ist korrekt?

- **A:** $\lambda_e = \lambda_p$, und das Elektron bewegt sich ca. 1836-mal schneller als das Proton ($v_e \approx 1836 \cdot v_p$).
- **B:** $\lambda_e \approx 1836 \cdot \lambda_p$, und beide besitzen dieselbe Geschwindigkeit.
- **C:** $\lambda_p \approx 1836 \cdot \lambda_e$, und das Proton bewegt sich schneller als das Elektron.
- **D:** $\lambda_e = \lambda_p$, und beide Teilchen bewegen sich mit exakt derselben Geschwindigkeit.
- **E:** $\lambda_e \approx \sqrt{1836} \cdot \lambda_p$, und das Elektron besitzt eine kleinere Geschwindigkeit.

**Richtige Antwort:** **A**

**Erklärung:**
1. De-Broglie-Wellenlänge:
Nach der fundamentalen De-Broglie-Beziehung gilt:
$$\lambda = \frac{h}{p}$$
Da der Impuls $p$ für beide Teilchen als identisch vorgegeben ist ($p_e = p_p$), muss auch ihre De-Broglie-Wellenlänge vollkommen identisch sein:
$$\lambda_e = \lambda_p$$

2. Geschwindigkeit:
Wegen $p = m \cdot v$ folgt für die Geschwindigkeit:
$$v = \frac{p}{m}$$
Bei gleichem Impuls ist die Geschwindigkeit umgekehrt proportional zur Masse:
$$\frac{v_e}{v_p} = \frac{m_p}{m_e} \approx 1836 \implies v_e \approx 1836 \cdot v_p$$
Das leichtere Elektron muss sich 1836-mal schneller bewegen, um denselben Impuls wie das schwere Proton aufzuweisen.

Analyse der Falschantworten:
- B und C verletzen die Definition $\lambda = h/p$.
- D ignoriert, dass bei gleicher Geschwindigkeit das Proton wegen $m_p \gg m_e$ einen viel größeren Impuls hätte.
- E bringt fälschlich eine Wurzelbeziehung ein.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Impuls, Proton, Elektron, Geschwindigkeitsvergleich*

---

### Frage 59 (chem-02-set3-q059)
**Thema:** Balmer-Serie — Spezifischer Endzustand & Sichtbarkeit

Welche Hauptquantenzahl $n$ charakterisiert das untere (energieärmere) Energieniveau, auf welches das Elektron beim Wasserstoffatom zurückfällt, wenn eine Spektrallinie der Balmer-Serie emittiert wird?

- **A:** $n = 1$
- **B:** $n = 2$
- **C:** $n = 3$
- **D:** $n = 4$
- **E:** $n = \infty$

**Richtige Antwort:** **B**

**Erklärung:**
Die Spektralserien des Wasserstoffs sind streng über das untere Niveau $n_1$ definiert:
- Lyman-Serie: Übergänge auf $n_1 = 1$ (aus $n_2 \ge 2$) $\rightarrow$ UV-Bereich
- Balmer-Serie: Übergänge auf $n_1 = 2$ (aus $n_2 \ge 3$) $\rightarrow$ Sichtbarer Bereich (VIS)
- Paschen-Serie: Übergänge auf $n_1 = 3$ (aus $n_2 \ge 4$) $\rightarrow$ Nahinfrarot (IR)
- Brackett-Serie: Übergänge auf $n_1 = 4$ (aus $n_2 \ge 5$) $\rightarrow$ Mittleres Infrarot
- Pfund-Serie: Übergänge auf $n_1 = 5$ (aus $n_2 \ge 6$) $\rightarrow$ Fernes Infrarot

Daher ist $n = 2$ die eindeutige Antwort für die Balmer-Serie.

Analyse der Falschantworten:
- A ist Lyman ($n=1$).
- C ist Paschen ($n=3$).
- D ist Brackett ($n=4$).
- E ist der Ionisationszustand ($n=\infty$).

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoff, Balmer-Serie, Quantenzahlen, Grundlagen*

---

### Frage 60 (chem-02-set3-q060)
**Thema:** Photoeffekt — Einfluss der Frequenzverdopplung auf die Bremsspannung

Eine Photozelle mit der Austrittsarbeit $W_A = 1{,}5\,\text{eV}$ wird mit Licht bestrahlt, dessen Photonenenergie $E_1 = h \cdot f_1 = 2{,}5\,\text{eV}$ beträgt. Nun wird die Frequenz der Strahlung verdoppelt ($f_2 = 2 \cdot f_1$). Wie ändert sich die erforderliche Bremsspannung $U_0$ zum Stoppen des Photostroms?

- **A:** $U_0$ verdoppelt sich exakt von $1{,}0\,\text{V}$ auf $2{,}0\,\text{V}$.
- **B:** $U_0$ steigt von $2{,}5\,\text{V}$ auf $5{,}0\,\text{V}$ an.
- **C:** $U_0$ bleibt konstant bei $1{,}0\,\text{V}$, da die Austrittsarbeit gleich bleibt.
- **D:** $U_0$ steigt von $1{,}0\,\text{V}$ auf $3{,}5\,\text{V}$ an (mehr als das Dreifache).
- **E:** $U_0$ sinkt auf $0{,}5\,\text{V}$ ab.

**Richtige Antwort:** **D**

**Erklärung:**
1. Ausgangszustand 1:
- Photonenenergie: $E_1 = 2{,}5\,\text{eV}$
- Kinetische Energie:
$$E_{\text{kin,1}} = E_1 - W_A = 2{,}5\,\text{eV} - 1{,}5\,\text{eV} = 1{,}0\,\text{eV}$$
- Bremsspannung:
$$e \cdot U_{0,1} = 1{,}0\,\text{eV} \implies U_{0,1} = 1{,}0\,\text{V}$$

2. Zustand 2 (Frequenzverdopplung):
- Neue Photonenenergie:
$$E_2 = h \cdot (2 \cdot f_1) = 2 \cdot E_1 = 2 \cdot 2{,}5\,\text{eV} = 5{,}0\,\text{eV}$$
- Neue kinetische Energie:
$$E_{\text{kin,2}} = E_2 - W_A = 5{,}0\,\text{eV} - 1{,}5\,\text{eV} = 3{,}5\,\text{eV}$$
- Neue Bremsspannung:
$$e \cdot U_{0,2} = 3{,}5\,\text{eV} \implies U_{0,2} = 3{,}5\,\text{V}$$

Die Bremsspannung steigt somit von $1{,}0\,\text{V}$ auf $3{,}5\,\text{V}$! Dies demonstriert eindrucksvoll, dass die Bremsspannung wegen des konstanten Subtraktionsglieds $W_A$ nicht proportional zur Frequenz skaliert, sondern überproportional wächst.

Analyse der Falschantworten:
- A unterliegt dem typischen Proportionalitätsirrtum ($1{,}0 \rightarrow 2{,}0$).
- B vergisst den Abzug von $W_A$ bei beiden Rechnungen.
- C ignoriert die Zunahme der kinetischen Energie.
- E behauptet ein Absinken.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Gegenfeldmethode, Bremsspannung, Nichtlineare Skalierung*

---

### Frage 61 (chem-02-set3-q061)
**Thema:** Wasserstoffatom — Absorption vs. Emission und Quantenzustände

Welcher der folgenden quantenmechanischen Elementarprozesse in einem isolierten Wasserstoffatom beschreibt die Absorption eines Photons im ultravioletten Spektralbereich?

- **A:** Übergang von $n = 1$ nach $n = 3$
- **B:** Übergang von $n = 3$ nach $n = 1$
- **C:** Übergang von $n = 2$ nach $n = 4$
- **D:** Übergang von $n = 4$ nach $n = 2$
- **E:** Übergang von $n = 3$ nach $n = 5$

**Richtige Antwort:** **A**

**Erklärung:**
Zwei Kriterien müssen gleichzeitig erfüllt sein:

1. Absorption: Ein Elektron nimmt Energie auf und wird von einem tieferen auf ein höheres Energieniveau angehoben ($n_{\text{Start}} < n_{\text{Ziel}}$). Damit scheiden die Optionen B und D (Emissionen: Herabfallen von höheren Niveaus) sofort aus!
2. Ultravioletter Bereich (Lyman-Serie): Quantenübergänge, die am Grundzustand $n = 1$ beteiligt sind, weisen Energiedifferenzen von $\Delta E \ge 10{,}2\,\text{eV}$ auf ($\lambda \le 121{,}6\,\text{nm}$). Sie liegen ausnahmslos im energiereichen UV-Bereich.

- Für den Übergang $1 \rightarrow 3$ gilt:
$$\Delta E = E_3 - E_1 = -1{,}51\,\text{eV} - (-13{,}6\,\text{eV}) = 12{,}09\,\text{eV}$$
$$\lambda = \frac{1240\,\text{eV}\cdot\text{nm}}{12{,}09\,\text{eV}} \approx 102{,}5\,\text{nm} \quad (\text{UV-Bereich})$$
(Im Vergleich: Übergang C ($2 \rightarrow 4$) ist eine Absorption im sichtbaren Bereich der Balmer-Serie mit $\Delta E = 2{,}55\,\text{eV} \rightarrow \lambda \approx 486\,\text{nm}$; Übergang E liegt im Infrarotbereich der Paschen-Serie).

Analyse der Falschantworten:
- B ist eine UV-Emission.
- C ist eine VIS-Absorption.
- D ist eine VIS-Emission.
- E ist eine IR-Absorption.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Absorption, Emission, Lyman-Serie, Ultraviolett*

---

### Frage 62 (chem-02-set3-q062)
**Thema:** Wellennatur des Lichts — Frequenz- und Periodendauerberechnung im UV-Bereich

Eine bakterizide UV-C-Entkeimungslampe emittiert Licht mit einer Wellenlänge von $\lambda = 250\,\text{nm}$. Welche Frequenz $f$ und welche Periodendauer $T$ besitzt diese elektromagnetische Welle im Vakuum?
(Lichtgeschwindigkeit $c = 3 \cdot 10^8\,\text{m/s}$).

- **A:** $f = 1{,}2 \cdot 10^{15}\,\text{Hz}$ und $T \approx 8{,}33 \cdot 10^{-16}\,\text{s}$
- **B:** $f = 1{,}2 \cdot 10^{14}\,\text{Hz}$ und $T \approx 8{,}33 \cdot 10^{-15}\,\text{s}$
- **C:** $f = 7{,}5 \cdot 10^{14}\,\text{Hz}$ und $T \approx 1{,}33 \cdot 10^{-15}\,\text{s}$
- **D:** $f = 1{,}2 \cdot 10^{15}\,\text{Hz}$ und $T = 1{,}2 \cdot 10^{-15}\,\text{s}$
- **E:** $f = 8{,}33 \cdot 10^{14}\,\text{Hz}$ und $T = 2{,}5 \cdot 10^{-7}\,\text{s}$

**Richtige Antwort:** **A**

**Erklärung:**
1. Frequenz berechnen:
$$c = \lambda \cdot f \implies f = \frac{c}{\lambda} = \frac{3 \cdot 10^8\,\text{m/s}}{250 \cdot 10^{-9}\,\text{m}} = \frac{3 \cdot 10^8}{2{,}5 \cdot 10^{-7}\,\text{m}} = \frac{3}{2{,}5} \cdot 10^{15}\,\text{Hz} = 1{,}2 \cdot 10^{15}\,\text{Hz}$$

2. Periodendauer berechnen:
$$T = \frac{1}{f} = \frac{1}{1{,}2 \cdot 10^{15}\,\text{s}^{-1}} = \frac{1}{1{,}2} \cdot 10^{-15}\,\text{s} \approx 0{,}833 \cdot 10^{-15}\,\text{s} = 8{,}33 \cdot 10^{-16}\,\text{s}$$

Analyse der Falschantworten:
- B besitzt einen Zehnerpotenzfehler um den Faktor 10 bei Frequenz und Periodendauer.
- C berechnet $f$ mit $c / 400\,\text{nm}$.
- D setzt $T$ gleich dem Zahlenwert der Frequenz.
- E setzt für $T$ die Wellenlänge in Metern ein.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Frequenz, Periodendauer, UV-Strahlung, Kopfrechnen*

---

### Frage 63 (chem-02-set3-q063)
**Thema:** Wasserstoffspektrum — Berechnung der H-beta-Spektrallinie

Die blaugrüne $\text{H}_\beta$-Linie der Balmer-Serie entsteht durch den Übergang eines Elektrons vom Zustand $n = 4$ ($E_4 = -0{,}85\,\text{eV}$) in den Zustand $n = 2$ ($E_2 = -3{,}40\,\text{eV}$).
Welche Wellenlänge $\lambda$ besitzt das dabei emittierte Photon?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** ca. $365\,\text{nm}$
- **B:** ca. $410\,\text{nm}$
- **C:** ca. $486\,\text{nm}$
- **D:** ca. $656\,\text{nm}$
- **E:** ca. $1240\,\text{nm}$

**Richtige Antwort:** **C**

**Erklärung:**
1. Energiedifferenz des Quantensprungs berechnen:
$$\Delta E = E_4 - E_2 = -0{,}85\,\text{eV} - (-3{,}40\,\text{eV}) = -0{,}85\,\text{eV} + 3{,}40\,\text{eV} = 2{,}55\,\text{eV}$$

2. Wellenlänge über $\lambda = \frac{hc}{\Delta E}$ berechnen:
$$\lambda \approx \frac{1240\,\text{eV}\cdot\text{nm}}{2{,}55\,\text{eV}}$$
Kopfrechnung:
$2{,}55 \cdot 500 = 1275$; $2{,}55 \cdot 480 = 1224$.
Der Wert liegt exakt bei rund $486\,\text{nm}$ ($486{,}3\,\text{nm}$).
Dies entspricht der charakteristischen blaugrünen Farbe der $\text{H}_\beta$-Linie im sichtbaren Wasserstoff-Emissionsspektrum.

Analyse der Falschantworten:
- A ($365\,\text{nm}$) ist die Balmer-Seriengrenze ($n = \infty \rightarrow 2$).
- B ($410\,\text{nm}$) ist die violette $\text{H}_\delta$-Linie ($6 \rightarrow 2$).
- D ($656\,\text{nm}$) ist die rote $\text{H}_\alpha$-Linie ($3 \rightarrow 2$).
- E entspräche $\Delta E = 1\,\text{eV}$.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Balmer-Serie, H-beta, Spektrallinien, Kopfrechnen*

---

### Frage 64 (chem-02-set3-q064)
**Thema:** Photoeffekt — Vergleich der kinetischen Energien an zwei Metallen

Zwei Metallproben, Zink ($W_A(\text{Zn}) = 4{,}3\,\text{eV}$) und Aluminium ($W_A(\text{Al}) = 4{,}0\,\text{eV}$), werden im Hochvakuum mit identischer harter UV-Strahlung der Photonenenergie $E_{\text{Photon}} = 6{,}0\,\text{eV}$ bestrahlt.
In welchem Verhältnis stehen die maximalen kinetischen Energien der aus Aluminium bzw. Zink austretenden Elektronen $\frac{E_{\text{kin,max}}(\text{Al})}{E_{\text{kin,max}}(\text{Zn})}$?

- **A:** $1{,}00 : 1{,}00$
- **B:** $1{,}075 : 1{,}00$
- **C:** $1{,}18 : 1{,}00$ (entspricht $2{,}0 : 1{,}7$)
- **D:** $2{,}00 : 1{,}00$
- **E:** $4{,}30 : 4{,}00$

**Richtige Antwort:** **C**

**Erklärung:**
1. Kinetische Energien berechnen:
- Aluminium:
$$E_{\text{kin,max}}(\text{Al}) = E_{\text{Photon}} - W_A(\text{Al}) = 6{,}0\,\text{eV} - 4{,}0\,\text{eV} = 2{,}0\,\text{eV}$$
- Zink:
$$E_{\text{kin,max}}(\text{Zn}) = E_{\text{Photon}} - W_A(\text{Zn}) = 6{,}0\,\text{eV} - 4{,}3\,\text{eV} = 1{,}7\,\text{eV}$$

2. Verhältnis bilden:
$$\frac{E_{\text{kin,max}}(\text{Al})}{E_{\text{kin,max}}(\text{Zn})} = \frac{2{,}0\,\text{eV}}{1{,}7\,\text{eV}} = \frac{20}{17} \approx 1{,}176 \approx 1{,}18$$
Die Elektronen aus Aluminium besitzen im Mittel rund $18\,\%$ mehr kinetische Energie als die aus Zink.

Analyse der Falschantworten:
- A nimmt gleiche Energien an.
- B bildet das Verhältnis der Austrittsarbeiten $4{,}3 / 4{,}0 = 1{,}075$ (klassische Falle!).
- D nimmt an, dass $E_{\text{kin}}$ doppelt so groß sei.
- E ist das umgekehrte Verhältnis der Austrittsarbeiten.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Austrittsarbeit, Zink, Aluminium, Verhältnisrechnung*

---

### Frage 65 (chem-02-set3-q065)
**Thema:** Unschärferelation — Vergleich von Proton und Elektron bei gleicher Geschwindigkeit

Ein Proton und ein Elektron besitzen im Labor die exakt gleiche Geschwindigkeitsunschärfe $\Delta v_p = \Delta v_e$.
Welche Beziehung gilt unter diesen Bedingungen für die minimale Ortsunschärfe des Protons ($\Delta x_p$) im Vergleich zur minimalen Ortsunschärfe des Elektrons ($\Delta x_e$)?
(Massenverhältnis: $m_p \approx 1836 \cdot m_e$).

- **A:** $\Delta x_p \approx 1836 \cdot \Delta x_e$
- **B:** $\Delta x_p \approx \Delta x_e$
- **C:** $\Delta x_p \approx \frac{\Delta x_e}{\sqrt{1836}}$
- **D:** $\Delta x_p \approx 1836^2 \cdot \Delta x_e$
- **E:** $\Delta x_p \approx \frac{\Delta x_e}{1836}$

**Richtige Antwort:** **E**

**Erklärung:**
Nach der Heisenbergschen Unschärferelation gilt für Ort und Impuls:
$$\Delta x \cdot m \cdot \Delta v \ge \frac{h}{4\pi} \implies \Delta x_{\text{min}} = \frac{h}{4\pi \cdot m \cdot \Delta v}$$
Ist die Geschwindigkeitsunschärfe $\Delta v$ für beide Teilchen identisch, gilt:
$$\Delta x \propto \frac{1}{m}$$
Das Verhältnis der Ortsunschärfen lautet somit:
$$\frac{\Delta x_p}{\Delta x_e} = \frac{m_e}{m_p} = \frac{m_e}{1836 \cdot m_e} = \frac{1}{1836} \implies \Delta x_p \approx \frac{\Delta x_e}{1836}$$
Das rund 1836-mal schwerere Proton lässt sich bei gleicher Geschwindigkeitsunschärfe um den Faktor 1836 schärfer im Raum lokalisieren als das leichte Elektron. Genau deshalb ist der Atomkern ($10^{-15}\,\text{m}$) um Zehnerpotenzen kompakter als die ausgedehnte Elektronenhülle ($10^{-10}\,\text{m}$).

Analyse der Falschantworten:
- A nimmt fälschlicherweise direkte Proportionalität zur Masse an ($1836 \cdot \Delta x_e$).
- B verwechselt Geschwindigkeitsunschärfe mit Impulsunschärfe (wäre $\Delta p$ gleich, wäre $\Delta x$ gleich!).
- C setzt fälschlicherweise eine Wurzelbeziehung zur Masse an ($\Delta x_e / \sqrt{1836}$).
- D setzt fälschlicherweise eine quadratische Massenabhängigkeit an ($1836^2 \cdot \Delta x_e$).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Ortsunschärfe, Proton, Elektron, Atomaufbau*

---

### Frage 66 (chem-02-set3-q066)
**Thema:** De-Broglie-Wellenlänge — Verknüpfung mit der kinetischen Energie

Die De-Broglie-Wellenlänge eines freien Elektrons beträgt bei einer bestimmten Beschleunigungsspannung $\lambda_1 = 1{,}0\,\text{nm}$.
Die kinetische Energie des Elektrons wird nun durch Erhöhung der Spannung auf das Neunfache gesteigert ($E_{\text{kin,2}} = 9 \cdot E_{\text{kin,1}}$).
Wie groß ist die resultierende De-Broglie-Wellenlänge $\lambda_2$?

- **A:** $\lambda_2 = 9{,}0\,\text{nm}$
- **B:** $\lambda_2 = 3{,}0\,\text{nm}$
- **C:** $\lambda_2 \approx 0{,}11\,\text{nm}$
- **D:** $\lambda_2 \approx 0{,}33\,\text{nm}$
- **E:** $\lambda_2 = 1{,}0\,\text{nm}$

**Richtige Antwort:** **D**

**Erklärung:**
Für die kinetische Energie gilt nicht-relativistisch:
$$E_{\text{kin}} = \frac{p^2}{2m} \implies p = \sqrt{2m \cdot E_{\text{kin}}}$$
Eingesetzt in die De-Broglie-Formel:
$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m \cdot E_{\text{kin}}}} \implies \lambda \propto \frac{1}{\sqrt{E_{\text{kin}}}}$$
Wird die kinetische Energie um den Faktor 9 vervielfacht ($E_{\text{kin,2}} = 9 \cdot E_{\text{kin,1}}$):
$$\lambda_2 = \frac{h}{\sqrt{2m \cdot 9 \cdot E_{\text{kin,1}}}} = \frac{h}{3 \cdot \sqrt{2m \cdot E_{\text{kin,1}}}} = \frac{\lambda_1}{3}$$
Mit $\lambda_1 = 1{,}0\,\text{nm}$:
$$\lambda_2 = \frac{1{,}0\,\text{nm}}{3} \approx 0{,}33\,\text{nm}$$

Analyse der Falschantworten:
- A und B nehmen an, dass $\lambda$ mit der Energie wächst.
- C vergisst die Quadratwurzel und teilt fälschlich linear durch 9 ($1 / 9 \approx 0{,}11\,\text{nm}$).
- E nimmt Energieunabhängigkeit an.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Kinetische Energie, Wurzelbeziehung, Kopfrechnen*

---

### Frage 67 (chem-02-set3-q067)
**Thema:** Photoeffekt — Verdopplung der Bestrahlungsstärke (Intensität)

Eine Kaliumplatte wird mit monochromatischem UV-Licht der Photonenenergie $E_{\text{Photon}} = 4{,}0\,\text{eV}$ bestrahlt ($W_A = 2{,}2\,\text{eV}$). Pro Sekunde treten $10^{12}$ Elektronen aus, die eine maximale kinetische Energie von $E_{\text{kin,max}} = 1{,}8\,\text{eV}$ aufweisen.
Nun wird die Lichtintensität verdoppelt, während die Wellenlänge exakt konstant gehalten wird. Welche Aussage beschreibt das neue Messergebnis zutreffend?

- **A:** Es werden weiterhin $10^{12}$ Elektronen pro Sekunde freigesetzt, aber ihre maximale kinetische Energie steigt auf $3{,}6\,\text{eV}$.
- **B:** Es werden $2 \cdot 10^{12}$ Elektronen pro Sekunde freigesetzt, und ihre maximale kinetische Energie bleibt unverändert bei $1{,}8\,\text{eV}$.
- **C:** Sowohl die Anzahl der emittierten Elektronen pro Sekunde ($2 \cdot 10^{12}$) als auch ihre maximale kinetische Energie ($3{,}6\,\text{eV}$) verdoppeln sich.
- **D:** Es werden keine Elektronen mehr emittiert, da die Platte elektrostatisch gesättigt ist.
- **E:** Die maximale kinetische Energie steigt auf $\sqrt{2} \cdot 1{,}8\,\text{eV} \approx 2{,}55\,\text{eV}$.

**Richtige Antwort:** **B**

**Erklärung:**
Dies ist die zentrale Differenzierung des Einsteinschen Photoeffekts:

1. Intensität bei konstanter Wellenlänge: Höhere Intensität bedeutet eine größere Anzahl an Photonen, die pro Zeit- und Flächeneinheit auf die Metalloberfläche treffen. Da die Wechselwirkung strikt 1-zu-1 erfolgt (1 Photon löst 1 Elektron), verdoppelt sich bei Verdopplung der Intensität die Anzahl der freigesetzten Elektronen pro Sekunde: von $10^{12}$ auf $2 \cdot 10^{12}\,\text{Elektronen/s}$ (der Photostrom verdoppelt sich).
2. Kinetische Energie: Nach $E_{\text{kin,max}} = h \cdot f - W_A$ hängt die Energie des einzelnen austretenden Elektrons ausschließlich von der Frequenz des einzelnen einfallenden Photons und der Austrittsarbeit ab. Da die Frequenz konstant gehalten wird, bleibt die maximale kinetische Energie strikt unverändert bei $1{,}8\,\text{eV}$!

Analyse der Falschantworten:
- A, C und E unterliegen dem klassischen Irrtum der Wellenoptik, dass eine intensivere Lichtwelle den einzelnen Elektronen mehr Stoßenergie verleiht.
- D ist physikalisch abwegig.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Intensität, Photonenrate, Kinetische Energie, Einsteinsches Postulat*

---

### Frage 68 (chem-02-set3-q068)
**Thema:** Wasserstoffatom — Ionisierungsenergie aus einem angeregten Zustand

Um ein Wasserstoffatom aus seinem ersten angeregten Zustand ($n = 2$, $E_2 = -3{,}4\,\text{eV}$) vollständig zu ionisieren ($n \rightarrow \infty$, $E_\infty = 0\,\text{eV}$), wird ein einzelnes Photon absorbiert.
Welche maximale Wellenlänge $\lambda_{\text{max}}$ darf dieses Photon besitzen?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** ca. $91\,\text{nm}$
- **B:** ca. $122\,\text{nm}$
- **C:** ca. $820\,\text{nm}$
- **D:** ca. $656\,\text{nm}$
- **E:** ca. $365\,\text{nm}$

**Richtige Antwort:** **E**

**Erklärung:**
1. Erforderliche Ionisierungsenergie berechnen:
$$\Delta E = E_\infty - E_2 = 0\,\text{eV} - (-3{,}4\,\text{eV}) = 3{,}4\,\text{eV}$$

2. Grenzwellenlänge ermitteln:
$$\lambda_{\text{max}} = \frac{h \cdot c}{\Delta E} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{3{,}4\,\text{eV}}$$
Kopfrechnung:
$3{,}4 \cdot 300 = 1020$; $3{,}4 \cdot 400 = 1360$; $3{,}4 \cdot 365 \approx 1241$.
Der Wert liegt exakt bei rund $365\,\text{nm}$ (dies entspricht der Seriengrenze der Balmer-Serie im nahen UV-A).

Analyse der Falschantworten:
- A ($91\,\text{nm}$) ist die Ionisierungs-Grenzwellenlänge aus dem Grundzustand $n = 1$ ($\Delta E = 13{,}6\,\text{eV}$).
- B ($122\,\text{nm}$) entspricht dem Übergang $1 \rightarrow 2$ ($\Delta E = 10{,}2\,\text{eV}$).
- C ($820\,\text{nm}$) ist die Seriengrenze der Paschen-Serie ($n = 3$, $\Delta E = 1{,}51\,\text{eV}$).
- D ($656\,\text{nm}$) ist die $\text{H}_\alpha$-Linie ($3 \rightarrow 2$, $\Delta E = 1{,}89\,\text{eV}$).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Ionisierungsenergie, Balmer-Serie, Seriengrenze, Kopfrechnen*

---

### Frage 69 (chem-02-set3-q069)
**Thema:** Elektromagnetisches Spektrum — Spektralfarben und biologische Wirkung

Welche der folgenden Spektralfarben des sichtbaren Lichts transportiert pro einzelnem Lichtquant (Photon) die größte Energie und besitzt im Vakuum die höchste Frequenz?

- **A:** Rot ($\lambda \approx 700\,\text{nm}$)
- **B:** Gelb ($\lambda \approx 580\,\text{nm}$)
- **C:** Grün ($\lambda \approx 530\,\text{nm}$)
- **D:** Blau ($\lambda \approx 460\,\text{nm}$)
- **E:** Violett ($\lambda \approx 400\,\text{nm}$)

**Richtige Antwort:** **E**

**Erklärung:**
Innerhalb des sichtbaren Spektrums ($380 - 780\,\text{nm}$) nimmt die Wellenlänge von Violett nach Rot zu:
$$\lambda_{\text{Violett}} < \lambda_{\text{Blau}} < \lambda_{\text{Grün}} < \lambda_{\text{Gelb}} < \lambda_{\text{Rot}}$$
Da $c = \lambda \cdot f \implies f = \frac{c}{\lambda}$ und $E = h \cdot f = \frac{h \cdot c}{\lambda}$ gilt, verhalten sich Frequenz und Photonenenergie streng umgekehrt proportional zur Wellenlänge.
Violettes Licht ($\lambda \approx 400\,\text{nm}$) besitzt die kürzeste Wellenlänge und weist daher die höchste Frequenz ($f \approx 7{,}5 \cdot 10^{14}\,\text{Hz}$) sowie die höchste Photonenenergie ($E \approx 3{,}1\,\text{eV}$) im sichtbaren Bereich auf.

Analyse der Falschantworten:
- A (Rot) ist das energieärmste sichtbare Licht ($E \approx 1{,}8\,\text{eV}$).
- B, C und D liegen energetisch zwischen Rot und Violett.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Sichtbares Licht, Spektralfarben, Photonenenergie, Frequenz*

---

### Frage 70 (chem-02-set3-q070)
**Thema:** Proportionalitätslogik — Verknüpfung von Photonenenergie und Frequenz

Photon A besitzt eine Energie von $E_A = 12\,\text{eV}$. Photon B besitzt eine Energie von $E_B = 4\,\text{eV}$. In welchem mathematischen Verhältnis stehen die Frequenzen $\frac{f_A}{f_B}$ und die Wellenlängen $\frac{\lambda_A}{\lambda_B}$ dieser beiden Photonen zueinander?

- **A:** $\frac{f_A}{f_B} = 3 : 1$ und $\frac{\lambda_A}{\lambda_B} = 3 : 1$
- **B:** $\frac{f_A}{f_B} = 1 : 3$ und $\frac{\lambda_A}{\lambda_B} = 3 : 1$
- **C:** $\frac{f_A}{f_B} = 3 : 1$ und $\frac{\lambda_A}{\lambda_B} = 1 : 3$
- **D:** $\frac{f_A}{f_B} = 9 : 1$ und $\frac{\lambda_A}{\lambda_B} = 1 : 9$
- **E:** $\frac{f_A}{f_B} = 1 : 1$ und $\frac{\lambda_A}{\lambda_B} = 1 : 3$

**Richtige Antwort:** **C**

**Erklärung:**
Die Beziehungen lauten:

1. Frequenzverhältnis:
$$E = h \cdot f \implies f \propto E \implies \frac{f_A}{f_B} = \frac{E_A}{E_B} = \frac{12\,\text{eV}}{4\,\text{eV}} = \frac{3}{1} = 3 : 1$$

2. Wellenlängenverhältnis:
$$E = \frac{h \cdot c}{\lambda} \implies \lambda \propto \frac{1}{E} \implies \frac{\lambda_A}{\lambda_B} = \frac{E_B}{E_A} = \frac{4\,\text{eV}}{12\,\text{eV}} = \frac{1}{3} = 1 : 3$$
Photon A hat die dreifache Frequenz, aber nur ein Drittel der Wellenlänge von Photon B.

Analyse der Falschantworten:
- A nimmt fälschlicherweise an, dass auch die Wellenlänge proportional zur Energie ist.
- B kehrt das Frequenzverhältnis um.
- D quadriert die Verhältnisse.
- E behauptet gleiche Frequenzen.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Proportionalität, Frequenz, Wellenlänge, Photonenenergie*

---

### Frage 71 (chem-02-set3-q071)
**Thema:** Grenzen klassischer Bahnen & Orbitalbegriff

Warum kann ein Elektron im Atom nicht durch eine klassische Bahn beschrieben werden, und welches Konzept verwendet die Quantenmechanik stattdessen zur Beschreibung seines Aufenthaltsorts?

- **A:** Das Planetenmodell versagt, weil Elektronen keine Ruhemasse besitzen; ihr Ort wird durch starre Kristallachsen beschrieben.
- **B:** Weil eine exakte gleichzeitige Bestimmung von Ort und Impuls durch die Heisenbergsche Unschärferelation ($\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$) verboten ist; stattdessen beschreibt man den Aufenthaltsort durch eine räumliche Wahrscheinlichkeitsdichte (Orbital).
- **C:** Weil Elektronen sich permanent mit Lichtgeschwindigkeit bewegen und daher kontinuierlich im gesamten Raum verschmiert sind.
- **D:** Weil die elektrostatische Coulomb-Kraft im Mikrokosmos durch die Gravitation der Nukleonen vollständig aufgehoben wird.
- **E:** Weil Elektronen nur dann einen messbaren Ort besitzen, wenn sie durch äußere Röntgenstrahlung angeregt werden.

**Richtige Antwort:** **B**

**Erklärung:**
Im klassischen Planetenmodell (Rutherford/Bohr) müsste sich das Elektron auf einer wohldefinierten Bahnkurve (Trajektorie) bewegen, sodass zu jedem Zeitpunkt sowohl Ort als auch Impuls exakt vorliegen.
Dies verbietet die Heisenbergsche Unschärferelation ($\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$) fundamental: Da Ort und Impuls eines subatomaren Teilchens prinzipiell nicht gleichzeitig beliebig genau bestimmt werden können, bricht das Konzept einer klassischen Bahn zusammen.
In der Quantenmechanik wird die feste Bahn daher durch eine dreidimensionale Aufenthaltswahrscheinlichkeitsdichte ersetzt: Raumbereiche, in denen sich das Elektron mit hoher Wahrscheinlichkeit aufhält, nennt man Orbitale (Option B).

Analyse der Falschantworten:
- A ist falsch, da Elektronen eine Ruhemasse von $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$ tragen.
- C ist falsch, da sich gebundene Elektronen im Atom mit nicht-relativistischen Geschwindigkeiten ($v \ll c$) bewegen.
- D ist physikalisch falsch; die Coulomb-Kraft ist im Atom viele Größenordnungen stärker als die vernachlässigbare Gravitation.
- E ist eine absurde Fehlvorstellung; das Elektron existiert im Atom ununterbrochen im stationären Zustand.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Orbital, Aufenthaltswahrscheinlichkeit, Wellenfunktion, Grenzen klassischer Bahnen*

---

### Frage 72 (chem-02-set3-q072)
**Thema:** Photoeffekt — Berechnung der maximalen Elektronengeschwindigkeit

Monochromatisches Licht löst an einer Metalloberfläche Photoelektronen aus, deren maximale kinetische Energie $E_{\text{kin,max}} = 1{,}82\,\text{eV}$ beträgt. Welche maximale Geschwindigkeit $v_{\text{max}}$ besitzen diese austretenden Elektronen näherungsweise?
(Konstanten: $1\,\text{eV} \approx 1{,}6 \cdot 10^{-19}\,\text{J}$; Masse des Elektrons $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$).

- **A:** ca. $800\,\text{m/s}$
- **B:** ca. $6{,}4 \cdot 10^{11}\,\text{m/s}$
- **C:** ca. $3 \cdot 10^8\,\text{m/s}$
- **D:** ca. $8 \cdot 10^5\,\text{m/s}$ ($800\,\text{km/s}$)
- **E:** ca. $1{,}6 \cdot 10^4\,\text{m/s}$

**Richtige Antwort:** **D**

**Erklärung:**
1. Kinetische Energie in Joule umrechnen:
$$E_{\text{kin}} = 1{,}82\,\text{eV} \cdot (1{,}6 \cdot 10^{-19}\,\text{J/eV}) \approx 2{,}912 \cdot 10^{-19}\,\text{J}$$

2. Nicht-relativistische kinetische Energie nach der Geschwindigkeit umstellen:
$$E_{\text{kin}} = \frac{1}{2} m_e \cdot v^2 \implies v^2 = \frac{2 \cdot E_{\text{kin}}}{m_e}$$
Werte einsetzen:
$$v^2 = \frac{2 \cdot 2{,}912 \cdot 10^{-19}\,\text{J}}{9{,}1 \cdot 10^{-31}\,\text{kg}} = \frac{5{,}824 \cdot 10^{-19}}{9{,}1 \cdot 10^{-31}} = \frac{5{,}824}{9{,}1} \cdot 10^{12} = 0{,}64 \cdot 10^{12}\,\text{m}^2/\text{s}^2 = 64 \cdot 10^{10}\,\text{m}^2/\text{s}^2$$

3. Quadratwurzel im Kopf ziehen:
$$v = \sqrt{64 \cdot 10^{10}\,\text{m}^2/\text{s}^2} = 8 \cdot 10^5\,\text{m/s} = 800\,\text{km/s}$$
Die Zahlenwerte kürzen sich glatt zu exakt $8 \cdot 10^5\,\text{m/s}$. Da $v \ll c$ ($3 \cdot 10^8\,\text{m/s}$) ist, war der nicht-relativistische Ansatz vollkommen gerechtfertigt.

Analyse der Falschantworten:
- A verrechnet sich bei den Zehnerpotenzen ($10^2$ statt $10^5$).
- B vergisst das Ziehen der Quadratwurzel aus $v^2 \approx 6{,}4 \cdot 10^{11}$.
- C ist die Vakuumlichtgeschwindigkeit.
- E verrechnet sich beim Radizieren.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Kinetische Energie, Elektronengeschwindigkeit, Kopfrechnen*

---

### Frage 73 (chem-02-set3-q073)
**Thema:** Spektralserien des Wasserstoffs — Energiedifferenz der Paschen-Serie

Im Infrarotspektrum des Wasserstoffatoms wird die erste Spektrallinie der Paschen-Serie beobachtet, die durch den Übergang von $n = 4$ nach $n = 3$ entsteht.
Gegeben sind die Bohrschen Energieniveaus: $E_3 = -1{,}51\,\text{eV}$ und $E_4 = -0{,}85\,\text{eV}$.
Welche Energie $\Delta E$ und welche ungefähre Wellenlänge $\lambda$ besitzt das emittierte Infrarotphoton?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $\Delta E = 0{,}66\,\text{eV}$ und $\lambda \approx 1880\,\text{nm}$
- **B:** $\Delta E = 2{,}36\,\text{eV}$ und $\lambda \approx 525\,\text{nm}$
- **C:** $\Delta E = 0{,}66\,\text{eV}$ und $\lambda \approx 660\,\text{nm}$
- **D:** $\Delta E = 1{,}51\,\text{eV}$ und $\lambda \approx 820\,\text{nm}$
- **E:** $\Delta E = 0{,}85\,\text{eV}$ und $\lambda \approx 1460\,\text{nm}$

**Richtige Antwort:** **A**

**Erklärung:**
1. Energiedifferenz des Quantensprungs berechnen:
$$\Delta E = E_4 - E_3 = -0{,}85\,\text{eV} - (-1{,}51\,\text{eV}) = -0{,}85\,\text{eV} + 1{,}51\,\text{eV} = 0{,}66\,\text{eV}$$

2. Wellenlänge berechnen:
$$\lambda = \frac{h \cdot c}{\Delta E} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{0{,}66\,\text{eV}} = \frac{1240}{\frac{2}{3}}\,\text{nm} = 1240 \cdot 1{,}5\,\text{nm} = 1860\,\text{nm} \approx 1880\,\text{nm}$$
Diese Wellenlänge ($1{,}88\,\mu\text{m}$) liegt tief im Infrarotbereich (IR), wie es für alle Linien der Paschen-Serie charakteristisch ist.

Analyse der Falschantworten:
- B addiert die Beträge der beiden Niveaus ($1{,}51 + 0{,}85 = 2{,}36\,\text{eV}$).
- C berechnet die Energie zwar richtig, ordnet ihr aber fälschlich eine sichtbare Wellenlänge zu ($1240 / 0{,}66 \neq 660$).
- D setzt das Energieniveau von $E_3$ an.
- E setzt das Energieniveau von $E_4$ an.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Paschen-Serie, Infrarot, Spektrallinien, Kopfrechnen*

---

### Frage 74 (chem-02-set3-q074)
**Thema:** Transversalwellen — Orthogonalität der Feldvektoren elektromagnetischer Wellen

Elektromagnetische Strahlung (z. B. sichtbares Licht oder UV-Wellen) breitet sich im Vakuum als Transversalwelle aus. Welche Aussage über die Schwingungsrichtung des elektrischen Feldes $\vec{E}$, des magnetischen Feldes $\vec{B}$ und der Ausbreitungsrichtung $\vec{c}$ trifft uneingeschränkt zu?

- **A:** Das elektrische Feld $\vec{E}$ schwingt parallel zur Ausbreitungsrichtung $\vec{c}$, während das magnetische Feld $\vec{B}$ senkrecht auf beiden steht.
- **B:** $\vec{E}$, $\vec{B}$ und $\vec{c}$ stehen paarweise senkrecht aufeinander ($\vec{E} \perp \vec{B} \perp \vec{c}$) und schwingen im freien Raum gleichphasig.
- **C:** $\vec{E}$ und $\vec{B}$ weisen stets in dieselbe Raumrichtung und rotieren gemeinsam um $\vec{c}$.
- **D:** Das Magnetfeld eilt dem elektrischen Feld im Vakuum stets um eine Phasenverschiebung von $90^\circ$ voraus.
- **E:** Nur bei künstlich polarisiertem Licht steht $\vec{E}$ senkrecht auf $\vec{c}$; bei natürlichem Licht schwingt $\vec{E}$ rein longitudinal.

**Richtige Antwort:** **B**

**Erklärung:**
Aus den fundamentalen Maxwell-Gleichungen der Elektrodynamik folgt direkt für eine ebene elektromagnetische Welle im Vakuum:

1. Transversalität: Weder das elektrische Feld noch das magnetische Feld besitzen Komponenten in Ausbreitungsrichtung ($\vec{E} \cdot \vec{c} = 0$ und $\vec{B} \cdot \vec{c} = 0$).
2. Orthogonalität: Die Vektoren $\vec{E}$, $\vec{B}$ und der Wellenvektor $\vec{c}$ bilden zu jedem Zeitpunkt ein orthogonales Rechtssystem ($\vec{E} \perp \vec{B} \perp \vec{c}$).
3. Phasenlage im Vakuum: Beide Felder erreichen ihre Maxima und Minima am selben Raumpunkt zur selben Zeit; sie schwingen im freien Raum exakt gleichphasig.

Analyse der Falschantworten:
- A beschreibt eine Longitudinalwelle.
- C verneint die Orthogonalität zwischen $\vec{E}$ und $\vec{B}$.
- D beschreibt stehende Wellen im Hohlraumresonator, nicht die freie Welle.
- E verkennt, dass auch unpolarisiertes Licht rein transversal ist (die Polarisationsebene fluktuiert lediglich statistisch).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Transversalwelle, Maxwell, Vektorfelder, Orthogonalität*

---

### Frage 75 (chem-02-set3-q075)
**Thema:** Umfassende Fehlerdiagnose — Quantenmechanische Konzepte im Mikrokosmos

Ein Student fasst seine Lernnotizen für den MedAT-BMS im Fach Chemie zum Thema „Mikrokosmos“ zusammen. Welche der folgenden fünf Aussagen enthält einen gravierenden physikalisch-chemischen Denkfehler?

- **A:** Bei der Interferenz von Photonen am Doppelspalt interferiert jedes einzelne Photon im quantenmechanischen Sinne mit sich selbst; die Welle beschreibt die Wahrscheinlichkeitsamplitude des Nachweises.
- **B:** Die De-Broglie-Wellenlänge eines Teilchens sinkt mit wachsender Geschwindigkeit und wachsender Masse.
- **C:** Die maximale kinetische Energie von Photoelektronen beim äußeren Photoeffekt ist streng proportional zur Intensität des eingestrahlten Lichts, da intensiveres Licht stärkere elektrische Wechselfelder erzeugt.
- **D:** Die Heisenbergsche Unschärferelation verbietet die exakte gleichzeitige Bestimmbarkeit von Ort und Impuls eines Elektrons und erzwingt das dreidimensionale Orbitalmodell der Atomhülle.
- **E:** Ein Photon im Vakuum besitzt eine Ruhemasse von null, trägt jedoch einen relativistischen Impuls von $p = \frac{h}{\lambda}$, wodurch es Strahlungsdruck ausüben kann.

**Richtige Antwort:** **C**

**Erklärung:**
Aussage C enthält den klassischen, fundamentalen Irrglauben der vorkuantenphysikalischen Wellenoptik:
Beim Photoelektrischen Effekt hängt die maximale kinetische Energie $E_{\text{kin,max}}$ der Elektronen ausschließlich von der Frequenz $f$ (bzw. Wellenlänge $\lambda$) des Lichts und der materialspezifischen Austrittsarbeit $W_A$ ab:
$$E_{\text{kin,max}} = h \cdot f - W_A$$
Die Intensität des Lichts bestimmt lediglich die Anzahl der Photonen pro Zeiteinheit und Fläche und steuert damit ausschließlich die Anzahl der pro Zeiteinheit emittierten Elektronen (den Photostrom), lässt die kinetische Energie des einzelnen Elektrons jedoch vollkommen unberührt!

Die Aussagen A, B, D und E formulieren fundamentale, uneingeschränkt korrekte Grundprinzipien der modernen Quantenchemie und Physik.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Fehleranalyse, Photoeffekt, Intensität, Frequenz, De-Broglie, Unschärferelation*

---


## 📚 Set 4: Timed / Exam Simulation (Photonenenergie, Photoeffekt, EM-Spektrum, De-Broglie & Wasserstoffatom)

### Frage 76 (chem-02-set4-q076)
**Thema:** Schnelle Photonenenergie-Berechnung mit dem MedAT-Kopfrechentrick

Ein Halbleiterlaser emittiert monochromatisches Licht der Wellenlänge $\lambda = 620\,\text{nm}$. Welche Energie besitzt ein einzelnes Photon dieser Strahlung in Elektronenvolt ($\text{eV}$)?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $2{,}0\,\text{eV}$
- **B:** $1{,}24\,\text{eV}$
- **C:** $0{,}5\,\text{eV}$
- **D:** $3{,}1\,\text{eV}$
- **E:** $4{,}0\,\text{eV}$

**Richtige Antwort:** **A**

**Erklärung:**
Mit der MedAT-Standardformel $E = \frac{h \cdot c}{\lambda}$ und dem Kopfrechenwert $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$ gilt:
$$E = \frac{1240\,\text{eV}\cdot\text{nm}}{620\,\text{nm}} = 2{,}0\,\text{eV}$$
(Kopfrechnung: $1240 / 620 = 2$).

**Analyse der Falschantworten:**
- **B** teilt $1240 / 1000 = 1{,}24\,\text{eV}$.
- **C** rechnet fälschlich reziprok $620 / 1240 = 0{,}5\,\text{eV}$.
- **D** entspricht blauem bzw. violettem Licht ($\lambda = 400\,\text{nm}$).
- **E** entspricht UV-Strahlung ($\lambda = 310\,\text{nm}$).

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Photonenenergie, Kopfrechentrick, Schnellrechnung*

---

### Frage 77 (chem-02-set4-q077)
**Thema:** Photoeffekt — Schwellenfalle bei $f < f_0$

Eine Metallplatte mit der Grenzfrequenz $f_0$ wird mit monochromatischem Licht bestrahlt, dessen Frequenz kleiner als die Grenzfrequenz ist ($f < f_0$). Nun wird die Intensität (Bestrahlungsstärke) des Lichts verzehnfacht. Welche Folge hat dies für die Emission von Photoelektronen?

- **A:** Es werden sofort zehnmal so viele Photoelektronen freigesetzt wie zuvor.
- **B:** Die maximale kinetische Energie der austretenden Elektronen verzehnfacht sich.
- **C:** Es werden weiterhin überhaupt keine Photoelektronen freigesetzt.
- **D:** Nach einer kurzen Verzögerungszeit setzt ein schwacher Photostrom ein.
- **E:** Die Austrittsarbeit des Metalls sinkt auf ein Zehntel ihres ursprünglichen Werts ab.

**Richtige Antwort:** **C**

**Erklärung:**
Nach Einsteins Lichtquantenhypothese erfolgt die Wechselwirkung streng als 1-zu-1-Stoß zwischen jeweils genau einem Photon und genau einem Elektron.
Gilt $f < f_0$, ist die Energie des einzelnen Photons kleiner als die materialspezifische Austrittsarbeit ($h \cdot f < W_A$). Eine Verzehnfachung der Intensität erhöht lediglich die Photonenanzahl pro Sekunde, ändert jedoch an der Energie des einzelnen Photons nichts. Da kein Photon die Energieschwelle überwinden kann, wird kein einziges Elektron emittiert.

**Analyse der Falschantworten:**
- **A** und **B** basieren auf der klassischen Wellenvorstellung einer kontinuierlichen Energieakkumulation.
- **D** ignoriert die verzögerungsfreie Natur von Quantensprüngen (sofortige Emission oder gar keine).
- **E** behauptet fälschlich eine Veränderung der Materialkonstante $W_A$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Grenzfrequenz, Intensitätsfalle, Schwellenwert*

---

### Frage 78 (chem-02-set4-q078)
**Thema:** Elektromagnetisches Spektrum — Kürzeste Wellenlänge

Welche der folgenden Strahlungsarten des elektromagnetischen Spektrums weist im Vakuum die kürzeste Wellenlänge und somit die höchste Photonenenergie auf?

- **A:** Mikrowellen
- **B:** Infrarotstrahlung
- **C:** Sichtbares Licht
- **D:** Ultraviolettstrahlung
- **E:** Gammastrahlung

**Richtige Antwort:** **E**

**Erklärung:**
Die Reihung nach abnehmender Wellenlänge bzw. zunehmender Frequenz und Photonenenergie lautet:
$$\text{Radiowellen} > \text{Mikrowellen} > \text{Infrarot} > \text{VIS} > \text{UV} > \text{Röntgen} > \mathbf{\text{Gammastrahlung}}$$
Gammastrahlung besitzt Wellenlängen von $\lambda < 10^{-11}\,\text{m}$ (Pikometerbereich) und Quantenenergien weit über $100\,\text{keV}$, womit sie die energiereichste und kurzwelligste Strahlung des Spektrums darstellt.

**Analyse der Falschantworten:**
- **A** bis **D** liegen bei deutlich größeren Wellenlängen und niedrigeren Frequenzen.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, EM-Spektrum, Gammastrahlung, Wellenlänge, Reihung*

---

### Frage 79 (chem-02-set4-q079)
**Thema:** De-Broglie-Wellenlänge — Schnelle Proportionalität bei Geschwindigkeitsänderung

Die Geschwindigkeit eines Elektrons wird durch Abbremsen exakt halbiert ($v_2 = \frac{1}{2} \cdot v_1$). Wie verändert sich dadurch seine De-Broglie-Wellenlänge $\lambda$?

- **A:** Sie halbiert sich ($\lambda_2 = \frac{1}{2} \cdot \lambda_1$).
- **B:** Sie verdoppelt sich ($\lambda_2 = 2 \cdot \lambda_1$).
- **C:** Sie viertelt sich ($\lambda_2 = \frac{1}{4} \cdot \lambda_1$).
- **D:** Sie vervierfacht sich ($\lambda_2 = 4 \cdot \lambda_1$).
- **E:** Sie bleibt vollkommen unverändert.

**Richtige Antwort:** **B**

**Erklärung:**
Nach Louis de Broglie gilt:
$$\lambda = \frac{h}{p} = \frac{h}{m \cdot v} \implies \lambda \propto \frac{1}{v}$$
Die De-Broglie-Wellenlänge verhält sich streng umgekehrt proportional zur Geschwindigkeit.
Wird $v$ halbiert ($v_2 = \frac{1}{2} v_1$), verdoppelt sich $\lambda$:
$$\lambda_2 = \frac{h}{m \cdot \frac{1}{2} v_1} = 2 \cdot \frac{h}{m \cdot v_1} = 2 \cdot \lambda_1$$

**Analyse der Falschantworten:**
- **A** nimmt irrtümlich eine direkte Proportionalität an.
- **C** und **D** verwechseln die De-Broglie-Beziehung mit der kinetischen Energie ($E_{\text{kin}} \propto v^2$).
- **E** nimmt fälschlich Unabhängigkeit von der Geschwindigkeit an.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Geschwindigkeit, Proportionalität, Tempo*

---

### Frage 80 (chem-02-set4-q080)
**Thema:** Photoeffekt — Schnelle Bremsspannungs-Berechnung

Eine Metalloberfläche mit der Austrittsarbeit $W_A = 2{,}2\,\text{eV}$ wird mit monochromatischem UV-Licht der Wellenlänge $\lambda = 310\,\text{nm}$ bestrahlt. Welche Gegenspannung $U_0$ muss anliegen, um den Photostrom vollständig zu unterdrücken?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $U_0 = 4{,}0\,\text{V}$
- **B:** $U_0 = 1{,}8\,\text{V}$
- **C:** $U_0 = 2{,}2\,\text{V}$
- **D:** $U_0 = 6{,}2\,\text{V}$
- **E:** $U_0 = 0{,}9\,\text{V}$

**Richtige Antwort:** **B**

**Erklärung:**
1. Photonenenergie im Kopf berechnen:
$$E_{\text{Photon}} = \frac{1240\,\text{eV}\cdot\text{nm}}{310\,\text{nm}} = 4{,}0\,\text{eV}$$
2. Maximale kinetische Energie ermitteln:
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A = 4{,}0\,\text{eV} - 2{,}2\,\text{eV} = 1{,}8\,\text{eV}$$
3. Bremsspannung ableiten:
$$e \cdot U_0 = E_{\text{kin,max}} \implies e \cdot U_0 = 1{,}8\,\text{eV} \implies U_0 = 1{,}8\,\text{V}$$

**Analyse der Falschantworten:**
- **A** entspricht der gesamten Photonenenergie ohne Abzug der Austrittsarbeit ($4{,}0\,\text{V}$).
- **C** ist die Austrittsarbeit in Volt ($2{,}2\,\text{V}$).
- **D** addiert fälschlich Photonenenergie und Austrittsarbeit ($4{,}0 + 2{,}2 = 6{,}2\,\text{V}$).
- **E** halbiert fälschlicherweise das Ergebnis.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Gegenfeldmethode, Bremsspannung, Kopfrechnen*

---

### Frage 81 (chem-02-set4-q081)
**Thema:** Unschärferelation — Impulsunschärfe bei gleicher Geschwindigkeitsunschärfe

Ein Proton ist rund 1836-mal schwerer als ein Elektron ($m_p \approx 1836 \cdot m_e$). Beide Teilchen besitzen die exakt gleiche Geschwindigkeitsunschärfe ($\Delta v_p = \Delta v_e$). In welchem Verhältnis stehen ihre minimalen Impulsunschärfen $\frac{\Delta p_p}{\Delta p_e}$ zueinander?

- **A:** $\frac{\Delta p_p}{\Delta p_e} \approx 1836 : 1$
- **B:** $\frac{\Delta p_p}{\Delta p_e} \approx 1 : 1836$
- **C:** $\frac{\Delta p_p}{\Delta p_e} = 1 : 1$
- **D:** $\frac{\Delta p_p}{\Delta p_e} \approx \sqrt{1836} : 1$
- **E:** $\frac{\Delta p_p}{\Delta p_e} \approx 1836^2 : 1$

**Richtige Antwort:** **A**

**Erklärung:**
Der Impuls ist definiert als $p = m \cdot v$, woraus für die Impulsunschärfe folgt:
$$\Delta p = m \cdot \Delta v$$
Da $\Delta v$ für beide Teilchen identisch ist, gilt:
$$\Delta p \propto m$$
Das Verhältnis der Impulsunschärfen entspricht direkt dem Massenverhältnis:
$$\frac{\Delta p_p}{\Delta p_e} = \frac{m_p \cdot \Delta v}{m_e \cdot \Delta v} = \frac{m_p}{m_e} \approx 1836 : 1$$
*(Achtung: Hätte die Frage nach der Ortsunschärfe $\Delta x$ bei gleichem $\Delta v$ gefragt, wäre das Verhältnis $1 : 1836$, da $\Delta x \propto \frac{1}{m}$. Hier wird jedoch explizit nach $\Delta p$ gefragt!)*

**Analyse der Falschantworten:**
- **B** verwechselt Impulsunschärfe $\Delta p$ mit Ortsunschärfe $\Delta x$.
- **C** nimmt an, dass $\Delta p$ für alle Teilchen universell identisch sein müsse.
- **D** und **E** verwenden falsche Potenzen.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Impulsunschärfe, Proton, Elektron, Falle*

---

### Frage 82 (chem-02-set4-q082)
**Thema:** Transversalität von Licht — Orthogonalität der Feldvektoren

Welche geometrische Ausrichtung besitzen der elektrische Feldvektor $\vec{E}$, der magnetische Feldvektor $\vec{B}$ und die Ausbreitungsrichtung $\vec{c}$ einer elektromagnetischen Welle im Vakuum?

- **A:** $\vec{E}$ und $\vec{B}$ stehen parallel zueinander und schwingen in Richtung von $\vec{c}$.
- **B:** $\vec{E}$ steht senkrecht auf $\vec{B}$, und beide stehen senkrecht auf $\vec{c}$ ($\vec{E} \perp \vec{B} \perp \vec{c}$).
- **C:** $\vec{E}$ schwingt longitudinal in Richtung von $\vec{c}$, während $\vec{B}$ transversal dazu orientiert ist.
- **D:** $\vec{E}$ und $\vec{B}$ schließen im Vakuum stets einen Winkel von $45^\circ$ ein.
- **E:** Nur bei polarisiertem Licht stehen die Vektoren senkrecht; unpolarisiertes Licht schwingt chaotisch in alle Richtungen entlang $\vec{c}$.

**Richtige Antwort:** **B**

**Erklärung:**
Elektromagnetische Wellen sind reine Transversalwellen. Im Vakuum gilt zu jedem Zeitpunkt und an jedem Ort strikt:
$$\vec{E} \perp \vec{B}, \quad \vec{E} \perp \vec{c}, \quad \vec{B} \perp \vec{c}$$
Die Feldvektoren $\vec{E}$ und $\vec{B}$ sowie der Ausbreitungsvektor $\vec{c}$ bilden ein orthogonales Rechtssystem.

**Analyse der Falschantworten:**
- **A** und **C** beschreiben ganz oder teilweise Longitudinalwellen (z. B. Schall).
- **D** nennt einen falschen Winkel.
- **E** verkennt, dass auch unpolarisiertes Licht rein transversal schwingt.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Transversalwelle, Orthogonalität, Maxwell*

---

### Frage 83 (chem-02-set4-q083)
**Thema:** Balmer-Serie — Größte Wellenlänge (Kleinste Energie)

Welcher Elektronenübergang im Wasserstoffatom erzeugt die Spektrallinie der Balmer-Serie mit der längsten Wellenlänge ($\lambda_{\text{max}}$)?

- **A:** $n = 1 \rightarrow n = 2$
- **B:** $n = 2 \rightarrow n = 1$
- **C:** $n = 4 \rightarrow n = 2$
- **D:** $n = 3 \rightarrow n = 2$
- **E:** $n = \infty \rightarrow n = 2$

**Richtige Antwort:** **D**

**Erklärung:**
Zwei Gesetzmäßigkeiten führen direkt zur Lösung:
1. **Balmer-Serie:** Emissionen enden auf dem unteren Niveau $n = 2$ (Übergänge von $n \ge 3$ nach $n = 2$). Damit scheiden A und B sofort aus.
2. **Längste Wellenlänge:** Wegen $E = \frac{h \cdot c}{\lambda}$ entspricht die größte Wellenlänge $\lambda_{\text{max}}$ dem kleinstmöglichen Energiesprung $\Delta E_{\text{min}}$.
Der kleinste Energiesprung innerhalb der Balmer-Serie ist der Übergang vom unmittelbar darüberliegenden Niveau:
$$n = 3 \rightarrow n = 2 \quad (H_\alpha\text{-Linie}, \Delta E \approx 1{,}89\,\text{eV}, \lambda \approx 656\,\text{nm, rot})$$

**Analyse der Falschantworten:**
- **A** ist eine Absorption der Lyman-Serie.
- **B** ist eine Emission der Lyman-Serie ($n = 2 \rightarrow 1$, UV-Bereich).
- **C** ist die energiereichere $H_\beta$-Linie ($n = 4 \rightarrow 2$, $\lambda \approx 486\,\text{nm}$, blaugrün).
- **E** liefert die maximale Energie und somit die kürzeste Wellenlänge der Serie (Seriengrenze bei ca. $365\,\text{nm}$).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Balmer-Serie, Wellenlänge, Extremwert*

---

### Frage 84 (chem-02-set4-q084)
**Thema:** Wellengleichung des Lichts — Schnelle Wellenlängenberechnung

Eine monochromatische Lichtquelle strahlt mit einer Frequenz von $f = 6 \cdot 10^{14}\,\text{Hz}$. Welche Wellenlänge $\lambda$ besitzt dieses Licht im Vakuum?
(Lichtgeschwindigkeit $c = 3 \cdot 10^8\,\text{m/s}$).

- **A:** $200\,\text{nm}$
- **B:** $500\,\text{nm}$
- **C:** $300\,\text{nm}$
- **D:** $600\,\text{nm}$
- **E:** $1800\,\text{nm}$

**Richtige Antwort:** **B**

**Erklärung:**
Die fundamentale Wellengleichung lautet:
$$c = \lambda \cdot f \implies \lambda = \frac{c}{f}$$
Werte einsetzen:
$$\lambda = \frac{3 \cdot 10^8\,\text{m/s}}{6 \cdot 10^{14}\,\text{s}^{-1}} = \frac{3}{6} \cdot 10^{8-14}\,\text{m} = 0{,}5 \cdot 10^{-6}\,\text{m} = 500 \cdot 10^{-9}\,\text{m} = 500\,\text{nm}$$

**Analyse der Falschantworten:**
- **A** rechnet fälschlich $1 / 5 = 0{,}2$.
- **C** teilt $6 / 2 = 3$.
- **D** setzt den Frequenzziffernwert direkt als Wellenlänge an.
- **E** multipliziert $c$ mit $f$ ($3 \cdot 6 = 18$).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Wellenlänge, Frequenz, Kopfrechnen*

---

### Frage 85 (chem-02-set4-q085)
**Thema:** Einstein-Gerade — Einfluss einer veränderten Austrittsarbeit

Trägt man die maximale kinetische Energie $E_{\text{kin,max}}$ gegen die Frequenz $f$ auf, erhält man die lineare Einstein-Gerade:
$$E_{\text{kin,max}} = h \cdot f - W_A$$
Wie verändert sich diese Gerade im Diagramm, wenn man die Photokathode durch ein anderes Metall mit größerer Austrittsarbeit ($W_{A,2} > W_{A,1}$) ersetzt?

- **A:** Die Gerade wird steiler, da $h$ ansteigt.
- **B:** Die Gerade wird flacher, da $h$ abnimmt.
- **C:** Die Gerade verschiebt sich parallel nach rechts (zu höherer Grenzfrequenz $f_0$), während ihre Steigung $h$ exakt unverändert bleibt.
- **D:** Die Gerade verschiebt sich parallel nach links (zu kleinerer Grenzfrequenz $f_0$).
- **E:** Die Gerade rotiert um den Nullpunkt des Koordinatensystems.

**Richtige Antwort:** **C**

**Erklärung:**
Die Geradengleichung lautet $y = k \cdot x + d$ mit:
- Steigung: $k = h$ (Planck-Konstante)
- Ordinatenabschnitt: $d = -W_A$
- Nullstelle (Grenzfrequenz auf der $x$-Achse): $f_0 = \frac{W_A}{h}$
Da $h$ eine universelle Naturkonstante ist, kann sich die Steigung der Geraden niemals ändern.
Wird die Austrittsarbeit $W_A$ vergrößert, verschiebt sich der Schnittpunkt mit der $y$-Achse weiter nach unten (zu negativeren Werten) und die Grenzfrequenz $f_0 = \frac{W_A}{h}$ verschiebt sich nach rechts zu höheren Frequenzen. Die Gerade erfährt somit eine reine Parallelverschiebung nach rechts.

**Analyse der Falschantworten:**
- **A** und **B** behaupten fälschlicherweise eine Veränderung der universellen Naturkonstante $h$.
- **D** verschiebt in die falsche Richtung.
- **E** ignoriert die Parallelverschiebung.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Einstein-Gerade, Steigung, Austrittsarbeit, Grenzfrequenz*

---

### Frage 86 (chem-02-set4-q086)
**Thema:** Teilchen-Welle-Dualismus — Davisson-Germer-Experiment

Welches bahnbrechende Experiment lieferte 1927 den ersten direkten experimentellen Beweis für die von Louis de Broglie postulierte Wellennatur von Elektronen?

- **A:** Der Millikan-Öltröpfchen-Versuch
- **B:** Das Rutherford-Streuexperiment an Goldfolie
- **C:** Das Davisson-Germer-Experiment (Beugung von Elektronen an einem Nickel-Kristall)
- **D:** Das Michelson-Morley-Experiment zur Ätherdrift
- **E:** Das Cavendish-Experiment zur Gravitationskonstante

**Richtige Antwort:** **C**

**Erklärung:**
Clinton Davisson und Lester Germer schossen langsame Elektronen auf einen Nickel-Einkristall und beobachteten die Intensitätsverteilung der reflektierten Elektronen. Sie fanden ausgeprägte Maxima und Minima (Interferenz- und Beugungsmuster), die exakt der Bragg-Gleichung für Wellen der De-Broglie-Wellenlänge $\lambda = \frac{h}{p}$ entsprachen. Dies bewies zweifelsfrei, dass Elektronen Beugungsphänomene zeigen und somit Wellennatur besitzen.

**Analyse der Falschantworten:**
- **A** (Millikan) bestimmte die Elementarladung $e$.
- **B** (Rutherford) bewies die Existenz des kompakten Atomkerns.
- **D** (Michelson-Morley) widerlegte den Lichtäther.
- **E** (Cavendish) maß die makroskopische Gravitation.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Davisson-Germer, Elektronenbeugung, Faktenwissen*

---

### Frage 87 (chem-02-set4-q087)
**Thema:** Spektralfarben des sichtbaren Lichts — Höchste Frequenz

Welche Spektralfarbe des sichtbaren Lichts ($\text{VIS}$, $380\text{ bis }780\,\text{nm}$) besitzt die höchste Frequenz und die kürzeste Wellenlänge?

- **A:** Rot
- **B:** Gelb
- **C:** Grün
- **D:** Orange
- **E:** Violett

**Richtige Antwort:** **E**

**Erklärung:**
Das sichtbare Spektrum erstreckt sich von ca. $380\,\text{nm}$ (Violett) bis $780\,\text{nm}$ (Rot).
Wegen $f = \frac{c}{\lambda}$ und $E = h \cdot f = \frac{h \cdot c}{\lambda}$ gilt:
Kürzeste Wellenlänge = höchste Frequenz = höchste Photonenenergie.
Violettes Licht ($\lambda \approx 380 - 430\,\text{nm}$, $f \approx 7 \cdot 10^{14} - 7{,}9 \cdot 10^{14}\,\text{Hz}$) markiert den energiereichsten und höchstfrequenten Rand des sichtbaren Spektrums.

**Analyse der Falschantworten:**
- **A** (Rot) ist die langwelligste, niederfrequenteste Farbe.
- **B**, **C** und **D** liegen im mittleren Spektralbereich.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Sichtbares Licht, Spektralfarben, Frequenz, Wellenlänge*

---

### Frage 88 (chem-02-set4-q088)
**Thema:** Wasserstoffatom — Bohrsches Energieniveau für $n = 2$

Die Energieniveaus des Elektrons im Wasserstoffatom gehorchen der Formel:
$$E_n = -\frac{13{,}6\,\text{eV}}{n^2}$$
Welche Energie besitzt das Elektron im ersten angeregten Zustand ($n = 2$)?

- **A:** $-13{,}6\,\text{eV}$
- **B:** $-6{,}8\,\text{eV}$
- **C:** $-1{,}51\,\text{eV}$
- **D:** $-3{,}4\,\text{eV}$
- **E:** $+3{,}4\,\text{eV}$

**Richtige Antwort:** **D**

**Erklärung:**
Für den ersten angeregten Zustand gilt die Hauptquantenzahl $n = 2$.
Einsetzen in die Bohrsche Formel:
$$E_2 = -\frac{13{,}6\,\text{eV}}{2^2} = -\frac{13{,}6\,\text{eV}}{4} = -3{,}4\,\text{eV}$$
(Rechnung im Kopf: $13{,}6 / 2 = 6{,}8$; $6{,}8 / 2 = 3{,}4$).

**Analyse der Falschantworten:**
- **A** ist der Grundzustand ($n = 1$).
- **B** teilt fälschlich linear durch 2 ($-13{,}6 / 2 = -6{,}8\,\text{eV}$).
- **C** ist der zweite angeregte Zustand ($n = 3$: $-13{,}6 / 9 \approx -1{,}51\,\text{eV}$).
- **E** trägt ein falsches positives Vorzeichen (gebundene Zustände haben stets negative Energien!).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Bohrsche Formel, Energieniveaus, Kopfrechnen*

---

### Frage 89 (chem-02-set4-q089)
**Thema:** Photoeffekt — Rückrechnung der Austrittsarbeit aus der Bremsspannung

Bestrahlt man eine Metallkathode mit monochromatischem Licht der Wellenlänge $\lambda = 400\,\text{nm}$, wird eine Gegenspannung von $U_0 = 1{,}5\,\text{V}$ benötigt, um den Photostrom vollständig zu stoppen. Wie groß ist die Austrittsarbeit $W_A$ des Kathodenmaterials?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $W_A = 4{,}6\,\text{eV}$
- **B:** $W_A = 3{,}1\,\text{eV}$
- **C:** $W_A = 1{,}5\,\text{eV}$
- **D:** $W_A = 1{,}6\,\text{eV}$
- **E:** $W_A = 0{,}6\,\text{eV}$

**Richtige Antwort:** **D**

**Erklärung:**
1. Photonenenergie berechnen:
$$E_{\text{Photon}} = \frac{1240\,\text{eV}\cdot\text{nm}}{400\,\text{nm}} = \frac{124}{40}\,\text{eV} = 3{,}1\,\text{eV}$$
2. Kinetische Energie aus Bremsspannung ableiten:
$$E_{\text{kin,max}} = e \cdot U_0 = 1{,}5\,\text{eV}$$
3. Austrittsarbeit nach Einstein umstellen:
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A \implies W_A = E_{\text{Photon}} - E_{\text{kin,max}}$$
$$W_A = 3{,}1\,\text{eV} - 1{,}5\,\text{eV} = 1{,}6\,\text{eV}$$

**Analyse der Falschantworten:**
- **A** addiert fälschlicherweise Photonenenergie und kinetische Energie ($3{,}1 + 1{,}5 = 4{,}6\,\text{eV}$).
- **B** ist die unkorrigierte Photonenenergie ($3{,}1\,\text{eV}$).
- **C** ist der reine Zahlenwert der Gegenspannung ($1{,}5\,\text{V} \rightarrow 1{,}5\,\text{eV}$).
- **E** subtrahiert fälschlich $1{,}5$ von $2{,}1$.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Austrittsarbeit, Bremsspannung, Rückwärtsrechnung*

---

### Frage 90 (chem-02-set4-q090)
**Thema:** Proportionalitätslogik — Verdreifachung der Wellenlänge

Die Wellenlänge einer monochromatischen elektromagnetischen Strahlung wird von $\lambda_1$ auf $\lambda_2 = 3 \cdot \lambda_1$ verdreifacht. Welche Aussage über die neue Frequenz $f_2$ und die neue Photonenenergie $E_2$ trifft zu?

- **A:** Sowohl $f_2$ als auch $E_2$ verdreifachen sich.
- **B:** f_2 verdreifacht sich, während $E_2$ auf ein Drittel sinkt.
- **C:** Sowohl $f_2$ als auch $E_2$ sinken auf ein Drittel des ursprünglichen Werts ($f_2 = \frac{1}{3} f_1$ und $E_2 = \frac{1}{3} E_1$).
- **D:** $f_2$ sinkt auf ein Drittel, während $E_2$ auf ein Neuntel absinkt.
- **E:** $f_2$ bleibt konstant, während $E_2$ verdreifacht wird.

**Richtige Antwort:** **C**

**Erklärung:**
Die grundlegenden Zusammenhänge lauten:
1. $c = \lambda \cdot f \implies f = \frac{c}{\lambda} \implies f \propto \frac{1}{\lambda}$.
Wird $\lambda$ verdreifacht, sinkt die Frequenz auf ein Drittel ($f_2 = \frac{1}{3} f_1$).
2. $E = h \cdot f = \frac{h \cdot c}{\lambda} \implies E \propto f \propto \frac{1}{\lambda}$.
Da Energie und Frequenz streng proportional zueinander sind und beide umgekehrt proportional zur Wellenlänge sind, sinkt auch die Photonenenergie auf ein Drittel ($E_2 = \frac{1}{3} E_1$).

**Analyse der Falschantworten:**
- **A**, **B**, **D** und **E** verletzen die elementaren Proportionalitäten $c = \lambda \cdot f$ und $E = h \cdot f$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wellenlänge, Frequenz, Photonenenergie, Proportionalität*

---

### Frage 91 (chem-02-set4-q091)
**Thema:** Paschen-Serie — Spektralbereich

In welchem Bereich des elektromagnetischen Spektrums liegen die Emissionslinien der Paschen-Serie des Wasserstoffatoms (Übergänge mit Endzustand $n_1 = 3$)?

- **A:** Gammastrahlung
- **B:** Röntgenstrahlung
- **C:** Ultraviolettstrahlung (UV)
- **D:** Sichtbares Licht (VIS)
- **E:** Infrarotstrahlung (IR)

**Richtige Antwort:** **E**

**Erklärung:**
Die Spektralserien des Wasserstoffs sind festen Spektralbereichen zugeordnet:
- **Lyman-Serie** ($n \rightarrow 1$): Ultraviolettstrahlung (UV)
- **Balmer-Serie** ($n \rightarrow 2$): Sichtbares Licht (VIS) und nahes UV
- **Paschen-Serie** ($n \rightarrow 3$): Infrarotstrahlung (IR)
- **Brackett-Serie** ($n \rightarrow 4$): Infrarotstrahlung (IR)
- **Pfund-Serie** ($n \rightarrow 5$): Infrarotstrahlung (IR)
Da der Energiesprung auf das Niveau $n = 3$ vergleichsweise klein ist ($\Delta E < 1{,}51\,\text{eV}$), besitzen alle emittierten Photonen Wellenlängen von $\lambda > 820\,\text{nm}$, was dem Infrarotbereich entspricht.

**Analyse der Falschantworten:**
- **A** und **B** sind kernphysikalische bzw. hochenergetische Prozesse.
- **C** ist die Lyman-Serie.
- **D** ist die Balmer-Serie.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Paschen-Serie, Infrarot, Spektralbereich*

---

### Frage 92 (chem-02-set4-q092)
**Thema:** Welleneigenschaften — Schnelle Berechnung der Periodendauer

Eine Lichtwelle besitzt im Vakuum eine Wellenlänge von $\lambda = 600\,\text{nm}$. Welche Periodendauer $T$ besitzt die Schwingung des elektrischen Feldes?
(Lichtgeschwindigkeit $c = 3 \cdot 10^8\,\text{m/s}$).

- **A:** $2 \cdot 10^{-15}\,\text{s}$
- **B:** $5 \cdot 10^{-15}\,\text{s}$
- **C:** $2 \cdot 10^{-14}\,\text{s}$
- **D:** $5 \cdot 10^{14}\,\text{s}$
- **E:** $1{,}8 \cdot 10^{-11}\,\text{s}$

**Richtige Antwort:** **A**

**Erklärung:**
1. Frequenz berechnen:
$$f = \frac{c}{\lambda} = \frac{3 \cdot 10^8\,\text{m/s}}{600 \cdot 10^{-9}\,\text{m}} = \frac{3 \cdot 10^8}{6 \cdot 10^{-7}} = 0{,}5 \cdot 10^{15}\,\text{Hz} = 5 \cdot 10^{14}\,\text{s}^{-1}$$
2. Periodendauer $T = \frac{1}{f}$ berechnen:
$$T = \frac{1}{5 \cdot 10^{14}\,\text{s}^{-1}} = 0{,}2 \cdot 10^{-14}\,\text{s} = 2 \cdot 10^{-15}\,\text{s}$$
(Rechnung im Kopf: $1 / 5 = 0{,}2$. Komma nach rechts $\rightarrow 2 \cdot 10^{-15}\,\text{s}$).

**Analyse der Falschantworten:**
- **B** dividiert $1 / 2$ statt $1 / 5$.
- **C** weist einen Zehnerpotenzfehler auf.
- **D** verwechselt Frequenz und Periodendauer.
- **E** multipliziert $c$ mit $\lambda$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Periodendauer, Frequenz, Kopfrechnen*

---

### Frage 93 (chem-02-set4-q093)
**Thema:** De-Broglie-Wellenlänge — Verknüpfung mit kinetischer Energie

Die kinetische Energie eines Elektrons wird durch Abbremsen in einem elektrischen Gegenfeld auf ein Viertel ihres ursprünglichen Werts reduziert ($E_{\text{kin,2}} = \frac{1}{4} \cdot E_{\text{kin,1}}$). Wie verändert sich dadurch die De-Broglie-Wellenlänge $\lambda$ des Elektrons?

- **A:** Sie viertelt sich ($\lambda_2 = \frac{1}{4} \lambda_1$).
- **B:** Sie halbiert sich ($\lambda_2 = \frac{1}{2} \lambda_1$).
- **C:** Sie bleibt vollkommen gleich.
- **D:** Sie vervierfacht sich ($\lambda_2 = 4 \lambda_1$).
- **E:** Sie verdoppelt sich ($\lambda_2 = 2 \lambda_1$).

**Richtige Antwort:** **E**

**Erklärung:**
Die kinetische Energie ist mit dem Impuls verknüpft über:
$$E_{\text{kin}} = \frac{p^2}{2m} \iff p = \sqrt{2m \cdot E_{\text{kin}}}$$
Setzt man dies in die De-Broglie-Gleichung ein:
$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m \cdot E_{\text{kin}}}} \implies \lambda \propto \frac{1}{\sqrt{E_{\text{kin}}}}$$
Wird die Energie geviertelt ($E_{\text{kin,2}} = \frac{1}{4} E_{\text{kin,1}}$):
$$\lambda_2 = \frac{h}{\sqrt{2m \cdot \frac{1}{4} E_{\text{kin,1}}}} = \frac{h}{\frac{1}{2} \cdot \sqrt{2m \cdot E_{\text{kin,1}}}} = 2 \cdot \lambda_1$$
Die De-Broglie-Wellenlänge verdoppelt sich somit.

**Analyse der Falschantworten:**
- **A** und **B** nehmen an, dass $\lambda$ mit sinkender Energie kleiner wird.
- **C** ignoriert die Energieabhängigkeit.
- **D** vergisst die Quadratwurzel aus dem Energiefaktor ($1 / (1/4) = 4$).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Kinetische Energie, Wurzelbeziehung, Schnellanalyse*

---

### Frage 94 (chem-02-set4-q094)
**Thema:** Wasserstoffatom — Schnelle Absorptionsrechnung

Ein Wasserstoffatom befindet sich im Grundzustand ($n = 1$, $E_1 = -13{,}6\,\text{eV}$). Es absorbiert ein einzelnes Photon mit der Energie $E_{\text{Photon}} = 10{,}2\,\text{eV}$. In welches quantisierte Energieniveau $n$ wird das Elektron dadurch angeregt?

- **A:** $n = 2$
- **B:** $n = 3$
- **C:** $n = 4$
- **D:** $n = \infty$ (Das Atom wird ionisiert)
- **E:** Es kann kein Übergang stattfinden, da Photonen keine gebrochenen eV-Werte anregen können.

**Richtige Antwort:** **A**

**Erklärung:**
Nach der Energieerhaltung entspricht die neue Energie des Elektrons der Summe aus Ausgangsenergie und absorbierter Photonenenergie:
$$E_{\text{neu}} = E_1 + E_{\text{Photon}} = -13{,}6\,\text{eV} + 10{,}2\,\text{eV} = -3{,}4\,\text{eV}$$
Vergleich mit den Bohrschen Energieniveaus ($E_n = -13{,}6\,\text{eV} / n^2$):
- $n = 1 \implies E_1 = -13{,}6\,\text{eV}$
- $n = 2 \implies E_2 = -13{,}6 / 4 = -3{,}4\,\text{eV}$
- $n = 3 \implies E_3 = -13{,}6 / 9 \approx -1{,}51\,\text{eV}$
Da $E_{\text{neu}} = -3{,}4\,\text{eV}$ exakt dem Niveau $n = 2$ entspricht, wird das Elektron genau in den Zustand $n = 2$ angeregt.

**Analyse der Falschantworten:**
- **B** erforderte $12{,}09\,\text{eV}$.
- **C** erforderte $12{,}75\,\text{eV}$.
- **D** erforderte mindestens $13{,}6\,\text{eV}$.
- **E** ist falsch, da $10{,}2\,\text{eV}$ exakt der Resonanzsprung ist.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Absorption, Quantensprung, Kopfrechnen*

---

### Frage 95 (chem-02-set4-q095)
**Thema:** Photoeffekt — Schwellenwert-Ausschlusskriterium

Eine Metallplatte mit der Austrittsarbeit $W_A = 3{,}0\,\text{eV}$ wird mit grünem Licht der Wellenlänge $\lambda = 500\,\text{nm}$ bestrahlt. Tritt ein äußerer Photoelektrischer Effekt auf?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** Ja, die austretenden Elektronen besitzen $E_{\text{kin,max}} = 0{,}52\,\text{eV}$.
- **B:** Ja, aber nur wenn die Lichtintensität über $100\,\text{W/m}^2$ liegt.
- **C:** Nein, weil sichtbares Licht grundsätzlich niemals Photoelektronen auslösen kann.
- **D:** Nein, da die Energie eines Photons (ca. $2{,}48\,\text{eV}$) kleiner ist als die Austrittsarbeit ($3{,}0\,\text{eV}$).
- **E:** Ja, die austretenden Elektronen besitzen $E_{\text{kin,max}} = 3{,}0\,\text{eV}$.

**Richtige Antwort:** **D**

**Erklärung:**
1. Photonenenergie im Kopf berechnen:
$$E_{\text{Photon}} = \frac{1240\,\text{eV}\cdot\text{nm}}{500\,\text{nm}} = \frac{1240}{500}\,\text{eV} = \frac{12{,}4}{5}\,\text{eV} = 2{,}48\,\text{eV}$$
2. Abgleich mit der Austrittsarbeit:
Da $E_{\text{Photon}} = 2{,}48\,\text{eV} < W_A = 3{,}0\,\text{eV}$ ist, reicht die Energie des einzelnen Photons nicht aus, um das Elektron aus dem Gitter zu lösen. Es tritt kein Photoeffekt auf.

**Analyse der Falschantworten:**
- **A** rechnet falsch bzw. subtrahiert unzutreffend.
- **B** unterliegt dem Intensitätsirrtum.
- **C** ist falsch, da sichtbares Licht an Alkalimetallen (z. B. Caesium mit $W_A = 2{,}1\,\text{eV}$) sehr wohl Photoelektronen auslösen kann.
- **E** nennt die Austrittsarbeit als kinetische Energie.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Austrittsarbeit, Schwellenwert, Schnelltest*

---

### Frage 96 (chem-02-set4-q096)
**Thema:** Unschärferelation — Mathematischer Grenzfall exakter Lokalisierung

Was würde nach der Heisenbergschen Unschärferelation ($\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$) passieren, wenn man den Aufenthaltsort eines Elektrons mathematisch absolut exakt auf einen Punkt festlegen könnte ($\Delta x \rightarrow 0$)?

- **A:** Der Impuls des Elektrons würde exakt null werden ($\Delta p = 0$).
- **B:** Die Impulsunschärfe $\Delta p$ und damit die Geschwindigkeits- und kinetische Energieunschärfe des Elektrons würden gegen unendlich streben ($\Delta p \rightarrow \infty$).
- **C:** Das Elektron würde augenblicklich zerstrahlen und seine Masse verlieren.
- **D:** Das Produkt $\Delta x \cdot \Delta p$ würde exakt den Wert null annehmen.
- **E:** Die Masse des Elektrons würde auf das Doppelte ansteigen.

**Richtige Antwort:** **B**

**Erklärung:**
Aus $\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$ folgt für die Impulsunschärfe:
$$\Delta p \ge \frac{h}{4\pi \cdot \Delta x}$$
Lässt man die Ortsunschärfe gegen null gehen ($\Delta x \rightarrow 0$), divergiert der Nenner gegen null, wodurch der Bruch gegen unendlich strebt:
$$\lim_{\Delta x \rightarrow 0} \Delta p = \infty$$
Ein absolut exakt lokalisierter Zustand hätte eine unendlich große Impuls- und Energieunschärfe. Dies ist der fundamentale Grund, warum Elektronen in Atomen keine unendlich scharfen Punkte sein können, sondern als dreidimensionale Orbitale (Aufenthaltswahrscheinlichkeitsdichten) existieren müssen.

**Analyse der Falschantworten:**
- **A** und **D** verletzen die Ungleichung (Produkt kann niemals null sein!).
- **C** und **E** sind spekulative Fehlannahmen.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Grenzwert, Orbitalentstehung, Atomaufbau*

---

### Frage 97 (chem-02-set4-q097)
**Thema:** Wasserstoffähnliche Ionen — Grundzustandsenergie von $\text{Li}^{2+}$

Für wasserstoffähnliche Einelektronensysteme gilt für die Energieniveaus die Formel:
$$E_n = -13{,}6\,\text{eV} \cdot \frac{Z^2}{n^2}$$
Welche Energie besitzt das verbliebene Elektron im Grundzustand ($n = 1$) eines zweifach ionisierten Lithium-Ions ($\text{Li}^{2+}$, Kernladungszahl $Z = 3$)?

- **A:** $-13{,}6\,\text{eV}$
- **B:** $-40{,}8\,\text{eV}$
- **C:** $-54{,}4\,\text{eV}$
- **D:** $-122{,}4\,\text{eV}$
- **E:** $-1{,}51\,\text{eV}$

**Richtige Antwort:** **D**

**Erklärung:**
Gegeben: $Z = 3$ (Lithium) und Grundzustand $n = 1$.
Einsetzen in die Formel:
$$E_1 = -13{,}6\,\text{eV} \cdot \frac{3^2}{1^2} = -13{,}6\,\text{eV} \cdot 9$$
Kopfrechnung:
$$13{,}6 \cdot 10 = 136, \quad 136 - 13{,}6 = 122{,}4 \implies E_1 = -122{,}4\,\text{eV}$$
Wegen der dreifachen Kernladung ($+3e$) ist das Elektron neunmal so fest gebunden wie im normalen Wasserstoffatom.

**Analyse der Falschantworten:**
- **A** setzt $Z = 1$ (Wasserstoff).
- **B** multipliziert fälschlich linear mit $Z = 3$ ($-13{,}6 \cdot 3 = -40{,}8\,\text{eV}$).
- **C** setzt $Z = 2$ (Helium-Ion: $-13{,}6 \cdot 4 = -54{,}4\,\text{eV}$).
- **E** teilt fälschlich durch 9 ($-13{,}6 / 9$).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffähnliche Ionen, Lithium, Kernladung, Kopfrechnen*

---

### Frage 98 (chem-02-set4-q098)
**Thema:** Photonenenergie & Frequenzvergleich — Grün vs. Rot

Ein Photon aus dem grünen Spektralbereich besitzt eine Energie von $E_{\text{grün}} = 2{,}5\,\text{eV}$. Ein Photon aus dem roten Spektralbereich besitzt eine Energie von $E_{\text{rot}} = 1{,}8\,\text{eV}$. In welchem Verhältnis stehen ihre Frequenzen $\frac{f_{\text{grün}}}{f_{\text{rot}}}$ zueinander?

- **A:** $\frac{f_{\text{grün}}}{f_{\text{rot}}} \approx 1{,}39$
- **B:** $\frac{f_{\text{grün}}}{f_{\text{rot}}} \approx 0{,}72$
- **C:** $\frac{f_{\text{grün}}}{f_{\text{rot}}} = 1{,}00$
- **D:** $\frac{f_{\text{grün}}}{f_{\text{rot}}} \approx 1{,}93$
- **E:** $\frac{f_{\text{grün}}}{f_{\text{rot}}} \approx 4{,}50$

**Richtige Antwort:** **A**

**Erklärung:**
Wegen $E = h \cdot f \implies f = \frac{E}{h}$ ist die Frequenz direkt proportional zur Photonenenergie:
$$\frac{f_{\text{grün}}}{f_{\text{rot}}} = \frac{E_{\text{grün}}}{E_{\text{rot}}} = \frac{2{,}5\,\text{eV}}{1{,}8\,\text{eV}} = \frac{25}{18} \approx 1{,}388 \approx 1{,}39$$
Grünes Licht schwingt ca. 1,39-mal so schnell wie rotes Licht.

**Analyse der Falschantworten:**
- **B** bildet das umgekehrte Verhältnis $18 / 25 = 0{,}72$ (entspräche dem Wellenlängenverhältnis $\lambda_{\text{grün}} / \lambda_{\text{rot}}$).
- **C** nimmt gleiche Frequenzen an.
- **D** quadriert das Verhältnis ($25^2 / 18^2$).
- **E** multipliziert die Energiewerte.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Frequenz, Photonenenergie, Verhältnisrechnung, Kopfrechnen*

---

### Frage 99 (chem-02-set4-q099)
**Thema:** Photoeffekt — Sättigungsstrom bei Intensitätsverdopplung

Eine Photokathode wird mit monochromatischem UV-Licht oberhalb der Grenzfrequenz ($f > f_0$) bestrahlt. Bei hinreichend hoher positiver Anodenspannung stellt sich ein konstanter Sättigungsstrom von $I_{\text{Sättigung}} = 4{,}0\,\mu\text{A}$ ein. Nun wird die Lichtintensität verdoppelt, während die Frequenz konstant bleibt. Welcher neue Sättigungsstrom wird gemessen?

- **A:** $I = 2{,}0\,\mu\text{A}$
- **B:** $I = 4{,}0\,\mu\text{A}$
- **C:** $I = 0\,\mu\text{A}$
- **D:** $I = 16{,}0\,\mu\text{A}$
- **E:** $I = 8{,}0\,\mu\text{A}$

**Richtige Antwort:** **E**

**Erklärung:**
Der Sättigungsstrom stellt sich ein, wenn alle aus der Kathode pro Zeiteinheit herausgeschlagenen Elektronen die Anode erreichen.
Da jedes Elektron durch die Absorption genau eines Photons freigesetzt wird, ist die Anzahl der emittierten Elektronen pro Sekunde direkt proportional zur Anzahl der eintreffenden Photonen pro Sekunde.
Verdoppelt man die Bestrahlungsstärke (Intensität) bei gleicher Frequenz, verdoppelt sich die Photonenrate und damit exakt der Sättigungsstrom:
$$I_{\text{neu}} = 2 \cdot I_{\text{alt}} = 2 \cdot 4{,}0\,\mu\text{A} = 8{,}0\,\mu\text{A}$$

**Analyse der Falschantworten:**
- **A** halbiert fälschlich den Strom.
- **B** nimmt an, dass die Intensität keinen Einfluss auf den Strom habe.
- **C** behauptet ein Abreißen des Stroms.
- **D** vervierfacht fälschlicherweise (quadratischer Irrtum).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Sättigungsstrom, Intensität, Photonenrate*

---

### Frage 100 (chem-02-set4-q100)
**Thema:** Schnelle Fehlerdiagnose — Fehlkonzepte im Mikrokosmos

Welche der folgenden fünf Aussagen über quantenmechanische und atomare Gesetzmäßigkeiten enthält einen eindeutigen fachlichen Fehler?

- **A:** Licht breitet sich im Vakuum als Transversalwelle aus, bei der das elektrische Feld senkrecht auf dem magnetischen Feld steht.
- **B:** Die De-Broglie-Wellenlänge eines Teilchens halbiert sich, wenn sein Impuls verdoppelt wird.
- **C:** Beim äußeren Photoelektrischen Effekt lässt sich durch eine Steigerung der Lichtintensität unterhalb der Grenzfrequenz ($f < f_0$) die Emission von Photoelektronen erzwingen.
- **D:** Die diskreten Spektrallinien des Wasserstoffatoms entstehen durch Übergänge zwischen quantisierten Energieniveaus.
- **E:** Die Heisenbergsche Unschärferelation gilt prinzipiell für alle materiellen Körper, wird jedoch bei makroskopischen Massen unmessbar klein.

**Richtige Antwort:** **C**

**Erklärung:**
Aussage C ist der klassische Kardinalfehler (und somit die gesuchte falsche Aussage):
Gilt $f < f_0$, ist die Quantenenergie des einzelnen Photons kleiner als die materialspezifische Austrittsarbeit ($h \cdot f < W_A$). Da Elektronen die Energie einzelner Photonen nicht über längere Zeit „ansammeln“ können (strikter 1-zu-1-Stoß), ist die Emission unterhalb der Grenzfrequenz physikalisch unmöglich — völlig unabhängig davon, wie extrem die Intensität gesteigert wird!
Die Aussagen A, B, D und E sind uneingeschränkt korrekt formulierte Grundsätze des BMS-Lehrplans.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Fehleranalyse, Photoeffekt, Grenzfrequenz, Intensität, De-Broglie, Unschärferelation*

---


## 📚 Set 5: Mastery & Synthesis (Photoeffekt-Synthesen, Myonische Atome, Rydberg-Ritz, Unschärfe, Spektralserien & Teilchen-Welle-Dualismus)

### Frage 101 (chem-02-set5-q101)
**Thema:** Synthese: Photoeffekt, Beschleunigung im E-Feld & De-Broglie-Wellenlänge

Eine Metalloberfläche mit der Austrittsarbeit $W_A = 2{,}0\,\text{eV}$ wird im Hochvakuum mit monochromatischem UV-Licht der Wellenlänge $\lambda_{\text{Licht}} = 310\,\text{nm}$ bestrahlt. Die austretenden Photoelektronen mit maximaler kinetischer Energie werden anschließend durch eine Beschleunigungsspannung von $\Delta U = 6{,}0\,\text{V}$ zusätzlich beschleunigt. Wie verändert sich die De-Broglie-Wellenlänge $\lambda_{\text{dB}}$ dieser schnellsten Elektronen durch diesen Beschleunigungsvorgang?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** Sie halbiert sich ($\lambda_{\text{dB,neu}} = \frac{1}{2} \cdot \lambda_{\text{dB,alt}}$).
- **B:** Sie verdoppelt sich ($\lambda_{\text{dB,neu}} = 2 \cdot \lambda_{\text{dB,alt}}$).
- **C:** Sie sinkt auf ein Viertel ihres Werts ($\lambda_{\text{dB,neu}} = \frac{1}{4} \cdot \lambda_{\text{dB,alt}}$).
- **D:** Sie vervierfacht sich ($\lambda_{\text{dB,neu}} = 4 \cdot \lambda_{\text{dB,alt}}$).
- **E:** Sie bleibt unverändert, da die Beschleunigung nur die Photonen betrifft.

**Richtige Antwort:** **A**

**Erklärung:**
Diese Aufgabe verknüpft drei fundamentale Konzepte in einer logischen Kette:

1. **Photoeffekt:**
$$E_{\text{Photon}} = \frac{1240\,\text{eV}\cdot\text{nm}}{310\,\text{nm}} = 4{,}0\,\text{eV}$$
$$E_{\text{kin,alt}} = E_{\text{Photon}} - W_A = 4{,}0\,\text{eV} - 2{,}0\,\text{eV} = 2{,}0\,\text{eV}$$

2. **Beschleunigung im elektrischen Feld:**
Beim Durchlaufen der Spannung $\Delta U = 6{,}0\,\text{V}$ gewinnt das Elektron die Energie $\Delta E = e \cdot \Delta U = 6{,}0\,\text{eV}$:
$$E_{\text{kin,neu}} = E_{\text{kin,alt}} + \Delta E = 2{,}0\,\text{eV} + 6{,}0\,\text{eV} = 8{,}0\,\text{eV}$$
Die kinetische Energie des Elektrons hat sich somit exakt vervierfacht ($\frac{8{,}0\,\text{eV}}{2{,}0\,\text{eV}} = 4$).

3. **De-Broglie-Wellenlänge:**
Wegen
$$\lambda_{\text{dB}} = \frac{h}{p} = \frac{h}{\sqrt{2m \cdot E_{\text{kin}}}} \implies \lambda_{\text{dB}} \propto \frac{1}{\sqrt{E_{\text{kin}}}}$$
führt eine Vervierfachung der kinetischen Energie zu:
$$\lambda_{\text{dB,neu}} = \frac{\lambda_{\text{dB,alt}}}{\sqrt{4}} = \frac{1}{2} \cdot \lambda_{\text{dB,alt}}$$
Die De-Broglie-Wellenlänge halbiert sich.

**Analyse der Falschantworten:**
- **B** nimmt irrtümlich eine proportionale Zunahme an.
- **C** vergisst die Quadratwurzel und teilt linear durch 4.
- **D** quadriert den Faktor.
- **E** ignoriert die Beschleunigung von geladenen Materieteilchen.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, De-Broglie, E-Feld, Beschleunigungsspannung, Mehrstufig*

---

### Frage 102 (chem-02-set5-q102)
**Thema:** Wasserstoffähnliche Ionen — Rückwärtsinduktion der Kernladungszahl $Z$

In einem unbekannten wasserstoffähnlichen Einelektronensystem (ein Kern mit genau einem gebundenen Elektron) wird beim Übergang des Elektrons vom ersten angeregten Zustand ($n = 2$) in den Grundzustand ($n = 1$) ein hochenergetisches UV-Photon mit der Energie $\Delta E = 40{,}8\,\text{eV}$ emittiert. Um welches Ion handelt es sich, und welche Energie $E_1$ besitzt sein Grundzustand?
(Hinweis: Für atomaren Wasserstoff beträgt die Übergangsenergie von $n=2 \rightarrow 1$ exakt $\Delta E_{\text{H}} = 10{,}2\,\text{eV}$).

- **A:** $\text{He}^+ (Z = 2)$ mit $E_1 = -54{,}4\,\text{eV}$
- **B:** $\text{Li}^{2+} (Z = 3)$ mit $E_1 = -122{,}4\,\text{eV}$
- **C:** $\text{Be}^{3+} (Z = 4)$ mit $E_1 = -217{,}6\,\text{eV}$
- **D:** $\text{He}^+ (Z = 2)$ mit $E_1 = -27{,}2\,\text{eV}$
- **E:** $\text{H} (Z = 1)$ in einem angeregten Isomer

**Richtige Antwort:** **A**

**Erklärung:**
Für wasserstoffähnliche Ionen skalieren alle Bohrschen Energieniveaus und folglich auch alle Übergangsenergien mit dem Quadrat der Kernladungszahl $Z$:
$$\Delta E(Z) = Z^2 \cdot \Delta E_{\text{H}}$$

1. **Kernladungszahl $Z$ bestimmen:**
$$\frac{\Delta E(Z)}{\Delta E_{\text{H}}} = \frac{40{,}8\,\text{eV}}{10{,}2\,\text{eV}} = 4 \implies Z^2 = 4 \implies Z = 2$$
Die Kernladungszahl $Z = 2$ definiert eindeutig Helium. Da es sich um ein Einelektronensystem handelt, liegt das einfach ionisierte Helium-Kation $\text{He}^+$ vor.

2. **Grundzustandsenergie berechnen:**
$$E_1 = -13{,}6\,\text{eV} \cdot \frac{Z^2}{1^2} = -13{,}6\,\text{eV} \cdot 4 = -54{,}4\,\text{eV}$$

**Analyse der Falschantworten:**
- **B** setzte $Z = 3$ an (ergäbe $\Delta E = 9 \cdot 10{,}2 = 91{,}8\,\text{eV}$).
- **C** setzte $Z = 4$ an (Beryllium-Ion).
- **D** berechnet die Grundzustandsenergie fälschlich linear mit $Z$ statt mit $Z^2$ ($-13{,}6 \cdot 2 = -27{,}2\,\text{eV}$).
- **E** ignoriert den $Z^2$-Zusammenhang.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffähnliche Ionen, Helium, Energieniveaus, Rückwärtsinduktion*

---

### Frage 103 (chem-02-set5-q103)
**Thema:** Welleneigenschaften: Transversal- vs. Longitudinalwellen im Vakuum

Warum kann sich elektromagnetische Strahlung (Licht) im vollkommenen Vakuum ausbreiten, während Schallwellen für ihre Ausbreitung zwingend ein materielles Trägermedium (Festkörper, Flüssigkeit oder Gas) benötigen?

- **A:** Weil Schallwellen Transversalwellen sind, die nur an Gitteratomen abprallen können.
- **B:** Weil Schallwellen eine zu hohe Frequenz besitzen, um das Vakuum zu durchdringen.
- **C:** Weil Photonen eine negative Gravitationsmasse besitzen, die sie durch das Vakuum stößt.
- **D:** Weil das Vakuum von einem dichten Äther ausgefüllt ist, der nur Licht leitet.
- **E:** Weil elektromagnetische Wellen aus sich selbst erhaltenden elektrischen und magnetischen Feldern bestehen, die kein materielles Trägermedium erfordern, während Schallwellen mechanische Dichteschwankungen (Longitudinalwellen) materieller Teilchen sind.

**Richtige Antwort:** **E**

**Erklärung:**
- **Elektromagnetische Wellen:** Ein sich zeitlich veränderndes elektrisches Feld erzeugt ein magnetisches Wirbelfeld, und ein sich veränderndes magnetisches Feld erzeugt ein elektrisches Wirbelfeld (Maxwell-Gleichungen). Sie tragen ihre eigene Feldenergie und breiten sich als Transversalwellen autonom im Vakuum aus.
- **Schallwellen:** Sind rein mechanische Longitudinalwellen. Sie bestehen aus periodischen Kompressionen und Dekompressionen (Dichteschwankungen) von Atomen oder Molekülen. Im Vakuum existieren keine Materieteilchen, die elastische Stöße übertragen könnten; daher kann sich Schall im Vakuum prinzipiell nicht ausbreiten.

**Analyse der Falschantworten:**
- **A** vertauscht Transversal- und Longitudinalwellen.
- **B** und **C** sind physikalisch unsinnig.
- **D** beruft sich auf den historisch widerlegten Lichtäther.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Licht, Schallwellen, Transversalwelle, Vakuum, Grundlagen*

---

### Frage 104 (chem-02-set5-q104)
**Thema:** Photoeffekt — Mehrstufige Rückwärtsrechnung (Geschwindigkeit $\rightarrow$ Wellenlänge)

In einem Photoeffekt-Experiment treffen Photonen auf eine Metalloberfläche mit der Austrittsarbeit $W_A = 2{,}4\,\text{eV}$. Die austretenden Photoelektronen besitzen eine maximale Geschwindigkeit von $v_{\text{max}} = 6 \cdot 10^5\,\text{m/s}$. Welche Wellenlänge $\lambda$ besitzt das eingestrahlte Licht näherungsweise?
(Konstanten: $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$; $1\,\text{eV} \approx 1{,}6 \cdot 10^{-19}\,\text{J}$; $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** ca. $200\,\text{nm}$
- **B:** ca. $310\,\text{nm}$
- **C:** ca. $365\,\text{nm}$
- **D:** ca. $517\,\text{nm}$
- **E:** ca. $620\,\text{nm}$

**Richtige Antwort:** **C**

**Erklärung:**
1. **Kinetische Energie der Elektronen in Joule berechnen:**
$$E_{\text{kin,max}} = \frac{1}{2} m_e \cdot v^2 = \frac{1}{2} \cdot (9{,}1 \cdot 10^{-31}\,\text{kg}) \cdot (6 \cdot 10^5\,\text{m/s})^2$$
$$E_{\text{kin,max}} = 0{,}5 \cdot 9{,}1 \cdot 10^{-31} \cdot 36 \cdot 10^{10}\,\text{J} = 163{,}8 \cdot 10^{-21}\,\text{J} \approx 1{,}64 \cdot 10^{-19}\,\text{J}$$

2. **Kinetische Energie in Elektronenvolt umrechnen:**
$$E_{\text{kin,max}} = \frac{1{,}64 \cdot 10^{-19}\,\text{J}}{1{,}60 \cdot 10^{-19}\,\text{J/eV}} \approx 1{,}0\,\text{eV}$$

3. **Gesamte Photonenenergie über Einstein bestimmen:**
$$E_{\text{Photon}} = W_A + E_{\text{kin,max}} = 2{,}4\,\text{eV} + 1{,}0\,\text{eV} = 3{,}4\,\text{eV}$$

4. **Wellenlänge mit dem Kopfrechentrick ermitteln:**
$$\lambda = \frac{h \cdot c}{E_{\text{Photon}}} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{3{,}4\,\text{eV}}$$
(Kopfrechnung: $3{,}4 \cdot 300 = 1020$; $3{,}4 \cdot 365 \approx 1241$).
Folglich gilt: $\lambda \approx 365\,\text{nm}$ (nahes UV).

**Analyse der Falschantworten:**
- **A** und **B** entsprechen Photonenenergien von $6{,}2\,\text{eV}$ bzw. $4{,}0\,\text{eV}$.
- **D** vergisst die Addition der kinetischen Energie und rechnet nur mit der Austrittsarbeit ($1240 / 2{,}4 \approx 517\,\text{nm}$).
- **E** entspricht $2{,}0\,\text{eV}$.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Elektronengeschwindigkeit, Wellenlänge, Mehrstufig, Kopfrechnen*

---

### Frage 105 (chem-02-set5-q105)
**Thema:** Unschärferelation & Atomhülle — Verhinderung des Kernkollapses

Klassisch betrachtet müsste ein Elektron unter ständiger Abstrahlung elektromagnetischer Wellen spiralförmig in den positiv geladenen Atomkern stürzen. Warum verhindert die Heisenbergsche Unschärferelation ($\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$) diesen Kollaps des Elektrons in den Kern?

- **A:** Weil die Coulomb-Anziehungskraft bei sehr kleinen Abständen ihr Vorzeichen umkehrt und abstoßend wird.
- **B:** Weil das Elektron bei Annäherung an den Atomkern seine negative Ladung verliert.
- **C:** Weil die starke Kernkraft Elektronen grundsätzlich abstößt.
- **D:** Weil eine extreme räumliche Lokalisierung des Elektrons auf das winzige Kernvolumen ($\Delta x \rightarrow 0$) seine Impuls- und kinetische Energieunschärfe gegen unendlich treiben würde ($\Delta p \rightarrow \infty$), sodass ein stabiler mittlerer Aufenthaltsbereich (Orbital) energetisch erzwungen wird.
- **E:** Weil sich Elektronen im Vakuum prinzipiell nicht langsamer als Photonen bewegen können.

**Richtige Antwort:** **D**

**Erklärung:**
Klassisch würde ein Elektron auf einer Kreisbahn ständig Energie abstrahlen und in den Kern stürzen. Die Quantenmechanik verhindert dies durch die Heisenbergsche Unschärferelation:
$$\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$$
Würde sich das Elektron exakt im Atomkern (Radius ca. $10^{-15}\,\text{m}$) aufhalten, wäre seine Ortsunschärfe $\Delta x$ extrem klein. Als Folge davon müsste seine Impulsunschärfe $\Delta p$ und damit seine kinetische Energie dramatisch ansteigen.
Das Elektron kann daher nicht in den Kern stürzen, sondern stellt einen energetischen Gleichgewichtszustand zwischen Coulomb-Anziehung und quantenmechanischer Lokalisierungsenergie ein: Es bildet eine ausgedehnte Aufenthaltswahrscheinlichkeitswolke (Orbital) im typischen Atomabstand von ca. $0{,}1\,\text{nm}$.

**Analyse der Falschantworten:**
- **A** ist falsch, da die elektrostatische Coulomb-Kraft zwischen entgegengesetzten Ladungen bei jedem Abstand anziehend bleibt.
- **B**, **C** und **E** sind physikalisch unzutreffende Scheinerklärungen.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Atomstabilität, Nullpunktsenergie, Coulomb-Potential*

---

### Frage 106 (chem-02-set5-q106)
**Thema:** Spektralserien des Wasserstoffs — Verhältnis der Seriengrenzen

In welchem mathematischen Verhältnis stehen die Grenzwellenlängen der Balmer-Serie ($\lambda_{\text{Grenz,Balmer}}$, Ionisation aus $n = 2$) und der Lyman-Serie ($\lambda_{\text{Grenz,Lyman}}$, Ionisation aus $n = 1$) zueinander:
$$\frac{\lambda_{\text{Grenz,Balmer}}}{\lambda_{\text{Grenz,Lyman}}}?$$
(Bohrsche Niveaus: $E_n = -\frac{13{,}6\,\text{eV}}{n^2}$).

- **A:** $1 : 4$
- **B:** $1 : 2$
- **C:** $2 : 1$
- **D:** $4 : 1$
- **E:** $16 : 1$

**Richtige Antwort:** **D**

**Erklärung:**
Die Seriengrenze entspricht dem Übergang von $n \rightarrow \infty$ ($E_\infty = 0\,\text{eV}$):

1. **Grenzenergie der Lyman-Serie ($n = 1$):**
$$\Delta E_{\text{Lyman}} = 0 - E_1 = 0 - (-13{,}6\,\text{eV}) = 13{,}6\,\text{eV}$$

2. **Grenzenergie der Balmer-Serie ($n = 2$):**
$$\Delta E_{\text{Balmer}} = 0 - E_2 = 0 - (-3{,}4\,\text{eV}) = 3{,}4\,\text{eV}$$

3. **Verhältnis der Photonenenergien:**
$$\frac{\Delta E_{\text{Lyman}}}{\Delta E_{\text{Balmer}}} = \frac{13{,}6\,\text{eV}}{3{,}4\,\text{eV}} = 4$$

4. **Verhältnis der Wellenlängen:**
Da $\lambda = \frac{h \cdot c}{\Delta E} \implies \lambda \propto \frac{1}{\Delta E}$ gilt, verhalten sich die Grenzwellenlängen umgekehrt proportional zu den Energien:
$$\frac{\lambda_{\text{Grenz,Balmer}}}{\lambda_{\text{Grenz,Lyman}}} = \frac{\Delta E_{\text{Lyman}}}{\Delta E_{\text{Balmer}}} = \frac{13{,}6\,\text{eV}}{3{,}4\,\text{eV}} = 4 = \frac{4}{1}$$
(Probe: $\lambda_{\text{Lyman}} \approx 91\,\text{nm}$; $\lambda_{\text{Balmer}} \approx 365\,\text{nm} \rightarrow 365 / 91 \approx 4$).

**Analyse der Falschantworten:**
- **A** kehrt das Verhältnis um (Verwechslung von Energie und Wellenlänge).
- **B** und **C** nehmen eine lineare Abhängigkeit von der Quantenzahl $n$ an ($2/1$).
- **E** quadriert das Verhältnis fälschlicherweise nochmals ($4^2 = 16$).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Seriengrenzen, Lyman-Serie, Balmer-Serie, Verhältnisrechnung*

---

### Frage 107 (chem-02-set5-q107)
**Thema:** Photoeffekt — Schwellenwert-Analyse im Sonnenspektrum

Eine Kalium-Photokathode besitzt die Austrittsarbeit $W_A = 2{,}2\,\text{eV}$. Die Kathode wird mit dem gesamten Spektrum des sichtbaren Lichts ($380\,\text{nm}$ bis $780\,\text{nm}$) bestrahlt. Bis zu welcher maximalen Grenzwellenlänge $\lambda_0$ im sichtbaren Spektrum können Photonen Elektronen aus dieser Kathode freisetzen?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $\lambda_0 \approx 780\,\text{nm}$ (Das gesamte sichtbare Licht kann Elektronen auslösen)
- **B:** $\lambda_0 \approx 564\,\text{nm}$ (Nur violettes, blaues und grünes Licht bis gelbgrün)
- **C:** $\lambda_0 \approx 380\,\text{nm}$ (Ausschließlich die äußerste violette Grenze)
- **D:** $\lambda_0 \approx 310\,\text{nm}$ (Kein sichtbares Licht, nur UV-Strahlung)
- **E:** $\lambda_0 \approx 620\,\text{nm}$ (Bis tief in den roten Spektralbereich)

**Richtige Antwort:** **B**

**Erklärung:**
Die Grenzwellenlänge $\lambda_0$ ist die maximale Wellenlänge, deren Photonenenergie gerade noch ausreicht, um die Austrittsarbeit $W_A = 2{,}2\,\text{eV}$ zu überwinden:
$$\lambda_0 = \frac{h \cdot c}{W_A} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{2{,}2\,\text{eV}}$$
Kopfrechnung:
$$\frac{1240}{2{,}2} = \frac{620}{1{,}1} \approx 563{,}6\,\text{nm} \approx 564\,\text{nm}$$
Da sichtbares Licht von $380\,\text{nm}$ bis $780\,\text{nm}$ reicht:
- Alle Wellenlängen von $380\,\text{nm}$ bis $564\,\text{nm}$ (Violett, Blau, Cyan, Grün) besitzen Photonenenergien $E \ge 2{,}2\,\text{eV}$ und lösen Photoelektronen aus.
- Alle Wellenlängen über $564\,\text{nm}$ (Gelb, Orange, Rot bis $780\,\text{nm}$) besitzen Energien unter $2{,}2\,\text{eV}$ und sind vollkommen wirkungslos.

**Analyse der Falschantworten:**
- **A** behauptet fälschlich, dass auch energiearmes rotes Licht ausreicht.
- **C** nimmt an, dass sichtbares Licht fast wirkungslos sei.
- **D** berechnet $\lambda$ für $W_A = 4\,\text{eV}$.
- **E** berechnet $\lambda$ für $W_A = 2{,}0\,\text{eV}$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Grenzwellenlänge, Kalium, Sichtbares Licht, Kopfrechnen*

---

### Frage 108 (chem-02-set5-q108)
**Thema:** Synthese: De-Broglie-Wellenlänge & Bohrsche Bahnradien

Im Wasserstoffatom skaliert der Radius der Bohrschen Bahnen nach der Beziehung $r_n = n^2 \cdot a_0$ ($a_0 \approx 0{,}053\,\text{nm}$). Welche Aussage über die De-Broglie-Wellenlänge $\lambda_3$ des Elektrons auf der dritten Bohrschen Bahn ($n = 3$) und den Bahnumfang $U_3 = 2\pi r_3$ ist uneingeschränkt korrekt?

- **A:** Der Umfang der Bahn entspricht exakt einer halben De-Broglie-Wellenlänge ($U_3 = 0{,}5 \cdot \lambda_3$).
- **B:** Die Wellenlänge ist unendlich groß, da das Elektron im Zustand n=3 frei ist.
- **C:** Auf den Umfang passen neun De-Broglie-Wellenlängen, da der Radius mit $n^2$ skaliert.
- **D:** Auf den Kreisbahnumfang der 3. Bahn passen exakt drei vollständige De-Broglie-Wellenlängen ($2\pi r_3 = 3 \cdot \lambda_3$), und der Radius ist neunmal so groß wie der Grundzustandsradius ($r_3 = 9 \cdot a_0$).
- **E:** Der Bahnumfang ist unabhängig von der De-Broglie-Wellenlänge.

**Richtige Antwort:** **D**

**Erklärung:**
Zwei fundamentale Gesetze greifen hier ineinander:

1. **Bohrsche Bahnradien:**
$$r_n = n^2 \cdot a_0 \implies r_3 = 3^2 \cdot a_0 = 9 \cdot a_0$$
Der Radius der dritten Bahn ist exakt neunmal so groß wie der Grundzustandsradius $a_0$.

2. **De-Broglie-Bedingung für stehende Materiewellen:**
Damit sich ein Elektron auf einer stabilen Quantenbahn bewegen kann, muss die Materiewelle nach einem vollen Umlauf konstruktiv mit sich selbst interferieren (stehende Welle auf dem Ring). Der Bahnumfang muss daher exakt einem ganzzahligen Vielfachen der De-Broglie-Wellenlänge entsprechen:
$$2\pi r_n = n \cdot \lambda_n \implies 2\pi r_3 = 3 \cdot \lambda_3$$
Auf die 3. Bahn passen exakt drei vollständige Wellenzüge.

**Analyse der Falschantworten:**
- **A** widerspricht der Resonanzbedingung.
- **B** und **E** sind physikalisch unsinnig.
- **C** verwechselt die Quantenzahl $n$ mit dem Faktor $n^2$ für den Radius.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Bohrsches Atommodell, Bahnradius, Stehende Welle, Synthese*

---

### Frage 109 (chem-02-set5-q109)
**Thema:** Quantensprung im Wasserstoffatom — Emission im UV-Bereich

Ein Elektron im Wasserstoffatom springt vom Quantenniveau $n = 4$ in das Niveau $n = 1$. Welche Aussage über diesen Vorgang ist fachlich vollkommen zutreffend?

- **A:** Es wird ein Photon absorbiert, dessen Energie im Infrarotbereich liegt.
- **B:** Die Masse des Atomkerns verringert sich dabei um 50 %.
- **C:** Es wird ein Photon emittiert, das zur Balmer-Serie gehört und im sichtbaren Spektralbereich liegt.
- **D:** Es werden zwei Elektronen gleichzeitig aus dem Atom herausgeschleudert.
- **E:** Es wird ein Photon emittiert, das zur Lyman-Serie gehört und im ultravioletten Spektralbereich (UV) liegt.

**Richtige Antwort:** **E**

**Erklärung:**
- **Richtung des Übergangs:** Da das Elektron von einem höheren Energieniveau ($n = 4$, $E_4 = -0{,}85\,\text{eV}$) auf ein tieferes Niveau ($n = 1$, $E_1 = -13{,}6\,\text{eV}$) herabfällt, wird die freiwerdende Energiedifferenz ($\Delta E = 12{,}75\,\text{eV}$) in Form eines einzelnen Photons emittiert.
- **Spektralserie:** Alle Übergänge, die auf dem Grundniveau $n = 1$ enden, gehören per definitionem zur Lyman-Serie.
- **Spektralbereich:** Mit $\Delta E = 12{,}75\,\text{eV}$ ist die Wellenlänge $\lambda \approx \frac{1240}{12{,}75} \approx 97\,\text{nm}$. Dies liegt tief im kurzwelligen Ultraviolettbereich (UV).

**Analyse der Falschantworten:**
- **A** behauptet fälschlich Absorption und Infrarotstrahlung.
- **B** und **D** sind absurde physikalische Fehlaussagen.
- **C** ordnet den Übergang fälschlicherweise der Balmer-Serie zu (Balmer endet auf $n = 2$).

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Lyman-Serie, Emission, Ultraviolett*

---

### Frage 110 (chem-02-set5-q110)
**Thema:** Photoeffekt — Kennlinien-Interpretation im I-U-Diagramm

In einem Experiment werden zwei verschiedene Lichtquellen (Quelle 1 und Quelle 2) an derselben Photokathode getestet. Die resultierenden Strom-Spannungs-Kennlinien zeigen:
- Quelle 1 erfordert eine größere Bremsspannung als Quelle 2 ($|U_{0,1}| > |U_{0,2}|$).
- Quelle 2 liefert einen höheren Sättigungs-Photostrom als Quelle 1 ($I_{\text{Sättigung},2} > I_{\text{Sättigung},1}$).

Welche Schlussfolgerung über die Frequenzen $f$ und die relativen Intensitäten (bzw. Photonenraten) der beiden Lichtquellen ist zwingend?

- **A:** Quelle 1 besitzt eine höhere Frequenz ($f_1 > f_2$), emittiert aber weniger Photonen pro Sekunde als Quelle 2.
- **B:** Quelle 2 besitzt eine höhere Frequenz ($f_2 > f_1$) und eine höhere Intensität.
- **C:** Beide Quellen besitzen exakt dieselbe Frequenz, unterscheiden sich jedoch in der Polarisation.
- **D:** Quelle 1 emittiert mehr Photonen pro Sekunde, besitzt jedoch eine geringere Frequenz.
- **E:** Die Beobachtung ist physikalisch unmöglich, da Bremsspannung und Sättigungsstrom stets streng proportional zueinander sind.

**Richtige Antwort:** **A**

**Erklärung:**
Die beiden Kennlinienparameter spiegeln zwei voneinander unabhängige Eigenschaften des Lichts wider:

1. **Bremsspannung $U_0$:**
$$e \cdot U_0 = h \cdot f - W_A$$
Da dieselbe Kathode ($W_A = \text{konstant}$) verwendet wird, hängt $U_0$ ausschließlich linear von der Frequenz $f$ ab.
Aus $|U_{0,1}| > |U_{0,2}|$ folgt zwingend: $f_1 > f_2$ (Quelle 1 besitzt energiereichere Photonen).

2. **Sättigungsstrom $I_{\text{Sättigung}}$:**
Der Sättigungsstrom ist direkt proportional zur Anzahl der pro Zeiteinheit ausgelösten Elektronen und damit zur Anzahl der pro Zeiteinheit eintreffenden Photonen (Photonenfluss $\Phi = N_{\text{Photonen}}/\Delta t$).
Aus $I_{\text{Sättigung},2} > I_{\text{Sättigung},1}$ folgt zwingend, dass Quelle 2 mehr Photonen pro Sekunde auf die Platte strahlt als Quelle 1.

**Analyse der Falschantworten:**
- **B**, **C** und **D** verwechseln die Zuordnung von Frequenz zu Bremsspannung bzw. Photonenrate zu Sättigungsstrom.
- **E** verneint die fundamentale Entkopplung von Frequenz und Intensität beim Photoeffekt.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, I-U-Kennlinie, Bremsspannung, Sättigungsstrom, Frequenz, Intensität*

---

### Frage 111 (chem-02-set5-q111)
**Thema:** Linienspektren & Rydberg-Ritz — Synthese dreier Quantenniveaus

Im Wasserstoffatom sind die Übergangsenergien für zwei Linien der Lyman-Serie experimentell bekannt:
- Übergang von $n = 2 \rightarrow 1$ (Lyman-$\alpha$): $\Delta E_{2\rightarrow 1} = 10{,}20\,\text{eV}$
- Übergang von $n = 3 \rightarrow 1$ (Lyman-$\beta$): $\Delta E_{3\rightarrow 1} = 12{,}09\,\text{eV}$

Welche Energie $\Delta E_{3\rightarrow 2}$ und welche Wellenlänge $\lambda$ besitzt das Photon, das beim Übergang zwischen diesen beiden angeregten Niveaus ($n = 3 \rightarrow 2$, Balmer-$\alpha$) emittiert wird?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $\Delta E = 22{,}29\,\text{eV}$ und $\lambda \approx 56\,\text{nm}$
- **B:** $\Delta E = 1{,}89\,\text{eV}$ und $\lambda \approx 656\,\text{nm}$
- **C:** $\Delta E = 1{,}89\,\text{eV}$ und $\lambda \approx 486\,\text{nm}$
- **D:** $\Delta E = 10{,}20\,\text{eV}$ und $\lambda \approx 122\,\text{nm}$
- **E:** $\Delta E = 0{,}85\,\text{eV}$ und $\lambda \approx 1460\,\text{nm}$

**Richtige Antwort:** **B**

**Erklärung:**
Nach dem Energieerhaltungssatz (bzw. dem Rydberg-Ritzschen Kombinationsprinzip) gilt für die Niveaus:
$$E_3 - E_1 = (E_3 - E_2) + (E_2 - E_1)$$
$$\Delta E_{3\rightarrow 1} = \Delta E_{3\rightarrow 2} + \Delta E_{2\rightarrow 1}$$
Umstellen nach dem gesuchten Übergang:
$$\Delta E_{3\rightarrow 2} = \Delta E_{3\rightarrow 1} - \Delta E_{2\rightarrow 1} = 12{,}09\,\text{eV} - 10{,}20\,\text{eV} = 1{,}89\,\text{eV}$$
Wellenlänge berechnen:
$$\lambda = \frac{h \cdot c}{\Delta E_{3\rightarrow 2}} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{1{,}89\,\text{eV}}$$
Kopfrechnung:
$$\frac{1240}{1{,}89} \approx \frac{1240}{1{,}9} \approx 656\,\text{nm}$$
Dies ist exakt die berühmte rote $H_\alpha$-Linie der Balmer-Serie im sichtbaren Licht.

**Analyse der Falschantworten:**
- **A** addiert fälschlicherweise die beiden Energien ($12{,}09 + 10{,}20 = 22{,}29\,\text{eV}$).
- **C** berechnet die Energie zwar richtig, ordnet ihr aber fälschlicherweise die Wellenlänge der $H_\beta$-Linie ($486\,\text{nm}$) zu.
- **D** nennt den Lyman-$\alpha$-Wert.
- **E** setzt das Niveau $E_4$ an.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Rydberg-Ritz, Lyman-Serie, Balmer-Serie, H-alpha, Kopfrechnen*

---

### Frage 112 (chem-02-set5-q112)
**Thema:** Photochemie & Bindungsenergien — UV-Strahlung vs. Infrarotstrahlung

Warum kann ultraviolette Strahlung ($\text{UV}$) chemische Bindungen in Biomolekülen (z. B. der DNA) direkt homolytisch spalten und Mutationen erzeugen, während intensive Infrarotstrahlung ($\text{IR}$) selbst bei hoher Heizleistung lediglich Molekülschwingungen anregt, ohne Bindungen direkt photochemisch zu brechen?

- **A:** Weil die Quantenenergie eines einzelnen UV-Photons ($h \cdot f \approx 3\text{ bis }6\,\text{eV}$) die typische Dissoziationsenergie kovalenter Bindungen übersteigt, während Infrarotphotonen viel zu energiearm sind ($< 1{,}5\,\text{eV}$) und Energieaufnahme im Molekül als 1-zu-1-Quantenprozess erfolgt.
- **B:** Weil UV-Strahlung aus positiv geladenen Teilchen besteht, die Bindungselektronen elektrostatisch herausreißen.
- **C:** Weil Infrarotstrahlung im Gewebe eine deutlich höhere Lichtgeschwindigkeit besitzt als UV-Strahlung.
- **D:** Weil Infrarotstrahlung von Materie grundsätzlich überhaupt nicht absorbiert werden kann.
- **E:** Weil UV-Strahlung aus hochenergetischen Neutronen besteht, die Atomkerne spalten.

**Richtige Antwort:** **A**

**Erklärung:**
Die Wechselwirkung zwischen elektromagnetischer Strahlung und chemischen Bindungen gehorcht Einsteins Quantenpostulat (strikter 1-zu-1-Prozess zwischen genau einem Photon und genau einer Bindung):

1. **Photonenenergie:**
$$E_{\text{Photon}} = h \cdot f = \frac{h \cdot c}{\lambda}$$
- UV-Photonen ($\lambda \approx 200\text{–}400\,\text{nm}$) tragen Quantenenergien von ca. $3{,}1\,\text{eV}$ bis $6{,}2\,\text{eV}$ (entspricht ca. $300\text{ bis }600\,\text{kJ/mol}$).
- Typische kovalente Einfachbindungen in organischen Molekülen ($\text{C–C}$, $\text{C–H}$, $\text{C–N}$) besitzen Bindungsenergien von ca. $350\text{ bis }450\,\text{kJ/mol}$ ($\approx 3{,}5\text{ bis }4{,}7\,\text{eV}$).
Ein einzelnes UV-Photon besitzt also genügend Energie, um die Bindung mit einem einzigen Stoß aufzubrechen (Photolyse).

2. **Infrarotstrahlung:**
IR-Photonen ($\lambda > 800\,\text{nm}$) besitzen lediglich Quantenenergien unter $1{,}5\,\text{eV}$ (unter $140\,\text{kJ/mol}$). Sie können eine kovalente Bindung nicht spalten, sondern regen lediglich Molekülschwingungen (Valenz- und Deformationsschwingungen) an, was makroskopisch als Erwärmung wahrgenommen wird. Eine Steigerung der Intensität erhöht nur die Anzahl der IR-Photonen, nicht aber die Energie des Einzelphotons.

**Analyse der Falschantworten:**
- **B** ist falsch, da UV-Strahlung aus ungeladenen Photonen besteht.
- **C** ist falsch, da alle EM-Wellen im Vakuum exakt gleich schnell sind ($c$).
- **D** ist falsch (IR wird hervorragend absorbiert und führt zur Erwärmung).
- **E** verwechselt elektromagnetische Photonen mit Teilchenstrahlung (Neutronen).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photochemie, Bindungsenergie, UV-Strahlung, Infrarot, Quantenprozess*

---

### Frage 113 (chem-02-set5-q113)
**Thema:** Elektromagnetische Wellen — Vergleich von UV- und Infrarotphotonen im Vakuum

Gegeben sind zwei elektromagnetische Wellen im freien Vakuum:
- Welle A: Ultraviolettstrahlung mit $\lambda_A = 200\,\text{nm}$
- Welle B: Nahinfrarotstrahlung mit $\lambda_B = 800\,\text{nm}$

Welcher quantitative Vergleich zwischen den beiden Wellen bezüglich ihrer Ausbreitungsgeschwindigkeit $c$, ihrer Frequenz $f$ und ihrer Photonenenergie $E$ ist absolut korrekt?

- **A:** Welle A breitet sich viermal schneller aus als Welle B ($c_A = 4 \cdot c_B$).
- **B:** Welle A besitzt die vierfache Frequenz ($f_A = 4 \cdot f_B$) und die vierfache Photonenenergie ($E_A = 4 \cdot E_B$), breitet sich jedoch mit exakt derselben Geschwindigkeit wie Welle B aus ($c_A = c_B$).
- **C:** Welle A besitzt ein Viertel der Frequenz von Welle B ($f_A = \frac{1}{4} f_B$).
- **D:** Beide Wellen besitzen dieselbe Energie, unterscheiden sich jedoch in ihrer Amplitude.
- **E:** Welle B besitzt eine viermal höhere Frequenz, da ihre Wellenlänge größer ist.

**Richtige Antwort:** **B**

**Erklärung:**
1. **Lichtgeschwindigkeit im Vakuum:**
Alle elektromagnetischen Wellen breiten sich im Vakuum unabhängig von Frequenz und Wellenlänge mit der universellen Naturkonstante $c \approx 3 \cdot 10^8\,\text{m/s}$ aus $\implies c_A = c_B$.

2. **Frequenzverhältnis:**
$$f = \frac{c}{\lambda} \implies \frac{f_A}{f_B} = \frac{\lambda_B}{\lambda_A} = \frac{800\,\text{nm}}{200\,\text{nm}} = 4 \implies f_A = 4 \cdot f_B$$

3. **Photonenenergieverhältnis:**
$$E = h \cdot f \implies \frac{E_A}{E_B} = \frac{f_A}{f_B} = 4 \implies E_A = 4 \cdot E_B$$
(Konkret: $E_A = 1240 / 200 = 6{,}2\,\text{eV}$; $E_B = 1240 / 800 = 1{,}55\,\text{eV} \rightarrow 6{,}2 / 1{,}55 = 4$).

**Analyse der Falschantworten:**
- **A** unterliegt dem Irrglauben, dass energiereichere Wellen im Vakuum schneller seien.
- **C** und **E** verkehren die reziproke Proportionalität zwischen Frequenz und Wellenlänge ins Gegenteil.
- **D** verkennt die Wellenlängenabhängigkeit der Photonenenergie.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, EM-Wellen, Vakuumlichtgeschwindigkeit, Frequenz, Photonenenergie, UV, IR*

---

### Frage 114 (chem-02-set5-q114)
**Thema:** Photoeffekt — Mehrstufige Bremsspannungs-Vorhersage bei Wellenlängenwechsel

Bestrahlt man eine Photozelle mit Licht der Wellenlänge $\lambda_1 = 310\,\text{nm}$, wird eine Gegenspannung von $U_{0,1} = 1{,}5\,\text{V}$ gemessen, um den Stromfluss exakt zu unterbinden. Welche Gegenspannung $U_{0,2}$ ist erforderlich, wenn die Zelle anschließend mit kurzwelligerem Licht der Wellenlänge $\lambda_2 = 200\,\text{nm}$ bestrahlt wird?
(Kopfrechentrick: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$).

- **A:** $U_{0,2} = 1{,}5\,\text{V}$
- **B:** $U_{0,2} = 2{,}2\,\text{V}$
- **C:** $U_{0,2} = 4{,}7\,\text{V}$
- **D:** $U_{0,2} = 3{,}7\,\text{V}$
- **E:** $U_{0,2} = 6{,}2\,\text{V}$

**Richtige Antwort:** **D**

**Erklärung:**
Diese Aufgabe erfordert eine dreistufige logische Verknüpfung:

1. **Austrittsarbeit $W_A$ aus der ersten Messung bestimmen:**
$$E_{\text{Photon,1}} = \frac{1240\,\text{eV}\cdot\text{nm}}{310\,\text{nm}} = 4{,}0\,\text{eV}$$
$$E_{\text{kin,max,1}} = e \cdot U_{0,1} = 1{,}5\,\text{eV}$$
$$W_A = E_{\text{Photon,1}} - E_{\text{kin,max,1}} = 4{,}0\,\text{eV} - 1{,}5\,\text{eV} = 2{,}5\,\text{eV}$$

2. **Photonenenergie bei der zweiten Wellenlänge berechnen:**
$$E_{\text{Photon,2}} = \frac{1240\,\text{eV}\cdot\text{nm}}{200\,\text{nm}} = 6{,}2\,\text{eV}$$

3. **Neue kinetische Energie und neue Bremsspannung berechnen:**
$$E_{\text{kin,max,2}} = E_{\text{Photon,2}} - W_A = 6{,}2\,\text{eV} - 2{,}5\,\text{eV} = 3{,}7\,\text{eV}$$
$$e \cdot U_{0,2} = 3{,}7\,\text{eV} \implies U_{0,2} = 3{,}7\,\text{V}$$

**Analyse der Falschantworten:**
- **A** nimmt an, dass die Bremsspannung wellenlängenunabhängig sei.
- **B** addiert lediglich die Differenz der Photonenenergien zu $W_A$.
- **C** verrechnet sich bei der Subtraktion ($6{,}2 - 1{,}5 = 4{,}7$).
- **E** ist die reine Photonenenergie in Volt ($6{,}2\,\text{V}$), ohne Abzug von $W_A$.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Gegenfeldmethode, Bremsspannung, Wellenlängenwechsel, Mehrstufig*

---

### Frage 115 (chem-02-set5-q115)
**Thema:** Teilchen-Welle-Dualismus — Auflösungsvermögen im Elektronenmikroskop

In der modernen biologischen und medizinischen Forschung können mit Transmissions-Elektronenmikroskopen ($\text{TEM}$) atomare Gitterstrukturen und Zellorganellen mit einer Auflösung von unter $0{,}1\,\text{nm}$ abgebildet werden, während klassische Lichtmikroskope eine fundamentale Auflösungsgrenze von etwa $200\,\text{nm}$ besitzen. Welche quantenphysikalische Gesetzmäßigkeit begründet diesen enormen Vorteil des Elektronenmikroskops?

- **A:** Elektronen besitzen keine Masse und können biologische Gewebe daher ohne jede Ablenkung durchdringen.
- **B:** Im Elektronenmikroskop wird die Lichtgeschwindigkeit der Photonen künstlich herabgesetzt.
- **C:** Elektronen sind reine Punktteilchen und zeigen im Gegensatz zu Lichtwellen prinzipiell keinerlei Beugungsphänomene.
- **D:** Die Auflösungsgrenze hängt ausschließlich von der Helligkeit (Intensität) der Strahlenquelle ab.
- **E:** Durch Beschleunigung in einem elektrischen Feld erhalten Elektronen einen sehr hohen Impuls $p$, wodurch ihre De-Broglie-Wellenlänge $\lambda = \frac{h}{p}$ um Größenordnungen kleiner ist als die Wellenlänge des sichtbaren Lichts, was die Beugungsbegrenzung dramatisch verringert.

**Richtige Antwort:** **E**

**Erklärung:**
Nach dem Abbe-Kriterium der Wellenoptik ist die minimale auflösbare Strukturgröße $d$ durch die Wellenlänge der verwendeten Strahlung begrenzt ($d \approx \frac{\lambda}{2}$).
- **Lichtmikroskop:** Verwendet sichtbares Licht ($\lambda \approx 400\text{–}700\,\text{nm}$). Die Beugungsgrenze liegt daher bei ca. $200\,\text{nm}$ (Zellkerne und Bakterien sind auflösbar, Viren oder Makromoleküle nicht).
- **Elektronenmikroskop:** Nutzt die De-Broglie-Materiewellen von Elektronen:
$$\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m_e \cdot E_{\text{kin}}}}$$
Werden Elektronen durch Hochspannung (z. B. $10\text{ bis }100\,\text{kV}$) beschleunigt, sinkt ihre De-Broglie-Wellenlänge auf Pikometer-Werte ($\lambda < 0{,}01\,\text{nm}$). Da diese Wellenlänge tausendfach kleiner ist als die des sichtbaren Lichts, verschiebt sich die Beugungsgrenze in den Sub-Nanometerbereich.

**Analyse der Falschantworten:**
- **A** ist falsch (Elektronen besitzen eine Masse $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$).
- **B** und **D** sind physikalisch unzutreffend.
- **C** ist falsch (Elektronen zeigen Beugungsphänomene; ihre Welleneigenschaft bestimmt das Auflösungsvermögen).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, De-Broglie, Elektronenmikroskop, Auflösungsgrenze, Wellenlänge, Biophysik*

---

### Frage 116 (chem-02-set5-q116)
**Thema:** Strahlungsleistung & Photonenfluss — Vergleich zweier Farben

Zwei Laser (Laser Rot: $\lambda_{\text{rot}} = 700\,\text{nm}$; Laser Blau: $\lambda_{\text{blau}} = 450\,\text{nm}$) strahlen mit der exakt gleichen optischen Leistung von jeweils $P = 10\,\text{mW}$ ($10\,\text{mJ/s}$). Welcher Laser sendet pro Sekunde eine größere Anzahl an Photonen aus?

- **A:** Beide Laser senden pro Sekunde exakt dieselbe Anzahl an Photonen aus, da ihre Wattzahl identisch ist.
- **B:** Der blaue Laser sendet mehr Photonen pro Sekunde aus, da blaues Licht eine höhere Frequenz besitzt.
- **C:** Der rote Laser sendet mehr Photonen pro Sekunde aus, da jedes einzelne rote Photon weniger Energie trägt als ein blaues Photon.
- **D:** Welcher Laser mehr Photonen sendet, hängt von der Raumtemperatur ab.
- **E:** Photonen lassen sich bei kontinuierlicher Strahlung physikalisch nicht abzählen.

**Richtige Antwort:** **C**

**Erklärung:**
Die Strahlungsleistung $P$ ist die pro Zeiteinheit transportierte Gesamtenergie:
$$P = \frac{\Delta E_{\text{gesamt}}}{\Delta t} = \frac{N}{\Delta t} \cdot E_{\text{Photon}}$$
Umgestellt nach der Photonenrate (Anzahl der Photonen pro Sekunde):
$$\frac{N}{\Delta t} = \frac{P}{E_{\text{Photon}}}$$
Da die Gesamtleistung $P$ für beide Laser identisch ist, verhält sich die Photonenrate streng umgekehrt proportional zur Energie des Einzelphotons:
- Ein rotes Photon ($\lambda = 700\,\text{nm}$) trägt weniger Energie ($E_{\text{rot}} \approx 1{,}77\,\text{eV}$) als ein blaues Photon ($\lambda = 450\,\text{nm}$, $E_{\text{blau}} \approx 2{,}76\,\text{eV}$).
- Um dieselbe Gesamtleistung von $10\,\text{mW}$ bereitzustellen, muss der rote Laser deutlich mehr Photonen pro Sekunde emittieren als der blaue Laser:
$$\frac{N_{\text{rot}}}{N_{\text{blau}}} = \frac{E_{\text{blau}}}{E_{\text{rot}}} = \frac{700}{450} \approx 1{,}56$$

**Analyse der Falschantworten:**
- **A** ignoriert die unterschiedliche Quantelung der Energie.
- **B** verwechselt Leistung mit Photonenenergie.
- **D** und **E** sind fachlich falsch.

*Schwierigkeit: easy* | *Tags: BMS, Chemie, Mikrokosmos, Strahlungsleistung, Photonenfluss, Spektralfarben, Quantelung*

---

### Frage 117 (chem-02-set5-q117)
**Thema:** Orbitalmodell — Symmetrie und Geometrie von s- und p-Orbitalen

Im quantenmechanischen Orbitalmodell wird der Zustand eines Elektrons durch Orbitale (dreidimensionale Aufenthaltswahrscheinlichkeitsdichten $|\psi|^2$) beschrieben. Welche geometrische Eigenschaft unterscheidet ein atomares s-Orbital fundamental von einem p-Orbital?

- **A:** Ein s-Orbital besitzt zwei rechtwinklige Knotenebenen; ein p-Orbital ist völlig knotenfrei.
- **B:** Ein s-Orbital ist kugelsymmetrisch ohne Richtungsabhängigkeit, während ein p-Orbital hantelförmig orientiert ist und eine Knotenebene aufweist, die den Atomkern schneidet.
- **C:** Im s-Orbital bewegt sich das Elektron kreisförmig, im p-Orbital auf einer Geraden.
- **D:** Ein s-Orbital kann maximal 6 Elektronen aufnehmen, ein p-Orbital nur maximal 2 Elektronen.
- **E:** s-Orbitale existieren nur bei Metallen, p-Orbitale nur bei Nichtmetallen.

**Richtige Antwort:** **B**

**Erklärung:**
Die Orbitale unterscheiden sich durch ihre Nebenquantenzahl $l$, welche die räumliche Gestalt bestimmt:
- **s-Orbitale ($l = 0$):** Sind streng kugelsymmetrisch (radialsymmetrisch). Die Aufenthaltswahrscheinlichkeit hängt nur vom Kernabstand $r$ ab, nicht von der Raumrichtung. Sie besitzen keine Winkelknotenebene durch das Zentrum.
- **p-Orbitale ($l = 1$):** Sind hantelförmig entlang der drei Raumachsen ($p_x, p_y, p_z$) orientiert. Sie besitzen eine Knotenebene, die exakt durch den Atomkern verläuft und auf der die Aufenthaltswahrscheinlichkeitsdichte identisch null ist ($|\psi|^2 = 0$).

**Analyse der Falschantworten:**
- **A** vertauscht die Knotenebenen.
- **C** unterliegt dem veralteten Bohrschen Bahnmodell (Elektronen bewegen sich nicht auf deterministischen Bahnen).
- **D** vertauscht die Schalenkapazitäten ($s$ fasst 2 Elektronen, die drei $p$-Orbitale zusammen 6).
- **E** ist chemisch falsch (fast alle Atome ab der 2. Periode besitzen sowohl s- als auch p-Orbitale).

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Orbitale, Aufenthaltswahrscheinlichkeit, s-Orbital, p-Orbital, Knotenebene*

---

### Frage 118 (chem-02-set5-q118)
**Thema:** Komplexe Fehleranalyse — Fortgeschrittene Mikrokosmos-Konzepte

Welche der folgenden fünf Aussagen über quantenphysikalische Gesetzmäßigkeiten im Mikrokosmos enthält eine unzutreffende (falsche) Behauptung?

- **A:** Das Davisson-Germer-Experiment wies durch Beugungsmuster an Nickel-Einkristallen nach, dass sich Elektronen wie De-Broglie-Materiewellen verhalten.
- **B:** Die Heisenbergsche Unschärferelation $\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$ erzwingt, dass ein physikalisches System selbst am absoluten Temperaturnullpunkt ($0\,\text{K}$) eine nicht verschwindende Nullpunktsenergie besitzt.
- **C:** Im sichtbaren Bereich des Wasserstoffspektrums (Balmer-Serie) nimmt der energetische Abstand zwischen benachbarten Spektrallinien mit wachsender Frequenz immer weiter zu, sodass die Linien im kurzwelligen Bereich immer weiter auseinanderliegen.
- **D:** Die Austrittsarbeit $W_A$ beim äußeren Photoeffekt ist eine materialspezifische Eigenschaft der Photokathode und unabhängig von der Frequenz des einfallenden Lichts.
- **E:** Ein Photon besitzt eine Ruhemasse von $m_0 = 0$, überträgt jedoch bei Stoßprozessen einen wohlbestimmten mechanischen Impuls von $p = \frac{h}{\lambda}$.

**Richtige Antwort:** **C**

**Erklärung:**
Aussage C ist falsch (und damit die gesuchte Antwort):
Die Energieniveaus des Wasserstoffatoms gehorchen $E_n = -13{,}6\,\text{eV} / n^2$. Für höhere Quantenzahlen $n$ rücken die Energieniveaus immer dichter zusammen ($\lim_{n \rightarrow \infty} (E_{n+1} - E_n) = 0$).
Daher rücken auch die Spektrallinien der Balmer-Serie bei höheren Frequenzen (kürzeren Wellenlängen) immer enger aneinander, bis sie an der Seriengrenze ($n = \infty \rightarrow 2$, $\lambda \approx 365\,\text{nm}$) in ein kontinuierliches Spektrum übergehen!
Die Aussagen A, B, D und E sind uneingeschränkt korrekt.

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Fehleranalyse, Balmer-Serie, Seriengrenze, De-Broglie, Unschärferelation, Photoeffekt*

---

### Frage 119 (chem-02-set5-q119)
**Thema:** Linienspektren — Maximale Anzahl von Spektrallinien in einer Gasentladung

Ein Gas aus atomarem Wasserstoff wird durch energiereiche Elektronenstöße so angeregt, dass sich die Elektronen in den Atomen im Quantenzustand $n = 4$ befinden. Wie viele unterschiedliche Spektrallinien können in der Folge durch spontane Abregung bis in den Grundzustand ($n = 1$) im gesamten Ensemble emittiert werden, und wie verteilen sich diese auf die bekannten Spektralserien?

- **A:** Genau 3 Linien (alle gehören zur Lyman-Serie).
- **B:** Genau 4 Linien (jeweils eine für jedes Quantenniveau).
- **C:** Insgesamt 6 Linien (3 Lyman-Linien, 2 Balmer-Linien und 1 Paschen-Linie).
- **D:** Insgesamt 10 Linien (gleichmäßig im Spektrum verteilt).
- **E:** Unendlich viele Linien, da der Zerfall kontinuierlich erfolgt.

**Richtige Antwort:** **C**

**Erklärung:**
Die Anzahl aller möglichen verschiedenen Zweiniveau-Übergänge zwischen $n$ diskreten Niveaus berechnet sich über die Kombinatorik:
$$N = \frac{n \cdot (n - 1)}{2}$$
Für $n = 4$ gilt:
$$N = \frac{4 \cdot 3}{2} = 6\text{ unterschiedliche Spektrallinien}$$
Aufschlüsselung nach den Endniveaus (Spektralserien):

1. **Übergänge nach $n_1 = 1$ (Lyman-Serie, UV):**
- $4 \rightarrow 1$ (Lyman-$\gamma$)
- $3 \rightarrow 1$ (Lyman-$\beta$)
- $2 \rightarrow 1$ (Lyman-$\alpha$)
$\rightarrow 3$ Lyman-Linien

2. **Übergänge nach $n_1 = 2$ (Balmer-Serie, VIS):**
- $4 \rightarrow 2$ (Balmer-$\beta$)
- $3 \rightarrow 2$ (Balmer-$\alpha$)
$\rightarrow 2$ Balmer-Linien

3. **Übergänge nach $n_1 = 3$ (Paschen-Serie, IR):**
- $4 \rightarrow 3$ (Paschen-$\alpha$)
$\rightarrow 1$ Paschen-Linie

Summe: $3 + 2 + 1 = 6$ Linien.

**Analyse der Falschantworten:**
- **A** vergisst Kaskadenübergänge.
- **B** nennt stur die Hauptquantenzahl.
- **D** und **E** widersprechen der quantenmechanischen Diskretisierung.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Linienspektren, Wasserstoffatom, Lyman-Serie, Balmer-Serie, Paschen-Serie, Kombinatorik*

---

### Frage 120 (chem-02-set5-q120)
**Thema:** Chemischer Periodentrend der Austrittsarbeit bei Alkalimetallen

Betrachtet man die 1. Hauptgruppe des Periodensystems (Alkalimetalle), sinken die materialcharakteristischen Austrittsarbeiten $W_A$ für den Photoeffekt von oben nach unten systematisch ab:
$$\text{Li}\,(2{,}9\,\text{eV}) > \text{Na}\,(2{,}4\,\text{eV}) > \text{K}\,(2{,}3\,\text{eV}) > \text{Rb}\,(2{,}2\,\text{eV}) > \text{Cs}\,(2{,}1\,\text{eV})$$
Welche atomare Ursache begründet diesen Trend und macht Caesium zum empfindlichsten Photokathoden-Material für sichtbares Licht?

- **A:** Caesiumatome besitzen keine Neutronen, wodurch die Kernmasse minimal ist.
- **B:** Die Austrittsarbeit sinkt, weil Caesium bei Raumtemperatur radioaktiv zerfällt.
- **C:** Caesium besitzt eine höhere Elektronegativität als Lithium und stößt Elektronen daher aktiv ab.
- **D:** Caesium bildet im metallischen Festkörper kovalente Dreifachbindungen aus.
- **E:** Von Lithium zu Caesium wächst die Anzahl der abgeschlossenen inneren Elektronenschalen; der Atomradius wird deutlich größer und die kernnahen Elektronen schirmen die Kernladung effektiver ab, sodass das einzelne Valenzelektron im Metallgitter energetisch viel lockerer gebunden ist und mit minimaler Photonenenergie herausgelöst werden kann.

**Richtige Antwort:** **E**

**Erklärung:**
Die Austrittsarbeit $W_A$ eines Metalls korreliert eng mit der ersten Ionisierungsenergie seiner Atome:
- Entlang einer Hauptgruppe von oben nach unten kommt mit jeder Periode eine neue Hauptschale hinzu.
- Das äußerste Valenzelektron ($ns^1$) befindet sich bei Caesium auf der 6. Schale ($6s^1$), in sehr großem Abstand zum Atomkern.
- Die 54 inneren Rumpfelektronen schirmen die Kernladung $+55e$ hochgradig ab.
- Folglich ist das Valenzelektron im metallischen Elektronengas nur sehr schwach gebunden. Es genügt eine minimale Energie von nur $2{,}1\,\text{eV}$ (entsprechend einer Grenzwellenlänge von $\lambda_0 \approx \frac{1240}{2{,}1} \approx 590\,\text{nm}$), um es freizusetzen. Caesium reagiert daher bereits auf gelboranges Licht!

**Analyse der Falschantworten:**
- **A**, **B**, **C** und **D** sind absurde Fehlannahmen über Alkalimetalle.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Austrittsarbeit, Alkalimetalle, Caesium, Periodensystem, Atomradius*

---

### Frage 121 (chem-02-set5-q121)
**Thema:** Unschärferelation — Quantitative Abschätzung im Bereich atomarer Radien

Ein Elektron wird experimentell in einem eindimensionalen Bereich der Breite $\Delta x = 0{,}05\,\text{nm}$ ($5 \cdot 10^{-11}\,\text{m}$, etwa halber Durchmesser eines Wasserstoffatoms) nachgewiesen. Welcher Mindestwert resultiert daraus für die Impulsunschärfe $\Delta p$ des Elektrons?
(Verwende den gerundeten Wert $\frac{h}{4\pi} \approx 0{,}5 \cdot 10^{-34}\,\text{J}\cdot\text{s}$).

- **A:** $\Delta p \ge 1{,}0 \cdot 10^{-45}\,\text{kg}\cdot\text{m/s}$
- **B:** $\Delta p \ge 2{,}5 \cdot 10^{-43}\,\text{kg}\cdot\text{m/s}$
- **C:** $\Delta p \ge 5{,}0 \cdot 10^{-15}\,\text{kg}\cdot\text{m/s}$
- **D:** $\Delta p \ge 1{,}0 \cdot 10^{-22}\,\text{kg}\cdot\text{m/s}$
- **E:** $\Delta p \ge 1{,}0 \cdot 10^{-24}\,\text{kg}\cdot\text{m/s}$

**Richtige Antwort:** **E**

**Erklärung:**
Nach der Heisenbergschen Unschärferelation gilt:
$$\Delta x \cdot \Delta p \ge \frac{h}{4\pi} \implies \Delta p \ge \frac{h}{4\pi \cdot \Delta x}$$
Werte einsetzen:
- $\Delta x = 0{,}05\,\text{nm} = 5 \cdot 10^{-11}\,\text{m}$
- $\frac{h}{4\pi} \approx 0{,}5 \cdot 10^{-34}\,\text{J}\cdot\text{s}$
$$\Delta p \ge \frac{0{,}5 \cdot 10^{-34}\,\text{J}\cdot\text{s}}{5 \cdot 10^{-11}\,\text{m}} = \frac{0{,}5}{5} \cdot 10^{-34 - (-11)} = 0{,}1 \cdot 10^{-23}\,\text{kg}\cdot\text{m/s} = 1{,}0 \cdot 10^{-24}\,\text{kg}\cdot\text{m/s}$$
(Teilt man diesen Impuls durch die Elektronenmasse $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$, resultiert eine Geschwindigkeitsunschärfe von über $10^6\,\text{m/s}$!).

**Analyse der Falschantworten:**
- **A** und **B** multiplizieren die Exponenten fehlerhaft ($-34 + (-11) = -45$).
- **C** ist um viele Größenordnungen zu groß.
- **D** verrechnet sich bei den Zehnerpotenzen um den Faktor 100.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Unschärferelation, Impulsunschärfe, Elektron, Kopfrechnen*

---

### Frage 122 (chem-02-set5-q122)
**Thema:** Synthese: Balmer-Emission als Anreger eines Photoeffekts

Ein Photon, das beim Übergang eines Elektrons von $n = 4$ nach $n = 2$ im Wasserstoffatom emittiert wird ($H_\beta$-Linie, $\Delta E = 2{,}55\,\text{eV}$), trifft unmittelbar auf eine benachbarte Metalloberfläche mit der Austrittsarbeit $W_A = 1{,}80\,\text{eV}$. Tritt ein äußerer Photoeffekt auf, und falls ja, welche Gegenspannung $U_0$ ist nötig, um den resultierenden Photostrom vollständig zu stoppen?

- **A:** Es tritt kein Photoeffekt auf, da die Energie der $H_\beta$-Linie zu gering ist.
- **B:** Es tritt ein Photoeffekt auf; die erforderliche Bremsspannung beträgt $U_0 = 2{,}55\,\text{V}$.
- **C:** Es tritt ein Photoeffekt auf; die erforderliche Bremsspannung beträgt $U_0 = 1{,}80\,\text{V}$.
- **D:** Es tritt ein Photoeffekt auf; die erforderliche Bremsspannung beträgt $U_0 = 0{,}75\,\text{V}$.
- **E:** Es tritt ein Photoeffekt auf; die erforderliche Bremsspannung beträgt $U_0 = 4{,}35\,\text{V}$.

**Richtige Antwort:** **D**

**Erklärung:**
1. **Photonenenergie des Wasserstoffübergangs prüfen:**
$$E_{\text{Photon}} = \Delta E_{4\rightarrow 2} = 2{,}55\,\text{eV}$$

2. **Schwellenbedingung abgleichen:**
Da $E_{\text{Photon}} = 2{,}55\,\text{eV} > W_A = 1{,}80\,\text{eV}$ ist, wird die Austrittsarbeit überschritten $\rightarrow$ Photoelektrischer Effekt findet statt.

3. **Maximale kinetische Energie und Bremsspannung berechnen:**
$$E_{\text{kin,max}} = E_{\text{Photon}} - W_A = 2{,}55\,\text{eV} - 1{,}80\,\text{eV} = 0{,}75\,\text{eV}$$
$$e \cdot U_0 = E_{\text{kin,max}} \implies e \cdot U_0 = 0{,}75\,\text{eV} \implies U_0 = 0{,}75\,\text{V}$$

**Analyse der Falschantworten:**
- **A** verkennt, dass $2{,}55\,\text{eV} > 1{,}80\,\text{eV}$ ist.
- **B** nennt die Photonenenergie in Volt.
- **C** nennt die Austrittsarbeit in Volt.
- **E** addiert fälschlicherweise Photonenenergie und Austrittsarbeit ($2{,}55 + 1{,}80 = 4{,}35\,\text{V}$).

*Schwierigkeit: hard* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Wasserstoffatom, Balmer-Serie, Bremsspannung, Synthese*

---

### Frage 123 (chem-02-set5-q123)
**Thema:** Atomare Spektren — Absorptionsspektrum von kaltem Wasserstoffgas

Leitet man kontinuierliches weißes Licht durch ein Gefäß mit nicht angeregtem, kaltem atomarem Wasserstoffgas bei Raumtemperatur ($T \approx 20\ ^\circ\text{C}$), beobachtet man im Spektrometer ausschließlich die dunklen Absorptionslinien der Lyman-Serie, jedoch keine einzige Absorptionslinie der Balmer-Serie. Welche quantenphysikalische Ursache begründet dieses Phänomen?

- **A:** Wasserstoffatome können prinzipiell nur ultraviolette Photonen absorbieren; sichtbares Licht wird von Atomen immer reflektiert.
- **B:** Bei Raumtemperatur reicht die thermische Energie bei weitem nicht aus, um Elektronen in das Niveau $n = 2$ anzuregen; praktisch alle Atome befinden sich im Grundzustand $n = 1$, weshalb nur Absorptionen stattfinden können, die in $n = 1$ starten (Lyman-Serie).
- **C:** Die Balmer-Serie existiert ausschließlich bei Temperaturen über $10^6\,\text{K}$.
- **D:** Die Heisenbergsche Unschärferelation verbietet die Absorption von sichtbarem Licht im ungeladenen Zustand.
- **E:** Weil die Balmer-Linien durch destruktive Interferenz im Gas vollständig ausgelöscht werden.

**Richtige Antwort:** **B**

**Erklärung:**
Damit ein Atom ein Photon einer Spektrallinie absorbieren kann, muss sich das Elektron bereits auf dem Anfangsniveau dieses Übergangs befinden:
- **Balmer-Linien:** Erfordern zwingend das Startniveau $n = 2$ (Übergänge von $n = 2 \rightarrow n \ge 3$).
- **Energiedifferenz:** Der erste Anregungssprung vom Grundzustand ($n = 1$) in den Zustand $n = 2$ erfordert eine gewaltige Energie von $\Delta E = E_2 - E_1 = -3{,}4\,\text{eV} - (-13{,}6\,\text{eV}) = 10{,}2\,\text{eV}$.
- **Thermische Energie:** Die mittlere thermische Energie der Atome bei Raumtemperatur ($T \approx 300\,\text{K}$) liegt bei nur rund $k_B T \approx 0{,}025\,\text{eV}$ ($\approx \frac{1}{40}\,\text{eV}$). Diese winzige thermische Energie reicht bei weitem nicht aus, um Elektronen nach $n = 2$ anzuregen.
Folglich befinden sich bei Raumtemperatur nahezu 100 % aller Wasserstoffatome im Grundzustand ($n = 1$). Sie können daher nur Photonen absorbieren, deren Übergänge in $n = 1$ beginnen — und das ist per definitionem die Lyman-Serie im UV-Bereich.
Erst bei extrem hohen Temperaturen (z. B. in heißen Sternatmosphären bei mehreren tausend Kelvin) sind signifikante Mengen an Atomen thermisch in $n = 2$ besetzt, sodass dort die berühmten Fraunhofer-Balmer-Absorptionslinien des sichtbaren Lichts auftreten.

**Analyse der Falschantworten:**
- **A**, **C**, **D** und **E** sind physikalisch unzutreffende Scheinerklärungen.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Wasserstoffatom, Absorptionsspektrum, Boltzmann-Verteilung, Lyman-Serie, Balmer-Serie, Grundzustand*

---

### Frage 124 (chem-02-set5-q124)
**Thema:** Photoeffekt — Bestimmung der Grenzfrequenz aus zwei Messpunkten

In einer Messreihe zum äußeren Photoeffekt werden für zwei verschiedene Frequenzen die folgenden Bremsspannungen gemessen:
- Messpunkt 1: Bei $f_1 = 6 \cdot 10^{14}\,\text{Hz}$ beträgt die Bremsspannung $U_{0,1} = 0{,}48\,\text{V}$.
- Messpunkt 2: Bei $f_2 = 10 \cdot 10^{14}\,\text{Hz}$ beträgt die Bremsspannung $U_{0,2} = 2{,}14\,\text{V}$.

Welche materialcharakteristische Grenzfrequenz $f_0$ besitzt die verwendete Photokathode näherungsweise?
(Hinweis: Nutze $\frac{h}{e} \approx 4{,}14 \cdot 10^{-15}\,\text{V}\cdot\text{s}$ bzw. $\Delta U_0 = \frac{h}{e} \cdot \Delta f$).

- **A:** $f_0 \approx 1{,}0 \cdot 10^{14}\,\text{Hz}$
- **B:** $f_0 \approx 2{,}4 \cdot 10^{14}\,\text{Hz}$
- **C:** $f_0 \approx 4{,}8 \cdot 10^{14}\,\text{Hz}$
- **D:** $f_0 \approx 6{,}0 \cdot 10^{14}\,\text{Hz}$
- **E:** $f_0 \approx 8{,}0 \cdot 10^{14}\,\text{Hz}$

**Richtige Antwort:** **C**

**Erklärung:**
1. **Steigung der Einstein-Geraden prüfen:**
$$\frac{\Delta U_0}{\Delta f} = \frac{2{,}14\,\text{V} - 0{,}48\,\text{V}}{(10 - 6) \cdot 10^{14}\,\text{s}^{-1}} = \frac{1{,}66\,\text{V}}{4 \cdot 10^{14}\,\text{s}^{-1}} = 0{,}415 \cdot 10^{-14}\,\text{V}\cdot\text{s} = 4{,}15 \cdot 10^{-15}\,\text{V}\cdot\text{s} \approx \frac{h}{e}$$

2. **Austrittsarbeit in Elektronenvolt bestimmen:**
Aus der Einstein-Gleichung für Messpunkt 1 folgt:
$$E_{\text{kin,1}} = h \cdot f_1 - W_A \implies e \cdot U_{0,1} = h \cdot f_1 - W_A$$
$$\frac{W_A}{e} = \frac{h}{e} \cdot f_1 - U_{0,1} = (4{,}14 \cdot 10^{-15}\,\text{V}\cdot\text{s}) \cdot (6 \cdot 10^{14}\,\text{s}^{-1}) - 0{,}48\,\text{V}$$
$$\frac{W_A}{e} = 2{,}48\,\text{V} - 0{,}48\,\text{V} = 2{,}00\,\text{V} \implies W_A = 2{,}00\,\text{eV}$$

3. **Grenzfrequenz $f_0$ berechnen:**
An der Schwelle gilt $h \cdot f_0 = W_A \implies f_0 = \frac{W_A}{h} = \frac{W_A/e}{h/e}$:
$$f_0 = \frac{2{,}00\,\text{V}}{4{,}14 \cdot 10^{-15}\,\text{V}\cdot\text{s}} \approx 0{,}483 \cdot 10^{15}\,\text{s}^{-1} \approx 4{,}8 \cdot 10^{14}\,\text{Hz}$$
(Probe: Liegt wie erwartet knapp unterhalb von $f_1 = 6 \cdot 10^{14}\,\text{Hz}$).

**Analyse der Falschantworten:**
- **A** und **B** schätzen die Grenzfrequenz viel zu tief.
- **D** setzt $f_0 = f_1$ an (bei $f_1$ treten aber bereits Elektronen mit $0{,}48\,\text{eV}$ aus!).
- **E** liegt oberhalb von $f_1$.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Photoeffekt, Grenzfrequenz, Bremsspannung, Geradengleichung, Steigung*

---

### Frage 125 (chem-02-set5-q125)
**Thema:** Master-Synthese: Vergleich von Photon und Elektron bei gleicher Wellenlänge

Gegeben sind ein Photon und ein nicht-relativistisches Elektron, die im Vakuum die exakt gleiche De-Broglie-Wellenlänge von $\lambda = 0{,}20\,\text{nm}$ ($200\,\text{pm}$) aufweisen. Welche Aussage über den Impuls $p$, die kinetische Energie des Elektrons ($E_{\text{kin,e}}$) und die Photonenenergie ($E_{\text{Photon}}$) ist uneingeschränkt korrekt?
(Konstanten: $h \cdot c \approx 1240\,\text{eV}\cdot\text{nm}$; $m_e \approx 9{,}1 \cdot 10^{-31}\,\text{kg}$; $1\,\text{eV} \approx 1{,}6 \cdot 10^{-19}\,\text{J}$).

- **A:** Beide Teilchen besitzen denselben Impuls ($p_{\text{Photon}} = p_e$), aber das Photon trägt eine dramatisch höhere Energie als das Elektron ($E_{\text{Photon}} = 6200\,\text{eV} \gg E_{\text{kin,e}} \approx 37{,}6\,\text{eV}$).
- **B:** Beide Teilchen besitzen exakt dieselbe Energie und denselben Impuls, da ihre Wellenlängen identisch sind.
- **C:** Das Elektron besitzt einen viel größeren Impuls als das Photon, da das Elektron eine Ruhemasse besitzt.
- **D:** Das Photon besitzt eine kinetische Energie von null, da es keine Masse hat.
- **E:** Das Elektron besitzt eine höhere Energie als das Photon, da seine Geschwindigkeit größer als $c$ ist.

**Richtige Antwort:** **A**

**Erklärung:**
Diese Master-Frage fasst den Teilchen-Welle-Dualismus des gesamten Kapitels zusammen:

1. **Impulsvergleich:**
Nach Louis de Broglie gilt für jedes Quantenobjekt:
$$p = \frac{h}{\lambda}$$
Da $\lambda = 0{,}20\,\text{nm}$ für Photon und Elektron identisch ist, besitzen beide exakt denselben Impuls:
$$p_{\text{Photon}} = p_e = \frac{6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s}}{0{,}2 \cdot 10^{-9}\,\text{m}} = 3{,}3 \cdot 10^{-24}\,\text{kg}\cdot\text{m/s}$$

2. **Photonenenergie ($m_0 = 0$):**
$$E_{\text{Photon}} = \frac{h \cdot c}{\lambda} \approx \frac{1240\,\text{eV}\cdot\text{nm}}{0{,}20\,\text{nm}} = 6200\,\text{eV} = 6{,}2\,\text{keV}$$

3. **Kinetische Energie des Elektrons ($m_e > 0$):**
$$E_{\text{kin,e}} = \frac{p^2}{2 m_e} = \frac{(3{,}3 \cdot 10^{-24})^2}{2 \cdot 9{,}1 \cdot 10^{-31}} \approx \frac{10{,}89 \cdot 10^{-48}}{18{,}2 \cdot 10^{-31}} \approx 0{,}6 \cdot 10^{-17}\,\text{J} = 6{,}0 \cdot 10^{-18}\,\text{J}$$
In Elektronenvolt:
$$E_{\text{kin,e}} = \frac{6{,}0 \cdot 10^{-18}\,\text{J}}{1{,}6 \cdot 10^{-19}\,\text{J/eV}} \approx 37{,}6\,\text{eV}$$

4. **Synthese:**
Obwohl beide denselben Impuls und dieselbe Wellenlänge tragen, besitzt das masselose Photon ($6200\,\text{eV}$, Röntgenstrahlung) eine rund 165-mal höhere Energie als das massebehaftete Elektron ($37{,}6\,\text{eV}$)!

**Analyse der Falschantworten:**
- **B** verwechselt Impulsgleichheit mit Energiegleichheit (gilt nur, wenn beide Teilchen dieselbe Dispersionsrelation hätten).
- **C** ignoriert die universelle Gültigkeit von $p = h/\lambda$.
- **D** und **E** sind absurde physikalische Fehlaussagen.

*Schwierigkeit: medium* | *Tags: BMS, Chemie, Mikrokosmos, Teilchen-Welle-Dualismus, De-Broglie, Photon, Elektron, Impuls, Energievergleich, Synthese*

---

