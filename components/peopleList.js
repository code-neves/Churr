// Wrap your code in a function
function createPeopleTable() {
    // Create a function to generate the people table
    const table = document.createElement("table");
    table.id = "peopleList";
  
    const tbody = document.createElement("tbody");
  
    // Create the People header row
    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("td");
    const headerH4 = document.createElement("h4");
    headerH4.textContent = "People";
    headerCell.appendChild(headerH4);
    headerRow.appendChild(headerCell);
    tbody.appendChild(headerRow);
  
    // Create the Adults row
    const adultsRow = document.createElement("tr");
    const adultsCell1 = document.createElement("td");
    adultsCell1.textContent = "Adults";
    const adultsCell2 = document.createElement("td");
    adultsCell2.className = "T-A-R";
    const adultsSpan = document.createElement("span");
    adultsSpan.className = "men-quant";
    adultsSpan.id = "adultoCounterLi";
    adultsSpan.textContent = "-";
    adultsCell2.appendChild(adultsSpan);
    adultsRow.appendChild(adultsCell1);
    adultsRow.appendChild(adultsCell2);
    tbody.appendChild(adultsRow);
  
    // Create the Children row
    const childrenRow = document.createElement("tr");
    const childrenCell1 = document.createElement("td");
    childrenCell1.textContent = "Children";
    const childrenCell2 = document.createElement("td");
    childrenCell2.className = "T-A-R";
    const childrenSpan1 = document.createElement("span");
    childrenSpan1.className = "children-quant";
    childrenSpan1.id = "criancaCounterLi";
    childrenSpan1.textContent = "-";
    const childrenSpan2 = document.createElement("span");
    childrenSpan2.textContent = "-";
    childrenCell2.appendChild(childrenSpan1);
    childrenCell2.appendChild(childrenSpan2);
    childrenRow.appendChild(childrenCell1);
    childrenRow.appendChild(childrenCell2);
    tbody.appendChild(childrenRow);
  
    table.appendChild(tbody);
  
    
      console.log(table)
    
  }
  
  // Call the function after the window has loaded
  window.onload = function() {
      // Get the container element where you want to insert the table
      const container = document.getElementById("resultContainer");
  
      // Create the People table and append it to the container
      createPeopleTable();
      container.appendChild(table);
  }
  