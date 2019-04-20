use crate::SwappableVec;

pub fn sort(arr: &mut SwappableVec) {
    build_max_heap(arr);
    for i in (0..arr.len()).rev() {
        arr.swap(0, i);
        max_heapify(arr, 0, i);
    }
}

/// Creates an in-place max-heap of given slice.
/// The largest value will be at the first index.
fn build_max_heap(arr: &mut SwappableVec) {
    let len = arr.len();
    for i in (0..=len / 2).rev() {
        max_heapify(arr, i, len);
    }
}

/// Max heapifies an embedded heap from given index.
fn max_heapify(arr: &mut SwappableVec, i: usize, heap_len: usize) {
    let left = 2 * i + 1;
    let right = left + 1;

    let mut largest = i;
    arr.update(left, right);
    if left < heap_len && arr[left] > arr[largest] {
        largest = left;
    }
    if right < heap_len && arr[right] > arr[largest] {
        largest = right;
    }

    if largest != i {
        arr.swap(i, largest);
        max_heapify(arr, largest, heap_len);
    }
}