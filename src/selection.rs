use crate::SwappableVec;


pub fn sort(arr: &mut SwappableVec) {
    for j in 0..arr.len() {
        let mut i_min = j;
        for i in (j+1)..arr.len() {
            if arr[i] < arr[i_min]{
                i_min = i;
            }
            arr.observe(i)
        }
        if i_min != j {
            arr.swap(j, i_min);
        }
    }
}