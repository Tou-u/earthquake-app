export function formatPage(page: string): number {
  return Math.max(1, +page || 1)
}
