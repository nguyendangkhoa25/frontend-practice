/**
All the practices of the lession object oriented programming in javascript in freeCodeCamp will be stored here
**/
//=================1. Create a Basic JavaScript Object=========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object
let dog = {
    name: "Mickey",
    numLegs: 4
};

//=================2. Use Dot Notation to Access the Properties of an Object =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);

//=================3. Create a Method on an Object =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){return 'This dog has ' + dog.numLegs + ' legs.'}
};

dog.sayLegs();
//=================4. Make Code More Reusable with the this Keyword =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
//=================5. Define a Constructor Function =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function
function Dog(){
    this.name = "This is Name";
    this.color = "blue";
    this.numLegs = 4;
}
//=================6. Use a Constructor to Create Objects =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();
//=================7. Extend Constructors to Receive Arguments =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Terrier", "brown");
//=================8. Verify an Object's Constructor with instanceof =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(2);
myHouse instanceof House;
//=================9. Understand Own Properties =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
//=================10. Use Prototype Properties to Reduce Duplicate Code =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code
function Dog(name) {
  this.name = name;
}

// Add your code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
//=================11. Iterate Over All Properties =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}
//=================12. Understand the Constructor Property =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property
function Dog(name) {
  this.name = name;
}
// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
}

//=================13. Change the Prototype to a New Object =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function(){
    console.log("eat eat eat");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};

//=================14. Remember to Set the Constructor Property when Changing the Prototype =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype
function Dog(name) {
  this.name = name;
}
// Modify the code below this line
Dog.prototype = {
  constructor: Dog, // define the constructor property
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//=================15. Understand Where an Object’s Prototype Comes From =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);
//=================16. Understand the Prototype Chain =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // => true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//=================17. Use Inheritance So You Don't Repeat Yourself =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear
};
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
      console.log("nom nom nom");
    }
};
//=================18. Inherit Behaviors from a Supertype =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// Add your code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype);; // Change this line
duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
//=================19. Set the Child's Prototype to an Instance of the Parent =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog(name) { this.name = name }
// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog("Mickey");
beagle.eat();  // Should print "nom nom nom"
//=================20. Reset an Inherited Constructor Property =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property
function Animal() { }
function Bird() { }
function Dog() { }

//define Bird and Dog inherit from Animal
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();
//=================21. Add Methods After Inheritance =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log("Woof!");
}
// Add your code above this line
let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
//=================22. Override Inherited Methods =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Add your code below this line
Penguin.prototype.fly = function(){
    return "Alas, this is a flightless bird."
}
// Add your code above this line
let penguin = new Penguin();
console.log(penguin.fly());

//=================23. Use a Mixin to Add Common Behavior Between Unrelated Objects =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Add your code below this line
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("Glide on the water");
  }
}
glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();
//=================24. Use Closure to Protect Properties Within an Object from Being Modified Externally =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally
function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  }
}
//=================25. Understand the Immediately Invoked Function Expression (IIFE) =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife
(function (){
  console.log("A cozy nest is ready");
})();
//=================26. Use an IIFE to Create a Module =========================//
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module
let funModule = (function (){
  return {
    isCuteMixin: function(obj){
      obj.cute = function(){
        return true;
      };
    },
    singMixin: function(obj){
      obj.sing = function(){
        console.log("Singing to an awesome tune");
      }
    }
  }
})();

