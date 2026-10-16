# MedAT BMS Mathematik — Kapitel 5: Funktionen & Analysis
## Set 3 (Fragen 51 bis 75)

---

### Frage 051 [Geradenfunktion] (EASY)

Eine Gerade verläuft durch die beiden Punkte $A(1 \mid 3)$ und $B(5 \mid 11)$. Welche Steigung $m$ besitzt diese Gerade?

- **(A)** $m = 0{,}5$
- **(B)** $m = 4$
- **(C)** $m = 2$
- **(D)** $m = -2$
- **(E)** $m = 8$

**Richtige Antwort:** **C**

**Erklärung:**
Die Steigung berechnet sich über den Differenzenquotienten: $m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{11 - 3}{5 - 1} = \frac{8}{4} = 2$.

*Lernziel / Subskill:* Steigung aus zwei Punkten berechnen  
*Konzept:* Steigungsberechnung linearer Funktionen

---

### Frage 052 [Geradenfunktion] (MEDIUM)

Gegeben sind die linearen Funktionen $f(x) = 2x - 1$ und $g(x) = -x + 5$. In welchem Punkt $S(x \mid y)$ schneiden sich die Graphen beider Funktionen?

- **(A)** $S(2 \mid 3)$
- **(B)** $S(3 \mid 2)$
- **(C)** $S(1 \mid 1)$
- **(D)** $S(2 \mid 5)$
- **(E)** $S(4 \mid 7)$

**Richtige Antwort:** **A**

**Erklärung:**
Gleichsetzen der Funktionsgleichungen: $2x - 1 = -x + 5 \iff 3x = 6 \iff x = 2$. Einsetzen in $f(2)$: $y = 2 \cdot 2 - 1 = 3$. Der Schnittpunkt lautet somit $S(2 \mid 3)$.

*Lernziel / Subskill:* Schnittpunkt zweier Geraden  
*Konzept:* Schnittpunktbestimmung durch Gleichsetzen

---

### Frage 053 [Geradenfunktion] (MEDIUM)

Bei der Titration einer Pufferlösung sinkt der pH-Wert im linearen Pufferbereich gleichmäßig mit dem zugegebenen Säurevolumen $V$ (in $\text{mL}$). Bei $V = 0\,\text{mL}$ beträgt der pH-Wert $7{,}40$. Pro zugegebenem Milliliter Salzsäure sinkt der pH-Wert um $0{,}15$. Bei welchem Volumen $V$ an Salzsäure erreicht die Lösung einen pH-Wert von $6{,}20$?

- **(A)** $V = 6\,\text{mL}$
- **(B)** $V = 10\,\text{mL}$
- **(C)** $V = 7{,}5\,\text{mL}$
- **(D)** $V = 12\,\text{mL}$
- **(E)** $V = 8\,\text{mL}$

**Richtige Antwort:** **E**

**Erklärung:**
Lineare Funktionsgleichung: $\text{pH}(V) = 7{,}40 - 0{,}15 \cdot V$. Setzt man $\text{pH} = 6{,}20$ ein: $6{,}20 = 7{,}40 - 0{,}15 \cdot V \iff 0{,}15 \cdot V = 1{,}20 \iff V = \frac{1{,}20}{0{,}15} = \frac{120}{15} = 8\,\text{mL}$.

*Lernziel / Subskill:* Lineare Pufferkinetik und pH-Änderung  
*Konzept:* Modellierung mit linearen Funktionen

---

### Frage 054 [Geradenfunktion] (MEDIUM)

Gegeben ist die Gerade $g(x) = 4x - 5$. Wie lautet die Gleichung der dazu orthogonalen (senkrechten) Geraden $n(x)$, die durch den Koordinatenursprung $(0 \mid 0)$ verläuft?

- **(A)** $n(x) = 4x$
- **(B)** $n(x) = -\frac{1}{4}x$
- **(C)** $n(x) = \frac{1}{4}x$
- **(D)** $n(x) = -4x$
- **(E)** $n(x) = -\frac{1}{4}x + 5$

**Richtige Antwort:** **B**

**Erklärung:**
Wegen der Orthogonalitätsbedingung gilt $m_g \cdot m_n = -1 \implies m_n = -\frac{1}{4} = -0{,}25$. Da die Gerade durch den Ursprung geht, ist der $y$-Achsenabschnitt $b = 0$. Die Gleichung lautet also $n(x) = -\frac{1}{4}x$.

*Lernziel / Subskill:* Orthogonale Gerade durch Ursprung  
*Konzept:* Orthogonalität linearer Funktionen

---

### Frage 055 [Geradenfunktion] (HARD)

In einem klinischen Labor wird die Harnsäurekonzentration photometrisch gemessen. Die Kalibriergerade lautet $E(c) = 0{,}08 \cdot c + E_0$, wobei $c$ in $\text{mg/dL}$ und $E_0$ den Reagenzienblindwert darstellt. Eine Referenzprobe mit $c_{\text{ref}} = 5\,\text{mg/dL}$ liefert eine Gesamtextinktion von $E = 0{,}46$. Welcher Harnsäurekonzentration $c$ entspricht eine Patientenprobe mit gemessener Gesamtextinktion $E_{\text{pat}} = 0{,}78$?

- **(A)** $c = 8{,}0\,\text{mg/dL}$
- **(B)** $c = 9{,}75\,\text{mg/dL}$
- **(C)** $c = 10{,}5\,\text{mg/dL}$
- **(D)** $c = 9{,}0\,\text{mg/dL}$
- **(E)** $c = 11{,}25\,\text{mg/dL}$

**Richtige Antwort:** **D**

**Erklärung:**
1. Blindwert bestimmen: $0{,}46 = 0{,}08 \cdot 5 + E_0 = 0{,}40 + E_0 \implies E_0 = 0{,}06$. 2. Patientenprobe berechnen: $0{,}78 = 0{,}08 \cdot c + 0{,}06 \iff 0{,}08 \cdot c = 0{,}72 \iff c = \frac{0{,}72}{0{,}08} = 9\,\text{mg/dL}$.

*Lernziel / Subskill:* Photometrische Kalibriergerade mit Reagenzienblindwert  
*Konzept:* Kalibriergeraden mit Blindwertkorrektur

---

### Frage 056 [Potenzfunktion] (EASY)

Welche Symmetrieeigenschaft besitzt der Graph der Potenzfunktion $f(x) = x^5$ für alle $x \in \mathbb{R}$?

- **(A)** Achsensymmetrie zur $y$-Achse, da $f(-x) = f(x)$.
- **(B)** Achsensymmetrie zur $x$-Achse, da $f(x) = -f(x)$.
- **(C)** Punktsymmetrie zum Koordinatenursprung $(0 \mid 0)$, da $f(-x) = -f(x)$.
- **(D)** Punktsymmetrie zum Punkt $(1 \mid 1)$.
- **(E)** Keine Symmetrie, da der Exponent größer als 3 ist.

**Richtige Antwort:** **C**

**Erklärung:**
Für ungerade Exponenten $n \in \{1, 3, 5, \dots\}$ gilt: $f(-x) = (-x)^5 = -x^5 = -f(x)$. Dies ist das exakte Kriterium für Punktsymmetrie bezüglich des Koordinatenursprungs.

*Lernziel / Subskill:* Symmetrieverhalten ungerader Potenzen  
*Konzept:* Punktsymmetrie ungerader Funktionen

---

### Frage 057 [Potenzfunktion] (MEDIUM)

Gegeben ist die Potenzfunktion $f(x) = 3 \cdot x^{-2} = \frac{3}{x^2}$ auf ihrem maximalen reellen Definitionsbereich $D$. Welche der folgenden Aussagen über diese Funktion ist KORREKT?

- **(A)** Der maximale Definitionsbereich ist $D = \mathbb{R} \setminus \{0\}$, die Funktion besitzt keine Nullstellen und nimmt für alle $x \in D$ ausschließlich positive Werte an ($f(x) > 0$).
- **(B)** Die Funktion ist für alle reellen Zahlen inklusive $x = 0$ definiert und nimmt bei $x = 0$ den Wert $3$ an.
- **(C)** Die Funktion besitzt an der Stelle $x = \sqrt{3}$ eine reelle Nullstelle.
- **(D)** Für negative Argumente $x < 0$ nimmt die Funktion ausschließlich negative Funktionswerte an ($f(x) < 0$).
- **(E)** Der Graph ist punktsymmetrisch bezüglich des Koordinatenursprungs $(0 \mid 0)$.

**Richtige Antwort:** **A**

**Erklärung:**
1. Definitionsbereich: Da eine Division durch null unzulässig ist ($x^2 = 0 \iff x = 0$), ist die Stelle $x = 0$ ausgeschlossen: $D = \mathbb{R} \setminus \{0\}$. 2. Nullstellen: Ein Bruch mit konstantem Zähler ungleich null ($3$) kann niemals den Wert null annehmen, es existieren keine Nullstellen. 3. Vorzeichen: Da das Quadrat jeder reellen Zahl ungleich null strikt positiv ist ($x^2 > 0$), ist auch der Quotient $\frac{3}{x^2}$ für alle $x \in D$ stets echt positiv ($f(x) > 0$).

*Lernziel / Subskill:* Definitionsbereich, Vorzeichen und Eigenschaften von Potenzfunktionen mit negativem Exponenten  
*Konzept:* Definitionsmenge, Vorzeichenverhalten und Kehrwerteigenschaften von Potenzfunktionen

---

### Frage 058 [Potenzfunktion] (MEDIUM)

Gegeben ist die Wurzelfunktion als Potenzfunktion $f(x) = \sqrt{x} = x^{1/2}$ auf ihrem maximalen Definitionsbereich $D = [0, \infty)$. Welche der folgenden Aussagen über diese Funktion ist mathematisch KORREKT?

- **(A)** Der Graph ist punktsymmetrisch zum Koordinatenursprung $(0 \mid 0)$.
- **(B)** Für alle $x > 1$ gilt $f(x) > x$.
- **(C)** Wenn das Argument $x$ vervierfacht wird (von $x$ auf $4x$), vervierfacht sich auch der Funktionswert $f(x)$.
- **(D)** Die Wertemenge (Bildbereich) der reellen Wurzelfunktion ist $W = \mathbb{R}$.
- **(E)** Für alle Argumente $x$ im offenen Intervall $(0, 1)$ gilt $f(x) > x$, und für alle $x > 1$ gilt $f(x) < x$.

**Richtige Antwort:** **E**

**Erklärung:**
Im Intervall $(0, 1)$ ist die Quadratwurzel einer Zahl stets größer als die Zahl selbst (z. B. $\sqrt{0{,}25} = 0{,}5 > 0{,}25$). Für Zahlen $x > 1$ ist die Wurzel hingegen stets kleiner als die Zahl selbst (z. B. $\sqrt{4} = 2 < 4$). An der Stelle $x = 1$ gilt $\sqrt{1} = 1$ (Schnittpunkt mit der ersten Mediane $y = x$).

*Lernziel / Subskill:* Größenvergleich und Graphverlauf von Wurzelfunktionen  
*Konzept:* Funktionseigenschaften der Quadratwurzel ohne Differentialrechnung

---

### Frage 059 [e-Funktion] (MEDIUM)

In der nuklearmedizinischen Diagnostik wird Technetium-99m ($^{99\text{m}}\text{Tc}$) verwendet, dessen physikalische Halbwertszeit $T_{1/2} = 6\,\text{Stunden}$ beträgt. Die Aktivität zerfällt exponentiell nach $A(t) = A_0 \cdot e^{-\lambda t}$. Um wie viel Prozent ist die Radioaktivität einer Probe nach genau $18\,\text{Stunden}$ gegenüber dem Ausgangswert $A_0$ GESUNKEN?

- **(A)** Um $75{,}0\,\%$
- **(B)** Um $87{,}5\,\%$
- **(C)** Um $12{,}5\,\%$
- **(D)** Um $50{,}0\,\%$
- **(E)** Um $93{,}75\,\%$

**Richtige Antwort:** **B**

**Erklärung:**
In $18\,\text{Stunden}$ vergehen genau $\frac{18}{6} = 3$ Halbwertszeiten. Die verbleibende Aktivität beträgt $\left(\frac{1}{2}\right)^3 = \frac{1}{8} = 12{,}5\,\%$. Gesucht ist die Abnahme (um wie viel Prozent gesunken): $100\,\% - 12{,}5\,\% = 87{,}5\,\%$.

*Lernziel / Subskill:* Radioaktiver Zerfall in der Nuklearmedizin  
*Konzept:* Exponentieller radioaktiver Zerfall

---

### Frage 060 [e-Funktion] (HARD)

Ein Lokalanästhetikum wird im Blutplasma nach einer Kinetik 1. Ordnung mit einer Geschwindigkeitskonstante von $k = 0{,}3466\,\text{h}^{-1}$ eliminiert. Unter Verwendung der Näherung $\ln(2) \approx 0{,}6932$ beträgt die Eliminationshalbwertszeit $T_{1/2}$:

- **(A)** $T_{1/2} \approx 0{,}5\,\text{h}$
- **(B)** $T_{1/2} \approx 1{,}0\,\text{h}$
- **(C)** $T_{1/2} \approx 4{,}0\,\text{h}$
- **(D)** $T_{1/2} \approx 2{,}0\,\text{h}$
- **(E)** $T_{1/2} \approx 3{,}5\,\text{h}$

**Richtige Antwort:** **D**

**Erklärung:**
Für die Halbwertszeit bei exponentiellem Zerfall gilt: $T_{1/2} = \frac{\ln(2)}{k}$. Mit den gegebenen Werten: $T_{1/2} = \frac{0{,}6932}{0{,}3466} = 2{,}0\,\text{Stunden}$.

*Lernziel / Subskill:* Zusammenhang von Eliminationskonstante und Halbwertszeit  
*Konzept:* Pharmakokinetische Parameter berechnen

---

### Frage 061 [Logarithmus] (EASY)

Welchen Wert hat der dekadische Logarithmus $\log_{10}(0{,}001)$?

- **(A)** $3$
- **(B)** $-2$
- **(C)** $-3$
- **(D)** $-\frac{1}{3}$
- **(E)** $0{,}001$

**Richtige Antwort:** **C**

**Erklärung:**
Man drückt die Dezimalzahl als Zehnerpotenz aus: $0{,}001 = 10^{-3}$. Nach der Definition des Logarithmus gilt: $\log_{10}(10^{-3}) = -3$.

*Lernziel / Subskill:* Zehnerlogarithmus von Dezimalzahlen  
*Konzept:* Zehnerlogarithmus von Zehnerpotenzen

---

### Frage 062 [Logarithmus] (MEDIUM)

Eine Magensaftprobe weist eine Protonenkonzentration von $[\text{H}^+] = 2 \times 10^{-2}\,\text{mol/L}$ auf. Welcher pH-Wert resultiert daraus? (Verwende die Näherung $\log_{10}(2) \approx 0{,}30$).

- **(A)** $\text{pH} = 1{,}70$
- **(B)** $\text{pH} = 2{,}30$
- **(C)** $\text{pH} = 2{,}00$
- **(D)** $\text{pH} = 1{,}30$
- **(E)** $\text{pH} = 0{,}70$

**Richtige Antwort:** **A**

**Erklärung:**
Definition des pH-Werts: $\text{pH} = -\log_{10}[\text{H}^+]$. Mit den Rechengesetzen: $-\log_{10}(2 \times 10^{-2}) = -(\log_{10}(2) + \log_{10}(10^{-2})) = -(0{,}30 - 2) = -(-1{,}70) = 1{,}70$.

*Lernziel / Subskill:* pH-Wert aus Hydroniumionen-Konzentration  
*Konzept:* Logarithmische Definition des pH-Wertes

---

### Frage 063 [Logarithmus] (MEDIUM)

Zu welchem ganzzahligen Wert vereinfacht sich der Ausdruck $\ln\left(\frac{e^5}{e^2}\right)$?

- **(A)** $\frac{5}{2}$
- **(B)** $10$
- **(C)** $e^3$
- **(D)** $\ln(10)$
- **(E)** $3$

**Richtige Antwort:** **E**

**Erklärung:**
Nach den Potenzgesetzen ist $\frac{e^5}{e^2} = e^{5 - 2} = e^3$. Der natürliche Logarithmus ist die Umkehrfunktion der e-Funktion, weshalb gilt: $\ln(e^3) = 3$.

*Lernziel / Subskill:* Logarithmus eines Quotienten von e-Potenzen  
*Konzept:* Potenz- und Logarithmengesetze kombinieren

---

### Frage 064 [Winkelfunktionen] (MEDIUM)

Welchen exakten Wert besitzt der Term $\tan(45^\circ) + \sin(90^\circ) - \cos(0^\circ)$?

- **(A)** $0$
- **(B)** $1$
- **(C)** $2$
- **(D)** $\sqrt{2}$
- **(E)** $\frac{1}{2}$

**Richtige Antwort:** **B**

**Erklärung:**
Standardwerte am Einheitskreis: $\tan(45^\circ) = 1$, $\sin(90^\circ) = 1$ und $\cos(0^\circ) = 1$. Einsetzen liefert: $1 + 1 - 1 = 1$.

*Lernziel / Subskill:* Trigonometrische Standardwerte kombinieren  
*Konzept:* Standardwerte der trigonometrischen Basisfunktionen

---

### Frage 065 [Winkelfunktionen] (HARD)

Die Auslenkung eines biologischen akustischen Oszillators (z. B. einer Stimmbandvibration) wird durch $y(t) = 3 \cdot \sin(500\pi \cdot t)$ modelliert ($t$ in Sekunden). Welche Frequenz $f$ in Hertz ($\text{Hz}$) hat diese periodische Schwingung?

- **(A)** $f = 500\,\text{Hz}$
- **(B)** $f = 125\,\text{Hz}$
- **(C)** $f = 1\,000\,\text{Hz}$
- **(D)** $f = 250\,\text{Hz}$
- **(E)** $f = 250\pi\,\text{Hz}$

**Richtige Antwort:** **D**

**Erklärung:**
Die allgemeine Schwingungsgleichung lautet $y(t) = A \cdot \sin(\omega \cdot t) = A \cdot \sin(2\pi f \cdot t)$. Der Vergleich liefert $\omega = 2\pi f = 500\pi \iff f = \frac{500\pi}{2\pi} = 250\,\text{Hz}$.

*Lernziel / Subskill:* Frequenz aus der Kreisfrequenz bestimmen  
*Konzept:* Zusammenhang zwischen Frequenz und Kreisfrequenz

---

### Frage 066 [Winkelfunktionen] (EASY)

Welchen Wertebereich (Bildmenge) $W$ besitzt die reelle Funktion $f(x) = 3 \cdot \sin(x)$?

- **(A)** $W = [0, 3]$
- **(B)** $W = [-1, 1]$
- **(C)** $W = [-3, 3]$
- **(D)** $W = (-\infty, \infty)$
- **(E)** $W = [-6, 6]$

**Richtige Antwort:** **C**

**Erklärung:**
Da der Sinus reelle Werte im Intervall $[-1, 1]$ annimmt, werden durch die Multiplikation mit $3$ alle Werte um den Faktor 3 gestreckt: $3 \cdot (-1) \le 3\sin(x) \le 3 \cdot 1 \implies W = [-3, 3]$.

*Lernziel / Subskill:* Wertebereich skalierter Sinusfunktionen  
*Konzept:* Wertebereich und Streckung in y-Richtung

---

### Frage 067 [Winkelfunktionen] (MEDIUM)

Welchen exakten Wert hat der Kosinus des stumpfen Winkels $120^\circ$?

- **(A)** $-\frac{1}{2}$
- **(B)** $\frac{1}{2}$
- **(C)** $-\frac{\sqrt{3}}{2}$
- **(D)** $\frac{\sqrt{3}}{2}$
- **(E)** $-\frac{\sqrt{2}}{2}$

**Richtige Antwort:** **A**

**Erklärung:**
Im 2. Quadranten ($90^\circ < \alpha < 180^\circ$) ist der Kosinus negativ. Es gilt die Symmetriebeziehung $\cos(180^\circ - \alpha) = -\cos(\alpha)$. Mit $\alpha = 60^\circ$: $\cos(120^\circ) = -\cos(60^\circ) = -\frac{1}{2}$.

*Lernziel / Subskill:* Kosinuswert im zweiten Quadranten  
*Konzept:* Vorzeichen und Symmetrie am Einheitskreis

---

### Frage 068 [Differential] (MEDIUM)

Gegeben ist die Funktion $f(x) = 5 \cdot \ln(x) + 2x^3$ für $x > 0$. Welchen Wert hat die Steigung der Tangente an den Graphen an der Stelle $x = 1$?

- **(A)** $5$
- **(B)** $6$
- **(C)** $7$
- **(D)** $10$
- **(E)** $11$

**Richtige Antwort:** **E**

**Erklärung:**
Erste Ableitung bilden: $f'(x) = \frac{5}{x} + 6x^2$. An der Stelle $x = 1$ einsetzen: $f'(1) = \frac{5}{1} + 6 \cdot 1^2 = 5 + 6 = 11$.

*Lernziel / Subskill:* Ableitung mit natürlichem Logarithmus und Potenz  
*Konzept:* Ableitung von Logarithmus- und Potenzfunktionen

---

### Frage 069 [Differential] (MEDIUM)

Wie lautet die erste Ableitung der Funktion $f(x) = e^{-2x} + 3x$?

- **(A)** $f'(x) = 2e^{-2x} + 3$
- **(B)** $f'(x) = -2e^{-2x} + 3$
- **(C)** $f'(x) = -\frac{1}{2}e^{-2x} + 3$
- **(D)** $f'(x) = -2e^{-2x}$
- **(E)** $f'(x) = e^{-2x} + 3$

**Richtige Antwort:** **B**

**Erklärung:**
Nach der Kettenregel gilt $(e^{-2x})' = -2 \cdot e^{-2x}$. Die Ableitung von $3x$ ist $3$. Zusammengesetzt ergibt sich $f'(x) = -2e^{-2x} + 3$.

*Lernziel / Subskill:* Kettenregel bei negativer e-Potenz  
*Konzept:* Ableitung der Exponentialfunktion mit Kettenregel

---

### Frage 070 [Differential] (HARD)

An welcher Stelle $x$ besitzt der Graph der Funktion $f(x) = x^3 - 6x^2 + 9x - 4$ einen Wendepunkt?

- **(A)** $x = 1$
- **(B)** $x = 3$
- **(C)** $x = 0$
- **(D)** $x = 2$
- **(E)** $x = 4$

**Richtige Antwort:** **D**

**Erklärung:**
Erste Ableitung: $f'(x) = 3x^2 - 12x + 9$. Zweite Ableitung: $f''(x) = 6x - 12$. Notwendige Bedingung für Wendepunkte: $f''(x) = 0 \iff 6x - 12 = 0 \iff 6x = 12 \iff x = 2$. Da $f'''(x) = 6 \neq 0$, liegt bei $x = 2$ tatsächlich ein Wendepunkt vor.

*Lernziel / Subskill:* Wendestelle einer kubischen Polynomfunktion  
*Konzept:* Wendepunktbestimmung über die zweite Ableitung

---

### Frage 071 [Differential] (EASY)

Wie lautet die zweite Ableitung $f''(x)$ der Funktion $f(x) = x^4 - 2x^2 + 7$?

- **(A)** $f''(x) = 4x^3 - 4x$
- **(B)** $f''(x) = 12x^2 - 4x$
- **(C)** $f''(x) = 12x^2 - 4$
- **(D)** $f''(x) = 24x$
- **(E)** $f''(x) = 12x^2$

**Richtige Antwort:** **C**

**Erklärung:**
Erste Ableitung: $f'(x) = 4x^3 - 4x$. Zweite Ableitung bilden: $f''(x) = 4 \cdot 3x^2 - 4 = 12x^2 - 4$.

*Lernziel / Subskill:* Zweite Ableitung einer Polynomfunktion  
*Konzept:* Höhere Ableitungen von Polynomfunktionen

---

### Frage 072 [Integral] (MEDIUM)

Berechne den Wert des bestimmten Integrals $\int_0^2 (4x^3 - 3x^2) \, dx$.

- **(A)** $8$
- **(B)** $12$
- **(C)** $16$
- **(D)** $4$
- **(E)** $2$

**Richtige Antwort:** **A**

**Erklärung:**
Stammfunktion bilden: $F(x) = x^4 - x^3$. Integrationsgrenzen einsetzen: $[x^4 - x^3]_0^2 = (2^4 - 2^3) - (0^4 - 0^3) = (16 - 8) - 0 = 8$.

*Lernziel / Subskill:* Bestimmtes Integral eines Polynoms  
*Konzept:* Bestimmtes Integral elementarer Polynome

---

### Frage 073 [Integral] (MEDIUM)

Welchen Wert hat das bestimmte Integral $\int_0^{\pi} \sin(x) \, dx$?

- **(A)** $0$
- **(B)** $1$
- **(C)** $\pi$
- **(D)** $-2$
- **(E)** $2$

**Richtige Antwort:** **E**

**Erklärung:**
Stammfunktion von $\sin(x)$ ist $F(x) = -\cos(x)$. Einsetzen: $[-\cos(x)]_0^\pi = (-\cos(\pi)) - (-\cos(0)) = (-(-1)) - (-1) = 1 + 1 = 2$.

*Lernziel / Subskill:* Bestimmtes Integral der Sinusfunktion  
*Konzept:* Integration der Sinusfunktion auf Halbperioden

---

### Frage 074 [Integral] (MEDIUM)

Welche Funktion stellt eine Stammfunktion von $f(x) = 6 \cdot \cos(3x)$ dar?

- **(A)** $F(x) = 18\sin(3x)$
- **(B)** $F(x) = 2\sin(3x)$
- **(C)** $F(x) = -2\sin(3x)$
- **(D)** $F(x) = 6\sin(3x)$
- **(E)** $F(x) = -18\sin(3x)$

**Richtige Antwort:** **B**

**Erklärung:**
Wegen der inneren Ableitung $3$ beim Ableiten muss bei der Stammfunktion durch $3$ dividiert werden: $\int 6\cos(3x)\,dx = 6 \cdot \frac{1}{3} \sin(3x) = 2\sin(3x)$.

*Lernziel / Subskill:* Stammfunktion bei linear substituiertem Kosinus  
*Konzept:* Lineare Substitution trigonometrischer Integrale

---

### Frage 075 [Integral] (HARD)

Welchen Flächeninhalt $A$ schließt die Normalparabel $f(x) = x^2$ mit der Geraden $g(x) = 2x$ vollständig ein?

- **(A)** $A = \frac{2}{3}$
- **(B)** $A = 2$
- **(C)** $A = 1$
- **(D)** $A = \frac{4}{3}$
- **(E)** $A = \frac{8}{3}$

**Richtige Antwort:** **D**

**Erklärung:**
1. Schnittstellen bestimmen: $x^2 = 2x \iff x^2 - 2x = 0 \iff x(x - 2) = 0 \implies x_1 = 0,\, x_2 = 2$. 2. Im Intervall $[0, 2]$ liegt die Gerade über der Parabel ($2x \ge x^2$). 3. Fläche berechnen: $A = \int_0^2 (2x - x^2)\,dx = [x^2 - \frac{x^3}{3}]_0^2 = (4 - \frac{8}{3}) - 0 = \frac{12 - 8}{3} = \frac{4}{3}$.

*Lernziel / Subskill:* Fläche zwischen Parabel und Gerade berechnen  
*Konzept:* Flächenberechnung zwischen zwei Funktionsgraphen

---

