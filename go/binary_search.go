// Binary Search algorithm.
// Given a sorted array binarySearch algorithm will
// match it with n by dividing the number of time to
// check.

package main

import "fmt"

func binaySearch(list []int, n int) int {
	var low int = 0
	var high int = len(list) - 1

	for i := 0; low <= high; i++ {
		var mid int = (low + high) / 2

		if n == list[mid] {
			return mid
		}

		if n > list[mid] {
			low = mid + 1
		}
		if n < list[mid] {
			high = mid - 1
		}
	}

	return -1
}

func main() {
	fmt.Println(binaySearch([]int{1, 2, 3, 4, 5, 6}, 9))
}
