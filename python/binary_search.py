from typing import List

def binarySearch(arr: List[int] , n: int) -> int:
    low = 0
    high = len(arr) -1

    while (low <= high):
        mid = (low + high) // 2
        if (arr[mid] == n):
            return mid
        if (n > arr[mid]):
            low = mid + 1
        if (n < arr[mid]):
            high = mid - 1

    return None


__all__ = [binarySearch]
