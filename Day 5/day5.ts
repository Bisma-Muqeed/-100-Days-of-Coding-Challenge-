// 🚀 Day 5 Challenge: Start Coding! 🚀

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples.Use your list to print a series of statements about these 
// items, such as “I would like to own a Honda motorcycle.”

let transports: string[] = ["Motorcycle", "Corolla car", "Bicycle"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let invites : string[] = ["Unzila" , "Maliha" , "shaista"]
invites.forEach(invites => {
    console.log(`Dear ${invites} would you like to join me for dinner?`)
})

// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send
// out a new set of invitations with a replacement guest.

let notAttend = "Tasbiyah";
console.log(`${notAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Hamza";
invites[invites.indexOf(notAttend)] = newGuest;

// New invitations
invites.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
