const { average } = require("../utils/for_testing")

/*
Writing a unit test format

test('name of the testcase', () => {
    expect(functionToTest->Return RecievedValue).toBe(ExpectedResult)
})

Writing a test suite format

describe('testSuiteName', () => {
    unittest1

    unittest2

    unittest3
})

*/

describe('average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1)
  })

  test('of many is calculated right', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })

  test('of empty array is zero', () => {
    expect(average([])).toBe(0)
  })

  test('of 2, 3, 4', () => {
    expect(average([2, 3, 4])).toBe(3)
})

})