const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador"); // This gets all the counter divs

// Update these dates to be in the future relative to when you run the code (e.g., 2025 or 2026)
const tempoObjetivo1 = new Date("2025-12-31T23:59:59"); // Example: End of current year
const tempoObjetivo2 = new Date("2026-01-15T10:00:00"); // Example: Mid-January next year
const tempoObjetivo3 = new Date("2025-11-20T18:30:00"); // Example: November this year
const tempoObjetivo4 = new Date("2026-03-01T08:00:00"); // Example: March next year

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual; // Difference in milliseconds

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Calculate remaining seconds, minutes, hours after extracting larger units
    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Ensure negative times display as 0
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    // Loop through each counter and update its specific elements
    for (let i = 0; i < contadores.length; i++) {
        let tempoRestante = calculaTempo(tempos[i]);

        // Update the text content of the individual time units using their unique IDs
        document.getElementById("dias" + i).textContent = tempoRestante[0];
        document.getElementById("horas" + i).textContent = tempoRestante[1];
        document.getElementById("min" + i).textContent = tempoRestante[2];
        document.getElementById("seg" + i).textContent = tempoRestante[3];
    }
}

function comecaCronometro() {
    atualizaCronometro(); // Initial update
    setInterval(atualizaCronometro, 1000); // Update every second
}

comecaCronometro();