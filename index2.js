const prompt = require('prompt-sync')();
//use prompt-sync function to get propmting function

function calculateNetSalary(){
    let basicSalary = prompt('Enter Basic Salary: ')
    let basic = parseInt(basicSalary)
    let benefits = prompt('Enter benefits: ')
    let ben = parseInt(benefits)
    //getting the basic values of basicSalary an benefits
    //used parseint to extract a mumber from the string amd assigned it to a vaariable
    //this is the variables we are going to use in actual calculation since they contain the actual numbers

    let payee = (basic + ben) * 0.15;
    //Calculating payee and assigned to a variable

    let NHIFDeductions = (basic * 0.02);
    //Calculating NHIF deductions

    let NSSFDeductions = (basic * 0.15);
    //CalculatING NSSF deductions

    let grossSalary = (basic + ben);
    //Calculating gross salary

    let netSalary = (grossSalary - payee - NHIFDeductions - NSSFDeductions);
    //Calculating net salary

    return `This is your netSalary: ${netSalary}`;
}

console.log(calculateNetSalary())
//tax rates are not accurate and were just used for completion of the assignements