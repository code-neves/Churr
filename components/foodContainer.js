function createFoodContainer(items, containerClass, itemClass, itemClickHandler) {
    const container = document.createElement("div");
    container.className = containerClass;

    const ul = document.createElement("ul");

    items.forEach((item) => {
        const li = document.createElement("li");
        li.className = itemClass;
        li.textContent = item;
        li.addEventListener('click', () => {
            itemClickHandler(item); // Call the event handling function with the clicked item
        });
        ul.appendChild(li);
    });

    container.appendChild(ul);

    return container;
}

// Export the function for use in other scripts
export { createFoodContainer };
