let num1=2
let num2=3
let operator="+"
switch(operator){
    case "+":
        let sum=num1+num2
        console.log("Addition of ",num1," and ",num2," is ",sum)
        break;
    case "-":
        let sub=num1-num2
        console.log("Subtraction of ",num1," and ",num2," is ",sub)
        break;
    case "*":
        let mul=num1*num2
        console.log("Multiplication of ",num1," and ",num2," is ",mul)
        break;
    case "/":
        let div=num1/num2
        console.log("Division of ",num1," and ",num2," is ",div)
        break;
    case "%":
        let mod=num1%num2
        console.log("Remainder of ",num1," and ",num2," is ",mod)
        break;
    case "**":
        let exp=num1**num2
        console.log("Exponential of ",num1," and ",num2," is ",exp)
        break;
    default:
        console.log("Invalid input. Please enter Arithmatic operators")
}