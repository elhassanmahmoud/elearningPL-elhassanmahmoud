document.getElementById("bigdata").innerHTML = `
<h2>Industrie 4.0 – Big Data</h2>

<p>
In der Industrie 4.0 werden <strong>große Datenmengen aus verschiedenen Quellen gesammelt, 
statistisch ausgewertet und interpretiert</strong>. Ziel ist es, Produktionsprozesse 
transparent, effizient und flexibel zu steuern.
</p>

<h3>Datenquellen</h3>
<p>Bei AutoTech GmbH werden Daten aus folgenden Quellen erfasst:</p>

<div class="card-grid">
  <div class="card">
    <h4>Produktionsmittel</h4>
    <p>Technische Anlagen, Maschinen, Werkzeuge mit Sensoren für Temperatur, Vibration, Laufzeit</p>
  </div>
  
  <div class="card">
    <h4>Smart Devices</h4>
    <p>Smartphone, Tablet, Smart Watch der Mitarbeitenden und Instandhalter</p>
  </div>
  
  <div class="card">
    <h4>IT-Systeme</h4>
    <p>ERP-Systeme, CRM-Systeme, BI-Systeme</p>
  </div>
</div>

<h3>Echtzeit-Entscheidungen</h3>
<p>Dadurch können bei AutoTech <strong>Entscheidungen in Echtzeit</strong> getroffen werden, was zu folgenden <strong>Optimierungspotenzialen</strong> führt:</p>

<div class="card-grid">
  <div class="card">
    <h4>Produktqualität</h4>
    <p>Optimierung der Produktqualität durch kontinuierliche Überwachung</p>
  </div>
  
  <div class="card">
    <h4>Energieeinsparungen</h4>
    <p>Reduzierung des Energieverbrauchs durch intelligente Steuerung</p>
  </div>
  
  <div class="card">
    <h4>Anlagennutzung</h4>
    <p>Verbesserte Maschinen- und Anlagennutzung durch Predictive Maintenance</p>
  </div>
</div>

<div class="example-box">
  <h4>Praxisbeispiel: Predictive Maintenance</h4>
  <p>
    Sensoren an Fräsmaschinen melden Temperaturanstieg und erhöhte Schwingungen.
    Das Big-Data-System erkennt ein Ausfallrisiko und löst automatisch eine Wartung aus,
    <strong>bevor es zu Produktionsstillständen kommt</strong>.
  </p>
  <p style="margin-top:16px;">
    <strong>Ergebnis:</strong> Vermeidung von ungeplanten Ausfällen und Kosteneinsparungen 
    durch vorausschauende Instandhaltung.
  </p>
</div>

<h3>Anwendungsbereiche</h3>

<table>
  <thead>
    <tr>
      <th>Bereich</th>
      <th>Beschreibung</th>
      <th>Nutzen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Volumenanalyse</strong></td>
      <td>Paketvolumen wird vorausgesagt</td>
      <td>Optimierung der Ressourcenverteilung und der Kosten</td>
    </tr>
    <tr>
      <td><strong>Paketverfolgung</strong></td>
      <td>Wichtige Zustandsdaten analysiert</td>
      <td>Sicherer, problemloser Transport</td>
    </tr>
    <tr>
      <td><strong>Routenoptimierung</strong></td>
      <td>Potentielle Routen berechnet</td>
      <td>Entscheidungsgrundlage Routenwahl</td>
    </tr>
    <tr>
      <td><strong>Transparenz</strong></td>
      <td>Echtzeiten verschiedener Systeme</td>
      <td>Proaktives Risikomanagement</td>
    </tr>
  </tbody>
</table>

<h3>Weitere Industrie 4.0 Technologien</h3>

<div class="card-grid">
  <div class="card">
    <h4>Augmented Reality (AR)</h4>
    <p><strong>Definition:</strong> Erweiterung der realen Welt um virtuelle Aspekte</p>
    <p style="margin-top:12px;"><strong>Anwendung bei AutoTech:</strong></p>
    <ul style="margin:8px 0 0 20px; font-size:15px;">
      <li>Wartung mit AR-Brillen (Remote Maintenance)</li>
      <li>Teilekommissionierung im Lager</li>
      <li>Virtuelles Training für neue Mitarbeiter</li>
    </ul>
  </div>

  <div class="card">
    <h4>3D-Druck / Additive Manufacturing</h4>
    <p><strong>Definition:</strong> Schichtweiser Aufbau von Werkstücken aus CAD-Daten</p>
    <p style="margin-top:12px;"><strong>Anwendung bei AutoTech:</strong></p>
    <ul style="margin:8px 0 0 20px; font-size:15px;">
      <li>Rapid Prototyping in der Entwicklung</li>
      <li>Ersatzteilproduktion on-demand</li>
      <li>Optimierte Formgeometrien (z.B. Kühlkanäle)</li>
    </ul>
  </div>

  <div class="card">
    <h4>Industrial IoT (IIoT)</h4>
    <p><strong>Definition:</strong> Vernetzung von Maschinen und Materialien</p>
    <p style="margin-top:12px;"><strong>Anwendung bei AutoTech:</strong></p>
    <ul style="margin:8px 0 0 20px; font-size:15px;">
      <li>RFID-Tags steuern Werkstücke durch Produktion</li>
      <li>Maschinen passen sich automatisch an</li>
      <li>Dezentrale Entscheidungsfindung in Echtzeit</li>
    </ul>
  </div>
</div>

<div class="example-box">
  <h4>Praxisbeispiel: IIoT bei AutoTech</h4>
  <p>
    Motorblöcke werden mit RFID-Tags ausgestattet. Jede Arbeitsstation liest die Informationen 
    aus und passt automatisch die Bearbeitungsparameter an. Das Werkstück "steuert sich selbst" 
    durch die Produktion.
  </p>
  <p style="margin-top:12px;">
    <strong>Ablauf:</strong> Initialisierung → Bohren → Härten → Montage → Kamera-Check → Verpackung
  </p>
</div>

<h3>Integration in Industrie 4.0</h3>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:24px 0;">
  <div class="card">
    <h4>Horizontale Integration</h4>
    <p>Vernetzung von IT-Systemen verschiedener Unternehmen, Lieferanten und Kunden sowie 
    Abteilungen (Engineering, Produktion, Service)</p>
  </div>
  
  <div class="card">
    <h4>Vertikale Integration</h4>
    <p>Durchgängige Datenvernetzung von der obersten Unternehmensebene (ERP-System) 
    bis zur Sensorebene der Maschinen</p>
  </div>
</div>

<h3>Quiz: Big Data in Industrie 4.0</h3>

<div class="quiz-container">
  <div class="quiz-question">
    <p class="question-text">Frage 1: Was ist das Hauptziel von Big Data in der Produktion?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q1" value="a"> Erhöhung der Lagerbestände</label>
      <label><input type="radio" name="q1" value="b"> Echtzeit-Optimierung von Prozessen</label>
      <label><input type="radio" name="q1" value="c"> Abschaffung von IT-Systemen</label>
    </div>
    <button onclick="checkAnswer('q1','b')">Antwort prüfen</button>
    <p id="q1-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 2: Welche Quelle liefert typischerweise Sensordaten?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q2" value="a"> Produktionsmaschinen</label>
      <label><input type="radio" name="q2" value="b"> Kundenreklamationen</label>
      <label><input type="radio" name="q2" value="c"> Lieferverträge</label>
    </div>
    <button onclick="checkAnswer('q2','a')">Antwort prüfen</button>
    <p id="q2-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 3: Was ist Augmented Reality (AR)?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q13" value="a"> Erweiterung der realen Welt um virtuelle Aspekte</label>
      <label><input type="radio" name="q13" value="b"> Vollständig virtuelle Umgebung</label>
      <label><input type="radio" name="q13" value="c"> Roboter-Steuerungssystem</label>
    </div>
    <button onclick="checkAnswer('q13','a')">Antwort prüfen</button>
    <p id="q13-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 4: Wofür steht IIoT?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q14" value="a"> International Internet of Things</label>
      <label><input type="radio" name="q14" value="b"> Industrial Internet of Things</label>
      <label><input type="radio" name="q14" value="c"> Integrated Information Technology</label>
    </div>
    <button onclick="checkAnswer('q14','b')">Antwort prüfen</button>
    <p id="q14-result"></p>
  </div>
</div>

<div class="nav-buttons">
  <button class="nav-btn prev" onclick="showModule('home')">← Zurück zum Start</button>
  <button class="nav-btn next" onclick="showModule('abcxyz')">Weiter zu ABC-XYZ →</button>
</div>
`;