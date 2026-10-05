// 1. Student Management System
class Student{
    static clgName="Annamaiah Institute of Technology"
    static univer="Technical University of Munich"
    setData(stdId,stdName,stdAge,stdBranch,stdMarks){
        this.sId=stdId
        this.sName=stdName
        this.sAge=stdAge
        this.sBranch=stdBranch
        this.sMarks=stdMarks
    }
    display(){
        console.log("Collage Name :",Student.clgName);
        console.log("University Name :",Student.univer);
        console.log("Student Id :",this.sId);
        console.log("Student Name :",this.sName);
        console.log("Student Age :",this.sAge);
        console.log("Student Branch :",this.sBranch);
        console.log("Student Marks :",this.sMarks);
        
    }
}
s1=new Student()
s1.setData(101, "Ravi", 20, "CSE", 85.5)
s1.display()
s2=new Student()
s2.setData(102, "Anil", 21, "ECE", 78.5)
s2.display()
s3=new Student()
s3.setData(103, "Priya", 20, "EEE", 91.0)
s3.display()
s4=new Student()
s4.setData(104, "Sita", 21, "CSE", 88.5)
s4.display()
// 2. Employee Management System
class Employee{
    static cmpname="Tech Solutions"
    static cmploc="Hyderabad"
    setData(empid,empname,empage,empdep,empsal){
        this.eId=empid
        this.eName=empname
        this.eAge=empage
        this.eDep=empdep
        this.eSal=empsal
    }
    display(){
        console.log("Company Name :",Employee.cmpname);
        console.log("Company Location :",Employee.cmploc);
        console.log("Employee Name :",this.eName);
        console.log("Employee Id :",this.eId);
        console.log("Employee Age :",this.eAge);
        console.log("Employee Department : ",this.eDep);
        console.log("Employee Salary : ",this.eSal);
    }
}
e1=new Employee()
e1.setData(101, "Rahul", 25, "IT", 40000)
e1.display()
e2=new Employee()
e2.setData(102, "Priya", 24, "HR", 35000)
e2.display()
e3=new Employee()
e3.setData(103, "Arun", 26, "Finance", 45000)
e3.display()
e4=new Employee()
e4.setData(104, "Sneha", 25, "Testing", 38000)
e4.display()
// 3. Mobile Phone Details
class Mobile{
    static brandname="Iphone"
    static brandServiceCenter="Apple Service Center"
    setData(mldname,ram,stg,price,color){
        this.mname=mldname
        this.mram=ram
        this.mstg=stg
        this.mprice=price
        this.mcolor=color
    }
    display(){
    console.log("Mobile Brand : ",Mobile.brandname);
    console.log("Mobile Service center : ",Mobile.brandServiceCenter);
    console.log("Mobile Model name : ",this.mname);
    console.log("Mobile RAM : ",this.mram,"GB");
    console.log("Mobile Storage : ",this.mstg,"GB");
    console.log("Mobile Price : ",this.mprice);
    console.log("Mobile Color : ",this.mcolor);
    }
}
m1=new Mobile()
m1.setData("iPhone 13",4,128,49900,"Midnight")
m1.display()
m2=new Mobile()
m2.setData("iPhone 14",6,128,59900,"Blue")
m2.display()
m3=new Mobile()
m3.setData("iPhone 15",6,256,69900,"Black");
m3.display()
m4=new Mobile()
m4.setData("iPhone 16",8,256,79900,"Pink")
m4.display()
// 4.Car Rental System
class Car{
    static rentalCompany="Abhi Cars"
    static RentalLoc="Jntu"
    setData(no,model,color,rentpday,fueltype){
        this.cNo=no
        this.cModel=model
        this.cColor=color
        this.cRPday=rentpday
        this.cFuel=fueltype
    }
    display(){
        console.log("Rental Company Name :",Car.rentalCompany);
        console.log("Rental Location :",Car.RentalLoc);
        console.log("Car Number : ",this.cNo);
        console.log("Car Model : ",this.cModel);
        console.log("Car Color : ",this.cColor);
        console.log("Car Rent Per Day : ",this.cRPday);
        console.log("Car Fuel Type : ",this.cFuel);
    }
}
c1=new Car()
c1.setData("TS09AB1234", "Swift", "White", 1500, "Petrol")
c1.display()
c2=new Car()
c2.setData("TS09CD5678", "Baleno", "Red", 1800, "Petrol");
c2.display()
c3=new Car()
c3.setData("TS09EF9012", "Nexon", "Blue", 2200, "Diesel")
c3.display()
c4=new Car()
c4.setData("TS09GH3456", "Creta", "Black", 3000, "Diesel")
c4.display()