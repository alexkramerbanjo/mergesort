function swap(arr, j) {
  let temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
}

function bubbleSort(arr) {
  let sorted = true;
  if (sorted === false) {
    return arr;
  } else {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j);
          sorted = true;
        } else {
          sorted = false;
        }
      }
    }
  }

  return arr;
}

bubbleSort([4, 3, 1, 2, 6]);
//[4,3,1,2,6]
