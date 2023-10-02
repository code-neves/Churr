const selectedMeats = [];
let selectedDrinks = [];

const foodItems = document.querySelectorAll('.foodContainer li');
const drinkItems = document.querySelectorAll('.drinksContainer li');

const meatWeights = {
  Picanha: 400,
  Sausage: 200,
  FlankSteak: 300,
  BeefRibs: 350,
  ChickenHeart: 150,
  Sirloin: 250,
  Maminha: 300,
  Chicken: 200,
  PorkRibs: 300,
  CalabreseSausage: 200,
  Cupim: 350,
  PorkLeg: 350,
};

const drinkWeights = {
  Beer: 500, // 500ml per serving
  Soda: 300, // 300ml per serving
  Water: 200, // 200ml per serving
  Juice: 250, // 250ml per serving
  Wine: 150, // 150ml per serving
};

const drinkAmounts = {
  Beer: 3, // 3 serving per adult
  Soda: 0.2, // 1 serving per 3 adults
  Water: 1, // 1 serving per adult
  Juice: 1, // 1 serving per adult
  Wine: 1, // 1 serving per adult
};

function updateSelectedMeats(item) {
  const meatType = item.textContent.replace(/\s/g, ''); // Remove spaces
  item.classList.toggle('checked');
  console.log('Selected Meats:', selectedMeats);

  if (item.classList.contains('checked')) {
    selectedMeats.push(meatType);
  } else {
    const index = selectedMeats.indexOf(meatType);
    if (index !== -1) {
      selectedMeats.splice(index, 1);
    }
  }

  // Recalculate the individual meat weights and the total meat weight
  updateWeights('meat');
}

function updateSelectedDrinks(item) {
  const drinkType = item.textContent.replace(/\s/g, ''); // Remove spaces
  item.classList.toggle('checked');
  console.log('Selected Drinks:', selectedDrinks);

  if (item.classList.contains('checked')) {
    if (drinkType === 'Beer' || drinkType === 'Wine') {
      if (adultCount > 0) {
        selectedDrinks.push(drinkType);
      } else {
        // Handle the case where there are no adults
        // You can show an alert or any other appropriate action
      }
    } else {
      selectedDrinks.push(drinkType);
    }
  } else {
    const index = selectedDrinks.indexOf(drinkType);
    if (index !== -1) {
      selectedDrinks.splice(index, 1);
    }
  }

  // Recalculate the individual drink weights and the total drink weight
  updateWeights('drink');
}

function updateDrinkAmount() {
  const sodaServings = Math.floor(adultCount / drinkAmounts.Soda);
  const beerServings = adultCount;
  const juiceServings = adultCount + childCount;

  // Update individual drink weight spans
  const sodaWeightSpan = document.getElementById('sodaCounterLi');
  const beerWeightSpan = document.getElementById('beerCounterLi');
  const juiceWeightSpan = document.getElementById('juiceCounterLi');

  

  // Update the total drink amount
  const drinkWeightOutput = document.getElementById('drinkWeightOutput');
  drinkWeightOutput.textContent = `${sodaServings} servings (Soda) - ${beerServings} servings (Beer) - ${juiceServings} servings (Juice)`;
}

function updateWeights(type) {
  console.log('Updating weights for:', type);
  const weightOutput = document.getElementById(`${type}WeightOutput`);
  let totalWeight = 0;

  const selectedItems = type === 'meat' ? selectedMeats : selectedDrinks;
  const itemWeights = type === 'meat' ? meatWeights : drinkAmounts;

  // Reset individual weight spans to '-' for all items
  for (const item in itemWeights) {
    const itemSpanId = `${item.toLowerCase()}CounterLi`;
    const itemWeightSpan = document.getElementById(itemSpanId);
    if (itemWeightSpan) {
      itemWeightSpan.textContent = '-';
    }
  }

  switch (type) {
    case 'meat':
      selectedItems.forEach((item) => {
        const baseWeight = itemWeights[item];
        const individualWeight = baseWeight * (adultCount + childCount * 0.5);
        totalWeight += individualWeight;

        // Construct the correct ID for the weight span
        const itemSpanId = `${item.toLowerCase()}CounterLi`;
        const itemWeightSpan = document.getElementById(itemSpanId);

        if (itemWeightSpan) {
          itemWeightSpan.textContent = `${individualWeight}g`;
        }
      });
      break;
    case 'drink':
      selectedItems.forEach((item) => {
        const baseWeight = itemWeights[item];
        let individualServings = 0;

        switch (item) {
          case 'Beer':
          case 'Wine':
            // Only count alcoholic drinks with adults
            individualServings = adultCount;
            break;
          default:
            // For non-alcoholic drinks, count with both adults and children
            individualServings = Math.ceil(adultCount + childCount * 0.5);
            break;
        }

        const individualWeight = baseWeight * individualServings;
        totalWeight += Math.ceil(individualWeight);

        // Construct the correct ID for the weight span
        const itemSpanId = `${item.toLowerCase()}CounterLi`;
        const itemWeightSpan = document.getElementById(itemSpanId);

        if (itemWeightSpan) {
          itemWeightSpan.textContent = `${Math.ceil(individualWeight)} Units`;
        }
      });
      break;
    default:
      break;
  }

  console.log('Total weight:', totalWeight);
  weightOutput.textContent = `${totalWeight}${type === 'meat' ? 'g' : ' Units'}`;
}



foodItems.forEach((item) => {
  item.addEventListener('click', () => {
    updateSelectedMeats(item);
  });
});

drinkItems.forEach((item) => {
  item.addEventListener('click', () => {
    updateSelectedDrinks(item);
  });
});

// Initialize the meat weights
updateWeights('meat');

