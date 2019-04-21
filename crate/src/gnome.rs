use crate::SwappableVec;

pub fn sort(arr: &mut SwappableVec) {
    let mut i = 0;
    while i < arr.len() {
        if i == 0 || arr[i - 1] < arr[i] {
            arr.update(i-1, i);
            i += 1;
        } else {
            arr.swap(i - 1, i);
            i -= 1;
        }
    }
}