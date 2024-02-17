import BuyAndSell from "../buy_and_sell"
import { assert, describe, expect, it } from "vitest"

describe("Testing BuyAndSell", () => {
  const case1 = [7, 1, 5, 3, 6, 4]
  const case2 = [7, 6, 4, 3, 1]
  const profit1 = BuyAndSell(case1)
  const profit2 = BuyAndSell(case2)

  it("should return a number", () => {
    assert.isNumber(profit1)
  })

  it("should return 5", () => {
    expect(profit1).toEqual(5)
  })

  it("should return a number", () => {
    assert.isNumber(profit2)
  })

  it("should return 5", () => {
    expect(profit2).toEqual(0)
  })



})
