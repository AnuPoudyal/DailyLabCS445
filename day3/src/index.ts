//let age:number=20;
//let employee: {id:number;name:string}={id:1,name:'john'};

/*const WAGEPERHOUE=10;
enum color {RED,BLUE,GREEN};
class color2{
index;
static RED=new color2(0);
static BLUE=new color2(1);
static GREEN=new color2(2);
constructor(index:number){
    this.index=index;
}}
console.log(color2.RED); */

interface IEmployee{
id:number;
firstName:string;
lastName:string;
setFirstName(fname:string):void;
setLastName:(lname:string)=>void;
getFirstName:()=>string;
getLastName():string;
}
let emp:IEmployee={
    id:1,
    firstName:'john',
    lastName:'smith',
    setFirstName:function(fname:string){
        this.firstName=fname;
    },
    setLastName(lname:string){
        this.lastName=lname;
    },
    getFirstName:function(){
        return this.firstName;
    },getLastName:function(){
        return this.lastName;
    }
}