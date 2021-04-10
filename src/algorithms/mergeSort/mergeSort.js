function mergeSort(arr) {
  if (arr.length === 0) {
    return []
  }

  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)

  const arr1 = mergeSort(arr.slice(0, middle))
  const arr2 = mergeSort(arr.slice(middle, arr.length))

  return merge(arr1, arr2)
}

function merge(arr1, arr2) {
  const mergedArr = []

  let index1 = 0
  let index2 = 0

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      mergedArr.push(arr1[index1])
      index1++
    } else {
      mergedArr.push(arr2[index2])
      index2++
    }
  }

  while (index1 < arr1.length) {
    mergedArr.push(arr1[index1])
    index1++
  }

  while (index2 < arr2.length) {
    mergedArr.push(arr2[index2])
    index2++
  }

  return mergedArr
}

module.exports = mergeSort
