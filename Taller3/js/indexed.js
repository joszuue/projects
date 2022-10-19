function iniciar(){
    zonaDatos=document.getElementById("espacio_car"); 

    boton=document.getElementById("enviar");

    boton.addEventListener("click", agregarObj, false);

    var request=indexedDB.open("TallerFinalPrueba");

    request.onsuccess = function(e){
        db=e.target.result;
    }

    request.onupgradeneeded = function(e){
        db=e.target.result;
        db.createObjectStore("autos", {keyPath: "clave"});
    }
}

function agregarObj(){
    var rand = Math.random();
    var auto = "clave" + rand;
    var anio = document.getElementById("anio").value;
    var color = document.getElementById("color").value;
    var placa = document.getElementById("placa").value;
    var fallas = document.getElementById("fallas").value;
    var nombre = document.getElementById("nombre").value;
    var dui = document.getElementById("dui").value;
    var nit = document.getElementById("nit").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;

    var transaccion = db.transaction(["autos"], "readwrite");
    var almacen = transaccion.objectStore("autos");
    var agregar = almacen.add({clave: auto, nombre: nombre, dui: dui, nit: nit, marca: marca, modelo: modelo, anio: anio, color: color, placa: placa, fallas: fallas}); 

    agregar.addEventListener("success", mostrar, false);

    document.getElementById("anio").value="";
    document.getElementById("color").value="";
    document.getElementById("placa").value="";
    document.getElementById("fallas").value="";
    document.getElementById("nombre").value="";
    document.getElementById("dui").value="";
    document.getElementById("nit").value="";
    document.getElementById("marca").value ="";
    document.getElementById("modelo").value ="";
}

function mostrar(){

    zonaDatos.innerHTML = "";
    
    var transaccion = db.transaction(["autos"], "readonly");
    var almacen = transaccion.objectStore("autos");
    var cursor = almacen.openCursor();
    
    cursor.addEventListener("success", mostrarDatos, false);
}

function mostrarDatos(e){
    var cursor = e.target.result;

    if(cursor){
        zonaDatos.innerHTML += "<td>" + cursor.value.nombre + "</td>" + "<td>" + cursor.value.dui + "</td>" + "<td>" + cursor.value.nit + "</td>" + "<td>" + cursor.value.marca + "</td>" + "<td>" + cursor.value.modelo + "</td>" + "<td>" + cursor.value.anio + "</td>" + "<td>" + cursor.value.color + "</td>" + "<td>" + cursor.value.placa + "</td>" + "<td>" + cursor.value.fallas + "</td>" ;
        
        cursor.continue();
    }
}

window.addEventListener("load", iniciar, false);