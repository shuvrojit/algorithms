// sort lower to higher
// export default function BubbleSort(array: number[]): number[] {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//       }
//     }
//   }
//   return array
// }

// sort higher to lower
export default function BubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

