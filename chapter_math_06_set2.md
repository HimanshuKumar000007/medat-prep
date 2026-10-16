# Kapitel 6: Vektorrechnung — Set 2 (Fragen 026 bis 050)

**Kapitel 6: Vektorrechnung — 125 MedAT-style BMS Practice Questions**
*VMC/MEDBREAKER-aligned Practice für den Aufnahmetest MedAT (Humanmedizin / Zahnmedizin)*

---

### Frage 026: Vektoraddition / -subtraktion — Komponentenweise Vektorsubtraktion in 2D

**Schwierigkeit:** Leicht

**Fragetext:**
Gegeben sind die Vektoren $\vec{u} = \begin{pmatrix} 5 \\ -2 \end{pmatrix}$ und $\vec{v} = \begin{pmatrix} -3 \\ 4 \end{pmatrix}$. Welcher Vektor entspricht der Differenz $\vec{w} = \vec{u} - \vec{v}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 2 \\ 2 \end{pmatrix}$
- (B) $\begin{pmatrix} 8 \\ -6 \end{pmatrix}$
- (C) $\begin{pmatrix} -8 \\ 6 \end{pmatrix}$
- (D) $\begin{pmatrix} 8 \\ 2 \end{pmatrix}$
- (E) $\begin{pmatrix} 2 \\ -6 \end{pmatrix}$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Die Vektorsubtraktion erfolgt komponentenweise: $\vec{w} = \vec{u} - \vec{v} = \begin{pmatrix} 5 - (-3) \\ -2 - 4 \end{pmatrix} = \begin{pmatrix} 5 + 3 \\ -6 \end{pmatrix} = \begin{pmatrix} 8 \\ -6 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Komponentenweise Vektorsubtraktion

---

### Frage 027: Vektoraddition / -subtraktion — Mittelpunkt einer Strecke im Raum

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die Punkte $A(2 \mid -5 \mid 7)$ und $B(-4 \mid 1 \mid 3)$ im dreidimensionalen Raum $\mathbb{R}^3$. Welche Koordinaten besitzt der Mittelpunkt $M$ der Verbindungsstrecke $AB$?

**Antwortoptionen:**
- (A) $(-6 \mid 6 \mid -4)$
- (B) $(-3 \mid 3 \mid -2)$
- (C) $(1 \mid 2 \mid -5)$
- (D) $(-2 \mid -4 \mid 10)$
- (E) $(-1 \mid -2 \mid 5)$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Der Ortsvektor des Mittelpunkts ergibt sich durch das arithmetische Mittel der Ortsvektoren von $A$ und $B$: $\vec{OM} = \frac{1}{2}(\vec{OA} + \vec{OB}) = \frac{1}{2} \begin{pmatrix} 2 + (-4) \\ -5 + 1 \\ 7 + 3 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} -2 \\ -4 \\ 10 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ 5 \end{pmatrix}$. Somit ist $M(-1 \mid -2 \mid 5)$.

**Lernkonzept / Mental Shortcut:**
Mittelpunkt einer Strecke über Ortsvektoren

---

### Frage 028: Vektoraddition / -subtraktion — Linearkombination im 2D-Raum

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die Vektoren $\vec{a} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$. Welcher Vektor $\vec{x}$ ergibt sich aus der Linearkombination $\vec{x} = 3\vec{a} - 2\vec{b}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 4 \\ -9 \end{pmatrix}$
- (B) $\begin{pmatrix} 8 \\ 3 \end{pmatrix}$
- (C) $\begin{pmatrix} 8 \\ -9 \end{pmatrix}$
- (D) $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$
- (E) $\begin{pmatrix} 5 \\ -5 \end{pmatrix}$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Man multipliziert zuerst skalar und subtrahiert anschließend komponentenweise: $3\vec{a} = \begin{pmatrix} 6 \\ -3 \end{pmatrix}$, $2\vec{b} = \begin{pmatrix} -2 \\ 6 \end{pmatrix}$. Dann gilt: $\vec{x} = 3\vec{a} - 2\vec{b} = \begin{pmatrix} 6 - (-2) \\ -3 - 6 \end{pmatrix} = \begin{pmatrix} 8 \\ -9 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Linearkombination und Skalarmultiplikation

---

### Frage 029: Vektoraddition / -subtraktion — Geometrische Vektoraddition / Diagonale im Parallelogramm

**Schwierigkeit:** Mittel

**Fragetext:**
Ein Parallelogramm $ABCD$ wird von den Kantenvektoren $\vec{a} = \vec{AB}$ und $\vec{b} = \vec{AD}$ aufgespannt. Welcher Vektor beschreibt die Diagonale $\vec{f} = \vec{BD}$, die von der Ecke $B$ zur Ecke $D$ verläuft?

**Antwortoptionen:**
- (A) $\vec{f} = \vec{b} - \vec{a}$
- (B) $\vec{f} = \vec{a} + \vec{b}$
- (C) $\vec{f} = \vec{a} - \vec{b}$
- (D) $\vec{f} = \frac{1}{2}(\vec{a} + \vec{b})$
- (E) $\vec{f} = 2\vec{b} - \vec{a}$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Nach der Vektoraddition gilt: $\vec{AB} + \vec{BD} = \vec{AD}$, also $\vec{a} + \vec{f} = \vec{b}$. Umstellen liefert direkt: $\vec{f} = \vec{b} - \vec{a}$. (Hinweis: $\vec{a} + \vec{b}$ wäre die Hauptdiagonale $\vec{AC}$).

**Lernkonzept / Mental Shortcut:**
Parallelogrammdiagonalen und Vektorrelationen

---

### Frage 030: Vektoraddition / -subtraktion — Parallelogramm-Vervollständigung im Raum

**Schwierigkeit:** Schwer

**Fragetext:**
Drei aufeinanderfolgende Eckpunkte eines Parallelogramms $ABCD$ im Raum lauten $A(1 \mid 2 \mid 0)$, $B(4 \mid 1 \mid 2)$ und $C(6 \mid 5 \mid 3)$. Welche Koordinaten besitzt der vierte Eckpunkt $D$?

**Antwortoptionen:**
- (A) $(9 \mid 4 \mid 5)$
- (B) $(3 \mid 4 \mid 1)$
- (C) $(11 \mid 8 \mid 5)$
- (D) $(3 \mid 6 \mid 1)$
- (E) $(-1 \mid 4 \mid -1)$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
In einem Parallelogramm gilt für die gegenüberliegenden Seiten: $\vec{AD} = \vec{BC}$. Mit $\vec{BC} = \vec{C} - \vec{B} = \begin{pmatrix} 6 - 4 \\ 5 - 1 \\ 3 - 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 4 \\ 1 \end{pmatrix}$ folgt: $\vec{OD} = \vec{OA} + \vec{BC} = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + \begin{pmatrix} 2 \\ 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \\ 1 \end{pmatrix}$. Somit ist $D(3 \mid 6 \mid 1)$.

**Lernkonzept / Mental Shortcut:**
Vektorielle Bestimmung von Eckpunkten im Raum

---

### Frage 031: Betrag — Betrag eines Achsenvektors

**Schwierigkeit:** Leicht

**Fragetext:**
Welchen Betrag (welche Länge) besitzt der Vektor $\vec{v} = \begin{pmatrix} 0 \\ 0 \\ -7 \end{pmatrix}$ im dreidimensionalen Raum?

**Antwortoptionen:**
- (A) $-7$
- (B) $7$
- (C) $49$
- (D) $\sqrt{7}$
- (E) $0$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Der Betrag eines Vektors ist durch die Wurzel aus der Summe der quadrierten Komponenten definiert: $|\vec{v}| = \sqrt{0^2 + 0^2 + (-7)^2} = \sqrt{49} = 7$. Ein Vektorbetrag ist per definitionem stets nicht-negativ ($|\vec{v}| \ge 0$).

**Lernkonzept / Mental Shortcut:**
Vektorbetrag und Nicht-Negativität

---

### Frage 032: Betrag — Betrag im 3D-Raum mit ganzzahligem Ergebnis

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben ist der Vektor $\vec{u} = \begin{pmatrix} 1 \\ -4 \\ 8 \end{pmatrix}$. Welchen Betrag hat $\vec{u}$?

**Antwortoptionen:**
- (A) $13$
- (B) $\sqrt{13}$
- (C) $11$
- (D) $7$
- (E) $9$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Es gilt: $|\vec{u}| = \sqrt{1^2 + (-4)^2 + 8^2} = \sqrt{1 + 16 + 64} = \sqrt{81} = 9$. Dies ist das klassische ganzzahlige Raumtripel $(1, 4, 8) \to 9$.

**Lernkonzept / Mental Shortcut:**
Euklidischer Betrag im 3D-Raum

---

### Frage 033: Betrag — Abstand zweier Punkte in der Ebene

**Schwierigkeit:** Mittel

**Fragetext:**
Wie groß ist der euklidische Abstand zwischen den Punkten $P(-2 \mid 1)$ und $Q(4 \mid 9)$ in der Ebene?

**Antwortoptionen:**
- (A) $8$
- (B) $14$
- (C) $10$
- (D) $\sqrt{28}$
- (E) $12$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Der Abstand ist der Betrag des Verbindungsvektors: $\vec{PQ} = \begin{pmatrix} 4 - (-2) \\ 9 - 1 \end{pmatrix} = \begin{pmatrix} 6 \\ 8 \end{pmatrix}$. Seine Länge beträgt: $d(P, Q) = |\vec{PQ}| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$.

**Lernkonzept / Mental Shortcut:**
Punktabstand über Verbindungsvektor

---

### Frage 034: Betrag — Skalierungseigenschaft des Betrags

**Schwierigkeit:** Mittel

**Fragetext:**
Ein Vektor $\vec{a}$ hat die Länge $|\vec{a}| = 4$. Welchen Betrag besitzt der Vektor $\vec{b} = -3 \cdot \vec{a}$?

**Antwortoptionen:**
- (A) $12$
- (B) $-12$
- (C) $1$
- (D) $7$
- (E) $36$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Für jeden Skalar $k$ und jeden Vektor $\vec{a}$ gilt die Homogenitätseigenschaft des Betrags: $|k \cdot \vec{a}| = |k| \cdot |\vec{a}|$. Hier ist $k = -3$, also: $|\vec{b}| = |-3| \cdot 4 = 3 \cdot 4 = 12$.

**Lernkonzept / Mental Shortcut:**
Homogenität der euklidischen Norm

---

### Frage 035: Betrag — Bestimmung einer Komponente bei vorgegebenem Betrag

**Schwierigkeit:** Schwer

**Fragetext:**
Der Vektor $\vec{v} = \begin{pmatrix} 2 \\ y \\ 6 \end{pmatrix}$ im $\mathbb{R}^3$ soll genau den Betrag $|\vec{v}| = 7$ besitzen. Welche Werte kann die Komponente $y$ annehmen?

**Antwortoptionen:**
- (A) Nur $y = 3$
- (B) $y = \pm 1$
- (C) $y = \pm \sqrt{7}$
- (D) $y = 3$ oder $y = -3$
- (E) Es gibt keine reelle Lösung, da $2 + 6 > 7$ ist.

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Aus $|\vec{v}| = 7$ folgt durch Quadrieren: $2^2 + y^2 + 6^2 = 7^2 \implies 4 + y^2 + 36 = 49 \implies y^2 + 40 = 49 \implies y^2 = 9$. Somit gibt es zwei reelle Lösungen: $y = 3$ oder $y = -3$.

**Lernkonzept / Mental Shortcut:**
Berechnung unbekannter Komponenten über Betragsgleichung

---

### Frage 036: Einheitsvektor — Definition und Betrag eines Einheitsvektors

**Schwierigkeit:** Leicht

**Fragetext:**
Welche Eigenschaft charakterisiert einen Einheitsvektor $\vec{e}$ definitionsgemäß?

**Antwortoptionen:**
- (A) Alle seine Komponenten haben exakt den Wert 1.
- (B) Sein Betrag (seine euklidische Länge) beträgt exakt 1.
- (C) Er verläuft stets parallel zur $x$-Achse.
- (D) Sein Skalarprodukt mit jedem beliebigen Vektor ist gleich 1.
- (E) Er kann nicht mit negativen reellen Zahlen multipliziert werden.

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Ein Einheitsvektor ist definitionsgemäß ein Vektor mit dem Betrag 1 ($|\vec{e}| = 1$). Seine Komponenten müssen keineswegs gleich 1 sein (z. B. $\begin{pmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \end{pmatrix}$ hat die Länge 1, obwohl keine Komponente 1 ist).

**Lernkonzept / Mental Shortcut:**
Definition des Einheitsvektors

---

### Frage 037: Einheitsvektor — Normierung eines 3D-Vektors

**Schwierigkeit:** Mittel

**Fragetext:**
Welcher Einheitsvektor $\vec{v}_0$ zeigt in dieselbe Richtung wie der Vektor $\vec{v} = \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 1/2 \\ 1/3 \\ 1/6 \end{pmatrix}$
- (B) $\frac{1}{11} \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$
- (C) $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
- (D) $\frac{1}{49} \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$
- (E) $\frac{1}{7} \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Man berechnet zuerst den Betrag: $|\vec{v}| = \sqrt{2^2 + 3^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$. Der Einheitsvektor entsteht durch Division des Vektors durch seinen Betrag: $\vec{v}_0 = \frac{\vec{v}}{|\vec{v}|} = \frac{1}{7} \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Normierung zum Einheitsvektor

---

### Frage 038: Einheitsvektor — Vektor mit gegebener Länge in Gegenrichtung

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben ist der Vektor $\vec{a} = \begin{pmatrix} 0 \\ 3 \\ -4 \end{pmatrix}$. Welcher Vektor $\vec{w}$ besitzt die Länge 15 und ist antiparallel (entgegengesetzt gerichtet) zu $\vec{a}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 0 \\ 9 \\ -12 \end{pmatrix}$
- (B) $\begin{pmatrix} 0 \\ -15 \\ 20 \end{pmatrix}$
- (C) $\begin{pmatrix} 0 \\ -9 \\ 12 \end{pmatrix}$
- (D) $\begin{pmatrix} 0 \\ -3 \\ 4 \end{pmatrix}$
- (E) $\begin{pmatrix} 0 \\ 45 \\ -60 \end{pmatrix}$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Der Betrag von $\vec{a}$ ist $|\vec{a}| = \sqrt{0^2 + 3^2 + (-4)^2} = \sqrt{25} = 5$. Der zu $\vec{a}$ gleichgerichtete Einheitsvektor ist $\vec{a}_0 = \frac{1}{5} \begin{pmatrix} 0 \\ 3 \\ -4 \end{pmatrix}$. Ein Vektor mit Länge 15 in entgegengesetzter Richtung (antiparallel) lautet demnach: $\vec{w} = -15 \cdot \vec{a}_0 = -3 \cdot \begin{pmatrix} 0 \\ 3 \\ -4 \end{pmatrix} = \begin{pmatrix} 0 \\ -9 \\ 12 \end{pmatrix}$.

**Lernkonzept / Mental Shortcut:**
Skalierung und Richtungsumkehr mittels Einheitsvektor

---

### Frage 039: Einheitsvektor — Prüfung auf Einheitslänge

**Schwierigkeit:** Mittel

**Fragetext:**
Welcher der folgenden Vektoren ist ein echter Einheitsvektor (d. h. besitzt exakt den Betrag 1)?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 3/5 \\ -4/5 \end{pmatrix}$
- (B) $\begin{pmatrix} 1/2 \\ 1/2 \end{pmatrix}$
- (C) $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$
- (D) $\begin{pmatrix} 0{,}5 \\ 0{,}5 \\ 0{,}5 \end{pmatrix}$
- (E) $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Man berechnet den Betrag für Option A: $\sqrt{(3/5)^2 + (-4/5)^2} = \sqrt{9/25 + 16/25} = \sqrt{25/25} = 1$. Somit ist A ein Einheitsvektor. Bei B ist die Länge $\sqrt{1/4 + 1/4} = \sqrt{1/2} \approx 0{,}71 \ne 1$. Bei C und E beträgt die Länge $\sqrt{2} \approx 1{,}41$. Bei D beträgt die Länge $\sqrt{3 \cdot 0{,}25} = \sqrt{0{,}75} \ne 1$.

**Lernkonzept / Mental Shortcut:**
Prüfung der Einheitsvektoreigenschaft

---

### Frage 040: Skalarprodukt — Orthogonalität zu zwei vorgegebenen Vektoren

**Schwierigkeit:** Schwer

**Fragetext:**
Der Vektor $\vec{x} = \begin{pmatrix} 1 \\ y \\ z \end{pmatrix}$ soll gleichzeitig orthogonal zum Vektor $\vec{a} = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}$ und zum Vektor $\vec{b} = \begin{pmatrix} 0 \\ 3 \\ 1 \end{pmatrix}$ sein. Welche Werte müssen die Komponenten $y$ und $z$ besitzen?

**Antwortoptionen:**
- (A) $y = 2$ und $z = -6$
- (B) $y = -2$ und $z = -6$
- (C) $y = 1$ und $z = -3$
- (D) $y = -2$ und $z = 6$
- (E) $y = 0$ und $z = 0$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Zwei Vektoren sind genau dann orthogonal, wenn ihr Skalarprodukt 0 ist.\n1) $\vec{x} \cdot \vec{a} = 1 \cdot 2 + y \cdot 1 + z \cdot 0 = 2 + y = 0 \implies y = -2$.\n2) $\vec{x} \cdot \vec{b} = 1 \cdot 0 + y \cdot 3 + z \cdot 1 = 3y + z = 0$.\nSetzt man $y = -2$ ein: $3(-2) + z = 0 \implies -6 + z = 0 \implies z = 6$.\nSomit gilt $y = -2$ und $z = 6$.

**Lernkonzept / Mental Shortcut:**
Gleichungssystem aus Orthogonalitätsbedingungen

---

### Frage 041: Skalarprodukt — Vorzeichen des Skalarprodukts und Winkelcharakter

**Schwierigkeit:** Leicht

**Fragetext:**
Welche Aussage über das Vorzeichen des Skalarprodukts $\vec{u} \cdot \vec{v}$ zweier vom Nullvektor verschiedener Vektoren ist mathematisch korrekt?

**Antwortoptionen:**
- (A) Ist $\vec{u} \cdot \vec{v} > 0$, so stehen die beiden Vektoren stets senkrecht aufeinander.
- (B) Ist $\vec{u} \cdot \vec{v} < 0$, so schließen die beiden Vektoren einen stumpfen Winkel ein ($90^\circ < \varphi \le 180^\circ$).
- (C) Ist $\vec{u} \cdot \vec{v} = 0$, so sind die beiden Vektoren stets parallel zueinander.
- (D) Das Skalarprodukt zweier Vektoren kann definitionsgemäß niemals negativ sein.
- (E) Ist $\vec{u} \cdot \vec{v} > 0$, so beträgt der eingeschlossene Winkel exakt $180^\circ$.

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Aus der geometrischen Definition $\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\varphi)$ folgt direkt: Da Beträge positiv sind, bestimmt das Vorzeichen von $\cos(\varphi)$ das Vorzeichen des Skalarprodukts. Für stumpfe Winkel ($90^\circ < \varphi \le 180^\circ$) ist $\cos(\varphi) < 0$, folglich ist $\vec{u} \cdot \vec{v} < 0$.

**Lernkonzept / Mental Shortcut:**
Winkelabhängigkeit des Skalarprodukts

---

### Frage 042: Skalarprodukt — Distributivgesetz beim Skalarprodukt

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die drei Vektoren $\vec{a} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$, $\vec{b} = \begin{pmatrix} 3 \\ -1 \\ 4 \end{pmatrix}$ und $\vec{c} = \begin{pmatrix} -1 \\ 3 \\ 2 \end{pmatrix}$. Welchen Wert hat das Skalarprodukt $\vec{a} \cdot (\vec{b} + \vec{c})$?

**Antwortoptionen:**
- (A) $4$
- (B) $-6$
- (C) $12$
- (D) $2$
- (E) $0$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Zuerst addiert man die Vektoren: $\vec{b} + \vec{c} = \begin{pmatrix} 3 + (-1) \\ -1 + 3 \\ 4 + 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \\ 6 \end{pmatrix}$. Nun bildet man das Skalarprodukt mit $\vec{a}$: $\vec{a} \cdot (\vec{b} + \vec{c}) = 1 \cdot 2 + 2 \cdot 2 + (-1) \cdot 6 = 2 + 4 - 6 = 0$.

**Lernkonzept / Mental Shortcut:**
Distributivgesetz des Skalarprodukts

---

### Frage 043: Skalarprodukt — Orthogonalitätsprüfung aus Komponenten

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben ist der Vektor $\vec{p} = \begin{pmatrix} 4 \\ -6 \end{pmatrix}$. Welcher der folgenden Vektoren $\vec{q}$ bildet mit $\vec{p}$ das Skalarprodukt $\vec{p} \cdot \vec{q} = 0$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$
- (B) $\begin{pmatrix} 3 \\ 1 \end{pmatrix}$
- (C) $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$
- (D) $\begin{pmatrix} -3 \\ 2 \end{pmatrix}$
- (E) $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
Man prüft das Skalarprodukt für Option C: $\vec{p} \cdot \vec{q} = 4 \cdot 3 + (-6) \cdot 2 = 12 - 12 = 0$. Bei allen anderen Optionen ergibt das Skalarprodukt einen Wert ungleich 0 (z. B. A: $8 - 6 = 2$, B: $12 - 6 = 6$, D: $-12 - 12 = -24$, E: $4 - 6 = -2$).

**Lernkonzept / Mental Shortcut:**
Bedingung für ein verschwindendes Skalarprodukt

---

### Frage 044: Normalvektor — Normalvektor zu einer Geradensteigung

**Schwierigkeit:** Mittel

**Fragetext:**
Eine Gerade $g$ im zweidimensionalen Raum besitzt den Richtungsvektor $\vec{v} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$ (entsprechend der Steigung $m = -\frac{3}{4}$). Welcher der folgenden Vektoren ist ein Normalvektor $\vec{n}$ zu dieser Geraden?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$
- (B) $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$
- (C) $\begin{pmatrix} -4 \\ 3 \end{pmatrix}$
- (D) $\begin{pmatrix} 4 \\ -3 \end{pmatrix}$
- (E) $\begin{pmatrix} -3 \\ 4 \end{pmatrix}$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
In 2D entsteht ein Normalvektor durch Vertauschen der Komponenten und Negieren einer der beiden Komponenten: Für $\begin{pmatrix} x \\ y \end{pmatrix}$ ist $\begin{pmatrix} -y \\ x \end{pmatrix}$ orthogonal. Für $\vec{v} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$ ist somit $\vec{n} = \begin{pmatrix} -(-3) \\ 4 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ ein Normalvektor. Probe: $3 \cdot 4 + 4 \cdot (-3) = 12 - 12 = 0$.

**Lernkonzept / Mental Shortcut:**
2D-Normalvektor über Vertauschungsregel

---

### Frage 045: Normalvektor — Orthogonale Zerlegung in Parallel- und Normalkomponente

**Schwierigkeit:** Schwer

**Fragetext:**
Gegeben ist der Vektor $\vec{a} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}$ und der Einheitsvektor $\vec{u} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ entlang der $x$-Achse. In welche beiden Summanden $\vec{a} = \vec{a}_\parallel + \vec{a}_\perp$ lässt sich $\vec{a}$ zerlegen, wobei $\vec{a}_\parallel$ parallel zu $\vec{u}$ und $\vec{a}_\perp$ orthogonal zu $\vec{u}$ ist?

**Antwortoptionen:**
- (A) $\vec{a}_\parallel = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$ und $\vec{a}_\perp = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$
- (B) $\vec{a}_\parallel = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$ und $\vec{a}_\perp = \begin{pmatrix} 5 \\ 0 \end{pmatrix}$
- (C) $\vec{a}_\parallel = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$ und $\vec{a}_\perp = \begin{pmatrix} 0 \\ -3 \end{pmatrix}$
- (D) $\vec{a}_\parallel = \begin{pmatrix} 5 \\ 0 \end{pmatrix}$ und $\vec{a}_\perp = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$
- (E) $\vec{a}_\parallel = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ und $\vec{a}_\perp = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Die Projektion von $\vec{a}$ auf die durch $\vec{u}$ vorgegebene $x$-Achse ist der parallele Anteil $\vec{a}_\parallel = (\vec{a} \cdot \vec{u})\vec{u} = 5 \cdot \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 5 \\ 0 \end{pmatrix}$. Der senkrechte Anteil (Normalkomponente) ist dann der Restvektor: $\vec{a}_\perp = \vec{a} - \vec{a}_\parallel = \begin{pmatrix} 5 \\ 2 \end{pmatrix} - \begin{pmatrix} 5 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$. Offensichtlich steht $\begin{pmatrix} 0 \\ 2 \end{pmatrix}$ senkrecht auf $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$, da ihr Skalarprodukt 0 ist.

**Lernkonzept / Mental Shortcut:**
Orthogonale Vektorzerlegung

---

### Frage 046: Normalvektor — Normalvektor zu einem Achsenvektor in 2D

**Schwierigkeit:** Leicht

**Fragetext:**
Ein Vektor $\vec{v} = \begin{pmatrix} 0 \\ 6 \end{pmatrix}$ liegt parallel zur $y$-Achse. Welcher der folgenden Vektoren steht orthogonal (senkrecht) auf $\vec{v}$?

**Antwortoptionen:**
- (A) $\begin{pmatrix} 0 \\ -6 \end{pmatrix}$
- (B) $\begin{pmatrix} -4 \\ 0 \end{pmatrix}$
- (C) $\begin{pmatrix} 6 \\ 6 \end{pmatrix}$
- (D) $\begin{pmatrix} 2 \\ 2 \end{pmatrix}$
- (E) $\begin{pmatrix} 1 \\ 6 \end{pmatrix}$

**Richtige Antwort:** (B)

**Erklärung & Lösungsweg:**
Zwei Vektoren sind orthogonal, wenn ihr Skalarprodukt 0 ergibt. Für $\begin{pmatrix} x \\ y \end{pmatrix} \cdot \begin{pmatrix} 0 \\ 6 \end{pmatrix} = 0 \cdot x + 6 \cdot y = 6y = 0$ muss zwingend $y = 0$ sein. Jeder Vektor entlang der $x$-Achse mit $y = 0$ ist orthogonal zu $\vec{v}$. Das trifft nur auf Option B zu: $\begin{pmatrix} -4 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} 0 \\ 6 \end{pmatrix} = 0 + 0 = 0$.

**Lernkonzept / Mental Shortcut:**
Orthogonalität zu Achsenvektoren

---

### Frage 047: Winkel — Schnittwinkel zweier Vektoren (45 Grad)

**Schwierigkeit:** Mittel

**Fragetext:**
Welchen Winkel $\varphi$ schließen die Vektoren $\vec{a} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} 2 \\ 2 \end{pmatrix}$ miteinander ein?

**Antwortoptionen:**
- (A) $0^\circ$
- (B) $30^\circ$
- (C) $60^\circ$
- (D) $90^\circ$
- (E) $45^\circ$

**Richtige Antwort:** (E)

**Erklärung & Lösungsweg:**
Man verwendet die Winkelformel: $\cos(\varphi) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}$.\n1) Skalarprodukt: $\vec{a} \cdot \vec{b} = 3 \cdot 2 + 0 \cdot 2 = 6$.\n2) Beträge: $|\vec{a}| = 3$, $|\vec{b}| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$.\n3) Einsetzen: $\cos(\varphi) = \frac{6}{3 \cdot 2\sqrt{2}} = \frac{6}{6\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.\nDa $\cos(45^\circ) = \frac{\sqrt{2}}{2}$, beträgt der Winkel genau $\varphi = 45^\circ$.

**Lernkonzept / Mental Shortcut:**
Berechnung des Zwischenwinkels über den Kosinus

---

### Frage 048: Winkel — Zwischenwinkel aus Vektorkoordinaten (Diagramm)

**Schwierigkeit:** Mittel

**Fragetext:**
Im zweidimensionalen Koordinatensystem sind die Vektoren $\vec{u} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ und $\vec{v} = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$ gegeben. Welchen Winkel $\varphi$ schließen die beiden Vektoren miteinander ein?

**Antwortoptionen:**
- (A) $30^\circ$
- (B) $60^\circ$
- (C) $45^\circ$
- (D) $90^\circ$
- (E) $15^\circ$

**Richtige Antwort:** (C)

**Erklärung & Lösungsweg:**
1) Skalarprodukt: $\vec{u} \cdot \vec{v} = 1 \cdot 0 + 1 \cdot 2 = 2$.\n2) Beträge: $|\vec{u}| = \sqrt{1^2 + 1^2} = \sqrt{2}$, $|\vec{v}| = \sqrt{0^2 + 2^2} = 2$.\n3) Kosinus: $\cos(\varphi) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{2}{\sqrt{2} \cdot 2} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$.\nDa $\cos(45^\circ) = \frac{\sqrt{2}}{2}$, beträgt der Winkel genau $\varphi = 45^\circ$. (Geometrisch: $\vec{u}$ liegt auf der Winkelhalbierenden bei $45^\circ$, $\vec{v}$ auf der $y$-Achse bei $90^\circ$, Differenz ist $90^\circ - 45^\circ = 45^\circ$).

**Lernkonzept / Mental Shortcut:**
Winkelberechnung zwischen 2D-Vektoren

---

### Frage 049: Winkel — Winkelberechnung bei Einheitsvektoren (30 Grad)

**Schwierigkeit:** Mittel

**Fragetext:**
Gegeben sind die beiden Einheitsvektoren $\vec{u} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ und $\vec{v} = \begin{pmatrix} \frac{\sqrt{3}}{2} \\ \frac{1}{2} \end{pmatrix}$. Welchen Zwischenwinkel $\varphi$ schließen diese beiden Vektoren ein?

**Antwortoptionen:**
- (A) $30^\circ$
- (B) $45^\circ$
- (C) $60^\circ$
- (D) $90^\circ$
- (E) $150^\circ$

**Richtige Antwort:** (A)

**Erklärung & Lösungsweg:**
Da beide Vektoren bereits die Länge 1 haben ($|\vec{u}| = 1$ und $|\vec{v}| = \sqrt{(3/4) + (1/4)} = 1$), entspricht das Skalarprodukt direkt dem Kosinus des Winkels: $\cos(\varphi) = \vec{u} \cdot \vec{v} = 1 \cdot \frac{\sqrt{3}}{2} + 0 \cdot \frac{1}{2} = \frac{\sqrt{3}}{2}$.\nAus der Tabelle der trigonometrischen Standardwerte folgt unmittelbar $\varphi = 30^\circ$.

**Lernkonzept / Mental Shortcut:**
Kosinuswert und Standardwinkel

---

### Frage 050: Winkel — Betrag der Vektordifferenz bei Orthogonalität

**Schwierigkeit:** Schwer

**Fragetext:**
Zwei Vektoren $\vec{a}$ und $\vec{b}$ haben die Beträge $|\vec{a}| = 6$ und $|\vec{b}| = 8$ und stehen orthogonal zueinander ($\vec{a} \perp \vec{b}$). Welchen Betrag besitzt der Differenzvektor $\vec{d} = \vec{a} - \vec{b}$?

**Antwortoptionen:**
- (A) $2$
- (B) $14$
- (C) $48$
- (D) $10$
- (E) $0$

**Richtige Antwort:** (D)

**Erklärung & Lösungsweg:**
Das Quadrat der Norm eines Differenzvektors berechnet sich über das Skalarprodukt: $|\vec{a} - \vec{b}|^2 = (\vec{a} - \vec{b}) \cdot (\vec{a} - \vec{b}) = |\vec{a}|^2 - 2(\vec{a} \cdot \vec{b}) + |\vec{b}|^2$. Da $\vec{a} \perp \vec{b}$, ist $\vec{a} \cdot \vec{b} = 0$. Folglich gilt: $|\vec{d}|^2 = |\vec{a}|^2 + |\vec{b}|^2 = 6^2 + 8^2 = 36 + 64 = 100$. Somit ist $|\vec{d}| = \sqrt{100} = 10$.

**Lernkonzept / Mental Shortcut:**
Vektornorm der Differenz bei Orthogonalität

---

