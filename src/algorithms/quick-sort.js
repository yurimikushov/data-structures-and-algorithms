function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivotId = Math.floor(Math.random(0, arr.length)),
        pivot = arr[pivotId];

    let less = [],
        greatest = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (value < pivot) {
            less.push(value);
        } else if (arr[i] > pivot) {
            greatest.push(value);
        } else if (i != pivotId) {
            greatest.push(value);
        }
    }

    return quickSort(less).concat(pivot, quickSort(greatest));
}

module.exports = quickSort;
