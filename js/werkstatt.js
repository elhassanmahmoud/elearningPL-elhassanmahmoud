document.getElementById("werkstatt").innerHTML = `
<h2>Werkstattfertigung</h2>

<p>
Bei der Werkstattfertigung werden gleichartige <strong>"Verrichtungen" (Arbeiten)</strong> 
an der selben Maschine <strong>organisatorisch und räumlich zusammengefasst</strong>.
</p>

<h3>Verrichtungsprinzip</h3>

<p>
Im Gegensatz zur Fließfertigung (Objektprinzip) werden bei der Werkstattfertigung 
<strong>gleiche Arbeitsgänge räumlich gruppiert</strong> – unabhängig vom herzustellenden Produkt.
</p>

<div class="card-grid">
  <div class="card">
    <h4>Vorteile</h4>
    <p><strong>Fokussierung der Fertigung</strong> auf hohe Kompetenz einzelner Werkstätten</p>
    <p><strong>Hohe Flexibilität</strong> bei verschiedenen Produkten</p>
  </div>
  
  <div class="card">
    <h4>Nachteile</h4>
    <p><strong>Planung und Steuerung</strong> der Produktion hochkomplex und schwierig</p>
    <p><strong>Erhöhter Logistikaufwand</strong> durch vielfältige Transporte zwischen Werkstätten</p>
  </div>
</div>

<div class="example-box">
  <h4>Werkstattlayout bei AutoTech GmbH</h4>
  <p style="margin-bottom:24px;">Die Fertigung ist nach Verrichtungen organisiert:</p>
  
  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:20px;">
    <div style="background:white; padding:24px; border-radius:12px; text-align:center; border:2px solid var(--text-primary);">
      <h4 style="margin:0 0 16px 0;">Drehwerkstatt</h4>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Dreh 1</div>
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Dreh 2</div>
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Dreh 3</div>
      </div>
    </div>
    
    <div style="background:white; padding:24px; border-radius:12px; text-align:center; border:2px solid var(--text-primary);">
      <h4 style="margin:0 0 16px 0;">Fräswerkstatt</h4>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Fräs 1</div>
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Fräs 2</div>
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Fräs 3</div>
      </div>
    </div>
    
    <div style="background:white; padding:24px; border-radius:12px; text-align:center; border:2px solid var(--text-primary);">
      <h4 style="margin:0 0 16px 0;">Bohrwerkstatt</h4>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Bohr 1</div>
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Bohr 2</div>
        <div style="background:var(--card-bg); padding:8px; border-radius:6px; font-size:14px;">Bohr 3</div>
      </div>
    </div>
  </div>
  
  <div style="margin-top:32px; padding:20px; background:white; border-radius:12px;">
    <p style="text-align:center; margin:0;"><strong>Beispiel Produktwege:</strong></p>
    <p style="text-align:center; margin:8px 0 0 0;">
      <strong>Produkt 1 (Motorblock):</strong> Drehwerkstatt → Bohrwerkstatt → Fräswerkstatt<br>
      <strong>Produkt 2 (Getriebe):</strong> Drehwerkstatt → Fräswerkstatt → Bohrwerkstatt
    </p>
    <p style="text-align:center; margin-top:16px; font-size:14px; color:var(--text-tertiary);">
      → Jedes Produkt wählt seinen eigenen Weg durch die Werkstätten
    </p>
  </div>
</div>

<h3>Geeignet für Produktion</h3>

<div class="card-grid">
  <div class="card">
    <strong>Geringer Losgrößen</strong>
    <p>Kleine Stückzahlen wirtschaftlich produzieren</p>
  </div>
  <div class="card">
    <strong>Hoher Produktvielfalt</strong>
    <p>Viele verschiedene Varianten möglich</p>
  </div>
</div>

<h3>Fertigungsstrategien</h3>

<p>AutoTech nutzt verschiedene <strong>Fertigungsstrategien</strong> je nach Produkttyp:</p>

<table>
  <thead>
    <tr>
      <th>Strategie</th>
      <th>Beschreibung</th>
      <th>Beispiel bei AutoTech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>MTS</strong><br><small>Make to Stock</small></td>
      <td>Produkte werden auf Vorrat produziert basierend auf Prognosen</td>
      <td>Standard-Bremsscheiben</td>
    </tr>
    <tr>
      <td><strong>MTO</strong><br><small>Make to Order</small></td>
      <td>Produktion erst nach Kundenbestellung</td>
      <td>Spezialmaschinen</td>
    </tr>
    <tr>
      <td><strong>ATO</strong><br><small>Assemble to Order</small></td>
      <td>Komponenten auf Lager, Montage nach Bestellung</td>
      <td>Motorblöcke mit verschiedenen Optionen</td>
    </tr>
    <tr>
      <td><strong>CTO</strong><br><small>Configure to Order</small></td>
      <td>Konfiguration aus vorgegebenen Optionen</td>
      <td>Getriebe mit wählbaren Übersetzungen</td>
    </tr>
    <tr>
      <td><strong>ETO</strong><br><small>Engineer to Order</small></td>
      <td>Entwicklung und Produktion nach Kundenspezifikation</td>
      <td>Maßgeschneiderte Sensorkomponenten</td>
    </tr>
    <tr>
      <td><strong>BTO</strong><br><small>Build to Order</small></td>
      <td>Produktion nach Bestellung, Standardkomponenten auf Lager</td>
      <td>Angepasste Bremsanlagen</td>
    </tr>
  </tbody>
</table>

<div class="example-box">
  <h4>Praxisbeispiel: Fertigungsstrategien bei AutoTech</h4>
  <p>
    <strong>Standardmotoren (MTS):</strong> AutoTech produziert 5 gängige Motorblock-Varianten 
    auf Lager, um schnelle Lieferungen zu garantieren.
  </p>
  <p style="margin-top:12px;">
    <strong>Spezialmotoren (CTO):</strong> Kunden können aus 15 verschiedenen Optionen 
    (Leistung, Kühlsystem, Sensoren) konfigurieren. Produktion erst nach Bestellung.
  </p>
  <p style="margin-top:12px;">
    <strong>Prototypen (ETO):</strong> Für Entwicklungsprojekte werden komplett neue 
    Komponenten nach Kundenvorgaben entwickelt und gefertigt.
  </p>
</div>

<h3>Weitere Fertigungsarten im Vergleich</h3>

<div class="card-grid">
  <div class="card">
    <h4>Gruppenfertigung</h4>
    <p>Verbindung von Werkstatt- und Fließfertigung</p>
    <p style="margin-top:8px; font-size:14px;"><strong>Vorteil:</strong> Effizienz + Flexibilität</p>
    <p style="font-size:14px;"><strong>Beispiel:</strong> Fertigungsinsel für alle Motorvarianten</p>
  </div>
  
  <div class="card">
    <h4>Fließfertigung</h4>
    <p>Ausrichtung auf ein spezifisches Produkt</p>
    <p style="margin-top:8px; font-size:14px;"><strong>Vorteil:</strong> Maximale Effizienz</p>
    <p style="font-size:14px;"><strong>Beispiel:</strong> Massenproduktion Standard-Schrauben</p>
  </div>
</div>

<h3>Vergleich: Werkstatt vs. Fließfertigung</h3>

<table>
  <thead>
    <tr>
      <th>Kriterium</th>
      <th>Werkstattfertigung</th>
      <th>Fließfertigung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Flexibilität</strong></td>
      <td style="background:#d4edda;">✓ Sehr hoch</td>
      <td style="background:#f8d7da;">✗ Gering</td>
    </tr>
    <tr>
      <td><strong>Produktvielfalt</strong></td>
      <td style="background:#d4edda;">✓ Hoch</td>
      <td style="background:#f8d7da;">✗ Niedrig</td>
    </tr>
    <tr>
      <td><strong>Durchlaufzeit</strong></td>
      <td style="background:#f8d7da;">✗ Lang</td>
      <td style="background:#d4edda;">✓ Kurz</td>
    </tr>
    <tr>
      <td><strong>Transportaufwand</strong></td>
      <td style="background:#f8d7da;">✗ Hoch</td>
      <td style="background:#d4edda;">✓ Gering</td>
    </tr>
    <tr>
      <td><strong>Losgröße</strong></td>
      <td style="background:#d4edda;">✓ Klein möglich</td>
      <td style="background:#f8d7da;">✗ Groß erforderlich</td>
    </tr>
    <tr>
      <td><strong>Planungskomplexität</strong></td>
      <td style="background:#f8d7da;">✗ Hoch</td>
      <td style="background:#d4edda;">✓ Gering</td>
    </tr>
  </tbody>
</table>

<h3>Quiz: Werkstattfertigung</h3>

<div class="quiz-container">
  <div class="quiz-question">
    <p class="question-text">Frage 1: Was ist das Hauptmerkmal der Werkstattfertigung?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q6" value="a"> Gleichartige Verrichtungen werden räumlich zusammengefasst</label>
      <label><input type="radio" name="q6" value="b"> Produkte durchlaufen eine feste Reihenfolge</label>
      <label><input type="radio" name="q6" value="c"> Alle Maschinen arbeiten gleichzeitig</label>
    </div>
    <button onclick="checkAnswer('q6','a')">Antwort prüfen</button>
    <p id="q6-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 2: Welcher Vorteil ergibt sich NICHT aus der Werkstattfertigung?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q7" value="a"> Hohe Flexibilität</label>
      <label><input type="radio" name="q7" value="b"> Kurze Durchlaufzeiten</label>
      <label><input type="radio" name="q7" value="c"> Geeignet für kleine Losgrößen</label>
    </div>
    <button onclick="checkAnswer('q7','b')">Antwort prüfen</button>
    <p id="q7-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 3: Warum ist der Logistikaufwand bei Werkstattfertigung erhöht?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q8" value="a"> Zu viele Mitarbeiter</label>
      <label><input type="radio" name="q8" value="b"> Vielfältige Transporte zwischen den Werkstätten</label>
      <label><input type="radio" name="q8" value="c"> Zu wenig Maschinen</label>
    </div>
    <button onclick="checkAnswer('q8','b')">Antwort prüfen</button>
    <p id="q8-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 4: Was bedeutet MTS (Make to Stock)?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q17" value="a"> Produkte werden auf Vorrat produziert basierend auf Prognosen</label>
      <label><input type="radio" name="q17" value="b"> Produktion erst nach Kundenbestellung</label>
      <label><input type="radio" name="q17" value="c"> Montage nach Bestellung</label>
    </div>
    <button onclick="checkAnswer('q17','a')">Antwort prüfen</button>
    <p id="q17-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 5: Welche Fertigungsstrategie passt zu "Kunde konfiguriert aus vorgegebenen Optionen"?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q18" value="a"> Make to Stock (MTS)</label>
      <label><input type="radio" name="q18" value="b"> Configure to Order (CTO)</label>
      <label><input type="radio" name="q18" value="c"> Engineer to Order (ETO)</label>
    </div>
    <button onclick="checkAnswer('q18','b')">Antwort prüfen</button>
    <p id="q18-result"></p>
  </div>
</div>

<div class="nav-buttons">
  <button class="nav-btn prev" onclick="showModule('abcxyz')">← Zurück zu ABC-XYZ</button>
  <button class="nav-btn next" onclick="showModule('zielkonflikt')">Weiter zu Zielkonflikte →</button>
</div>
`;