/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - By default, .this will refer to the console/window if it is in the global scope and if it is not referring to any predefined object or using any of the other binding principles.

* 2.  Implicit Binding - Using .this immediately after an object that has been created, or a placeholder for an object. .this will refer to the object to the left of the dot

* 3. New Binding - When creating a constructor, .this is used as a placeholder for the object to be created. The keyword "New" is used when making a new object and the name of the object will replace the .this keyword inside the constructor.

* 4. Explicit Binding - The call, apply, and bind methods are used to link a function that uses .this with an object to take place of the .this keyword. This will only happen in that instance.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let greet = function() {
    console.log(this.name);
};

greet();

// Principle 2

// code example for Implicit Binding

let teacher = {
    name: 'Edgar',
    age: 28,
    speak : function() {
        console.log(this.name);
    }
};

teacher.speak();

// Principle 3

// code example for New Binding

let Student = function(name, gradYear, gpa) {
    this.name = name;
    this.gradYear = gradYear;
    this.gpa = gpa;
};

let sebastian = new Student('Sebastian', '2008', 4.0);

console.log(sebastian);

// Principle 4

// code example for Explicit Binding

let speakUp = function(stren01, stren02, stren03) {
    console.log("Hello, I am " + this.name + " " + "and I am " + stren01 + ", " + stren02 + ", and " + stren03);
};

let pupil = {
    name: 'Santiago',
    age: 22
};

let strengths = ['smart', 'funny', 'supersmart'];

speakUp.apply(pupil, strengths);