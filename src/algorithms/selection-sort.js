function selectionSort(arr) {
  const smallest = (arr) => {
    let smallestId = 0,
      smallestValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestId = i
        smallestValue = arr[i]
      }
    }

    return smallestId
  }

  let result = []

  while (arr.length) {
    result.push(arr[smallest(arr)])
    arr.splice(smallest(arr), 1)
  }

  return result
}

module.exports = selectionSort
