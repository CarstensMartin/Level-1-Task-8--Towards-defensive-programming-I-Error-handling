//This program is to determine the fuel range of a car if it can reach a destination from Johannesburg

//KM to Cape Town from JHB
let CPTkm = 1398;


//KM to Durban from JHB
DBNkm = 567;
//Syntax error -        Variable should be defined with let as per example errorPracticeComments.js

//Ask user end destination
var finalpoint = prompt("Where do you want to drive to?\n D - Durban\n C - Cape Town");
//Syntax error -        Indentation is incorrect


//Create while loop if the user enters data wrong
while (!((finalpoint === "D") || (finalpoint === "C"))) {
    var finalpoint = prompt("Where do you want to drive to?\n D - Durban\n C - Cape Town\n Use capital D or C");
}


//Ask user data of his situation and vehicle consumption
let fuel = Number(prompt("How many liters of fuel do you have in your main tank?"));

let reservefuel = prompt("How many liters reserve fuel does your car have?");
//Logical error -         Prompt is in String format and should be converted to Number format 'Number()' in order to work out Totalfuel

let consumption = Number(prompt(How many KM do you get on a liter ?));
//Syntax error -        "" should be used in the prompt

//Do calculation
let Totalfuel = fuel + reservefuel
let travelrange = Totalfuel * consumption

//Output on consol if the user will be able to make final destination
if ((finalpoint == "C") ||
//Logical error -       It should be AND && and not OR ||
    (travelrange >= CPTkm)) {
    console.log("Yes you can travel to Cape Town")
}
else if ((final_Point == "C") &&
//Runtime error -       final_Point is spelled incorrect, should be finalpoint
    (travelrange < CPTkm)) {
    console.log("You dont have enough fuel to travel to Cape Town")
}
else if ((finalpoint == "D") &&
    (travelrange >= DBNkm)) {
    Console.log("Yes you can travel to Durban")
//Runtime error -       console.log should be in lower case
}
else if ((finalpoint == "D") &&
    (travelrange < DBNkm)) {
    console.log("You dont have enough fuel to travel to Durban")
}
