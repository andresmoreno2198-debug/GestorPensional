# Gestor Pensional

Conjunto de herramientas web sencillas para apoyar la gestión pensional.

## Uso

1. Instala dependencias (ninguna por ahora).
2. Ejecuta un servidor estático, por ejemplo:
   ```bash
   python3 -m http.server --directory public
   ```
3. Abre en el navegador `http://localhost:8000/index.html`.

## Estructura

- `data/municipios.json`: datos de municipios y requerimientos.
- `public/`: archivos HTML, CSS y JS.
  - `index.html`: panel principal de municipios.
  - `municipio.html`: detalle de cada municipio.
  - `plazos.html`: seguimiento de plazos.
  - `plantillas.html`: generador simple de oficios.

## Colores
La paleta principal usa naranja (`#ff7f11`) y verde (`#2e7d32`).

## Contribuciones
Se aceptan mejoras mediante *pull requests*.
