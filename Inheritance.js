// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + " makes a noise.");
    }
  }
  
  // Child class inherits from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(this.breed + " barks.");
    }
  }
  
  const dog = new Dog("Rex", "Labrador");
  dog.speak(); // Rex makes a noise.
  dog.bark();  // Rex barks.
  