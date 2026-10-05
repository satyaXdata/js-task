//if-else
// 1.Check whether a given number is a 3-digit number or not.
num=123
if(num>99 && num<1000){
    console.log("given ",num," is three digit number")
}
else{
    console.log("given ",num," is not a three digit number")
}
    // 2.Check whether a given number is divisible by both 3 and 5 or not.
num=15
if(num%3==0 && num%5==0){
    console.log(num," is divisable by both 3 and 5")
}
else{
    console.log(num," is not divisable by both 3 and 5")
}
// 3.Check whether a given triangle is a valid triangle or not.
//      hint :The sum of any two sides should be greater than the third side.
ang1=41
ang2=51
ang3=90
if((ang1+ang2)>ang3){
    console.log("Its a triangle")
}
else{
    console.log("Its not a triangle")
}
// 4.Check whether a given number is a multiple of 10 or not.
num=234
if(num%10==0){
    console.log(num," is multiple of  ten")
}
else{
    console.log(num," is not multiple of ten")
}
//if-else-if-else
    //1.Check the type of triangle based on its sides.
        // Equilateral, Isosceles, or Scalene.
ang1=60
ang2=60
ang3=60
if(ang1==ang2==ang3){
    console.log("It is a Equilateral")
}
else if((ang1==ang2)!=ang3 || (ang2==ang3)!=ang1 || (ang1==ang3)!=ang2){
    console.log("its a Isosceles Triangle")
}
else{
    console.log("Its a Scalene Triangle")
}
// 2.Calculate the electricity bill based on units consumed.
    // 0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.


units=400
if(units>0 && units<101){
    bill=2
    bill*=units
}
else if(units>100 && units<201){
    bill=3
    bill*=units
}
else if(units>201 && units<301){
    bill=5
    bill*=units
}
else{
    bill=7
    bill*=units
}
console.log("For ",units,"Electric city bill is : ",bill)
// 3.Display the age category.
    // Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
age=56
if(age<13){
    console.log("Child")
}
else if(age>12 && age<20){
    console.log("teenager")
}
else if(age>19 && age<60){
    console.log("Adult")
}
else{
    console.log("Senior Citizen")
}
// 4.Calculate the discount based on shopping amount.
    // Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
bill=6999
if(bill<1000){
    discount_p=0
}
else if(1000<=bill<5000){
    discount_p=10
    console.log("Your bill is ",bill," and you got 10% discount")
}
else if(5000<=bill<10000){
    discount_p=20
    console.log("Your bill is ",bill," and you got 20% discount")
}
else{
    discount_p=30
    console.log("Your bill is ",bill," and you got 30% discount")
}
discount=bill*(discount_p/100)
bill-=discount
console.log("Your total bill is : ",bill)
// 5.Display the season based on the month number.
//     3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
month=9
if(month>=3 && month<=5)
    console.log("Spring")
else if(month>5 && month<=8){
    console.log("Summer")
}
else if(month>=9 && month<=11){
    console.log("Autumn")
}
else if(month==12 || month<=2){
    console.log("Winter")
}
else{
    console.log("Invalid, Please enter month th range 1 to 12")
}
// 6.Check whether a given year is a Leap Year or not.
//     Condition 1: year % 400 == 0
//     Condition 2: year % 4 == 0 and year % 100 != 0
year=2004
if(year%400==0){
    console.log(year,"is leap Year")
}
else if(year%4==0 && year%100!=0){
    console.log(year,"is leap Year")
}
else{
    console.log(year,"is Not a leap year")
}
//nested if
// 1.Check whether a person is eligible to donate blood.
//     Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
age=19
weight=50
if(age>18 && age<60){
    if(weight>50){
        console.log("Your eligible for donate the blood")
    }
    else{
        console.log("Your not eligible to donate blood. Because your weight is less than 50")
    }
}
else{
    console.log("Your not eligible to donate blood. Because your age is not between 18 to 60")
}
// 2.Display the grade based on average only if the student has passed in all 4 subjects.
sub1=78
sub2=45
sub3=66
sub4=63
pass=35
if(sub1>=pass && sub2>=pass && sub3>=pass && sub4>=pass){
    console.log("Student has been passed all four subjects")
    let avg=(sub1+sub2+sub3+sub4)/4
    if(avg>90){
        console.log("A Grade")
    }
    else if(avg>70 && avg<91){
        console.log("B Grade")
    }
    else if(avg>50 && avg<71){
        console.log("C Grade")
    }
    else if(avg>34){
        console.log("D Grade")
    }
}
else{
    console.log("Failed")
}
// 3.Check whether a student is eligible for a scholarship.
//     Age should be above 18. If eligible by age, score should be above 86.
let age=19
let score=88
if(age>18){
    if(score>86){
        console.log("Eligible for Scholarship")
    }
    else{
        console.log("Not Eligible for Scholarship, Because your Score")
    }
}
else{
    console.log("Not Eligible for Scholarship, Because of Age")
}









