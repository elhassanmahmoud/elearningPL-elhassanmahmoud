document.getElementById("zielkonflikt").innerHTML = `
<h2>Zielkonflikte in der Produktionswirtschaft</h2>

<p>
Die drei vorgestellten Methoden führen zu unterschiedlichen Optimierungszielen, 
die sich teilweise <strong>widersprechen</strong>. Dies sind typische <strong>Zielkonflikte</strong> 
in der Produktionswirtschaft.
</p>

<div style="background:var(--card-bg); border-radius:16px; padding:32px; margin:32px 0; border:1px solid var(--gray-2);">
  <h3 style="margin-top:0; color:var(--text-primary);">Hauptzielkonflikt bei AutoTech GmbH</h3>
  <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:24px; align-items:stretch; margin-top:24px;">
    <div style="background:white; padding:24px; border-radius:12px; border:1px solid var(--gray-3); min-height:180px; display:flex; flex-direction:column;">
      <h4 style="margin-top:0;">Big Data & Werkstattfertigung</h4>
      <p style="margin:8px 0;"><strong>Fordern:</strong></p>
      <ul style="margin:10px 0 0 20px; flex-grow:1; color:var(--text-secondary);">
        <li>Hohe Flexibilität</li>
        <li>Produktvielfalt</li>
        <li>Schnelle Anpassung</li>
      </ul>
    </div>
    <div style="font-size:32px; font-weight:800; color:var(--text-primary); display:flex; align-items:center;">VS</div>
    <div style="background:white; padding:24px; border-radius:12px; border:1px solid var(--gray-3); min-height:180px; display:flex; flex-direction:column;">
      <h4 style="margin-top:0;">ABC-XYZ-Analyse</h4>
      <p style="margin:8px 0;"><strong>Fordert:</strong></p>
      <ul style="margin:10px 0 0 20px; flex-grow:1; color:var(--text-secondary);">
        <li>Kosteneffizienz</li>
        <li>Niedrige Lagerbestände</li>
        <li>Standardisierung</li>
      </ul>
    </div>
  </div>
</div>

<h3>Drei zentrale Zielkonflikte:</h3>

<div class="card" style="border-left:4px solid var(--text-primary); min-height:300px;">
  <h4>1. Big Data ⚔ ABC-XYZ-Analyse</h4>
  
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:16px 0;">
    <div style="background:var(--card-bg); padding:16px; border-radius:8px; border:1px solid var(--gray-2);">
      <p style="margin:0 0 8px 0;"><strong>Big Data möchte:</strong></p>
      <p style="font-size:15px; margin:0; color:var(--text-secondary);">Echtzeitdaten erfassen und sofort reagieren → schnelle Produktion verschiedener Varianten</p>
    </div>
    <div style="background:var(--card-bg); padding:16px; border-radius:8px; border:1px solid var(--gray-2);">
      <p style="margin:0 0 8px 0;"><strong>ABC-XYZ möchte:</strong></p>
      <p style="font-size:15px; margin:0; color:var(--text-secondary);">Lagerbestände minimieren, nur A-X Artikel just-in-time</p>
    </div>
  </div>
  
  <div style="background:white; padding:16px; border-radius:8px; margin-top:16px; border:1px solid var(--gray-2);">
    <p style="margin:0 0 8px 0;"><strong>Das Problem:</strong></p>
    <p style="margin:0 0 8px 0; font-size:15px; color:var(--text-secondary);">Big Data erkennt Nachfragespitzen für Motorvarianten. ABC-XYZ hat nur Standardteile vorrätig.</p>
    <p style="margin:0; font-weight:600; font-size:15px;">→ Entweder hohe Lagerkosten ODER lange Lieferzeiten</p>
  </div>
</div>

<div class="card" style="border-left:4px solid var(--text-primary); min-height:300px;">
  <h4>2. Werkstattfertigung ⚔ ABC-XYZ-Analyse</h4>
  
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:16px 0;">
    <div style="background:var(--card-bg); padding:16px; border-radius:8px; border:1px solid var(--gray-2);">
      <p style="margin:0 0 8px 0;"><strong>Werkstattfertigung möchte:</strong></p>
      <p style="font-size:15px; margin:0; color:var(--text-secondary);">Hohe Flexibilität durch spezialisierte Werkstätten</p>
    </div>
    <div style="background:var(--card-bg); padding:16px; border-radius:8px; border:1px solid var(--gray-2);">
      <p style="margin:0 0 8px 0;"><strong>ABC-XYZ möchte:</strong></p>
      <p style="font-size:15px; margin:0; color:var(--text-secondary);">Klare Prognosen und standardisierte Prozesse</p>
    </div>
  </div>
  
  <div style="background:white; padding:16px; border-radius:8px; margin-top:16px; border:1px solid var(--gray-2);">
    <p style="margin:0 0 8px 0;"><strong>Das Problem:</strong></p>
    <p style="margin:0 0 8px 0; font-size:15px; color:var(--text-secondary);">Werkstattfertigung erzeugt viele Varianten mit unterschiedlichen Durchlaufzeiten. Präzise XYZ-Prognosen unmöglich.</p>
    <p style="margin:0; font-weight:600; font-size:15px;">→ Entweder hohe Sicherheitsbestände ODER häufige Fehlteile</p>
  </div>
  
  <div class="example-box" style="margin-top:16px; font-size:15px;">
    <p style="margin:0;"><strong>Beispiel:</strong> AutoTech produziert 15 Motorblock-Varianten. Jede hat andere Bearbeitungszeiten (45-120 Min). 
    ABC-XYZ kann keinen stabilen VK berechnen → alle als Z-Artikel → hohe Lagerkosten.</p>
  </div>
</div>

<div class="card" style="border-left:4px solid var(--text-primary); min-height:300px;">
  <h4>3. Big Data ⚔ Werkstattfertigung</h4>
  
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:16px 0;">
    <div style="background:var(--card-bg); padding:16px; border-radius:8px; border:1px solid var(--gray-2);">
      <p style="margin:0 0 8px 0;"><strong>Big Data möchte:</strong></p>
      <p style="font-size:15px; margin:0; color:var(--text-secondary);">Standardisierte, vorhersagbare Prozesse für Algorithmen</p>
    </div>
    <div style="background:var(--card-bg); padding:16px; border-radius:8px; border:1px solid var(--gray-2);">
      <p style="margin:0 0 8px 0;"><strong>Werkstattfertigung möchte:</strong></p>
      <p style="font-size:15px; margin:0; color:var(--text-secondary);">Individuelle Bearbeitungswege und Flexibilität</p>
    </div>
  </div>
  
  <div style="background:white; padding:16px; border-radius:8px; margin-top:16px; border:1px solid var(--gray-2);">
    <p style="margin:0 0 8px 0;"><strong>Das Problem:</strong></p>
    <p style="margin:0 0 8px 0; font-size:15px; color:var(--text-secondary);">Big Data-Algorithmen brauchen gleichförmige Prozesse. Werkstattfertigung erzeugt hochvariable Prozesse.</p>
    <p style="margin:0; font-weight:600; font-size:15px;">→ Entweder schlechte Datenqualität ODER Einschränkung der Flexibilität</p>
  </div>
</div>

<h3>Lösungsstrategien für AutoTech GmbH</h3>

<div class="card-grid">
  <div class="card" style="border-top:4px solid var(--text-primary);">
    <h4>1. Hybridansatz</h4>
    <p style="color:var(--text-secondary);">Kombination von Fließfertigung (Standard) und Werkstatt (Spezial)</p>
    <div style="background:var(--card-bg); padding:12px; border-radius:8px; margin-top:12px; font-size:14px;">
      <strong>→ Standardmotoren:</strong> Fließfertigung + ABC-XYZ<br>
      <strong>→ Spezialmotoren:</strong> Werkstatt + Big Data
    </div>
  </div>
  
  <div class="card" style="border-top:4px solid var(--text-primary);">
    <h4>2. Priorisierung</h4>
    <p style="color:var(--text-secondary);">Klare Zielhierarchie nach Artikelklasse</p>
    <div style="background:var(--card-bg); padding:12px; border-radius:8px; margin-top:12px; font-size:14px;">
      <strong>→ A-X Artikel:</strong> Kosten minimieren<br>
      <strong>→ B/C Artikel:</strong> Flexibilität maximieren
    </div>
  </div>
  
  <div class="card" style="border-top:4px solid var(--text-primary);">
    <h4>3. Modularisierung</h4>
    <p style="color:var(--text-secondary);">Standardmodule kombinieren statt Einzelfertigung</p>
    <div style="background:var(--card-bg); padding:12px; border-radius:8px; margin-top:12px; font-size:14px;">
      <strong>→ Basismotor:</strong> Standardisiert (ABC-XYZ)<br>
      <strong>→ Zusatzkomponenten:</strong> Flexibel (Werkstatt)
    </div>
  </div>
  
  <div class="card" style="border-top:4px solid var(--text-primary);">
    <h4>4. Dynamische Anpassung</h4>
    <p style="color:var(--text-secondary);">Big Data für flexible Umplanung nutzen</p>
    <div style="background:var(--card-bg); padding:12px; border-radius:8px; margin-top:12px; font-size:14px;">
      <strong>→ Echtzeitdaten:</strong> ABC-XYZ anpassen<br>
      <strong>→ Kapazitäten:</strong> Dynamisch steuern
    </div>
  </div>
</div>

<div style="background:var(--card-bg); border-radius:16px; padding:40px; margin:48px 0; border:1px solid var(--gray-2);">
  <h3 style="margin-top:0;">Fazit</h3>
  <p style="font-size:18px;">
    Es gibt <strong>keine perfekte Lösung</strong> für alle Zielkonflikte. AutoTech GmbH muss je nach 
    Produkttyp, Marktsituation und Strategie entscheiden:
  </p>
  <ul style="font-size:17px; margin-left:24px; color:var(--text-secondary);">
    <li style="margin-bottom:12px;"><strong style="color:var(--text-primary);">Kostenführerschaft:</strong> ABC-XYZ im Fokus</li>
    <li style="margin-bottom:12px;"><strong style="color:var(--text-primary);">Differenzierung:</strong> Big Data + Werkstatt für Individualisierung</li>
    <li style="margin-bottom:12px;"><strong style="color:var(--text-primary);">Balanced Approach:</strong> Hybridmodell mit Produktkategorien</li>
  </ul>
</div>

<h3>Quiz: Zielkonflikte</h3>

<div class="quiz-container">
  <div class="quiz-question">
    <p class="question-text">Frage 1: Warum entsteht ein Zielkonflikt zwischen Big Data und ABC-XYZ?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q9" value="a"> Big Data ist zu teuer</label>
      <label><input type="radio" name="q9" value="b"> Big Data will flexibel reagieren, ABC-XYZ will Bestände minimieren</label>
      <label><input type="radio" name="q9" value="c"> ABC-XYZ kann keine Daten verarbeiten</label>
    </div>
    <button onclick="checkAnswer('q9','b')">Antwort prüfen</button>
    <p id="q9-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 2: Werkstattfertigung produziert 15 Varianten mit unterschiedlichen Durchlaufzeiten. Warum ist das ein Problem für ABC-XYZ?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q10" value="a"> Zu hohe Kosten</label>
      <label><input type="radio" name="q10" value="b"> Variable Prozesse erschweren präzise Verbrauchsprognosen</label>
      <label><input type="radio" name="q10" value="c"> Zu wenig Lagerfläche</label>
    </div>
    <button onclick="checkAnswer('q10','b')">Antwort prüfen</button>
    <p id="q10-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 3: Welche Lösungsstrategie kombiniert die Vorteile aller drei Methoden am besten?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q11" value="a"> Nur Big Data verwenden</label>
      <label><input type="radio" name="q11" value="b"> Hybridansatz: Standardteile mit ABC-XYZ, Spezialteile mit Big Data und Werkstatt</label>
      <label><input type="radio" name="q11" value="c"> Komplett auf Fließfertigung umstellen</label>
    </div>
    <button onclick="checkAnswer('q11','b')">Antwort prüfen</button>
    <p id="q11-result"></p>
  </div>

  <div class="quiz-question">
    <p class="question-text">Frage 4: AutoTech hat die Wahl: hohe Lagerkosten für Flexibilität oder niedrige Bestände mit längeren Lieferzeiten. Welcher Zielkonflikt?</p>
    <div class="quiz-options">
      <label><input type="radio" name="q12" value="a"> Kosteneffizienz vs. Lieferbereitschaft/Flexibilität</label>
      <label><input type="radio" name="q12" value="b"> Qualität vs. Quantität</label>
      <label><input type="radio" name="q12" value="c"> Umweltschutz vs. Profit</label>
    </div>
    <button onclick="checkAnswer('q12','a')">Antwort prüfen</button>
    <p id="q12-result"></p>
  </div>
</div>

<div style="background:var(--card-bg); padding:48px; border-radius:16px; text-align:center; margin:64px 0;">
  <h2 style="margin-top:0;">Herzlichen Glückwunsch!</h2>
  <p style="font-size:18px; margin-bottom:32px; color:var(--text-secondary);">
    Sie haben alle Module erfolgreich abgeschlossen und verstehen nun die drei 
    Produktionsmethoden und deren Zielkonflikte.
  </p>
  
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin:32px 0;">
    <div style="background:white; padding:20px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="font-size:32px; margin-bottom:8px;">✓</div>
      <strong>Big Data in Industrie 4.0</strong>
    </div>
    <div style="background:white; padding:20px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="font-size:32px; margin-bottom:8px;">✓</div>
      <strong>ABC-XYZ-Analyse</strong>
    </div>
    <div style="background:white; padding:20px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="font-size:32px; margin-bottom:8px;">✓</div>
      <strong>Werkstattfertigung</strong>
    </div>
    <div style="background:white; padding:20px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="font-size:32px; margin-bottom:8px;">✓</div>
      <strong>Zielkonflikte</strong>
    </div>
  </div>
  
  <button onclick="showModule('home')" style="margin-top:24px; padding:16px 48px;">
    ← Zurück zum Start
  </button>
</div>

<div class="nav-buttons">
  <button class="nav-btn prev" onclick="showModule('werkstatt')">← Zurück zu Werkstattfertigung</button>
</div>
`;