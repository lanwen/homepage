export function numberWithCommas(x: number): string {
  return Math.floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function roundedStep(step: number): number {
  if (step < 10) {
    return step * 100
  }

  const zeroIndexedStep = step - 1

  const leadingDigits = {
    0: 10,
    1: 25,
    2: 50,
  }[zeroIndexedStep % 3]

  return leadingDigits * Math.pow(10, Math.floor(zeroIndexedStep / 3)) / 10
}
