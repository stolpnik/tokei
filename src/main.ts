/// <reference path="../node_modules/rxjs/Rx.d.ts" />

import * as Rx from 'rxjs';

Rx.Observable.fromArray([1,2,3,4,5])
.subscribe((value:number)=>{
  document.querySelector('body').innerHTML += value;
})

fetch('./aaa.json')
.then((data)=> console.log(data))
.catch((error)=> console.log(error));