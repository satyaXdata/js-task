// 1. Hospital Patient Management System 
class Hospital{
    static hospitalName="APOLLO Hospital"
    static Loc="Hyderabad"
    constructor(id, name, age, gender, disease, roomNumber){
        this.pId=id
        this.pName=name
        this.pAge=age
        this.pGender=gender
        this.pDisease=disease
        this.pRoomNumber=roomNumber
    }
    display(){
        console.log("Hospital Name :",Hospital.hospitalName);
        console.log("Location :",Loc);
        console.log("Patient id :",this.pId);
        console.log("Name :",this.pName);
        console.log("Age :",this.pAge);
        console.log("Gender :",this.pGender);
        console.log("Disease :",this.pDisease);
        console.log("Room Number :",this.pRoomNumber);
    }
}
let p1=new Hospital(543101, "Ravi", 25, "Male", "Fever", 101)
console.log("----------Patient 1 Details-------------");
p1.display()
let p2=new Hospital(543102, "Priya", 30, "Female", "Diabetes", 102)
console.log("----------Patient 2 Details-------------");
p2.display()
let p3=new Hospital(543103, "Arun", 45, "Male", "Blood Pressure", 103)
console.log("----------Patient 3 Details-------------");
p3.display()
let p4=new Hospital(543104, "Sneha", 28, "Female", "Migraine", 104)
console.log("----------Patient 4 Details-------------");
p4.display()
// 2. Movie Management System
class Movie{
    static Platform="Prime"
    static country="India"
    constructor(movieId, movieName, hero, heroine, language, rating){
        this.mId=movieId
        this.mName=movieName
        this.mHero=hero
        this.mHeroine=heroine
        this.mLanguage=language
        this.mRating=rating
    }
    display(){
        console.log("Platform :",Movie.Platform);
        console.log("Country :",Movie.country);
        console.log("Movie ID :",this.mId);
        console.log("Movie Name :",this.mName);
        console.log("Hero :",this.mHero);
        console.log("Heroine :",this.mHeroine);
        console.log("Language :",this.mLanguage);
        console.log("Rating :",this.mRating);
        
    }
}
let m1=new Movie(1, "RRR", "Ram Charan", "Alia Bhatt", "Telugu", 9)
console.log("---------Movie 1 Details-------------");
m1.display()
let m2= new Movie(2, "Pushpa", "Allu Arjun", "Rashmika", "Telugu", 8)
console.log("----------Movie 2 Details-------------");
m2.display()
let m3=new Movie(3, "Jawan", "Shah Rukh Khan", "Nayanthara", "Hindi", 8.5)
console.log("----------Movie 3 Details-------------");
m3.display()
let m4=new Movie(4, "Leo", "Vijay", "Trisha", "Tamil", 8)
console.log("----------Movie 4 Details-------------");
m4.display()
// 3. Flight Management System
class Flight{
    static airLineName="Indigo"
    static country="India"
    constructor(flightNumber, source, destination, passengerName, seatNumber, ticketPrice) {
        this.fNumber=flightNumber
        this.fSource=source
        this.fDestination=destination
        this.fPassengerName=passengerName
        this.fTicketPrice=ticketPrice
        this.fSeatNumber=seatNumber
    }
    display(){
        console.log("Air Line Name :",Flight.airLineName);
        console.log("Country :",Flight.country);
        console.log("Flight Number :",this.fNumber);
        console.log("Source :",this.fSource);
        console.log("Destination :",this.fDestination);
        console.log("Passenger Name :",this.fPassengerName);
        console.log("Seat Number :",this.fSeatNumber);
        console.log("Ticket Price :",this.fTicketPrice);
    }
}
let f1=new Flight("INDIGO101", "Hyderabad", "Delhi", "Rahul", "A1", 5500)
console.log("----------Flight 1 Details-------------");
f1.display()
let f2=new Flight("INDIGO102", "Mumbai", "Chennai", "Priya", "B2", 4800)
console.log("----------Flight 2 Details-------------");
f2.display()
let f3 = new Flight("INDIGO103", "Bangalore", "Kolkata", "Arun", "C3", 5200)
console.log("----------Flight 3 Details-------------");
f3.display()
let f4=new Flight("INDIGO104", "Delhi", "Hyderabad", "Sneha", "D4", 5000)
console.log("----------Flight 4 Details-------------");
f4.display()
