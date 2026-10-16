# Kapitel 6: Vektorrechnung — Set 3 (Fragen 051 bis 075)

**Kapitel 6: Vektorrechnung — 125 MedAT-style BMS Practice Questions**
*VMC/MEDBREAKER-aligned Practice für den Aufnahmetest MedAT (Humanmedizin / Zahnmedizin)*

---

### Frage 051: Vektoraddition / -subtraktion — Kollinearität zweier Vektoren

**Schwierigkeit:** Leicht

**Fragetext:**
Wann sind zwei vom Nullvektor verschiedene Vektoren $\vec{a}$ und $\vec{b}$ kollinear (parallel oder antiparallel)?

**Antwortoptionen:**
- (A) Wenn ihr Skalarprodukt genau 1 ergibt ($\vec{a} \cdot \vec{b} = 1$).
- (B) Wenn sie denselben Betrag besitzen ($|\vec{a}| = |\vec{b}|$).
- (C) Wenn einer der Vektoren ein skalares Vielfaches des anderen ist ($\vec{a} = k \cdot \vec{b}$ mit $k \in \mathbb{R} \setminus \{0\}$).
- (D) Wenn ihre Summe den Betrag 0 hat ($|\vec{a} + \vec{b}| = 0$).
- (E) Wenn sie orthogonal zueinander stehen.

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Kollinearität zweier Vektoren bedeutet geometrisch, dass sie parallel zur selben Richtungsgeraden verlaufen. Algebraisch drückt sich dies dadurch aus, dass ein Vektor ein skalares Vielfaches des anderen ist: $\vec{a} = k \cdot \vec{b}$ mit $k \ne 0$. Bei $k > 0$ sind sie gleichgerichtet (parallel), bei $k < 0$ entgegengesetzt gerichtet (antiparallel).

**Lernkonzept / Mental Shortcut:**
Definition der Kollinearität

---

### Frage 052: Vektoraddition / -subtraktion — Addition von drei Vektoren im Raum

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die Vektoren $\vec{u} = \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}$, $\vec{v} = \begin{pmatrix} -3 \\ 0 \\ 2 \end{pmatrix}$ und $\vec{w} = \begin{pmatrix} 5 \\ 4 \\ -3 \end{pmatrix}$. Welcher Vektor entspricht der Summe $\vec{r} = \vec{u} + \vec{v} + \vec{w}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 4 \\ 3 \\ 3 \end{pmatrix}$
- (B) $\begin{pmatrix} 4 \\ -3 \\ 3 \end{pmatrix}$
- (C) $\begin{pmatrix} 0 \\ 3 \\ 9 \end{pmatrix}$
- (D) $\begin{pmatrix} 4 \\ 3 \\ -3 \end{pmatrix}$
- (E) $\begin{pmatrix} -4 \\ 3 \\ 3 \end{pmatrix}$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Die Addition erfolgt komponentenweise über alle drei Summanden:\n$r_x = 2 + (-3) + 5 = 4$\n$r_y = -1 + 0 + 4 = 3$\n$r_z = 4 + 2 + (-3) = 3$\nSomit ist $\vec{r} = \begin{pmatrix} 4 \\ 3 \\ 3 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Komponentenweise Addition mehrerer Vektoren

---

### Frage 053: Vektoraddition / -subtraktion — Punktverschiebung / Translation im Raum

**Schwierigkeit:** Mittel

**Fragetext:**
Ein Punkt $P(3 \mid -2 \mid 5)$ wird um den Verschiebungsvektor $\vec{v} = \begin{pmatrix} -4 \\ 6 \\ -1 \end{pmatrix}$ verschoben. Welche Koordinaten besitzt der Bildpunkt $P'$?

**Antwortoptionen:**
- (A) $(7 \mid -8 \mid 6)$
- (B) $(-7 \mid 8 \mid -6)$
- (C) $(-1 \mid -8 \mid 4)$
- (D) $(1 \mid 4 \mid 4)$
- (E) $(-1 \mid 4 \mid 4)$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Der Ortsvektor des Bildpunkts $P'$ ergibt sich durch Addition des Verschiebungsvektors zum Ortsvektor von $P$:\n$\vec{OP'} = \vec{OP} + \vec{v} = \begin{pmatrix} 3 \\ -2 \\ 5 \end{pmatrix} + \begin{pmatrix} -4 \\ 6 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 - 4 \\ -2 + 6 \\ 5 - 1 \end{pmatrix} = \begin{pmatrix} -1 \\ 4 \\ 4 \end{pmatrix}$.\nFolglich ist $P'(-1 \mid 4 \mid 4)$.

**Lernkonzept / Mental Shortcut:**
Punktverschiebung durch Vektoraddition

---

### Frage 054: Vektoraddition / -subtraktion — Kollinearitätsbedingung im 3D-Raum

**Schwierigkeit:** Mittel

**Fragetext:**
Die beiden Vektoren $\vec{a} = \begin{pmatrix} 3 \\ -6 \\ 9 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} -2 \\ 4 \\ z \end{pmatrix}$ sollen kollinear (parallel) sein. Welchen Wert muss die Komponente $z$ annehmen?

**Antwortoptionen:**
- (A) $6$
- (B) $-6$
- (C) $-9$
- (D) $3$
- (E) $-3$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Damit $\vec{a}$ und $\vec{b}$ kollinear sind, muss das Verhältnis der entsprechenden Komponenten konstant sein: $\frac{b_x}{a_x} = \frac{-2}{3}$ und $\frac{b_y}{a_y} = \frac{4}{-6} = -\frac{2}{3}$. Für die $z$-Komponente muss somit ebenfalls gelten: $\frac{z}{9} = -\frac{2}{3} \implies z = 9 \cdot \left(-\frac{2}{3}\right) = -6$.

**Lernkonzept / Mental Shortcut:**
Komponentenverhältnis bei Kollinearität

---

### Frage 055: Vektoraddition / -subtraktion — Teilungspunkt einer Strecke im Verhältnis 1:2

**Schwierigkeit:** Schwer

**Fragetext:**
Die Punkte $A(1 \mid 4 \mid -2)$ und $B(7 \mid 1 \mid 4)$ bestimmen eine Strecke $AB$. Welcher Punkt $T$ teilt die Strecke $AB$ von $A$ aus gesehen im Verhältnis $1 : 2$ (d. h. $|\vec{AT}| : |\vec{TB}| = 1 : 2$)?

**Antwortoptionen:**
- (A) $(4 \mid 2{,}5 \mid 1)$
- (B) $(5 \mid 2 \mid 2)$
- (C) $(2 \mid -1 \mid 2)$
- (D) $(3 \mid 3 \mid 0)$
- (E) $(3 \mid 2 \mid 0)$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Ein Teilungsverhältnis von $1 : 2$ bedeutet, dass der Vektor $\vec{AT}$ genau $\frac{1}{1+2} = \frac{1}{3}$ des Gesamtvektors $\vec{AB}$ ausmacht.\n1) Verbindungsvektor: $\vec{AB} = \vec{B} - \vec{A} = \begin{pmatrix} 7 - 1 \\ 1 - 4 \\ 4 - (-2) \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \\ 6 \end{pmatrix}$.\n2) Teilvektor: $\vec{AT} = \frac{1}{3} \vec{AB} = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$.\n3) Ortsvektor: $\vec{OT} = \vec{OA} + \vec{AT} = \begin{pmatrix} 1 \\ 4 \\ -2 \end{pmatrix} + \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 3 \\ 0 \end{pmatrix} \implies T(3 \mid 3 \mid 0)$.

**Lernkonzept / Mental Shortcut:**
Streckenteilung mittels Vektorrechnung

---

### Frage 056: Betrag — Betrag des Nullvektors

**Schwierigkeit:** Leicht

**Fragetext:**
Welcher Vektor im $\mathbb{R}^3$ ist der einzige Vektor mit der Eigenschaft $|\vec{v}| = 0$?

**Antwortoptionen:**
- (A) Jeder beliebige Einheitsvektor $\vec{e}$.
- (B) Der Vektor $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$.
- (C) Der Nullvektor $\vec{0} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$.
- (D) Jeder Vektor mit mindestens einer negativen Komponente.
- (E) Ein solcher Vektor existiert nicht, da Vektorbeträge stets strikt größer als 0 sein müssen.

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Nach den Axiomen einer Norm gilt die Definitheit: $|\vec{v}| = 0 \iff \vec{v} = \vec{0}$. Nur der Nullvektor, dessen sämtliche Komponenten gleich 0 sind, besitzt die euklidische Länge 0. Für jeden anderen Vektor gilt stets $|\vec{v}| > 0$.

**Lernkonzept / Mental Shortcut:**
Definitheit der Vektornorm

---

### Frage 057: Betrag — 3D-Betrag mit pythagoreischem Tripel (2,4,4)

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben ist der Vektor $\vec{v} = \begin{pmatrix} 4 \\ -2 \\ 4 \end{pmatrix}$. Welchen Betrag hat $\vec{v}$?

**Antwortoptionen:**
- (A) $6$
- (B) $10$
- (C) $\sqrt{20}$
- (D) $8$
- (E) $36$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Der Betrag berechnet sich über: $|\vec{v}| = \sqrt{4^2 + (-2)^2 + 4^2} = \sqrt{16 + 4 + 16} = \sqrt{36} = 6$. Dies basiert auf dem pythagoreischen Raumtripel $(2, 4, 4) \to 6$.

**Lernkonzept / Mental Shortcut:**
Euklidischer Betrag im 3D-Raum

---

### Frage 058: Betrag — Betrag eines Vektors aus Koordinaten-Gitter (Diagramm)

**Schwierigkeit:** Mittel

**Fragetext:**
In einem kartesischen Koordinatengitter verläuft ein Vektor $\vec{v}$ vom Punkt $A(-1 \mid 2)$ zum Punkt $B(3 \mid -1)$. Welchen Betrag hat dieser Verbindungsvektor $\vec{AB}$?

**Antwortoptionen:**
- (A) $7$
- (B) $\sqrt{7}$
- (C) $1$
- (D) $25$
- (E) $5$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
1) Verbindungsvektor aufstellen: $\vec{AB} = \begin{pmatrix} 3 - (-1) \\ -1 - 2 \end{pmatrix} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$.\n2) Betrag berechnen: $|\vec{AB}| = \sqrt{4^2 + (-3)^2} = \sqrt{16 + 9} = \sqrt{25} = 5$.

**Lernkonzept / Mental Shortcut:**
Abstand zweier Punkte im Koordinatengitter

---

### Frage 059: Betrag — Punktabstand im 3D-Raum

**Schwierigkeit:** Mittel

**Fragetext:**
Wie groß ist der Abstand zwischen den Punkten $A(1 \mid 3 \mid -1)$ und $B(3 \mid 6 \mid 5)$ im dreidimensionalen Raum?

**Antwortoptionen:**
- (A) $9$
- (B) $7$
- (C) $\sqrt{11}$
- (D) $11$
- (E) $5$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Der Verbindungsvektor lautet: $\vec{AB} = \vec{B} - \vec{A} = \begin{pmatrix} 3 - 1 \\ 6 - 3 \\ 5 - (-1) \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$.\nSein Betrag ergibt sich direkt aus dem Raumtripel $(2, 3, 6)$: $d(A, B) = |\vec{AB}| = \sqrt{2^2 + 3^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.

**Lernkonzept / Mental Shortcut:**
Punktabstand über Raumtripel

---

### Frage 060: Betrag — Verhältnis zweier Vektorbeträge

**Schwierigkeit:** Schwer

**Fragetext:**
Gegeben sind die Vektoren $\vec{a} = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} 4 \\ 7 \\ 4 \end{pmatrix}$ im dreidimensionalen Raum. Um welchen Faktor ist der Betrag von $\vec{b}$ größer als der Betrag von $\vec{a}$ (d. h. wie lautet das Verhältnis $\frac{|\vec{b}|}{|\vec{a}|}$)?

**Antwortoptionen:**
- (A) $2$
- (B) $2{,}5$
- (C) $\sqrt{3}$
- (D) $3$
- (E) $9$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
1) Betrag von $\vec{a}$: $|\vec{a}| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = \sqrt{9} = 3$.\n2) Betrag von $\vec{b}$: $|\vec{b}| = \sqrt{4^2 + 7^2 + 4^2} = \sqrt{16 + 49 + 16} = \sqrt{81} = 9$.\n3) Verhältnis: $\frac{|\vec{b}|}{|\vec{a}|} = \frac{9}{3} = 3$.

**Lernkonzept / Mental Shortcut:**
Vergleich von Vektornormen

---

### Frage 061: Einheitsvektor — Kanonische Einheitsvektoren der Koordinatenachsen

**Schwierigkeit:** Leicht

**Fragetext:**
Welcher der folgenden Vektoren stellt den kartesischen Einheitsvektor in Richtung der positiven $y$-Achse im dreidimensionalen Raum $\mathbb{R}^3$ dar?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$
- (B) $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$
- (C) $\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$
- (D) $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$
- (E) $\begin{pmatrix} 0 \\ -1 \\ 0 \end{pmatrix}$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Die kanonischen Einheitsvektoren im $\mathbb{R}^3$ lauten: $\vec{e}_x = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ für die $x$-Achse, $\vec{e}_y = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ für die $y$-Achse und $\vec{e}_z = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ für die $z$-Achse.

**Lernkonzept / Mental Shortcut:**
Kanonische Basis-Einheitsvektoren

---

### Frage 062: Einheitsvektor — Normierung eines 2D-Vektors (Tripel 5:12:13)

**Schwierigkeit:** Mittel

**Fragetext:**
Welcher Vektor ist der normierte Einheitsvektor $\vec{u}_0$ zum Vektor $\vec{u} = \begin{pmatrix} -5 \\ 12 \end{pmatrix}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} -5/13 \\ 12/13 \end{pmatrix}$
- (B) $\begin{pmatrix} -5/17 \\ 12/17 \end{pmatrix}$
- (C) $\begin{pmatrix} 5/13 \\ -12/13 \end{pmatrix}$
- (D) $\begin{pmatrix} -1/5 \\ 1/12 \end{pmatrix}$
- (E) $\begin{pmatrix} -5 \\ 12 \end{pmatrix}$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Der Betrag von $\vec{u}$ ist $|\vec{u}| = \sqrt{(-5)^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$ (pythagoreisches Tripel $5 : 12 : 13$). Der Einheitsvektor entsteht durch Division durch den Betrag: $\vec{u}_0 = \frac{\vec{u}}{|\vec{u}|} = \frac{1}{13}\begin{pmatrix} -5 \\ 12 \end{pmatrix} = \begin{pmatrix} -5/13 \\ 12/13 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Normierung über das Tripel 5:12:13

---

### Frage 063: Einheitsvektor — Skalierung eines Vektors auf eine Wunschlänge

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben ist der Vektor $\vec{v} = \begin{pmatrix} 6 \\ -8 \end{pmatrix}$. Welcher Vektor $\vec{w}$ hat die Länge $L = 20$ und zeigt in dieselbe Richtung wie $\vec{v}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 60 \\ -80 \end{pmatrix}$
- (B) $\begin{pmatrix} 3 \\ -4 \end{pmatrix}$
- (C) $\begin{pmatrix} 16 \\ -12 \end{pmatrix}$
- (D) $\begin{pmatrix} 18 \\ -24 \end{pmatrix}$
- (E) $\begin{pmatrix} 12 \\ -16 \end{pmatrix}$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
1) Man bestimmt die aktuelle Länge von $\vec{v}$: $|\vec{v}| = \sqrt{6^2 + (-8)^2} = \sqrt{36 + 64} = \sqrt{100} = 10$.\n2) Da die gewünschte Länge $L = 20$ das Doppelte der aktuellen Länge ist, muss man $\vec{v}$ mit dem Skalierungsfaktor $\frac{20}{10} = 2$ multiplizieren: $\vec{w} = 2 \cdot \begin{pmatrix} 6 \\ -8 \end{pmatrix} = \begin{pmatrix} 12 \\ -16 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Vektorskalierung auf Zielbetrag

---

### Frage 064: Einheitsvektor — Einheitsvektor aus orthogonalen Komponenten

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die Einheitsvektoren $\vec{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ und $\vec{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$. Für welchen Koeffizienten $c > 0$ besitzt die Linearkombination $\vec{v} = \frac{4}{5}\vec{e}_1 + c \cdot \vec{e}_2$ exakt die Länge $|\vec{v}| = 1$?

**Antwortoptionen:**
- (A) $c = 1/5$
- (B) $c = 3/5$
- (C) $c = 1$
- (D) $c = 4/5$
- (E) $c = 9/25$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Der Vektor lautet $\vec{v} = \begin{pmatrix} 4/5 \\ c \end{pmatrix}$. Sein Betrag im Quadrat ist: $|\vec{v}|^2 = (4/5)^2 + c^2 = \frac{16}{25} + c^2$. Damit $|\vec{v}| = 1$ ist, muss gelten: $\frac{16}{25} + c^2 = 1 \iff c^2 = 1 - \frac{16}{25} = \frac{9}{25}$. Da $c > 0$ gefordert ist, folgt $c = \sqrt{9/25} = 3/5$.

**Lernkonzept / Mental Shortcut:**
Komponentenbestimmung für Einheitslänge

---

### Frage 065: Skalarprodukt — Orthogonaler Einheitsvektor im 2D-Raum

**Schwierigkeit:** Schwer

**Fragetext:**
Welcher der folgenden Vektoren ist gleichzeitig orthogonal zum Vektor $\vec{a} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$ und besitzt die Einheitslänge $|\vec{n}| = 1$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 4/5 \\ 3/5 \end{pmatrix}$
- (B) $\begin{pmatrix} -4/5 \\ 3/5 \end{pmatrix}$
- (C) $\begin{pmatrix} -3 \\ 4 \end{pmatrix}$
- (D) $\begin{pmatrix} -3/5 \\ 4/5 \end{pmatrix}$
- (E) $\begin{pmatrix} 1/2 \\ -1/2 \end{pmatrix}$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Ein Normalvektor zu $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$ entsteht durch die Kippregel: $\begin{pmatrix} -3 \\ 4 \end{pmatrix}$. Dessen Länge ist $\sqrt{(-3)^2 + 4^2} = 5$. Normiert man diesen Vektor durch Division durch 5, erhält man $\vec{n}_0 = \begin{pmatrix} -3/5 \\ 4/5 \end{pmatrix}$. Probe: Skalarprodukt mit $\vec{a}$: $(-3/5)\cdot 4 + (4/5)\cdot 3 = -12/5 + 12/5 = 0$, Betrag ist $\sqrt{9/25 + 16/25} = 1$.

**Lernkonzept / Mental Shortcut:**
Orthogonaler Einheitsvektor

---

### Frage 066: Skalarprodukt — Skalarprodukt bei Orthogonalität

**Schwierigkeit:** Leicht

**Fragetext:**
Welchen Wert nimmt das Skalarprodukt $\vec{a} \cdot \vec{b}$ zweier Vektoren an, die einen rechten Winkel ($\varphi = 90^\circ$) zueinander bilden?

**Antwortoptionen:**
- (A) $1$
- (B) $-1$
- (C) $0$
- (D) $|\vec{a}| \cdot |\vec{b}|$
- (E) Unendlich

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Nach der geometrischen Definition gilt $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\varphi)$. Da $\cos(90^\circ) = 0$ ist, gilt stets $\vec{a} \cdot \vec{b} = 0$, wenn die Vektoren orthogonal aufeinander stehen.

**Lernkonzept / Mental Shortcut:**
Orthogonalitätskriterium des Skalarprodukts

---

### Frage 067: Skalarprodukt — Orthogonalitätsbedingung im 3D-Raum mit Unbekannter

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die Vektoren $\vec{u} = \begin{pmatrix} 2 \\ -3 \\ 5 \end{pmatrix}$ und $\vec{v} = \begin{pmatrix} 4 \\ 6 \\ z \end{pmatrix}$. Welchen Wert muss die reelle Zahl $z$ haben, damit $\vec{u}$ und $\vec{v}$ orthogonal zueinander stehen?

**Antwortoptionen:**
- (A) $z = 2$
- (B) $z = -2$
- (C) $z = 10$
- (D) $z = 0$
- (E) $z = 5$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Orthogonalitätsbedingung: $\vec{u} \cdot \vec{v} = 0$.\n$(2 \cdot 4) + ((-3) \cdot 6) + (5 \cdot z) = 0 \iff 8 - 18 + 5z = 0 \iff -10 + 5z = 0 \implies 5z = 10 \implies z = 2$.

**Lernkonzept / Mental Shortcut:**
Komponentenbestimmung für Orthogonalität im 3D-Raum

---

### Frage 068: Skalarprodukt — Skalarprodukt bei gegebenen Beträgen und Zwischenwinkel

**Schwierigkeit:** Mittel

**Fragetext:**
Zwei Vektoren $\vec{u}$ und $\vec{v}$ besitzen die Beträge $|\vec{u}| = 8$ und $|\vec{v}| = 5$ und schließen einen Winkel von $\varphi = 60^\circ$ ein. Welchen Wert hat das Skalarprodukt $\vec{u} \cdot \vec{v}$?

**Antwortoptionen:**
- (A) $40$
- (B) $20\sqrt{3}$
- (C) $0$
- (D) $10$
- (E) $20$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Nach der geometrischen Definition des Skalarprodukts gilt:\n$\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\varphi)$.\nMit $\cos(60^\circ) = 0{,}5 = \frac{1}{2}$:\n$\vec{u} \cdot \vec{v} = 8 \cdot 5 \cdot 0{,}5 = 40 \cdot 0{,}5 = 20$.

**Lernkonzept / Mental Shortcut:**
Berechnung des Skalarprodukts über die geometrische Definition

---

### Frage 069: Normalvektor — Normalenvektorform einer linearen Geradengleichung

**Schwierigkeit:** Mittel

**Fragetext:**
Eine Gerade $g$ in der Ebene wird durch die lineare Gleichung $2x - 5y = 10$ beschrieben. Welcher der folgenden Vektoren ist ein Normalvektor $\vec{n}$ zu dieser Geraden?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 5 \\ 2 \end{pmatrix}$
- (B) $\begin{pmatrix} 2 \\ -5 \end{pmatrix}$
- (C) $\begin{pmatrix} 2 \\ 5 \end{pmatrix}$
- (D) $\begin{pmatrix} -5 \\ 2 \end{pmatrix}$
- (E) $\begin{pmatrix} 10 \\ 0 \end{pmatrix}$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
In der allgemeinen Koordinatengleichung einer Geraden in der Ebene, $a x + b y = c$, bilden die Koeffizienten von $x$ und $y$ direkt einen Normalvektor $\vec{n} = \begin{pmatrix} a \\ b \end{pmatrix}$. Für $2x - 5y = 10$ ist somit $\vec{n} = \begin{pmatrix} 2 \\ -5 \end{pmatrix}$ ein Normalvektor.

**Lernkonzept / Mental Shortcut:**
Ablesen des Normalvektors aus der Koordinatenform

---

### Frage 070: Normalvektor — Einheitsnormalvektor zu einer Geraden mit Steigung 4/3

**Schwierigkeit:** Schwer

**Fragetext:**
Eine Gerade $g$ in der Ebene besitzt die Richtungssteigung $m = \frac{4}{3}$. Welcher der folgenden Vektoren stellt einen normierten Einheitsnormalvektor $\vec{n}_0$ zu dieser Geraden dar?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 3/5 \\ 4/5 \end{pmatrix}$
- (B) $\begin{pmatrix} 4/5 \\ 3/5 \end{pmatrix}$
- (C) $\begin{pmatrix} -4 \\ 3 \end{pmatrix}$
- (D) $\begin{pmatrix} -4/5 \\ 3/5 \end{pmatrix}$
- (E) $\begin{pmatrix} 1 \\ -4/3 \end{pmatrix}$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Zur Steigung $m = \frac{\Delta y}{\Delta x} = \frac{4}{3}$ gehört der Richtungsvektor $\vec{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Ein dazu senkrechter Normalvektor entsteht durch Vertauschen und Vorzeichenwechsel: $\vec{n} = \begin{pmatrix} -4 \\ 3 \end{pmatrix}$. Seine Länge ist $\sqrt{(-4)^2 + 3^2} = 5$. Normiert man $\vec{n}$ durch Division durch 5, erhält man $\vec{n}_0 = \begin{pmatrix} -4/5 \\ 3/5 \end{pmatrix}$. Probe: Skalarprodukt mit $\vec{v}$ ist $(-4/5)\cdot 3 + (3/5)\cdot 4 = -12/5 + 12/5 = 0$.

**Lernkonzept / Mental Shortcut:**
Normierter Normalvektor zur Geradensteigung

---

### Frage 071: Normalvektor — Identifikation eines 2D-Normalvektors

**Schwierigkeit:** Leicht

**Fragetext:**
Gegeben ist der Vektor $\vec{a} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$. Welcher der folgenden Vektoren steht senkrecht (orthogonal) auf $\vec{a}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$
- (B) $\begin{pmatrix} -1 \\ -2 \end{pmatrix}$
- (C) $\begin{pmatrix} -2 \\ 1 \end{pmatrix}$
- (D) $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$
- (E) $\begin{pmatrix} 2 \\ 2 \end{pmatrix}$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Für Orthogonalität muss das Skalarprodukt 0 sein. Man prüft Option C: $\begin{pmatrix} -2 \\ 1 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 2 \end{pmatrix} = (-2) \cdot 1 + 1 \cdot 2 = -2 + 2 = 0$. Somit steht C senkrecht auf $\vec{a}$.

**Lernkonzept / Mental Shortcut:**
Kippregel für 2D-Normalvektoren

---

### Frage 072: Winkel — Winkel zwischen antiparallelen Vektoren (180 Grad)

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die Vektoren $\vec{u} = \begin{pmatrix} 3 \\ -4 \end{pmatrix}$ und $\vec{v} = \begin{pmatrix} -6 \\ 8 \end{pmatrix}$. Welchen Winkel $\varphi$ schließen $\vec{u}$ und $\vec{v}$ miteinander ein?

**Antwortoptionen:**
- (A) $180^\circ$
- (B) $90^\circ$
- (C) $0^\circ$
- (D) $270^\circ$
- (E) $45^\circ$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Man erkennt sofort: $\vec{v} = -2 \cdot \vec{u}$. Da der Proportionalitätsfaktor $k = -2$ negativ ist, zeigen beide Vektoren in genau entgegengesetzte Richtungen (sie sind antiparallel). Der von ihnen eingeschlossene Winkel beträgt definitionsgemäß $\varphi = 180^\circ$.\nRechnerisch: $\cos(\varphi) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{-18 - 32}{5 \cdot 10} = \frac{-50}{50} = -1 \implies \varphi = 180^\circ$.

**Lernkonzept / Mental Shortcut:**
Winkel antiparalleler Vektoren

---

### Frage 073: Winkel — Winkel zwischen Koordinatenachsen

**Schwierigkeit:** Mittel

**Fragetext:**
Welchen Winkel $\varphi$ schließen die Basis-Einheitsvektoren $\vec{e}_x = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ und $\vec{e}_y = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ im dreidimensionalen Raum miteinander ein?

**Antwortoptionen:**
- (A) $0^\circ$
- (B) $45^\circ$
- (C) $60^\circ$
- (D) $180^\circ$
- (E) $90^\circ$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Das Skalarprodukt beträgt: $\vec{e}_x \cdot \vec{e}_y = 1 \cdot 0 + 0 \cdot 1 + 0 \cdot 0 = 0$. Da beide Vektoren Betrag 1 haben, gilt $\cos(\varphi) = 0 \implies \varphi = 90^\circ$. Die Koordinatenachsen eines kartesischen Koordinatensystems stehen stets paarweise senkrecht (orthogonal) aufeinander.

**Lernkonzept / Mental Shortcut:**
Orthogonalität kartesischer Koordinatenachsen

---

### Frage 074: Winkel — Winkel zwischen Vektoren aus Dreiecksgeometrie (Diagramm)

**Schwierigkeit:** Mittel

**Fragetext:**
In einem gleichseitigen Dreieck $ABC$ verlaufen die Kantenvektoren $\vec{a} = \vec{AB}$ und $\vec{b} = \vec{AC}$ vom gemeinsamen Eckpunkt $A$ aus. Welchen Winkel $\varphi$ schließen die beiden Vektoren $\vec{a}$ und $\vec{b}$ miteinander ein?

**Antwortoptionen:**
- (A) $45^\circ$
- (B) $60^\circ$
- (C) $90^\circ$
- (D) $120^\circ$
- (E) $30^\circ$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
In einem gleichseitigen Dreieck sind alle drei Seiten gleich lang und alle drei Innenwinkel betragen exakt $60^\circ$. Da beide Vektoren ihren gemeinsamen Anfangspunkt im Scheitelpunkt $A$ haben, entspricht der von ihnen eingeschlossene Winkel genau dem Innenwinkel bei $A$, also $\varphi = 60^\circ$.

**Lernkonzept / Mental Shortcut:**
Winkel zwischen Vektoren in geometrischen Figuren

---

### Frage 075: Winkel — Winkel zwischen Raumdiagonale und Kante eines Würfels

**Schwierigkeit:** Schwer

**Fragetext:**
In einem Einheitswürfel verläuft die Raumdiagonale entlang des Vektors $\vec{d} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ und eine Grundkante entlang des Vektors $\vec{k} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$. Welchen Wert besitzt der Kosinus des Winkels $\varphi$ zwischen der Raumdiagonale und dieser Kante?

**Antwortoptionen:**
- (A) $\cos(\varphi) = 1$
- (B) $\cos(\varphi) = 1/2$
- (C) $\cos(\varphi) = \sqrt{2}/2$
- (D) $\cos(\varphi) = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$
- (E) $\cos(\varphi) = \sqrt{3}/2$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
1) Skalarprodukt: $\vec{d} \cdot \vec{k} = 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 = 1$.\n2) Beträge: $|\vec{d}| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}$, $|\vec{k}| = \sqrt{1^2 + 0^2 + 0^2} = 1$.\n3) Kosinus des Winkels: $\cos(\varphi) = \frac{\vec{d} \cdot \vec{k}}{|\vec{d}| \cdot |\vec{k}|} = \frac{1}{\sqrt{3} \cdot 1} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$.

**Lernkonzept / Mental Shortcut:**
Winkel zwischen Raumdiagonale und Kante

---

