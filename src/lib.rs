mod utils;
extern crate rand;
extern crate web_sys;
use std::cmp::Ordering;
use std::cmp;

use wasm_bindgen::prelude::*;
// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

pub fn insertion_sort(mut array: Vec<u32>) -> Vec<u32> {
    let mut swaps : Vec<u32> = Vec::new();
    for i in 0..array.len() {
        let mut j = i;
        while j > 0 && array.get(j-1) > array.get(j){
            swaps.push(j as u32);
            swaps.push((j-1) as u32);
            array.swap(j, j-1);
            j -= 1;
        }
    }
    swaps
}


pub fn selection_sort(mut array: Vec<u32>) -> Vec<u32> {
    let mut swaps : Vec<u32> = Vec::new();
    for j in 0..array.len() {
        let mut i_min = j;
        for i in (j+1)..array.len() {
            if array[i] < array[i_min]{
                i_min = i;
            }
            swaps.push(i as u32);
            swaps.push(i as u32);
        }
        if i_min != j {
            swaps.push(j as u32);
            swaps.push(i_min as u32);
            array.swap(j, i_min);
        }
    }
    swaps
}

pub fn quicksort_by<T, F>(vec: &mut [T], cmp: &F, offset : usize)  -> Vec<u32>
    where F: Fn(&T, &T) -> Ordering {
    let mut swaps : Vec<u32> = Vec::new();
    let len: usize = vec.len();
    if len <= 1 {
        return swaps;
    }

    let pivot: usize = 0;
    swaps.push((offset+pivot) as u32);
    swaps.push((offset+(len / 2)) as u32);
    vec.swap(pivot, len / 2);

    let mut left: usize = 1;
    let mut right: usize = vec.len() - 1;

    loop {
        while left < len && cmp(&vec[left], &vec[pivot]) != Ordering::Greater {
            swaps.push((offset+left) as u32);
            swaps.push((offset+left) as u32);
            left += 1
        }
        while right > 0 && cmp(&vec[right], &vec[pivot]) != Ordering::Less {
            swaps.push((offset+right) as u32);
            swaps.push((offset+right) as u32);
            right -= 1
        }
        if left >= right {
            break;
        }
        vec.swap(left, right);
        swaps.push((offset+left) as u32);
        swaps.push((offset+right) as u32);
        left += 1;
        right -= 1;
    }
    vec.swap(pivot, right);
    swaps.push((offset+pivot) as u32);
    swaps.push((offset+right) as u32);
    swaps.extend_from_slice(&quicksort_by(&mut vec[0..cmp::min(left - 1, right)], cmp,offset));
    swaps.extend_from_slice(&quicksort_by(&mut vec[cmp::max(left, right + 1)..], cmp,offset+cmp::max(left, right + 1)));
    swaps
}

pub fn quicksort<T: Ord>(vec: &mut [T])  -> Vec<u32> {
    quicksort_by(vec, &|x, y| x.cmp(y),0)
}


#[wasm_bindgen]
pub fn sort(array : Vec<u32>, sort_type: String) -> Vec<u32> {
    log(array.iter().max().unwrap().to_string().as_ref());
    let result = match sort_type.as_ref() {
            "insertion" => Ok(insertion_sort(array)),
            "selection" => Ok(selection_sort(array)),
            "quick" => Ok(quicksort(&mut array.to_vec())),
            _ => Err(2)
        };
    result.ok().unwrap()
}