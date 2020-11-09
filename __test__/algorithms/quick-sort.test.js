const quickSort = require('./../../src/algorithms/quick-sort.js')

describe('check quick sort method', () => {
  test('sort numbers', () => {
    expect(quickSort([7, 1, 3, 2, 5, 4, 7, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 7])
  })

  test('sort words', () => {
    let unsorted = ['Ben', 'Anna', 'Ella', 'Freda', 'Dan', 'Ben'],
      sorted = ['Anna', 'Ben', 'Ben', 'Dan', 'Ella', 'Freda']

    expect(quickSort(unsorted)).toEqual(sorted)
  })
})
