
export function matchProgress(str: string): number | undefined {
  const match = str.match(/\^(?<progress>\d+(\.\d+)?)/);
  if (match?.groups?.progress) {
    return parseFloat(parseFloat(match?.groups?.progress).toFixed(2))
  }
}
