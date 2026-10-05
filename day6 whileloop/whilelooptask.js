// Find the sum of digits in a given number
n=738
sum=0
while(n>0){
    sum+=n%10
    n=parseInt(n/10)
}
console.log("Sum of digit in the given number is : ",sum)
// Find the average of digits in a given number.
n=624
count=0
sum=0
while(n>0){
    count+=1
    sum+=n%10
    n=parseInt(n/10)
}
console.log("Average of digit in a given number : ",sum/count)
// Find the sum of the first digit and the last digit of a given number.
n=936
ld=n%10
while(n>0){
    fd=n%10
    n=parseInt(n/10)
}
console.log("First digit of a number :",fd," Last digit of a number : ",ld)
console.log("Sum of First and last digit of given number : ",fd+ld)
// Find the average of digits that are divisible by 5 in a given number.
n=12575
sum=0
count=0
while(n>0){
    x=n%10
    if(x%5==0){
        sum+=x
        count+=1
    }
    n=parseInt(n/10)
}
console.log("the average of digits that are divisible by 5 in a given number : ",sum/count)
// Find the difference between the largest digit and the smallest digit in a given number.
n=58321
max=0
min=9
while(n>0){
    m=n%10
    if(m>max){
        max=m
    }
    if(m<min){
        min=m
    }
    n=parseInt(n/10)
}
console.log("max : ",max,"min : ",min)
console.log("the difference between the largest number and the smallest number in the given number  is : ",max-min)







