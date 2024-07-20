//Envia todos los datos al formulario para modificar
function modificarCategoria(nombre, descripcion){
    document.getElementById('titulo').innerHTML = "<b>Modificar Categoria</b>";
    document.getElementById('nombre').value = nombre;
    document.getElementById('descripcion').value = descripcion;
}

//Muestra los datos de confirmación en el modal
function mostrarValor() {
    document.getElementById('nombreEP').innerText = document.getElementById('nombre').value;
    document.getElementById('descri').innerText = document.getElementById('descripcion').value;
};


function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

// Buscador categorías
document.getElementById('searchInput').addEventListener('keyup', function() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById('searchInput');
    filter = normalizeText(input.value);
    table = document.getElementById('cateTable');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName('td');
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = normalizeText(td[j].textContent || td[j].innerText);
                if (txtValue.indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
});
