// 🚀 Day 6 Challenge: Start Coding! 🚀

// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guest: string[] = ["Bisma Muqeed", "Manahil", "Areeba"];
console.log("GOOD News! I found a bigger dinner table!");

// Adding more guests
guest.unshift("Tasbiyah");
guest.splice(guest.length / 2, 0, "Taiyaba");
guest.push("Raveena");

guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and 
// you can only invite two guests.
console.log("Unfortunately, I can only invite three people for dinner.");

while (guest.length > 2) {
    let removedInvites = guest.pop();
    console.log(`Sorry, ${removedInvites}, I can't invite you to dinner.`);}

guest.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guest.splice(0, guest.length);
console.log(guest); // Shows an empty list

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let place: string[] = ["Pakistan", "USA", "china", "Switzerland", "India"];

console.log("Original order:", place);

console.log("Alphabetical order:", [...place].sort());

console.log("Original order:", place);

console.log("Reverse alphabetical order:", [...place].sort().reverse());

console.log("Original order:", place);

place.reverse();
console.log("Reversed order:", place);

place.reverse();
console.log("Original order:", place);

place.sort();
console.log("Alphabetical order:", place);

place.reverse();
console.log("Reverse alphabetical order:", place);
