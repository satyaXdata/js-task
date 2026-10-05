// question 1
class Employee{
    display(){
        console.log(" I am an Employee")
    }
}
class Developer extends Employee{
    displayDev(){
        console.log(" I am a Developer")
    }
}
class Tester extends Employee{
    displayTester(){
        console.log(" I am a Tester")
    }
}
let dev =new Developer()
console.log("Developer Details")
dev.display()
dev.displayDev()
console.log("Tester Details")
let tester = new Tester()
tester.display()
tester.displayTester()
// question 2
class Person{
    display(){
        console.log(" I am a Person")
    }
}
class Student extends Person{
    displayStudent(){
        console.log(" I am a Student ")
        console.log(" I should Study")
    }
}
class Teacher extends Person{
    displayTeacher(){
        console.log(" I am a Teacher")
        console.log(" I should Teach")
    }
}
let student = new Student()
console.log("Student Details")
student.display()
student.displayStudent()
let teacher = new Teacher()
console.log("Teacher Details")
teacher.display()
teacher.displayTeacher()
// question 3
class BankDetails{
    constructor(accno, name, balance){
        this.accno = accno
        this.name = name
        this.balance = balance
    }
    display(){
        console.log("Account Number: "+this.accno)
        console.log("Account Holder Name: "+this.name)
        console.log("Account Balance: "+this.balance)
    }
}
class SavingAccount extends BankDetails{
    constructor(accno, name, balance, interestRate){
        super(accno, name, balance)
        this.interestRate = interestRate
    }
    displaySavingAccount(){
        super.display()
        console.log("Interest Rate: "+this.interestRate)
    }
}
class CurrentAccount extends BankDetails{
    constructor(accno, name, balance, overdraftLimit){
        super(accno, name, balance)
        this.overdraftLimit = overdraftLimit
    }
    displayCurrentAccount(){
        super.display()
        console.log("Overdraft Limit: "+this.overdraftLimit)
    }
}
let savingAcc = new SavingAccount(12345, "Janaki", 1000, 5)
console.log("Saving Account Details")
savingAcc.displaySavingAccount()
let currentAcc = new CurrentAccount(67890, "Jonny", 2000, 1000)
console.log("Current Account Details")
currentAcc.displayCurrentAccount()
// question 4
class Employees{
    constructor(name, age, salary){
        this.name = name
        this.age = age
        this.salary = salary
    }
    display(){
        console.log("Employee Name: "+this.name)
        console.log("Employee Age: "+this.age)
        console.log("Employee Salary: "+this.salary)
    }
}
class Developers extends Employees{
    constructor(name, age, salary, programmingLanguage){
        super(name, age, salary)
        this.programmingLanguage = programmingLanguage
    }
    displayDevelopers(){
        super.display()
        console.log("Programming Language: "+this.programmingLanguage)
    }
}
class Managers extends Employees{
    constructor(name, age, salary, teamSize){
        super(name, age, salary)
        this.teamSize = teamSize
    }
    displayManagers(){
        super.display()
        console.log("Team Size: "+this.teamSize)
    }
}
let developer = new Developers("Meghana", 30, 50000, "JavaScript")
console.log("Developer Details")
developer.displayDevelopers()
let manager = new Managers("Ashwin", 40, 70000, 10)
console.log("Manager Details")
manager.displayManagers()
// question 5
class Shape{
    constructor(shape,border,color){
        this.shape = shape
        this.border = border
        this.color = color
    }
    display(){
        console.log("Shape: "+this.shape)
        console.log("Border: "+this.border)
        console.log("Color: "+this.color)
    }
}
class Circle extends Shape{
    constructor(shape,border,color,radius){
        super(shape,border,color)
        this.radius = radius
    }
    displayCircle(){
        super.display()
        console.log("Radius: "+this.radius)
    }
}
class Rectangle extends Shape{
    constructor(shape,border,color,length,width){
        super(shape,border,color)
        this.length = length
        this.width = width
    }
    displayRectangle(){
        super.display()
        console.log("Length: "+this.length)
        console.log("Width: "+this.width)
    }
}
let circle = new Circle("Circle","Solid","Red",5)
console.log("Circle Details")
circle.displayCircle()
let rectangle = new Rectangle("Rectangle","Dashed","Blue",10,5)
console.log("Rectangle Details")
rectangle.displayRectangle()