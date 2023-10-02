const AdultValue = document.getElementById('adultoCounter');
let AdultValueLi = document.getElementById('adultoCounterLi');
const AdultPlus = document.getElementById('adultoAdd');
const AdultMinus = document.getElementById('adultoRemove');

const ChildValue = document.getElementById('criancaCounter');
let ChildValueLi = document.getElementById('criancaCounterLi');
const ChildPlus = document.getElementById('criancaAdd');
const ChildMinus = document.getElementById('criancaRemove');

let adultCount = 0;
let childCount = 0;

function updateCounter(type, increment) {
  if (type === 'adult') {
    if (increment) {
      adultCount++;
    } else if (adultCount > 0) {
      adultCount--;
    }
    AdultValue.textContent = adultCount;
    AdultValueLi.textContent = adultCount;
  } else if (type === 'child') {
    if (increment) {
      childCount++;
    } else if (childCount > 0) {
      childCount--;

    }
    ChildValue.textContent = childCount;
    ChildValueLi.textContent = childCount;
  }
  updateWeights('meat'); // Pass the counts to updateWeights
  updateWeights('drink'); // Pass the counts to updateWeights
}


AdultPlus.addEventListener('click', () => {
  updateCounter('adult', true); // Increment adult count
});

AdultMinus.addEventListener('click', () => {
  updateCounter('adult', false); // Decrement adult count
});

ChildPlus.addEventListener('click', () => {
  updateCounter('child', true); // Increment child count
});

ChildMinus.addEventListener('click', () => {
  updateCounter('child', false); // Decrement child count
});
