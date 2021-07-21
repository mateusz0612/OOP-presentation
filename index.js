// What Object Oriented Programming (OOP) is?
// Basic idea of OOP is that we use objects to model our real world things that we want 
// represent inside our programs 

// What Object contains?
// Object usually contain related data and code which represents information about the
// thing you are trying to model and functionality that you want it to have.

// What is class?
// Class is a blueprint for creating objects
// Class contains attributes (variables) and methods (functions)

// What is constructor?
// Constructor is a special method to create and initialize object

// Defining an object template using ES6 Classes

class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getBio() {
        console.log(`Hello I'm ${this.name} ${this.surname} and I'm ${this.age} years old`);
    }

    toString() {
        return `Hello I'm ${this.name} ${this.surname} and I'm ${this.age} years old`
    }
}

// Creating new objects of class Person

const matt = new Person('Matt', 'Kovalsky', 18);
const jhon = new Person('Jhon', 'Kovalsky', 22);

matt.getBio();
jhon.getBio();


// Usage of toString method

const persons = [matt, jhon];
console.log(persons.toString());

// Defining class in ES5

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.getCarInfo = function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}


// Creating new objects of class Car

const opel = new Car('Opel', 'Astra');
const volkswagen = new Car('Volkswagen', 'Golf');

opel.getCarInfo();
volkswagen.getCarInfo();

// Creating objects using JavaScript objects 

function createNewMovie(title, length) {
    const obj = {};
    obj.title = title;
    obj.length = length;
    obj.getMovieInfo = function() {
        console.log(`Movie ${obj.title} lasts ${obj.length} minutes`);
    }
    return obj;
}

// Creating new Movie objects 

const titanic = createNewMovie('Titanic', 85);
const wolfOfWallStreet = createNewMovie('Wolf of Wall Street', 180);

titanic.getMovieInfo();
wolfOfWallStreet.getMovieInfo();

// Inheritance

class Student extends Person {
    constructor(name, surname, age, college) {
        super(name, surname, age);
        this.college = college;
    }

    getBio() {
        // super.getBio();
        console.log(`Hello I'm ${this.name} ${this.surname} and I'm ${this.age} years old and I study at ${this.college}`);
    }

    toString() {
        return `Hello I'm ${this.name} ${this.surname} and I'm ${this.age} years old and I study at ${this.college}`;
    }
}

// Creating new objects of class Student that inheritance from class Person 

const studentKate = new Student('Kate', 'Kovalsky', 20, 'Harvard');
const studentMateusz = new Student('Mateusz', 'Sz', 20, 'UWM');

studentKate.getBio();
studentMateusz.getBio();

// const students = [studentKate, studentMateusz];
// console.log(students.toString());


// TypeScript - implementing Interface and methods overloading
// https://www.typescriptlang.org/play?#code/PTDCBsEMGdoAgJYFsAO4CmT0DsAuDsBzRPdAJwDNIBjdAWAChGDdyra4BxSLASVMo10cAN6M4cbD3QAuONFxkChANzi41SK0IB7MgE85CpUTUMAvo0bUosLtMSoMWPPG58B7YWKYMJUrCNFZTMJTW09Q3lg0ys-DR1sYwBXalw9AAoA2WiTQgAaDS10XQMgvIBKUXUJXAALBGgAOmy4AF5JaVCJOHrGpvCSyPaiiINuy18JQnRcd3R+Ch0Mqp8ehKSdDCbwHUIMgAN5zqw4OQASET7m7PNRobK4S+uB4tL9cwOKibjJ60SFHAKAgqCNsOgAO72LAZADkADEQZA4AAmFGwwqwgDKKD0uFh30YwKoTRmc2ki2WFTiIDgAFlZnUdAATOA6ABu5F2kGZyjiNhg8AAgszmeRqvEecyMpAZMZlIUAEZymKECoqvJmdRSmUybDJJCK8hKvUGo1kdWSM3kLWS0W6uCQbD6E1O-SWt0S9ZkWbJMjYR1wADUcEVZkmfwY1ABuEdovFHXBUJFYrIKzM0aSsalWNVIyl5CaOthACkmdgMXBsTxkuhwASMwCtugdnsZaLc5VG1m48yAHLWsj5+NkIv2gCMhRRhKjTe2u32UoHhvIM5pwC4OHICGo8DiFGS2DSCESiDFeAQuH0AB4ACoAPhlZEIclvltvXrgPtwfoDkGf4b8jGcAQpedSdsoIwIOe+BXte8pEI+sJ0lo+IzpmgKgfUy7mlBMGXje+ormQj7Tt2mFgQAQjozZOnhOCwTeio0RgTqPlQ4DQOga6zps85tlh4Gquhc4tguGSCThq7kc2rb7IJ1G0dg3xAA