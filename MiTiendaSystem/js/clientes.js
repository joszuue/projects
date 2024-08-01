document.getElementById('searchInput').addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll('#comprasTable tr');
  
  rows.forEach(row => {
    const codigo = row.cells[0].textContent.toLowerCase();
    const nombre = row.cells[1].textContent.toLowerCase();
    const compras = row.cells[2].textContent.toLowerCase();
    const monto = row.cells[3].textContent.toLowerCase();
    if (codigo.includes(filter) || nombre.includes(filter) || compras.includes(filter) || monto.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

document.getElementById('sortSelect').addEventListener('change', function() {
  const order = this.value;
  sortTable(order);
});

function sortTable(order) {
  const table = document.getElementById('comprasTable');
  const rows = Array.from(table.rows);
  
  rows.sort((a, b) => {
    const amountA = parseFloat(a.cells[3].textContent.replace('$', ''));
    const amountB = parseFloat(b.cells[3].textContent.replace('$', ''));
    
    if (order === 'asc') {
      return amountA - amountB;
    } else if (order === 'desc') {
      return amountB - amountA;
    } else {
      return 0;
    }
  });
  
  rows.forEach(row => table.appendChild(row));
}