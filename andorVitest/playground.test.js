import { describe, it, expect } from "vitest"; //this import is our first step in Vitest

/**
 * describe(s) what we are testing. This is like a header. It is optional. It will appear in the
 * test output.
 * it: does this... Hence the it name
 * expect: this is our assertion, what we are expecting. expect has a lot of chainable methods
 */
describe('basic math', () => {
  
  it('adds two numbers', () => {
    //we expect 1 + 2 to be 2.
    expect(1 + 1).toBe(2);
  })
});




