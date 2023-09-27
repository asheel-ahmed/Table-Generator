document.write("<h1>Your Table</h1>");
let userInput = +prompt("Enter a number to generate the table ( you can only write number )");
for (let i = 1; i <= 10; i++) {
    document.write(userInput + " X " + i + " = " + userInput*i + "<br>");
}