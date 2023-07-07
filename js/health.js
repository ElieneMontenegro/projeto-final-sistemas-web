// Exercícios físicos

function yesBotton() {
    document.querySelector('.options').innerHTML = 
    '<div class="options">Exercício finalizado?</div><br><div class="options"><button class="button" onclick="finalBotton()">Sim</button></div>';
}

function noBotton() {
    document.querySelector('.options').innerHTML = 
    '<div class="options">Você pode começar com uma caminhada de 15 minutos!</div><br><div class="options"><button class="button" onclick="okBotton()">Ok</button></div>';
}

function okBotton() {
    document.querySelector('.options').innerHTML = 
    '<div class="message">Você vai fazer exercício hoje?</div><div class="options"><button class="button" onclick="yesBotton()">Sim</button><button class="button" onclick="noBotton()">Não</button></div>';
}

function finalBotton() {
    document.querySelector('.options').innerHTML = 
    '<p>Parabéns!<p>';
}

// Barra de progresso

function l05() {
    var liters = document.getElementById('progress-bar');
    liters.value = 0.5;
}

function l10() {
    var liters = document.getElementById('progress-bar');
    liters.value = 1;
}

function l15() {
    var liters = document.getElementById('progress-bar');
    liters.value = 1.5;
}

function l20() {
    var liters = document.getElementById('progress-bar');
    liters.value = 2;
}

function l25() {
    var liters = document.getElementById('progress-bar');
    liters.value = 2.5;
}

function zerarBarra() {
    var liters = document.getElementById('progress-bar');
    liters.value = 0;
}