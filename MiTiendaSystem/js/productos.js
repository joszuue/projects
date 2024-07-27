// Escuchar cambios en el input de imagen
document.querySelector('#input-imagen').addEventListener('change', mostrarMiniatura);

//Muestra la foto del producto en el modal
function mostrarMiniatura() {
    const archivo = document.querySelector('#input-imagen').files[0];
    const lector = new FileReader();

    lector.onload = function(evento) {
      document.querySelector('#miniatura').setAttribute('src', evento.target.result);
    }

    lector.readAsDataURL(archivo);
}

//Habilitar o deshabilitar el precio de la oferta
function toggleOfertaPrecio() {
    const ofertaSelect = document.getElementById('oferta');
    const precioOfertaInput = document.getElementById('precioOferta');
    if (ofertaSelect.value === 'Sí') {
      precioOfertaInput.disabled = false;
    } else {
      precioOfertaInput.disabled = true;
      precioOfertaInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  const products = document.querySelectorAll('.col[data-cate]');

  searchInput.addEventListener('input', filterProducts);
  filterSelect.addEventListener('change', filterProducts);

  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    products.forEach(product => {
      const name = product.getAttribute('data-name').toLowerCase();
      const category = product.getAttribute('data-cate').toLowerCase();
      const status = product.getAttribute('data-status').toLowerCase();
      const code = product.getAttribute('data-cod').toLowerCase();

      const matchesSearch = name.includes(searchText) || category.includes(searchText) || status.includes(searchText) || code.includes(searchText);
      const matchesFilter = !filterValue || category === filterValue.toLowerCase() || status === filterValue.toLowerCase();

      if (matchesSearch && matchesFilter) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }
});

//Envia todos los datos al formulario para modificar
function modificarProducto(nombre, descripcion, precio, genero, stock, categoria, estado, precioOfer){
    document.getElementById('titulo').innerHTML = "<b>Modificar Producto</b>";
    document.getElementById('nombre').value = nombre;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('precio').value = precio;
    document.getElementById('genero').value = genero;
    document.getElementById('stock').value = stock;
    document.getElementById('categoria').value = categoria;
    document.getElementById('estado').value = estado;
    if(precioOfer > 0.00){
      document.getElementById('oferta').value = "Sí";
      precioOferta.disabled = false;
    }else{
      document.getElementById('oferta').value = "No";
    }
    document.getElementById('precioOferta').value = precioOfer;
}

//Muestra los datos de confirmación en el modal
function mostrarValor() {
    document.getElementById('nombreEP').innerText = document.getElementById('nombre').value;
    document.getElementById('descri').innerText = document.getElementById('descripcion').value;
    document.getElementById('preciop').innerText = document.getElementById('precio').value;
    document.getElementById('tipo').innerText = document.getElementById('genero').value;
    document.getElementById('stockp').innerText = document.getElementById('stock').value;
    document.getElementById('cate').innerText = document.getElementById('categoria').value;
    document.getElementById('esta').innerText = document.getElementById('estado').value;
    document.getElementById('ofer').innerText = document.getElementById('oferta').value;
    if(document.getElementById('precioOferta').value == ""){
      document.getElementById('oferPre').innerText = "0.00";
    }else{
      document.getElementById('oferPre').innerText = document.getElementById('precioOferta').value;
    }
    
};


//Validaciones

