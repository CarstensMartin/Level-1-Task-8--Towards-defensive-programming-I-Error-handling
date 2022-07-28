// This example program is meant to demonstrate errors.

// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion"
//Syntax error -        There should be "" to save the variable word as a string
//Original was -        let animal = Lion
let animalType = "cat";
//Syntax error -        Indentation is incorrect
//Logic error -         Cub isnot an animal type, should be cat//mamal/predator
//Original was -        let animalType = "cub";
let numberOfTeeth = 16;
// Can be in string or number no error
let numberOfLegs = 4;
// Have to be in number format for the if statement

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth`
//Syntax error -        fullSpec is not defined as a variable with the word let - as per example errorPracticeComments.js
//Logic error -         The position of {number_of_teeth} and {animal_type} should be swapped around.
//Runtime error -       {number_of_teeth} and {animal_type} is spelled incorrect.
//Logical error -       The use of "" and not `` will display unexpected results
//Logic error -         $ should be added before the variables
//Original was -        fullSpec = "This is a {animal}. It is a {number_of_teeth} and it has {animal_type} teeth"

if (numberOfLegs > 3) {
//logic error -         We want to display on the consol the message if the animal has more than 3 legs
//Original was -        if (numberOfLegs = 3) {
        console.log(fullSpec);
        //Syntax error -        Needs brackets around full_spec
        //Runtime error -       full_spec is spelled incorrect should be fullSpec
        //Syntax error -        Indentation needed
        //Original was -        console.log full_spec;
}
