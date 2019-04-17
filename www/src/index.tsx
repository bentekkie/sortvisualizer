
import * as $ from 'jquery'
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { App } from "./App";
const list = $("#list")


function shuffleArray<T extends number>(arr: T[]) {
    return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}

function* range(start : number, end: number) : IterableIterator<number> {
    for(let i = start; i < end; i++){
        yield i;
    }
}

function fillList(list : JQuery<HTMLElement>, array : any[]) {
    list.empty();
    list.append(array.map(n => `<li>${Array(n).fill('.').join('')}</li>`).join(""))
}


ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
  );
/*$("#n").keydown(e => {
    if(e.keyCode === 13){
        const n = $("#n").val() as number
        console.log(n)
        $("#n").prop('disabled', true);
        displaySort(n,100).then(() => $("#n").prop('disabled', false))
    }
})*/
