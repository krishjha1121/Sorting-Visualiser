export function getBubbleSortAnimations(array) {
  const animations = [];
  const n = array.length;
  let arr = [...array];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push(["compare", j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        animations.push(["overwrite", j, arr[j + 1]]);
        animations.push(["overwrite", j + 1, arr[j]]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      animations.push(["uncompare", j, j + 1]);
    }
    animations.push(["done", n - i - 1]);
  }
  animations.push(["done", 0]);
  return animations;
}

export function getSelectionSortAnimations(array) {
  const animations = [];
  const n = array.length;
  let arr = [...array];
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    animations.push(["mark_min", minIndex]);
    for (let j = i + 1; j < n; j++) {
      animations.push(["compare", j, j]); 
      if (arr[j] < arr[minIndex]) {
        animations.push(["unmark_min", minIndex]);
        minIndex = j;
        animations.push(["mark_min", minIndex]);
      }
      animations.push(["uncompare", j, j]);
    }
    if (minIndex !== i) {
      animations.push(["overwrite", minIndex, arr[i]]);
      animations.push(["overwrite", i, arr[minIndex]]);
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
    animations.push(["unmark_min", minIndex]);
    animations.push(["done", i]);
  }
  return animations;
}

export function getInsertionSortAnimations(array) {
  const animations = [];
  const n = array.length;
  let arr = [...array];
  for (let i = 0; i < n - 1; ++i) {
    let j = i;
    while (j >= 0) {
      animations.push(["compare", j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        animations.push(["overwrite", j, arr[j + 1]]);
        animations.push(["overwrite", j + 1, arr[j]]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        animations.push(["uncompare", j, j + 1]);
        j -= 1;
      } else {
        animations.push(["uncompare", j, j + 1]);
        break;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    animations.push(["done", i]);
  }
  return animations;
}

export function getMergeSortAnimations(array) {
  const animations = [];
  let arr = [...array];
  mergeDivider(arr, 0, arr.length - 1, animations);
  for (let i = 0; i < arr.length; i++) {
    animations.push(["done", i]);
  }
  return animations;
}

function mergeDivider(arr, start, end, animations) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeDivider(arr, start, mid, animations);
    mergeDivider(arr, mid + 1, end, animations);
    merge(arr, start, mid, end, animations);
  }
}

function merge(arr, start, mid, end, animations) {
  let temp = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    animations.push(["compare", i, j]);
    animations.push(["uncompare", i, j]);
    if (arr[i] <= arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }
  while (i <= mid) {
    animations.push(["compare", i, i]);
    animations.push(["uncompare", i, i]);
    temp.push(arr[i++]);
  }
  while (j <= end) {
    animations.push(["compare", j, j]);
    animations.push(["uncompare", j, j]);
    temp.push(arr[j++]);
  }
  for (let k = start; k <= end; k++) {
    arr[k] = temp[k - start];
    animations.push(["overwrite", k, arr[k]]);
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  let arr = [...array];
  quickDivider(arr, 0, arr.length - 1, animations);
  for (let i = 0; i < arr.length; i++) {
    animations.push(["done", i]);
  }
  return animations;
}

function quickDivider(arr, start, end, animations) {
  if (start < end) {
    let pivotIndex = partition(arr, start, end, animations);
    quickDivider(arr, start, pivotIndex - 1, animations);
    quickDivider(arr, pivotIndex + 1, end, animations);
  }
}

function partition(arr, start, end, animations) {
  let pivot = arr[end];
  animations.push(["mark_min", end]);
  let i = start - 1;
  for (let j = start; j < end; j++) {
    animations.push(["compare", j, j]);
    if (arr[j] < pivot) {
      i++;
      animations.push(["overwrite", i, arr[j]]);
      animations.push(["overwrite", j, arr[i]]);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    animations.push(["uncompare", j, j]);
  }
  animations.push(["overwrite", i + 1, arr[end]]);
  animations.push(["overwrite", end, arr[i + 1]]);
  let temp = arr[i + 1];
  arr[i + 1] = arr[end];
  arr[end] = temp;
  animations.push(["unmark_min", end]);
  return i + 1;
}
