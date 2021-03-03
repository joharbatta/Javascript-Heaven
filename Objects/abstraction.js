function Circle(radius) {
  this.radius = radius;

  let defualtLocation ={x: 0, y: 0};

  this.computeOptimumLocation=function(){

  }

  let privatefxn=function(){
      console.log("private");
  }

  this.draw = function() {
    this.computeOptimumLocation();
    privatefxn();
    console.log('draw');
  }
}

const circle = new Circle(10);
console.log(circle.draw());