// Exercícios físicos

function yesBotton() {
    document.querySelector('.optionsYN').innerHTML = 
    '<div class="options">Exercício finalizado?</div><br><div class="options"><button class="button" onclick="finalBotton()">Sim</button></div>';
}

function noBotton() {
    document.querySelector('.optionsYN').innerHTML = 
    '<div class="options">Você pode começar com uma caminhada de 15 minutos!</div><br><div class="options"><button class="button" onclick="okBotton()">Ok</button></div>';
}

function okBotton() {
    document.querySelector('.optionsYN').innerHTML = 
    '<div class="message">Você vai fazer exercício hoje?</div><div class="options"><button class="button" onclick="yesBotton()">Sim</button><button class="button" onclick="noBotton()">Não</button></div>';
}

function finalBotton() {
    document.querySelector('.optionsYN').innerHTML = 
    '<p>Parabéns!<p>';
}

// Barra de progresso

function updateProgressBar() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var progressBar = document.getElementById('progress-bar');
    var total = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseFloat(checkboxes[i].value);
      }
    }
    progressBar.value = total;
    if (total == 2.5) {
        document.querySelector('.optionsBOX').innerHTML = 
        '<p>Parabéns!<p>';
    }
}