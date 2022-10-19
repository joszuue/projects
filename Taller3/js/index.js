function marca(){
    var opcion = document.getElementById("marca").value;


    if(opcion == "Ford"){
        document.getElementById("modelo").innerHTML = ' ';
        document.getElementById("modelo").innerHTML = '<option value="">Seleccione una Opcion</option><option value="EcoSport">EcoSport</option> <option  value="Explorer">Explorer</option> <option value="Fiesta">Fiesta</option> <option value="Focus">Focus</option>';
    }

    if(opcion == "Honda"){
        document.getElementById("modelo").innerHTML = ' ';
        document.getElementById("modelo").innerHTML = '<option value="">Seleccione una Opcion</option><option value="Accord">Accord</option> <option value="Civic">Civic</option> <option value="Civic Tourer">Civic Tourer</option>'
    }

    if (opcion == "Audi"){
        document.getElementById("modelo").innerHTML = ' ';
        document.getElementById("modelo").innerHTML = '<option value="">Seleccione una Opcion</option><option value="A1">A1/Sportback</option> <option value="A3">A3 Cabrio</option> <option value="A3/">A3/Sportback</option>'
    }
    
}

function validar(){
    var anio = document.getElementById("anio").value;
    var color = document.getElementById("color").value;
    var placa = document.getElementById("placa").value;
    var fallas = document.getElementById("fallas").value;
    var nombre = document.getElementById("nombre").value;
    var dui = document.getElementById("dui").value;
    var nit = document.getElementById("nit").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    
    duiExp = /[0-9]+\-+[0-9]/;
    nitExp = /[0-9]+\-+[0-9]+\-+[0-9]+\-+[0-9]/;
    placaExp = /\w+\s+\w/;
    
    if(nombre == ""){
        alert("Debe digitar Nombre");
        return false;
    }else if( dui == ""){
        alert("Debe digitar su DUI");
        return false;
    }else if(!duiExp.test(dui)){
        alert("Digite un DUI valido");
        return false;
    }else if( nit == ""){
        alert("Debe digitar su NIT");
        return false;
    }else if(!nitExp.test(nit)){
        alert("Digite un NIT valido");
        return false;
    }else if (anio == ""){
        alert("Debe digitar un año");
        return false;
    }else if (anio >= 2023){
        alert("Digite un año valido");
        return false;
    }else if(color == ""){
        alert("Debe digitar un color");
        return false;
    }else if (placa == ""){
        alert("Debe digitar una placa");
        return false;
    }
}



