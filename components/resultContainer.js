// Create an array of food items
const foodItems = [
  "Picanha", "Sausage", "Flank Steak", "Beef Ribs", "Chicken Heart",
  "Sirloin", "Maminha", "Chicken", "Pork Ribs", "Calabrese Sausage", "Cupim", "Pork Leg"
];

// Create an array of drink items
const drinkItems = [
  "Beer - 600ml", "Soda - 2L", "Water - 1L", "Juice - 700ml", "Wine - 650ml"
];

// Create a function that creates a table row with a label and a span
function createTableRow(label, id, spanClass) {
  const row = document.createElement("tr");
  const labelCell = document.createElement("td");
  const counterCell = document.createElement("td");
  const counterSpan = document.createElement("span");
  
  labelCell.textContent = label;

  counterSpan.id = id; 
  counterSpan.textContent = "-";
  counterSpan.className = spanClass;
  counterCell.className = "T-A-R";
  counterCell.appendChild(counterSpan);
  
  row.appendChild(labelCell);
  row.appendChild(counterCell);
  
  return row;
}

// Create a function that creates a table with a label and an array of items
function createTable(label, items) {
  const table = document.createElement("table");
  const labelRow = document.createElement("tr");
  const labelCell = document.createElement("td");
  const labelH4 = document.createElement("h4");

  labelH4.textContent = label;
  labelCell.appendChild(labelH4);
  labelRow.appendChild(labelCell);
  table.appendChild(labelRow);

  // Loop through the items and create a table row for each one
  for (const item of items) {
    const id = item.split(' - ')[0].toLowerCase() + "CounterLi";
    const className = id.replace("CounterLi", "");
    const itemRow = createTableRow(item, id, className);
    table.appendChild(itemRow);
  }

  // Add the total weight or quantity row depending on the label
  const totalLabel = label === 'Meat' ? 'Total Weight:' : 'Drinks quantity:';
  const totalWeightRow = createTableRow(`<h5>${totalLabel}</h5>`, label.toLowerCase() + "WeightOutput", "");
  table.appendChild(totalWeightRow);

  return table;
}

// Create a function that creates the result container with the tables
function createResultContainer() {
  const resultContainer = document.createElement("div");
  resultContainer.className = "resultContainer";

  const peopleList = document.createElement("table");
  peopleList.id = "peopleList";

  const peopleHeaderRow = document.createElement("tr");
  const peopleHeaderCell = document.createElement("td");
  const peopleHeaderH4 = document.createElement("h4");

  peopleHeaderH4.textContent = "People";
  peopleHeaderCell.appendChild(peopleHeaderH4);
  peopleHeaderRow.appendChild(peopleHeaderCell);
  peopleList.appendChild(peopleHeaderRow);

  const adultsRow = createTableRow("Adults", "adultoCounterLi", "men-quant");
  const childrenRow = createTableRow("Children", "criancaCounterLi", "children-quant");

  peopleList.appendChild(adultsRow);
  peopleList.appendChild(childrenRow);

  resultContainer.appendChild(peopleList);
  resultContainer.appendChild(createTable("Meat", foodItems));
  resultContainer.appendChild(createTable("Drinks", drinkItems));

  return resultContainer;
}

// Get the element where you want to append the result container
const container = document.getElementById("container");

// Create the result container and append it to the element
const resultContainer = createResultContainer();
container.appendChild(resultContainer);
