//Realiza operaciones aritmeticas básicas 

//Función que funciona como manejador de evento 
//al producirse el evento load (carga de la pagina) 

function init(){
    //Ingresar los datos de los numeros a operar 
    var op1 = prompt('Introduzuca una cantidad en metros:', '');

    //Elemento div donde se mostrará el menu de las operaciones 
    var operaciones = document.getElementById('resultado');
    //creando el contenido de la pagina 
    var contenido = "<header>\n";
    contenido += "\t<h1>SISTEMA DE CONVERSIÓN DE METROS A:</h1>\n";
    contenido += "</header>\n"; 
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a class='pies' href=\"javascript:void(0)\"><span>Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a class='pulgadas' href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a class='yardas' href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
    //Colocar el contenido dentro del elemento div
    operaciones.innerHTML = contenido;
    //Preparando el manejo del evento click sobre los enlaces del menú
    var opciones = document.getElementsByTagName('a');
    //Recorrer todos los elementos de enlace (elementos a)
    //y asignar el manejador del evento click
    for(var i=0; i<opciones.length; i++){
        switch(i){
            case 0:
                //Función convertir metros a pies
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + "La conversión de: " +  (op1) + "m a pies es: " + (parseFloat(op1) * (3.28 / 1) ) + "</p>\n";
                }
                break;
            case 1:
                //pulgadas 
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + "La conversión de: " + (op1) + "m a pulgadas es: "+ (op1 * (39.37 / 1)) + "</p>\n";
                }
                break;
            case 2:
                //yardas
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + "La conversión de: " + (op1) + "m a yardas es: "+  (op1 * (1 / 0.914)) + "</p>\n";
                }
                break;
        }
    }
}

window.onload = init;



