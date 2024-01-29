import { describe, it, assert, expect} from "vitest";
import LinearSearch from "../linear-search"

describe("Linear Search", () => {
  let result = LinearSearch([2,3,5,13,5666,78], 13)
  let result2 = LinearSearch([2,3,5,13,5666,78], 83)

  it("should return a number type", () => {
    assert.isNumber(result)
  })
  it("should give -1 if not found", () => {
    expect(result2).toBe(-1)
  })
  it("should return 3 as the index of search item", () => {
    expect(result).toEqual(3)
  })
})
