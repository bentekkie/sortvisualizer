use std::ops::{Index,IndexMut,Range};
pub struct SwappableVec {
    vec: Vec<u32>,
    pub history: Vec<u32>
}

impl SwappableVec {
    pub fn new(vec : Vec<u32>) -> SwappableVec {
        SwappableVec { vec, history:Vec::new()}
    }

    pub fn len(&mut self) -> usize {
        self.vec.len()
    }

    pub fn swap(&mut self, a: usize, b: usize){
        self.vec.swap(a, b);
        self.update(a,b);
    }

    pub fn observe(&mut self, i : usize){
        self.update(i, i);
    }
    pub fn update(&mut self, a: usize, b: usize){
        self.history.append(&mut self.vec.to_vec());
        self.history.push(a as u32);
        self.history.push(b as u32);
    }
}


impl Index<usize> for SwappableVec {
    type Output = u32;

    fn index(&self, i: usize) -> &u32 {
        &self.vec[i]
    }
}

impl IndexMut<usize> for SwappableVec {

     fn index_mut(&mut self, i: usize) -> &mut u32 {
         self.observe(i);
         &mut self.vec[i]
     }
}

impl Index<Range<usize>> for SwappableVec {
    type Output = [u32];

    fn index(&self, rng: Range<usize>) -> &[u32] {
        &self.vec[rng]
    }
}
