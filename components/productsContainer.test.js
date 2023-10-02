function createCategoryContainer(items, containerClassName, itemClassName, itemCallback) {
    const categoryContainer = document.createElement("div");
    categoryContainer.className = containerClassName;

    const categoryList = document.createElement("ul");
    categoryList.className = "not-selectable";

    for (const item of items) {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        listItem.className = itemClassName; // Add the class name to the list item
        categoryList.appendChild(listItem);
    }

    categoryContainer.appendChild(categoryList);

    if (itemCallback) {
        // If itemCallback is provided, add event listeners to the list items
        const listItems = categoryList.querySelectorAll(`.${itemClassName}`);
        listItems.forEach((listItem) => {
            listItem.addEventListener("click", () => {
                itemCallback(listItem);
            });
        });
    }

    return categoryContainer;
}

const foodItems = [
    "Picanha", "Sausage", "Flank Steak", "Beef Ribs", "Chicken Heart",
    "Sirloin", "Maminha", "Chicken", "Pork Ribs", "Calabrese Sausage", "Cupim", "Pork Leg"
];

const drinkItems = ["Beer", "Soda", "Water", "Juice", "Wine"];

function updateSelectedMeats(itemText) {
    console.log('Selected Meats:', itemText);
    // Implement your logic here to handle selected meats
}

function updateSelectedDrinks(itemText) {
    console.log('Selected Drinks:', itemText);
    // Implement your logic here to handle selected drinks
}

const foodContainer = createCategoryContainer(foodItems, "foodContainer", "foodItem", updateSelectedMeats);
const drinksContainer = createCategoryContainer(drinkItems, "drinksContainer", "drinkItem", updateSelectedDrinks);

// Assuming you have an element with class "calcInnerWrap" in your HTML to append this structure
const calcInnerWrap = document.querySelector(".calcInnerWrap");
calcInnerWrap.appendChild(foodContainer);
calcInnerWrap.appendChild(drinksContainer);
