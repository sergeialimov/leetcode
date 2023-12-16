export function logArray (arr: unknown[], message: string): void {
  console.log(message, JSON.stringify(arr).split(',')
    .join(', '));
}
