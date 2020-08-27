// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta
// AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$( document ).ready(function() {
    //Ciclo for per clonazione quadrati
    for (var i = 0; i < 35; i++) {
        $('.container').append('<div class="square"></div>');
    }
    //Funzione per richiamare AJAX al click
    $(".square").on("click", function(){
        var testo = $(this);
        $.ajax(
            {
            'url': "https://flynn.boolean.careers/exercises/api/random/int",
            'method': "GET",
            'success': function (risposta) {
                testo.text(risposta.response);
                if (risposta.response <= 5) {
                    testo.addClass('yellow');
                } else {
                    testo.addClass('green');
                }
            },
            'error': function () {
                alert("E' avvenuto un errore. ");
            }
        }
    );
    })

});
