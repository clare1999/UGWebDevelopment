// Constructors
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    introduce() {
      console.log(`Hello, my name is ${this.firstName}`);
    }
}


// function may be converted to a class declaration
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function(){
        return this.width*this.height;
    }
}
Rectangle.prototype.circum = function() {
    return 2*this.width+2*this.height;
}

Rectangle.prototype.equals = function(that) {
  if ((this.width == that.width) && (this.height == that.height)){
       return true;
  } return false;
}



// inheritance
// kw: extends
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
  static countModels() {
    // static method (TODO)
  }
}



