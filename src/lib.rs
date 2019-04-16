mod utils;
extern crate rand;
extern crate web_sys;

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

pub fn insertion_sort(mut array: Vec<u32>) -> Vec<u8> {
    let mut swaps : Vec<u8> = Vec::new();
    for i in 0..array.len() {
        let mut j = i;
        while j > 0 && array.get(j-1) > array.get(j){
            swaps.push(j as u8);
            swaps.push((j-1) as u8);
            array.swap(j, j-1);
            j -= 1;
        }
    }
    swaps
}


pub fn selection_sort(mut array: Vec<u32>) -> Vec<u8> {
    let mut swaps : Vec<u8> = Vec::new();
    for j in 0..array.len() {
        let mut i_min = j;
        for i in (j+1)..array.len() {
            if array[i] < array[i_min]{
                i_min = i;
            }
            swaps.push(i as u8);
            swaps.push(i as u8);
        }
        if i_min != j {
            swaps.push(j as u8);
            swaps.push(i_min as u8);
            array.swap(j, i_min);
        }
    }
    swaps
}



#[wasm_bindgen]
pub fn sort(array : Vec<u32>, sort_type: String) -> Vec<u8> {
    log(sort_type.as_ref());
    let result = match sort_type.as_ref() {
            "insertion" => Ok(insertion_sort(array)),
            "selection" => Ok(selection_sort(array)),
            _ => Err(2)
        };
    result.ok().unwrap()
}