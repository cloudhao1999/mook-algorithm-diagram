function selectionSort(arr: number[]){
    for(let i = 0; i < arr.length; i++) {
        let smallest = arr[i];
        let smallestIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (smallest > arr[j]) {
                smallest = arr[j];
                smallestIndex = j;
            }
        }
        let temp = arr[i]
        arr[i] = smallest;
        arr[smallestIndex] = temp;
    }
    return arr
}

console.log(selectionSort([5, 3, 6, 2, 10]))