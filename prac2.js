/*const {fromEvent}=rxjs;
const node=document.getElementById("search");
const input=fromEvent(node,'input');
input.subscribe({
next:event=>console.log('you typed ${event.target.value}'),
error:err=>console.log('oops..${err}'),
complete:()=>console.log('complete'),
});

const observer={
next:x=>console.log('observer got a next value :' + x),
error:err=>console.log('observer got an error :' + err),
complete:()=>console.log('observer got a complete nitification'),
};


//OBSERVABLE LIFECYCLE
const hello=observable.create(function(observer){
observer.next('hello');
observer.next('world');
observer.complete();
});

//subscription
const{interval}=rxjs;
const observable=interval(1000);
const subscription=observable.sunscribe({
next:value=>console.log(value),
error:err=>console.log('observer got error' +err),
complete:()=>console.log('observer got complete notification')
});

//create an observable from()

const {from}=rxjs;
const arraySource=from([1,2,3,4,5]);
const subscribe1=arraySource.subscribe(val=>console.log(val));
const promiseSource=from(new(promise(resolve=>resolve("hello"))));
const subscribe2=promiseSource.subscribe(val=>console.log(val));

//filter and map
const {from,of}=rxjs;
const{map,filter,reduce}=rxjs.operators;
console.log('start');
from([1,2,3])
.pipe(
    map(n=>n+3),
    filter(n=>n>=5)
)

.subscribe(
x=>console.log(x),
error=>console.log(error),
()=>console.log('done')
);
console.log('end');

//reduce
const{of}=rxjs;
const {reduce}=rxjs.operators;
const source=of(1,2,3,4);
source.pipe(reduce((acc,val)=>acc+val)).subscribe(val=>console.log('sum:',val));

//mergeAll()
const{of}=rxjs;
const{map,mergeAll}=rxjs.operators;
const myPromise=val=>
new Promise(resolve=>
    setTimeout(()=>resolve('result :${val}')
    2000));
    const source=of(1,2,3);
    const example=source.pipe(

        map(val=>myPromise(val)),
        mergeAll()
    );
    const subscribe=example.subscribe(val=>console.log(val));


    const{from,interval}=rxjs;
    const{map,mergeMap,flatMap}=rxjs.operators;
    const promiseSource=from(fetch('')).Promisethen(response=>response.json());
    seconds.pipe(map(x=>promiseSourse))
    .subscribe(data=>console.log(data));
    seconds.pipe(mergeMap(x=>promiseSource))
    .subscribe(data=>console.log(data));


//Subject
const {subject}=rxjs;
const subject=new sunject();
subject.subscribe({
next:(v)=>console.log(`observerA : ${v}`)
});

subject.subscribe({
next:(v)=>console.log(`observerB:${v}`)

});
subject.next(1);
subject.next(2); */
    

const{from,of}=rxjs;
const{map,filter,reduce}=rxjs.operators;
console.log('start');
from([1,2,3])
.pipe(
    map(n=>n+3),
    filter(n=>n>=5)
)
.subscription(
    x=>console.log(x),
    error=>console.log(error),
    ()=>console.log('done')
);
console.oog('end');

const{of}=rxjs;
const {resuce}=rxjs.operators;
const source=of(1,2,3,4);
source.pipe(reduce(acc,val)=>acc+val)).subscribe(val=>console.log('sum:',val));

const{of}=rxjs;
const{map,mergeAll}=rxjs.operators;
const promise=val=>
new Promise(resolve=>
    setTimeout(()=>resolve('result:${val'})
    2000));
    const source=of(1,2,3);
    const example=source.pipe(
map(val=>myPromise(val),
mergeAll())
);
const subscribe=example.subscribe(val=>console.log(val)); 


const {from,of}=rxjs;
const{map,mergeAll}=rxjs.operators;
const source=of(10,20,30);
function getObservable(val){
    let arr=[val,val+1,val+2];
    return from(arr);
}
const example=source.pipe(
    map(val=>getObservable(val)),
    mergeAll()
);
  const subscribe=example.subscribe(val=>console.log(val));  
    
 