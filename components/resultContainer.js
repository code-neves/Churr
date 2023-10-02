



function createTableRow(label, id, spanClass) {
    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    labelCell.textContent = label;
    const counterCell = document.createElement("td");
    const counterSpan = document.createElement("span");

    counterSpan.id = id; // Set the ID
    counterSpan.textContent = "-";
    counterCell.className = "T-A-R";
    counterCell.appendChild(counterSpan);
    row.appendChild(labelCell);
    row.appendChild(counterCell);
    return row;
}

function createFoodTable(label, foodItems) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const labelRow = document.createElement("tr");
  const labelCell = document.createElement("td");
  const labelH4 = document.createElement("h4");
  labelH4.textContent = label;
  labelCell.appendChild(labelH4);
  labelRow.appendChild(labelCell);

  tbody.appendChild(labelRow);

  for (const foodItem of foodItems) {
    const id = foodItem.replace(/\s+/g, '').toLowerCase() + "CounterLi"; // Modify the ID
    const foodRow = createTableRow(foodItem, id, foodItem.replace(/\s+/g, '-').toLowerCase());
    tbody.appendChild(foodRow);
  }

  const totalWeightRow = createTableRow("<h5>Total Weight:</h5>", label.toLowerCase() + "WeightOutput", "");
  const h5 = document.createElement("h5");
  h5.textContent = "Total Weight:";
  totalWeightRow.children[0].innerHTML = ""; // Clear the content
  totalWeightRow.children[0].appendChild(h5);
  tbody.appendChild(totalWeightRow);

  table.appendChild(tbody);
  return table;
}

function createDrinksTable(label, drinkItems) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const labelRow = document.createElement("tr");
  const labelCell = document.createElement("td");
  const labelH4 = document.createElement("h4");
  labelH4.textContent = label;
  labelCell.appendChild(labelH4);
  labelRow.appendChild(labelCell);

  tbody.appendChild(labelRow);

  for (const drinkItem of drinkItems) {
    const id = drinkItem.split(' - ')[0].toLowerCase() + "CounterLi";
    const className = id.replace("CounterLi", ""); 
    const drinkRow = createTableRow(drinkItem, id, className);
    tbody.appendChild(drinkRow);
  }

  const drinksQuantityRow = createTableRow("<h5>Drinks quantity:</h5>", "drinkWeightOutput", "");
  const h5 = document.createElement("h5");
  h5.textContent = "Drinks quantity:";
  drinksQuantityRow.children[0].innerHTML = ""; 
  drinksQuantityRow.children[0].appendChild(h5);
  tbody.appendChild(drinksQuantityRow);

  table.appendChild(tbody);
  return table;
}



 function createResultContainer() {
  var resultContainer = document.createElement("div");
  resultContainer.className = "resultContainer";

  const peopleList = document.createElement("ul");
  peopleList.id = "peopleList";

  const peopleTable = document.createElement("table");
  const peopleTbody = document.createElement("tbody");

  const peopleHeaderRow = document.createElement("tr");
  const peopleHeaderCell = document.createElement("td");
  const peopleHeaderH4 = document.createElement("h4");
  peopleHeaderH4.textContent = "People";
  peopleHeaderCell.appendChild(peopleHeaderH4);
  peopleHeaderRow.appendChild(peopleHeaderCell);
  peopleTbody.appendChild(peopleHeaderRow);

  const adultsRow = createTableRow("Adults", "adultoCounterLi", "men-quant");
  const childrenRow = createTableRow("Children", "criancaCounterLi", "children-quant");

  peopleTbody.appendChild(adultsRow);
  peopleTbody.appendChild(childrenRow);

  peopleTable.appendChild(peopleTbody);
  peopleList.appendChild(peopleTable);

  const meatTable = createFoodTable("Meat", [
      "Picanha", "Sausage", "Flank Steak", "Beef Ribs", "Chicken Heart",
      "Sirloin", "Maminha", "Chicken", "Pork Ribs", "Calabrese Sausage", "Cupim", "Pork Leg"
  ]);

  const drinksTable = createDrinksTable("Drinks", [
      "Beer - 600ml", "Soda - 2L", "Water - 1L", "Juice - 700ml", "Wine - 650ml"
  ]);

  resultContainer.appendChild(peopleList);
  resultContainer.appendChild(meatTable);
  resultContainer.appendChild(drinksTable);

  return resultContainer;
}


export { createResultContainer, createFoodTable, createDrinksTable };