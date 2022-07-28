// This example program is meant to demonstrate errors.

// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program");
// Syntax error -   Brackets required 
//Original was -    console.log "Welcome to the error program";
console.log("\n");
//Syntax error -    Brackets required
//Syntax error -    Indentation is incorrect
//Runtime error -   console.log should be lower case 
//Original was -    Console.log "\n";

let ageStr = "24";
//Syntax error -    It was == if equal to instead of = equal to 
//Syntax error -    Indentation is incorrect
//Logic error -     ageStr is used with a mathematical operator later in the formula.
//Original was -    let ageStr = "24 years old";
age = Number(ageStr);
//Syntax error -    Indentation is incorrect
//Logical error -   Want to convert to a number the string, not test in Integer
//Originally was -  age = Integer(ageStr)
console.log("I'm " + age + " years old.");
//Syntax error -    Indentation is incorrect
let yearsAdd = 3;
//Logic error -     The "" makes it a string and we need it as a number for the calculation
//Logic error -     Use better naming - yearsAdd - at the moment it is 3 but if we want to change it in the future it might be 8 and would not make sense if Three = 8
//Original was -    let three = "3";
let answerYears = age + yearsAdd;
//Syntax error -    Indentation is incorrect

console.log("The total number of years:" + yearsAdd);
//Syntax error -    No brackets
//Syntax error -    The variable answerYears sould not be in ""
//Logic error -     Should be yearsAdd(Previously knows as three) and not answerYears
//Original was -    console.log "The total number of years:" + "answerYears";

//Logic error -     Add the below 2 lines to the code
let monthAdd = 6    //As per line 38 - Logical error - need to calculate the number of months into the future - need this information for calculation
console.log("The total number of months:" + monthAdd); //As line 38 - Logice error - We would want the user to see the output

let answerMonths = answerYears * 12 + monthAdd
//Runtime error -   answer should be answerYears
//Syntax error -    Should identify the variable with the word let - as per example errorPracticeComments.js
//Logic error -     Should add the 6 months with the variable monthAdd
//Origial was -     answerMonths = answer*12
console.log("In " + yearsAdd + " years and " + monthAdd + " months, I'll be " + answerMonths + " months old");
//Syntax error -    Should have brackets
//Correct logic but would make more sense to use the variables yearsAdd and monthAdd if the variables do change in the future and give a correct console output
//Original was -    console.log "In 3 years and 6 months, I'll be " + answerMonths + " months old";

//HINT, 330 months is the correct answer