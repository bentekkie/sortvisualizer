use crate::SwappableVec;
fn helper(arr: &mut SwappableVec, l: usize, h: usize) {
    let len = h-l;
    if 1 < len {
        let (mut pivot, mut hi) = (l, h-1);
        for _ in 0..len-1 {
            if arr[pivot] < arr[pivot+1] {
                arr.swap(pivot+1, hi);
                hi -= 1;
            } else {
                arr.swap(pivot, pivot+1);
                pivot += 1;
            }
        }
        helper(arr,l,pivot);
        helper(arr,pivot+1,h);
    }
}

pub fn sort(arr: &mut SwappableVec) {
    let len = arr.len();
    helper(arr,0,len);
}
