document.getElementById("home").innerHTML = `
<div style="text-align:center; margin-bottom:80px;">
  <h1>Fallstudie: AutoTech GmbH</h1>
  <p style="font-size:20px; color:var(--text-secondary); margin-top:16px; max-width:800px; margin-left:auto; margin-right:auto;">
    Digitale Produktions- und Logistiksteuerung in einem Automobilzulieferer
  </p>
  <p style="font-size:17px; color:var(--text-tertiary); margin-top:8px;">
    E-Learning im Modul B5.2 Produktionswirtschaft & Logistik
  </p>
</div>

<div style="background:var(--card-bg); border-radius:16px; padding:40px; margin-bottom:48px;">
  <h2 style="margin-top:0; font-size:28px;">Über das Unternehmen</h2>
  <p style="font-size:17px; line-height:1.7;">
    Die <strong>AutoTech GmbH</strong> ist ein mittelständischer Automobilzulieferer mit Sitz in Deutschland. 
    Das Unternehmen produziert hochwertige Komponenten für die Automobilindustrie, darunter 
    <strong>Bremsanlagen, Getriebegehäuse und Sensorkomponenten</strong>.
  </p>
  <p style="font-size:17px; line-height:1.7; margin-bottom:24px;">
    In einem zunehmend wettbewerbsintensiven Markt steht AutoTech vor der Herausforderung, 
    eine <strong>hohe Variantenvielfalt</strong> bei gleichzeitig <strong>steigendem Kostendruck</strong> 
    zu bewältigen. Die Produktion muss flexibel auf Kundenwünsche reagieren können, während 
    gleichzeitig Effizienz und Qualität sichergestellt werden müssen.
  </p>

  <div class="card-grid" style="margin-top:32px;">
    <div style="background:white; padding:24px; border-radius:12px; border-left:4px solid var(--text-primary);">
      <h4 style="margin:0 0 12px 0;">Produktportfolio</h4>
      <ul style="margin:0; padding-left:20px;">
        <li>Bremsanlagen (verschiedene Varianten)</li>
        <li>Getriebegehäuse (Präzisionsfertigung)</li>
        <li>Sensorkomponenten (Industrie 4.0)</li>
      </ul>
    </div>

    <div style="background:white; padding:24px; border-radius:12px; border-left:4px solid var(--text-primary);">
      <h4 style="margin:0 0 12px 0;">Produktionsweise</h4>
      <ul style="margin:0; padding-left:20px;">
        <li>Werkstattfertigung (Drehen, Fräsen, Bohren)</li>
        <li>Kleine bis mittlere Losgrößen</li>
        <li>Hoher Koordinationsaufwand</li>
      </ul>
    </div>

    <div style="background:white; padding:24px; border-radius:12px; border-left:4px solid var(--text-primary);">
      <h4 style="margin:0 0 12px 0;">Logistik & Lager</h4>
      <ul style="margin:0; padding-left:20px;">
        <li>A-Teile: Motorblöcke, Steuergeräte</li>
        <li>C-Teile: Schrauben, Dichtungen</li>
        <li>Schwankende Ersatzteilbedarfe</li>
      </ul>
    </div>
  </div>
</div>

<div style="background:white; border:1px solid var(--gray-2); border-radius:16px; padding:48px; margin-bottom:48px;">
  <h2 style="margin-top:0; font-size:28px; text-align:center;">Was Sie in diesem E-Learning lernen</h2>
  <p style="font-size:18px; text-align:center; margin-bottom:40px; color:var(--text-secondary);">
    Anhand der AutoTech GmbH werden drei zentrale Methoden der Produktionswirtschaft praxisnah vermittelt:
  </p>
  
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px; margin-top:32px;">
    <div style="background:var(--card-bg); padding:32px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="width:48px; height:48px; background:var(--text-primary); color:white; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; font-size:24px; font-weight:700;">1</div>
      <h3 style="margin:0 0 12px 0; font-size:22px;">Big Data in Industrie 4.0</h3>
      <p style="color:var(--text-secondary); margin:0; line-height:1.6; font-size:15px;">
        Echtzeitdatenanalyse zur Produktionsoptimierung durch Sensoren, Smart Devices und IT-Systeme. 
        Predictive Maintenance zur Vermeidung von Ausfällen.
      </p>
    </div>

    <div style="background:var(--card-bg); padding:32px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="width:48px; height:48px; background:var(--text-primary); color:white; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; font-size:24px; font-weight:700;">2</div>
      <h3 style="margin:0 0 12px 0; font-size:22px;">ABC-XYZ-Analyse</h3>
      <p style="color:var(--text-secondary); margin:0; line-height:1.6; font-size:15px;">
        Lagerverwaltung und Bestandsoptimierung durch Kombination von Wertanalyse (ABC) 
        und Verbrauchsanalyse (XYZ) für effiziente Materialwirtschaft.
      </p>
    </div>

    <div style="background:var(--card-bg); padding:32px; border-radius:12px; border:1px solid var(--gray-2);">
      <div style="width:48px; height:48px; background:var(--text-primary); color:white; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; font-size:24px; font-weight:700;">3</div>
      <h3 style="margin:0 0 12px 0; font-size:22px;">Werkstattfertigung</h3>
      <p style="color:var(--text-secondary); margin:0; line-height:1.6; font-size:15px;">
        Flexible Fertigungsorganisation nach dem Verrichtungsprinzip. 
        Vor- und Nachteile dieser Organisationsform im Vergleich zur Fließfertigung.
      </p>
    </div>
  </div>
</div>

<div style="background:var(--card-bg); border-radius:16px; padding:40px; margin-bottom:48px;">
  <h2 style="margin-top:0; font-size:28px;">Zielkonflikte verstehen und lösen</h2>
  <p style="font-size:17px; line-height:1.7; margin-bottom:24px;">
    In der betrieblichen Praxis entstehen oft <strong>Zielkonflikte</strong> zwischen verschiedenen 
    Optimierungszielen. Diese E-Learning-Einheit zeigt Ihnen:
  </p>
  
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px;">
    <div style="background:white; padding:20px; border-radius:10px; border-left:4px solid var(--text-primary);">
      <h4 style="margin:0 0 8px 0;">Konflikt erkennen</h4>
      <p style="margin:0; font-size:15px; color:var(--text-secondary);">Welche Zielkonflikte entstehen zwischen Big Data, ABC-XYZ und Werkstattfertigung?</p>
    </div>
    
    <div style="background:white; padding:20px; border-radius:10px; border-left:4px solid var(--text-primary);">
      <h4 style="margin:0 0 8px 0;">Ursachen verstehen</h4>
      <p style="margin:0; font-size:15px; color:var(--text-secondary);">Warum widersprechen sich Flexibilität und Kosteneffizienz?</p>
    </div>
    
    <div style="background:white; padding:20px; border-radius:10px; border-left:4px solid var(--text-primary);">
      <h4 style="margin:0 0 8px 0;">Lösungen entwickeln</h4>
      <p style="margin:0; font-size:15px; color:var(--text-secondary);">Hybridansätze, Priorisierung und dynamische Anpassung als Strategien</p>
    </div>
  </div>
</div>

<div style="background:white; border:1px solid var(--gray-2); border-radius:16px; padding:48px; text-align:center; margin-bottom:48px;">
  <h2 style="margin:0 0 16px 0; font-size:28px;">Lernen Sie praxisnah</h2>
  <p style="font-size:18px; margin:0 0 32px 0; color:var(--text-secondary); max-width:700px; margin-left:auto; margin-right:auto;">
    Jedes Modul enthält <strong>konkrete Praxisbeispiele von AutoTech</strong>, 
    anschauliche Visualisierungen und <strong>interaktive Quiz-Fragen</strong> zur Lernkontrolle.
  </p>
  
  <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
    <div style="background:var(--card-bg); padding:20px 32px; border-radius:10px; border:1px solid var(--gray-2);">
      <div style="font-size:40px; font-weight:700; margin-bottom:4px; color:var(--text-primary);">18</div>
      <div style="font-size:14px; color:var(--text-secondary);">Quiz-Fragen</div>
    </div>
    <div style="background:var(--card-bg); padding:20px 32px; border-radius:10px; border:1px solid var(--gray-2);">
      <div style="font-size:40px; font-weight:700; margin-bottom:4px; color:var(--text-primary);">3</div>
      <div style="font-size:14px; color:var(--text-secondary);">Methoden</div>
    </div>
    <div style="background:var(--card-bg); padding:20px 32px; border-radius:10px; border:1px solid var(--gray-2);">
      <div style="font-size:40px; font-weight:700; margin-bottom:4px; color:var(--text-primary);">4</div>
      <div style="font-size:14px; color:var(--text-secondary);">Module</div>
    </div>
  </div>
</div>

<div style="text-align:center; margin-top:64px;">
  <button onclick="showModule('bigdata')" style="background:var(--text-primary); color:white; border:none; padding:18px 48px; font-size:17px; border-radius:12px; cursor:pointer; font-weight:600; box-shadow:0 4px 12px rgba(0,0,0,0.15); transition:all 0.2s;">
    Jetzt starten: Big Data in Industrie 4.0 →
  </button>
</div>
`;