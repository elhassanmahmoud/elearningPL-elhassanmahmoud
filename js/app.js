// Zentrale App-Steuerung für die E-Learning-Webanwendung
// Kurs: B5.2 Produktionswirtschaft/Logistik (SL) – WiSe 2025/26

document.addEventListener("DOMContentLoaded", () => {
    // Standardmodul beim Start anzeigen
    showModule("home");
});

// Navigation zwischen Modulen
function showModule(id) {
    const modules = document.querySelectorAll(".module");
    modules.forEach(module => {
        module.classList.remove("active");
    });

    const activeModule = document.getElementById(id);
    if (activeModule) {
        activeModule.classList.add("active");
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hilfsfunktion für Quiz-Auswertung
function checkAnswer(questionId, correctAnswer) {
    const selected = document.querySelector(`input[name="${questionId}"]:checked`);
    const result = document.getElementById(questionId + "-result");

    if (!selected) {
        result.innerHTML = "Bitte wählen Sie eine Antwort aus.";
        result.style.display = "block";
        result.style.background = "#fff3cd";
        result.style.color = "#856404";
        result.style.borderLeft = "4px solid #ffc107";
        return;
    }

    if (selected.value === correctAnswer) {
        result.innerHTML = "✓ Richtig! Sehr gut.";
        result.style.display = "block";
        result.style.background = "#d4edda";
        result.style.color = "#155724";
        result.style.borderLeft = "4px solid #28a745";
    } else {
        result.innerHTML = "✗ Leider falsch. Die richtige Antwort ist nun oben grün hervorgehoben.";
        result.style.display = "block";
        result.style.background = "#f8d7da";
        result.style.color = "#721c24";
        result.style.borderLeft = "4px solid #dc3545";

        // Highlight correct answer
        const correctOption = document.querySelector(`input[name="${questionId}"][value="${correctAnswer}"]`);
        if (correctOption && correctOption.parentElement) {
            correctOption.parentElement.style.background = "#d4edda";
            correctOption.parentElement.style.borderColor = "#28a745";
            correctOption.parentElement.style.fontWeight = "600";
        }
    }

    // Disable all options after answer
    const allOptions = document.querySelectorAll(`input[name="${questionId}"]`);
    allOptions.forEach(option => {
        option.disabled = true;
        option.parentElement.style.cursor = "default";
    });

    // Disable button
    const button = result.previousElementSibling;
    if (button && button.tagName === "BUTTON") {
        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "not-allowed";
    }
}