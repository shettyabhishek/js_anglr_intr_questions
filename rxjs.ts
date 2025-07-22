

import { concat, forkJoin, fromEvent ,of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const a = of([1,2,3,4])
const b = of(['a','b','b','d']);

//mergeMap
a.pipe(
  mergeMap((el) => {
    return b.pipe(
       map((it)=>{
        return {
          num: el,
          str: it
        }
       })
    );
  })
).subscribe(res => console.log(res))

//Concat
const res = concat(a,b);
res.subscribe(item => console.log(item));

//forkjoin
forkJoin([a,b]).subscribe(r => console.log(r));