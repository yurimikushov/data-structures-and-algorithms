const binarySearch = require('./binary-search.js')

describe('check binary search method', () => {
  test('find in number array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(2)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(9)
  })

  test('find in word array', () => {
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Anna')).toBe(0)
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Dan')).toBe(2)
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Freda')).toBe(4)
  })

  test('dont find in number array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toBe(null)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(null)
  })

  test('dont find in word array', () => {
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Bob')).toBe(null)
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Mike')).toBe(null)
  })
})
