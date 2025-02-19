class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    // Register a listener for a specific event
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Register a one-time listener for a specific event
    once(event, listener) {
      const wrapper = (...args) => {
        listener.apply(this, args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    }
  
    // Remove a listener for a specific event
    off(event, listener) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  
    // Emit an event, calling all registered listeners
    emit(event, ...args) {
      if (!this.events[event]) return;
  
      this.events[event].forEach(listener => {
        listener.apply(this, args);
      });
    }
  }
  
  // Example usage
  const myEmitter = new EventEmitter();
  
  function onGreet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Register the listener
  myEmitter.on('greet', onGreet);
  
  // Emit the event
  myEmitter.emit('greet', 'Alice');  // Output: Hello, Alice!
  
  // Remove the listener
  myEmitter.off('greet', onGreet);
  
  // Emit the event again (no output this time)
myEmitter.emit('greet', 'Bob');
  

class EventEmitter{

  constructor(){
    this.events=[]
    console.log("intialized")
  }

  on(event,listener){
     if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  emit(event,...args){
    this.events[event].forEach(listener => {
      listener.apply(this, args);
    });
  }
  // Register a one-time listener for a specific event
  once(event, listener) {
    const wrapper = (...args) => {
      listener.apply(this, args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  // Remove a listener for a specific event
  off(event, listener) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(l => l !== listener);
  }

}

const myEmitter = new EventEmitter();

function onGreet(name) {
  console.log(`Hello, ${name}!`);
}
// console.log(myEmitter.on("greet",onGreet))

// // Register the listener
myEmitter.on('greet', onGreet);
myEmitter.on('greet', ()=>console.log("pr3efw"));

// // Emit the event
myEmitter.emit('greet', 'Alice','ededde');  // Output: Hello, Alice!
// myEmitter.emit('jatt', 'Alice');
// // Remove the listener
// myEmitter.off('greet', onGreet);

// // Emit the event again (no output this time)
// myEmitter.emit('greet', 'Bob');