function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let middle = Math.round((start + end) / 2)

    let guess = arr[middle]

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
