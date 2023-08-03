console.log ('hello world')
console.log ('hello'+'world')
console.log ('Name'[0])
console.log ('' .length)
let str = 'Name'
console.log (str[str.length - 1])

let fullName = 'your name'
let isRaining = true
let planet = 20
let planet = 'Earth'

let celsius = 10
let fahrenheit = celsius x 1.8 + 32

console.log (fahrenheit)

/* checks value is true */

let bool == '1' == 1

console.log (bool)

/* checks value AND type is false */

let bool === '1' === 1

console.log (bool)

!false = true

let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log ('show the video')
}
else if (loggedIn === true ){
    console.log ('tell the user to upgrade their subscription')
}
else {
    console.log ('tell user to log into account')
}

/* Only runs if statement but if false only runs else statement */

/* else if, if there is another condition */

/*example:*/

let cash = 50
let price = 40

if (cash > price) {
    console.log ("you paid extra - here's ${cash-price} dollars change")
}
else if (cash === price) {
    console.log ("you paid the exact amount, have a nice day!")
}

else (cash < price) {
    console.log ("not enough money - you still owe ${price - cash} dollars")
}

/* use ${cash - price} or use let difference = cash - price or ${difference} */

/* != not equal */

/* && checks if the left and right side of the comparsion is ture */

let cash = 50
let cash = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen) {
    console.log ('print the receipt')
}

/* || checks if the left or right side of the comparison is ture */
  
/* Ternary Operators  ? '' : '' */

let hot = true

hot ? console.log ('weather is hot outside') : console.log ('weather is cold')

/* Loops repeat the same code over and over again */

// DRY= Don't Repeat Yourself 

let count = 1;

while (count <= 100) {
    console.log ('this ran')
    count = count + 1
}

for (let i = 0; i < 3, i = i + 1) {
    console.log (i);
}

/* i = 0 set 'i' to 0; i < 100; 'i' less than how many times we want to loop; i++ increment 'i' by 1; */

/* i+=2 will go up by an increment of 2 */

/** Write a for-loop that loops through 1 to 20
 * if divisible by 3, print "Frontend"
 * if divisible by 5, print "Simplified"
 * if divisible by 3 & 5, print "Frontend Simplified"
 * if not divisible by either 3 or 5, print number **/

for (let i = 1; i <= 20, i++) {
if (i % 3 === 0 && i % 5 === 0){
    console.log (`${i} -> Frontend Simplified`)
}

else if (i % 3 === 0){
    console.log (`${i} -> Frontend `)
}

else if (i % 5 === 0){
    console.log (`${i} -> Simplified`)
}
else {
    console.log(`${i} -> ${i}`)
}
}

/* Print out every character from the string: "Frontend Simplified" */

let str= "Frontend Simplified"

for (let i=0; i < str.length; ++i ) {
    console.log(str[i])
}

/* Function is a block of code designed to perform a particular task */

/* To not repeat yourself */

// Function definition
function welcomePersonToFES(name) {
    console.log ("Welcome to Frontend Simplified, ${name}")
}

// Call the function
welcomePersonToFES('name');
welcomePersonToFES('name');
welcomePersonToFES('name');


/* You can also do (firstName, lastName) as well */

/*  After a return statment it doesn't run anymore lines of code */

function sumOfTwoNumbers (num1, num2) {
    return 5 + 10
}

console.log(sumOfTwoNumbers(10,10));

/** Create a function that converts Celsius to Fahrenheit */

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32  
}

console.log(convertCelsiusToFahrenheit(0))

/* 2nd way to use s function */

const convertCelsiusToFahrenheit = () => {
     return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))

/* Array is a data structure that can hold multiple data vaules in one variable */

let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100

let arr = [20,30,40,50,100]

// frist element of array:
console.log(arr[0])

// last element of array:
console.log(arr[arr.length - 1])

arr.push(200)

console.log(arr);

let newArr = arr.filter ((element) => {
console.log(element)
return true;
})

console.log(newArr)

// [20,30,40]
let newArr = arr.filter (element => element < 50)

console.log(newArr)

/* Filter out all the 'FAIL' elements in an array */

let grades = ['A+','A','FAIL']

let goodGrades = grades.filter (element => element !== 'FAIL')

console.log(goodGrades) 

/* To loop */

for (let i=0; i < grades.length; ++i) {
    console.log (grades [i]);
}

/* Filter out all the 'FAIL' elements in an array without using the Array.filter method*/

for (let i = 0; i < grades.length; ++i) {
    if (grades [i] !== 'FAIL') {
        goodGrades.push (grades [i])
    }
}

console.log (goodGrades);


let arr = [1, 4, 9, 16]

let newArray= arr.map((element) => {
    console.log(element)
    return undefined;
})

console.log(newArray)

/* Turn each element in an array of dollars into cents */

let dollars = [1, 5, 10, 3];

let cents = dollars.map(element => {
    return element * 100
})

console.log (cents)

/* on one line without curly brackets*/

let cents = dollars.map(element => element * 100)

/* without using the map method */

for (let i=0; i < dollars.length; ++i) {
    cents.push (dollars[i] * 100);
}

console.log(cents); 

/* Objects are used to store multiple properties in one variable */

let userFirstName = 'First'
let userLastName = 'Last'
let userDiscordId = 'user#'
let userSubscriptionStatus = 'VIP'

let user = {
    username: '',''
    email: useratemail.com 
    subscriptionStatus: 'Vip'
    discordId: 'User#'
    lessonsCompleted: []
}

console.log(user.username);

console.log(user.subscriptionStatus)

function login(email, password) {
    console.log(email, password);
}

login('user@email.com', 'test123')

if (users[i].email === email) {
    if (users [i].email === email) {
        console.log(users[i])
        if (users[i].password === pasword) {
            console.log('log the user in - the details are correct')
        }
        else{
            console.log ('password is incorrect - try again')
        }
        return;
    }
}

/* Create a register function that accepts:
-username
-email
-password
-subcriptionStatus
-discordId
-lessonsCompleted

Inside your register function:
1. Create a user object
2. Push this user objecct onto the 'users' array
*/

function register {
    name,
    email,
    password,
    subscriptionStatus,
    discordId,
    lessonsCompleted
}
{ users.push(user);
} {
    let user= {
        username: name,
     console.log(user);
    }
    console.log(email, password);
}

register(
    "user",
    "user@email.com",
    "test123",
    "vip",
    "user#0001",
    "[0,1]"
)

console.log(users);

/*The DOM allows you to access and change the styling and content of elements on your website */

// First way of accessing an element
console.log(document.querySelector('h1'));

// Second way of accessing an element 
console.log(document.getElementById('title'));

// Change HTML
.innerHTML += 'Frontend Simplified'

// Change CSS
document.querySelector("title").style.color = 'red'
                               .style.fontsize = '28px'

* {
    Transition: all 300ms ease;
}

function changeTitleToRed () {
    document.querySelector("title").style.color= 'red'
}                               

function toggleDarkMode () {
    document.querySelector ('body').classList.toggle("dark-theme")
}