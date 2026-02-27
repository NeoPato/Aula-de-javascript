var Nome = document.querySelector(".info-nome").textContent;
var peso = document.querySelector(".info-peso"), altura = document.querySelector(".info-altura"), gordura = document.querySelector(".info-gordura"), imc = document.querySelector(".info-imc");
var titulo = document.querySelector(".titulo");
var paciente = document.querySelectorAll(".paciente" );

function Calculo_imc(peso, altura){
    var imc_calculo = parseFloat(peso / Math.pow(altura,2));
    return imc_calculo.toFixed(2);

}

for (let i = 0; i < paciente.length; i++) {
    let peso = parseFloat(paciente[i].querySelector(".info-peso").textContent);
    let altura = parseFloat(paciente[i].querySelector(".info-altura").textContent);
    paciente[i].querySelector(".info-imc").textContent = Calculo_imc(peso, altura);
}

