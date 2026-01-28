document.getElementById("home").innerHTML = `
<div style="text-align:center; margin-bottom:64px;">
  <h1>Fallstudie: AutoTech GmbH</h1>
  <p style="font-size:20px; color:var(--text-secondary); margin-top:16px;">
    Digitale Produktions- und Logistiksteuerung in einem Automobilzulieferer
  </p>
  <p style="font-size:17px; color:var(--text-tertiary); margin-top:8px;">
    E-Learning im Modul B5.2 Produktionswirtschaft & Logistik
  </p>
</div>

<div class="card-grid">
  <div class="card">
    <div style="display:flex; align-items:center; margin-bottom:16px;">
      <span class="symbol symbol-primary">◼</span>
      <h3 style="margin:0;">Unternehmen</h3>
    </div>
    <p>
      Die AutoTech GmbH ist ein mittelständischer Automobilzulieferer für Bremsanlagen,
      Getriebegehäuse und Sensorkomponenten. Hohe Variantenvielfalt und Kostendruck
      prägen die Produktion.
    </p>
  </div>

  <div class="card">
    <div style="display:flex; align-items:center; margin-bottom:16px;">
      <span class="symbol symbol-warning">▲</span>
      <h3 style="margin:0;">Produktionsstruktur</h3>
    </div>
    <ul style="margin:0;">
      <li>Werkstattfertigung (Drehen, Fräsen, Bohren)</li>
      <li>Kleine Losgrößen</li>
      <li>Hoher Koordinationsaufwand</li>
    </ul>
  </div>

  <div class="card">
    <div style="display:flex; align-items:center; margin-bottom:16px;">
      <span class="symbol symbol-success">●</span>
      <h3 style="margin:0;">Logistik</h3>
    </div>
    <ul style="margin:0;">
      <li>A-Teile: Motorblöcke, Steuergeräte</li>
      <li>C-Teile: Schrauben, Dichtungen</li>
      <li>Schwankende Ersatzteilbedarfe</li>
    </ul>
  </div>

  <div class="card">
    <div style="display:flex; align-items:center; margin-bottom:16px;">
      <span class="symbol symbol-secondary">■</span>
      <h3 style="margin:0;">Industrie 4.0</h3>
    </div>
    <ul style="margin:0;">
      <li>Maschinensensorik & Big Data</li>
      <li>Echtzeit-Transparenz</li>
      <li>Predictive Maintenance</li>
    </ul>
  </div>
</div>

<div class="info-box" style="margin-top:48px;">
  <h2 style="color:white; margin-top:0;">Lernziel</h2>
  <p style="font-size:18px;">
    Anhand der AutoTech GmbH werden drei zentrale Methoden der Produktionswirtschaft angewendet:
  </p>
  <ol style="font-size:17px; margin-left:24px;">
    <li><strong style="color:white;">Big Data (Industrie 4.0):</strong> Echtzeitdatenanalyse zur Produktionsoptimierung</li>
    <li><strong style="color:white;">ABC-XYZ-Analyse:</strong> Lagerverwaltung und Bestandsoptimierung</li>
    <li><strong style="color:white;">Werkstattfertigung:</strong> Flexible Fertigungsorganisation nach Verrichtungsprinzip</li>
  </ol>
  <p style="font-size:17px; margin-top:24px;">
    Zusätzlich werden die <strong style="color:white;">Zielkonflikte</strong> zwischen diesen Methoden analysiert und 
    Lösungsansätze für das Unternehmen entwickelt.
  </p>
</div>

<div style="text-align:center; margin-top:48px;">
  <button onclick="showModule('bigdata')" style="padding:16px 48px; font-size:17px; border-radius:12px;">
    Zur ersten Methode: Big Data →
  </button>
</div>
`;