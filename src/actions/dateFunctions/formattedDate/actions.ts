export function getFormattedDate(date: Date): string {
  return date.toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
