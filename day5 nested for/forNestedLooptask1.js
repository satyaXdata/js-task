// Find the sum of all prime numbers between 20 and 150.
sum=0
console.log("with for loop")
for(let n=20;n<=150;n++){
    prime=true
    for(let i=2;i<n;i++){
        if(n%i==0){
            prime=false
        }
    }
    if(prime){
        sum+=n
    }
}
console.log("The sum of all prime numbers between 20 to 150 : ",sum)
//with while loop
console.log("with while loop ")
sum=0
i=20
while(i<=150){
    prime=true
    j=2
    while(j<i){
        if(i%j==0){
            prime=false
        }
        j++
    }
    if(prime){
        sum+=i
    }
    i++
}
console.log("The sum of all prime numbers between 20 to 150 : ",sum)
// Find the average of all perfect numbers between 1 and 1000.
per_sum=0
count=0
for(let i=1;i<=1000;i++){
    sum=0
    for(let j=1;j<i;j++){
        if(i%j==0){
            sum+=j
        }
    }
    if(i==sum){
        per_sum+=i
        count++
    }
}
console.log("The average of all perfect numbers i the range between 1 to 1000 : ",per_sum/count)
//with while loop
console.log("with while loop")
per_sum=0
count=0
i=1;
while(i<=1000){
    sum=0
    j=1
    while(j<i){
        if(i%j==0){
            sum+=j
        }
        j++
    }
    if(i==sum){
        per_sum+=i
        count++
    }
    i++
}
console.log("The average of all perfect numbers i the range between 1 to 1000 : ",per_sum/count)
// Print all leap years between 1900 and 2026
console.log("All the leap year in the range 1900 to 2026:")
for(let i=1900;i<=2026;i++){
    if(i%4==0){
        console.log(i)
    }
}
//with while loop
console.log("with while loop")
i=1900
while(i<=2026){
    if(i%4==0){
        console.log(i);
    }
    i++
}
// Print all palindrome numbers between 100 and 500.
console.log("All the palindrome numbers in the range 100 to 500 :")
for(let i=100;i<=500;i++){
    temp=i
    rev=0
    for(let j=1;j<=3;j++){
        rev*=10
        rev+=temp%10
        temp=parseInt(temp/10)
    }
    if(i==rev){
        console.log(i)
    }
}
//with while loop
console.log("with while loop")
i=100
while(i<=500){
    temp=i
    rev=0
    while(temp>0){
        rev*=10
        rev+=temp%10
        temp=parseInt(temp/10)
    }
    if(i==rev){
        console.log(i)
    }
    i++
}
// Print all numbers between 120 and 850 whose digit sum is exactly 10.
console.log("All the numbers between 120 to 850 whose digit sum is 10: ")
for(let i=120;i<=850;i++){
    sum=0
    j=i
    for(let k=1;k<=3;k++){
    sum+=j%10
    j=parseInt(j/10)
    }
    if(sum==10){
        console.log(i)
    }
}
//with while loop
console.log("with while loop")
i=120
while(i<=850){
    sum=0
    j=i
    while(j>0){
        sum+=j%10
        j=parseInt(j/10)
    }
    if(sum==10){
        console.log(i)
    }
    i++
}
// Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.
console.log("pairs in the range 1 to 50 where sum is 30 : ")
for(let i=1;i<=25;i++){
    for(let j=26;j<=50;j++){
        if(i+j==30){
            console.log(i,j)
        }
    }
}
//with while loop
console.log("with while loop")
i=1
while(i<=25){
    j=26
    while(j<=50){
        if(i+j==30){
            console.log(i,j)
        }
        j++
    }
    i++
}
// Print all numbers between 10 and 300 that have exactly 3 factors.
console.log("The numbers in the range between 10 to 300 that have exactly 3 factors :")
for(let i=10;i<=300;i++){
    count=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==3){
        console.log(i)
    }
}
//with while loop
console.log("with while loop ")
i=10
while(i<=300){
    count=0
    j=1
    while(j<=i){
        if(i%j==0){
            count++
        }
        j++
    }
    if(count==3){
        console.log(i)
    }
    i++
}
// Print the prime factors of every number between 20 and 50
for(let i=20;i<=50;i++){
    prime=true
    for(let j=2;j<i;j++){
        if(i%j==0){
            prime=false
        }
    }
    if(prime){
        console.log("prime factors of ",i," : ")
        for(let k=1;k<=i;k++){
            if(i%k==0){
                console.log(k)
            }
        }
    }
}
//with while loop
console.log("with while loop ")
i=20
while(i<=50){
    prime=true
    j=2
    while(j<i){
        if(i%j==0){
            prime=false
        }
        j++
    }
    if(prime){
        console.log("prime factors of ",i," : ")
        k=1
        while(k<=i){
            if(i%k==0){
                console.log(k)
            }
            k++
        }
    }
    i++
}
// Print all Armstrong numbers between 100 and 999.
console.log("All the Armstrong number in the range 100 to 999 : ")
for(let i=100;i<=999;i++){
    temp=i
    sum=0
    for(let j=1;j<=3;j++){
        n=temp%10
        sum+=n**3
        temp=parseInt(temp/10)
    }
    if(i==sum){
        console.log(i)
    }
}
//with while loop
console.log("with while loop ")
i=100
while(i<=999){
    temp=i
    sum=0
    while(temp>0){
        n=temp%10
        sum+=n**3
        temp=parseInt(temp/10)
    }
    if(i==sum){
        console.log(i)
    }
    i++
}
// Find the number between 50 and 150 that has the maximum number of factors.
max=0
max_count=0
for(let i=50;i<=150;i++){
    count=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count>max_count){
        max_count=count
        max=i
    }
}
console.log("The number between 50 to 150 that has maximum number of factors is :",max," with ",max_count," factors")
//with while loop
console.log("with while loop ")
max=0
max_count=0
i=50
while(i<=150){
    count=0
    j=1
    while(j<=i){
        if(i%j==0){
            count++
        }
        j++
    }
    if(count>max_count){
            max_count=count
            max=i
        }
    i++
}
console.log("The number between 50 to 150 that has maximum number of factors is :",max," with ",max_count," factors")






