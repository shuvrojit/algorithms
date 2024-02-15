import { assert, describe, expect, it } from "vitest"
import TwoSum from "../two_sum"

describe("Two sum", () => {
  const array = [2, 7, 11, 15]
  const target = 9
  const twosum = TwoSum(array, target);

  it("should return a array", () => {
    assert.isArray(twosum)
  })

  it("should return [0,1]", () => {
    expect(twosum).toStrictEqual([0, 1])
  })

})
