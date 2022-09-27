//Redondeando el precio a mostrar a dos cifras decimales
function dosDecimales(val, n) {
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
    str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0,pt) + "." + str.slice(pt);
   }

   function valorBoton(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i=0, len=radios.length; i<len; i++) {
    if (radios[i].checked == true) {
    val = radios[i].value;
    break;
    }
    }
    return val;
   }


   //Calcula el subtotal de ingredientes extras seleccionados
   function totalIngre(e) {
    var form = this.form;
    var val = parseFloat(form.elements['totalExtra'].value);
    if ( this.checked == true ) {
    val += parseFloat(this.value);
    } else {
    val -= parseFloat(this.value);
    }
   
    form.elements['totalExtra'].value = dosDecimales(val);
    newTotal(form);
   }


   //Obtiene el subtotal del valor del combo seleccionado
   function totalCombo(e) {
    this.form.elements['totalCombo'].value = parseFloat(this.value);
    newTotal(this.form);
}

//Calcula el precio total a cancelar por el combo y los ingredientes extras seleccionador
function newTotal(form) {
 var comboTotal = parseFloat(form.elements['totalCombo'].value);
 var ingreTotal = parseFloat(form.elements['totalExtra'].value);
 form.elements['total'].value = dosDecimales(comboTotal + ingreTotal);
}

(function() {
 var form = document.getElementById('formMenu');
 var el = document.getElementById('ingreX');

 // Determinar los ingredientes extras seleccionados en las casillas de verificación
 var ingredientes = el.getElementsByTagName('input');
 for (var i=0, len=ingredientes.length; i<len; i++) {
 if (ingredientes[i].type === 'checkbox') {
 ingredientes[i].onclick = totalIngre;
 }
 }

 var combo = form.elements["combo"];
 
 for (var i=0, len=combo.length; i<len; i++) {
 combo[i].onclick = totalCombo;
 }

 form.elements['totalCombo'].value = dosDecimales(parseFloat(valorBoton(form, "combo")));
 newTotal(form);
})();

var coment = document.getElementById("coment");

if(coment.addEventListener){
    
}
