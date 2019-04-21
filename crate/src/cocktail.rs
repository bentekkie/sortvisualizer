use crate::SwappableVec;

pub fn sort(arr: &mut SwappableVec) {
    let len = arr.len();
    // Check if slice is shorter than 2, because if it's empty we get
    // substraction with overflow.
    if len < 2 {
        return;
    }

    let mut begin = 0;
    let mut end = len - 1;
    while begin < end {
        let range = begin..end;
        end = begin;
        for i in range {
            if arr[i] > arr[i + 1] {
                arr.swap(i, i + 1);
                end = i;
            }
        }

        let range = (begin..end).rev();
        begin = end;
        for i in range {
            if arr[i] > arr[i + 1] {
                arr.swap(i, i + 1);
                begin = i;
            }
        }
    }
}