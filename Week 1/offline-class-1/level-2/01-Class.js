
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType(){
      console.log('I am an Typo')
  }
  describe() {
    console.log( `${this.name} has ${this.legCount} legs`);
  }
}

//static method can be called like
Animal.myType();

//but methods can't be called like
//console.log(Animal.describe());
//they need to instantiated first
let  dog = new Animal('Dog', 4)
let  cat= new Animal('Cat', 4)
console.log(dog);
dog.describe();
