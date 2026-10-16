# Physik Kapitel 3: Schwingungen und Wellen — Set 5 (Fragen 101 bis 125)

---

### Frage 101
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Fadenpendel in der Schwerelosigkeit ($g_{\text{eff}} = 0$)  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Ein Astronaut an Bord der Internationalen Raumstation (ISS, permanenter freier Fall im Erdorbit, Schwerelosigkeit) lenkt ein klassisches mathematisches Fadenpendel um einen Winkel von $5^\circ$ aus und lässt es vorsichtig aus der Ruhe los.  
Wie verhält sich das Fadenpendel nach dem Loslassen?

- (A) Es schwingt mit einer viermal höheren Frequenz als auf der Erde.
- (B) Es führt eine harmonische Schwingung mit unveränderter Schwingungsdauer aus, da die Fadenlänge gleich geblieben ist.
- (C) Es beginnt sofort mit Lichtgeschwindigkeit zu rotieren.
- (D) Es schwingt exakt einmal hin und her und bleibt dann in der Ruhelage stehen.
- (E) Es schwingt überhaupt nicht, sondern verharrt in der ausgelenkten Position, da ohne effektive Schwerkraft keine rücktreibende Kraftkomponente existiert ($T \to \infty$).

**Richtige Antwort:** E

**Erklärung:**
Für die Schwingungsdauer des mathematischen Pendels gilt:
$$T = 2\pi \sqrt{\frac{l}{g_{\text{eff}}}}$$
In der Schwerelosigkeit eines frei fallenden Systems ist die effektive Fallbeschleunigung null ($g_{\text{eff}} = 0$).  
Da die rücktreibende Kraft des Pendels durch die tangentiale Schwerkraftkomponente ($F_{\text{rück}} = m \cdot g \cdot \sin\varphi$) erzeugt wird, existiert bei $g = 0$ keinerlei rücktreibende Kraft mehr. Mathematisch strebt die Periodendauer gegen unendlich ($T \to \infty$); physikalisch bleibt das Pendel mangels antreibender Kraft einfach in seiner ausgelenkten Position stehen.

---

### Frage 102
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Federpendel bei Reihenschaltung zweier Federn ($D_{\text{ges}} = D/2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein Massekörper schwingt an einer Schraubenfeder der Härte $D$ mit einer Schwingungsdauer von $T_1 = 1{,}0\,\text{s}$.  
Nun wird dieselbe Masse an zwei identische Federn derselben Härte $D$ gehängt, die **hintereinander in Reihe geschaltet** sind (Gesamtfederkonstante $D' = \frac{1}{2} \cdot D$).  
Wie groß ist die neue Periodendauer $T'$ dieses Schwingers?

- (A) $0{,}50\,\text{s}$
- (B) $0{,}71\,\text{s}$
- (C) $T' = \sqrt{2} \cdot T_1 \approx 1{,}41\,\text{s}$
- (D) $2{,}0\,\text{s}$
- (E) $4{,}0\,\text{s}$

**Richtige Antwort:** C

**Erklärung:**
1. **Gesamtfederkonstante bei Reihenschaltung:**
   $$\frac{1}{D_{\text{ges}}} = \frac{1}{D} + \frac{1}{D} = \frac{2}{D} \implies D_{\text{ges}} = \frac{D}{2}$$
2. **Neue Schwingungsdauer:**
   $$T' = 2\pi \sqrt{\frac{m}{D_{\text{ges}}}} = 2\pi \sqrt{\frac{m}{\frac{D}{2}}} = 2\pi \sqrt{2 \cdot \frac{m}{D}} = \sqrt{2} \cdot \left(2\pi \sqrt{\frac{m}{D}}\right) = \sqrt{2} \cdot T_1 \approx 1{,}41\,\text{s}$$
Die weichere Gesamtfeder verlangsamt die Oszillation um den Faktor $\sqrt{2}$.

---

### Frage 103
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Schwingungsdauer und Frequenz aus der Cosinus-Gleichung ablesen  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Die zeitabhängige Auslenkung eines harmonischen Schwingers wird durch die Bewegungsgleichung
$$y(t) = 0{,}10\,\text{m} \cdot \cos(4\pi \cdot t)$$
beschrieben ($t$ in Sekunden).  
Welche Werte besitzen die Periodendauer $T$ und die Schwingungsfrequenz $f$ dieses Systems?

- (A) $T = 0{,}50\,\text{s}$; $f = 2{,}0\,\text{Hz}$
- (B) $T = 2{,}0\,\text{s}$; $f = 0{,}50\,\text{Hz}$
- (C) $T = 0{,}25\,\text{s}$; $f = 4{,}0\,\text{Hz}$
- (D) $T = 4\pi\,\text{s}$; $f = \frac{1}{4\pi}\,\text{Hz}$
- (E) $T = 1{,}0\,\text{s}$; $f = 1{,}0\,\text{Hz}$

**Richtige Antwort:** A

**Erklärung:**
Die allgemeine Schwingungsfunktion lautet $y(t) = y_0 \cos(\omega t)$.  
1. Durch Koeffizientenvergleich liest man die Kreisfrequenz ab:
   $$\omega = 4\pi\,\text{s}^{-1}$$
2. Aus $\omega = 2\pi f$ folgt für die Frequenz:
   $$f = \frac{\omega}{2\pi} = \frac{4\pi\,\text{s}^{-1}}{2\pi} = 2{,}0\,\text{Hz}$$
3. Für die Periodendauer $T$ folgt:
   $$T = \frac{1}{f} = \frac{1}{2{,}0\,\text{s}^{-1}} = 0{,}50\,\text{s}$$

---

### Frage 104
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Elastische Energie einer gespannten Feder ($E_{\text{pot}} = \frac{1}{2} D y^2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Eine lineare Schraubenfeder mit der Federkonstante $D = 200\,\text{N/m}$ wird aus ihrer entspannten Ruhelage um eine Strecke von $y = 5{,}0\,\text{cm}$ ($0{,}05\,\text{m}$) elastisch gedehnt.  
Wie viel potentielle elastische Energie $E_{\text{pot}}$ ist im ausgelenkten Zustand in der Feder gespeichert?

- (A) $5{,}0\,\text{J}$
- (B) $1{,}0\,\text{J}$
- (C) $0{,}50\,\text{J}$
- (D) $0{,}25\,\text{J}$
- (E) $0{,}05\,\text{J}$

**Richtige Antwort:** D

**Erklärung:**
Die in einer linear-elastischen Feder gespeicherte potentielle Spannenergie entspricht dem Integral über das Hookesche Gesetz:
$$E_{\text{pot}} = \frac{1}{2} D y^2$$
Einsetzen der Werte in SI-Einheiten ($y = 0{,}05\,\text{m} = 5 \cdot 10^{-2}\,\text{m}$):
$$E_{\text{pot}} = \frac{1}{2} \cdot 200\,\frac{\text{N}}{\text{m}} \cdot (0{,}05\,\text{m})^2 = 100 \cdot 0{,}0025\,\text{J} = 0{,}25\,\text{J}$$
*(Distraktor C vergisst den Faktor $1/2$: $200 \cdot 0{,}0025 = 0{,}50\,\text{J}$).*

---

### Frage 105
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Momentangeschwindigkeit bei gegebener Auslenkung ($v(y) = \omega \sqrt{y_0^2 - y^2}$)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Ein harmonischer Oszillator oszilliert mit einer Amplitude von $y_0 = 10\,\text{cm}$ ($0{,}10\,\text{m}$) und einer Kreisfrequenz von $\omega = 10\,\text{rad/s}$.  
Welche Momentangeschwindigkeit $v$ besitzt der Körper in dem Augenblick, in dem seine Auslenkung aus der Ruhelage $y = 6{,}0\,\text{cm}$ ($0{,}06\,\text{m}$) beträgt?

- (A) $1{,}0\,\text{m/s}$
- (B) $0{,}80\,\text{m/s}$
- (C) $0{,}60\,\text{m/s}$
- (D) $0{,}40\,\text{m/s}$
- (E) $0{,}10\,\text{m/s}$

**Richtige Antwort:** B

**Erklärung:**
Aus der Energieerhaltung ($E_{\text{ges}} = E_{\text{kin}} + E_{\text{pot}}$) folgt:
$$\frac{1}{2} m v_{\text{max}}^2 = \frac{1}{2} m v^2 + \frac{1}{2} D y^2 \implies v(y) = \omega \cdot \sqrt{y_0^2 - y^2}$$
Einsetzen der Zahlenwerte ($y_0 = 0{,}10\,\text{m}$, $y = 0{,}06\,\text{m}$):
$$\sqrt{y_0^2 - y^2} = \sqrt{(0{,}10)^2 - (0{,}06)^2} = \sqrt{0{,}0100 - 0{,}0036} = \sqrt{0{,}0064} = 0{,}08\,\text{m}$$
Damit ergibt sich die Momentangeschwindigkeit:
$$v = \omega \cdot 0{,}08\,\text{m} = 10\,\text{s}^{-1} \cdot 0{,}08\,\text{m} = 0{,}80\,\text{m/s}$$
*(Das zugrunde liegende rechtwinklige Drehungstripel ist das klassische 6-8-10-Dreieck).*

---

### Frage 106
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Thermodynamische Ursache der Schwingungsdämpfung (Dissipation)  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Wenn die Amplitude einer mechanischen Schwingung in einem realen Raum mit der Zeit kontinuierlich abklingt, wohin fließt die ursprünglich im System gespeicherte mechanische Energie?

- (A) Sie wird vollständig vernichtet, da Energie bei Dämpfungsvorgängen nicht erhalten bleibt.
- (B) Sie wandelt sich in elektromagnetische Gammaquanten um.
- (C) Sie verbleibt als potentielle Restenergie permanent im Schwerpunkt des Schwingers.
- (D) Sie verdoppelt die Trägheitsmasse des Oszillators.
- (E) Sie wird durch Reibungsarbeit irreversibel in thermische Energie (innere Energie / Wärme) des Schwingers und der Umgebung umgewandelt.

**Richtige Antwort:** E

**Erklärung:**
Nach dem 1. Hauptsatz der Thermodynamik (Energieerhaltung) kann Energie weder erzeugt noch vernichtet werden.  
Bei gedämpften mechanischen Schwingungen verrichten Reibungskräfte (z. B. Strömungswiderstand in Luft/Wasser, innere Reibung im Federstahl oder Lagerreibung) negative mechanische Arbeit: Die geordnete makroskopische Schwingungsenergie wird **dissipiert**, das heißt in ungeordnete mikroskopische thermische Bewegungsenergie (Wärme) der beteiligten Moleküle umgewandelt.

---

### Frage 107
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Einfluss der Reibungsdämpfung auf die Resonanzkurve  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein mechanisches System wird durch eine äußere Kraft periodisch zu erzwungenen Schwingungen angeregt.  
Welcher physikalische Effekt tritt auf, wenn man die Dämpfung (Reibungsverluste) des Systems schrittweise vergrößert?

- (A) Die maximale Schwingungsamplitude im Resonanzfall wächst über alle Grenzen an.
- (B) Die Resonanzkurve wird immer steiler und schmaler.
- (C) Die maximale Schwingungsamplitude bei Resonanz sinkt ab, die Resonanzkurve verbreitert sich (wird flacher), und das Amplitudenmaximum verschiebt sich minimal zu einer geringfügig niedrigeren Erregerfrequenz.
- (D) Die Eigenfrequenz des Systems verdoppelt sich bei jeder Verdopplung der Dämpfung.
- (E) Die Phasenverschiebung im Resonanzfall sinkt auf exakt null Grad ab.

**Richtige Antwort:** C

**Erklärung:**
Mit zunehmender Dämpfung $\delta$:
1. Wird pro Periode mehr Schwingungsenergie in Wärme dissipiert, wodurch die maximale Resonanzamplitude deutlich absinkt.
2. Verbreitert sich die Resonanzkurve (die Resonanzschärfe nimmt ab).
3. Liegt das Maximum der Auslenkungsamplitude für gedämpfte Systeme bei der Frequenz $\omega_{\text{res}} = \sqrt{\omega_0^2 - 2\delta^2}$, verschiebt sich also mit wachsender Dämpfung minimal nach links zu etwas tieferen Frequenzen.
---

### Frage 108
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Geometrie ebener Wellenfronten  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Welche räumliche geometrische Gestalt besitzen die Wellenfronten (Flächen konstanter Schwingungsphase) einer idealen **ebenen Welle** im dreidimensionalen Raum?

- (A) Zueinander parallele Ebenen senkrecht zur Ausbreitungsrichtung der Welle
- (B) Konzentrische Kugelschalen um die Anregungsachse
- (C) Ineinander geschachtelte Hohlzylinder
- (D) Rotationsparaboloide mit gemeinsamem Brennpunkt
- (E) Spiralförmig gewundene Raumkurven

**Richtige Antwort:** A

**Erklärung:**
- Bei einer **Kugelwelle** breitet sich die Welle von einem punktförmigen Erreger radial in alle Raumrichtungen aus; die Flächen gleicher Phase sind konzentrische Kugelflächen.
- Bei einer **ebenen Welle** ist die Ausbreitungsrichtung überall im Raum streng parallel. Alle Raumpunkte, die in einer Ebene senkrecht zu dieser Ausbreitungsrichtung liegen, befinden sich zu jedem Zeitpunkt exakt im selben Schwingungszustand. Die Wellenfronten bilden daher ein System **zueinander paralleler Ebenen**.

---

### Frage 109
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Kugelwellenintensität und Abstandsgesetz ($I \propto 1/r^2$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Eine punktförmige Schallquelle strahlt in einem großen, hindernisfreien Außenbereich gleichmäßig Kugelwellen ab. In einem Abstand von $r_1 = 5{,}0\,\text{m}$ von der Schallquelle wird eine Schallintensität von $I_1 = 90\,\text{mW/m}^2$ gemessen. Die Luftdämpfung wird vernachlässigt.  
Welche Schallintensität $I_2$ misst ein Schalldetektor, der auf den dreifachen Abstand ($r_2 = 15\,\text{m}$) versetzt wird?

- (A) $45\,\text{mW/m}^2$
- (B) $30\,\text{mW/m}^2$
- (C) $22{,}5\,\text{mW/m}^2$
- (D) $10\,\text{mW/m}^2$ (die Intensität sinkt auf ein Neuntel)
- (E) $3{,}3\,\text{mW/m}^2$

**Richtige Antwort:** D

**Erklärung:**
Da sich die Schallleistung $P$ einer punktförmigen Quelle gleichmäßig auf eine Kugeloberfläche $A = 4\pi r^2$ verteilt, nimmt die Intensität $I = \frac{P}{A}$ umgekehrt proportional zum Quadrat des Abstands ab (1/$r^2$-Gesetz):
$$I(r) \propto \frac{1}{r^2}$$
Bei einer Verdreifachung des Abstands ($r_2 = 3 \cdot r_1$) sinkt die Intensität auf $\frac{1}{3^2} = \frac{1}{9}$ des Ausgangswertes:
$$I_2 = \frac{I_1}{9} = \frac{90\,\text{mW/m}^2}{9} = 10\,\text{mW/m}^2$$
*(Distraktor B verfällt dem linearen Irrtum $90 / 3 = 30\,\text{mW/m}^2$).*
---

### Frage 110
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Räumliche Phasenverschiebung einer fortschreitenden Welle ($\Delta \varphi = 2\pi \frac{\Delta x}{\lambda}$)  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Eine kontinuierliche Sinuswelle breitet sich mit einer Wellenlänge von $\lambda = 4{,}0\,\text{m}$ und einer Schwingungsdauer von $T = 2{,}0\,\text{s}$ entlang der positiven $x$-Achse aus.  
Welche Phasenverschiebung $\Delta \varphi$ besteht zu einem festen Zeitpunkt $t$ zwischen zwei Punkten auf der Ausbreitungsachse, deren räumlicher Abstand genau $\Delta x = 1{,}0\,\text{m}$ beträgt?

- (A) $\Delta \varphi = 0$
- (B) $\Delta \varphi = \frac{\pi}{2}$ ($90^\circ$, eine Viertelperiode)
- (C) $\Delta \varphi = \pi$ ($180^\circ$, Gegenphasigkeit)
- (D) $\Delta \varphi = 2\pi$ ($360^\circ$)
- (E) $\Delta \varphi = \frac{\pi}{4}$ ($45^\circ$)

**Richtige Antwort:** B

**Erklärung:**
Die Phase einer fortschreitenden harmonischen Welle hängt vom Ort $x$ über die Kreiswellenzahl $k = \frac{2\pi}{\lambda}$ ab:
$$\Delta \varphi = k \cdot \Delta x = 2\pi \cdot \frac{\Delta x}{\lambda}$$
Einsetzen der gegebenen Werte:
$$\Delta \varphi = 2\pi \cdot \frac{1{,}0\,\text{m}}{4{,}0\,\text{m}} = 2\pi \cdot \frac{1}{4} = \frac{\pi}{2} = 90^\circ$$
Ein Abstand von einer Viertelwellenlänge ($\Delta x = \frac{\lambda}{4}$) entspricht exakt einer Phasenverschiebung von einer Viertelperiode bzw. $90^\circ$.

---

### Frage 111
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Schwingungsrichtung bei Longitudinalwellen  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Welches fundamentale geometrische Kriterium unterscheidet eine mechanische **Longitudinalwelle** von einer Transversalwelle?

- (A) Longitudinalwellen besitzen grundsätzlich keine Wellenlänge.
- (B) Die Ausbreitungsgeschwindigkeit einer Longitudinalwelle ist stets exakt gleich der Vakuumlichtgeschwindigkeit.
- (C) Die Teilchen führen ausschließlich kreisförmige Rotationsbewegungen aus.
- (D) Longitudinalwellen können im Gegensatz zu Transversalwellen linear polarisiert werden.
- (E) Die Schwingungsrichtung der oszillierenden Teilchen verläuft parallel (in Richtung) der Ausbreitungsrichtung der Welle.

**Richtige Antwort:** E

**Erklärung:**
- **Longitudinalwelle (Längswelle):** Die Auslenkung der schwingenden Teilchen erfolgt **parallel** zur Ausbreitungsrichtung der Welle (es entstehen periodische Dichte- und Druckschwankungen, z. B. Schall in Luft und Wasser).
- **Transversalwelle (Querwelle):** Die Auslenkung erfolgt **senkrecht** (transversal) zur Ausbreitungsrichtung (z. B. Saitenschwingungen, elektromagnetische Wellen).

---

### Frage 112
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Physikalische Notwendigkeit von Koppelgel in der Sonographie (Impedanzsprung)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Bei einer diagnostischen Ultraschalluntersuchung muss stets ein spezielles Koppelgel zwischen den Ultraschallkopf und die menschliche Haut aufgetragen werden. Befindet sich auch nur ein hauchdünner Luftspalt dazwischen, ist kein diagnostisches Bild darstellbar.  
Welche physikalische Gesetzmäßigkeit begründet diese Notwendigkeit?

- (A) Schallwellen können Luft grundsätzlich nicht durchdringen, da Luft keine Masse besitzt.
- (B) Luft absorbiert Ultraschallquanten durch den photoelektrischen Effekt vollständig.
- (C) An der Grenzfläche zwischen Schallkopf/Haut und Luft liegt ein extremer Sprung des akustischen Wellenwiderstands (akustische Impedanz $Z = \rho \cdot c$) vor, wodurch praktisch $99{,}9\,\%$ der Schallenergie reflektiert werden und nicht in den Körper eindringen können.
- (D) Das Koppelgel dient ausschließlich der elektrischen Erdung des Patienten gegen statische Aufladung.
- (E) Durch die Luftschicht würde der Ultraschall in transversale Röntgenstrahlung umgewandelt.

**Richtige Antwort:** C

**Erklärung:**
Der Reflexionsgrad $R$ an einer senkrechten Grenzfläche hängt von den akustischen Impedanzen $Z = \rho \cdot c$ der beiden Medien ab:
$$R = \left(\frac{Z_2 - Z_1}{Z_2 + Z_1}\right)^2$$
- Weichgewebe und Wasser haben sehr ähnliche Impedanzen ($Z \approx 1{,}5 \cdot 10^6\,\text{kg}/(\text{m}^2\text{s})$).
- Luft besitzt wegen ihrer extrem geringen Dichte eine winzige Impedanz ($Z_{\text{Luft}} \approx 400\,\text{kg}/(\text{m}^2\text{s})$).
An einer Gewebe-Luft-Grenzfläche ist der Impedanzunterschied gigantisch, sodass nahezu $100\,\%$ des Schalls reflektiert werden. Das wässrige Koppelgel beseitigt den Lufteinschluss und ermöglicht einen reflexionsarmen Schalleintritt in das Gewebe (Impedanzanpassung).

---

### Frage 113
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Entfernungsberechnung beim Ultraschall-Impuls-Echo-Verfahren ($s = \frac{1}{2} c \Delta t$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein Ultraschallwandler sendet einen kurzen Schallimpuls in Weichgewebe aus ($c = 1\,500\,\text{m/s}$). Das an einer Gewebestruktur reflektierte Echosignal wird nach einer Gesamtlaufzeit von $\Delta t = 40\,\mu\text{s}$ ($4{,}0 \cdot 10^{-5}\,\text{s}$) wieder am Schallkopf registriert.  
In welcher Tiefe $d$ unter der Hautoberfläche befindet sich die reflektierende Grenzfläche?

- (A) $3{,}0\,\text{cm}$ ($0{,}03\,\text{m}$)
- (B) $6{,}0\,\text{cm}$ ($0{,}06\,\text{m}$)
- (C) $1{,}5\,\text{cm}$ ($0{,}015\,\text{m}$)
- (D) $30\,\text{cm}$ ($0{,}30\,\text{m}$)
- (E) $0{,}75\,\text{cm}$

**Richtige Antwort:** A

**Erklärung:**
Im Impuls-Echo-Verfahren legt der Schallimpuls die Strecke zur Struktur und wieder zurück zum Empfänger zurück; die durchlaufene Gesamtwegstrecke beträgt somit $s = 2 \cdot d$.  
Aus $s = c \cdot \Delta t$ folgt für die Gewebetiefe:
$$d = \frac{c \cdot \Delta t}{2}$$
Einsetzen der Werte:
$$d = \frac{1\,500\,\text{m/s} \cdot 4{,}0 \cdot 10^{-5}\,\text{s}}{2} = \frac{6{,}0 \cdot 10^{-2}\,\text{m}}{2} = 3{,}0 \cdot 10^{-2}\,\text{m} = 3{,}0\,\text{cm}$$
*(Distraktor B vergisst die Halbierung für den Hin- und Rückweg).*

---

### Frage 114
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Phasensprung bei der Reflexion am festen Ende  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Ein einzelner Wellenberg einer Transversalwelle läuft entlang eines elastischen Seils auf ein **fest eingespanntes (unbewegliches) Ende** zu und wird dort reflektiert.  
In welcher Form läuft der Wellenimpuls nach der Reflexion am festen Ende zurück?

- (A) Als unveränderter Wellenberg auf derselben Seilseite ohne Phasensprung.
- (B) Der Impuls wird am festen Ende vollständig absorbiert; es läuft keine Welle zurück.
- (C) Als stehende Kugelwelle mit doppelter Amplitude.
- (D) Als Wellental mit einem Phasensprung von $\Delta \varphi = \pi$ ($180^\circ$, Phasenumkehr an der Einspannung).
- (E) Als Longitudinalwelle mit vierfacher Phasengeschwindigkeit.

**Richtige Antwort:** D

**Erklärung:**
- **Reflexion am festen Ende:** Da der Befestigungspunkt starr fixiert ist, muss die Gesamtauslenkung am Ende zu jedem Zeitpunkt exakt null sein ($y = 0$). Nach dem Superpositionsprinzip kann dies nur erfüllt werden, wenn die reflektierte Welle mit umgekehrtem Vorzeichen zurückläuft. Es tritt ein **Phasensprung von $\pi$ ($180^\circ$)** auf: Ein einlaufender Wellenberg wird als **Wellental** reflektiert.
- *(Am freien, ungebundenen Ende hingegen erfolgt die Reflexion ohne Phasensprung: Wellenberg wird als Wellenberg reflektiert).*

---

### Frage 115
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Knotenabstand bei der 2. Oberschwingung einer festen Saite  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 35 Sekunden

Eine an beiden Enden fest eingespannte Saite der Länge $L = 0{,}90\,\text{m}$ wird zu ihrer **2. Oberschwingung** (3. Harmonische, $n = 3$) angeregt.  
Wie groß ist der räumliche Abstand $\Delta x$ zwischen zwei unmittelbar aufeinanderfolgenden Schwingungsknoten auf dieser Saite?

- (A) $0{,}15\,\text{m}$
- (B) $0{,}30\,\text{m}$ ($30\,\text{cm}$)
- (C) $0{,}45\,\text{m}$
- (D) $0{,}60\,\text{m}$
- (E) $0{,}90\,\text{m}$

**Richtige Antwort:** B

**Erklärung:**
1. **Wellenlänge der 3. Harmonischen ($n = 3$):**
   Für eine beidseitig feste Saite gilt $L = n \cdot \frac{\lambda_n}{2}$:
   $$L = 3 \cdot \frac{\lambda_3}{2} \implies \lambda_3 = \frac{2}{3} \cdot L = \frac{2}{3} \cdot 0{,}90\,\text{m} = 0{,}60\,\text{m}$$
2. **Knotenabstand:**
   Bei jeder stehenden Welle beträgt der Abstand zwischen zwei benachbarten Schwingungsknoten exakt eine halbe Wellenlänge ($\frac{\lambda}{2}$):
   $$\Delta x_{\text{Knoten}} = \frac{\lambda_3}{2} = \frac{0{,}60\,\text{m}}{2} = 0{,}30\,\text{m} = 30\,\text{cm}$$
*(Schneller alternativer Lösungsweg: Bei $n=3$ teilt sich die Gesamtlänge der Saite in genau drei gleich große Schwingungsbäuche der Länge $\frac{L}{3} = \frac{0{,}90\,\text{m}}{3} = 0{,}30\,\text{m}$ auf).*

---

### Frage 116
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Polarisation  
**Lernziel / Subskill:** Definition der Polarisationsebene bei elektromagnetischen Wellen  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Durch welche beiden Richtungsvektoren wird die **Schwingungsebene (Polarisationsebene)** einer linear polarisierten elektromagnetischen Lichtwelle im Raum aufgespannt?

- (A) Durch das Magnetfeld $\vec{B}$ und die Gravitationsfeldlinien der Erde
- (B) Durch den elektrischen Feldvektor $\vec{E}$ und das magnetische Feld $\vec{B}$
- (C) Durch zwei zueinander parallele Lichtstrahlen
- (D) Durch die Schallgeschwindigkeit und den Luftdruck
- (E) Durch den oszillierenden elektrischen Feldvektor $\vec{E}$ und die Ausbreitungsrichtung des Lichts (Wellenvektor $\vec{k}$)

**Richtige Antwort:** E

**Erklärung:**
Bei einer elektromagnetischen Welle schwingen der elektrische Feldvektor $\vec{E}$, der magnetische Feldvektor $\vec{B}$ und der Wellenvektor $\vec{k}$ (Ausbreitungsrichtung) paarweise orthogonal zueinander.  
Per physikalischer Standarddefinition wird die Polarisationsebene durch die Schwingungsrichtung des **elektrischen Feldvektors $\vec{E}$** und die **Ausbreitungsrichtung $\vec{k}$** definiert.

---

### Frage 117
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Schallausbreitung in Festkörpern vs. Gasen  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Die Ausbreitungsgeschwindigkeit von Schallwellen beträgt in Stahl ca. $c_{\text{Stahl}} \approx 5\,000\,\text{m/s}$, während sie in Luft nur ca. $c_{\text{Luft}} \approx 340\,\text{m/s}$ beträgt.  
Warum breitet sich der Schall in Stahl etwa 15-mal schneller aus als in Luft, obwohl die Dichte von Stahl rund 6000-mal größer ist als die Dichte von Luft?

- (A) Weil Stahlmoleküle eine geringere Trägheit besitzen als Luftmoleküle.
- (B) Weil sich in Stahl ausschließlich elektromagnetische Transversalwellen mit Lichtgeschwindigkeit ausbreiten.
- (C) Weil der Elastizitätsmodul (die elastischen Bindungskräfte zwischen den Atomen) in festem Stahl den Kompressionsmodul von Gasen um viele Zehnerpotenzen übertrifft, was den dämpfenden Dichteeinfluss in der Formel $c = \sqrt{E/\rho}$ bei Weitem überkompensiert.
- (D) Weil die Temperatur von festem Stahl grundsätzlich viel höher ist als die der Umgebungsluft.
- (E) Weil in Gasen Schall nur durch Kugelwellen mit kontinuierlichem Energieverlust transportiert wird.

**Richtige Antwort:** C

**Erklärung:**
Die Schallgeschwindigkeit in Festkörpern und Fluiden berechnet sich nach der allgemeinen Beziehung:
$$c = \sqrt{\frac{E}{\rho}} \quad \text{bzw.} \quad c = \sqrt{\frac{K}{\rho}}$$
Zwar steht die Dichte $\rho$ im Nenner unter der Wurzel (höhere Dichte verlangsamt die Welle), jedoch stehen die Atome in einem Metallgitter durch extrem starke kovalente und metallische Bindungskräfte miteinander in Wechselwirkung: Der Elastizitätsmodul $E_{\text{Stahl}}$ ist um den Faktor $10^6$ bis $10^7$ größer als der von Luft! Dieser gigantische Elastizitätsunterschied überwiegt den Dichteeffekt bei Weitem.
---

### Frage 118
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Polarisation  
**Lernziel / Subskill:** Transmission von unpolarisiertem Licht durch einen idealen Linearpolarisator ($I = \frac{1}{2} I_0$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Ein Lichtbündel natürlichen, vollkommen **unpolarisierten Lichts** mit der Eingangsintensität $I_0 = 100\,\text{W/m}^2$ (dessen elektrischer Feldvektor statistisch gleichmäßig in allen Richtungen senkrecht zur Ausbreitungsachse schwingt) fällt senkrecht auf einen idealen linearen Polarisationsfilter.  
Welche Intensität $I$ besitzt das linear polarisierte Licht unmittelbar nach dem Durchtritt durch diesen Polarisator (Reflexions- und Absorptionsverluste des Filtermaterials werden vernachlässigt)?

- (A) $I = 50\,\text{W/m}^2$ (genau die Hälfte der Ausgangsintensität, $I = \frac{1}{2} I_0$)
- (B) $I = 100\,\text{W/m}^2$ (die Intensität bleibt unverändert, da Polarisationsfilter keine Lichtenergie absorbieren)
- (C) $I = 0\,\text{W/m}^2$ (unpolarisiertes Licht wird von einem Linearpolarisator vollständig ausgelöscht)
- (D) $I = 25\,\text{W/m}^2$ (die Intensität sinkt nach dem quadratischen Abstandsgesetz auf ein Viertel)
- (E) $I = 70{,}7\,\text{W/m}^2$ ($I = \frac{1}{\sqrt{2}} I_0$)

**Richtige Antwort:** A

**Erklärung:**
Natürliches, unpolarisiertes Licht besteht aus einer statistischen Überlagerung vieler Wellenzüge mit stochastisch gleich verteilten Schwingungsebenen. Trifft dieses Licht auf einen Linearpolarisator mit einer festen Transmissionsachse, wird nur die jeweilige Projektion des elektrischen Feldvektors transmittiert: $E = E_0 \cos\theta$.  
Für die Intensität gilt nach dem Gesetz von Malus:
$$I(\theta) = I_0 \cos^2\theta$$
Da im unpolarisierten Licht alle Winkel $\theta$ zwischen $0$ und $2\pi$ mit exakt gleicher Wahrscheinlichkeit vorkommen, ist über alle Winkel zu mitteln. Der Mittelwert von $\cos^2\theta$ über eine volle Periode beträgt genau $\frac{1}{2}$:
$$\overline{\cos^2\theta} = \frac{1}{2} \implies I = \frac{1}{2} I_0$$
Ein idealer Linearpolarisator transmittiert aus unpolarisiertem Licht exakt **$50\,\%$ der ursprünglichen Intensität** ($I = 0{,}50 \cdot 100\,\text{W/m}^2 = 50\,\text{W/m}^2$).
---

### Frage 119
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Pendel  
**Lernziel / Subskill:** Schwingungsdauer bei halber Fallbeschleunigung ($T \propto 1/\sqrt{g}$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Auf einem fiktiven Exoplaneten beträgt die lokale Schwerebeschleunigung exakt die Hälfte der Erdbeschleunigung ($g' = \frac{1}{2} g_{\text{Erde}}$).  
Wie verändert sich die Periodendauer $T'$ eines mathematischen Fadenpendels auf diesem Planeten im Vergleich zu seiner irdischen Schwingungsdauer $T_0$?

- (A) Sie halbiert sich ($T' = 0{,}50 \cdot T_0$).
- (B) Sie verdoppelt sich ($T' = 2{,}0 \cdot T_0$).
- (C) Sie bleibt identisch ($T' = T_0$).
- (D) Sie verlängert sich um den Faktor $\sqrt{2}$ ($T' = \sqrt{2} \cdot T_0 \approx 1{,}41 \cdot T_0$).
- (E) Sie verkürzt sich um den Faktor $\sqrt{2}$ ($T' = \frac{1}{\sqrt{2}} \cdot T_0 \approx 0{,}71 \cdot T_0$).

**Richtige Antwort:** D

**Erklärung:**
Für das Fadenpendel gilt:
$$T = 2\pi \sqrt{\frac{l}{g}} \implies T \propto \frac{1}{\sqrt{g}}$$
Setzt man $g' = \frac{1}{2} g$ ein:
$$T' = 2\pi \sqrt{\frac{l}{\frac{1}{2} g}} = 2\pi \sqrt{2 \cdot \frac{l}{g}} = \sqrt{2} \cdot \left(2\pi \sqrt{\frac{l}{g}}\right) = \sqrt{2} \cdot T_0 \approx 1{,}41 \cdot T_0$$
Die geringere Schwerkraft verringert die rücktreibende Kraft; das Pendel schwingt um rund $41\,\%$ langsamer.

---

### Frage 120
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Schwingungen  
**Lernziel / Subskill:** Überlagerung zweier Schwingungen mit $120^\circ$ Phasenverschiebung im Zeigerdiagramm  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 45 Sekunden

Zwei harmonische Schwingungen gleicher Frequenz und gleicher Amplitude von $y_0 = 5{,}0\,\text{mm}$ überlagern sich am selben Ort entlang derselben Schwingungsachse. Die beiden Schwingungen weisen eine konstante Phasenverschiebung von $\Delta \varphi = \frac{2\pi}{3}$ ($120^\circ$) zueinander auf ($\cos 120^\circ = -0{,}50$).  
Welche resultierende Gesamtschwingungsamplitude $y_{\text{res}}$ besitzt die zusammengesetzte Schwingung?

- (A) $10\,\text{mm}$
- (B) $5{,}0\,\text{mm}$ (die Amplitude bleibt exakt gleich der Einzelamplitude)
- (C) $0\,\text{mm}$ (vollständige Auslöschung)
- (D) $7{,}1\,\text{mm}$
- (E) $2{,}5\,\text{mm}$

**Richtige Antwort:** B

**Erklärung:**
Die Überlagerung zweier gleichfrequenter harmonischer Schwingungen gleicher Richtung entspricht der Vektoraddition im Zeigerdiagramm.  
Nach dem Kosinussatz für die Diagonale im Parallelogramm (bzw. Vektoraddition zweier Zeiger der Beträge $A_1 = A_2 = y_0$ mit Zwischenwinkel $\Delta \varphi$):
$$y_{\text{res}} = \sqrt{y_0^2 + y_0^2 + 2 y_0 y_0 \cdot \cos(\Delta \varphi)}$$
Einsetzen von $\Delta \varphi = 120^\circ$ mit $\cos(120^\circ) = -0{,}50$:
$$y_{\text{res}} = \sqrt{y_0^2 + y_0^2 + 2 y_0^2 \cdot (-0{,}50)} = \sqrt{2 y_0^2 - y_0^2} = \sqrt{y_0^2} = y_0 = 5{,}0\,\text{mm}$$
Die beiden Zeiger bilden mit ihrer Resultierenden ein gleichseitiges Dreieck; die resultierende Amplitude ist exakt so groß wie die Amplitude einer Einzelschwingung.

---

### Frage 121
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Gedämpfte Schwingungen & Resonanz  
**Lernziel / Subskill:** Mathematische Bedingung für den Schwingfall ($\delta < \omega_0$)  
**Schwierigkeit:** Easy  
**Geschätzte Bearbeitungszeit:** 20 Sekunden

Ein realer mechanischer Oszillator besitzt die ungedämpfte Eigenkreisfrequenz $\omega_0$ und die Dämpfungskonstante (Abklingkoeffizient) $\delta$.  
Unter welcher mathematischen Bedingung führt das System nach einer einmaligen Auslenkung eine **gedämpfte Schwingung mit periodischen Nulldurchgängen (Schwingfall)** aus?

- (A) $\delta > \omega_0$
- (B) $\delta = \omega_0$
- (C) $\delta = 2 \cdot \omega_0$
- (D) $\delta \to \infty$
- (E) $\delta < \omega_0$

**Richtige Antwort:** E

**Erklärung:**
Die Eigenkreisfrequenz der gedämpften Schwingung lautet:
$$\omega_d = \sqrt{\omega_0^2 - \delta^2}$$
Damit $\omega_d$ reell und positiv ist (echte periodische Oszillation mit Nulldurchgängen), muss der Radikand positiv sein:
- **Schwingfall:** $\delta < \omega_0$ (unterkritische Dämpfung)
- **Aperiodischer Grenzfall:** $\delta = \omega_0$ (Radikand ist null)
- **Kriechfall:** $\delta > \omega_0$ (überkritische Dämpfung, Radikand negativ, rein exponentielles Abklingen ohne Schwingung)

---

### Frage 122
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Elementarwellen  
**Lernziel / Subskill:** Zusammenspiel von Beugung und Interferenz am Doppelspalt  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Fällt eine ebene monochromatische Lichtwelle auf eine Blende mit zwei feinen, parallelen Spalten (Doppelspalt), so entsteht auf einem weit entfernten Auffangschirm ein charakteristisches Muster aus periodisch wechselnden hellen und dunklen Streifen.  
Welche beiden physikalischen Phänomene wirken bei diesem Versuch fundamental zusammen?

- (A) Polarisation und Totalreflexion
- (B) Brechung und Dispersion im Spaltglas
- (C) Beugung (Auffächerung der Welle in kohärente Elementarwellen an den Spalten) und anschließende Interferenz (Überlagerung der Elementarwellen mit gangunterschiedsabhängiger Verstärkung und Auslöschung)
- (D) Gravitationslinseneffekt und Comptoneffekt
- (E) Doppler-Effekt und Resonanzkatastrophe

**Richtige Antwort:** C

**Erklärung:**
Das klassische Doppelspaltexperiment beruht auf zwei Schritten:
1. **Beugung:** An den beiden schmalen Spaltöffnungen wird die einlaufende ebene Wellenfront nach dem Huygensschen Prinzip in zwei zylindrische Elementarwellen aufgefächert.
2. **Interferenz:** Diese beiden kohärenten Elementarwellen überlagern sich im gesamten Raum hinter der Blende. Je nach dem Wegunterschied (Gangunterschied $\Delta s$) zu den einzelnen Schirmpunkten interferieren sie konstruktiv (helle Streifen bei $\Delta s = k\lambda$) oder destruktiv (dunkle Streifen bei $\Delta s = (k + 1/2)\lambda$).

---

### Frage 123
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Harmonische Wellen  
**Lernziel / Subskill:** Grundfrequenz einer Saite bei Vervierfachung der Spannkraft ($f \propto \sqrt{F_{\text{spann}}}$)  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Eine Violinsaite besitzt bei gegebener Einspannung und Spannkraft eine Grundfrequenz von $f_1 = 220\,\text{Hz}$ (Kammerton $a$).  
Durch Nachspannen am Stimmwirbel wird die mechanische Zugspannung (Spannkraft $F_{\text{spann}}$) im Seil auf das Vierfache erhöht ($F_{\text{spann}}' = 4 \cdot F_{\text{spann}}$). Die Länge und der Querschnitt der Saite bleiben unverändert.  
Welche neue Grundfrequenz $f_1'$ erzeugt die Saite nach dem Nachspannen?

- (A) $440\,\text{Hz}$ (die Grundfrequenz verdoppelt sich genau um eine Oktave)
- (B) $880\,\text{Hz}$
- (C) $311\,\text{Hz}$
- (D) $220\,\text{Hz}$ (die Frequenz hängt ausschließlich von der Saitenlänge ab)
- (E) $110\,\text{Hz}$

**Richtige Antwort:** A

**Erklärung:**
Die Phasengeschwindigkeit einer Transversalwelle auf einer elastischen Saite hängt von der Spannkraft $F_{\text{spann}}$ und dem Längenmassenbelag $\mu = m/L$ ab:
$$c = \sqrt{\frac{F_{\text{spann}}}{\mu}}$$
Für die Grundschwingung der beidseitig festen Saite gilt $L = \frac{\lambda_1}{2} \implies \lambda_1 = 2L$:
$$f_1 = \frac{c}{\lambda_1} = \frac{1}{2L} \sqrt{\frac{F_{\text{spann}}}{\mu}} \implies f_1 \propto \sqrt{F_{\text{spann}}}$$
Wird die Spannkraft vervierfacht ($F_{\text{spann}}' = 4 \cdot F_{\text{spann}}$), so verdoppelt sich die Schwingungsfrequenz wegen der Quadratwurzel:
$$f_1' = \sqrt{4} \cdot f_1 = 2 \cdot 220\,\text{Hz} = 440\,\text{Hz}$$

---

### Frage 124
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Wahrgenommene Trägerfrequenz und Schwebungsfrequenz zweier Töne  
**Schwierigkeit:** Medium  
**Geschätzte Bearbeitungszeit:** 25 Sekunden

Zwei akustische Generatoren erzeugen gleichzeitig reine Sinustöne mit den leicht abweichenden Frequenzen $f_1 = 438\,\text{Hz}$ und $f_2 = 442\,\text{Hz}$. Beide Wellen überlagern sich linear am Ohr des Prüfers.  
Welche durchschnittliche Tonhöhe (Trägerfrequenz $f_{\text{ton}}$) und welche Schwebungsfrequenz $f_{\text{schweb}}$ nimmt das menschliche Gehör wahr?

- (A) $f_{\text{ton}} = 880\,\text{Hz}$; $f_{\text{schweb}} = 2{,}0\,\text{Hz}$
- (B) $f_{\text{ton}} = 438\,\text{Hz}$; $f_{\text{schweb}} = 8{,}0\,\text{Hz}$
- (C) $f_{\text{ton}} = 442\,\text{Hz}$; $f_{\text{schweb}} = 0{,}5\,\text{Hz}$
- (D) $f_{\text{ton}} = 440\,\text{Hz}$; $f_{\text{schweb}} = 4{,}0\,\text{Hz}$
- (E) $f_{\text{ton}} = 2{,}0\,\text{Hz}$; $f_{\text{schweb}} = 440\,\text{Hz}$

**Richtige Antwort:** D

**Erklärung:**
1. **Wahrgenommene Tonhöhe:**
   Das Gehör mittelt die beiden nahe beieinander liegenden Frequenzen; die wahrgenommene Schwingungshöhe entspricht dem arithmetischen Mittel:
   $$f_{\text{ton}} = \frac{f_1 + f_2}{2} = \frac{438\,\text{Hz} + 442\,\text{Hz}}{2} = 440\,\text{Hz} \quad (\text{Kammerton } a')$$
2. **Schwebungsfrequenz:**
   Die Schwebungsfrequenz (die Rate, mit der die Lautstärke an- und abschwillt) entspricht der absoluten Differenz beider Frequenzen:
   $$f_{\text{schweb}} = |f_2 - f_1| = 442\,\text{Hz} - 438\,\text{Hz} = 4{,}0\,\text{Hz}$$
Der Hörer nimmt somit den Kammerton $a'$ wahr, dessen Lautstärke viermal pro Sekunde pulsiert.

---

### Frage 125
**Kategorie:** Schwingungen und Wellen  
**Subkategorie:** Überlagerung von Wellen & Interferenz  
**Lernziel / Subskill:** Vergleich der Grundfrequenzen offener und geschlossener Pfeifen  
**Schwierigkeit:** Hard  
**Geschätzte Bearbeitungszeit:** 40 Sekunden

Zwei zylindrische akustische Resonanzrohre (Pfeifen) besitzen exakt dieselbe geometrische Länge von $L = 0{,}85\,\text{m}$. Rohr 1 ist **beidseitig offen** (an beiden Enden Schwingungsbäuche der Schallschnelle: $L = \frac{\lambda_1}{2}$). Rohr 2 ist **einseitig geschlossen** (am geschlossenen Ende Knoten, am offenen Ende Bauch: $L = \frac{\lambda_1'}{4}$).  
Welche Grundfrequenzen $f_1$ (Rohr 1) und $f_1'$ (Rohr 2) besitzen die beiden Resonanzrohre bei einer Schallgeschwindigkeit von $c = 340\,\text{m/s}$?

- (A) $f_1 = 100\,\text{Hz}$; $f_1' = 200\,\text{Hz}$
- (B) $f_1 = 200\,\text{Hz}$; $f_1' = 100\,\text{Hz}$ (das beidseitig offene Rohr klingt genau eine Oktave höher als das gleich lange einseitig geschlossene Rohr)
- (C) $f_1 = 400\,\text{Hz}$; $f_1' = 400\,\text{Hz}$
- (D) $f_1 = 340\,\text{Hz}$; $f_1' = 170\,\text{Hz}$
- (E) $f_1 = 200\,\text{Hz}$; $f_1' = 50\,\text{Hz}$

**Richtige Antwort:** B

**Erklärung:**
1. **Beidseitig offenes Rohr 1:**
   $$L = \frac{\lambda_1}{2} \implies \lambda_1 = 2 \cdot L = 2 \cdot 0{,}85\,\text{m} = 1{,}70\,\text{m}$$
   $$f_1 = \frac{c}{\lambda_1} = \frac{340\,\text{m/s}}{1{,}70\,\text{m}} = 200\,\text{Hz}$$
2. **Einseitig geschlossenes Rohr 2 (gedackte Pfeife):**
   $$L = \frac{\lambda_1'}{4} \implies \lambda_1' = 4 \cdot L = 4 \cdot 0{,}85\,\text{m} = 3{,}40\,\text{m}$$
   $$f_1' = \frac{c}{\lambda_1'} = \frac{340\,\text{m/s}}{3{,}40\,\text{m}} = 100\,\text{Hz}$$
Das beidseitig offene Rohr hat die doppelte Grundfrequenz des gleich langen einseitig geschlossenen Rohrs ($f_1 = 2 \cdot f_1'$, eine Oktave höher).
