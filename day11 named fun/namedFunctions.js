// module 1 : NAMED FUNCTIONS -without inputs and without return value
// 1.write a function to print your name 5 times
function printName(){
    let name="Hero"
    for(let i=1;i<=5;i++){
        console.log(name)
    }
}
printName()
// 2.Write a function to print the first 30 natural numbers
function printNaturalNumbers(){
    for(let i=1;i<=30;i++){
        console.log(i)
    }
}
printNaturalNumbers()
// 3.write a function to print first 20 multiples of 3
function printMultiplesOf3(){
    for(let i=1;i<=20;i++){
        console.log(i*3)
    }
}
printMultiplesOf3()
// 4.write a function to print all numbers from 50 to 100
function printEvenNumbers(){
    for(let i=50;i<=100;i++){
        console.log(i)
    }
}
printEvenNumbers()
// 5.write a function to print all number between 1 to 100 which are divisible by both 3 and 5
function printDivisibleBy3And5(){
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log(i)
        }
    }
}
printDivisibleBy3And5()
// 6.write a function to print Multiplication Table of 7
function printMultiplicationTableOf7(){
    for(let i=1;i<=10;i++){
        console.log("7 X "+i+" = "+(7*i))
    }
}
printMultiplicationTableOf7()
// 7.write a function to print the sum of all even numbers from 1 to 50
function printSumOfEvenNumbers(){
    let sum=0
    for(let i=1;i<=50;i++){
        if(i%2==0){
            sum+=i
        }
    }
    console.log("Sum of all even numbers from 1 to 50 is : ",sum)
}
printSumOfEvenNumbers()
// 8.write a function to print the sum of all odd numbers from 1 to 50
function printSumOfOddNumbers(){
    let sum=0
    for(let i=1;i<=50;i++){
        if(i%2!=0){
            sum+=i
        }
    }
    console.log("Sum of all odd numbers from 1 to 50 is : ",sum)
}
printSumOfOddNumbers()
// 9.write a function to print product of first 5 numbers
function printProductOfFirst5Numbers(){
    let product=1
    for(let i=1;i<=5;i++){
        product*=i
    }
    console.log("Product of first 5 numbers is : ",product)
}
printProductOfFirst5Numbers()
// 10. write a program to write factorials of first 5 numbers
function printFactorialsOfFirst5Numbers(){
    for(let i=1;i<=5;i++){
        let factorial=1
        for(let j=1;j<=i;j++){
            factorial*=j
        }
        console.log("Factorial of "+i+" is : ",factorial)
    }
}
printFactorialsOfFirst5Numbers()
// 11. write a program to print first 10 fibonacci numbers
function printFibonacciNumbers(){
    let a=0
    let b=1
    console.log(a)
    console.log(b)
    for(let i=3;i<=10;i++){
        let c=a+b
        console.log(c)
        a=b
        b=c
    }
}
printFibonacciNumbers()
// 12. write a program to print first 100 prime numbers
function printFirst100PrimeNumbers(){
    let count=0
    let num=2
    while(count<100){
        let isPrime=true
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                isPrime=false
                break
            }
        }
        if(isPrime){
            console.log(num)
            count++
        }
        num++
    }
}
printFirst100PrimeNumbers()
// 13. write a program to print all perfect numbers between 1 to 1000
function printPerfectNumbers(){
    for(let i=1;i<=1000;i++){
        let sum=0
        for(let j=1;j<i;j++){
            if(i%j==0){
                sum+=j
            }
        }
        if(sum==i){
            console.log(i)
        }
    }
}
printPerfectNumbers()
// 14.write a function to print all number between 1 to 500 which are divisible by 7
function printDivisibleBy7(){
    for(let i=1;i<=500;i++){
        if(i%7==0){
            console.log(i)
        }
    }
}
printDivisibleBy7()
// 15.write a function which prints square number of first 10 numbers
function printSquareOfFirst10Numbers(){
    for(let i=1;i<=10;i++){
        console.log("Square of "+i+" is : ",i*i)
    }
}
printSquareOfFirst10Numbers()

// MODULE 2 : NAMED FUNCTIONS -with inputs and without return value
// 1.write  a function which takes 2 numbers and print their difference
function printDifference(num1,num2){
    let difference=num1-num2
    console.log("Difference of "+num1+" and "+num2+" is : ",difference)
}
printDifference(50,5)
// 2.write a function which takes 2 numbers and print their product
function printProduct(num1,num2){
    let product=num1*num2
    console.log("Product of "+num1+" and "+num2+" is : ",product)
}
printProduct(10,5)
// 3.write  a function which takes 2 numbers and print their quotient
function printQuotient(num1,num2){
    let quotient=num1/num2
    console.log("Quotient of "+num1+" and "+num2+" is : ",quotient)
}
printQuotient(95,5)
// 4.write  a function which takes 2 numbers and print their remainder
function printRemainder(num1,num2){
    let remainder=num1%num2
    console.log("Remainder of "+num1+" and "+num2+" is : ",remainder)
}
printRemainder(60,4)
// 5.write  a function which takes 3 numbers and print their average
function printAverage(num1,num2,num3){
    let average=(num1+num2+num3)/3
    console.log("Average of "+num1+", "+num2+" and "+num3+" is : ",average)
}
printAverage(10,20,30)
// 6./write  a function which takes a number and print its square
function printSquare(num){
    let square=num*num
    console.log("Square of "+num+" is : ",square)
}
printSquare(5)
// 7.write  a function which takes a number and print its cube
function printCube(num){
    let cube=num*num*num
    console.log("Cube of "+num+" is : ",cube)
}
printCube(5)
// 8.write  a function which takes a number and print its factors
function printFactors(num){
    console.log("Factors of "+num+" are : ")
    for(let i=1;i<=num;i++){
        if(num%i==0){
            console.log(i)
        }
    }
}
printFactors(12)
// 9.write  a function which takes a  number and prints its number of factors
function printNumberOfFactors(num){
    let count=0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    console.log("Number of factors of "+num+" is : ",count)
}
printNumberOfFactors(18)
// 10.write a function that takes a number and prints number of digits in that number
function printNumberOfDigits(num){
    let count=0
    while(num!=0){
        num=parseInt(num/10)
        count++
    }
    console.log("Number of digits in the number is : ",count)
}
printNumberOfDigits(123456)
// 11.write a function that takes a number and prints the first digit and last digit of its digits
function printFirstAndLastDigit(num){
    let firstDigit,lastDigit
    lastDigit=num%10
    while(num!=0){
        firstDigit=num%10
        num=parseInt(num/10)
    }
    console.log("First digit is : ",firstDigit)
    console.log("Last digit is : ",lastDigit)
}
printFirstAndLastDigit(123456)
// 12.write a function that takes a number and prints the largest digit of its digits
function printLargestDigit(num){
    let largestDigit=0
    while(num!=0){
        let digit=num%10
        if(digit>largestDigit){
            largestDigit=digit
        }
        num=parseInt(num/10)
    }
    console.log("Largest digit is : ",largestDigit)
}
printLargestDigit(8765492356)
// 13.write a function that takes a number and prints sum of even digits of its digits
function printSumOfEvenDigits(num){
    let sum=0
    while(num!=0){
        let digit=num%10
        if(digit%2==0){
            sum+=digit
        }
        num=parseInt(num/10)
    }
    console.log("Sum of even digits is : ",sum)
}
printSumOfEvenDigits(1234567890)
// 14. write a number that takes a number and prints the product of the digits number
function productofN(num){
    pro=1
    while(num>0){
        pro*=num%10
        num=parseInt(num/10)

    }
    console.log(pro)
}
// 15.write a function that takes a number and prints how many odd and even numbers it contains
function oddeven(n){
    evenc=0
    oddc=0
    while(n<0){
        n1=n%10
        if(n1%2==0){
            evenc++
        }
        else{
            oddc++
        }
        n=parseInt(n/10)
    }
    console.log("count even :",evenc);
    console.log("count odd :",oddc);
}
oddeven(123456789)
// MODULE 3: NAMED FUNCTIONS without input and with return
// 1.write a function that returns the sum of first 20 numbers
function sumn(){
    sum=0
    for (let i=0;i<=20;i++){
        sum+=i
    }
    return sum
}
console.log(sumn());
// 2. write a function that returns sum of multiples of 3 from 1 to 50
function sumofmul3(){
    sum=0
    for(let i=1;i<=50;i++){
        if(i%3==0){
            sum+=i
        }
    }
    return sum
}
console.log(sumofmul3());
// 3.function that returns product of numbers from 1 to 10
function product1to10(){
    pro=1
    for(let i=1;i<=10;i++){
        pro*=i
    }
    return pro
}
// 4.function that returns 10th fibinocci number
function fibinocci10(){
    a=0
    b=1
    for(let i=3;i<=10;i++){
        a=b
        b+=a
    }
    return a
}
console.log(fibinocci10());
//5.count of prime 1 to 100
function countofprime(){
    count=0
    for(let i=1;i<=100;i++){
        prime=true
        for(j=2;j<i;j++){
            if(i%j==0){
                prime=false
            }
        }
        if(prime){
            count++
        }
    }
    return count

}
console.log(countofprime());
// 6.largest digit of a number 
function large(){
    n=898765
    lar=0
    while(n>0){
        n1=n%10
        if (n1>lar){
            lar=n1
        }
        n=parseInt(n/10)
    }
    return lar
}
console.log(large());

// 7.count digits 
function count(){
    n=1234567890
    count=0
    while(n!=0){
        count++
        n=parseInt(n/10)
    }
    return count
}
console.log(count());
// 8.sum of even numbers
function sumeven(){
    n=87654987654321
    sum=0
    while(n!=0){
        p=n%10
        if(p%2==0){
            sum+=i
        }
        n=parseInt(n/10)
    }
    return sum
}
console.log(sumeven());
// 9.total marks of 5 subjects
function total(){
    s1=85
    s2=90
    s3=92
    s4=87
    s5=95
    return s1+s2+s3+s4+s5
}
console.log(total());
// 10.percentage of 5 subjects
function per(){
    s1=92
    s2=91
    s3=86
    s4=90
    s5=88
    total=s1+s2+s3+s4+s5
    return (total/500)*100
}
console.log(per());
// 11.product of digits in a number
function product(){
    n=8987654345
    p=1
    while(n>0){
        a=n%10
        p*=a
        n=parseInt(n/10)
    }
    return p
}
console.log(product());
// 12.reverse a number
function reverse(){
    n=987654321
    rev=0
    while(n>0){
        rev*=10
        rev+=n%10
        n=parseInt(n/10)
    }
    return rev
}
console.log(reverse());
// 13.Area of Triangle
function areaTri(){
    h=20
    l=10
    return (l*h)/2
}
console.log(areaTri());
// 14.Area of rectangle
function AreaRec(){
    l=40
    b=20
    return l*b
}
console.log(AreaRec());
// 15.Simple interest
function SI(){
    p=50000
    t=6
    r=2
    return (p*t*r)/100
}
console.log(SI());
// MODULE 4: WITH INPUT AND WITH RETURN
// 1.sum of two numbers
function sumOfTwo(n1,n2){
    return n1+n2
}
console.log(sumOfTwo(18,19));
// 2.difference of two
function DiffOfTwo(n1,n2){
    return n1-n2
}
console.log(DiffOfTwo(100,60));
// 3.product of two
function ProdOfTwo(n1,n2){
    return n1*n2
}
console.log(ProdOfTwoOfTwo(5,3));
// 4.quotient of two
function QuaOfTwo(n1,n2){
    return n1/n2
}
console.log(QuaOfTwo(20,4));
// 5.Remainder of two
function RemOfTwo(n1,n2){
    return n1%n2
}
console.log(RemOfTwo(17,5));
// 6.Average of three numbers
function AvgOf3(n1,n2,n3){
    return (n1+n2+n3)/3
}
console.log(AvgOf3(10,20,30));
// 7.Square of a number 
function square(n){
    return n*n
}
console.log(square(6));
// 8.cube of a number
function cube(n){
    return n**3
}
console.log(cube(5));
// 9.number of factors
function numOfF(n){
    count=0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++
        }
    }
    return count
}
console.log(numOfF(24));
// 10.count digits
function count(n){
    count=0
    while(n>0){
        count++
        n=parseInt(n/10)
    }
    return count
}
console.log(count(987654));
// 11.largest digit
function largedig(n){
    max=n%10
    while(n>0){
        a=n%10
        if(max>a){
            max=a
        }
        n=parseInt(n/10)
    }
    return max
}
console.log(largedig(45678798765432));
// 12.Sum of even digits
function sumOfEven(n){
    sum=0
    while(n>0){
        sum+=n%10
        n=parseInt(n/10)
    }
    return sum
}
console.log(sumOfEven(1234567));
// 13.product of digits
function products(n){
    p=1
    while(n>0){
        p*=n%10
        n=parseInt(n/10)
    }
    return p
}
console.log(products(897543));
// 14.last digit of a number
function LD(n){
    return n%10
}
console.log(LD(76565908));
// 15.reverse a number
function reverseN(n){
    rev=0
    while(n>0){
        rev*=10
        rev+=n%10
        n=parseInt(n/10)
    }
    return rev
}
console.log(reverseN(56780987654));
