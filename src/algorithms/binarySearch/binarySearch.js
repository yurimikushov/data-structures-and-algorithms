function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const middle = Math.round((start + end) / 2)
    const guess = arr[middle]

    if (guess == value) {
      return middle
    }

    if (guess < value) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return null
}

module.exports = binarySearch
