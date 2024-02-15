export default function TwoSum (arr: number[], target: number): any {
  let index = 0
  let current = index + 1
  while (index < arr.length) {
    if (arr[index] + arr[current] == target) {
      return [index, current]
    }
    if (current == arr.length - 1) {
      index++
      current = index
    }
    current++
  }
  return -1

}

