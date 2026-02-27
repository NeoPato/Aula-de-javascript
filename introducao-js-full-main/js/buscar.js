var buscar = document.querySelector("#buscarPaciente");

buscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/mateusrpereira/pacientes-api/master/pacientes.json");

    xhr.addEventListener("load", function() {
        var res = xhr.responseText; 
        var pacientes = JSON.parse(res);

        console.log(pacientes);

        pacientes.forEach(function(paciente) {
            console.log(paciente); 
            var jpaciente;
            var jpeso;
            var jaltura;
            var jgordura;
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

            tNome.textContent = jpaciente;
            tPeso.textContent = jpeso;
            tAlt.textContent = jaltura;
            tGor.textContent = jgordura;
            tImc.textContent = Calculo_imc(jpeso, jaltura); 

        });
    });

    xhr.send(); 
});