// src/algorithms.js

// 🟢 Bubble Sort
export const bubbleSort = (array) => {
  let steps = [];
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({ array: [...arr], comparing: [j, j + 1], swapping: [], special: [] });
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        steps.push({ array: [...arr], comparing: [], swapping: [j, j + 1], special: [] });
      }
    }
  }
  return steps;
};

// 🟡 Selection Sort
export const selectionSort = (array) => {
  let steps = [];
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    steps.push({ array: [...arr], comparing: [], swapping: [], special: [minIdx] });
    
    for (let j = i + 1; j < arr.length; j++) {
      steps.push({ array: [...arr], comparing: [j, minIdx], swapping: [], special: [minIdx] });
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      steps.push({ array: [...arr], comparing: [], swapping: [i, minIdx], special: [] });
    }
  }
  return steps;
};

// 🔵 Insertion Sort
export const insertionSort = (array) => {
  let steps = [];
  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    steps.push({ array: [...arr], comparing: [], swapping: [], special: [i] });

    while (j >= 0 && arr[j] > key) {
      steps.push({ array: [...arr], comparing: [j], swapping: [], special: [i] });
      arr[j + 1] = arr[j];
      steps.push({ array: [...arr], comparing: [], swapping: [j, j + 1], special: [i] });
      j--;
    }
    arr[j + 1] = key;
    steps.push({ array: [...arr], comparing: [], swapping: [], special: [] });
  }
  return steps;
};

// 🟣 Quick Sort
export const quickSort = (array) => {
  let steps = [];
  let arr = [...array];

  const quickSortHelper = (start, end) => {
    if (start >= end) return;

    let pivot = arr[end];
    let pivotIdx = start;

    steps.push({ array: [...arr], comparing: [], swapping: [], special: [end], pivot: true });

    for (let i = start; i < end; i++) {
      steps.push({ array: [...arr], comparing: [i, end], swapping: [], special: [], pivot: false });
      
      if (arr[i] < pivot) {
        let temp = arr[i];
        arr[i] = arr[pivotIdx];
        arr[pivotIdx] = temp;
        steps.push({ array: [...arr], comparing: [], swapping: [i, pivotIdx], special: [], pivot: false });
        pivotIdx++;
      }
    }

    let temp = arr[pivotIdx];
    arr[pivotIdx] = arr[end];
    arr[end] = temp;
    steps.push({ array: [...arr], comparing: [], swapping: [pivotIdx, end], special: [], pivot: false });

    quickSortHelper(start, pivotIdx - 1);
    quickSortHelper(pivotIdx + 1, end);
  };

  quickSortHelper(0, arr.length - 1);
  return steps;
};