function highlightCard(cardId) {
    var element = document.querySelector(cardId);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode() {
    document.addEventListener('Keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Tecla Pressionada ${name} Key code: ${code}`);
    }, false);
}

function addKeyboardEventListeners() {
    document.addEventListener('Keydown', (event) => {

        var ingresso1 = document.getElementById("quinta").value
        var ingresso2 = document.getElementById("sexta").value
        var ingresso3 = document.getElementById("sabado").value
        var ingresso4 = document.getElementById("domingo").value

        var code = event.code;
        if (code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if (code == 'Digit2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if (code == 'Digit3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if (code == 'Digit4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}

addKeyboardEventListeners();