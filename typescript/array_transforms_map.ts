function map (arr: number[], fn: Function) {
  let updatedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    updatedArray.push(fn(arr[i], i));
  }
  return updatedArray;
}

export default map;
