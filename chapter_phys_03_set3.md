# Physik Kapitel 3: Schwingungen und Wellen — Set 3 (Fragen 51 bis 75)

---

### Frage 51
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Gültigkeitsgrenze der Pendelformel und Kleinwinkelnäherung  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Für die Schwingungsdauer eines mathematischen Fadenpendels wird in der Schul- und Vorklinikphysik standardmäßig die Näherungsformel $T = 2\pi \sqrt{\frac{l}{g}}$ verwendet.  
Unter welcher physikalischen Voraussetzung gilt diese Formel mit sehr hoher Genauigkeit für die freie Schwingung?

- (A) Nur bei maximalen Auslenkungswinkeln von nahezu $90^\circ$, da erst dort die rücktreibende Kraft voll wirkt.
- (B) Nur im absoluten Vakuum, wobei der Auslenkungswinkel beliebig groß (bis zu $180^\circ$) sein darf.
- (C) Nur bei hinreichend kleinen Auslenkungswinkeln (Kleinwinkelnäherung, typischerweise $\varphi \lesssim 10^\circ$), bei denen näherungsweise $\sin\varphi \approx \varphi$ (im Bogenmaß) gilt.
- (D) Nur wenn die Pendelmasse mindestens $10\,\text{kg}$ beträgt, um Luftwirbel zu minimieren.
- (E) Die Formel gilt mathematisch exakt für jeden beliebigen Winkel bis zum vollständigen Überschlag.

**Richtige Antwort:** C

**Erklärung:**
Die exakte Bewegungsgleichung eines Fadenpendels lautet $m l \ddot{\varphi} = -m g \sin\varphi \implies \ddot{\varphi} + \frac{g}{l}\sin\varphi = 0$.  
Diese Differentialgleichung beschreibt streng genommen eine anharmonische Schwingung. Nur für kleine Winkel (typischerweise $\varphi \le 10^\circ$ bzw. ca. $0{,}17\,\text{rad}$) darf man die Sinusfunktion durch ihr Argument im Bogenmaß ersetzen (**Kleinwinkelnäherung**: $\sin\varphi \approx \varphi$). Erst durch diese Linearisierung entsteht die harmonische Schwingungsgleichung $\ddot{\varphi} + \omega_0^2 \varphi = 0$ mit der kreisfrequenzunabhängigen Schwingungsdauer $T = 2\pi \sqrt{\frac{l}{g}}$.
---

### Frage 52
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Federpendel bei Massenänderung ($f \propto 1/\sqrt{m}$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein biophysikalischer Beschleunigungssensor wird im Modell als ungedämpftes Federpendel (Masse $m_1$, Federkonstante $D$) mit einer Eigenfrequenz von $f_1 = 100\,\text{Hz}$ beschrieben.  
Für eine neue Messreihe wird die seismische Masse des Sensors um den Faktor 4 vergrößert ($m_2 = 4 \cdot m_1$), während die Federkonstante unverändert bleibt.  
Wie groß ist die neue Eigenfrequenz $f_2$ dieses Sensors?

- (A) $50\,\text{Hz}$ (die Eigenfrequenz halbiert sich)
- (B) $25\,\text{Hz}$
- (C) $200\,\text{Hz}$
- (D) $400\,\text{Hz}$
- (E) $100\,\text{Hz}$ (die Eigenfrequenz bleibt massenunabhängig)

**Richtige Antwort:** A

**Erklärung:**
Die Eigenfrequenz $f$ eines Federpendels ist gegeben durch:
$$f = \frac{1}{2\pi} \sqrt{\frac{D}{m}} \implies f \propto \frac{1}{\sqrt{m}}$$
Wird die Masse vervierfacht ($m_2 = 4 \cdot m_1$), so sinkt die Frequenz um den Faktor $\sqrt{4} = 2$:
$$f_2 = \frac{1}{\sqrt{4}} \cdot f_1 = \frac{1}{2} \cdot 100\,\text{Hz} = 50\,\text{Hz}$$

---

### Frage 53
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Maximalgeschwindigkeit beim Nulldurchgang ($v_{\text{max}} = \omega \cdot y_0$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein harmonisch schwingender Oszillator führt eine Bewegung mit einer Amplitude von $y_0 = 5{,}0\,\text{cm}$ ($0{,}05\,\text{m}$) und einer Kreisfrequenz von $\omega = 20\,\text{rad/s}$ aus.  
Welche maximale Geschwindigkeit $v_{\text{max}}$ erreicht der Schwingkörper beim Durchgang durch die Ruhelage?

- (A) $0{,}25\,\text{m/s}$
- (B) $0{,}50\,\text{m/s}$
- (C) $4{,}0\,\text{m/s}$
- (D) $1{,}0\,\text{m/s}$
- (E) $20\,\text{m/s}$

**Richtige Antwort:** D

**Erklärung:**
Die Geschwindigkeit einer harmonischen Schwingung lautet:
$$v(t) = \dot{y}(t) = \omega \cdot y_0 \cdot \cos(\omega t)$$
Die Maximalgeschwindigkeit tritt beim Durchgang durch die Gleichgewichtslage ($y = 0$, $\cos(\omega t) = \pm 1$) auf und berechnet sich nach:
$$v_{\text{max}} = \omega \cdot y_0 = 20\,\text{rad/s} \cdot 0{,}05\,\text{m} = 1{,}0\,\text{m/s}$$

---

### Frage 54
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Energieaufteilung bei halber Amplitude ($y = \frac{1}{2}y_0$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein ungedämpfter Feder-Masse-Schwinger schwingt harmonisch mit der Maximalamplitude $y_0$ und besitzt die mechanische Gesamtenergie $E_{\text{ges}}$.  
Welcher Anteil der gesamten mechanischen Energie liegt als elastische potentielle Energie ($E_{\text{pot}}$) vor, wenn sich der Körper genau bei der halben Maximalauslenkung ($y = \frac{1}{2} y_0$) befindet?

- (A) $12{,}5\,\%$
- (B) $25\,\%$ (ein Viertel der Gesamtenergie)
- (C) $50\,\%$ (die Energie ist immer hälftig geteilt)
- (D) $75\,\%$
- (E) $100\,\%$

**Richtige Antwort:** B

**Erklärung:**
1. Die mechanische Gesamtenergie eines harmonischen Feder-Masse-Schwingers entspricht der maximalen potentiellen Energie in den Umkehrpunkten ($y = y_0$):
   $$E_{\text{ges}} = \frac{1}{2} D y_0^2$$
2. Für die potentielle Energie bei beliebiger Auslenkung $y$ gilt:
   $$E_{\text{pot}}(y) = \frac{1}{2} D y^2$$
3. Setzt man die halbe Amplitude $y = \frac{1}{2} y_0$ ein:
   $$E_{\text{pot}} = \frac{1}{2} D \left(\frac{1}{2} y_0\right)^2 = \frac{1}{2} D \cdot \frac{1}{4} y_0^2 = \frac{1}{4} \cdot \left(\frac{1}{2} D y_0^2\right) = \frac{1}{4} E_{\text{ges}} = 25\,\%$$
*(Die verbleibenden $75\,\%$ der Energie liegen zu diesem Zeitpunkt als kinetische Energie vor).*

---

### Frage 55
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Phasenbeziehung zwischen Geschwindigkeit und Beschleunigung  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Für einen idealen ungedämpften Oszillator wird die Schwingung durch $y(t) = y_0 \sin(\omega t)$ beschrieben.  
Zu welchem Zeitpunkt bzw. bei welchen Auslenkungen ist die momentane Schwingungsgeschwindigkeit $v(t)$ exakt gleich null ($v = 0$), während der Betrag der Schwingungsbeschleunigung $|a(t)|$ seinen Maximalwert erreicht, und welche Phasenverschiebung $\Delta \varphi_{a,v}$ besteht zwischen Beschleunigung und Geschwindigkeit?

- (A) Beim Nulldurchgang ($y = 0$); Phasenverschiebung $\Delta \varphi = 0$
- (B) Beim Nulldurchgang ($y = 0$); Phasenverschiebung $\Delta \varphi = \pi$
- (C) Bei $y = \frac{1}{\sqrt{2}} y_0$; Phasenverschiebung $\Delta \varphi = \frac{\pi}{4}$
- (D) In den Umkehrpunkten ($y = \pm y_0$); Phasenverschiebung $\Delta \varphi = 2\pi$
- (E) In den Umkehrpunkten ($y = \pm y_0$); Phasenverschiebung $\Delta \varphi = \frac{\pi}{2}$ ($90^\circ$, die Beschleunigung eilt der Geschwindigkeit um eine Viertelperiode voraus)

**Richtige Antwort:** E

**Erklärung:**
1. **Auslenkung, Geschwindigkeit und Beschleunigung:**
   $$y(t) = y_0 \sin(\omega t)$$
   $$v(t) = \omega y_0 \cos(\omega t)$$
   $$a(t) = -\omega^2 y_0 \sin(\omega t) = \omega^2 y_0 \cos\left(\omega t + \frac{\pi}{2}\right)$$
2. **Umkehrpunkte ($y = \pm y_0$):**
   Hier ist $\sin(\omega t) = \pm 1$. Folglich ist $\cos(\omega t) = 0$ und damit die Geschwindigkeit $v = 0$. Gleichzeitig ist $|a| = \omega^2 y_0 = a_{\text{max}}$.
3. **Phasenverschiebung:**
   Zwischen $v(t) \propto \cos(\omega t)$ und $a(t) \propto -\sin(\omega t)$ besteht eine Phasenverschiebung von genau $\Delta \varphi = \frac{\pi}{2}$ ($90^\circ$). Die Beschleunigung eilt der Geschwindigkeit um $\frac{\pi}{2}$ voraus.

---

### Frage 56
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Definition und klinische Relevanz des aperiodischen Grenzfalls  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Bei vielen medizinischen Messgeräten (z. B. analoge Galvanometer, invasive arterielle Drucksensoren) soll die Anzeige nach einer impulsartigen Druck- oder Spannungsänderung so schnell wie möglich ihren neuen stabilen Endwert erreichen, **ohne dabei über die Ruhelage überzuschwingen**.  
Welche physikalische Dämpfungseinstellung erfüllt exakt dieses Kriterium?

- (A) Vollständige Dämpfungsfreiheit ($\delta = 0$)
- (B) Schwingfall mit schwacher Dämpfung ($\delta \ll \omega_0$)
- (C) Aperiodischer Grenzfall ($\delta = \omega_0$)
- (D) Stark überkritischer Kriechfall ($\delta \gg \omega_0$)
- (E) Resonanzkatastrophe

**Richtige Antwort:** C

**Erklärung:**
- Der **aperiodische Grenzfall ($\delta = \omega_0$)** zeichnet sich mathematisch und physikalisch dadurch aus, dass das ausgelenkte System in der **theoretisch kürzestmöglichen Zeit** in die Ruhelage bzw. den neuen Messwert zurückkehrt, ohne dabei ein einziges Mal die Ruhelage zu überschwingen.
- Im **Kriechfall ($\delta > \omega_0$)** schwingt das System zwar ebenfalls nicht über, benötigt aber durch die übermäßige Reibung deutlich mehr Zeit (verzögertes Ansprechen).
- Im **Schwingfall ($\delta < \omega_0$)** kommt es zu störenden Oszillationen um den Messwert.

---

### Frage 57
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Phasenverschiebung im Resonanzfall  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein gedämpfter harmonischer Oszillator wird durch eine periodische Kraft $F_{\text{err}}(t) = F_0 \sin(\omega t)$ von außen angeregt.  
Welche Phasenverschiebung $\Delta \varphi$ stellt sich bei exakter Resonanz ($\omega = \omega_0$) zwischen der periodischen Erregerkraft und der resultierenden Auslenkung $y(t)$ des Schwingers ein?

- (A) $\Delta \varphi = \frac{\pi}{2}$ ($90^\circ$, die Auslenkung hinkt der Erregerkraft um eine Viertelperiode hinterher)
- (B) $\Delta \varphi = 0$ (Kraft und Auslenkung schwingen exakt in Phase)
- (C) $\Delta \varphi = \pi$ ($180^\circ$, Kraft und Auslenkung sind exakt gegenphasig)
- (D) $\Delta \varphi = \frac{\pi}{4}$ ($45^\circ$)
- (E) $\Delta \varphi = 2\pi$ ($360^\circ$)

**Richtige Antwort:** A

**Erklärung:**
- Für sehr kleine Erregerfrequenzen ($\omega \ll \omega_0$) schwingt das System nahezu phasengleich mit der Kraft ($\Delta \varphi \approx 0$).
- Im **Resonanzfall ($\omega = \omega_0$)** hinkt die Auslenkung der anregenden Kraft um genau $\Delta \varphi = \frac{\pi}{2}$ ($90^\circ$ bzw. eine Viertelperiode $T/4$) hinterher. Da die Geschwindigkeit der Auslenkung um $90^\circ$ vorauseilt, sind **Erregerkraft und Schwingungsgeschwindigkeit im Resonanzfall exakt gleichphasig**. Dadurch wird bei jedem Zyklus die maximale mechanische Leistung in das System eingespeist.
- Für sehr hohe Erregerfrequenzen ($\omega \gg \omega_0$) schlägt die Phase auf vollständige Gegenphasigkeit ($\Delta \varphi \to \pi$) um.

---

### Frage 58
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Auswertung eines räumlichen Wellenprofils $y(x)$  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Eine Momentaufnahme einer sich nach rechts ausbreitenden Transversalwelle (ein räumliches Wellenprofil $y(x)$ zu einem festen Zeitpunkt $t_0$) zeigt, dass der räumliche Abstand zwischen dem ersten Wellenberg und dem unmittelbar folgenden Wellental genau $\Delta x = 1{,}5\,\text{m}$ beträgt. Die Amplitude der Welle beträgt $y_0 = 5{,}0\,\text{mm}$, und die Quelle schwingt mit einer Frequenz von $f = 20\,\text{Hz}$.  
Welche Wellenlänge $\lambda$ und welche Phasengeschwindigkeit $c$ besitzt diese Welle?

- (A) $\lambda = 1{,}5\,\text{m}$; $c = 30\,\text{m/s}$
- (B) $\lambda = 0{,}75\,\text{m}$; $c = 15\,\text{m/s}$
- (C) $\lambda = 3{,}0\,\text{m}$; $c = 15\,\text{m/s}$
- (D) $\lambda = 3{,}0\,\text{m}$; $c = 60\,\text{m/s}$
- (E) $\lambda = 6{,}0\,\text{m}$; $c = 120\,\text{m/s}$

**Richtige Antwort:** D

**Erklärung:**
1. **Wellenlänge aus dem Profil:** Eine volle Wellenlänge $\lambda$ entspricht dem Abstand von Wellenberg zu Wellenberg. Der Abstand von einem Wellenberg zum unmittelbar folgenden Wellental ist genau eine halbe Wellenlänge ($\frac{\lambda}{2}$):
   $$\frac{\lambda}{2} = 1{,}5\,\text{m} \implies \lambda = 2 \cdot 1{,}5\,\text{m} = 3{,}0\,\text{m}$$
2. **Phasengeschwindigkeit:**
   $$c = \lambda \cdot f = 3{,}0\,\text{m} \cdot 20\,\text{s}^{-1} = 60\,\text{m/s}$$
---

### Frage 59
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Zusammenhang zwischen Wellenamplitude und Intensität ($I \propto y_0^2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein Ultraschallsender strahlt eine harmonische Welle in ein homogenes Gewebephantom ab. Durch Verstellen des Funktionsgenerators wird die Schwingungsamplitude der Welle von ursprünglich $y_{0,1} = 2{,}0\,\mu\text{m}$ auf $y_{0,2} = 4{,}0\,\mu\text{m}$ verdoppelt, während die Frequenz und die Ausbreitungsgeschwindigkeit unverändert bleiben.  
Auf welchen Wert steigt die von der Welle transportierte Schallintensität $I$, wenn der anfängliche Intensitätswert $I_1 = 25\,\text{mW/cm}^2$ betrug?

- (A) $50\,\text{mW/cm}^2$ (die Intensität verdoppelt sich proportional zur Amplitude)
- (B) $100\,\text{mW/cm}^2$ (die Intensität vervierfacht sich, da $I \propto y_0^2$)
- (C) $25\,\text{mW/cm}^2$ (die Intensität ist unabhängig von der Schwingungsamplitude)
- (D) $12{,}5\,\text{mW/cm}^2$ (die Intensität sinkt auf die Hälfte)
- (E) $625\,\text{mW/cm}^2$ (die Intensität steigt mit der vierten Potenz)

**Richtige Antwort:** B

**Erklärung:**
Die von einer mechanischen oder elektromagnetischen Welle transportierte Intensität $I$ (Leistung pro Flächeneinheit) ist direkt proportional zum Quadrat der Schwingungsamplitude $y_0$:
$$I \propto y_0^2$$
Wird die Amplitude verdoppelt ($y_{0,2} = 2 \cdot y_{0,1}$), vervierfacht sich die Intensität ($2^2 = 4$):
$$I_2 = 2^2 \cdot I_1 = 4 \cdot 25\,\text{mW/cm}^2 = 100\,\text{mW/cm}^2$$
*(Distraktor A verfällt dem weit verbreiteten Fehlkonzept einer einfachen linearen Proportionalität zwischen Amplitude und Intensität).*
---

### Frage 60
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Phasengeschwindigkeit aus der Wellengleichung bestimmen ($c = \omega/k$)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Die mathematische Funktion einer sich entlang der positiven $x$-Achse ausbreitenden harmonischen Welle lautet:
$$y(x,t) = 0{,}02\,\text{m} \cdot \sin(20\pi \cdot t - 4\pi \cdot x)$$
Hierbei ist die Zeit $t$ in Sekunden und der Ort $x$ in Metern angegeben.  
Welche Phasengeschwindigkeit $c$ besitzt diese Welle?

- (A) $0{,}20\,\text{m/s}$
- (B) $80\pi^2\,\text{m/s}$
- (C) $2{,}0\,\text{m/s}$
- (D) $10\,\text{m/s}$
- (E) $5{,}0\,\text{m/s}$

**Richtige Antwort:** E

**Erklärung:**
Die allgemeine Form einer nach rechts laufenden Welle lautet:
$$y(x,t) = y_0 \cdot \sin(\omega t - k x)$$
Durch Koeffizientenvergleich liest man ab:
1. **Kreisfrequenz:** $\omega = 20\pi\,\text{s}^{-1}$
2. **Kreiswellenzahl:** $k = 4\pi\,\text{m}^{-1}$
Die Phasengeschwindigkeit $c$ ist der Quotient aus Kreisfrequenz und Wellenzahl:
$$c = \frac{\omega}{k} = \frac{20\pi\,\text{s}^{-1}}{4\pi\,\text{m}^{-1}} = 5{,}0\,\text{m/s}$$
*(Alternativer Rechenweg über $f = \frac{\omega}{2\pi} = 10\,\text{Hz}$ und $\lambda = \frac{2\pi}{k} = \frac{2\pi}{4\pi} = 0{,}5\,\text{m} \implies c = \lambda \cdot f = 0{,}5\,\text{m} \cdot 10\,\text{s}^{-1} = 5{,}0\,\text{m/s}$).*

---

### Frage 61
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Fehlende Transversalwellen in Gasen und Flüssigkeiten  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Warum können sich im Inneren von homogenen Flüssigkeiten (z. B. Wasser, Blutplasma) und Gasen (z. B. Luft) ausschließlich **Longitudinalwellen**, jedoch **keine Transversalwellen** ausbreiten?

- (A) Weil die Schallgeschwindigkeit in Fluiden größer ist als die Lichtgeschwindigkeit.
- (B) Weil Fluidteilchen elektrisch neutral sind und keine Coulomb-Kräfte spüren.
- (C) Weil Flüssigkeiten und Gase keinen elastischen Schubmodul besitzen (sie setzen Scherungen und Gestaltänderungen keine rücktreibenden Kräfte entgegen, sondern nur Volumenänderungen).
- (D) Weil Transversalwellen durch die Brownsche Molekularbewegung sofort in Wärme umgewandelt werden.
- (E) Weil Transversalwellen nur im absoluten Vakuum existieren können.

**Richtige Antwort:** C

**Erklärung:**
- **Longitudinalwellen (Druck-/Dichtewellen):** Benötigen als elastische Rückstellkraft den Kompressionsmodul (Widerstand gegen Volumenänderung). Da Flüssigkeiten und Gase elastisch komprimierbar sind, können sich Longitudinalwellen problemlos ausbreiten.
- **Transversalwellen (Scherwellen):** Erfordern, dass Teilchen senkrecht zur Ausbreitungsrichtung ausgelenkt werden und elastische Scherkräfte auf Nachbarteilchen übertragen. Ideale Flüssigkeiten und Gase besitzen jedoch keinen Schubmodul (Schersteifigkeit $G = 0$); sie fließen aneinander ab, ohne eine elastische rücktreibende Scherkraft aufzubauen.

---

### Frage 62
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Frequenzberechnung bei gegebener Wellenlänge in Gewebe  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein diagnostischer Ultraschallwandler sendet Schallwellen in menschliches Muskelgewebe aus. Die Schallgeschwindigkeit im Weichgewebe beträgt näherungsweise $c = 1\,500\,\text{m/s}$. Die gemessene Wellenlänge des Schalls im Gewebe liegt bei $\lambda = 0{,}30\,\text{mm}$ ($3{,}0 \cdot 10^{-4}\,\text{m}$).  
Welche Ultraschallfrequenz $f$ erzeugt das Gerät?

- (A) $5{,}0\,\text{MHz}$
- (B) $0{,}50\,\text{MHz}$
- (C) $450\,\text{kHz}$
- (D) $2{,}0\,\text{MHz}$
- (E) $50\,\text{MHz}$

**Richtige Antwort:** A

**Erklärung:**
Aus der fundamentalen Wellenbeziehung $c = \lambda \cdot f$ folgt:
$$f = \frac{c}{\lambda}$$
Einsetzen der gegebenen Werte in SI-Basiseinheiten:
$$f = \frac{1\,500\,\text{m/s}}{0{,}30 \cdot 10^{-3}\,\text{m}} = \frac{1\,500}{3{,}0 \cdot 10^{-4}}\,\text{Hz} = \frac{15\,000}{3} \cdot 10^3\,\text{Hz} = 5\,000 \cdot 10^3\,\text{Hz} = 5{,}0 \cdot 10^6\,\text{Hz} = 5{,}0\,\text{MHz}$$

---

### Frage 63
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Mediumabhängigkeit mechanischer Wellen (Vakuum-Eigenschaft)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

In einem Science-Fiction-Film detoniert ein Raumschiff im interplanetaren Weltraum (vollständiges Vakuum), woraufhin ein ohrenbetäubender Explosionsknall zu hören ist.  
Aus welchem physikalischen Grund ist dieses Szenario wissenschaftlich unmöglich?

- (A) Schallwellen breiten sich im Vakuum zwar aus, besitzen dort aber eine Frequenz im unhörbaren Infraschallbereich.
- (B) Im Vakuum wird der Schall durch die kosmische Hintergrundstrahlung vollständig ausgelöscht.
- (C) Schallwellen bewegen sich im Vakuum mit Lichtgeschwindigkeit und können vom menschlichen Trommelfell nicht registriert werden.
- (D) Schallwellen sind mechanische Wellen, die zwingend ein materielles Trägermedium (Kopplung von Masseteilchen) zur Fortpflanzung benötigen; im Vakuum findet kein Schalltransport statt.
- (E) Im Vakuum existieren nur Transversalwellen, während das menschliche Ohr ausschließlich Kugelwellen wahrnimmt.

**Richtige Antwort:** D

**Erklärung:**
Mechanische Wellen (wie Schallwellen) stellen periodische Störungen eines materiellen Kontinuums dar. Die Energieübertragung erfolgt durch direkte elastische Stoß- und Wechselwirkungskräfte zwischen benachbarten Teilchen (Atomen, Molekülen). Da im Vakuum keine Materieteilchen vorhanden sind, kann sich dort prinzipiell kein Schall ausbreiten ($c_{\text{Vakuum}} = 0$). Elektromagnetische Wellen (z. B. Licht, Radiowellen) hingegen benötigen kein Trägermedium.

---

### Frage 64
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Bedingung für destruktive Interferenz zweier Lautsprecher  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Zwei phasengleich schwingende Lautsprecher strahlen einen reinen Sinuston mit der Wellenlänge $\lambda = 0{,}80\,\text{m}$ in einen reflexionsfreien Raum ab.  
Bei welchem der folgenden Gangunterschiede $\Delta s = |s_1 - s_2|$ zwischen den beiden Schallwegen kommt es an einem Messpunkt zu einer **vollständigen destruktiven Interferenz** (völlige Auslöschung des Tons)?

- (A) $\Delta s = 0{,}80\,\text{m}$
- (B) $\Delta s = 1{,}20\,\text{m}$
- (C) $\Delta s = 1{,}60\,\text{m}$
- (D) $\Delta s = 0{,}00\,\text{m}$
- (E) $\Delta s = 2{,}40\,\text{m}$

**Richtige Antwort:** B

**Erklärung:**
Vollständige destruktive Interferenz tritt genau dann auf, wenn der Gangunterschied $\Delta s$ ein ungeradzahliges Vielfaches einer halben Wellenlänge beträgt:
$$\Delta s = \left(k + \frac{1}{2}\right) \cdot \lambda \quad (k \in \mathbb{N}_0)$$
Mit $\lambda = 0{,}80\,\text{m}$ ergeben sich mögliche Auslöschungsabstände:
- Für $k = 0$: $\Delta s = 0{,}5 \cdot 0{,}80\,\text{m} = 0{,}40\,\text{m}$
- Für $k = 1$: $\Delta s = 1{,}5 \cdot 0{,}80\,\text{m} = 1{,}20\,\text{m}$
- Für $k = 2$: $\Delta s = 2{,}5 \cdot 0{,}80\,\text{m} = 2{,}00\,\text{m}$
Bei $\Delta s = 1{,}20\,\text{m}$ trifft ein Wellenberg exakt auf ein Wellental der Nachbarwelle, sodass sich die Schalldrücke zu null addieren.  
*(Die Werte 0 m, 0,80 m, 1,60 m und 2,40 m stellen ganzzahlige Vielfache von $\lambda$ dar und führen zu konstruktiver Interferenz).*

---

### Frage 65
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Obertöne und erlaubte Harmonische beim einseitig geschlossenen Resonanzrohr  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Ein zylindrisches akustisches Resonanzrohr ist an einem Ende fest verschlossen und am anderen Ende offen (einseitig geschlossenes Rohr, z. B. Modell des Ansatzrohres oder einer gedackten Orgelpfeife). Die Grundfrequenz der stehenden Welle beträgt $f_1 = 150\,\text{Hz}$.  
Welche Frequenzen besitzen die beiden **nächsthöheren stehenden Resonanzmoden (1. und 2. Oberton)** in diesem Rohr?

- (A) $300\,\text{Hz}$ und $450\,\text{Hz}$ (ganzzahlige Vielfache $2 f_1$ und $3 f_1$)
- (B) $300\,\text{Hz}$ und $600\,\text{Hz}$ (reine Oktavsprünge)
- (C) $200\,\text{Hz}$ und $250\,\text{Hz}$
- (D) In einem einseitig geschlossenen Rohr existieren physikalisch überhaupt keine Obertöne.
- (E) $450\,\text{Hz}$ und $750\,\text{Hz}$ (ausschließlich ungeradzahlige Harmonische: $3 f_1$ und $5 f_1$)

**Richtige Antwort:** E

**Erklärung:**
In einem einseitig geschlossenen Rohr erzwingen die Randbedingungen stets einen Schwingungsknoten am geschlossenen Ende und einen Schwingungsbauch am offenen Ende der Schallschnelle.  
Die Resonanzbedingung lautet daher:
$$L = (2n - 1) \cdot \frac{\lambda_n}{4} \implies f_n = (2n - 1) \cdot f_1 \quad (n = 1, 2, 3, \dots)$$
In einem einseitig geschlossenen Resonanzkörper können sich somit ausschließlich **ungeradzahlige Vielfache der Grundfrequenz** ausbilden:
- Grundton ($n=1$): $f_1 = 150\,\text{Hz}$
- 1. Oberton ($n=2$, entspricht der 3. Harmonischen): $f_2 = 3 \cdot f_1 = 3 \cdot 150\,\text{Hz} = 450\,\text{Hz}$
- 2. Oberton ($n=3$, entspricht der 5. Harmonischen): $f_3 = 5 \cdot f_1 = 5 \cdot 150\,\text{Hz} = 750\,\text{Hz}$  
*(Geradzahlige Harmonische wie $300\,\text{Hz}$ oder $600\,\text{Hz}$ können sich nicht ausbilden, da sie an beiden Rohrenden identische Randbedingungen erfordern würden).*
---

### Frage 66
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Fundamentale Bedingung für eine harmonische Schwingung  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Welche grundlegende physikalische Eigenschaft muss die rücktreibende Kraft $F$ eines mechanischen Systems besitzen, damit das System nach einer Auslenkung eine **streng harmonische** Schwingung ausführt?

- (A) Die rücktreibende Kraft muss zeitlich und örtlich vollkommen konstant sein ($F = \text{konstant}$).
- (B) Die Kraft muss quadratisch mit der Auslenkung anwachsen ($F \propto y^2$).
- (C) Die Kraft muss direkt proportional zur Auslenkung $y$ sein und stets zur Ruhelage hin wirken ($F = -D \cdot y$, lineares Rückstellgesetz).
- (D) Die Kraft muss umgekehrt proportional zum Abstand sein ($F \propto 1/y$).
- (E) Die Kraft muss stets in Bewegungsrichtung der Masse wirken, um die Geschwindigkeit zu maximieren.

**Richtige Antwort:** C

**Erklärung:**
Eine Schwingung ist per Definition genau dann harmonisch (reiner Sinus- bzw. Kosinusverlauf), wenn die rücktreibende Kraft linear mit der Auslenkung wächst und der Auslenkung entgegengerichtet ist ($F(y) = -D \cdot y$, Hookesches Gesetz). Nur unter dieser Bedingung führt Newtons 2. Axiom ($m\ddot{y} = -Dy$) auf die lineare Schwingungsgleichung $\ddot{y} + \omega_0^2 y = 0$.
---

### Frage 67
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Begriff der Kohärenz als Voraussetzung für stationäre Interferenz  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Damit bei der Überlagerung zweier Wellen ein zeitlich stabiles (stationäres) Interferenzmuster mit festen Orten konstruktiver und destruktiver Interferenz im Raum beobachtet werden kann, müssen die beiden Wellenzüge **kohärent** sein.  
Welche physikalischen Bedingungen müssen zwei Wellen erfüllen, um als kohärent zu gelten?

- (A) Sie müssen dieselbe Frequenz (bzw. Wellenlänge) besitzen und eine zeitlich konstante Phasenbeziehung zueinander aufweisen.
- (B) Sie müssen exakt entgegengesetzte Ausbreitungsrichtungen und unterschiedliche Frequenzen besitzen.
- (C) Ihre Amplituden müssen sich periodisch mit Schallgeschwindigkeit verdoppeln.
- (D) Beide Wellen müssen zwingend Longitudinalwellen im absoluten Vakuum sein.
- (E) Sie müssen von zwei völlig unabhängigen Glühlampen ohne gemeinsame Phasenbeziehung stammen.

**Richtige Antwort:** A

**Erklärung:**
Kohärenz ist die fundamentale Bedingung für stationäre Interferenz:
1. Die beiden Wellen müssen dieselbe Frequenz $f$ (bzw. Wellenlänge $\lambda$) besitzen.
2. Die Phasenverschiebung $\Delta \varphi$ zwischen beiden Wellen an einem festen Ort muss über die Beobachtungszeit zeitlich konstant bleiben.  
Schwankt die Phasenbeziehung statistisch unkontrolliert, mitteln sich Verstärkungen und Auslöschungen für das Auge zu einer gleichmäßigen Intensitätsverteilung weg (inkohärente Überlagerung).
---

### Frage 68
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Polarisation  
**Lernziel / Subskill:** Molekulare Voraussetzung für optische Aktivität  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In einem klinisch-chemischen Labor wird die Konzentration von D-Glukose im Urin mittels Polarimetrie bestimmt.  
Welche grundlegende molekulare Struktureigenschaft verleiht gelösten Biomolekülen (wie Zuckern oder Aminosäuren) ihre **optische Aktivität**, also die Fähigkeit, die Schwingungsebene linear polarisierten Lichts zu drehen?

- (A) Eine hohe Dichte an freien Elektronen im Leitungsband
- (B) Das Vorhandensein ausschließlich unpolarer kovalenter Bindungen
- (C) Eine streng planare Molekülgeometrie mit mehreren Spiegelebenen
- (D) Chiralität (eine asymmetrische Molekülstruktur ohne Spiegelebene bzw. Drehspiegelachse, sodass Molekül und Spiegelbild nicht zur Deckung gebracht werden können)
- (E) Die Fähigkeit zur spontanen Emission von Kugelwellen bei Raumtemperatur

**Richtige Antwort:** D

**Erklärung:**
Eine chemische Substanz ist genau dann optisch aktiv, wenn ihre Moleküle **chiral** sind. Ein chirales Molekül besitzt keine Spiegelebene oder Inversionszentrum (oft bedingt durch ein asymmetrisches Kohlenstoffatom mit vier verschiedenen Substituenten, prinzipiell aber durch jede chirale Molekülgeometrie).  
Aufgrund der räumlichen Asymmetrie wechselwirkt das chirale Medium unterschiedlich mit den rechts- und linkszirkular polarisierten Komponenten des Lichts, was zu einer kontinuierlichen Drehung der linearen Polarisationsebene führt.
---

### Frage 69
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Schwingungsdauer bei veränderter Fallbeschleunigung ($T \propto 1/\sqrt{g}$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein Astronaut führt auf der Erde Schwingungsversuche mit einem mathematischen Fadenpendel durch und misst eine Schwingungsdauer von $T_{\text{Erde}} = 2{,}0\,\text{s}$.  
Anschließend baut er dasselbe Pendel unverändert auf der Oberfläche eines Himmelskörpers auf, auf dem die Schwerebeschleunigung exakt ein Viertel der Erdbeschleunigung beträgt ($g' = \frac{1}{4} g_{\text{Erde}}$).  
Welche Periodendauer $T'$ misst er dort?

- (A) $1{,}0\,\text{s}$
- (B) $4{,}0\,\text{s}$
- (C) $8{,}0\,\text{s}$
- (D) $0{,}50\,\text{s}$
- (E) $2{,}0\,\text{s}$ (die Periodendauer hängt nur von der Fadenlänge ab)

**Richtige Antwort:** B

**Erklärung:**
Für das Fadenpendel gilt:
$$T = 2\pi \sqrt{\frac{l}{g}} \implies T \propto \frac{1}{\sqrt{g}}$$
Wird die Fallbeschleunigung geviertelt ($g' = \frac{1}{4} g$):
$$T' = 2\pi \sqrt{\frac{l}{\frac{1}{4} g}} = 2\pi \sqrt{4 \cdot \frac{l}{g}} = \sqrt{4} \cdot \left(2\pi \sqrt{\frac{l}{g}}\right) = 2 \cdot T_{\text{Erde}} = 2 \cdot 2{,}0\,\text{s} = 4{,}0\,\text{s}$$
Die geringere Schwerkraft verringert die rücktreibende Kraftkomponente, wodurch das Pendel langsamer schwingt.

---

### Frage 70
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Maximale Beschleunigung eines Federpendels ($a_{\text{max}} = \frac{D}{m} y_0$)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Ein Massekörper von $m = 0{,}20\,\text{kg}$ schwingt reibungsfrei an einer Schraubenfeder der Federkonstante $D = 80\,\text{N/m}$. Die Schwingungsamplitude beträgt $y_0 = 5{,}0\,\text{cm}$ ($0{,}05\,\text{m}$).  
Welchen Maximalwert der Beschleunigung $a_{\text{max}}$ erfährt die Masse während ihrer Oszillation?

- (A) $2{,}0\,\text{m/s}^2$
- (B) $4{,}0\,\text{m/s}^2$
- (C) $10\,\text{m/s}^2$
- (D) $40\,\text{m/s}^2$
- (E) $20\,\text{m/s}^2$

**Richtige Antwort:** E

**Erklärung:**
1. **Kreisfrequenz des Federpendels:**
   $$\omega^2 = \frac{D}{m} = \frac{80\,\text{N/m}}{0{,}20\,\text{kg}} = 400\,\text{s}^{-2} \implies \omega = 20\,\text{rad/s}$$
2. **Maximale Beschleunigung:**
   Die maximale Beschleunigung tritt in den Umkehrpunkten auf, an denen die rücktreibende Federkraft maximal ist ($F_{\text{max}} = D \cdot y_0$):
   $$a_{\text{max}} = \omega^2 \cdot y_0 = 400\,\text{s}^{-2} \cdot 0{,}05\,\text{m} = 20\,\text{m/s}^2$$
*(Alternativer Rechenweg über Newton II: $a_{\text{max}} = \frac{F_{\text{max}}}{m} = \frac{D \cdot y_0}{m} = \frac{80 \cdot 0{,}05}{0{,}20} = \frac{4{,}0\,\text{N}}{0{,}20\,\text{kg}} = 20\,\text{m/s}^2$).*

---

### Frage 71
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Masseunabhängigkeit des mathematischen Pendels  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

An einem mathematischen Fadenpendel wird der schwingende Bleikörper der Masse $m_1 = 200\,\text{g}$ durch einen Holzkörper der Masse $m_2 = 20\,\text{g}$ ersetzt (Zehntelung der Masse). Die Fadenlänge $l$ und die Auslenkungsamplitude bleiben unverändert, Reibungseffekte werden vernachlässigt.  
Wie verhält sich die Schwingungsdauer $T_2$ des neuen Pendels im Vergleich zur ursprünglichen Periodendauer $T_1$?

- (A) $T_2$ ist zehnmal so lang ($T_2 = 10 \cdot T_1$).
- (B) $T_2$ sinkt auf ca. ein Drittel ($T_2 = \frac{1}{\sqrt{10}} \cdot T_1$).
- (C) $T_2$ bleibt exakt gleich groß wie $T_1$ ($T_2 = T_1$).
- (D) $T_2$ sinkt auf ein Zehntel ($T_2 = 0{,}1 \cdot T_1$).
- (E) Das leichtere Pendel hört sofort auf zu schwingen.

**Richtige Antwort:** C

**Erklärung:**
Die Schwingungsdauer eines mathematischen Pendels lautet:
$$T = 2\pi \sqrt{\frac{l}{g}}$$
In dieser Formel taucht die Masse $m$ des Pendelkörpers überhaupt nicht auf. Sowohl die Schwerkraft ($F_G = m \cdot g$) als auch die Trägheit des Körpers ($F = m \cdot a$) wachsen exakt linear mit der Masse. Dadurch kürzt sich die Masse in der Bewegungsgleichung vollständig heraus: Alle Körper fallen und pendeln im Schwerefeld – bei gleicher Fadenlänge – gleich schnell.

---

### Frage 72
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Energieabnahme bei Amplitudendämpfung ($E \propto y_0^2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In einem viskosen Medium erfährt ein mechanischer Oszillator eine stetige Dämpfung. Nach einer Zeitspanne von $t = 10\,\text{s}$ ist seine Schwingungsamplitude auf genau die Hälfte ihres Anfangswertes abgesunken ($y_0(10\,\text{s}) = \frac{1}{2} y_0(0)$).  
Welcher Anteil der ursprünglichen mechanischen Gesamtenergie $E_{\text{ges}}(0)$ ist nach diesen $10\,\text{s}$ noch im Schwinger vorhanden?

- (A) $25\,\%$ (ein Viertel der Anfangsenergie)
- (B) $50\,\%$ (die Hälfte der Anfangsenergie)
- (C) $12{,}5\,\%$
- (D) $70{,}7\,\%$
- (E) $0\,\%$ (die Energie ist vollständig dissipiert)

**Richtige Antwort:** A

**Erklärung:**
Die in einem harmonischen Oszillator gespeicherte mechanische Gesamtenergie ist streng proportional zum Quadrat der momentanen Amplitude:
$$E_{\text{ges}} \propto y_0^2$$
Sinkt die Schwingungsamplitude auf die Hälfte ab ($y_0 \to \frac{1}{2} y_0$), so verringert sich die mechanische Energie auf das Quadrat dieses Faktors:
$$E_{\text{ges}}(10\,\text{s}) = \left(\frac{1}{2}\right)^2 \cdot E_{\text{ges}}(0) = \frac{1}{4} \cdot E_{\text{ges}}(0) = 25\,\%$$
Die übrigen $75\,\%$ der mechanischen Energie wurden durch Reibung in thermische Energie (Wärme) dissipiert.

---

### Frage 73
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Interpretation von Resonanzkurven bei variierender Dämpfung  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

In einem Resonanzdiagramm (Schwingungsamplitude als Funktion der Erregerfrequenz $f_{\text{err}}$) sind zwei verschiedene Kurven I und II für denselben Oszillator dargestellt. Kurve I zeigt eine hohe, sehr spitze Resonanzkurve mit kleiner Halbwertsbreite. Kurve II zeigt ein deutlich niedrigeres, breit ausgewalztes Amplitudenmaximum.  
Welcher physikalische Schluss über die Dämpfung $\delta$ und die Resonanzschärfe der beiden Zustände ist korrekt?

- (A) Kurve II besitzt die schwächere Dämpfung und die höhere Resonanzschärfe.
- (B) Beide Systeme besitzen dieselbe Dämpfung; Kurve I wurde lediglich mit doppelter Masse betrieben.
- (C) Kurve I beschreibt den überkritischen Kriechfall ohne Schwingung.
- (D) Kurve I gehört zu einer schwachen Dämpfung (hohe Resonanzschärfe), während Kurve II zu einer stärkeren Dämpfung (geringe Resonanzschärfe) gehört.
- (E) Dämpfung hat grundsätzlich keinen Einfluss auf die Breite oder Höhe von Resonanzkurven.

**Richtige Antwort:** D

**Erklärung:**
Die Form der Resonanzkurve wird maßgeblich durch die Dämpfung bestimmt:
- **Geringe Dämpfung (Kurve I):** Es geht wenig Energie verloren, die Resonanzspitze ist sehr hoch und schmal (hohe Resonanzschärfe / hohe Güte).
- **Starke Dämpfung (Kurve II):** Größere Reibungsverluste dämpfen die maximale Amplitude bei Resonanz deutlich ab und verbreitern die Kurve (flaches Maximum, geringe Resonanzschärfe).
---

### Frage 74
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Druck- und Dichteverteilung einer akustischen Longitudinalwelle  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Eine ebene Schallwelle breitet sich in homogener Raumluft als reine Longitudinalwelle aus.  
Welche räumliche Struktur von Druck- und Dichteschwankungen bildet sich entlang der Ausbreitungsrichtung aus, und wie groß ist der räumliche Abstand zwischen zwei unmittelbar aufeinanderfolgenden Druckmaxima (Kompressionen)?

- (A) Der Druck bleibt überall exakt konstant; der Abstand beträgt null.
- (B) Es entsteht eine periodische Abfolge von Zonen maximaler Verdichtung (Druckmaxima / Kompressionen) und Zonen maximaler Verdünnung (Druckminima / Dilatationen); der Abstand zweier benachbarter Druckmaxima entspricht genau einer Wellenlänge $\lambda$.
- (C) Die Druckmaxima stehen senkrecht auf der Ausbreitungsrichtung im Abstand einer halben Periode $T/2$.
- (D) Der Abstand zwischen zwei Kompressionen entspricht stets genau dem Rohrradius.
- (E) In einer Longitudinalwelle treten ausschließlich transversale Scherkräfte auf.

**Richtige Antwort:** B

**Erklärung:**
Da die Teilchen in einer Longitudinalwelle parallel zur Ausbreitungsrichtung um ihre Ruhelagen schwingen, schieben sie sich periodisch zusammen und wieder auseinander:
- Es bilden sich wandernde Zonen hoher Teilchendichte und hohen Drucks (**Kompressionen**) sowie Zonen geringer Dichte und niedrigen Drucks (**Verdünnungen / Dilatationen**).
- Der räumliche Abstand von einer Kompression zur nächsten Kompression (bzw. von einer Verdünnung zur nächsten) entspricht per Definition exakt **einer Wellenlänge $\lambda$**.
---

### Frage 75
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Zusammenhang zwischen Gangunterschied und Phasenverschiebung  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Zwei kohärente Wellen gleicher Wellenlänge $\lambda = 0{,}60\,\text{m}$ treffen an einem Raumpunkt aufeinander. Der geometrische Weglängenunterschied (Gangunterschied) von ihren Quellen bis zu diesem Punkt beträgt $\Delta s = 0{,}15\,\text{m}$.  
Welche Phasenverschiebung $\Delta \varphi$ liegt zwischen den beiden Wellenzügen an diesem Punkt vor, und welcher Interferenzzustand ergibt sich?

- (A) $\Delta \varphi = 0$; vollständige konstruktive Interferenz mit doppelter Amplitude
- (B) $\Delta \varphi = \pi$; vollständige Auslöschung (destruktive Interferenz)
- (C) $\Delta \varphi = 2\pi$; vollständige konstruktive Interferenz
- (D) $\Delta \varphi = \frac{\pi}{4}$; keine messbare Überlagerung
- (E) $\Delta \varphi = \frac{\pi}{2}$ ($90^\circ$); es liegt eine Phasenverschiebung um eine Viertelperiode vor (partielle Interferenz, weder maximale Verstärkung noch Auslöschung)

**Richtige Antwort:** E

**Erklärung:**
Der Zusammenhang zwischen dem räumlichen Gangunterschied $\Delta s$ und der resultierenden Phasenverschiebung $\Delta \varphi$ lautet:
$$\Delta \varphi = 2\pi \cdot \frac{\Delta s}{\lambda}$$
Einsetzen der gegebenen Zahlenwerte:
$$\Delta \varphi = 2\pi \cdot \frac{0{,}15\,\text{m}}{0{,}60\,\text{m}} = 2\pi \cdot \frac{1}{4} = \frac{\pi}{2} = 90^\circ$$
Ein Gangunterschied von genau einer Viertelwellenlänge ($\Delta s = \lambda/4$) erzeugt eine Phasenverschiebung von $\pi/2$ ($90^\circ$). Dies führt weder zu vollständiger konstruktiver Interferenz ($\Delta \varphi = 0, 2\pi$) noch zu vollständiger destruktiver Auslöschung ($\Delta \varphi = \pi$).
