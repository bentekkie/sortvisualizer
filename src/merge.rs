use crate::SwappableVec;


pub fn sort(arr: &mut SwappableVec){
    let len = arr.len();
    helper(arr,0,len);
}

fn helper(arr: &mut SwappableVec, l : usize, u : usize){
    if u-l > 1{
        let m = (u+l)/2;
        helper(arr,l,m);
        helper(arr,m,u);
        let mut left = arr[l..m].to_vec();
        let mut right = arr[m..u].to_vec();
        left.reverse();
        right.reverse();
        for k in l..u {
            if left.is_empty() {
                arr[k] = right.pop().unwrap();
            } else if right.is_empty(){
                arr[k] = left.pop().unwrap();
            } else if right.last() < left.last() {
                arr[k] = right.pop().unwrap();
            } else {
                arr[k] = left.pop().unwrap();
            }
        }
    }
    
}
