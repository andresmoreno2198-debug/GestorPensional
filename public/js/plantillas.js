function generarOficio() {
  const nombre = document.getElementById('nombre').value;
  const tipo = document.getElementById('tipo').value;
  const radicado = document.getElementById('radicado').value;
  const fundamento = document.getElementById('fundamento').value;
  const contenido = `
  <h2>Oficio - ${tipo}</h2>
  <p>Señor(a) ${nombre},</p>
  <p>Radicado: ${radicado}</p>
  <p>${fundamento}</p>
  <p>Cordialmente,</p>
  <p><em>Asesor Pensional</em></p>`;
  document.getElementById('resultado').innerHTML = contenido;
}

function descargarPDF() {
  window.print();
}
