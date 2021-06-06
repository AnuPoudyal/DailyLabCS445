//module pattern

const shopppingcart=(function(){
    let basket=[];
    return{
upertItem:function(product){
for(let i=0;i<basket.length;i++){
let temp=basket[i];
if(temp.id===product.id){
    basket[i]=product;
    return;
}}
 getItems:function(){
return basket.length;
}
getTotalPrice(){
    return basket.reduce((total,p)=>total+p.price*p.count(0));
},
removeItemById(id){
    basket=basket.filter(p=>p.id!==p.id);
}};
})();

//observer pattern {'event':[observer]}

class Subject{
observers={};
on(event,fn){
if(!this.observers[event]){
    this.observers[event]=[fn];
}else{
    this.observers[event].push(fn);
}}

emit(event,message){{
    if(this.observers[event]){
        this.observers[event]=this.observers[event].filter(f=>f!==fn);
    } }

off(event,fn){
    this.observers[event]=this.observers[event].filter(f=>f!==fn);

    //factory pattern(regularbulbs[50,100]for 1 year,energysaverbulbs[5,40]for 10 years)

    class Regular{
constructor(){
    this.range=[50,100];
    this.age=1;
}}
class Energy{
constructor(){
    this.range=[5,40];
    this.age=10;
}}
class Factory{
createBulb(type){
    let bulb;
    if(type==="regular"){
    bulb=new Regular();
    }else if(type==="energy"){
        bulb=new Energy();
    }return bulb;
}}

const bulbs=[];
const factory=new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy"));

for(let i=0;i<bulbs.length;i++){
    console.log(bulbs[i]);
}

//decorator
class User{
constructor(name){
    this.name=name;
}}
class DecoratedUser{
constructor(user,street,city){
    this.user=user;
    this.name=user.name;
    this.street=street;
    this.city=city;
}
logger(){
console.log("decorated user:" +this.name+" "+this.street+" "+this.city);
}
let user=new user("kelly");
let decorated=new DevoratedUser("user","broadway","nyc");
decorated.logger();
}

//strategy
class Info{
logging(msg){
    console.info(msg);
}}
class warn(msg){
    console.warn(msg);
}
class Error(msg){
    console.error(msg);
}
class Table(msg){
    console.table(msg);
}
class Strategy{
loggingMethod="";
setStrategy(loggingMethod){
    this.loggingMethod=loggingMethod;
}
logging(msg){
    this.loggingMethod.logging(msg);
}

const Strategy=new Strategy(){
Strategy.setStrategy(new Info());
Strategy.logging('info');
Strategy.setStrategy(new warn());
Strategy.logging('warn');
Strategy.setStrategy(new Error());
Strategy.logging('error');
Strategy.setStrategy(new Table)};
Strategy.logging(['table','table']);


}





}

let fibonacci=(function(){
let memo={};
function f(n){
    let value;
    if(n in memo){
value=memo[n];
}
else{

if(n==0||n==1){
    value=n;
}
else{
    value=f(n-1)+f(n-2);
    memo[n]=value;
}
return value;
}



}


return f;


})();
console.log(fibonacci(8));