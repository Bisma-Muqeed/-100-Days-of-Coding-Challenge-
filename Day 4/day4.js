// 🚀 Day 4 Challenge: Start Coding! 🚀
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to
// each. If the programs are straightforward at this point, just add your name and the current date at the
// top of each program file. Then, write one sentence describing what the program does.
// Bisma Muqeed, 20-Aug-2024
// This program prints a personal message.
var myName = "Bisma Muqeed";
console.log("Hello ".concat(myName, ", would you like to learn some TypeScript today?"));
// Question 11: Names: Store the names of a few of your friends in an array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
var friendsName = ["Bisma", "Ayesha", "Taiyaba", "Tasbiyah"];
for (var i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
// print a message to them. The message should be the same for each person, but personalized with their
// name
var friendsNames = ["Bisma", "Haziq", "Hayam"];
for (var _i = 0, friendsNames_1 = friendsNames; _i < friendsNames_1.length; _i++) {
    var name_1 = friendsNames_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some TypeScript today?"));
}
