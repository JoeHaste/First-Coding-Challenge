const prompt = require('prompt-sync')();
//use prompt-sync function to get propmting function

function gradegenerator(marks){
    if(marks > 80){
        return 'A';
    }
    else if(marks =>60 && marks <= 79){
        return 'B';
    }
    else if(marks =>49 && marks <= 59){
        return 'C';
    }
    else{
        return 'E';
    }
//this the code that will give us the return values
//used else if in order to get results for multiple conditions
}

const input = prompt('Enter Student Marks: ');
//assigned the prompt function to a variable
const marks = parseInt(input)
//used parseint in order to get the actual vakue from the inputted strings
const grade = gradegenerator(marks);
console.log('Grade: ', grade)


