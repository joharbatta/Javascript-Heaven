// Constructor function
function Circle(radius) {
  console.log('this',this)
  this.radius = radius;
  this.draw = function() {
      console.log('this',this)
    console.log('draw',radius);
  }
}
//when we use new keyword it creates new empty obj of circle 
const circle = new Circle(1);
circle.draw();