import { assert, describe, expect, it } from "vitest";
import map from "../array_transforms_map";

describe("Array transform map tests", () => {

  let arr: number[] = [1,2,3];
  function addOne(n: number) {
    return n + 1;
  }

  it("should return an array", () => {
    assert.isArray(map(arr, addOne))
  })

  it("should return [2,3,4]", () => {
    expect(map(arr, addOne)).toEqual([2,3,4])
  })

  function addTwo(n: number, i:number) {
    return n + i;
  }

  it("should return [1,3,5]", () => {
    expect(map(arr, addTwo)).toEqual([1,3,5])
  })

  function addNone() {
    return 2;
  }

  it("should return [2,2,2]", () => {
    expect(map(arr, addNone)).toEqual([2,2,2])
  })



})
