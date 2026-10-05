//write a program to get sum of two numbers
function addtwo(){
    
//input
let n1=parseInt(document.getElementById("num1").value)
let n2=parseInt(document.getElementById("num2").value)
//process
let sum=n1+n2;
//output
document.getElementById("res").value=sum
// console.log("Sum of Two Numbers:",sum)
}
function avg(){
    
//input
let n1=parseInt(document.getElementById("aNum1").value)
let n2=parseInt(document.getElementById("aNum2").value)
let n3=parseInt(document.getElementById("aNum3").value)
//process
let sum=n1+n2+n3;
let avg=sum/3
//output
document.getElementById("aRes").value=avg
// console.log("Sum of Two Numbers:",sum)
}
function sumN(){
    num=parseInt(document.getElementById("sNum").value)
    sum=num*(num+1)/2
    document.getElementById("sRes").value=sum
}
function avgN(){
    num=parseInt(document.getElementById("sNum").value)
    sum=num*(num+1)/2
    avg=sum/num
    document.getElementById("sRes").value=avg
}
function missAngle(){
    let angle1=parseInt(document.getElementById("angle1").value)
    let angle2=parseInt(document.getElementById("angle2").value)
    let result=180-angle1-angle2
    document.getElementById("maRes").value=result
}
function profit(){
    let sp=parseInt(document.getElementById("sellPri").value)
    let cp=parseInt(document.getElementById("costPri").value)
    let profit=((sp-cp)/cp)*100;
    document.getElementById("profit").value=profit
}
function simple(){
    let price=parseInt(document.getElementById("price").value)
    let tenure=parseInt(document.getElementById("tenure").value)
    let rate=parseInt(document.getElementById("rate").value)
    let simple=(price*tenure*rate)/100
    document.getElementById("interest").value=simple
}
function simple(){
    let price=parseInt(document.getElementById("price").value)
    let tenure=parseInt(document.getElementById("tenure").value)
    let rate=parseInt(document.getElementById("rate").value)
    let compound=(price*tenure*rate)/100
    document.getElementById("interest").value=compound
}
function GrossSalary(){
    base_salary=parseInt(document.getElementById("basicSalary").value)
    bonus_per=parseInt(document.getElementById("Bonus_per").value)
    incen_per=parseInt(document.getElementById("incentive_per").value)
    bonus=base_salary*(bonus_per/100)
    incentive=base_salary*(incen_per/100)
    gross=base_salary+bonus+incentive
    document.getElementById("salary").value=gross
}
function Inhand(){
    base_salary=parseInt(document.getElementById("basicSalary").value)
    bonus_per=parseInt(document.getElementById("Bonus_per").value)
    incen_per=parseInt(document.getElementById("incentive_per").value)
    pf_per=parseInt(document.getElementById("pf_per").value)
    health_per=parseInt(document.getElementById("health_per").value)
    bonus=base_salary*(bonus_per/100)
    incentive=base_salary*(incen_per/100)
    pf=base_salary*(pf_per/100)
    health=base_salary*(health_per/100)
    gross=base_salary+bonus+incentive
    inhand=gross-pf-health
    document.getElementById("salary").value=inhand

}
function lastdigit(){
    num=parseInt(document.getElementById("number").value)
    lastdigit=num%10
    document.getElementById("r_result").value=lastdigit
}
function removelastdigit(){
    num=parseInt(document.getElementById("number").value)
    removelastdigit=parseInt(num/10)
    document.getElementById("r_result").value=removelastdigit
}
function swaptwo(){
    num1=parseInt(document.getElementById("num1").value)
    num2=parseInt(document.getElementById("num2").value)
    num1=parseInt(num1+num2)
    num2=parseInt(num1-num2)
    num1=parseInt(num1-num2)
    document.getElementById("dnum1").value=num1
    document.getElementById("dnum2").value=num2
}
function swapwiththree(){
     num1=parseInt(document.getElementById("num1").value)
    num2=parseInt(document.getElementById("num2").value)
    num3=num1
    num1=num2
    num2=num3
    document.getElementById("dnum1").value=num1
    document.getElementById("dnum2").value=num2
}











