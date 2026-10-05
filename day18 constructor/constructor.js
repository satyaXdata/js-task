class Student{
    static clgname="Annamaiah Institute of Technology"
    static univer="Technical University of Munich"
    constructor(stdid,stdname,stdage,stdbranch,stdmarks){
        this.sId=stdid
        this.sname=stdname
        this.sage=stdage
        this.sbranch=stdbranch
        this.smarks=stdmarks
    }
    display(){
        console.log("Collage Name :",Student.clgname);
        console.log("University Name :",Student.univer);
        console.log("Student Id :",this.sId);
        console.log("Student Name :",this.sname);
        console.log("Student Age :",this.sage);
        console.log("Student Branch :",this.sbranch);
        console.log("Student Marks :",this.smarks);
        
    }
}
s1=new Student(101, "Ravi", 20, "CSE", 85.5)
console.log("---------Student 1 details-------------");
s1.display()
s2=new Student(102, "Anil", 21, "ECE", 78.5)
console.log("---------Student 2 details-------------");
s2.display()
s3=new Student(103, "Priya", 20, "EEE", 91.0)
console.log("---------Student 3 details-------------");
s3.display()
s4=new Student(104, "Sita", 21, "CSE", 88.5)
console.log("---------Student 4 details-------------");
s4.display()