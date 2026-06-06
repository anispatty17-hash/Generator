// placeholder
export function formatDate(date: string | Date) {
  return new Date(date).toLocaleString();
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}