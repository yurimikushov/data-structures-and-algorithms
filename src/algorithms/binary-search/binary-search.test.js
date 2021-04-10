const binarySearch = require('./binary-search.js')

describe('check binarySearch()', () => {
  test('should return index of found number', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(2)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(9)
  })

  test('should return index of found word', () => {
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Anna')).toBe(0)
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Dan')).toBe(2)
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Freda')).toBe(4)
  })

  test('should return null for non-contained number', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toBeNull()
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBeNull()
  })

  test('should return null for non-contained word', () => {
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Bob')).toBeNull()
    expect(binarySearch(['Anna', 'Ben', 'Dan', 'Ella', 'Freda'], 'Mike')).toBeNull()
  })
})
