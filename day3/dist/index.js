"use strict";
//let age:number=20;
//let employee: {id:number;name:string}={id:1,name:'john'};
const WAGEPERHOUE = 10;
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["BLUE"] = 1] = "BLUE";
    color[color["GREEN"] = 2] = "GREEN";
})(color || (color = {}));
;
class color2 {
    constructor(index) {
        this.index = index;
    }
}
color2.RED = new color2(0);
color2.BLUE = new color2(1);
color2.GREEN = new color2(2);
console.log(color2.RED);
