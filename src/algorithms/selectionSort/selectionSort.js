function selectionSort(arr) {
  const result = []

  while (arr.length !== 0) {
    const smallestId = smallest(arr)

    result.push(arr[smallestId])
    arr.splice(smallestId, 1)
  }

  return result
}

function smallest(arr) {
  let smallestId = 0
  let smallestValue = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i]
      smallestId = i
    }
  }

  return smallestId
}

module.exports = selectionSort
