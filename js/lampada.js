const lamImage = document.getElementById("lampada");
const lampadaAcesaButton = document.getElementById("botaoligar");
const lamapadaApagadaButton = document.getElementById("botaodesligar");

function lampadaLigada() {
    lamImage.src = "lampada_ligada.png";
}

function lamapadaDesligada (){
    lamImage.src = "lampada_desligada.png";
}

lampadaAcesaButton.addEventListener("click", lampadaLigada);
lamapadaApagadaButton.addEventListener("click", lamapadaDesligada)
