// module 1:ANONYMOUS Without input and with out return
// 1.print numbers from 20 -40
num=function(){
    for(i=20;i<=40;i++){
        console.log(i);
        
    }
}
num()
// 2.print first 15 odd numbers
let odd =function(){
    count=0
    for(let i=1;i<=10000;i++){
        if(i%2!=0){
            console.log(i);
            count++
        }
        if(count==15){
            break
        }
    }
}
odd()
// 3.print sum of range 1-50
sumRange=function(){
    sum=0
    for(let i=1;i<=50;i++){
        sum+=i
    }
    console.log(sum);
    
}
sumRange()
// 4.print all the numbers from 100 to 200 which are divisible by 7
div7=function(){
    for (let i=100;i<=200;i++){
        if(i%7==0){
            console.log(i);
            
        }
    }
}
div7()
// 5.sum of square from 1 to 10
sumOfSquare=function (){
    sum=0
    for(let i=1;i<=10;i++){
        sum+=i**2
    }
    console.log(sum);
    
}
sumOfSquare()
// MODULE 2:ANONYMOUS FUNCTION WITH INPUT AND WITHOUT RETURN
// 1.takes the input and prints all its multiples upto 10
let mul=function(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
        
    }
}
mul(5)
// 2.takes the input and prints its sum of its factors
sumFactors=function (n){
    sum=0
    for(i=1;i<=n;i++){
        if(n%i==0){
            sum+=i
        }
    }
    console.log(sum);
    
}
sumFactors(54)
// 3.takes a number and prints second highest digit
secHighN=function(n){
    max=0
    sec_max=0
    while(n>0){
        a=n%10
        if(a>max){
            sec_max=max
            max=a
        }
        else if(max!=a && a>sec_max){
            sec_max=a
        }
        n=parseInt(n/10)
    }
    console.log(sec_max);
    
}
secHighN(8676529)
// 4.prints binary digits
binary=function(n){
    bi=0
    while(n>0){
        bi*=10
        bi+=n%2
        n=parseInt(n/2)
    }
    console.log((bi));
    
}
binary(8)
// 5.LCM
lcm=function (a,b){
    if(a>b){
        max=a
    }
    else{
        max=b
    }
    while(true){
        if(max%a===0 && max%b===0){
            console.log("LCM :",max);
            break
        }
        max++
    }
}
lcm(12,18)
//MODULE:3 -WITHOUT INPUT AND WITH RETURN
//1.sum of first 30 numbers
sumOfN=function(){
    sum=0
    for(i=1;i<=30;i++){
        sum+=i
    }
    return sum
}
console.log(sumOfN());
//2.product odd numbers from 1 to 9
productOfOdd=function (){
    pro=1
    for(i=1;i<=9;i++){
        if(i%2!=0){
            pro*=i
        }
    }
    return pro
}
console.log(productOfOdd());
// 3count prime between 1 to 200
countPrime=function(){
    count=0
    for(let i=1;i<=200;i++){
        prime=true
        for(j=2;j<i;j++){
            if(i%j==0){
                prime=false
            }
        }
        if (prime){
            count++
        }
    }
    return count
}
console.log(countPrime());
// 4.common factors
common=function(){
    a=12
    b=18
    count=0
    for(i=1;i<=a;i++){
        if(a%i==0 &&b%i==0){
            count++
        }
    }
    return count
}
console.log(common());
// 5.count uppercase in a string
upperCount=function(){
    count=0
    s="My Name Is Satya"
    for(i=1;i<=s.length;i++){
        if(s[i]>="A" && s[i]<="Z"){
            count++
        }
    }
    return count
}
console.log(upperCount());
// MODULE 4:ANONYMOUS FUNCTION WITH INPUT AND WITH RETURN
// 1.returns square root
sqrt=function(n){
    let i=1
    while(i*i<=num){
        if(i*i==num){
            return i
        }
        i++
    }
    return "NOT A PERFECT SQUARE ROOT"
}
console.log(sqrt(4));
// 2.second smallest
sec_small=function(n){
    min=9
    sec_min=9
    while(n>0){
        a=n%10
        if(a<min){
            sec_min=min
            min=a
        }
        else if(a!=min && a<sec_min){
            sec_min=a
        }
        n=parseInt(n/10)
    }
    return sec_min
}
console.log(sec_small(123456));

// 3.gcd
gcd=function(a,b){
    for(i=1;i<=a;i++){
        if(a%i==0 && b%i==0){
            gsd=i
        }
    }
    return gcd
}
console.log(gcd(48,18));
// 4.count no.of common factors
commFact=function(a,b){
    count=0
    for(i=1;i<=a;i++){
        if(a%i==0 &&b%i==0){
            count++
        }
    }
    return count
}
console.log(commFact(18,12));
// 5.scholarship ELigible
schor=function(m){
    if(m>=85){
        return "Eligible for SCHOLARSHIP"
    }
    else{
        return "NOT ELIGIBLE FOR SCHOLARSHIP"
    }
}