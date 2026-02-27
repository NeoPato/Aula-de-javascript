titulo.textContent = "Bizarro😱😱😱😱";	

var Add = document.querySelector("#Add");
Add.addEventListener("click", function(event){
    
    var formulario = document.querySelector("#Adiciona");
    
    var pacienteNome = formulario.nome.value;
    var pacientePeso = formulario.peso.value;
    var pacienteAlt = formulario.altura.value;
    var pacienteGor = formulario.gordura.value;
    
    // VALIDAÇÃO DOS DADOS
    if(pacienteNome ==  '' || pacientePeso == '' || pacienteAlt == '' || pacienteGor == ''){
        alert("Todos os campos precisam estar para o preenchidos!");
        return;
    }
    if(pacienteNome[0] ==  ' '){
        alert("O primeiro caracter do nome não pode ser um espaço!");        
        return
    }
    else if(!isNaN(pacienteNome)){
        alert("O nome não pode ser um número!");        
        return;
    }
    else if(pacienteNome.length < 5){
        alert("O nome deve ter no mínimo 5 caracteres!");
        return;
    }
    
    if(parseInt(pacientePeso) > 635 || parseInt(pacientePeso) < 0){
        alert("Peso Inválido!");
        return;
    }

    if(parseFloat(pacienteAlt) > 2.72 || parseFloat(pacienteAlt) < 0.2){
        alert("Altura Inválido!");
        return;
    }
    if(parseInt(pacienteGor) > 50 || parseInt(pacienteGor) < 0){
        alert("Gordura Inválido!");
        return;
    }
// console.log(pacienteNome,"\n",pacientePeso,"\n",pacienteAlt,"\n",pacienteGor);

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