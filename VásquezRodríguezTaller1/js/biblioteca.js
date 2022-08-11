function init(){
    var form = document.getElementById('form');
    form.onsubmit = function(){
        createform(document.frmconf.selcontrol.value,document.frmconf.value);
    }
}

function createform(control){
    var htmlform, tag;
    //Referenciar al elemento de la página web donde se
    //mostrará el formulario creado
    var formview = document.getElementById('view');

    with(document){
        //Dependiendo del tipo de control
        switch(control){
            case "ciencias":
                tag+= "<h2>Categoria: </h2> <p>Ciencias Básicas y tecnología</p>\n";
                tag+= "<h2>Fecha de entrega: </h2>"; 
                    htmlform += tag;
                    
                break;
            case "Tesis":
                tag+= "<h2>Categoria: </h2> <p>Tesis</p>\n";
                tag+= "<h2>Fecha de entrega: </h2>";
                    htmlform += tag;
                break;
            case "Obra":
                tag+= "<h2>Categoria: </h2> <p>Obra Literaria</p>\n";
                tag+= "<h2>Fecha de entrega: </h2>";
                break;
           
            default:
            alert("No ha seleccionado ningún usuario");
            return;
            break;
        }
        htmlform += "</table>\n";
    }
    formview.innerHTML = htmlform;
}

window.onload = init;