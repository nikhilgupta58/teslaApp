export function convertToNumber(percentage: number, min: number, max: number) {
  return (percentage / 100) * (max - min) + min;
}
