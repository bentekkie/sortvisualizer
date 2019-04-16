import {sort} from "sortvisualizer";

class sortItterator implements Iterator<String>{

    

    next(value?: any): IteratorResult<String> {
        throw new Error("Method not implemented.");
    }    return?(value?: any): IteratorResult<String> {
        throw new Error("Method not implemented.");
    }
    throw?(e?: any): IteratorResult<String> {
        throw new Error("Method not implemented.");
    }


}


function shuffleArray<T extends number>(arr: T[]) {
    return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}

function* run_sort(original: number[], sort_type: string) {
    const result = sort(new Uint32Array(original), sort_type);
    console.log("got array")
    let prev = {array,swap:[-1,-1]}
    for (let i = 0; i < result.length / 2; i++) {
        const swap: [number, number] = [result[(2 * i)], result[(2 * i + 1)]]
        const array = [...prev.array];
        [array[swap[0]], array[swap[1]]] = [array[swap[1]], array[swap[0]]];
        prev = {array,swap}
        yield prev
    }
}

const array = shuffleArray([...Array(1000).keys()]);
for(const step of run_sort(array, "selection")){
    console.log(step.swap)
}
for(const step of run_sort(array, "insertion")){
    console.log(step.swap)
}