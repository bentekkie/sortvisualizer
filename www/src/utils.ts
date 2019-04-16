import {sort} from "sortvisualizer"

export function shuffleArray<T extends number>(arr: T[]) {
    return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}

export const delay = (amount: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
  };

export function* run_sort(original: number[], sort_type: string) {
    const result = sort(new Uint32Array(original), sort_type);
    console.log("got array")
    let prev = {array:original,swap:[-1,-1]}
    for (let i = 0; i < result.length / 2; i++) {
        const swap: [number, number] = [result[(2 * i)], result[(2 * i + 1)]]
        const array = [...prev.array];
        [array[swap[0]], array[swap[1]]] = [array[swap[1]], array[swap[0]]];
        prev = {array,swap}
        yield prev
    }
}