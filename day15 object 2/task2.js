//object in function with input and without return
function mobile(m,p,d,s,p){
    details={
        model: m,
        processor: p,
        display : d,
        storage: s,
        price : p
    }
    console.log("Model : ",details.model);
    console.log("Processor : ",details.processor);
    console.log("Display : ",details.display);
    console.log("Storage :",details.storage);
    console.log("Price :",details.price);
}
mobile("Iphone 18 pro", "A20 pro chip","6.3 inches","256 GB",179900)
//objects in function with input and with return
function dog(){
    details={
        breed:"German Shepherd",
        height:"22 to 26 inches",
        weight:"30 kg to 40 kg",
        lifespan:"9 to 13 years"
    }
    return details
}
console.log(dog());
// methods
// named functions
// without input and without return
student={
    sname:"Satyanarayana",
    rollno:"22D71A5648",
    students : function studDetails (){
        console.log("Name :",student.sname);
        console.log("Rollno :",student.rollno);
    }
}
student.students()
// without input and with return
great={
    gname:"Venkat",
    greatting: function msg(){
        return "Good morning "+great.gname+" Have a nice day!!!"
    }
}
console.log(great.greatting())
//with input and without return
Addition={
       add:function plus(n1,n2){
        console.log("sum of two numbers",n1+n2);
        
    }
}
Addition.add(50,30)
//with input and with return
subtration={
    sub: function minus(n1,n2){
        return n1-n2
    }
}
console.log(subtration.sub(50,10))
// Anonymous function
//without input and without return
car={
    model:"Porsche 911",
    color:"black",
    price:"2.5cr",
    details: function (){
        console.log("Model : ",car.model);
        console.log("color : ",car.color);
        console.log("price : ",car.price);
    }
}
car.details()
//without input with return
bank={
    name:"Thirupathi",
    balance:56431,
    DB: function () {
        return "Balance : "+bank.balance
    }
}
console.log(bank.DB());
//with input and without return
vote={
    eligible : function (a){
        if(a>18){
            console.log("Eligible to vote");
        }
        else{
            console.log("Not Eligible to vote");
        }
    }
}
vote.eligible(19)
//with input and with return
reportCard={
    Grade:function(g){
        if(g>90){
            return "A Grade"
        }
        else if(g>70 && g<91){
            return "B Grade"
        }
        else if(g>50 && g<71){
            return "C Grade"
        }
        else if(g>35 && g<51){
            return "D Grade"
        }
        else{
            return "Fail"
        }
    }
}
console.log(reportCard.Grade(20))
// Arrow function
//without  input  and without return
powers={
    num:5,
    square:()=>{
        console.log("square of ",powers.num," is ",powers.num**2);
    }
}
powers.square()
//without input with return
powers={
    num:5,
    cube:()=>{
        c=powers.num**3
        return c
    }
}
console.log(powers.cube())
// with input and with out return
shopping={
    bill:(b)=>{
        if(b>5000){
            dis=b*10/100
            console.log("Total Bill :",b-dis);
        }
        else{
            console.log("Total Bill :",b);
        }
    }
}
shopping.bill(5000)
//with input and with return
payslip={
    bonus:(s)=>{
        if(s>50000){
            b=s*20/100
            return s+b
        }
        else{
            b=s*10/100
            return s+b
        }
    }
}