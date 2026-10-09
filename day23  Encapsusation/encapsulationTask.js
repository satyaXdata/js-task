// 1.ATM 
class ATM{
    #balance
    constructor(balance){
        this.#balance=balance
    }
    getBalance(){
        return "Balance :"+this.#balance
    }
    setWithdraw(wd){
        if(wd<this.#balance){
            this.#balance-=wd
            console.log("Successfully Withdraw amount : ",wd);
        }
        else{
            console.log("Insufficent Balance");
            
        }
    }
    setDeposit(deposit){
        this.#balance+=deposit
        console.log("Successfully Deposit Amount :",deposit);
    }
}
let a=new ATM(50000)
console.log(a.getBalance())
a.setWithdraw(35000)
a.setDeposit(55000)
console.log(a.getBalance())
// 2.Student marks
class Student{
    #marks
    constructor(m){
        if(m>0&&m<=100){
        this.#marks=m
        }
        else{
            console.log("Invalid Marks please enter in the range of 1 to 100");
            
        }
    }
    getMarks(){
        return "Marks : "+this.#marks
    }
    setAddMarks(m){
        if(this.#marks+m>0 && this.#marks+m<=100){
        this.#marks+=m
        console.log("Number of marks Added :",m);
        
        }
        else{
            console.log("Invalid Marks");
            
        }
    }
}
let s=new Student(10)
console.log(s.getMarks())
s.setAddMarks(90)
console.log(s.getMarks())
// shopping Cart
class ShoppingCart {
    #total = 0;

    setAddItem(price) {
        if (price > 0) {
            this.#total += price;
            console.log("Item Prize Added : ",price);
            
        }
    }

    setRemoveItem(price) {
        if (price > 0 && price <= this.#total) {
            this.#total -= price;
            console.log("Item Prize Removed : ",price);

        }
    }

    getShowTotal() {
        return "Cart total: ₹" + this.#total
    }
}

let cart = new ShoppingCart();
cart.setAddItem(500);
cart.setAddItem(300);
cart.setRemoveItem(100);
console.log(cart.getShowTotal());