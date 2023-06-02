
function map (arr: number[], fn: Function) {
  let updatedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let value = fn(arr[i], i);
    updatedArray.push(value);
  }
  return updatedArray;
}

console.log(map([1,2,3], (n: number) =>(n+1)))

export default map;
