// Closure benifits ---
// Memory efficient
// encapsulation


// ---- memory efficent
function heavyDuty(index){
    const bigArray=new Array(7000).fill('👋');
    console.log('created');
    return bigArray[index];
}
heavyDuty(888);
heavyDuty(888);
heavyDuty(888);

// no problem is if we frequrntly call this function everytime array gonna created to optimize will use closure;

function heavyDuty2(){
  const bigArray=new Array(7000).fill('👋');
  console.log('created again');
    return function(index){
        return bigArray[index];
    }
}
const heavyOptimized=heavyDuty2();
heavyOptimized(44);
heavyOptimized(4400);
// now basically closure will hold bigarray now no creation and destruction