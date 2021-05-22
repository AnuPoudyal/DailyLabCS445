/*Exercise 04
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and 
add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
var baseObject = { 
	width: 0, 
	length: 0 
}; 
var rectangle = Object.create(baseObject); 
rectangle.width = 5; 
rectangle.length = 2; 
rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 
console.log(rectangle.calcSize()); // 10
*/

//solution

abstract class Rectangle {
    calcSize = ():number =>{
        return 0;
    };
}

 class BaseObject extends Rectangle{
    width:number =0
    length :number =0
    }


let rectangle :BaseObject = new BaseObject();
rectangle.width =5;
rectangle.length =2;
rectangle.calcSize = function(){
    return this.length * this.width;
}

console.log(rectangle.calcSize());
