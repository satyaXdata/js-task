// example 1
class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
}

let d1 = new Dog("Tommy");
d1.eat();
// Example 2
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}
class Student extends Person {
    constructor(name,age,batch,rollNumber) {
        super(name, age);
        this.batch = batch;
        this.rollNumber = rollNumber;
    }
    
    study() {
        super.greet(); 
        console.log(this.name + " is studying in batch " + this.batch + " with roll number " + this.rollNumber);
    }
}
let std=new Student("Ganesh", 20, "Batch A", 101);
std.study();
// Example 3
class Vechile{
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    display(){
        console.log("Brand: " + this.brand + ", Model: " + this.model);
    }
}
class Car extends Vechile{
    constructor(brand, model, fuelType, price) {
        super(brand, model);
        this.fuelType = fuelType;
        this.price = price;
    }
    displayDetails() {
        super.display();
        console.log("Fuel Type: " + this.fuelType + ", Price: " + this.price);
    }
}
let car1 = new Car("Toyota", "Camry", "Petrol", 30000);
car1.displayDetails();
// example 4
class Shape {
    constructor(Shape) {
        this.Shape = Shape;
    }
    area() {
        console.log("Calculating area of " + this.Shape );
    }
}
class Rectangle extends Shape {
    constructor(Shape, width, height) {
        super(Shape);
        this.width = width;
        this.height = height;
    }
    area() {
        let area = this.width * this.height;
        console.log("Area of rectangle: " + area);
    }
}
let rect = new Rectangle("Rectangle", 5, 10);
rect.area();