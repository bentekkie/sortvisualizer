import {sort,} from "sortvisualizer"

export enum sorts{
    quick = "quick",
    selection = "selection",
    insertion = "insertion",
    merge = "merge",
    gnome = "gnome",
    heap = "heap",
    bubble = "bubble",
    cocktail = "cocktail"
}


export function* run_sort(original: number[], sort_type: sorts) {
    const len = original.length+2;
    const result = sort(new Uint32Array(original), sort_type);
    console.log("got array")
    for (let i = 0; i < result.length / len; i++) {
        let array = [...result.slice(i*len,(i+1)*len)];
        let swap = array.splice(array.length-2,2);
        yield {
            array,
            swap
        }
    }
}

export const delay = (amount : number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
}