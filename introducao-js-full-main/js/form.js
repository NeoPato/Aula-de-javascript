var Add = document.querySelector("#Add");
Add.addEventListener("click", function(event){
    
    var formulario = document.querySelector("#Adiciona");
    
    var pacienteNome = formulario.nome.value;
    var pacientePeso = formulario.peso.value;
    var pacienteAlt = formulario.altura.value;
    var pacienteGor = formulario.gordura.value;
    

alert("Usúario Adicionado");
event.preventDefault();

// CRIAÇÃO DO FORMULARIO
var tr = document.createElement("tr");
var tNome = document.createElement("td");
var tPeso = document.createElement("td");
var tAlt = document.createElement("td");
var tGor = document.createElement("td");
var tImc = document.createElement("td");

tr.appendChild(tNome);
tr.appendChild(tPeso);
tr.appendChild(tAlt);   
tr.appendChild(tGor);
tr.appendChild(tImc);

var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(tr);

tNome.textContent = pacienteNome;
tPeso.textContent = pacientePeso;
tAlt.textContent = pacienteAlt;
tGor.textContent = pacienteGor;
tImc.textContent = Calculo_imc(pacientePeso, pacienteAlt); 

formulario.nome.value = " ";
formulario.peso.value = " ";
formulario.altura.value = " ";
formulario.gordura.value = " "

});