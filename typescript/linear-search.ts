function LinearSearch(arr: number[], item: number): number {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return i
    }
  }
  return -1
}


LinearSearch([1,23,4,5], 5)

export default LinearSearch
