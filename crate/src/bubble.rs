use crate::SwappableVec;

pub fn sort(arr: &mut SwappableVec) {
    let len = arr.len();

    for i in (0..len).rev() {
        let mut has_swapped = false;
        for j in 0..i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                has_swapped = true;
            } else {
                arr.update(j, j+1);
            }
        }
        if !has_swapped {
            break;
        }
    }
}