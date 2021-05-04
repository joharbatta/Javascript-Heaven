var fav="creta";
var car=function(){
    console.log("fav car "+fav);
    var fav="audi";
    console.log("new fav car "+fav);
};
car();
// hoisting happens every execution context any time we run a function a new execution context gets created 
// we have to go through creation and execution phase again
console.log(car());