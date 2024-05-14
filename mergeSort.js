function mergeSort (array) {
    if (array.length === 1) {
        return array
    }
    
    let left = mergeSort(array.slice(0, Math.floor(array.length / 2)))
    let right = mergeSort(array.slice(Math.floor(array.length / 2), array.length))
    
    let result = []
    let size = left.length + right.length
    while (result.length < size) {
        if (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result.push(left[0])
                left.shift()
            } else {
                result.push(right[0])
                right.shift()
            } 
        } else if (left.length === 0) {
            result = result.concat(right)
        } else {
            result = result.concat(left)
        }
    }

    return result
}

let array = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(array))

console.log(mergeSort([105, 79, 100, 110]))



