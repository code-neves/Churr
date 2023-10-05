const selectedMeats = [];
let selectedDrinks = [];

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
  Beer: 500,
  Soda: 300,
  Water: 200,
  Juice: 250,
  Wine: 150,
};

const drinkAmounts = {
  Beer: 3,
  Soda: 0.2,
  Water: 1,
  Juice: 1,
  Wine: 1,
};

function updateSelectedMeats(item) {
  const meatType = item.textContent.replace(/\s/g, '');
  item.classList.toggle('checked');

  if (item.classList.contains('checked')) {
    selectedMeats.push(meatType);
  } else {
    const index = selectedMeats.indexOf(meatType);
    if (index !== -1) {
      selectedMeats.splice(index, 1);
    }
  }

  updateWeights('meat');
}

function updateSelectedDrinks(item) {
  const drinkType = item.textContent.replace(/\s/g, '');
  item.classList.toggle('checked');

  if (item.classList.contains('checked')) {
    if (drinkType === 'Beer' || drinkType === 'Wine') {
      if (adultCount > 0) {
        for (let i = 0; i < adultCount; i++) {
          selectedDrinks.push(drinkType);
        }
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

  updateWeights('drink');
}

function updateWeights(type) {
  let weightOutput = document.getElementById(`${type}WeightOutput`);
  let totalWeight = 0;

  const selectedItems = type === 'meat' ? selectedMeats : selectedDrinks;
  const itemWeights = type === 'meat' ? meatWeights : drinkAmounts;

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
            individualServings = adultCount;
            break;
          default:
            individualServings = Math.ceil(adultCount + childCount * 0.5);
            break;
        }

        const individualWeight = baseWeight * individualServings;
        totalWeight += Math.ceil(individualWeight);

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
  weightOutput.textContent = `${totalWeight}${type === 'meat' ? 'g' : ' Units'}`;
}

const foodItems = document.querySelectorAll('.foodContainer li');
const drinkItems = document.querySelectorAll('.drinksContainer li');

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

updateWeights('meat', 'drink');