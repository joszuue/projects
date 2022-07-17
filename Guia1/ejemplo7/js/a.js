
function a(){
    var operaciones = document.getElementById('resultado');
    var contenido = "<header>\n";
    contenido += "\t<h1>COSAS QUE ME GUSTAN HACER:</h1>\n";
    contenido += "</header>\n"; 
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>Comer</li>\n";
    contenido += "\t<li>Dormir</li>\n";
    contenido += "\t<li>Y ya solo eso :c</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";

    operaciones.innerHTML = contenido;
}
window.onload = a;