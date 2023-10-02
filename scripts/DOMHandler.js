import { createFoodContainer } from '../components/foodContainer.js';
import { createDrinksContainer } from '../components/drinksContainer.js';
import { createResultContainer } from '../components/resultContainer.js';

const container = document.getElementById("container");
const resultContainer = createResultContainer();
container.appendChild(resultContainer);

var foodItems = [
    "Picanha", "Sausage", "Flank Steak", "Beef Ribs", "Chicken Heart",
    "Sirloin", "Maminha", "Chicken", "Pork Ribs", "Calabrese Sausage", "Cupim", "Pork Leg"
];

var drinkItems = ["Beer", "Soda", "Water", "Juice", "Wine"];



const foodContainer = createFoodContainer(foodItems, "foodContainer", "foodItem", updateSelectedMeats);
const drinksContainer = createDrinksContainer(drinkItems, "drinksContainer", "drinkItem", updateSelectedDrinks);

// Assuming you have an element with class "calcInnerWrap" in your HTML to append this structure
const calcInnerWrap = document.querySelector(".calcInnerWrap");
calcInnerWrap.appendChild(foodContainer);
calcInnerWrap.appendChild(drinksContainer);

console.log('DOMHandler.js loaded');

export  { foodItems, drinkItems};