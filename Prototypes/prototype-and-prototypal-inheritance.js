//The prototype is an object that is associated with every functions and objects by default in JavaScript
//Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
//every object has its own __proto_
//Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property
// that points to prototype object of a function that created this object.
let arr=["johar","batta"];

arr.__proto__==Array.prototype
arr.__proto__.__proto__==Object.prototype
arr.__proto__.__proto__.__proto //null


let object={
    name:"johar",
    city:"NBH",
    getIntro:function(){
        console.log(this.name);
    }
}
object.__proto__==Object.prototype
object.__proto__.__proto__==null 
//object.getIntro.prototype.constructor.prototype.constructor
//object.getIntro.prototype.constructor.prototype.__proto__.constructor.__proto__.__proto__
function fun(){

}

fun.__proto__==Function.prototype
//but again function is also a object so fun.__proto__.__proto__ 
//is same as Object.prototype 
fun.__proto__.__proto__==Object.prototype

Function.prototype.jatt=function(){
    console.log("yo");
}

fun.jatt();



// Object.__proto__==Object.prototype
// false why ?



// https://www.youtube.com/watch?v=wstwjQ1yqWQ