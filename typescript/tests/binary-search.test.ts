import { describe, it, assert, expect } from "vitest"
import BinarySearch from "../binary-search"

describe("Binary Search", () => {
    let result = BinarySearch([1, 2, 3, 4], 4)

    it("should return a number type", () => {
        assert.isNumber(result)
    })
    it("should return 3", () => {

        expect(result).toEqual(3)
    })
    let result2 = BinarySearch([1, 2, 3, 4], 32)
    it("should return -1 if not found", () => {
        expect(result2).toBe(-1)
    })
})
