
function init(){
    var op1 = prompt('Digite la temperatura en grados Celcius:', '');

    //Elemento div donde se mostrará el menu de las operaciones 
    var operaciones = document.getElementById('resultado');

    var contenido = "<header>\n";
    contenido += "\t<h1>CONVERSIÓN DE CELSIUS A FAHRENHEIT:</h1>\n";
    contenido += "</header>\n"; 

    resultado.innerHTML = "<p class=\"conversion\">" + "La conversión de: " +  (op1) + " °C es: " + ((parseFloat(op1) * 1.8) + 32 ) + " °F" + "</p>\n";
}

window.onload = init;