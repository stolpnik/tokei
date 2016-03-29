/// <reference path="../node_modules/rxjs/Rx.d.ts" />

import * as Rx from 'rxjs';

Rx.Observable.from([1,2,3,4,5])
.map((value: number)=> value * 100)
.subscribe((value:number)=>{
  document.querySelector('body').innerHTML += value;
})

let promise = fetch('./aaa.json')
.then((data)=> console.log(data))
.catch((error)=> console.log(error));

Rx.Observable.fromPromise(promise)
.subscribe((data)=> {
    console.log(data);
})