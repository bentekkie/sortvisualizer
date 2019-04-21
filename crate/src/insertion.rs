use crate::SwappableVec;
pub fn sort(arr: &mut SwappableVec) {
    for i in 0..arr.len() {
        let mut j = i;
        while j > 0 && arr[j-1] > arr[j]{
            arr.swap(j, j-1);
            j -= 1;
        }
    }
}
