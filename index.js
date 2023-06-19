const prompt = require('prompt-sync')();

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
}

const input = prompt('Enter Student Marks: ');
const marks = parseInt(input)

const grade = gradegenerator(marks);
console.log('Grade: ', grade)


