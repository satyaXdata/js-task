// ARROW FUNCTIONS 
// MODULE 1:WITH OUT INPUT AND WITH OUT RETURNS
// 1.multiples of 4 from 1 to 100
mul4=()=>{
    for(i=1;i<=100;i++){
    if(i%4==0){
        console.log(i);
        
    }
}
}
mul4()
//2.product of even numbers from 1 to 10
evenpro=()=>{
    pro=1
    for(i=1;i<=10;i++){
        if(i%2!=0){
            pro+=i
        }
    }
    console.log(pro);
    
} 
evenpro()

// first 10 multiples of 9
mul9=()=>{
    count=0
    i=0
    while(true){
        if(i%9==0){
            count++
            console.log(i);
            
        }
        if(count==9){
            break
        }
        i++
    }
}
mul9()
// first 10 triangular numbers
trinum=()=>{
    sum=0
    for(i=1;i<=10;i++){
        sum+=i
        console.log(sum);
        
    }
}
trinum()
// 5.reverse pattern 5 to 1
rec=()=>{
    for(i=5;i>=1;i--){
        line=""
        for(j=i;j>=i;j--){
            line+=j
        }
        console.log(line);
        
    }
}
rec()
// MODULE2:WITH INPUT AND WITH OUT RETURN
// 1.SMALLER IN 2 NUMBERS
small=(a,b)=>{
    if(a<b){
        console.log(a);
        
    }
    else{
        console.log(b);
        
    }
}
small(8,9)
// 2.divisers in decending order
div=(n)=>{
    for(i=n;i>=1;i--){
        if(n%i==0){
            console.log(i);
            
        }
    }
}
div(18)
// 3.sum of odddigits places
oddplace=(n)=>{
    sum=0
    count=0
    while(n>0){
        a=n%10
        count++
        if(count%2!=0){
            sum+=i
        }
        n=parseInt(n/10)
    }
    console.log(sum);
    
}
oddplace(54321)
// reverse a string
revstring=(s)=>{
    rev=""
    for(i=s.length;i>=0;i--){
        rev+=s[i]
    }
    console.log(rev);
    
}
revstring("mani")
// 5.vote eligible
voteeli=(a)=>{
    if(a>=18){
        console.log("eligible to vote");
        
    }
    else{
        console.log("not eligible to vote");
        
    }
}
voteeli(23)
// MODULE-3:WITHOUT INPUT AND WITH RETURN
// 1.sum of squares from 1 to 20
sumOFSSquare=()=>{
    sum=0
    for(i=1;i<=20;i++){
        sum+=i*i
    }
    return sum
}
console.log(sumOFSSquare());
console.log("trinum");
// 2.15th fibinocci number
fib15=()=>{
    a=0
    b=1
    for(i=2;i<=15;i++){
        a=b
        b=a+b
    }
    return a
}
console.log(fib15());
// 3.sum of prime digits in a number
prime=()=>{
    n=234567
    sum=0
    while(n>0){
        a=n%10
        if(a==2 || a==3 ||a==5 ||a==7){
            sum+=a
        }
        n=parseInt(n/10)
    }
    return sum
}
console.log(prime());
// binary to decimal
bToD=()=>{
    n=1101
    de=0
    p=1
    while(n>0){
        d=n%10
        de=de+(d*p)
        p*=2
        n=parseInt(n/10)
    }
    return de
}
console.log(bToD());
// 5.total bill including 18% gst
totalBill=()=>{
    bill=2400
    gst=bill*18/100
    total=bill+gst
    return total
}
// MODULE 4:WITH INPUT AND WITH RETURN
// 1.PRODUCT OF NON ZEROS IN A NUMBER
prodgi=(n)=>{
    pro=1
    while(n>0){
        a=n%10
        if(a!=0){
            pro*=a
        }
        n=parseInt(n/10)
    }
    return pro
}
console.log(prodgi(10203040405));
// largest prime digit in a number
maxprime=(n)=>{
    max=0
    while(n>0){
        a=n%10
        if(a==2 || a==3 || a==5 || a==7){
            if(a<max){
                max=a
            }
        }
        n=parseInt(n/10)
    }
    return max
}
console.log(maxprime(1838796));
// 3.difference between lagest and smallest digit in a number
diff=(n)=>{
    max=0
    min=9
    while(n>0){
        a=n%10
        if(a>max){
            max=a
        }
        if(a<min){
            min=a
        }
        n=parseInt(n/10)
    }
    return max-min
}
console.log(diff(86798765));
// palindrome number
palin=(n)=>{
    temp=n
    rev=0
    while(temp>0){
        rev*=10
        rev+=temp%10
        temp=parseInt(temp/10)
    }
    if(n==rev){
        return "Palindrome"
    }
    else{
        return "not a palindrome"
    }
}
console.log(palin(12321));

// count 0's in a number
countZ=(num)=>{
    count=0
    while(num>0){
        n=num%10
        if(n==0){
            count++
        }
        num=parseInt(num/10)
    }
    return count
}
console.log(countZ(1020304050560300050));
