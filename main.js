import inquirer from "inquirer";
const rendomName = Math.floor(10000 + Math.random() * 100000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select your courses:",
        choices: ["HTML", "CSS", "Javascript", "Typescript", "Artificial intelligence", "Python"]
    },
    {
        name: "fee",
        type: "number",
        message: "Enter your fee:"
    }
]);
const tutionfee = {
    HTML: 5000,
    CSS: 6000,
    JAVASCRIPT: 7000,
    TYPESCRIPT: 8000,
    AI: 900000,
    PYTHON: 100000
};
console.log(`\n Tution Fee : ${tutionfee[answer.courses]}`);
console.log(`\n Balance : ${myBalance}\n`);
let pymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select  payment method:",
        choices: ["bankaccount", "EasyPaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter amount:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non- empty value.";
        }
    }
]);
console.log(`\n You select paymant method ${"paymentType.payment"}\n`);
const tutionfees = tutionfee[answer.courses];
const paymantAmount = parseFloat('paymentType.amount');
if (paymantAmount === tutionfees) {
    console.log(`Congratulation,you hava successfully enrolled in ${answer.courses}. \n`);
    console.log(`Your student id is ${'rendomNumber'}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["view Status", "Exit"]
        }
    ]);
    if (ans.select === "view Status") {
        console.log("\n ********staus********\n");
        console.log(`Student name : ${answer.students}`);
        console.log(`student ID  : ${'randomNumber'}`);
        console.log(`courses : ${answer.courses}`);
        console.log(`Tution Fees paid : ${paymantAmount}`);
        console.log(`Balance : ${myBalance += paymantAmount}`);
    }
    else {
        console.log("\nEixting Student Menagement system.\n");
    }
}
else {
    console.log("Invalid amount dua to courses\n");
}
