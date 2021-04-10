function selectionSort(arr) {
  const smallest = (arr) => {
    let smallestID = 0,
      smallestValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i]
        smallestID = i
      }
    }

    return smallestID
  }

  let result = []

  while (arr.length) {
    let smallestID = smallest(arr)

    result.push(arr[smallestID])
    arr.splice(smallestID, 1)
  }

  return result
}

module.exports = selectionSort
