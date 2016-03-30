/// <reference path="../node_modules/rxjs/Rx.d.ts" />
/// <reference path="../typings/main/ambient/d3/index.d.ts" />

import * as Rx from 'rxjs';
import * as d3 from 'd3';

Rx.Observable.from([1,2,3,4,5])
.map((value: number)=> value * 100)
.subscribe((value:number)=>{
  document.querySelector('body').innerHTML += value;
});

Rx.Observable.fromEvent(document, 'click')
.subscribe((e)=> console.log(e));


let promise = fetch('./aaa.json')
.then((data)=> console.log(data))
.catch((error)=> console.log(error));

let svg = d3.select('body')
.append('svg')
.attr({
  width: 600,
  height: 600,
});

let base = svg.append('g');
base.selectAll('g')
.data([100,300,100])
.enter()
.append((num:number)=>{
  let node = document.createElementNS(d3.ns.prefix['svg'], 'g');
  d3.select(node)
  .attr({
    transform: 'matrix(1,0,0,1,' + num + ', 0' + ')'
  })
  .append('rect')
  .attr({
    width: num,
    height: num,
    stroke: '#333',
    fill: '#ccc',
  });
  return node;
});

Rx.Observable.fromPromise(promise)
.subscribe((data)=> {
    console.log(data);
})
