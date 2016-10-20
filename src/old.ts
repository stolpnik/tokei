// import * as Rx from 'rxjs';
// import * as d3 from 'd3';

// Rx.Observable.from([1,2,3,4,5])
// .map((value: number)=> value * 100)
// .subscribe((value:number)=>{
//   document.querySelector('body').innerHTML += value;
// });

// // Rx.Observable.fromEvent(document, 'click')
// // .subscribe((e)=> console.log(e));

// let svg = d3.select('body')
// .append('svg')
// .attr({
//   width: 600,
//   height: 600,
// });

// let base = svg.append('g');
// base.selectAll('g')
// .data([100,300,100])
// .enter()
// .append((num:number)=>{
//   let node = document.createElementNS(d3.ns.prefix['svg'], 'g');
//   d3.select(node)
//   .attr({
//     transform: 'matrix(1,0,0,1,' + num + ', 0' + ')',
//     class: 'draggable',
//   })
//   .append('rect')
//   .attr({
//     width: num,
//     height: num,
//     stroke: '#333',
//     fill: '#ccc',
//   });
//   return node;
// });

// Rx.Observable.fromEvent(document.querySelector('.draggable'), 'click')
// .subscribe((e)=> {
//   console.log(e);
// });
