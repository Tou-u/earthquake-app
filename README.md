# Aplicación de seguimiento de sismos

Esta aplicación muestra un historial de sismos registrados en el último mes, junto con una sección de comentarios para cada evento.

## Demo

Puedes acceder a una demostración de la aplicación [aquí](https://earthquake.rodrigort.com/).

## Funcionalidades

Web
- **Paginación:** Navega fácilmente a través de la lista de sismos con la paginación integrada.
- **Filtro por tipo de magnitud:** Filtra los sismos según su magnitud.
- **Enviar comentarios:** Comparte tus experiencias sobre un sismo en particular mediante la función de comentarios.
- **Ver información del sismo:** Accede a detalles completos sobre cada sismo.
- **Mapa interactivo:** Observa la ubicación exacta de cada sismo en un mapa interactivo.
  
Endpoints
- **/api/features:** Devuelve un listado de sismos registrados en el último mes.
- **/api/features/:id:** Proporciona información detallada sobre un sismo específico.
- **/api/features/:id/comments:** Permite ver y enviar comentarios sobre un sismo en particular.
- **/api/refresh:** Actualiza la base de datos con nuevos sismos obtenidos desde la API de [earthquake.usgs.gov](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson).

## Tecnologías usadas
- **Backend**: Rails
- **Frontend**: React (Vite)
