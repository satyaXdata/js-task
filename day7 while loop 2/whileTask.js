//Find the average of numbers from 1 to N.
// Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
let i=1
let n=5
let sum=0
while(i<=n){
    sum+=i
    i++
}
let average=sum/n
console.log("Average of numbers from 1 to ",n," is : ",average)
// Find the sum of squares of numbers from 1 to N.
//Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².
i=1
n=5
sum=0
while(i<=n){
    sum+=i**2
    i++
}
console.log("Sum of squares of numbers from 1 to ",n," is : ",sum)
// Find the sum of cubes of numbers from 1 to N.
// Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.
i=1
n=5
sum=0
while(i<=n){
    sum+=i**3
    i++
}
console.log("Sum of cubes of numbers from 1 to ",n," is : ",sum)
//Calculate the power of a number without using the ** operator.
//Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
let base = 2
let power = 5
let result = 1
i=1
while(i<=power){
    result*=base
    i++
}
console.log(base," raised to the power of ",power," is : ",result)
// Display the first N terms of the Fibonacci series.
//Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
i=1
n=7
let a=0
let b=1
console.log("Fibonacci series up to ",n," terms:")
while(i<=n){
    console.log(a)
    let c=a+b
    a=b
    b=c
    i++
}
// Display the first N terms of the series:
//1, 1/2, 1/3, 1/4, ...
//Example: If N = 4, display 1, 1/2, 1/3, 1/4.
i=1
n=4
console.log("Series up to ",n," terms:")
while(i<=n){
    console.log("1/",i)
    i++
}
//Display the first N terms of the series:
//1, 11, 111, 1111, 11111, ...
//Example: If N = 5, display 1, 11, 111, 1111, 11111.
i=1
n=5
let term=0
console.log("Series up to ",n," terms:")
while(i<=n){
    term=term*10+1
    console.log(term)
    i++
}
//Display the first N terms of the series:
//1, 3, 9, 27, 81, ...
//Each term is obtained by multiplying the previous term by 3.
i=1
n=5
term=1
console.log("Series up to ",n," terms:")
while(i<=n){
    console.log(term)
    term*=3
    i++
}
//Print all numbers from 10 to 150 that are divisible by both 3 and 5.
i=10
n=150
console.log("Numbers from ",i," to ",n," that are divisible by both 3 and 5:")
while(i<=n){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
    i++
}
//Count how many numbers from 200 down to 50 are divisible by 7.
i=200
n=50
let count=0
while(i>=n){
    if(i%7==0){
        count++
    }
    i--
}
console.log("Count of numbers from 200 down to 50 that are divisible by 7: ",count)
//Print numbers from 120 down to 20 that are not divisible by 5.
i=120
n=20
console.log("Numbers from ",i," down to ",n," that are not divisible by 5:")
while(i>=n){
    if(i%5!=0){
        console.log(i)
    }
    i--
}
//Find the average of all even numbers in the range from 10 to 100.
i=10
n=100
sum=0
count=0
while(i<=n){
    if(i%2==0){
        sum+=i
        count++
    }
    i++
}
let averageEven=sum/count
console.log("Average of all even numbers from 10 to 100 is : ",averageEven)
//Find the average of all factors of a given number.
let number = 12
let sumFactors = 0
let countFactors = 0
i = 1
while(i <= number){
    if(number % i == 0){
        sumFactors += i
        countFactors++
    }
    i++
}
let averageFactors = sumFactors / countFactors
console.log("Average of all factors of ", number, " is : ", averageFactors)