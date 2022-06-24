function quicksort(arr: Array<number>): Array<number> {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[0]
    let left: Array<number> = []
    let right: Array<number> = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)]
}

console.log(quicksort([5, 3, 6, 2, 10]));