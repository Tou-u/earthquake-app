export function formatDate(date?: number | Date | undefined) {
  return Intl.DateTimeFormat('es-CL', {
    dateStyle: 'long',
    timeStyle: 'medium',
    timeZone: 'America/Santiago',
  }).format(date)
}
