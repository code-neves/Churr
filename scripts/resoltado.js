// Create a function to generate the result container HTML
function generateResultContainer() {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('resultContainer');
  
    // Create the People table
    const peopleTable = document.createElement('table');
    peopleTable.id = 'peopleList';
    const peopleTableBody = document.createElement('tbody');
  
    // Create rows for Adults and Children
    const adultsRow = document.createElement('tr');
    const adultsLabel = document.createElement('td');
    adultsLabel.textContent = 'Adults';
    const adultsCount = document.createElement('td');
    adultsCount.classList.add('T-A-R');
    const adultsQuant = document.createElement('span');
    adultsQuant.classList.add('men-quant');
    adultsQuant.id = 'adultoCounterLi';
    adultsQuant.textContent = '5';
    adultsCount.appendChild(adultsQuant);
    adultsRow.appendChild(adultsLabel);
    adultsRow.appendChild(adultsCount);
  
    const childrenRow = document.createElement('tr');
    const childrenLabel = document.createElement('td');
    childrenLabel.textContent = 'Children';
    const childrenCount = document.createElement('td');
    childrenCount.classList.add('T-A-R');
    const childrenQuant = document.createElement('span');
    childrenQuant.classList.add('children-quant');
    childrenQuant.id = 'criancaCounterLi';
    childrenQuant.textContent = '0';
    childrenCount.appendChild(childrenQuant);
    childrenRow.appendChild(childrenLabel);
    childrenRow.appendChild(childrenCount);
  
    // Append rows to the People table
    peopleTableBody.appendChild(adultsRow);
    peopleTableBody.appendChild(childrenRow);
  
    peopleTable.appendChild(peopleTableBody);
  
    // Create the Food table (similar structure as People table)
    const foodTable = document.createElement('table');
    foodTable.id = 'foodList';
    const foodTableBody = document.createElement('tbody');
  
    // Create rows for different types of meat (you can add more as needed)
    const meatTypes = [
      'Picanha',
      'Sausage',
      'Flank Steak',
      'Beef Ribs',
      'Chicken Heart',
      'Sirloin',
      'Maminha',
      'Chicken',
      'Pork Ribs',
      'Calabrese Sausage',
      'Cupim',
      'Pork Leg'
    ];
  
    meatTypes.forEach((meatType) => {
      const meatRow = document.createElement('tr');
      const meatLabel = document.createElement('td');
      meatLabel.textContent = meatType;
      const meatCount = document.createElement('td');
      meatCount.classList.add('T-A-R');
      const meatQuant = document.createElement('span');
      meatQuant.id = `${meatType.replace(/ /g, '').toLowerCase()}CounterLi`;
      meatQuant.textContent = '-';
      meatCount.appendChild(meatQuant);
      meatRow.appendChild(meatLabel);
      meatRow.appendChild(meatCount);
      foodTableBody.appendChild(meatRow);
    });
  
    // Append Food table to the resultContainer
    foodTable.appendChild(foodTableBody);
  
    // Create the Drinks table (similar structure as Food table)
    const drinksTable = document.createElement('table');
    drinksTable.id = 'drinksList';
    const drinksTableBody = document.createElement('tbody');
  
    // Create rows for different types of drinks (you can add more as needed)
    const drinkTypes = [
      'Beer - 600ml',
      'Soda - 2L',
      'Water - 1L',
      'Juice - 700ml',
      'Wine - 650ml'
    ];
  
    drinkTypes.forEach((drinkType) => {
      const drinkRow = document.createElement('tr');
      const drinkLabel = document.createElement('td');
      drinkLabel.textContent = drinkType;
      const drinkCount = document.createElement('td');
      drinkCount.classList.add('T-A-R');
      const drinkQuant = document.createElement('span');
      drinkQuant.id = `${drinkType.replace(/ /g, '').toLowerCase()}CounterLi`;
      drinkQuant.textContent = '-';
      drinkCount.appendChild(drinkQuant);
      drinkRow.appendChild(drinkLabel);
      drinkRow.appendChild(drinkCount);
      drinksTableBody.appendChild(drinkRow);
    });
  
    // Append Drinks table to the resultContainer
    drinksTable.appendChild(drinksTableBody);
  
    // Append People, Food, and Drinks tables to the resultContainer
    resultContainer.appendChild(peopleTable);
    resultContainer.appendChild(foodTable);
    resultContainer.appendChild(drinksTable);
  
    // Add a Total Weight section (similar structure as other tables)
    const totalWeightRow = document.createElement('tr');
    const totalWeightLabel = document.createElement('td');
    totalWeightLabel.innerHTML = '<h5>Total Weight:</h5>';
    const totalWeightCount = document.createElement('td');
    totalWeightCount.classList.add('T-A-R');
    const totalWeightOutput = document.createElement('span');
    totalWeightOutput.id = 'meatWeightOutput';
    totalWeightOutput.textContent = '0';
    totalWeightCount.appendChild(totalWeightOutput);
    totalWeightRow.appendChild(totalWeightLabel);
    totalWeightRow.appendChild(totalWeightCount);
    foodTableBody.appendChild(totalWeightRow);
  
    // Append the resultContainer to the main container with id "container"
    const mainContainer = document.getElementById('container');
    mainContainer.appendChild(resultContainer);
  }
  
  // Call the function to generate the result container
  generateResultContainer();
  