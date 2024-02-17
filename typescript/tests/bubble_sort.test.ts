
import BubbleSort from "../bubble_sort.ts"

import {assert, describe, expect, it} from "vitest"

describe("Testing BubbleSort", () => {
  const array = [2,4,1,9,7,3]
  const sortedArray = BubbleSort(array)

  it("should return an array", () => {
    assert.isArray(sortedArray)
  })

  it("should return [1,2,3,4,7,8]", () => {
    expect(sortedArray).toStrictEqual([1,2,3,4,7,9])
  })
})
