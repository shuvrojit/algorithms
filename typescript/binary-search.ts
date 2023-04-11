
function BinarySearch(arr: number[], n: number): number {
    let low = 0
    let high = arr.length

    while (low < high) {
        let mid = Math.floor((high + low) / 2)

        if (n == arr[mid]) {
            return mid
        }
        if (n > arr[mid]) {
            low = mid + 1
        }
        if (n < arr[mid]) {
            high = mid - 1
        }
    }

    return -1;
}

export default BinarySearch
