export default function twoCrystalBalls(array: number[]): number {
  const jpoint = Math.sqrt(array.length)
  let i = 0
  for(;i < array.length; i += jpoint) {
    if (array[i] == 1) {
      break
    }
  }

  for (let j = i - jpoint; j < i; j++) {
    if (array[j] == 1) {
      return j
    }
  }
  return -1
}
