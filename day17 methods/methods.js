//without input and without return
class task1{
    
    static details(){
        let model="Porsche 911"
        let color="black"
        let price="2.5cr"
        console.log("Model : ",model);
        console.log("color : ",color);
        console.log("price : ",price);
    }
    //with out input with return
    static mulof3(){
    let count=1
    let i=1
    while(count<=20){
        if(i%3==0){
            count++
        }
        i++
    }
    return count
    }
    //with input and without return
    static bonus(s){
        if(s>50000){
            let b=s*20/100
            console.log(s+b);
        }
        else{
            b=s*10/100
            console.log(s+b);
            
        }
    }
    // with input with return
    static Grade(g){
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

task1.details()
console.log(task1.mulof3());
task1.bonus(51000);
console.log(task1.Grade(20))

class task2{
    //without input without return
    static perfect(){
    for(let i=1;i<=1000;i++){
        let sum=0
        for(let j=1;j<i;j++){
            if(i%j==0){
                sum+=j
                }
            }
            if(sum==i){
                console.log(i);
            
        }
    }
    }
    // without input with return
    static cube(){
        let num=5
        let c=num**3
        return c
    }

//with input and without return
    static eligible(a){
        if(a>18){
            console.log("Eligible to vote");
        }
        else{
            console.log("Not Eligible to vote");
        }
    }
//with input with return
    static bill(b){
        if(b>5000){
            dis=b*10/100
            return "Total Bill :"+b-dis
        }
        else{
            return "Total Bill :"+b
        }
    }
}
task2.perfect()
console.log(task2.cube())
task2.eligible(19)
console.log(task2.bill(5000))
