//This file is just here to demonstrate how to write tests
//Feel free to delete it

import { test, expect } from "vitest";
import { fizzBuzz } from "./fizzBuzz.js";

test("get FizzBuzz output when expected", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(75)).toBe("FizzBuzz");
});

test("get Buzz output when expected", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(70)).toBe("Buzz");
});

test("get Fizz output when expected", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(72)).toBe("Fizz");
});

test("get number output when expected", () => {
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(76)).toBe(76);
});
