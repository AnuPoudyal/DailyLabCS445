//await====always async function

/*Array.prototype.removeDuplicates=async function(){
    let arr=this;
    let result=await new Promise(function(resolve,reject);
       resolve([...new setInterval(arr)]); 
    });
    console.log(result);
}





const isPrime=(num)=>{
return new Promise(function(resolve,reject){
    setTimeout(()=>{
        for(){
            if(){
                reject({prime:false});
            }
        }
          resolve({prime:num>1});
 },500);
});
};
async function isprimeasync(num){
let result=await isPrime(5);
console.log(result);
}
*/


/*Array.prototype.newReverse=function(){
    console.log(this.reverse());
}
Array.prototype.newReverse=function(){
    new Promise((resolve,reject)=>{
  resolve(this.reverse());
}).then(console.log);
}

async function newReverseAsync(arr){
    return arr.reverse();
}
Array.prototype.newReverse=async function(){
    let res=await myReverse(this);
    console.log(res);
}

class Student{
private firstname:String;
private lastname:String;
private grades:number[];
constructor(firstname:String,lastname:String,grades:number[]){
this.firstname=firstname;
this.lastnamae=lastname;
this.grades=grades;
addGrade(grade:number){
    this.grades.push(grade);
}
computeAverage():number{
    return this.grades.reduce((average,current,index,array)=>average+current/array.length,0)
}}
}
 

class Uni{
constructor(private name:String,private dept:string){
    }
    graduation(year:number):void{
console.log("hello");
    }

let bankAccount:{money:number,deposit(value:number)=>void{
money:2000,
deposit(value:number):void{
    this.money+=value;
}
let myself:{
name:String;
bankAccount:typeOf bankAccount;
hobbies:string[];
}={
    name:"anu",
    bankAccount:bankAccount,
    hobbies:["violin","cooking"]
};

class Car{
    this.acceleration:number=0;
constructor(public name:string){
    }
honk():void{
    console.log("hello")
}
acceleration(speed:number):void{
this.acceleartion=this.all+speed;
}
}


interface IEmployee{
id:number;
firstname:string;
lastname:string;
set firstName(fname:string):void;
set LastName:(lname:string)=>void;
getFirstName:()=>string;
getLastName():string;
}
setFullName(fname:string,lname:string):void;




let emp:IEmployee={
id:1,
firstname:'anu',
lastname:'pou',
setFirstName:function(fname:string){
    this.firstname=fname;
}
setLastName:function(){
    this.lastname=lname;
}
getFirstName:function(){
    return this.firstName;
}
getLastName:function(){
    return this.lastname;
}


class Uni{
Constructor(public name:string,public dept:string){

}
graduation(year:number){
    console.log("hello");
}
}


let bankAccount:{money:number,deposit(value:number)=>void}={
money:2000,
deposit(value:number):void{
    this.money+value=value;
}

let myself:{
name:string;
bankAccount:typeof bankAccount;
hobbies:string[];
}={
name:"anu",
bankAccount:bankAccount,
hobbies:["violin","cooking"];
};
}









class Car{
    public accleration:number=0;
constructor(public name:string){
}
honk():void{
    console.log("hello");
}
accelerate(speed:number):void{
    this.accelearte=this.all+speed;
}


class BaseObject{
constructor(public width:number=0,public length:number=0){
    }
    class Rectangle extends BaseObject{

  calcSize():number{
      return this.width*this.length;
  }


   let bankAccount:{ money:number,deposit(value:number)=>void}={

money:2000,
deposit(value:number):void{
this.money+=value;
}

let myself:{
name:string;
bankAccount:typeOf bankAccount;
hobbies:string[];
} = {

name:"anu",
bankAccount=bankAccount,
hobbies:["violin","cooking"]
};



interface Icourse{
name:string;
display():void;    
}

interface Icode{
    code:number;
    name:string;
}
constructor(code:number,name:string){
    
this.code=code;
this.name=name;
}

display():void{
    console.log("hello");
}




Array.prototype.newReverse=function(){
    console.log(this.reverse());
}
Array.prototype.newReverse=function(){
new Promise((resolve,reject)=>{
resolve(this.reverse());



}).then(console.log);
}


async function newReverseAsync(arr){
    return arr.reverse();
}

Array.prototype.newReverse=async function(){
let res=await newReverseAsync(this);
console.log(res);
}




Aaaray.protottype.newReverse=function(){
    console.log(this.reverse());
}
Array.prototype.newReverse=function(){
    new Promise(resolve,reject)=>{
resolve(this.reverse());
    }).then(console.log);
}

async function myReverse(arr){
    return arr.reverse();
}
Array.prototype.newReverse=async function(){
let res=await myReverse(this);
console.log(res);
}


class Student{
    private firstname:string;
    private lastname:string;
    private grades:number[];
    Constructor(firstname:string,lastname:string,grades:number[]){
this.firstname=firstname;
this.lastname=lastname;
this.grades=grades;

addGrade(grade:number):void{
    this.grades.push(grade);
}

computeGrades():number{
return this.grades.reduce((average,current,index,array)=>average+current/array.length,0);

}


interface IEmployee{
id:number;
firstname:string;
lastname:string;
setFirstName(fname:string):void;
setLastName:(lname:string)=>void;
getFirstName():string;
getLastName:()=>string;
}

let emp:IEmployee={
    id:1,
firstname:'anu',
lastname:'pou',
setFirstName:function(fname:string){
    this.firstname=fname;
}
setLastName:function(lname:string){
    this.lastname=lname;
}
getFirstName:function(){
    return this.firstName;
}
getLastName:function(){
    return this.lastName;
}
    


































interface Icourse{
    name:string;
    display():void;
}
interface Icode{
    code:number;
}
class Map implements Icourse,Icode{
    code:number;
    name:string;
}
constructor(code:number,name:string){
    this.code=code;
    this.name=name;
}
display():void{
    console.log(`${this.name};


abstract class Employee{
    fname:string;
    lname:string;
    salary:number;
    abstract address:string;
    Constructor(fname:string,lname:string,salary:number){
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
    }
    abstract computeAnnualSalary():number;
}
class Hourly extends Employee{
address:string="default";
hoursperweek:number;
Constructor(fname:string,lname:string,salary:number,hoursperweek:number){

super(fname,lname,salary);
this.hoursperweek=hoursperweek;
}
computeAnnualSalary():number{
    return this.salary*this.hoursperweel*52;
}

class Student{
private firstname:string;
private lastname:string;
private grades:number[];

Constructor(fname:string,lname:string,mygrades:number[]){
this.firstname=fname;
this.lastname=lname;
this.grades=mygrades;
  
addGrade(grade:number):void{
    this.grades.push(grade);
}
computeAverageGrade():number{
return this.grades.reduce((average,current,index,array)=average+current/array.length,0);
}}
computeTotalGrade():number{
let sum=this.grades.reduce((sum,current)=>sum+current,0);
return sum;
}*/

//.......JSON........


/*{ "students":[
 {"firstname":"anu","lastname":"poudyal"},
 {"firstname":"sanu","lastname":"bhandari"},
]}*/

/*const jsonString='{"firstname":"john","lastname":"smith"}';
const data=JSON.parse(jsonString);
console.log(data.firstname); //john*/

/*const jsonString='{"firstname":"john","lastname":"smith","grades":[1,20,3,4]}';
const data=JSON.parse(jsonString);
console.log(data);
console.log(data.firstname);//john
console.log(data.grades.length);//4
console.log(data.grades[1]);//20*/




//Fetch()GET
1)postPromise.then(response=>console.log(response.ok,response.status));
2)postPromise.then(response=>response.json())
             .then(result=>console.log(result));

             let postPromise=fetch('https:jsonplaceholder.typicode.com/posts');
             postPromise.then(response=>response.json())
                        .then(result=>console.log(result.length));

//Fetch()POST

let poatObject={
title:'cs445',
body:'this is cs445',
userId:1,
};

let jsonString=JSON.stringify(postObject);
fetch('https://jsonplaceholder.typicode.com/posts',{
method:'POST',
body:jsonString,
headers:{
'content-type':application/json; charset=UFT-8'},
},
})
.then(response=>response.json())
.then(json=>console.log(json));

//Using async&await(fetchasync.js)

async function fetchPostById(postid){
let response=await fetch("https://jsonplaceholder.typicode.com/posts+postid");
if(response.ok){
let json=await response.json();
console.log(json);
}else{
console.log("HTTP-Error:" + response.status);
}
}
fetchPostById(1);

//index.html
<body>
    <Form>
        <p><label> Title:<input name="title" id="title" / > </label></p>
        <p>Body:<input name="body" id="body" /> </p>
        <p>userId:<inpi=ut name="userId"> id="userId"/</p>
        <p>
<input type="radio" name="creditcard" /> visa
<input type="radio" name="creditcard" />mastercard
<input type="radio" name="creditcard" />Amex
</p>
<input type="submit" value="submit" id="submitBtn">
    </form>
</body>


let postObject={
title:'cs445',
body:'this is course',
userId:1,
};
let jsonString=JSON.stringify(postObject);
fetch('https:/jsonplaceholder.typicode.com/posts',
{
method:'POST',
body:jsonString,
headers:{
'content-type':'application/json';charset=UTF-8',
},

})
.then(response=>response.json())
.then(json=>console.log(json));  
</body>')




async function fetchPostById(postid){
let reponse=await fetch("https:");
if(response.ok){
let json=await response.json();
console.log(json);
}else{
    console.log("HTTP-Error:" + response.status);
}
}
fetchPostById(1);

window.onload=function(){
document.getElementById("getPostBtn").onclick=function(){
    fetchPostById(document.getElementById("userId2").value);
}
}














