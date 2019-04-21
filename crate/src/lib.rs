mod swappable_vec;
mod utils;
mod insertion;
mod selection;
mod quick;
mod gnome;
mod merge;
mod heap;
mod bubble;
mod cocktail;
use wasm_bindgen::prelude::*;
use swappable_vec::SwappableVec;
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

#[wasm_bindgen]
pub fn sort(array : Vec<u32>, sort_type: String) -> Vec<u32>{
    let mut arr = SwappableVec::new(array);
    
    let _result = match sort_type.as_ref() {
            "insertion" => Ok(insertion::sort(&mut arr)),
            "selection" => Ok(selection::sort(&mut arr)),
            "quick" => Ok(quick::sort(&mut arr)),
            "merge" => Ok(merge::sort(&mut arr)),
            "gnome" => Ok(gnome::sort(&mut arr)),
            "heap" => Ok(heap::sort(&mut arr)),
            "bubble" => Ok(bubble::sort(&mut arr)),
            "cocktail" => Ok(cocktail::sort(&mut arr)),
            _ => Err(2)
        };
    arr.history
}