const prompt = require('prompt-sync')();
//use prompt-sync function to get propmting function
function speedometer(){
    const speed = prompt('Enter Speed: ');
//prompt to get user input on his speed
    let points = 0;
//declared point as variable and got it a value of 0
    if (speed < 70 ){
        return 'Ok';
    }
    else{
        points = Math.floor((speed - 70)/5);
//Math.floor returns a whole number by rounding it
//Subtracting 70 from the speed in order to divide by 5 which is the increment,we get the actual points
        if (points > 12){
            return 'License suspended';
//suspends license if points are greater than 12
        } else {
            return 'Points: ' + points
        }
//you can use backticks or + in order to get ${points} printed out
        }
    }

console.log(speedometer())
//called for the function and printed it out also


