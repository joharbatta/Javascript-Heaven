
//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function (){
     return this.getFullYear()-1;
}
console.log(new Date('1900-10-10').lastYear());
//'1899'
// console.log(x.lastYear())

//------------------------------------------------------------

Array.prototype.map=function(){ //here also we cant use arrow fxn because then this gonna pint to global 
   var arr=[];
   this.forEach(function(ele){
       arr.push(ele+"🎅");
   })
   return arr;
}

// Mofify .map() to print '🗺' at the end of each item.
console.log([1,2,3].map());
//1🗺, 2🗺, 3🗺

//------------------------------------------------------------

// How would you be able to create your own .bind() method using call or apply.

// Hint:

Function.prototype.bind = function(obj){
    var fxn=this;
     console.log(fxn);
    // return function(){
    //     return fxn.apply(obj,arguments);
    // }
     return function(...args){
         console.log(args,...args);
        return fxn.call(obj,...args);
    }
}

const obj={
    name:"johar",
    getname(a,b){
       return this.name+a+b;
    }
}

const obj1={
    name:"charu",
}

console.log(obj.getname.bind(obj1)(1,2));