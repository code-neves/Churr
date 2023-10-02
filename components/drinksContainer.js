function createDrinksContainer(items, containerClassName, itemClassName, itemCallback) {
    const drinksContainer = document.createElement("div");
    drinksContainer.className = containerClassName;

    const drinksList = document.createElement("ul");
    drinksList.className = "not-selectable";

    for (const item of items) {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        listItem.className = itemClassName;
        drinksList.appendChild(listItem);
    }

    drinksContainer.appendChild(drinksList);

    if (itemCallback) {
        const listItems = drinksList.querySelectorAll(`.${itemClassName}`);
        listItems.forEach((listItem) => {
            listItem.addEventListener("click", () => {
                itemCallback(listItem);
            });
        });
    }

    return drinksContainer;
}

// Export the function for use in other scripts
export { createDrinksContainer };
