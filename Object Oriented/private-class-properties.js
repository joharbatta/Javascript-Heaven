
class User {
  #id;
  constructor(name) {
    this.name = name;
    this.#id = 'xyz';
  }
  getUserId() {
    return this.#id;
  }
}

const user = new User('Todd Motto');
user.id; // undefined
user.getUserId(); // xyz

class User {
  #id = 'xyz'
  constructor(name) {
    this.name = name;
  }
  getUserId() {
    return this.#id;
  }
  #destroy = () => {
    this.#id = null;
  };
}