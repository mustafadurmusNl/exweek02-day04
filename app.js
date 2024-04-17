//day04
//level01
//ex1 :Get user input using prompt(“Enter your age:”). If user is 18 or older , 
//give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for 
//the number of years he needs to turn 18.
// const age=parseInt(prompt("enter your age"));
// console.log(typeof age);//number
// if(age>=18){
//     console.log("you are old enough to drive")
// }else{
//     const remainingYear=18-age;
//     console.log(`you are left with ${remainingYear} years tp drive`)
// }
//ex02 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Declare and initialize myAge
let myAge = 30;

// Prompt the user to enter their age
// const yourAge = parseInt(prompt("Enter your age:"));
// if(myAge>yourAge){
//     console.log(`i m ${myAge-yourAge} years older than you`);
// }else if(myAge<yourAge){
//     console.log(`i m ${yourAge-myAge} years younger than you`);
// }else{
//     console.log(`we are at same age`);

// }
//ex03
let a = 4;
let b = 3;
if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}
//ternary
const result = a > b ? 'a is greater than b' : 'a is less than or ewual to b';
console.log(result);
const r=a>b?'a is bigger':'b is bigger or equal';

//04 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let numberr=22;
if(numberr %2==0){
    console.log(`${numberr} is an even number`);
}else{
    console.log(`${numberr} is an odd number`);
}
//Leve02
//ex01  Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const score=66;
if (score >= 80 && score <= 100) {
 console.log ('A');
} else if (score >= 70 && score <= 79) {
    console.log ('B');
} else if (score >= 60 && score <= 69) {
    console.log ('C');
} else if (score >= 50 && score <= 59) {
    console.log ('D');
} else if (score >= 0 && score <= 49) {
    console.log ('F');
} else {
    console.log ('INVALID GRADE');
}
//02  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const month='September';   //myown way 
const monthsOfAutumn=['September', 'October','November'];
console.log(monthsOfAutumn);
for(let i=0;i<monthsOfAutumn.length;i++){
    if(month==monthsOfAutumn[i]){
        console.log(`the season is autumn`);
    }
}
//alternatively    chatgbt
if (month === 'September' || month === 'October' || month === 'November') {
    console.log('Autumn');
} else if (month === 'December' || month === 'January' || month === 'February') {
    console.log('Winter');
} 
    else if (month === 'March' || month === 'April' || month === 'May') {
        console.log('Spring');
} else if (month === 'June' || month === 'July' || month === 'August') {
    console.log('Summer');
} else {
    console.log('invalid');
}
//level03
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

//
// Prompt the user to enter a month
const monthInput = prompt('Enter a month:').toLowerCase();

// Prompt the user to enter a year
const yearInput = parseInt(prompt('Enter a year:'));

// Initialize a variable to store the number of days
let daysInMonth;

// Switch statement to handle different month inputs
switch (monthInput) {
    case 'january':
        daysInMonth = 31;
        break;
    case 'february':
        // Check for leap year
        if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || yearInput % 400 === 0) {
            daysInMonth = 29;
        } else {
            daysInMonth = 28;
        }
        break;
    case 'march':
        daysInMonth = 31;
        break;
    case 'april':
        daysInMonth = 30;
        break;
    case 'may':
        daysInMonth = 31;
        break;
    case 'june':
        daysInMonth = 30;
        break;
    case 'july':
        daysInMonth = 31;
        break;
    case 'august':
        daysInMonth = 31;
        break;
    case 'september':
        daysInMonth = 30;
        break;
    case 'october':
        daysInMonth = 31;
        break;
    case 'november':
        daysInMonth = 30;
        break;
    case 'december':
        daysInMonth = 31;
        break;
    default:
        daysInMonth = 'Invalid month';
}

// Output the result
console.log(`${monthInput} in year ${yearInput} has ${daysInMonth} days.`);
