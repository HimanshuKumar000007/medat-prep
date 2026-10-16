# Physik Kapitel 3: Schwingungen und Wellen — Set 2 (Fragen 26 bis 50)

---

### Frage 26
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Kleinwinkelnäherung beim mathematischen Fadenpendel ($\sin\varphi \approx \varphi$)  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Bei der exakten physikalischen Herleitung der Schwingungsdauer eines mathematischen Fadenpendels ($T = 2\pi\sqrt{l/g}$) wird vorausgesetzt, dass die Bewegung näherungsweise harmonisch verläuft.  
Bis zu welcher maximalen Winkelauslenkung (Amplitude) ist die sogenannte Kleinwinkelnäherung ($\sin\varphi \approx \varphi$ im Bogenmaß) in der Praxis mit einem relativen Fehler von unter einem Prozent anwendbar?

- (A) Bis zu beliebigen Winkeln bis $90^\circ$.
- (B) Bis zu kleinen Winkeln von maximal ca. $5^\circ$ bis $10^\circ$ (ca. $0{,}1$ bis $0{,}17\,\text{rad}$).
- (C) Nur bei exakt $\varphi = 0^\circ$ (in der Ruhelage).
- (D) Nur für Winkel über $45^\circ$, da dort die Schwerkraft überwiegt.
- (E) Bis zu $180^\circ$, sofern die Masse punktförmig ist.

**Richtige Antwort:** B

**Erklärung:**
Die exakte Bewegungsgleichung des Fadenpendels lautet $\ddot{\varphi} + \frac{g}{l} \sin\varphi = 0$. Eine echte harmonische Schwingung liegt nur vor, wenn die rücktreibende Kraft linear von der Auslenkung abhängt ($F \propto -\varphi$).  
Dies ist durch die Taylor-Reihe $\sin\varphi = \varphi - \frac{\varphi^3}{6} + \dots$ für kleine Winkel bis etwa $5^\circ$ bis $10^\circ$ hervorragend erfüllt (der Fehler liegt bei $10^\circ \approx 0{,}174\,\text{rad}$ bei nur etwa $0{,}5\,\%$). Bei größeren Amplituden wird die Schwingung anharmonisch und die Schwingungsdauer nimmt messbar zu.

---

### Frage 27
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Federpendel bei kombinierter Feder- und Massenänderung  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein Massekörper schwingt an einer einzelnen Schraubenfeder der Federkonstante $D$ mit einer Periodendauer von $T_1 = 1{,}0\,\text{s}$.  
Nun wird die Feder durch zwei identische parallel geschaltete Federn derselben Härte ersetzt (Gesamtfederkonstante $D' = 2 \cdot D$), während gleichzeitig die angehängte Masse verdoppelt wird ($m' = 2 \cdot m$).  
Wie groß ist die neue Periodendauer $T'$ dieses Feder-Masse-Systems?

- (A) $0{,}25\,\text{s}$
- (B) $0{,}50\,\text{s}$
- (C) $2{,}0\,\text{s}$
- (D) $1{,}0\,\text{s}$ (die Schwingungsdauer bleibt exakt unverändert)
- (E) $4{,}0\,\text{s}$

**Richtige Antwort:** D

**Erklärung:**
Für die Schwingungsdauer des Federpendels gilt:
$$T = 2\pi \sqrt{\frac{m}{D}}$$
Setzt man die neuen Werte ein ($m' = 2m$ und $D' = 2D$):
$$T' = 2\pi \sqrt{\frac{2m}{2D}} = 2\pi \sqrt{\frac{m}{D}} = T_1 = 1{,}0\,\text{s}$$
Da sich der Faktor 2 im Zähler und Nenner unter der Wurzel exakt herauskürzt, bleibt die Periodendauer vollständig unverändert.

---

### Frage 28
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Kenngrößen aus der harmonischen Schwingungsgleichung ablesen ($y(t) = y_0 \sin(\omega t)$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Die zeitabhängige Auslenkung eines mechanischen Oszillators wird durch die Funktion $y(t) = 4{,}0\,\text{mm} \cdot \sin(100\pi \cdot t)$ beschrieben ($t$ in Sekunden).  
Welche Werte besitzen die Amplitude $y_0$, die Kreisfrequenz $\omega$ und die Frequenz $f$ dieser Schwingung?

- (A) $y_0 = 4{,}0\,\text{mm}$; $\omega = 100\pi\,\text{rad/s}$; $f = 50\,\text{Hz}$
- (B) $y_0 = 8{,}0\,\text{mm}$; $\omega = 50\pi\,\text{rad/s}$; $f = 25\,\text{Hz}$
- (C) $y_0 = 4{,}0\,\text{mm}$; $\omega = 100\,\text{rad/s}$; $f = 100\,\text{Hz}$
- (D) $y_0 = 2{,}0\,\text{mm}$; $\omega = 200\pi\,\text{rad/s}$; $f = 100\,\text{Hz}$
- (E) $y_0 = 4{,}0\,\text{mm}$; $\omega = 50\pi\,\text{rad/s}$; $f = 100\pi\,\text{Hz}$

**Richtige Antwort:** A

**Erklärung:**
Der allgemeine Ansatz für eine harmonische Schwingung lautet:
$$y(t) = y_0 \cdot \sin(\omega t)$$
Durch Koeffizientenvergleich mit $y(t) = 4{,}0\,\text{mm} \cdot \sin(100\pi \cdot t)$ erhält man:
1. **Amplitude:** $y_0 = 4{,}0\,\text{mm}$
2. **Kreisfrequenz:** $\omega = 100\pi\,\text{rad/s} \approx 314\,\text{rad/s}$
3. **Frequenz:** Aus $\omega = 2\pi f$ folgt:
   $$f = \frac{\omega}{2\pi} = \frac{100\pi\,\text{s}^{-1}}{2\pi} = 50\,\text{Hz}$$

---

### Frage 29
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Quadratische Amplitudenabhängigkeit der Schwingungsgesamtenergie ($E_{\text{ges}} \propto y_0^2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein harmonischer Schwinger schwingt mit einer Anfangsamplitude von $y_0 = 2{,}0\,\text{cm}$ und besitzt dabei eine mechanische Gesamtenergie von $E_1 = 0{,}50\,\text{J}$. Nun wird die Schwingung durch äußere Energiezufuhr so verstärkt, dass sich ihre Amplitude auf $y_0' = 6{,}0\,\text{cm}$ verdreifacht. Federkonstante und Masse bleiben unverändert.  
Wie groß ist die neue mechanische Gesamtenergie $E_2$ des Schwingers?

- (A) $1{,}0\,\text{J}$
- (B) $1{,}5\,\text{J}$
- (C) $4{,}5\,\text{J}$
- (D) $9{,}0\,\text{J}$
- (E) $18\,\text{J}$

**Richtige Antwort:** C

**Erklärung:**
Die Gesamtenergie einer harmonischen Schwingung ist proportional zum Quadrat der Schwingungsamplitude:
$$E_{\text{ges}} = \frac{1}{2} D y_0^2 \implies E_{\text{ges}} \propto y_0^2$$
Wird die Amplitude verdreifacht ($y_0' = 3 \cdot y_0$), so vergrößert sich die Gesamtenergie um das Quadrat des Faktors ($3^2 = 9$):
$$E_2 = 3^2 \cdot E_1 = 9 \cdot 0{,}50\,\text{J} = 4{,}5\,\text{J}$$
*(Distraktor B verfällt dem linearen Irrtum $3 \cdot 0{,}50 = 1{,}5\,\text{J}$).*

---

### Frage 30
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Gegenphasigkeit von Beschleunigung und Elongation ($a(t) = -\omega^2 y(t)$)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Für eine ungedämpfte harmonische Schwingung lautet die Auslenkung $y(t) = y_0 \cdot \sin(\omega t)$.  
Welche mathematische Beziehung besteht zwischen der Schwingungsbeschleunigung $a(t)$ und der Auslenkung $y(t)$, und welche Phasenverschiebung $\Delta \varphi_{a,y}$ liegt zwischen diesen beiden Größen vor?

- (A) $a(t) = +\omega \cdot y(t)$; Phasenverschiebung $\Delta \varphi = 0$
- (B) $a(t) = -\omega \cdot y(t)$; Phasenverschiebung $\Delta \varphi = \frac{\pi}{2}$
- (C) $a(t) = +\omega^2 \cdot y(t)$; Phasenverschiebung $\Delta \varphi = \frac{\pi}{4}$
- (D) $a(t) = -\frac{1}{\omega} \cdot y(t)$; Phasenverschiebung $\Delta \varphi = 2\pi$
- (E) $a(t) = -\omega^2 \cdot y(t)$; Phasenverschiebung $\Delta \varphi = \pi$ ($180^\circ$, Gegenphasigkeit)

**Richtige Antwort:** E

**Erklärung:**
Die Beschleunigung ist die zweite zeitliche Ableitung der Auslenkung:
$$v(t) = \dot{y}(t) = \omega \cdot y_0 \cdot \cos(\omega t)$$
$$a(t) = \ddot{y}(t) = -\omega^2 \cdot y_0 \cdot \sin(\omega t)$$
Da $y(t) = y_0 \cdot \sin(\omega t)$ ist, folgt unmittelbar:
$$a(t) = -\omega^2 \cdot y(t)$$
Wegen des negativen Vorzeichens ist die Beschleunigung der Auslenkung stets exakt entgegengerichtet: Ist die Auslenkung positiv nach oben gerichtet, beschleunigt das System maximal nach unten. Dies entspricht einer Phasenverschiebung von genau $\Delta \varphi = \pi$ ($180^\circ$, Gegenphasigkeit bzw. eine halbe Periode $T/2$).

---

### Frage 31
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Charakteristisches Verhalten des Schwingfalls  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Bei welcher der folgenden physikalischen Dämpfungsbedingungen führt ein mechanisches System nach einer einmaligen Auslenkung **mehrere vollständige Schwingungszyklen mit periodischen Nulldurchgängen** bei kontinuierlich abnehmender Amplitude aus?

- (A) Nur im Kriechfall (überkritische Dämpfung)
- (B) Im Schwingfall (unterkritische Dämpfung)
- (C) Im aperiodischen Grenzfall
- (D) Ausschließlich im ungedämpften Resonanzfall
- (E) In keinem realen System, da jede Reibung periodische Bewegungen sofort unterbindet

**Richtige Antwort:** B

**Erklärung:**
- **Schwingfall ($\delta < \omega_0$):** Die Dämpfung ist schwach genug, sodass das System periodisch um die Ruhelage oszilliert. Die Amplitude klingt dabei exponentiell ab ($e^{-\delta t}$), während das System wiederholt die Gleichgewichtslage durchquert.
- Im **aperiodischen Grenzfall** und im **Kriechfall** findet dagegen kein einziger Nulldurchgang mehr statt (kein Überschwingen).

---

### Frage 32
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Einfluss der Dämpfung auf die Resonanzkurve  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein schwingungsfähiges System wird durch eine periodische äußere Kraft mit variabler Erregerfrequenz $f_{\text{err}}$ zu erzwungenen Schwingungen angeregt.  
Wie verändern sich die Resonanzkurve (Amplitude in Abhängigkeit von $f_{\text{err}}$) und die Resonanzschärfe des Systems, wenn die mechanische Reibungsdämpfung gezielt **erhöht** wird?

- (A) Die Resonanzamplitude wächst über alle Grenzen an, und die Kurve wird extrem schmal.
- (B) Die Resonanzfrequenz verdoppelt sich, während die Kurvenform völlig unverändert bleibt.
- (C) Die Resonanzkurve wird steiler und schmaler.
- (D) Die maximale Resonanzamplitude sinkt ab, und die Resonanzkurve wird breiter und flacher (die Resonanzschärfe nimmt ab).
- (E) Es ändert sich lediglich die Phasenverschiebung; die Amplitudenkurve ist von der Dämpfung unabhängig.

**Richtige Antwort:** D

**Erklärung:**
Mit zunehmender Dämpfung (größere Energiedissipation pro Periode):
1. Sinkt die maximale Schwingungsamplitude im Resonanzfall deutlich ab.
2. Verbreitert sich die Resonanzkurve (die Halbwertsbreite $\Delta f$ nimmt zu).
3. Die Schärfe der Resonanz (Gütefaktor $Q = \frac{f_0}{\Delta f}$) nimmt ab.

---

### Frage 33
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Geometrische Gestalt von Wellenfronten bei punktförmiger Quelle  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein kleiner punktförmiger Ultraschallstrahler emittiert kontinuierlich Kugelwellen in ein allseits ausgedehntes, homogenes und isotropes Weichgewebephantom.  
Welche dreidimensionale geometrische Gestalt besitzen die Wellenfronten (Flächen gleicher Schwingungsphase) dieser ungestörten Welle im Raum?

- (A) Konzentrische Kugelflächen um das Quellzentrum
- (B) Parallele ebene Flächen
- (C) Hyperbolische Rotationsflächen
- (D) Koaxiale Zylindermäntel
- (E) Parabolische Schalen

**Richtige Antwort:** A

**Erklärung:**
Da das Medium isotrop ist (die Schallgeschwindigkeit $c$ ist in alle Raumrichtungen identisch), legt die Wellenenergie in der Zeit $t$ in alle Richtungen exakt dieselbe Strecke $r = c \cdot t$ zurück. Die Phasenflächen gleicher Auslenkung um eine punktförmige Quelle bilden daher im dreidimensionalen Raum **konzentrische Kugelschalen**.

---

### Frage 34
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Physikalische Ursache der Schallbeugung im Alltag ($b \approx \lambda$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Im Alltag kann man die Stimme einer sprechenden Person hören, die hinter einer massiven Gebäudeecke steht, während man die Person optisch nicht sehen kann.  
Welcher physikalische Unterschied zwischen Schall- und Lichtwellen erklärt dieses Phänomen?

- (A) Schallwellen sind Transversalwellen und können Mauern verlustfrei durchdringen.
- (B) Lichtwellen besitzen eine viel zu niedrige Frequenz, um Beugungseffekte zu zeigen.
- (C) Hörbare Schallwellen besitzen Wellenlängen im Dezimeter- bis Meterbereich ($b \approx \lambda$) und werden daher stark um makroskopische Hinderniskanten gebeugt, während sichtbares Licht mit Nanometer-Wellenlängen praktisch geradlinig verläuft.
- (D) Die Luft absorbiert Lichtquanten an Gebäudeecken vollständig, während Schallmoleküle abgelenkt werden.
- (E) Schallwellen werden durch die Feuchtigkeit der Außenluft linear polarisiert und um die Ecke gespiegelt.

**Richtige Antwort:** C

**Erklärung:**
Eine ausgeprägte Beugung nach dem Huygensschen Prinzip tritt nur dann auf, wenn die Abmessungen des Hindernisses bzw. der Kante in der Größenordnung der Wellenlänge liegen ($b \approx \lambda$).  
- Schallwellen der menschlichen Sprache ($f \approx 100 - 3\,000\,\text{Hz}$) haben Wellenlängen von $\lambda = \frac{340\,\text{m/s}}{f} \approx 0{,}1\,\text{m}$ bis $3{,}4\,\text{m}$. Sie werden an Mauern, Türen und Ecken massiv gebeugt.
- Sichtbares Licht besitzt Wellenlängen von nur $\lambda \approx 400 - 750\,\text{nm}$ ($10^{-7}\,\text{m}$). An makroskopischen Gebäudekanten ist die Beugung verschwindend klein; es entsteht scharfer geometrischer Schattenwurf.

---

### Frage 35
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Frequenzinvarianz und Wellenlängenverkürzung bei Verlangsamung der Welle  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Eine kontinuierliche Welle breitet sich zunächst in einem Medium 1 mit der Phasengeschwindigkeit $c_1 = 300\,\text{m/s}$ und der Wellenlänge $\lambda_1 = 1{,}5\,\text{m}$ aus. Beim reflexionsfreien Übergang in ein Medium 2 sinkt die Ausbreitungsgeschwindigkeit der Welle auf $c_2 = 200\,\text{m/s}$ ab.  
Welche Frequenz $f$ und welche neue Wellenlänge $\lambda_2$ besitzt die Welle in Medium 2?

- (A) $f = 133\,\text{Hz}$; $\lambda_2 = 1{,}5\,\text{m}$
- (B) $f = 300\,\text{Hz}$; $\lambda_2 = 0{,}67\,\text{m}$
- (C) $f = 100\,\text{Hz}$; $\lambda_2 = 2{,}0\,\text{m}$
- (D) $f = 200\,\text{Hz}$; $\lambda_2 = 1{,}5\,\text{m}$
- (E) $f = 200\,\text{Hz}$; $\lambda_2 = 1{,}0\,\text{m}$

**Richtige Antwort:** E

**Erklärung:**
1. **Bestimmung der Frequenz in Medium 1:**
   $$c_1 = \lambda_1 \cdot f \implies f = \frac{c_1}{\lambda_1} = \frac{300\,\text{m/s}}{1{,}5\,\text{m}} = 200\,\text{Hz}$$
2. **Frequenzinvarianz:** Beim Übergang zwischen zwei Medien bleibt die Schwingungsfrequenz $f$ stets streng erhalten, da jedes Teilchen an der Grenzfläche die Schwingung mit der Frequenz des anregenden Mediums übernimmt ($f = 200\,\text{Hz}$).
3. **Neue Wellenlänge in Medium 2:**
   $$\lambda_2 = \frac{c_2}{f} = \frac{200\,\text{m/s}}{200\,\text{s}^{-1}} = 1{,}0\,\text{m}$$

---

### Frage 36
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Vergleich der Schallgeschwindigkeiten in Gasen, Flüssigkeiten und Festkörpern  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

In welcher der folgenden Reihenfolgen sind die Medien nach **zunehmender Schallausbreitungsgeschwindigkeit** (von langsam nach schnell) physikalisch korrekt geordnet?

- (A) Kompakter Knochen < Weichgewebe/Wasser < Luft
- (B) Luft ($c \approx 340\,\text{m/s}$) < Weichgewebe/Wasser ($c \approx 1\,500\,\text{m/s}$) < kompakter Knochen ($c \approx 3\,500\,\text{m/s}$)
- (C) Weichgewebe < Luft < kompakter Knochen
- (D) In allen Medien breitet sich Schall stets mit exakt derselben Geschwindigkeit aus.
- (E) Kompakter Knochen < Luft < Weichgewebe

**Richtige Antwort:** B

**Erklärung:**
Die Schallgeschwindigkeit hängt vom Elastizitätsmodul bzw. Kompressionsmodul $K$ und der Dichte $\rho$ ab ($c = \sqrt{K/\rho}$). Da die zwischenmolekularen Bindungskräfte in Festkörpern und Flüssigkeiten ungleich stärker sind als in Gasen, ist der Kompressionsmodul dort drastisch höher.  
Daraus ergibt sich die fundamentale Gesetzmäßigkeit:
$$c_{\text{Gase}} < c_{\text{Flüssigkeiten/Weichgewebe}} < c_{\text{Festkörper}}$$
Typische Werte: Luft ca. $340\,\text{m/s}$, Wasser/Muskelgewebe ca. $1\,500 - 1\,540\,\text{m/s}$, Knochen ca. $3\,000 - 4\,000\,\text{m/s}$, Stahl ca. $5\,000\,\text{m/s}$.

---

### Frage 37
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Periodendauer und Wellenlänge des Kammertons in Luft ($c = \lambda \cdot f$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 30 Sekunden

Der musikalische Kammerton $a'$ besitzt eine Frequenz von $f = 440\,\text{Hz}$. Er breitet sich in homogener Raumluft bei $20\,^\circ\text{C}$ mit einer Schallgeschwindigkeit von $c = 340\,\text{m/s}$ aus.  
Wie groß sind die Periodendauer $T$ einer einzelnen Schwingung und die räumliche Wellenlänge $\lambda$ dieses Tons näherungsweise?

- (A) $T = 4{,}4\,\text{ms}$; $\lambda = 1{,}54\,\text{m}$
- (B) $T = 1{,}0\,\text{ms}$; $\lambda = 0{,}34\,\text{m}$
- (C) $T = 10\,\text{ms}$; $\lambda = 3{,}4\,\text{m}$
- (D) $T \approx 2{,}3\,\text{ms}$; $\lambda \approx 0{,}77\,\text{m}$
- (E) $T \approx 0{,}23\,\text{ms}$; $\lambda \approx 7{,}7\,\text{m}$

**Richtige Antwort:** D

**Erklärung:**
1. **Periodendauer:**
   $$T = \frac{1}{f} = \frac{1}{440\,\text{Hz}} \approx 0{,}00227\,\text{s} = 2{,}27\,\text{ms} \approx 2{,}3\,\text{ms}$$
2. **Wellenlänge:**
   $$\lambda = \frac{c}{f} = \frac{340\,\text{m/s}}{440\,\text{s}^{-1}} = \frac{34}{44}\,\text{m} = \frac{17}{22}\,\text{m} \approx 0{,}77\,\text{m} = 77\,\text{cm}$$

---

### Frage 38
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Medizinischer Frequenzkompromiss in der Sonographie (Auflösung vs. Eindringtiefe)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In der medizinischen Sonographie werden für oberflächennahe Strukturen (z. B. Schilddrüse, Carotiden) hohe Ultraschallfrequenzen von $f \approx 10\,\text{MHz}$ gewählt, während für tiefe Bauchorgane (z. B. Nieren, Leber) Frequenzen von $f \approx 2{,}5 - 3{,}5\,\text{MHz}$ verwendet werden.  
Welcher physikalische Zusammenhang begründet diese klinische Frequenzauswahl?

- (A) Höhere Frequenzen besitzen eine kürzere Wellenlänge und ermöglichen daher eine bessere räumliche Detailauflösung, erfahren jedoch im biologischen Gewebe eine deutlich stärkere Dämpfung (Absorption), was die Eindringtiefe limitiert.
- (B) Höhere Frequenzen breiten sich im menschlichen Gewebe viermal schneller aus als niedrige Frequenzen.
- (C) Niedrige Frequenzen führen im oberflächennahen Gewebe zu gefährlicher Kavitation und Gewebeerwärmung.
- (D) Nur hohe Frequenzen können an Gewebegrenzflächen reflektiert werden; tiefe Frequenzen werden vollständig transmittiert.
- (E) Niedrige Frequenzen sind polarisierbar, während hohe Frequenzen reine Longitudinalwellen darstellen.

**Richtige Antwort:** A

**Erklärung:**
1. **Ortsauflösung:** Nach dem Rayleigh-Kriterium der Wellenlehre können zwei anatomische Strukturen nur dann getrennt aufgelöst werden, wenn ihr Abstand in der Größenordnung der Wellenlänge $\lambda$ oder darüber liegt. Höhere Frequenzen ($f \uparrow$) bedeuten kürzere Wellenlängen ($\lambda = c/f \downarrow$) und damit eine überlegene axiale Bildauflösung.
2. **Absorption/Eindringtiefe:** Die Schalldämpfung in viskoelastischem Gewebe wächst näherungsweise proportional zur Frequenz ($\alpha \propto f$). Sehr hochfrequenter Ultraschall wird bereits in den ersten Zentimetern absorbiert. Für tiefe Organe muss daher eine niedrigere Frequenz gewählt werden.

---

### Frage 39
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Exakte Bedingung für konstruktive Interferenz zweier kohärenter Wellen  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Zwei kohärente Wellen gleicher Wellenlänge $\lambda$ und Amplitude $y_0$ überlagern sich im Raum.  
Unter welcher Bedingung für den Gangunterschied $\Delta s$ (mit $k \in \mathbb{N}_0$) kommt es zu einer **vollständigen konstruktiven Interferenz** mit maximaler Verstärkung der Amplitude auf $2 \cdot y_0$?

- (A) $\Delta s = \left(k + \frac{1}{2}\right) \cdot \lambda$
- (B) $\Delta s = \frac{\lambda}{4} \cdot k$
- (C) $\Delta s = k \cdot \lambda$ (der Gangunterschied ist ein ganzzahliges Vielfaches der Wellenlänge)
- (D) $\Delta s = \left(k + \frac{1}{4}\right) \cdot \lambda$
- (E) Nur wenn $\Delta s = 0$ ist; für jedes $k > 0$ tritt Auslöschung auf.

**Richtige Antwort:** C

**Erklärung:**
- **Konstruktive Interferenz (maximale Verstärkung):** Die beiden Wellenzüge treffen phasenrichtig aufeinander (Wellenberg auf Wellenberg). Dies erfordert einen Phasenunterschied von $\Delta \varphi = 2\pi \cdot k$ bzw. einen Gangunterschied von:
  $$\Delta s = k \cdot \lambda \quad (k = 0, 1, 2, 3, \dots)$$
- **Destruktive Interferenz (Auslöschung):** Wellenberg trifft auf Wellental bei einer Phasenverschiebung von $\pi, 3\pi, \dots$, was einem Gangunterschied von $\Delta s = (k + \frac{1}{2})\lambda$ entspricht.

---

### Frage 40
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Stehende Welle bei der 1. Oberschwingung einer beidseitig festen Saite  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Eine Saite der Länge $L = 1{,}20\,\text{m}$ ist an beiden Enden fest eingespannt. Sie wird zu ihrer **1. Oberschwingung** (2. Harmonische, $n = 2$) angeregt.  
Wie viele Schwingungsknoten (einschließlich der beiden festen Einspannpunkte) und wie viele Schwingungsbäuche weist diese stehende Welle auf, und wie groß ist ihre Wellenlänge $\lambda_2$?

- (A) 2 Knoten, 1 Bauch, $\lambda_2 = 2{,}40\,\text{m}$
- (B) 2 Knoten, 2 Bäuche, $\lambda_2 = 1{,}20\,\text{m}$
- (C) 4 Knoten, 3 Bäuche, $\lambda_2 = 0{,}60\,\text{m}$
- (D) 3 Knoten, 1 Bauch, $\lambda_2 = 1{,}20\,\text{m}$
- (E) 3 Knoten, 2 Bäuche, $\lambda_2 = 1{,}20\,\text{m}$

**Richtige Antwort:** E

**Erklärung:**
1. **Resonanzbedingung für beidseitig feste Saite:**
   $$L = n \cdot \frac{\lambda_n}{2}$$
   Für die 1. Oberschwingung ($n = 2$):
   $$L = 2 \cdot \frac{\lambda_2}{2} = \lambda_2 \implies \lambda_2 = L = 1{,}20\,\text{m}$$
2. **Anzahl der Knoten und Bäuche:**
   - Knoten befinden sich an den beiden festen Enden ($x = 0$ und $x = 1{,}20\,\text{m}$) sowie genau in der Saitenmitte ($x = 0{,}60\,\text{m}$), also insgesamt **3 Schwingungsknoten**.
   - Dazwischen schwingen genau **2 Schwingungsbäuche** (bei $x = 0{,}30\,\text{m}$ und $x = 0{,}90\,\text{m}$).

---

### Frage 41
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Beziehung zwischen Wellenfronten und Wellenstrahlen  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Wie stehen die geometrischen **Wellenstrahlen** (die die lokale Ausbreitungsrichtung der Wellenenergie beschreiben) in einem homogenen und isotropen Ausbreitungsmedium zu den **Wellenfronten** (Flächen gleicher Schwingungsphase)?

- (A) Sie verlaufen stets streng parallel zu den Wellenfronten.
- (B) Sie stehen an jedem Punkt senkrecht (orthogonal, unter einem Winkel von $90^\circ$) auf den Wellenfronten.
- (C) Sie schneiden die Wellenfronten stets unter einem beliebigen, frequenzabhängigen spitzen Winkel.
- (D) Wellenstrahlen und Wellenfronten existieren nur bei transversalen Seilwellen, nicht im dreidimensionalen Raum.
- (E) Sie sind stets exakt entgegengesetzt zur Ausbreitungsrichtung orientiert.

**Richtige Antwort:** B

**Erklärung:**
In einem isotropen Medium (in dem die Phasengeschwindigkeit in alle Raumrichtungen identisch ist) breitet sich die Welle senkrecht zu den Flächen gleicher Phase aus. Die Wellenstrahlen, welche die Ausbreitungsrichtung der Wellenenergie angeben, stehen daher per physikalischer Definition stets **senkrecht auf den Wellenfronten**.
---

### Frage 42
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Akustische Resonanz in einer beidseitig offenen Röhre ($L = \lambda/2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 30 Sekunden

Ein beidseitig offenes zylindrisches Resonanzrohr besitzt eine Länge von $L = 0{,}85\,\text{m}$. Bei akustischer Resonanz bilden sich an beiden offenen Rohrenden Schwingungsbäuche der Schallschnelle aus. Für die Grundschwingung entspricht die Rohrlänge daher einer halben Wellenlänge ($L = \frac{\lambda_1}{2}$).  
Welche Grundfrequenz $f_1$ besitzt dieser akustische Resonator bei einer Schallgeschwindigkeit von $c = 340\,\text{m/s}$?

- (A) $100\,\text{Hz}$
- (B) $150\,\text{Hz}$
- (C) $400\,\text{Hz}$
- (D) $200\,\text{Hz}$
- (E) $800\,\text{Hz}$

**Richtige Antwort:** D

**Erklärung:**
1. **Wellenlänge der Grundschwingung:**
   $$L = \frac{\lambda_1}{2} \implies \lambda_1 = 2 \cdot L = 2 \cdot 0{,}85\,\text{m} = 1{,}70\,\text{m}$$
2. **Grundfrequenz:**
   $$f_1 = \frac{c}{\lambda_1} = \frac{340\,\text{m/s}}{1{,}70\,\text{m}} = 200\,\text{Hz}$$

---

### Frage 43
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Polarisation  
**Lernziel / Subskill:** Gekreuzte Polarisationsfilter und vollständige Auslöschung  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Unpolarisiertes Licht trifft nacheinander auf zwei ideale Polarisationsfilter. Das erste Filter (Polarisator) lässt linear polarisiertes Licht mit einer vertikalen Durchlassachse ($0^\circ$) durch. Das zweite Filter (Analysator) ist so orientiert, dass seine optische Achse exakt horizontal ausgerichtet ist (Winkel $\alpha = 90^\circ$ gegenüber dem ersten Filter).  
Welcher Anteil der nach dem ersten Filter vorhandenen Lichtintensität verlässt den Analysator nach dem Gesetz von Malus?

- (A) $0\,\%$ (vollständige Auslöschung / Dunkelheit)
- (B) $25\,\%$
- (C) $50\,\%$
- (D) $75\,\%$
- (E) $100\,\%$

**Richtige Antwort:** A

**Erklärung:**
Nach dem Gesetz von Malus gilt:
$$I = I_0 \cdot \cos^2(\alpha)$$
Da die beiden Filterachsen senkrecht aufeinander stehen ($\alpha = 90^\circ$), ist $\cos(90^\circ) = 0$:
$$I = I_0 \cdot \cos^2(90^\circ) = I_0 \cdot 0 = 0$$
Gekreuzte Polarisationsfilter sperren das Licht vollständig ab.

---

### Frage 44
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Ablesen von Amplitude und Schwingungsdauer aus einem $y(t)$-Diagramm  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein mechanischer Oszillator zeichnet seine zeitabhängige Auslenkung in einem Schwingungsdiagramm ($y(t)$-Graph) auf. Aus dem Graphen liest man ab, dass die maximale positive Auslenkung aus der Ruhelage $\hat{y} = +4{,}0\,\text{cm}$ beträgt. Der zeitliche Abstand zwischen einem Schwingungsberg (lokales Maximum) und dem übernächsten Schwingungsberg beträgt genau $\Delta t = 0{,}50\,\text{s}$.  
Welche Werte besitzen die Schwingungsamplitude $y_0$ und die Frequenz $f$ dieser harmonischen Schwingung?

- (A) $y_0 = 8{,}0\,\text{cm}$; $f = 2{,}0\,\text{Hz}$
- (B) $y_0 = 4{,}0\,\text{cm}$; $f = 2{,}0\,\text{Hz}$
- (C) $y_0 = 4{,}0\,\text{cm}$; $f = 4{,}0\,\text{Hz}$
- (D) $y_0 = 2{,}0\,\text{cm}$; $f = 0{,}25\,\text{Hz}$
- (E) $y_0 = 4{,}0\,\text{cm}$; $f = 0{,}50\,\text{Hz}$

**Richtige Antwort:** C

**Erklärung:**
1. **Amplitude:** Die Amplitude $y_0$ ist die maximale Elongation aus der Ruhelage: $y_0 = 4{,}0\,\text{cm}$.
2. **Periodendauer und Frequenz:** Der zeitliche Abstand zwischen zwei unmittelbar aufeinanderfolgenden Bergen entspricht einer vollen Periodendauer $T$. Der Abstand zum *übernächsten* Berg umfasst genau zwei volle Schwingungsperioden ($2 \cdot T = 0{,}50\,\text{s}$):
   $$T = \frac{0{,}50\,\text{s}}{2} = 0{,}25\,\text{s}$$
   Daraus folgt für die Frequenz:
   $$f = \frac{1}{T} = \frac{1}{0{,}25\,\text{s}} = 4{,}0\,\text{Hz}$$
---

### Frage 45
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Rückstellkraft und Energieaufteilung bei Teilauslenkung  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Ein ungedämpfter harmonischer Federschwinger schwingt mit der Amplitude $y_0$, erfährt in den Umkehrpunkten die maximale rücktreibende Kraft $F_{\text{max}}$ und besitzt die mechanische Gesamtenergie $E_{\text{ges}}$.  
Bei welcher momentanen Auslenkung $y$ beträgt der Betrag der rücktreibenden Kraft genau die Hälfte ihres Maximalwertes ($|F| = 0{,}50 \cdot F_{\text{max}}$), und welcher Prozentsatz der gesamten mechanischen Energie liegt an diesem Punkt als potentielle Energie vor?

- (A) $y = \frac{1}{\sqrt{2}} y_0$; potentielle Energie beträgt $50\,\%$ der Gesamtenergie
- (B) $y = 0{,}50 \cdot y_0$; potentielle Energie beträgt $50\,\%$ der Gesamtenergie
- (C) $y = 0{,}25 \cdot y_0$; potentielle Energie beträgt $25\,\%$ der Gesamtenergie
- (D) $y = \frac{1}{\sqrt{2}} y_0$; potentielle Energie beträgt $25\,\%$ der Gesamtenergie
- (E) $y = 0{,}50 \cdot y_0$; potentielle Energie beträgt $25\,\%$ der Gesamtenergie

**Richtige Antwort:** E

**Erklärung:**
1. **Rückstellkraft:** Nach dem Hookeschen Gesetz gilt $F(y) = -D \cdot y$. Da die Kraft streng linear von der Auslenkung abhängt, gilt $|F| = 0{,}50 \cdot F_{\text{max}}$ exakt bei der halben Maximalauslenkung:
   $$y = 0{,}50 \cdot y_0$$
2. **Potentielle Energie:** Die elastische potentielle Energie hängt quadratisch von der Auslenkung ab:
   $$E_{\text{pot}} = \frac{1}{2} D y^2 = \frac{1}{2} D (0{,}50 \cdot y_0)^2 = 0{,}25 \cdot \left(\frac{1}{2} D y_0^2\right) = 0{,}25 \cdot E_{\text{ges}} = 25\,\%$$
*(Bei halber Rückstellkraft bzw. halber Amplitude sind erst $25\,\%$ der Schwingungsenergie in potentieller Form gespeichert; die verbleibenden $75\,\%$ liegen als kinetische Energie vor).*
---

### Frage 46
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Fadenlänge des Sekundenpendels ($T = 2{,}0\,\text{s}$)  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Ein klassisches Sekundenpendel ist so justiert, dass ein Einzelschwung von einer Seite zur anderen genau eine Sekunde dauert (die volle Periodendauer für Hin- und Rückweg beträgt somit $T = 2{,}0\,\text{s}$).  
Welche Fadenlänge $l$ besitzt ein solches Pendel im Erdschwerefeld näherungsweise ($g = 10\,\text{m/s}^2$; Näherung: $\pi^2 \approx 10$)?

- (A) $0{,}25\,\text{m}$
- (B) $1{,}0\,\text{m}$
- (C) $2{,}0\,\text{m}$
- (D) $0{,}50\,\text{m}$
- (E) $4{,}0\,\text{m}$

**Richtige Antwort:** B

**Erklärung:**
Aus der Formel für das Fadenpendel $T = 2\pi \sqrt{\frac{l}{g}}$ folgt durch Quadrieren und Umstellen nach $l$:
$$T^2 = 4\pi^2 \cdot \frac{l}{g} \implies l = \frac{g \cdot T^2}{4\pi^2}$$
Einsetzen der Werte mit $T = 2{,}0\,\text{s}$, $g = 10\,\text{m/s}^2$ und $\pi^2 \approx 10$:
$$l = \frac{10\,\text{m/s}^2 \cdot (2{,}0\,\text{s})^2}{4 \cdot 10} = \frac{10 \cdot 4}{40}\,\text{m} = 1{,}0\,\text{m}$$

---

### Frage 47
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Zusammenhang zwischen Frequenz, Schwingungsdauer und Kreisfrequenz  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein physiologischer Ruhetremor der Hand oszilliert mit einer charakteristischen Frequenz von $f = 8{,}0\,\text{Hz}$.  
Welche Werte besitzen die Periodendauer $T$ einer einzelnen Zitterbewegung und die zugehörige Kreisfrequenz $\omega$ (mit $\pi \approx 3{,}14$)?

- (A) $T = 0{,}25\,\text{s}$; $\omega = 25\,\text{rad/s}$
- (B) $T = 0{,}50\,\text{s}$; $\omega = 16\,\text{rad/s}$
- (C) $T = 0{,}08\,\text{s}$; $\omega = 80\,\text{rad/s}$
- (D) $T = 0{,}125\,\text{s}$; $\omega \approx 50\,\text{rad/s}$ ($16\pi\,\text{rad/s}$)
- (E) $T = 1{,}25\,\text{s}$; $\omega = 500\,\text{rad/s}$

**Richtige Antwort:** D

**Erklärung:**
1. **Periodendauer:**
   $$T = \frac{1}{f} = \frac{1}{8{,}0\,\text{s}^{-1}} = 0{,}125\,\text{s} = 125\,\text{ms}$$
2. **Kreisfrequenz:**
   $$\omega = 2\pi \cdot f = 2 \cdot 3{,}14 \cdot 8{,}0\,\text{s}^{-1} = 16 \cdot 3{,}14\,\text{rad/s} = 50{,}24\,\text{rad/s} \approx 50\,\text{rad/s}$$

---

### Frage 48
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Frequenzunabhängigkeit der Schallgeschwindigkeit im homogenen Medium  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Eine Sängerin intoniert im Konzertsaal zunächst einen tiefen Ton mit der Frequenz $f_1 = 200\,\text{Hz}$ und kurz darauf einen hohen Ton mit der dreifachen Frequenz $f_2 = 600\,\text{Hz}$. Beide Töne breiten sich in ruhender, homogener Raumluft gleicher Temperatur aus.  
Welche Aussage über die Ausbreitungsgeschwindigkeiten $c_1$ und $c_2$ beider Töne ist physikalisch korrekt?

- (A) Beide Töne breiten sich mit exakt derselben Schallgeschwindigkeit aus ($c_1 = c_2$); der höhere Ton besitzt lediglich eine dreimal kürzere Wellenlänge.
- (B) Der Ton mit $600\,\text{Hz}$ breitet sich dreimal schneller aus ($c_2 = 3 \cdot c_1$).
- (C) Der tiefere Ton breitet sich schneller aus, weil tiefe Frequenzen weniger Reibungsverluste an Luftmolekülen erfahren.
- (D) Die Schallgeschwindigkeit steigt streng quadratisch mit der Frequenz an.
- (E) Der höhere Ton verliert seine Welleneigenschaft und wird zu einer dispersiven Schockwelle.

**Richtige Antwort:** A

**Erklärung:**
In einem nicht-dispersiven Medium wie normaler Luft hängt die Schallgeschwindigkeit ausschließlich von den thermodynamischen Materialeigenschaften des Mediums ab (Temperatur, Dichte, Kompressibilität: $c = \sqrt{\kappa \cdot R_s \cdot T}$).  
Die Schallgeschwindigkeit ist vollkommen **unabhängig von der Tonhöhe (Frequenz)** und der Amplitude. Beide Töne breiten sich mit $c \approx 340\,\text{m/s}$ aus. Nach $c = \lambda \cdot f$ führt die dreifache Frequenz lediglich zu einer exakten Drittelung der Wellenlänge ($\lambda_2 = \frac{1}{3}\lambda_1$).

---

### Frage 49
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Akustische Schwebung bei zwei benachbarten Frequenzen ($f_{\text{schweb}} = |f_1 - f_2|$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Zur Kalibrierung eines Audiometers werden zwei reine Sinustöne gleichzeitig abgestrahlt: Ton 1 mit $f_1 = 440\,\text{Hz}$ und Ton 2 mit $f_2 = 444\,\text{Hz}$. Durch die kontinuierliche Interferenz beider Schallwellen nimmt das Ohr einen einzigen Ton wahr, dessen Lautstärke periodisch an- und abschwillt (Schwebung).  
Mit welcher Schwebungsfrequenz $f_{\text{schweb}}$ schwankt die wahrgenommene Lautstärke?

- (A) $442\,\text{Hz}$
- (B) $884\,\text{Hz}$
- (C) $4{,}0\,\text{Hz}$
- (D) $2{,}0\,\text{Hz}$
- (E) $0{,}5\,\text{Hz}$

**Richtige Antwort:** C

**Erklärung:**
Überlagern sich zwei harmonische Wellen geringfügig unterschiedlicher Frequenzen ($f_1 \approx f_2$), so entsteht eine Schwebung. Die Schwebungsfrequenz (die Frequenz, mit der die Lautstärke periodisch zwischen Maximum und Minimum schwankt) entspricht der absoluten Differenz der beiden Einzelfrequenzen:
$$f_{\text{schweb}} = |f_2 - f_1| = 444\,\text{Hz} - 440\,\text{Hz} = 4{,}0\,\text{Hz}$$
Der Hörer nimmt somit vier Lautstärkemaxima pro Sekunde wahr. *(Die wahrgenommene Tonhöhe entspricht dem arithmetischen Mittel $\frac{f_1 + f_2}{2} = 442\,\text{Hz}$, siehe Distraktor A).*

---

### Frage 50
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Polarisation  
**Lernziel / Subskill:** Gesetz von Malus bei Hintereinanderschaltung dreier Polarisatoren  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 45 Sekunden

Zwei Polarisationsfilter $P_1$ (Durchlassachse bei $0^\circ$) und $P_3$ (Durchlassachse bei $90^\circ$) sind gekreuzt aufgestellt, sodass zunächst kein Licht durch das System transmittiert ($I = 0$).  
Nun wird ein drittes Polarisationsfilter $P_2$ genau zwischen $P_1$ und $P_3$ platziert, dessen Durchlassachse um $\alpha = 45^\circ$ gegenüber $P_1$ geneigt ist ($\cos 45^\circ = \frac{1}{\sqrt{2}}$). Nach dem ersten Filter $P_1$ beträgt die Intensität des linear polarisierten Lichts $I_1 = 80\,\text{mW/cm}^2$.  
Welche Lichtintensität $I_3$ verlässt den Analysator $P_3$ nach dem Durchtritt durch alle drei Filter?

- (A) $0\,\text{mW/cm}^2$
- (B) $80\,\text{mW/cm}^2$
- (C) $40\,\text{mW/cm}^2$
- (D) $10\,\text{mW/cm}^2$
- (E) $20\,\text{mW/cm}^2$

**Richtige Antwort:** E

**Erklärung:**
1. **Transmission durch Filter $P_2$:**
   Das auf $P_2$ treffende Licht ist unter $0^\circ$ linear polarisiert. Die Achse von $P_2$ liegt bei $45^\circ$ ($\Delta \alpha_{1,2} = 45^\circ$):
   $$I_2 = I_1 \cdot \cos^2(45^\circ) = 80\,\text{mW/cm}^2 \cdot \left(\frac{1}{\sqrt{2}}\right)^2 = 80 \cdot \frac{1}{2} = 40\,\text{mW/cm}^2$$
   Das Licht verlässt $P_2$ nun neu linear polarisiert in $45^\circ$-Richtung!
2. **Transmission durch Filter $P_3$:**
   Das Licht trifft auf $P_3$ (Achse bei $90^\circ$). Der relative Winkel zwischen der Polarisationsebene des Lichts ($45^\circ$) und der Achse von $P_3$ ($90^\circ$) beträgt:
   $$\Delta \alpha_{2,3} = 90^\circ - 45^\circ = 45^\circ$$
   Anwendung des Malus-Gesetzes auf den zweiten Schritt:
   $$I_3 = I_2 \cdot \cos^2(45^\circ) = 40\,\text{mW/cm}^2 \cdot \frac{1}{2} = 20\,\text{mW/cm}^2$$
*(Bemerkenswertes physikalisches Phänomen: Das Einfügen eines Zwischenfilters führt dazu, dass hinter zwei zuvor vollkommen undurchlässig gekreuzten Filtern wieder Licht austritt).*
