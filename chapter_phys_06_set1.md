# MedAT BMS Physik — Kapitel 6: Optik
## SET 1 (Fragen 01 bis 25)


---

### Frage 01

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Brechungsindex und Lichtgeschwindigkeit im optischen Medium ($n = c_0/c$)

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
Die Lichtgeschwindigkeit im Vakuum beträgt $c_0 \approx 3{,}0 \cdot 10^8\,\text{m/s}$. Ein bestimmtes optisches Kronglas besitzt einen Brechungsindex von $n = 1{,}5$.  
Wie groß ist die Ausbreitungsgeschwindigkeit $c$ des Lichts in diesem Glas?

**Antwortoptionen:**
- (A) $2{,}0 \cdot 10^8\,\text{m/s}$
- (B) $4{,}5 \cdot 10^8\,\text{m/s}$
- (C) $1{,}5 \cdot 10^8\,\text{m/s}$
- (D) $3{,}0 \cdot 10^8\,\text{m/s}$
- (E) $0{,}5 \cdot 10^8\,\text{m/s}$

**Richtige Antwort:**
A

**Erklärung:**
Der absolute Brechungsindex $n$ eines Mediums ist definiert als das Verhältnis der Vakuumlichtgeschwindigkeit $c_0$ zur Phasengeschwindigkeit $c$ des Lichts im jeweiligen Medium:
$$n = \frac{c_0}{c} \iff c = \frac{c_0}{n}$$
Einsetzen der Werte:
$$c = \frac{3{,}0 \cdot 10^8\,\text{m/s}}{1{,}5} = 2{,}0 \cdot 10^8\,\text{m/s}$$
*MedAT-Falle:* Distraktor B multipliziert fälschlicherweise $c_0 \cdot n = 4{,}5 \cdot 10^8\,\text{m/s}$, was unphysikalisch ist, da sich Licht in Materie stets langsamer ausbreitet als im Vakuum ($c \le c_0$).



---

### Frage 02

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Snelliussches Brechungsgesetz ($n_1 \sin\alpha = n_2 \sin\beta$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
35 Sekunden

**Frage:**
Ein feiner Lichtstrahl fällt aus der Luft ($n_1 \approx 1{,}0$) unter einem Einfallswinkel von $\alpha = 60^\circ$ zum Einfallslot auf die ebene Grenzfläche eines Glaskörpers mit dem Brechungsindex $n_2 = \sqrt{3} \approx 1{,}732$.  
Unter welchem Brechungswinkel $\beta$ zum Lot pflanzt sich der Strahl im Glaskörper fort?

**Antwortoptionen:**
- (A) $\beta = 60^\circ$
- (B) $\beta = 45^\circ$
- (C) $\beta = 30^\circ$
- (D) $\beta = 15^\circ$
- (E) $\beta = 0^\circ$

**Richtige Antwort:**
C

**Erklärung:**
Nach dem Snelliusschen Brechungsgesetz gilt an der Grenzfläche zweier optischer Medien:
$$n_1 \cdot \sin(\alpha) = n_2 \cdot \sin(\beta) \implies \sin(\beta) = \frac{n_1}{n_2} \cdot \sin(\alpha)$$
Mit $\sin(60^\circ) = \frac{\sqrt{3}}{2}$, $n_1 = 1{,}0$ und $n_2 = \sqrt{3}$:
$$\sin(\beta) = \frac{1{,}0}{\sqrt{3}} \cdot \frac{\sqrt{3}}{2} = \frac{1}{2}$$
Der Winkel, dessen Sinus genau $\frac{1}{2}$ beträgt, ist $\beta = 30^\circ$.  
*Merkhilfe:* Beim Übergang vom optisch dünneren ins optisch dichtere Medium ($n_1 < n_2$) wird der Lichtstrahl **zum Lot hin** gebrochen ($\beta < \alpha$).



---

### Frage 03

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Physikalische Bedingungen für Totalreflexion in medizinischen Endoskopen

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
In flexiblen medizinischen Endoskopen wird Licht mithilfe von dünnen Glasfaserbündeln verlustarm von einer Lichtquelle in Körperhöhlen geleitet.  
Welche physikalischen Bedingungen müssen erfüllt sein, damit an der Grenzfläche zwischen dem Faserkern und dem Fasermantel **Totalreflexion** auftritt?

**Antwortoptionen:**
- (A) Der Faserkern muss optisch dünner sein als der Fasermantel ($n_{\text{Kern}} < n_{\text{Mantel}}$), und der Einfallswinkel zum Lot muss kleiner als der Grenzwinkel sein.
- (B) Die Lichtausbreitung muss vom optisch dünneren ins optisch dichtere Medium erfolgen, und das Licht muss zwingend kohärent sein.
- (C) Totalreflexion tritt grundsätzlich bei jedem beliebigen Einfallswinkel auf, sofern der Fasermantel metallisch verspiegelt ist.
- (D) Der Brechungsindex des Mantels muss genau doppelt so groß sein wie der des Kerns, damit der Brechungswinkel $90^\circ$ beträgt.
- (E) Der Lichtstrahl muss sich im optisch dichteren Medium befinden ($n_{\text{Kern}} > n_{\text{Mantel}}$), und sein Einfallswinkel zum Lot an der Grenzfläche muss größer als der Grenzwinkel der Totalreflexion ($\alpha > \alpha_c$) sein.

**Richtige Antwort:**
E

**Erklärung:**
Damit Totalreflexion stattfinden kann, müssen zwingend zwei Bedingungen erfüllt sein:
1. Das Licht muss sich im **optisch dichteren Medium** befinden und auf die Grenzfläche zu einem optisch dünneren Medium treffen ($n_1 > n_2$, d. h. $n_{\text{Kern}} > n_{\text{Mantel}}$).
2. Der Einfallswinkel $\alpha$ zum Lot muss größer sein als der Grenzwinkel der Totalreflexion $\alpha_c$ mit $\sin(\alpha_c) = \frac{n_2}{n_1}$.  
Ist $\alpha > \alpha_c$, wird das gesamte Licht ohne Transmissionsverlust vollständig in den Kern zurückreflektiert.  
*MedAT-Falle:* Distraktor A und B kehren das Verhältnis der Brechungsindizes um. Beim Übergang ins optisch dichtere Medium gibt es keine Totalreflexion.



---

### Frage 04

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Reflexionsgesetz und Bildeigenschaften am ebenen Spiegel

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Eine Patientin steht in einem Abstand von $s = 1{,}5\,\text{m}$ vor einem ebenen, vertikal an der Wand montierten Badezimmerspiegel und betrachtet ihr Spiegelbild.  
Welche Aussage über das entstehende Spiegelbild und dessen Eigenschaften ist **physikalisch zutreffend**?

**Antwortoptionen:**
- (A) Es handelt sich um ein reelles, verkleinertes Bild, das sich direkt in der Spiegelebene befindet.
- (B) Es handelt sich um ein virtuelles, aufrechtes Bild von gleicher Größe wie der Gegenstand, das scheinbar $1{,}5\,\text{m}$ hinter der Spiegelebene liegt (Gesamtabstand Patientin–Bild: $3{,}0\,\text{m}$).
- (C) Das Bild ist reell und umgekehrt und hat zur Patientin einen Gesamtabstand von $1{,}5\,\text{m}$.
- (D) Das Bild ist virtuell und um den Faktor 2 vergrößert, weil der Einfallswinkel gleich dem Reflexionswinkel ist.
- (E) An einem ebenen Spiegel entsteht kein virtuelles Bild, da reflektiertes Licht stets auf einem Papierschirm aufgefangen werden kann.

**Richtige Antwort:**
B

**Erklärung:**
Nach dem Reflexionsgesetz ($\alpha = \alpha'$) scheinen die von einem punktförmigen Gegenstand divergent reflektierten Lichtstrahlen von einem Punkt hinter dem Spiegel auszugehen.  
Eigenschaften des Bildes am ebenen Spiegel:
- **Virtuell:** Da sich die Strahlen nicht real schneiden, sondern nur ihre rückwärtigen Verlängerungen.
- **Aufrecht und seitenvertauscht** (bezüglich der Tiefenachse gespiegelt).
- **Abbildungsmaßstab $A = 1$:** Bildgröße $B$ ist gleich der Gegenstandsgröße $G$.
- **Bildweite $b = g$:** Das Bild liegt symmetrisch im selben Abstand hinter dem Spiegel ($b = 1{,}5\,\text{m}$). Der Gesamtabstand zwischen der Patientin und ihrem virtuellen Spiegelbild beträgt daher $1{,}5\,\text{m} + 1{,}5\,\text{m} = 3{,}0\,\text{m}$.



---

### Frage 05

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Linsengleichung und Abbildungsmaßstab bei dünnen Sammellinsen

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
45 Sekunden

**Frage:**
Ein $G = 4\,\text{cm}$ hoher Gegenstand steht in einem Abstand von $g = 30\,\text{cm}$ vor einer dünnen Sammellinse mit der Brennweite $f = 20\,\text{cm}$.  
In welcher Bildweite $b$ entsteht das Bild, und wie groß ist die Bildhöhe $B$?

**Antwortoptionen:**
- (A) $b = 12\,\text{cm}$ und $B = 1{,}6\,\text{cm}$
- (B) $b = 40\,\text{cm}$ und $B = 6\,\text{cm}$
- (C) $b = 50\,\text{cm}$ und $B = 4\,\text{cm}$
- (D) $b = 60\,\text{cm}$ und $B = 8\,\text{cm}$
- (E) $b = 60\,\text{cm}$ und $B = 2\,\text{cm}$

**Richtige Antwort:**
D

**Erklärung:**
1. **Linsengleichung zur Bestimmung der Bildweite $b$:**
   $$\frac{1}{f} = \frac{1}{g} + \frac{1}{b} \iff \frac{1}{b} = \frac{1}{f} - \frac{1}{g}$$
   Einsetzen der Werte:
   $$\frac{1}{b} = \frac{1}{20\,\text{cm}} - \frac{1}{30\,\text{cm}} = \frac{3 - 2}{60\,\text{cm}} = \frac{1}{60\,\text{cm}} \implies b = 60\,\text{cm}$$
2. **Abbildungsmaßstab zur Bestimmung der Bildhöhe $B$:**
   $$A = \frac{B}{G} = \frac{b}{g} \implies B = G \cdot \frac{b}{g}$$
   Einsetzen:
   $$B = 4\,\text{cm} \cdot \frac{60\,\text{cm}}{30\,\text{cm}} = 4\,\text{cm} \cdot 2 = 8\,\text{cm}$$
Das Bild ist reell, umgekehrt und auf das Doppelte vergrößert ($B = 8\,\text{cm}$) bei $b = 60\,\text{cm}$.  
*MedAT-Falle:* Kehrwertfehler bei der Subtraktion ($1/20 - 1/30 \ne 1/(20-30)$) oder Vertauschen von Bild- und Gegenstandsweite beim Maßstab ($B = 4 \cdot 30/60 = 2\,\text{cm}$, Distraktor E).



---

### Frage 06

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Zusammenhang zwischen Brennweite und Brechkraft ($D = 1/f$)

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
Eine ophthalmologische Lupe zur Untersuchung des Augenhintergrunds besitzt eine Brennweite von $f = +5\,\text{cm} = +0{,}05\,\text{m}$.  
Welche Brechkraft $D$ in Dioptrien ($\text{dpt}$) weist diese Linse auf?

**Antwortoptionen:**
- (A) $+20\,\text{dpt}$
- (B) $+0{,}2\,\text{dpt}$
- (C) $+5\,\text{dpt}$
- (D) $-20\,\text{dpt}$
- (E) $+50\,\text{dpt}$

**Richtige Antwort:**
A

**Erklärung:**
Die Brechkraft $D$ einer Linse ist der Kehrwert ihrer Brennweite $f$, angegeben in Metern:
$$D = \frac{1}{f} \quad \text{mit } [D] = \text{m}^{-1} = \text{dpt}$$
Einsetzen der Brennweite in Metern ($f = 0{,}05\,\text{m}$):
$$D = \frac{1}{0{,}05\,\text{m}} = \frac{1}{\frac{5}{100}\,\text{m}} = \frac{100}{5}\,\text{dpt} = +20\,\text{dpt}$$
*MedAT-Falle:* Vergessen der Umrechnung von Zentimetern in Meter führt zu $1/5 = 0{,}2$ (Distraktor B).



---

### Frage 07

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Bildkonstruktion bei Sammellinsen für Gegenstände zwischen $f$ und $2f$

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Ein Gegenstand befindet sich vor einer bikonvexen Sammellinse in einer Gegenstandsweite $g$, die größer als die einfache Brennweite $f$, aber kleiner als die doppelte Brennweite ist ($f < g < 2f$).  
Welche Eigenschaften weist das auf der anderen Linsenseite entstehende Bild auf?

**Antwortoptionen:**
- (A) Virtuell, aufrecht und verkleinert
- (B) Reell, umgekehrt und verkleinert (bei $b < 2f$)
- (C) Reell, umgekehrt und vergrößert (bei $b > 2f$)
- (D) Virtuell, umgekehrt und vergrößert
- (E) Es entsteht überhaupt kein Bild, da die gebrochenen Strahlen parallel verlaufen.

**Richtige Antwort:**
C

**Erklärung:**
Die klassischen Bildfälle der Sammellinse im Überblick:
1. $g > 2f$: Bild ist reell, umgekehrt, **verkleinert** ($f < b < 2f$) – Prinzip der Fotokamera und des Auges.
2. $g = 2f$: Bild ist reell, umgekehrt, **gleich groß** ($b = 2f$).
3. $f < g < 2f$: Bild ist reell, umgekehrt, **vergrößert** ($b > 2f$) – Prinzip des Diaprojektors und Mikroskop-Objektivs.
4. $g = f$: Bildweite $b \to \infty$ (parallele Strahlen, kein reelles Bild).
5. $g < f$: Bild ist virtuell, aufrecht, **vergrößert** ($b < 0$) – Prinzip der Lupe.  
Für $f < g < 2f$ ist das Bild somit reell, umgekehrt und vergrößert (C).



---

### Frage 08

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Geometrische Optik

**Subkategorie:**
Geometrische Optik

**Lernziel / Subskill:**
Brechkraft und Brennweite eines Systems zweier dünner Linsen

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
40 Sekunden

**Frage:**
Ein optisches Linsensystem besteht aus zwei unmittelbar aneinandergefügten dünnen Linsen:
- Linse 1 ist eine Sammellinse mit der Brennweite $f_1 = +25\,\text{cm}$.
- Linse 2 ist eine Zerstreuungslinse mit der Brennweite $f_2 = -50\,\text{cm}$.  
Welche Gesamtbrechkraft $D_{\text{ges}}$ und welche Gesamtbrennweite $f_{\text{ges}}$ besitzt dieses Linsensystem?

**Antwortoptionen:**
- (A) $D_{\text{ges}} = +6{,}0\,\text{dpt}$ und $f_{\text{ges}} = +16{,}7\,\text{cm}$
- (B) $D_{\text{ges}} = -2{,}0\,\text{dpt}$ und $f_{\text{ges}} = -50\,\text{cm}$
- (C) $D_{\text{ges}} = +2{,}0\,\text{dpt}$ und $f_{\text{ges}} = +25\,\text{cm}$
- (D) $D_{\text{ges}} = +0{,}02\,\text{dpt}$ und $f_{\text{ges}} = +50\,\text{cm}$
- (E) $D_{\text{ges}} = +2{,}0\,\text{dpt}$ und $f_{\text{ges}} = +50\,\text{cm}$

**Richtige Antwort:**
E

**Erklärung:**
1. **Brechkräfte der Einzellinsen:**
   - Sammellinse: $f_1 = +0{,}25\,\text{m} \implies D_1 = \frac{1}{+0{,}25\,\text{m}} = +4{,}0\,\text{dpt}$.
   - Zerstreuungslinse: $f_2 = -0{,}50\,\text{m} \implies D_2 = \frac{1}{-0{,}50\,\text{m}} = -2{,}0\,\text{dpt}$.
2. **Gesamtbrechkraft bei direktem Kontakt:**
   Die Brechkräfte addieren sich vorzeichenrichtig:
   $$D_{\text{ges}} = D_1 + D_2 = +4{,}0\,\text{dpt} + (-2{,}0\,\text{dpt}) = +2{,}0\,\text{dpt}$$
3. **Gesamtbrennweite:**
   $$f_{\text{ges}} = \frac{1}{D_{\text{ges}}} = \frac{1}{+2{,}0\,\text{m}^{-1}} = +0{,}50\,\text{m} = +50\,\text{cm}$$
*MedAT-Falle:* Bei Linsen in Kontakt addieren sich die Brechkräfte ($D_{\text{ges}} = D_1 + D_2$), **nicht** die Brennweiten ($f_{\text{ges}} \ne f_1 + f_2$).



---

### Frage 09

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optik des Auges

**Subkategorie:**
Optik des Auges

**Lernziel / Subskill:**
Dioptrischer Apparat und Brechkraftverteilung im menschlichen Auge

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Das menschliche Auge bündelt einfallende parallele Lichtstrahlen auf der Netzhaut (Retina).  
Welche Aussage über die Verteilung der Brechkraft innerhalb des dioptrischen Apparats eines normalsichtigen Auges im Ruhezustand (Fernakkommodation) ist **physikalisch und anatomisch zutreffend**?

**Antwortoptionen:**
- (A) Die Augenlinse liefert mit rund $43\,\text{dpt}$ den größten Anteil der Gesamtbrechkraft, während die Hornhaut nur etwa $15\,\text{dpt}$ beiträgt.
- (B) Die Gesamtbrechkraft in Ruhe beträgt rund $58 - 60\,\text{dpt}$; der größte Brechkraftanteil (ca. $40 - 43\,\text{dpt}$) entfällt auf die Hornhautvorderfläche wegen des großen Brechungsindexunterschieds zwischen Luft und Tränenfilm/Hornhaut.
- (C) Der Glaskörper erzeugt die stärkste Lichtbrechung, da er das größte geometrische Volumen im Auge einnimmt.
- (D) Im Ruhezustand ist die Brechkraft der Hornhaut null; erst durch Ziliarmuskelzug wird sie gekrümmt.
- (E) Die Gesamtbrechkraft des ruhenden Auges beträgt exakt $10\,\text{dpt}$, wovon die Hälfte auf die vordere Augenkammer entfällt.

**Richtige Antwort:**
B

**Erklärung:**
Der dioptrische Apparat des Auges besitzt im fernakkommodierten Zustand eine Gesamtbrechkraft von ca. $58 - 60\,\text{dpt}$.  
- Die **Hornhaut (Cornea)** besitzt mit ca. $40 - 43\,\text{dpt}$ rund zwei Drittel der gesamten Brechkraft. Der Grund dafür ist der drastische Sprung des Brechungsindex an der Grenzfläche Luft ($n \approx 1{,}00$) zu Hornhaut/Tränenfilm ($n \approx 1{,}376$).
- Die **Augenlinse (Lens crystallina)** steuert in Ruhe ca. $15 - 20\,\text{dpt}$ bei, besitzt aber die entscheidende Eigenschaft, ihre Brechkraft durch Akkommodation dynamisch um bis zu $10 - 15\,\text{dpt}$ (bei jungen Menschen) steigern zu können.
*MedAT-Falle:* Viele vermuten fälschlicherweise die Augenlinse als Hauptbrechkraftträger (Distraktor A), da sie dynamisch fokussieren kann. Physikalisch bricht jedoch die Hornhaut das Licht am stärksten.



---

### Frage 10

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optik des Auges

**Subkategorie:**
Optik des Auges

**Lernziel / Subskill:**
Biomechanik und Optik der Nahakkommodation

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
25 Sekunden

**Frage:**
Was geschieht im gesunden menschlichen Auge beim Übergang von der Fernsicht zur Nahsicht (Nahakkommodation)?

**Antwortoptionen:**
- (A) Der Ziliarmuskel entspannt sich, die Zonulafasern spannen sich und ziehen die Linse flach.
- (B) Der Augapfel wird durch die äußeren Augenmuskeln um mehrere Millimeter verkürzt.
- (C) Die Hornhaut wird durch den Augeninnendruck stärker nach vorne gewölbt.
- (D) Der ringförmige Ziliarmuskel kontrahiert, wodurch die Zonulafasern erschlaffen und die elastische Augenlinse eine stärkere Eigenkrümmung annimmt (Brechkraft steigt).
- (E) Die Pupille erweitert sich maximal (Mydriasis), um die Brennweite der Linse zu vergrößern.

**Richtige Antwort:**
D

**Erklärung:**
Nach der Helmholtz-Theorie der Akkommodation:
1. **Nahsicht:** Der ringförmige Ziliarmuskel **kontrahiert** $\to$ der Durchmesser des Ziliarkörpers verengt sich $\to$ die radialen Zonulafasern (Fibrae zonulares) **erschlaffen** $\to$ der Zug an der Linsenkapsel lässt nach $\to$ die elastische Linse folgt ihrer Eigenelastizität und **kugelt sich ab** $\to$ kleinere Krümmungsradien führen zu **höherer Brechkraft** (kürzere Brennweite).
2. **Fernsicht:** Ziliarmuskel erschlafft $\to$ Zonulafasern stehen unter Zug $\to$ Linse wird flach gezogen $\to$ geringe Brechkraft.



---

### Frage 11

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optik des Auges

**Subkategorie:**
Optik des Auges

**Lernziel / Subskill:**
Pathophysiologie und optische Korrektur der Myopie (Kurzsichtigkeit)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Ein 20-jähriger Medizinstudent sieht entfernte Objekte auf der Hörsaalleinwand unscharf, kann jedoch Skripte in normalem Leseabstand gestochen scharf lesen. Der Augenarzt diagnostiziert eine typische Myopie (Kurzsichtigkeit).  
Welche optische Ursache liegt vor, und mit welchem Linsentyp wird dieser Sehfehler korrigiert?

**Antwortoptionen:**
- (A) Der Augapfel ist im Verhältnis zur Brechkraft zu lang (Brennpunkt paralleler Strahlen liegt *vor* der Netzhaut); Korrektur durch eine **Zerstreuungslinse** (Konkavlinse mit negativen Dioptrien).
- (B) Der Augapfel ist zu kurz (Brennpunkt liegt *hinter* der Netzhaut); Korrektur durch eine **Sammellinse** (Konvexlinse mit positiven Dioptrien).
- (C) Die Augenlinse hat ihre Elastizität verloren; Korrektur durch eine Zylinderlinse.
- (D) Die Brechkraft der Hornhaut ist zu schwach; Korrektur durch eine Sammellinse mit negativen Dioptrien.
- (E) Der Augapfel ist zu lang; Korrektur durch eine bikonvexe Sammellinse.

**Richtige Antwort:**
A

**Erklärung:**
- **Myopie (Kurzsichtigkeit):** Meist Achsenmyopie, bei der der Augapfel anatomisch zu lang ist (bzw. seltener Brechungsmyopie mit zu hoher Brechkraft). Parallele Lichtstrahlen aus der Ferne werden zu stark gebrochen und vereinigen sich bereits **vor der Netzhaut**. Auf der Netzhaut entsteht ein unscharfer Zerstreuungskreis. Der Fernpunkt liegt im Endlichen.
- **Korrektur:** Dem Auge muss Brechkraft entzogen werden. Dies geschieht durch eine **Zerstreuungslinse (bikonkav)** mit negativem Vorzeichen (z. B. $-2{,}5\,\text{dpt}$), die das einfallende Licht vor dem Auge leicht zerstreut, sodass der Brennpunkt exakt auf die Netzhaut wandert.



---

### Frage 12

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optik des Auges

**Subkategorie:**
Optik des Auges

**Lernziel / Subskill:**
Differenzierung zwischen Presbyopie (Alterssichtigkeit) und Hyperopie (Weitsichtigkeit)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
35 Sekunden

**Frage:**
Eine 52-jährige Patientin bemerkt, dass sie beim Lesen von Büchern diese immer weiter von sich weghalten muss, während sie in die Ferne weiterhin hervorragend sieht.  
Welche Aussage erklärt den Unterschied zwischen dieser **Presbyopie (Alterssichtigkeit)** und einer angeborenen **Hyperopie (Weitsichtigkeit)** physikalisch zutreffend?

**Antwortoptionen:**
- (A) Bei der Presbyopie ist der Augapfel anatomisch verkürzt, während bei der Hyperopie die Hornhaut unregelmäßig gekrümmt ist.
- (B) Presbyopie wird mit Zerstreuungslinsen korrigiert, Hyperopie hingegen stets mit Zylinderlinsen.
- (C) Presbyopie beruht auf einem altersbedingten Elastizitätsverlust der Augenlinse (verminderte Akkommodationsbreite, Nahpunkt rückt in die Ferne), während Hyperopie meist auf einem anatomisch zu kurzen Augapfel beruht, bei dem parallele Strahlen im Ruhezustand erst hinter der Netzhaut fokussiert würden.
- (D) Bei Presbyopie ist der Fernpunkt ins Unendliche verschoben, während der Nahpunkt unverändert bei $10\,\text{cm}$ verbleibt.
- (E) Beide Fehlsichtigkeiten haben exakt dieselbe Ursache und erfordern Brillen mit negativer Brechkraft (Minusgläser).

**Richtige Antwort:**
C

**Erklärung:**
- **Presbyopie (Alterssichtigkeit):** Physiologischer Alterungsprozess durch Sklerosierung des Linsenkerns und Elastizitätsverlust der Linsenkapsel. Die Linse kann sich bei Kontraktion des Ziliarmuskels nicht mehr stark genug wölben. Die Akkommodationsbreite sinkt drastisch ab; der **Nahpunkt rückt in die Ferne** ($> 30 - 50\,\text{cm}$). Die Fernsicht bleibt unbeeinträchtigt. Korrektur: Lesebrille mit **Sammellinse** (Plusgläser).
- **Hyperopie (Übersichtigkeit / Weitsichtigkeit):** Anatomischer Brechungsfehler (meist zu kurzer Augapfel). In Ruhe liegt der Fokus paralleler Strahlen **hinter der Netzhaut**. Junge Hyperope können dies durch ständige Nahakkommodation kompensieren, ermüden aber rasch (Asthenopie). Korrektur: Brille mit **Sammellinse** (Plusgläser).



---

### Frage 13

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optik des Auges

**Subkategorie:**
Optik des Auges

**Lernziel / Subskill:**
Astigmatismus (Stabsichtigkeit): Ursache und Zylinderlinsenkorrektur

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Bei einem Patienten wird ein regulärer Hornhautastigmatismus festgestellt. Ein punktförmiger Stern am Nachthimmel wird auf seiner Netzhaut nicht als scharfer Punkt, sondern als unscharfe Brennlinie abgebildet.  
Welche physikalische Ursache liegt diesem Brechungsfehler zugrunde und wie wird er korrigiert?

**Antwortoptionen:**
- (A) Ein zu langer Augapfel; Korrektur durch eine rotationssymmetrische Zerstreuungslinse.
- (B) Eine Trübung der Augenlinse; Korrektur durch eine Sammellinse mit hoher Brechkraft.
- (C) Eine unzureichende Kontraktionskraft des Ziliarmuskels; Korrektur durch eine bifokale Lesebrille.
- (D) Ein ungleichmäßiger Brechungsindex des Glaskörpers; Korrektur durch polarisierende Filtergläser.
- (E) Unterschiedliche Krümmungsradien der Hornhaut in zwei senkrecht aufeinanderstehenden Meridianen (fehlende Rotationssymmetrie); Korrektur durch eine **Zylinderlinse** mit definierter Achsenlage.

**Richtige Antwort:**
E

**Erklärung:**
- **Astigmatismus (Stabsichtigkeit):** Die Hornhaut (seltener die Linse) ist nicht rotationssymmetrisch gekrümmt wie eine Kugeloberfläche, sondern torisch gewölbt (wie die Oberfläche eines liegenden Eies oder eines Rugbyballs). Die beiden Hauptmeridiane (z. B. vertikal und horizontal) besitzen unterschiedliche Krümmungsradien und damit unterschiedliche Brechkräfte. Ein Punkt wird daher in zwei räumlich getrennte Brennlinien zerlegt.
- **Korrektur:** Durch eine **Zylinderlinse** (Cylinder), die das Licht nur in einer einzigen Raumebene bricht und in der dazu orthogonalen Achse keine Brechkraft besitzt. Damit wird die Brechkraftdifferenz zwischen beiden Meridianen exakt ausgeglichen.



---

### Frage 14

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optische Geräte

**Subkategorie:**
Optische Geräte

**Lernziel / Subskill:**
Funktionsweise und Winkelvergrößerung einer Lupe ($g < f$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Eine Dermatologin untersucht ein verdächtiges Hautmal mit einem Dermatoskop (funktionell eine Lupe, bestehend aus einer Sammellinse mit der Brennweite $f = 5\,\text{cm} = 0{,}05\,\text{m}$).  
Wie muss die Lupe bezüglich des Hautmals positioniert werden, welche Art von Bild entsteht, und wie groß ist die Normalvergrößerung $V$ bei einer konventionellen deutlichen Sehweite von $s_0 = 25\,\text{cm}$?

**Antwortoptionen:**
- (A) $g > 2f$; Reelles, umgekehrtes Bild; $V = 2$-fach
- (B) $g < f$; Virtuelles, aufrechtes Bild; $V = 5$-fach
- (C) $g = f$; Reelles, verkleinertes Bild; $V = 10$-fach
- (D) $g < f$; Reelles, umgekehrtes Bild; $V = 5$-fach
- (E) $f < g < 2f$; Virtuelles, aufrechtes Bild; $V = 20$-fach

**Richtige Antwort:**
B

**Erklärung:**
1. **Lupenprinzip:** Der Gegenstand wird innerhalb der einfachen Brennweite platziert ($g < f$). Die gebrochenen Strahlen divergieren hinter der Linse; ihre rückwärtigen Verlängerungen schneiden sich auf der Gegenstandsseite. Es entsteht ein **virtuelles, aufrechtes und vergrößertes Bild**.
2. **Winkelvergrößerung (Normalvergrößerung):**
   $$V = \frac{s_0}{f} = s_0 \cdot D$$
   Mit der konventionellen deutlichen Sehweite $s_0 = 25\,\text{cm} = 0{,}25\,\text{m}$ und $f = 5\,\text{cm} = 0{,}05\,\text{m}$:
   $$V = \frac{25\,\text{cm}}{5\,\text{cm}} = 5\text{-fach} \quad (\text{bzw. } 0{,}25\,\text{m} \cdot 20\,\text{dpt} = 5)$$
*MedAT-Falle:* Distraktor D behauptet, das vergrößerte Bild sei reell. Ein reelles Bild einer Sammellinse steht jedoch stets auf dem Kopf ($g > f$).



---

### Frage 15

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Optische Geräte

**Subkategorie:**
Optische Geräte

**Lernziel / Subskill:**
Strahlengang und Gesamtvergrößerung des Lichtmikroskops

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
45 Sekunden

**Frage:**
In einem histologischen Labor wird ein Gewebeschnitt mit einem Durchlicht-Lichtmikroskop analysiert. Das Mikroskop verfügt über ein Objektiv mit dem Abbildungsmaßstab $V_{\text{obj}} = 40$-fach und ein Okular mit der Vergrößerung $V_{\text{ok}} = 10$-fach.  
Welche der folgenden Aussagen beschreibt die optische Funktionsweise dieses zweistufigen Systems **vollständig korrekt**?

**Antwortoptionen:**
- (A) Das Objektiv erzeugt ein virtuelles, aufrechtes Zwischenbild, welches das Okular anschließend als reelles Endbild auf das Auge projiziert; die Gesamtvergrößerung beträgt $50$-fach.
- (B) Beide optischen Komponenten sind Zerstreuungslinsen, die gemeinsam eine Gesamtvergrößerung von $400$-fach erzeugen.
- (C) Das Objektiv erzeugt ein verkleinertes reelles Zwischenbild; erst das Okular vergrößert dieses Zwischenbild um den Faktor 400.
- (D) Das Objektiv erzeugt ein reelles, umgekehrtes und vergrößertes Zwischenbild, das sich innerhalb der Brennweite des als Lupe wirkenden Okulars befindet; das vom Okular erzeugte Endbild ist virtuell, und die Gesamtvergrößerung beträgt $V_{\text{ges}} = 40 \cdot 10 = 400$-fach.
- (E) Die Gesamtvergrößerung berechnet sich additiv als $V_{\text{ges}} = V_{\text{obj}} + V_{\text{ok}} = 40 + 10 = 50$-fach.

**Richtige Antwort:**
D

**Erklärung:**
Das Lichtmikroskop ist ein zweistufiges Vergrößerungssystem:
1. **Objektiv:** Eine Sammellinse kurzer Brennweite. Das Präparat liegt knapp außerhalb der Brennweite ($f_{\text{obj}} < g < 2f_{\text{obj}}$). Es erzeugt ein **reelles, umgekehrtes und stark vergrößertes Zwischenbild** im Tubus.
2. **Okular:** Wirkt wie eine **Lupe**. Das reelle Zwischenbild liegt innerhalb der Brennweite des Okulars ($g_{\text{ok}} \le f_{\text{ok}}$). Das Okular erzeugt daraus für das entspannte Auge ein vergrößertes, **virtuelles Endbild**.
3. **Gesamtvergrößerung:** Sie ergibt sich multiplikativ aus den Vergrößerungen beider Einzelsysteme:
   $$V_{\text{ges}} = V_{\text{obj}} \cdot V_{\text{ok}} = 40 \cdot 10 = 400\text{-fach}$$
*MedAT-Falle:* Fälschliches Addieren statt Multiplizieren der Vergrößerungen ($40 + 10 = 50$, Distraktor E).



---

### Frage 16

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Wellenoptik

**Subkategorie:**
Wellenoptik

**Lernziel / Subskill:**
Interferenzbedingung am Doppelspalt für konstruktive Maxima

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
Monochromatisches Laserlicht der Wellenlänge $\lambda$ fällt senkrecht auf einen Doppelspalt. Auf einem weit entfernten Schirm entsteht ein periodisches Interferenzmuster aus hellen und dunklen Streifen.  
Welche Bedingung muss für den Gangunterschied $\Delta s$ der beiden von den Spalten ausgehenden kohärenten Teilwellen erfüllt sein, damit an einer Stelle des Schirms ein **Interferenzmaximum (konstruktive Interferenz)** entsteht? ($k \in \{0, 1, 2, 3, \dots\}$)

**Antwortoptionen:**
- (A) $\Delta s = k \cdot \lambda$
- (B) $\Delta s = \left(k + \frac{1}{2}\right) \cdot \lambda$
- (C) $\Delta s = \left(k + \frac{1}{4}\right) \cdot \lambda$
- (D) $\Delta s = \frac{\lambda}{2 k}$
- (E) $\Delta s = \frac{k}{\lambda}$

**Richtige Antwort:**
A

**Erklärung:**
- **Konstruktive Interferenz (Helligkeitsmaximum):** Treffen zwei Wellenberge aufeinander, verstärken sich die Wellen maximal. Dies geschieht genau dann, wenn der Gangunterschied $\Delta s$ ein ganzzahliges Vielfaches der Wellenlänge $\lambda$ beträgt:
  $$\Delta s = k \cdot \lambda \quad \text{mit } k \in \{0, 1, 2, \dots\}$$
- **Destruktive Interferenz (Dunkelheitsminimum / Auslöschung):** Trifft ein Wellenberg auf ein Wellental, löschen sich die Wellen aus. Bedingung:
  $$\Delta s = \left(k + \frac{1}{2}\right) \cdot \lambda = (2k + 1) \cdot \frac{\lambda}{2}$$
*MedAT-Falle:* Distraktor B beschreibt die Bedingung für Minima (Auslöschung).



---

### Frage 17

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Wellenoptik

**Subkategorie:**
Wellenoptik

**Lernziel / Subskill:**
Spektrale Farbzerlegung am Beugungsgitter ($\sin\alpha \propto \lambda$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Weißes Licht fällt senkrecht auf ein optisches Beugungsgitter mit vielen parallelen Spalten. Auf einem Projektionsschirm wird das weiße Licht in seine einzelnen Spektralfarben aufgefächert.  
Welche Aussage über das entstehende Beugungsspektrum ist **physikalisch zutreffend**?

**Antwortoptionen:**
- (A) Im zentralen Beugungsmaximum 0. Ordnung ($k = 0$) entsteht ein breites, nach Farben getrenntes Regenbogenspektrum.
- (B) Blaues Licht ($\lambda \approx 400\,\text{nm}$) wird in den Beugungsordnungen $k \ge 1$ unter einem größeren Beugungswinkel abgelenkt als rotes Licht ($\lambda \approx 700\,\text{nm}$).
- (C) Rotes Licht besitzt eine größere Wellenlänge als blaues Licht und wird daher in der 1. Beugungsordnung unter einem **größeren Beugungswinkel** $\alpha$ gebeugt als blaues Licht ($\sin\alpha \propto \lambda$).
- (D) Ein optisches Gitter zerlegt Licht durch selektive Absorption, wobei kurzwelliges Licht in Wärme umgewandelt wird.
- (E) Die Beugungswinkel am Gitter sind für alle Wellenlängen des sichtbaren Lichts identisch.

**Richtige Antwort:**
C

**Erklärung:**
Für die Hauptmaxima eines optischen Gitters mit Gitterkonstante $g$ gilt:
$$g \cdot \sin(\alpha_k) = k \cdot \lambda \implies \sin(\alpha_k) = \frac{k \cdot \lambda}{g}$$
Für die 1. Beugungsordnung ($k = 1$) ist der Sinus des Beugungswinkels direkt proportional zur Wellenlänge $\lambda$:
- Rotes Licht hat eine größere Wellenlänge ($\lambda_{\text{rot}} \approx 700\,\text{nm}$) als blaues Licht ($\lambda_{\text{blau}} \approx 400\,\text{nm}$).
- Daher gilt $\sin(\alpha_{\text{rot}}) > \sin(\alpha_{\text{blau}})$, und rotes Licht wird am Gitter **am stärksten nach außen abgelenkt**.  
*Wichtiger MedAT-Vergleich:* An einem **Prisma** verhält es sich genau umgekehrt (rot wird am schwächsten gebrochen, blau am stärksten, weil der Brechungsindex von Glas mit abnehmender Wellenlänge steigt = normale Dispersion). Beim Beugungsgitter wird Rot am stärksten gebeugt. Im Maximum 0. Ordnung ($k = 0$) ist $\Delta s = 0$ für alle Wellenlängen; dort entsteht ein weißer Fleck (Distraktor A falsch).



---

### Frage 18

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Wellenoptik

**Subkategorie:**
Wellenoptik

**Lernziel / Subskill:**
Dünnschichtinterferenz und Antireflexbeschichtung von Linsen

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
45 Sekunden

**Frage:**
Um störende Reflexionen an Mikroskoplinsen aus Glas ($n_{\text{Glas}} = 1{,}50$) zu minimieren, wird eine dünne dielektrische Schicht aus Magnesiumfluorid ($n_{\text{Schicht}} = 1{,}38$) auf die Linsenoberfläche aufgebracht.  
Welche minimale Schichtdicke $d$ muss diese Vergütungsschicht besitzen, um senkrecht einfallendes Licht der Vakuum-Wellenlänge $\lambda = 552\,\text{nm}$ durch destruktive Interferenz optimal zu entspiegeln?

**Antwortoptionen:**
- (A) $d = 276\,\text{nm}$
- (B) $d = 138\,\text{nm}$
- (C) $d = 552\,\text{nm}$
- (D) $d = 50\,\text{nm}$
- (E) $d = 100\,\text{nm}$

**Richtige Antwort:**
E

**Erklärung:**
1. **Phasensprünge:**
   Da $n_{\text{Luft}} < n_{\text{Schicht}} < n_{\text{Glas}}$ ($1{,}00 < 1{,}38 < 1{,}50$), erfolgt an **beiden** Grenzflächen (Luft $\to$ Schicht sowie Schicht $\to$ Glas) eine Reflexion am optisch dichteren Medium. Daher tritt an beiden Grenzflächen derselbe Phasensprung von $\pi$ (entsprechend $\lambda/2$) auf, der sich in der Phasendifferenz gegenseitig aufhebt.
2. **Interferenzbedingung für Auslöschung:**
   Damit sich die an der Vorder- und Rückseite reflektierten Strahlen durch destruktive Interferenz auslöschen, muss der rein geometrische Gangunterschied des zweifach durchlaufenen Schichtwegs ($2d$) einer halben Wellenlänge *im Medium* entsprechen:
   $$2 \cdot d = \frac{\lambda_{\text{Schicht}}}{2} = \frac{\lambda}{2 \cdot n_{\text{Schicht}}} \iff d = \frac{\lambda}{4 \cdot n_{\text{Schicht}}}$$
3. **Kopfrechnung:**
   $$d = \frac{552\,\text{nm}}{4 \cdot 1{,}38} = \frac{552\,\text{nm}}{5{,}52} = 100\,\text{nm}$$
Die optimale Schichtdicke beträgt exakt $100\,\text{nm}$ ($\lambda/4$-Schicht).



---

### Frage 19

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Welle-Teilchen-Dualismus

**Subkategorie:**
Welle-Teilchen-Dualismus

**Lernziel / Subskill:**
Photonenenergie nach Planck und Einstein ($E = hf = hc/\lambda$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Ein medizinischer Excimer-Laser zur refraktiven Hornhautkorrektur (LASIK) emittiert ultraviolette Laserpulse mit einer Wellenlänge von $\lambda = 200\,\text{nm} = 2{,}0 \cdot 10^{-7}\,\text{m}$.  
Wie groß ist näherungsweise die Energie $E$ eines einzelnen Photons dieser Laserstrahlung?  
($h \approx 6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s}$, $c \approx 3{,}0 \cdot 10^8\,\text{m/s}$)

**Antwortoptionen:**
- (A) $3{,}3 \cdot 10^{-19}\,\text{J}$
- (B) $9{,}9 \cdot 10^{-19}\,\text{J}$
- (C) $6{,}6 \cdot 10^{-19}\,\text{J}$
- (D) $1{,}98 \cdot 10^{-18}\,\text{J}$
- (E) $4{,}4 \cdot 10^{-20}\,\text{J}$

**Richtige Antwort:**
B

**Erklärung:**
Nach der Planck-Einstein-Beziehung berechnet sich die Energie eines Photons aus seiner Frequenz $f$ bzw. Wellenlänge $\lambda$:
$$E = h \cdot f = \frac{h \cdot c}{\lambda}$$
Einsetzen der Zahlenwerte:
$$E = \frac{6{,}6 \cdot 10^{-34}\,\text{J}\cdot\text{s} \cdot 3{,}0 \cdot 10^8\,\text{m/s}}{2{,}0 \cdot 10^{-7}\,\text{m}}$$
Zähler berechnen:
$$6{,}6 \cdot 3{,}0 \cdot 10^{-34+8} = 19{,}8 \cdot 10^{-26}\,\text{J}\cdot\text{m}$$
Division durch $2{,}0 \cdot 10^{-7}$:
$$E = \frac{19{,}8}{2{,}0} \cdot 10^{-26 - (-7)} = 9{,}9 \cdot 10^{-19}\,\text{J}$$
*Hinweis:* In Elektronenvolt entspricht dies rund $6{,}2\,\text{eV}$ ($9{,}9 \cdot 10^{-19} / 1{,}6 \cdot 10^{-19}$), was ausreicht, um Gewebebindungen der Hornhaut direkt photochemisch zu spalten (Photoablation).



---

### Frage 20

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Welle-Teilchen-Dualismus

**Subkategorie:**
Welle-Teilchen-Dualismus

**Lernziel / Subskill:**
Photoeffekt: Auswirkung von Intensität vs. Frequenz auf Photostrom und kinetische Energie

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Beim äußeren photoelektrischen Effekt fällt monochromatisches Licht auf eine Metalloberfläche im Vakuum. Die Photonenenergie liegt oberhalb der Austrittsarbeit ($h \cdot f > W_A$), sodass Elektronen emittiert werden.  
Wie verändern sich die **maximale kinetische Energie** der Photoelektronen ($E_{\text{kin,max}}$) und die **Anzahl** der pro Sekunde emittierten Elektronen (Photostrom $I_{\text{ph}}$), wenn bei konstanter Lichtfrequenz $f$ die **Intensität (Bestrahlungsstärke) der Lichtquelle verdoppelt** wird?

**Antwortoptionen:**
- (A) $E_{\text{kin,max}}$ verdoppelt sich; der Photostrom bleibt unverändert.
- (B) Sowohl $E_{\text{kin,max}}$ als auch der Photostrom verdoppeln sich.
- (C) $E_{\text{kin,max}}$ vervierfacht sich; der Photostrom verdoppelt sich.
- (D) $E_{\text{kin,max}}$ bleibt unverändert; der Photostrom verdoppelt sich.
- (E) $E_{\text{kin,max}}$ sinkt auf die Hälfte; der Photostrom vervierfacht sich.

**Richtige Antwort:**
D

**Erklärung:**
Nach Einsteins Lichtquantenhypothese wechselwirkt stets genau ein Photon mit genau einem Elektron:
1. **Kinetische Energie:** Nach der Einstein-Gleichung gilt:
   $$E_{\text{kin,max}} = h \cdot f - W_A$$
   Da Frequenz $f$ und Austrittsarbeit $W_A$ unverändert bleiben, bleibt die kinetische Energie jedes einzelnen herausgelösten Elektrons **völlig konstant**.
2. **Photostrom:** Eine Verdopplung der Intensität bedeutet die doppelte Anzahl an Photonen pro Zeiteinheit. Folglich werden doppelt so viele Elektronen pro Sekunde herausgeschlagen; die Stromstärke des Photostroms **verdoppelt sich**.  
*Klassische MedAT-Falle:* Zu glauben, dass mehr Lichtintensität die Elektronen schneller macht (Distraktor A und B). Die Geschwindigkeit/Energie hängt ausschließlich von der *Frequenz* ab.



---

### Frage 21

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Welle-Teilchen-Dualismus

**Subkategorie:**
Welle-Teilchen-Dualismus

**Lernziel / Subskill:**
Einsteinsche photoelektrische Gleichung und Gegenfeldmethode ($E_{\text{kin}} = hf - W_A$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
35 Sekunden

**Frage:**
Die Austrittsarbeit einer Fotokathode beträgt $W_A = 2{,}0\,\text{eV}$. Auf die Kathode trifft Licht mit einer Photonenenergie von $E_{\text{Phot}} = 3{,}5\,\text{eV}$.  
Welche maximale kinetische Energie $E_{\text{kin,max}}$ besitzen die emittierten Photoelektronen, und welche Gegenfeldspannung $U_0$ muss angelegt werden, um den Photostrom exakt zum Erliegen zu bringen?

**Antwortoptionen:**
- (A) $E_{\text{kin,max}} = 1{,}5\,\text{eV}$ und $U_0 = 1{,}5\,\text{V}$
- (B) $E_{\text{kin,max}} = 5{,}5\,\text{eV}$ und $U_0 = 5{,}5\,\text{V}$
- (C) $E_{\text{kin,max}} = 1{,}5\,\text{eV}$ und $U_0 = 3{,}0\,\text{V}$
- (D) $E_{\text{kin,max}} = 0{,}75\,\text{eV}$ und $U_0 = 0{,}75\,\text{V}$
- (E) $E_{\text{kin,max}} = 2{,}0\,\text{eV}$ und $U_0 = 2{,}0\,\text{V}$

**Richtige Antwort:**
A

**Erklärung:**
1. **Maximale kinetische Energie:**
   $$E_{\text{kin,max}} = E_{\text{Phot}} - W_A = 3{,}5\,\text{eV} - 2{,}0\,\text{eV} = 1{,}5\,\text{eV}$$
2. **Gegenspannungsmethode:**
   Ein elektrisches Gegenfeld verrichtet die Bremsarbeit $W_{\text{brems}} = e \cdot U_0$. Um selbst die energiereichsten Elektronen zu stoppen, muss gelten:
   $$e \cdot U_0 = E_{\text{kin,max}} = 1{,}5\,\text{eV} \implies U_0 = 1{,}5\,\text{V}$$
*Kopfrechen-Vorteil:* Durch die Einheit Elektronenvolt ($\text{eV}$) lässt sich der Betrag der Spannung in Volt direkt ohne Umrechnung über die Elementarladung ablesen ($1{,}5\,\text{eV} \iff 1{,}5\,\text{V}$).



---

### Frage 22

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Welle-Teilchen-Dualismus

**Subkategorie:**
Welle-Teilchen-Dualismus

**Lernziel / Subskill:**
De-Broglie-Wellenlänge und physikalische Auflösungsgrenze des Elektronenmikroskops

**Schwierigkeit:**
Hard

**Geschätzte Bearbeitungszeit:**
40 Sekunden

**Frage:**
Warum kann ein Elektronenmikroskop grundsätzlich eine deutlich höhere Auflösung als ein Lichtmikroskop erreichen?
**Antwortoptionen:**
- (A) Weil Elektronen als Elementarteilchen grundsätzlich keinerlei Beugung an Blenden oder Objekten zeigen.
- (B) Weil sich Elektronen im Vakuum mit mehrfacher Überlichtgeschwindigkeit bewegen.
- (C) Weil beschleunigte Elektronen nach de Broglie ($\lambda = \frac{h}{p}$) eine um Größenordnungen kleinere Materiewellenlänge besitzen als sichtbares Licht, wodurch die beugungsbedingte Abbesche Auflösungsgrenze drastisch absinkt.
- (D) Weil elektrostatische Elektronenlinsen aus Glas eine um den Faktor 1.000 höhere Brechkraft aufweisen als normale Lichtlinsen.
- (E) Weil die Absorption von Elektronenstrahlung im Vakuum im Gegensatz zum Licht einer linearen Gesetzmäßigkeit folgt.

**Richtige Antwort:**
C

**Erklärung:**
Nach dem Abbeschen Beugungslimit ist der minimal auflösbare Abstand zweier Punkte $d_{\text{min}}$ direkt proportional zur verwendeten Wellenlänge:
$$d_{\text{min}} \approx \frac{\lambda}{2 \cdot \text{NA}}$$
- Bei Lichtmikroskopen begrenzt das sichtbare Licht ($\lambda \approx 400 - 700\,\text{nm}$) die Auflösung auf ca. $200\,\text{nm}$.
- Nach der De-Broglie-Beziehung besitzen bewegte Teilchen mit Impuls $p = m \cdot v$ Welleneigenschaften mit der Wellenlänge:
  $$\lambda = \frac{h}{p}$$
- Durch eine Beschleunigungsspannung von z. B. $100\,\text{kV}$ erhalten Elektronen einen sehr großen Impuls, sodass ihre de-Broglie-Wellenlänge im Bereich von wenigen Pikometern ($\approx 0{,}0037\,\text{nm}$) liegt. Dies ermöglicht eine um Größenordnungen höhere Auflösung bis in atomare Dimensionen.



---

### Frage 23

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Absorption

**Subkategorie:**
Lambert-Beersches Gesetz & Photometrie

**Lernziel / Subskill:**
Logarithmischer Zusammenhang zwischen Transmission und Extinktion

**Schwierigkeit:**
Easy

**Geschätzte Bearbeitungszeit:**
20 Sekunden

**Frage:**
In einem Fotometer wird die Lichtschwächung einer gefärbten Enzymlösung gemessen. Die Transmission beträgt genau $T = 1\,\%$ (das bedeutet: die transmittierte Lichtintensität $I$ beträgt noch $1\,\%$ der eingestrahlten Anfangsintensität $I_0$).  
Welche Extinktion (optische Dichte $E$) zeigt das Messgerät an?

**Antwortoptionen:**
- (A) $E = 0{,}01$
- (B) $E = 0{,}1$
- (C) $E = 1{,}0$
- (D) $E = 0{,}5$
- (E) $E = 2{,}0$

**Richtige Antwort:**
E

**Erklärung:**
Die Extinktion $E$ (auch optische Dichte $OD$) ist definiert als der negative dekadische Logarithmus der Transmission $T = \frac{I}{I_0}$:
$$E = -\log_{10}(T) = -\log_{10}\left(\frac{I}{I_0}\right) = \log_{10}\left(\frac{I_0}{I}\right)$$
Mit $T = 1\,\% = 0{,}01 = 10^{-2}$:
$$E = -\log_{10}(10^{-2}) = -(-2) = 2{,}0$$
*Wichtige Festwerte für den MedAT:*
- $T = 100\,\% = 1{,}0 \implies E = 0$
- $T = 10\,\% = 0{,}1 \implies E = 1$
- $T = 1\,\% = 0{,}01 \implies E = 2$
- $T = 0{,}1\,\% = 0{,}001 \implies E = 3$



---

### Frage 24

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Absorption

**Subkategorie:**
Lambert-Beersches Gesetz & Photometrie

**Lernziel / Subskill:**
Photometrische Konzentrationsbestimmung mit dem Lambert-Beerschen Gesetz ($E = \varepsilon \cdot c \cdot d$)

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
35 Sekunden

**Frage:**
Eine Blutprobe wird photometrisch auf Hämoglobin untersucht. Die Messung erfolgt in einer Standardküvette der Schichtdicke $d = 1\,\text{cm}$. Bei der gewählten Messwellenlänge beträgt der molare Extinktionskoeffizient $\varepsilon = 500\,\text{L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$. Das Photometer registriert eine Extinktion von $E = 0{,}40$.  
Wie hoch ist die molare Konzentration $c$ des Hämoglobins in dieser Messlösung?

**Antwortoptionen:**
- (A) $0{,}2\,\text{mmol/L}$
- (B) $0{,}8\,\text{mmol/L}$
- (C) $1{,}25\,\text{mmol/L}$
- (D) $2{,}0\,\text{mmol/L}$
- (E) $0{,}08\,\text{mmol/L}$

**Richtige Antwort:**
B

**Erklärung:**
Nach dem Lambert-Beerschen Gesetz gilt:
$$E = \varepsilon \cdot c \cdot d \iff c = \frac{E}{\varepsilon \cdot d}$$
Einsetzen der Werte:
$$c = \frac{0{,}40}{500\,\text{L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1} \cdot 1\,\text{cm}} = \frac{0{,}40}{500}\,\frac{\text{mol}}{\text{L}}$$
Kopfrechen-Trick:
$$c = \frac{0{,}40 \cdot 2}{500 \cdot 2} = \frac{0{,}80}{1000} = 0{,}8 \cdot 10^{-3}\,\frac{\text{mol}}{\text{L}} = 0{,}8\,\text{mmol/L}$$
*MedAT-Falle:* Zehnerpotenzfehler bei der Division durch 500 führen zu $0{,}08\,\text{mmol/L}$ (Distraktor E) oder Inversion der Formel zu $1{,}25\,\text{mmol/L}$ (Distraktor C).



---

### Frage 25

**Kategorie:**
Optik

**Official VMC-Stichwort:**
Absorption

**Subkategorie:**
Lambert-Beersches Gesetz & Photometrie

**Lernziel / Subskill:**
Einfluss der Schichtdicke auf Extinktion und Transmission

**Schwierigkeit:**
Medium

**Geschätzte Bearbeitungszeit:**
30 Sekunden

**Frage:**
Eine Medikamentenlösung in einer Küvette mit der Schichtdicke $d_1 = 1\,\text{cm}$ schwächt eingestrahltes Licht so ab, dass die gemessene Extinktion $E_1 = 0{,}30$ beträgt und die Transmission $T_1 = 50\,\%$ ist (d. h. $I_1 = \frac{1}{2} I_0$).  
Nun wird dieselbe Lösung in eine doppelt so breite Küvette der Schichtdicke $d_2 = 2\,\text{cm}$ gefüllt.  
Welche Extinktion $E_2$ und welche verbleibende Transmission $T_2$ werden nun gemessen?

**Antwortoptionen:**
- (A) $E_2 = 0{,}30$ und $T_2 = 25\,\%$
- (B) $E_2 = 0{,}60$ und $T_2 = 0\,\%$
- (C) $E_2 = 0{,}15$ und $T_2 = 75\,\%$
- (D) $E_2 = 0{,}60$ und $T_2 = 25\,\%$
- (E) $E_2 = 1{,}20$ und $T_2 = 12{,}5\,\%$

**Richtige Antwort:**
D

**Erklärung:**
1. **Extinktion:** Da die Extinktion linear von der Schichtdicke abhängt ($E = \varepsilon \cdot c \cdot d$), verdoppelt sich die Extinktion bei Verdopplung von $d$:
   $$E_2 = 2 \cdot E_1 = 2 \cdot 0{,}30 = 0{,}60$$
2. **Transmission:** Die Transmission nimmt exponentiell ab ($I = I_0 \cdot 10^{-E}$):
   - Der erste Zentimeter absorbiert die Hälfte des Lichts: $50\,\%$ Transmission verbleiben ($I_1 = 0{,}5 \cdot I_0$).
   - Der zweite Zentimeter absorbiert wiederum die Hälfte des *eintretenden* Lichts:
     $$T_2 = T_1 \cdot T_1 = 50\,\% \cdot 50\,\% = 0{,}5 \cdot 0{,}5 = 0{,}25 = 25\,\%$$
*MedAT-Falle:* Distraktor B unterliegt dem linearen Trugschluss: Wenn $1\,\text{cm}$ Schichtdicke $50\,\%$ absorbiert, absorbiere $2\,\text{cm}$ Schichtdicke $100\,\%$ (Absorption ist jedoch niemals linear, sondern exponentiell!).



---
