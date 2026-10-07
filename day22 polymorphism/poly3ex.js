// example 1: Hospital
class Surgen{
    role(){
        console.log("Surgen does operation");
        
    }
}
class Cardiologist extends Surgen{
    role(){
        console.log("cardiologist cures Heart related problems");
        
    }
}
class Dentist extends Surgen{
    role(){
        console.log("Dentist cures Dental problems");
        
    }
}
let s= new Surgen()
s.role()
let c=new Cardiologist()
c.role()
let d=new Dentist()
d.role()
// example 2 : 
class RBI{
    interest(){
        console.log("RBI gives you 5% interest rate");
        
    }
}
class SBI extends RBI{
    interest(){
        console.log("SBI gives you 7 % interest rate");
        
    }
}
class HDFC extends RBI{
    interest(){
        console.log("HDFC gives you 8 % interest rate");
        
    }
}
let r=new RBI()
r.interest()
let sb=new SBI()
sb.interest()
let hd=new HDFC()
hd.interest()
// example 3 : 
class Teacher{
    role(){
        console.log("Teacher Teach Student");
        
    }
}
class MathsLecture extends Teacher{
    role(){
        console.log("maths Teacher Teach Students Mathematics");
        
    }
}
class ScienceLecture extends Teacher{
    role(){
        console.log("Science Teacher Teach Students Science");
        
    }
}
let t=new Teacher()
t.role()
let m=new MathsLecture()
m.role()
let sl=new ScienceLecture()
sl.role()