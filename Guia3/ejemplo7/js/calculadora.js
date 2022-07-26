function init(){
var resultado = document.getElementById("resultado");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var division = document.getElementById("division");
var raiz= document.getElementById("raiz");

var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var multi = document.getElementById("multiplicacion");
var cuadrado = document.getElementById("cuadrado");

var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var punto = document.getElementById("punto");
var resta = document.getElementById("resta");

var igual = document.getElementById("igual");
var cero = document.getElementById("cero");
var residuo = document.getElementById("residuo");
var inversa = document.getElementById("inversa");

siete.onclick = function(xd){
    resultado.textContent = resultado.textContent + "7";
}

ocho.onclick = function(xd){
    resultado.textContent = resultado.textContent + "8";
}

nueve.onclick = function(xd){
    resultado.textContent = resultado.textContent + "9";
}

division.onclick = function(xd){
    resultado.textContent = resultado.textContent + "/";
}

raiz.onclick = function(xd){
    resultado.textContent = "sqrt (" + resultado.textContent + ")";
}



cuatro.onclick = function(xd){
    resultado.textContent = resultado.textContent + "1";
}

cinco.onclick = function(xd){
    resultado.textContent = resultado.textContent + "5";
}

seis.onclick = function(xd){
    resultado.textContent = resultado.textContent + "6";
}

multi.onclick = function(xd){
    resultado.textContent = resultado.textContent + "*";
}

cuadrado.onclick = function(xd){
    resultado.textContent = "(" + resultado.textContent + ")²";
}

uno.onclick = function(xd){
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(xd){
    resultado.textContent = resultado.textContent + "2";
}

tres.onclick = function(xd){
    resultado.textContent = resultado.textContent + "3";
}

punto.onclick = function(xd){
    resultado.textContent = resultado.textContent + ".";
}

resta.onclick = function(xd){
    resultado.textContent = resultado.textContent + "-";
}

igual.onclick = function(xd){
    resultado.textContent = resultado.textContent + "=";
}

cero.onclick = function(xd){
    resultado.textContent = resultado.textContent + "0";
}

residuo.onclick = function(xd){
    resultado.textContent = resultado.textContent + "%";
}

inversa.onclick = function(xd){
    resultado.textContent = resultado.textContent + "a";
}









}

onload=init;