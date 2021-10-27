///alert chapter///

// Question no: 1
// alert("Welcome!\n thanks for visiting our website .");


// Question no :2   
// alert("Error! Please enter a  valid password");

// Question no :3    
// alert("Welcome to Js Land \n Happy Coding!");

// Question no :4    
// alert("Welcome to Js Land.. ");
// alert("Happy Coding!");


// Question no :5    
// console.log("Hello,, I can run js through  my web browser's console");



///VARIABLES FOR STRINGS ///


/*Question :1


var userName = "User Name";
Question :2
var myName = "Uzma Nazim";  


Question :3

var massege = "Hello World";
alert(massege) */

// Question :4

// var name = "john Deo";
// var age = "15 Years old";
// var work = "certifiecate Mobile  Application Development";
// alert(name);
// alert(age);
// alert(work);



// Question :5
// var pizza = "PIZZA \nPIZZ \nPIZ\nPI \nP";
// alert(pizza)




// Question :6
// var email = "uuzzi0216@gmail.com";
// alert("My email address is "+ email);



// Question :7
// var book = "“A smarter way to  learn JavaScript.”";
// alert ("I am trying to learn from the Book " + book);

// Question :8
// document.write("Yah! I can write HTML content through JavaScript")


// Question :9
// var string = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(string);




////VARIABLES FOR NUMBERS/////


// Question :1

// var age = 17;
// alert("I am "+age+ " years old");

// Question :2
// var name = prompt("Enter name");
// var a = 1;
// alert( name + " have visited this site " + +prompt("Enter visite number") +  " times");


// Question :3

// var birthdayyear =2004;
// document.write(" My birthday Year is " + birthdayyear);


// Question :4

// var name = " <b>john Doe</b>";
// var productName = "<b>T-shirt</b>";
// var quantity = "<b>5</b>";

// document.write(name + " ordered " + " " + quantity + " "  + productName + " (S) on XYZ clothing store");



///VARIABLE NAMES: LEGAL & ILLEGAL////


// Question :1
// var a = 1, b = 2, c = 3;


// Question :2

//Illegal

// var 12firstnme
// var ?firstnme
// var first tnme
// var first-tnma
// var firs@tnma


//legal

// var firstname12 
// var first_name 
// var firstTnma 
// var $firsttnma 
// var firsttnma 


// Question :3

// var a = " A heading stating “Rules for naming JS variables”";
// var b = " Variable names can only contain $, _ , Camelcase ";
// var c = " Variables must begin with a $ ,_ , alphbats ";
// var d = " Variable names are case sensitve";
// var e = " Variable names should not be JS keyword";
// document.write(a+"<br/>" + b +"<br/>"+ c +"<br/>"+ d +"<br/>"+ e);


///MATH EXPRESSIONS///



// Question :1



// var num1 = 32;
// var num2 = 10;
// var add = num1 + num2;
// alert("sum of " + num1 + " and " + num2 + " is " + add);


// Question :2


// var num1 = 32;
// var num2 = 10;
// var sub = num1 - num2;
// alert("Subtract of " + num1 + " and " + num2 + " is " + sub);


// var num1 = 12;
// var num2 = 2;
// var multi = num1 * num2;
// alert("Multiply of " + num1 + " and " + num2 + " is " + multi);



// var num1 = 52;
// var num2 = 2;
// var divide = num1 / num2;
// alert("Divide of " + num1 + " by " + num2 + " is " + divide);




// var num1 = 16;
// var num2 = 4;
// var modulus = num1 / num2;
// alert("Remainder of " + num1 + " by " + num2 + " is " + modulus);



// Question :3

// var number = 26;
// var number2 = number + 1;
// var number3 = number2 + 4;
// var number4 = number3 - 1
// var divide = number4/3;

// document.write("value after variable deceleration is  undefined<br/> ");
// document.write("initial value is: " + number + "<br>");
// document.write("Value after increment is:" + number2 + "<br/>");
// document.write("Value after addition is: " + number3 + "<br>");
// document.write("Value after decrement is: " + number4 + "<br>");
// document.write("The remainder is: "+ divide);


// Question :4

// var ticketPrize = 600;
// var totalTicket = 600*5;
// document.write("Total cost to buy 5 tickets to a movie is "+ totalTicket +"PKR");



// Question :5

// document.write("<h1>Table</h1>");

// var num = +prompt("Enter a number");

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " &nbsp X &nbsp" + i + " &nbsp =  &nbsp " + num * i + "<br>");
// }


// Question :6


// var num = +prompt("Enter number");
// var celsius  = (num-32)*5/9;
// document.write(num +  "<sup>0</sup>F" + "&nbsp is &nbsp " + celsius  + "<sup>0</sup>C ");


// var num = +prompt("Enter a number");
// var fahrenheit = (num * 9 / 5) + 32;
// document.write(num + "<sup>0</sup>C" + "&nbsp is &nbsp " + fahrenheit + "<sup>0</sup>F ")


// Question :7

// document.write("<h1>Shopping Cart</h1>")

// var prizeItem1 = +prompt("Enter Your Prize of item1");
// var quantity1 = +prompt("Order Quantity of item 1");
// var prizeItem2 = +prompt("Enter Your Prize of item2");
// var quantity2 = +prompt("Order Quantity of item 2");
// var charges = 100;
// var totalCost = (prizeItem1 * quantity1) + (prizeItem2 * quantity2) + charges;
// document.write("Prize of item one is: &nbsp  " + prizeItem1 + "<br>Quantity of item one is: &nbsp " + quantity1 + "<br>Prize of item two is :&nbsp" + prizeItem2 + "<br>Quantity of item two is  :&nbsp " + quantity2 + "<br>Shipping charges  :&nbsp" + charges);
// document.write("<br> <br>Total cost of your order is  " + totalCost);


// Question :8


// document.write("<h1>Marks Sheet</h1>")
// var totalMarks = 500
// var obtainMarks = +prompt("Enter Obtain marks");
// var percentage = obtainMarks / totalMarks * 100;
// document.write("Total Marks: is " + totalMarks +"<br>Obtain Marks is: " + obtainMarks + "<br>percentage: " + percentage + " % ");





// Question :9


// document.write("<h1>Currency in PKR</h1>");

// var usDollar = 25;
// var saudiRiyal = 28;
// var totalCurrency = (10 * 104.80) + (25 * 28);
// document.write("Total Currency in PKR: " + totalCurrency);



// Question :10


// var num = 2;
// var arthematic = (num+5*10)/2;
// document.write(arthematic)

// Question :11


// document.write("<h1>Age Calculator</h1>");
// var currentYear = +prompt("Enter Current Year");
// var birthdayYear = +prompt("Enter Birthday Year");
// var yourage = currentYear-birthdayYear;
// document.write("Your Age is :" +yourage);


// Question :12
// document.write("<h1>The Geometrizer</h1>")

// var radius = 20;
// var π = 3.142;
// var circle = 2 * π * radius;
// var area = π * radius ** 2;
// document.write("Radius of a circle: " + radius + "<br>The circumference is: " + circle);
// document.write("<br>The area is: " + area);



// Question :13

// document.write("<h1>The Lifetime Supply Calculator</h1>")
// var fvrtSnack = "kurkury";
// var age = 17;
// var maxAge = 60;
// var oneYear =365;
// var perDay = 2;
// var totalSnack = (maxAge - age) *oneYear*perDay;
// document.write("Favourite Snack : " + fvrtSnack + "<br>Current age: " + age +"<br>Esimated Maximum Age :" + maxAge+ "<br>Amount of snacks per day: " +perDay)
// document.write("<br> You will need "+ totalSnack+ " Kurkury to last you until the ripe old age of "+ maxAge);



///MATH EXPRESSIONS ///

// Question :1


// document.write("Result <br> The value of a is:  15  <br>  ----------------------------- <br>");
// var a = 15
// var b = ++a + a++ + --a + a--;
// document.write("<p>The  value of ++a is:  16 <br>  Now the value of a is :  16</p>" + " <p>The value of a++ is : 16 <br> Now the value of a is :  17 </p>" + "<p> the value of --a a is : 16 <br> Now the value of a is :  16</p>" + "<p>The value of a-- is : 16 <br> Now the value of a is : 15</p>" );



// Question :2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//           //   3  - 4 + 5 + 5

// document.write("a is :  4" + "<br>b is: 5 " +  "<br>result is " + result);


// Question :3


// var name = prompt("Enter your name ");
// alert("hello " + name)

// Question :5


// var num = prompt("Enter a number");
// if(num===""){
//     for (var i = 1; i<= 10; i++) {
//         document.write(5 + " &nbsp X &nbsp" + i + " &nbsp =  &nbsp " + 5 * i + "<br>");
//     }    
// }
// else {
//     for (var i = 1; i <= 10; i++) {
//         document.write(num + " &nbsp X &nbsp" + i + " &nbsp =  &nbsp " + num * i + "<br>");
//     }

// }


// Question :6
// var subjectFirst = prompt("Enter firdt subject name");
// var subjectSecond = prompt("Enter Second subject name");
// var subjectThird = prompt("Enter third  subject name");
// var totalMarks = 100;
// var obtainedFirst = +prompt("Enter optained marks of First Subject");
// var obtainedSecond = +prompt("Enter optained marks of Second Subject");
// var obtainedThird = +prompt("Enter optained marks of Third Subject");
// var firstPercent =obtainedFirst/totalMarks*100;
// var secondPercent =obtainedSecond/totalMarks*100;
// var thirdPercent =obtainedThird/totalMarks*100;
// var allTotal = 300;
// var allObtain = obtainedFirst+obtainedSecond+obtainedThird;
// var allPercent = allObtain/allTotal*100
// document.write("<table border=1px> <tr><th>Subject</th><th>Total Marks</th><th>Obtained marks</th><th>Percentage</th></tr>")
// document.write("<tr><td>" + subjectFirst + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + obtainedFirst + "</td>"+"<td>" + firstPercent + "%</td>  </tr>" )
// document.write("<tr><td>" + subjectSecond + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + obtainedSecond+ "</td>"+"<td>" + secondPercent + "%</td>  </tr>" )
// document.write("<tr><td>" + subjectThird + "</td>" + "<td>" + totalMarks + "</td>" + "<td>" + obtainedThird + "</td>"+"<td>" + thirdPercent + "%</td>  </tr>")
// document.write("<tr><td> All Subject </td>" + "<td>" + allTotal + "</td>" + "<td>" + allObtain + "</td>"+"<td>" + allPercent + "%</td>  </tr>"+"</table>" )




///USER INPUT & CONDITIONAL STATEMENT//


// Question :1

// var city = prompt("Enter the city");
// if(city==="karachi"){
//     document.write("Welcome to city of lights");

// } 
// else{
//     document.write("Welcome " + city)
// }



// Question :2

// var gender =prompt("Enter your Gender");

// if(gender==="male"){
//     document.write("Good Morning Sir");
// }
// else if(gender==="female"){
//     document.write("Good Morning Ma'am");
// }
// else{
//     document.write("You are alien");
// }



// Question :3


// var color = prompt("Enter a color");

// if(color==="red"){
//     document.write("Must stop")
// }
// else if(color==="yellow"){
//     document.write("Ready to move")
// }
// else if(color==="green"){
//     document.write("Move Now")
// }
// else{
//     document.write("Error!!")
// }




// Question :4

// var fuel = +prompt("Enter your remaining fuel");
// if(fuel<0.25){

//     document.write("“Please refill the fuel in your car”")
// }
// else{
//     document.write("fuel is ok")
// }


// Question :5
//part a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//alert masege  dsplayed

///part b
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//alert masege did not dsplay


//part c// Condition 1

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
//alert masege did not dsplay


//part c// Condition 2

// if(c === 13){
//     alert("condition 2 is true");
//     }
// alert masege  dsplayed



//part c// Condition 3

// if (++c < 14){
//     alert("condition 3 is true");
//     }

// alert masege did not  dsplay




//part c// Condition 4

// if(c === 14){
//     alert("condition 4 is true");
//     }


// alert masege  dsplayed



//part d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// alert masege  dsplayed




//part e
// if (true) {
//     alert("True");
// }

// alert masege  dsplayed

// if (false) {
//     alert("False");
// }

// alert masege did not dsplayed

//part f

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// alert masege  dsplayed



// Question :6


// document.write("<h1>Marks Sheet</h1>")


// var obtainMark = +prompt("Enter obtain marks");
// var totalMarks = 300;
// var percentage = obtainMark / totalMarks * 100;
// document.write("Total Marks is: " + totalMarks + "<br>Marks obtained: " + obtainMark + "<br>Percentage: " + percentage + "%");


// if (percentage >= 80 || percentage === 100) {

//     document.write("<br>Grade : &nbsp A-one" + "<br>" + "Remarks: Excellent")
// }

// else if (percentage >= 70) {

//     document.write("<br>Grade : &nbsp A" + "<br>" + "Remarks: Good")
// }

// else if (percentage >= 60) {

//     document.write("<br>Grade : &nbsp B" + "<br>" + "Remarks: You need to improve")
// }

// else if (percentage <= 60) {

//     document.write("<br>Grade : &nbsp Fail" + "<br>" + "Remarks: Sorry")
// }
// else {
//     document.write("<br>invalid")
// }


//Question no:7


// var randomeNumber  = Math.floor(Math.random()*10);
// console.log(randomeNumber);
// var guess = +prompt("Enter a guess number Between 0 and 10");
// if(guess===randomeNumber){
//     alert("Bingo! Correct answer");

// }
// else if(guess===+1){
//     alert("“Close enough to the correct answer”");

// }

// else{
//     alert("Error!!!")
// }



//Question no:8


// var number = +prompt("Enter a number");

// if(number%3===0){
//     alert("it's divisible by 3");
// }
// else if(number%3!==0){
//     alert("it's not divisible by 3");

// }
// else{
//     alert("Error!!")
// }


//Question no:9


// var num = +prompt("Enter a number");

// if(num%2==-0){
//     alert("It's even Number");
// }

// else{
//     alert("Its odd Number");
// }



//Question no:10


// var temperature = +prompt("Enter a Temperature");

// if(temperature>40){
//     document.write("“It is too hot outside.”")
// }

// else if(temperature>30){
//     document.write("“The Weather today is Normal.”")
// }

// else if(temperature>20){
//     document.write(" “Today’s Weather is cool.”")
// }

// else if(temperature>10){
//     document.write("  “OMG! Today’s weather is so Cool.”")


// }

// else{
//     document.write("Now You can't live here")
// }



//Question no:11

// var num1 = +prompt("Enter number one");
// var opr = prompt("Enter Opertator");
// var num2 = +prompt("Enter number two");

// if (opr == "-") {
//     alert("Result "+num1 - num2)
// }
// else if (opr == "+") {
//     alert( "Result "+num1 + num2)
// }
// else if (opr == "*") {
//     alert( "Result "+num1 * num2)
// }
// else if (opr == "/") {
//     alert( "Result "+num1 / num2)
// }
// else if (opr == "%") {
//     alert( "Result "+num1 % num2)
// }

// else{
//     alert("Entered operator is not valid")
// }



//last Chapter:)
//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 


//Question :1-


// var str = prompt("Enter a name")

// if(str==str.toUpperCase()){
//     alert("Uppercase")
// }

// else if(str==str.toLowerCase()){
//     alert("LowerCase")
// }

// else{
//     alert("Something went wrong!")
// }

//Question :2


// var num1 = 30
// var num2 = 15

// if (num1 > num2 ) {
//     alert("The Larger of  " + num1 + " and " + num2 + " is " + num1)
// }
// else  {
//     alert("The value of " + num1 + " and " + num2 + " are equal")
// }



//Question :3

// var number = +prompt("Enter a number");

// if(number>0){
//     alert(number + " is Positive nmber")
// }

// else if(number<0){
//     alert(number + " is Negative nmber")
// }

// else if(number==0){
//     alert(number + " is Zero")
// }

// else{
//     alert("Not a Number")
// }

//Question :4

// var vowel = " a"

// var string = prompt("Enter a string");
// if (string.startsWith("a") || string.startsWith("e") || string.startsWith("i") || string.startsWith("o") || string.startsWith("u") || string.startsWith("A") || string.startsWith("E") || string.startsWith("I") || string.startsWith("O") || string.startsWith("U")) {

//     alert("True")
// }
// else {
//     alert("False")
// }

//Question :5


// var password = "kubatao"
// var userPass = prompt("Enter your Password");

// if(userPass===""){
//     alert(" “ Please enter your password”")
// }
// else if(userPass===password){
//     alert("“Correct! The password you  entered matches the original password”.")
// }
// else{
//     alert("“Incorrect password”")
// }

//Question :6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     document.write(greeting)
// }
// else {
//     greeting = "Good evening";
//     document.write(greeting)
// }



//Question :7
// var time = prompt("Enter Time");



// if((time>=0000) && time<1200){
//     alert("Good Morning!")
// }
// else if(time>=1200 && time<1700){
//     alert("Good afternoon!")
// }
// else if(time>=1700 && time<2100){
//     alert("Good evening!")
// }
// else if(time>=2100 && time<2359){
//     alert("Good night!")
// }
// else{
//     alert("Error!")
// }

