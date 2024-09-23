//complete this code
class Animal {
  constructor(species) {
    this._species = species; // Use a private field to avoid recursion
  }
  
  get species() {
    return this._species; // Return the private field
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof"); // Logs the sound a dog makes
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr"); // Logs the sound a cat makes
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
