document.addEventListener('DOMContentLoaded', () => {
  fetch('../data/municipios.json')
    .then(res => res.json())
    .then(municipios => {
      const allReq = [];
      municipios.forEach(m => {
        m.estado_requerimientos.forEach(r => {
          allReq.push({
            municipio: m.nombre,
            ...r
          });
        });
      });
      allReq.sort((a,b) => new Date(a.fecha_limite) - new Date(b.fecha_limite));
      const tbody = document.querySelector('#tabla-plazos tbody');
      allReq.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${r.municipio}</td><td>${r.tipo}</td><td class="status-${r.estado.replace(' ', '\\ ')}">${r.estado}</td><td>${r.fecha_limite}</td>`;
        tbody.appendChild(tr);
      });
    });
});
