var inventory = [];
var clothes = {
    name: "clothes",
    model: 2019,
    cost: 2000,
    quantity: 1000
};
var car = {
    name: "Car",
    model: 2020,
    cost: 20000,
    quantity: 100
};
var bike = {
    name: "Car",
    model: 2020,
    cost: 20000,
    quantity: 200
};
inventory = [clothes, car, bike];
console.log("Accessing the quantity of the array of each element ");
console.log("The third quantity of inventory array is: ", inventory[0].quantity);
console.log("The third quantity of inventory array is: ", inventory[1].quantity);
console.log("The third quantity of inventory array is: ", inventory[2].quantity);
var AC = {
    name: "HaierAC",
    model: 2022,
    cost: 50000,
    quantity: 300
};
inventory.push(AC);
console.log("The third quantity of inventory array is: ", inventory[3].quantity);
