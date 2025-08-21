document.addEventListener('DOMContentLoaded', () => {
  fetch('../data/municipios.json')
    .then(res => res.json())
    .then(municipios => {
      const container = document.getElementById('municipios');
      municipios.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${m.nombre}</h3>
          <p><strong>Correo:</strong> ${m.email_oficial}</p>
          <button class="button" data-nombre="${m.nombre}">Ver detalles</button>
        `;
        container.appendChild(card);
      });

      container.addEventListener('click', e => {
        if (e.target.matches('button')) {
          const nombre = e.target.getAttribute('data-nombre');
          window.location.href = `municipio.html?nombre=${encodeURIComponent(nombre)}`;
        }
      });
    })
    .catch(err => {
      console.error('Error cargando municipios', err);
    });
});
