function bSplit(arr) {
    if (arr.length > 1) {
        let first = arr.slice(0, Math.floor(arr.length/2));
        let second = arr.slice(Math.floor(arr.length/2));
        return [first, second]
    } else { return arr;
}
}
function merge(a, b) {
    let elem;
    const arr = [];
    while (a.length > 0 && b.length > 0) {
        if (a[0] < b[0]) {
            elem = a.shift();
            arr.push(elem)
        } else {
            elem = b.shift();
            arr.push(elem) }
    }
    if (a.length > 0) {
        return arr.concat(a)
    } else { 
        return arr.concat(b)        
}
}

function mergeSort(arr) {
    if (arr.length > 1) { //if arr is greater than one, split it, then merge the recursive call of the halves
        arr = bSplit(arr);
        return merge(mergeSort(arr[0]), mergeSort(arr[1]))
    }
    if (arr.length === 1) { //base case: if it's one, return itself.
        return arr;
    }
}
