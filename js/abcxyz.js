document.getElementById("abcxyz").innerHTML = `
<h2>ABC-XYZ-Analyse</h2>

<p>
Die ABC-XYZ-Analyse kombiniert zwei klassische Methoden zur <strong>Bewertung und Verteilung der Waren im Lager</strong>:
die <strong>ABC-Analyse</strong> (Wertanalyse) und die <strong>XYZ-Analyse</strong> (Verbrauchsanalyse).
</p>

<h3>ABC-Analyse: Wertanalyse</h3>

<p><strong>Wert × Verbrauch = Verbrauchswert für den Artikel</strong></p>
<p>Artikel werden nach ihrem Wertanteil am Gesamtverbrauch klassifiziert:</p>

<table>
  <thead>
    <tr>
      <th>Klasse</th>
      <th>Wertanteil</th>
      <th>Artikelanteil</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge badge-danger">A</span></td>
      <td>~80%</td>
      <td>~20%</td>
      <td>Wenige, hochwertige Artikel → engmaschige Kontrolle</td>
    </tr>
    <tr>
      <td><span class="badge badge-warning">B</span></td>
      <td>~15%</td>
      <td>~30%</td>
      <td>Mittlerer Wertanteil → moderate Kontrolle</td>
    </tr>
    <tr>
      <td><span class="badge badge-success">C</span></td>
      <td>~5%</td>
      <td>~50%</td>
      <td>Viele, geringwertige Artikel → einfache Kontrolle</td>
    </tr>
  </tbody>
</table>

<h3>XYZ-Analyse: Verbrauchsanalyse</h3>

<p><strong>Variationskoeffizient = Standardabweichung / Mittelwert</strong></p>
<p>Artikel werden nach der Vorhersagbarkeit ihres Verbrauchs klassifiziert:</p>

<table>
  <thead>
    <tr>
      <th>Klasse</th>
      <th>Variationskoeffizient</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge badge-primary">X</span></td>
      <td>0 - 0,49</td>
      <td>Konstanter, gut planbarer Verbrauch</td>
    </tr>
    <tr>
      <td><span class="badge badge-warning">Y</span></td>
      <td>0,5 - 0,99</td>
      <td>Schwankender Verbrauch</td>
    </tr>
    <tr>
      <td><span class="badge badge-danger">Z</span></td>
      <td>> 1</td>
      <td>Unregelmäßiger, sporadischer Verbrauch</td>
    </tr>
  </tbody>
</table>

<h3>RSU-Klassifizierung (Alternative Einteilung)</h3>

<p>Neben XYZ wird teilweise auch die <strong>RSU-Klassifizierung</strong> verwendet:</p>

<table>
  <thead>
    <tr>
      <th>Klasse</th>
      <th>Bedeutung</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>R-Artikel</strong></td>
      <td>Regelmäßiger Verbrauch</td>
      <td>Konstanter und gleichmäßiger Verbrauch (entspricht X)</td>
    </tr>
    <tr>
      <td><strong>S-Artikel</strong></td>
      <td>Saisonaler Verbrauch</td>
      <td>Schwankungen durch saisonale Nachfrage (entspricht Y)</td>
    </tr>
    <tr>
      <td><strong>U-Artikel</strong></td>
      <td>Unregelmäßiger Verbrauch</td>
      <td>Unvorhersehbarer Verbrauch (entspricht Z)</td>
    </tr>
  </tbody>
</table>

<div class="example-box">
  <h4>Praxisbeispiel: AutoTech GmbH Lager</h4>
  
  <table style="margin-top:16px;">
    <thead>
      <tr>
        <th>Nummer</th>
        <th>Artikel</th>
        <th>Wert</th>
        <th>Verbrauch</th>
        <th>Wertanteil</th>
        <th>VK</th>
        <th>Klasse</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffe8e8;">
        <td>1007</td>
        <td><strong>Motorblock</strong></td>
        <td>€136,20</td>
        <td>4.000,00</td>
        <td>43,63%</td>
        <td>0,2</td>
        <td><span class="badge badge-primary">A-X</span></td>
      </tr>
      <tr>
        <td>1009</td>
        <td>Getriebe</td>
        <td>€37,85</td>
        <td>12.000,00</td>
        <td>36,37%</td>
        <td>0,7</td>
        <td><span class="badge badge-warning">A-Y</span></td>
      </tr>
      <tr>
        <td>1004</td>
        <td>Bremscheibe</td>
        <td>€17,50</td>
        <td>6.000,00</td>
        <td>8,41%</td>
        <td>0,3</td>
        <td><span class="badge badge-success">B-X</span></td>
      </tr>
      <tr>
        <td>1006</td>
        <td>Stoßdämpfer</td>
        <td>€6,25</td>
        <td>8.000,00</td>
        <td>4,00%</td>
        <td>0,15</td>
        <td><span class="badge badge-success">C-X</span></td>
      </tr>
      <tr>
        <td>1001</td>
        <td>Schrauben M8</td>
        <td>€3,25</td>
        <td>10.000,00</td>
        <td>2,60%</td>
        <td>1,2</td>
        <td><span class="badge badge-danger">C-Z</span></td>
      </tr>
    </tbody>
  </table>
  
  <p style="margin-top:20px;">
  <strong>Strategie für A-X Artikel (Motorblock):</strong><br>
  Hoher Wert + konstanter Verbrauch → <strong>Just-in-Time Lieferung</strong>, 
  niedrige Lagerbestände, engmaschige Kontrolle.
  </p>
  
  <p>
  <strong>Strategie für C-Z Artikel (Schrauben):</strong><br>
  Geringer Wert + sporadischer Verbrauch → <strong>Kein Lagerbestand</strong>, 
  Bestellung bei Bedarf.
  </p>
</div>

<h3>Die 9-Felder-Matrix: Kombination beider Analysen</h3>

<div class="matrix-grid">
  <div class="matrix-cell" style="background:#d4edda; border-color:#28a745;">
    <strong>A-X</strong>
    <p style="margin:8px 0; font-size:14px;">Gut planbar</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Just-in-Time oder Just-in-Sequence</p>
  </div>
  <div class="matrix-cell" style="background:#fff3cd; border-color:#ffc107;">
    <strong>A-Y</strong>
    <p style="margin:8px 0; font-size:14px;">Schwer planbar</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Sicherheitsbestand</p>
  </div>
  <div class="matrix-cell" style="background:#f8d7da; border-color:#dc3545;">
    <strong>A-Z</strong>
    <p style="margin:8px 0; font-size:14px;">Keine Planung nötig</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Einzelbeschaffung</p>
  </div>
  
  <div class="matrix-cell" style="background:#d1ecf1; border-color:#17a2b8;">
    <strong>B-X</strong>
    <p style="margin:8px 0; font-size:14px;">Gut planbar</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Bestellung nach Verbrauch</p>
  </div>
  <div class="matrix-cell" style="background:#e2e3e5; border-color:#6c757d;">
    <strong>B-Y</strong>
    <p style="margin:8px 0; font-size:14px;">Moderat</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Regelmäßige Kontrolle</p>
  </div>
  <div class="matrix-cell" style="background:#f8d7da; border-color:#dc3545;">
    <strong>B-Z</strong>
    <p style="margin:8px 0; font-size:14px;">Sporadisch</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Bei Bedarf bestellen</p>
  </div>
  
  <div class="matrix-cell" style="background:#d4edda; border-color:#28a745;">
    <strong>C-X</strong>
    <p style="margin:8px 0; font-size:14px;">Konstant</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Großbestellung</p>
  </div>
  <div class="matrix-cell" style="background:#d1ecf1; border-color:#17a2b8;">
    <strong>C-Y</strong>
    <p style="margin:8px 0; font-size:14px;">Schwankend</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Mindestbestand</p>
  </div>
  <div class="matrix-cell" style="background:#e2e3e5; border-color:#6c757d;">
    <strong>C-Z</strong>
    <p style="margin:8px 0; font-size:14px;">Unregelmäßig</p>
    <p style="font-size:13px; color:var(--text-tertiary);">Kein Lager</p>
  </div>
</div>

<h3>Quiz: ABC-XYZ-Analyse</h3>

<div class="quiz-container">
  <div class="quiz-question">
    <p class="question-text">Frage 1: Ein Motorblock kostet €136,20 pro Stück bei einem Jahresverbrauch von 4.000 Stück und VK von 0,2. Wie wird er klassifiziert?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q3" value="a"> A-X (hoher Wert, konstanter Verbrauch)</label>
      <label><input type="radio" name="q3" value="b"> B-Y (mittlerer Wert, schwankend)</label>
      <label><input type="radio" name="q3" value="c"> C-Z (niedriger Wert, sporadisch)</label>
    </div>
    <button onclick="checkAnswer('q3','a')">Antwort prüfen</button>
    <p id="q3-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 2: Welche Lagerstrategie ist für C-Z Artikel am sinnvollsten?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q4" value="a"> Just-in-Time Lieferung</label>
      <label><input type="radio" name="q4" value="b"> Kein Lagerbestand, Bestellung bei Bedarf</label>
      <label><input type="radio" name="q4" value="c"> Tägliche Nachbestellung</label>
    </div>
    <button onclick="checkAnswer('q4','b')">Antwort prüfen</button>
    <p id="q4-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 3: Was bedeutet ein Variationskoeffizient von 0,7?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q5" value="a"> X-Klasse: konstanter Verbrauch</label>
      <label><input type="radio" name="q5" value="b"> Y-Klasse: schwankender Verbrauch</label>
      <label><input type="radio" name="q5" value="c"> Z-Klasse: sporadischer Verbrauch</label>
    </div>
    <button onclick="checkAnswer('q5','b')">Antwort prüfen</button>
    <p id="q5-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 4: Berechnen Sie den Variationskoeffizienten: Mittelwert = 50, Standardabweichung = 10</p>
    <div class="quiz-options">
      <label><input type="radio" name="q15" value="a"> VK = 0,2 → Klasse X</label>
      <label><input type="radio" name="q15" value="b"> VK = 0,5 → Klasse Y</label>
      <label><input type="radio" name="q15" value="c"> VK = 5,0 → Klasse Z</label>
    </div>
    <button onclick="checkAnswer('q15','a')">Antwort prüfen</button>
    <p id="q15-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 5: Was bedeutet "R-Artikel" in der RSU-Klassifizierung?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q16" value="a"> Regelmäßiger Verbrauch (konstant und gleichmäßig)</label>
      <label><input type="radio" name="q16" value="b"> Reduzierter Verbrauch</label>
      <label><input type="radio" name="q16" value="c"> Reparaturbedürftiger Artikel</label>
    </div>
    <button onclick="checkAnswer('q16','a')">Antwort prüfen</button>
    <p id="q16-result"></p>
  </div>
</div>

<div class="nav-buttons">
  <button class="nav-btn prev" onclick="showModule('bigdata')">← Zurück zu Big Data</button>
  <button class="nav-btn next" onclick="showModule('werkstatt')">Weiter zu Werkstattfertigung →</button>
</div>
`;