//nested object inside a nested object
let college={
    CSE :{
        student1 :{
            Sname: "Satyanarayana Yelupula",
            rollno: "23G71A6658",
            details:{
                age:21,
                phone :9167340413,
                email :"yelupul@satyanarayana@gmail.com",
                address:{
                    village:"Manthini",
                    dist:"Peddapelli",
                    State:"Telangana"
                },
            },
            skills:{
                frontend:"HTML, CSS, Javascript",
                backend:"Python, Java"
            }
        },
        student2 :{
            Sname: "Abhilash.ch",
            rollno: "23G71A6698",
            details:{
                age:22,
                phone :7032567892,
                email :"abhi@rock@gmail.com",
                address:{
                    village:"CC Corner",
                    dist:"Mancherial",
                    State:"Telangana"
                },
            },
            skills:{
                frontend:"HTML, CSS",
                Backend:"JAVA"
            }
        },
        student3 :{
            Sname: "Varshith.k",
            rollno: "23G71A6645",
            details:{
                age:20,
                phone :9154303957,
                email :"varshithkoppullla@gmail.com",
                address:{
                    village:"Vemulawada",
                    dist:"Siricila",
                    State:"Telangana"
                },
            },
            skills:{
                frontend:"HTML, CSS",
                backend:" Java"
            }
        },
    }
}
//Crud operations with square bracket notation
// retrive data
console.log(college.CSE.student1);
console.log(college.CSE.student2);
console.log(college.CSE.student3);
console.log(college.CSE.student1.Sname);
console.log(college.CSE.student1.details);
console.log(college.CSE.student1.details.address);
console.log(college.CSE.student1.details.phone);
console.log(college.CSE.student1.skills);
//updating
console.log("Updating");

college.CSE.student1.details.phone=7396494863
college.CSE.student1.details.address.pin=505209
college.CSE.student4={
    Sname: "Karthik.P",
            rollno: "23G71A6765",
            details:{
                age:21,
                phone :8066497238,
                email :"purellakarthik@gmail.com",
                address:{
                    village:"MallareddyGudam",
                    dist:"Suryapet",
                    State:"Telangana"
                },
            },
            skills:{
                frontend:"HTML, CSS, Javascript",
                backend:" Java, Python"
            }
}
//deleting
console.log("deleting");

console.log(college);
delete college.CSE.student3.details.address
delete college.CSE.student1.details.address.pin
delete college.CSE.student3
console.log(college);








