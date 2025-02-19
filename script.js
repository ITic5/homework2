let products = ["bread", "milk", "yogurt"];

products.push("newspaper");
products.splice(0,1);
console.log(products);

let cars = ["Mercedes", "BMW", "Range Rover", "Audi", "Porsche"];
cars.sort();
console.log(cars);

let personalID = {
    firstName: "Stefan",
    lastName: "Itic",
    dateOfBirth: "15/06/1996",
    hobbies: ["Fishing", "Gaming", "Programming"]
}
personalID.city = "Zajecar";
console.log(personalID.hobbies[2]);

let sentence = personalID.firstName + " has gone " + personalID.hobbies[0].toLowerCase() + ".";
console.log(sentence);

//Homework
let shop = {
    name: "Lidl",
    products: ["Peanut butter", "Ice cream", "Milk", "Raspberry", "Choco donut"],
    openingHours: 9,
    closedHours: 21
}
console.log(shop);

//Exercises
let names = [];
names.push("Marija", "Petar", "Jovan");
console.log(names);

let pcBuild = ["Monitor", "Keyboard", "Mouse", "Headphones", "Computer"];
pcBuild.splice(0, pcBuild.length);
console.log(pcBuild);

let books = ["Game of Thrones", "The Da Vinci Code", "Don Quixote"];
books.unshift("The Hobbit");
console.log(books);