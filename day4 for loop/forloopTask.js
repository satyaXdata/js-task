// 1.Find the average of numbers from 1 to N.
n=5
sum=0
for(let i=1;i<=n;i++){
    sum+=i
}
console.log("the average of numbers from 1 to N : ",sum/n)
// 2.Find the sum of squares of numbers from 1 to N.
n=5
sum=0
for(let i=1;i<=n;i++){
    sum+=i**2
}
console.log("sum of squares of numbers from 1 to N : ",sum)
// 3.Find the sum of cubes of numbers from 1 to N.
n=5
for(let i=1;i<=n;i++){
    sum+=i**3
}
console.log("the sum of cubes of numbers from 1 to N : ",sum)
// 4.Calculate the power of a number without using the ** operator.
base=2
power=5
res=1
for(let i=1;i<=power;i++){
    res*=base
}
console.log("the power of a number without using the ** operator : ",res)
// 5.Display the first N terms of the Fibonacci series.
num=7
n1=0
n2=1
for(let i=1;i<=num;i++){
    console.log(n1)
    feb=n1+n2
    n1=n2
    n2=feb
}
// 6.Display the first N terms of the series:
n=4
for(let i=1;i<=4;i++){
    console.log("1/"+i)
}
// 7.Display the first N terms of the series:
n=5
num=1
for(let i=1;i<=n;i++){
    console.log(num)
    num=num*10+1
}
// 8.Display the first N terms of the series:
n=8
num=1
for(let i=1;i<=n;i++){
    console.log(num)
    num*=3
}
//message questions
// Print all numbers from 10 to 150 that are divisible by both 3 and 5.
for(let i=10;i<=150;i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}
// Count how many numbers from 200 down to 50 are divisible by 7.
count=0
for(let i=200;i>=50;i--){
    if(i%7==0){
        count++
    }
}
console.log("Count of numbers from 200 down to 50 are divisible by 7 : ",count)
// Print numbers from 120 down to 20 that are not divisible by 5.
for(let i=120;i>=20;i--){
    if(i%5!=0){
        console.log(i)
    }
}
// Find the average of all even numbers in the range from 10 to 100.
sum=0
count=0
for(let i=10;i<=100;i++){
    if(i%2==0){
        count++
        sum+=i
    }
}
console.log("average of all even numbers in the range from 10 to 100 : ",sum/count)
// Find the average of all factors of a given number.
n=20
sum=0
count=0
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++
        sum+=i
    }
}
console.log("the average of all factors of a given number : ",sum/count)




