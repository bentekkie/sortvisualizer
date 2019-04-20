export class Sorter {
    private _update : (arr: number[]) => void
    private _done : () => void
    constructor(update : (arr: number[]) => void,done: () => void) {
        this._update = update
        this._done = done
    }

    update(arr : number[]){
        this._update(arr);
        
    }

    done(){
        this._done()
    }
}


export function delay(amount : number){
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
}