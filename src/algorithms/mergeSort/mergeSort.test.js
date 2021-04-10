const mergeSort = require('./mergeSort')

describe('check mergeSort()', () => {
  test('should return sorted array of numbers', () => {
    const unsorted = [7, 1, 3, 2, 5, 4, 7, 6]
    const sorted = [1, 2, 3, 4, 5, 6, 7, 7]

    expect(mergeSort(unsorted)).toEqual(sorted)
  })

  test('should return sorted array of words', () => {
    const unsorted = ['Ben', 'Anna', 'Ella', 'Freda', 'Dan', 'Ben']
    const sorted = ['Anna', 'Ben', 'Ben', 'Dan', 'Ella', 'Freda']

    expect(mergeSort(unsorted)).toEqual(sorted)
  })
})
