import twoCrystalBalls from "../two-crystal-balls"
import {describe, test, it, assert, expect} from "vitest"

describe("Two crystal balls", () => {
  const data = new Array(10000).fill(0)
  const jpoint = Math.floor(Math.random() * 10000)

  for (let i = jpoint; i < data.length; i++) {
    data[i] = 1
  }

  const result = twoCrystalBalls(data)

  it("should return number", () => {
    assert.isNumber(result)
  })
  it("should return number", () => {
    expect(result).toBe(jpoint)
  })


})
