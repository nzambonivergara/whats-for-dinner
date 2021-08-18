var recipeTypes = {
  sides: [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
  ],

  entrees: [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
  ],

  desserts: [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
  ]
}


var mealTypeForm = document.getElementById('type-form');
var inputValues = document.getElementsByName('meal-type');
var randomDishResult = document.getElementById('random-dish-result')
var clearButton = document.getElementById('clear-button');
var cookpotImage = document.getElementById('cookpot-icon');
var addRecipeButton = document.getElementById('add-recipe');
var addNewButton = document.getElementById('add-new-button');
var newRecipeForm = document.getElementById('add-new-form');
var recipeTypeInput = document.getElementById('recipe-type');
var recipeNameInput = document.getElementById('recipe-name');
var newRecipeSection = document.getElementById('new-recipe-form-box');
var entireMealNode = document.getElementById('entire-meal-label');
var currentFood = '';
var currentRecipeType = '';

mealTypeForm.addEventListener('submit', getInputValue);
clearButton.addEventListener('click', clearView);
addRecipeButton.addEventListener('click', function () {
  show(newRecipeSection);
});
addNewButton.addEventListener('click', saveUserRecipe);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function getInputValue() {
  event.preventDefault();
  inputValues.forEach(inputValue => {
    if (inputValue.checked) {
      currentRecipeType = inputValue.value;
    }
  })
  randomFood();
}

function randomFood() {
  if (!currentRecipeType) {
    window.alert('Choose a meal type!');
    return
  } else if (recipeTypes[currentRecipeType]) {
    currentFood = recipeTypes[currentRecipeType][getRandomIndex(recipeTypes[currentRecipeType])];
  } else if (currentRecipeType === 'entire-meal') {
    currentFood = `${recipeTypes.entrees[getRandomIndex(recipeTypes.entrees)]} with a side of ${recipeTypes.sides[getRandomIndex(recipeTypes.sides)]} and ${recipeTypes.desserts[getRandomIndex(recipeTypes.desserts)]} for dessert`
  }
  renderRandomFood();
}

function renderRandomFood() {
  show(clearButton);
  hide(cookpotImage);
  randomDishResult.innerHTML =
  `<p>You should make: <p class='random-result'>${currentFood}!</p></p>`;
}

function clearView() {
  hide(clearButton);
  show(cookpotImage);
  randomDishResult.innerHTML = '';
  currentRecipeType = '';
  mealTypeForm.reset();
}

function saveUserRecipe() {
  event.preventDefault();
  var recipeType = recipeTypeInput.value.toLowerCase();
  if (!recipeType || !recipeNameInput.value) {
    window.alert('Fill out all fields!');
    return
  } else if (recipeTypes[recipeType]) {
    recipeTypes[recipeType].push(recipeNameInput.value);
  } else {
    recipeTypes[recipeType] = [recipeNameInput.value];
    addNewMealType()
  }
  currentFood = recipeNameInput.value;
  hide(newRecipeSection);
  newRecipeForm.reset();
  renderRandomFood();
}

function addNewMealType() {
  entireMealNode.insertAdjacentHTML('beforebegin',
    `<label for=${recipeTypeInput.value}>
  <input type='radio' name='meal-type' id=${recipeTypeInput.value} value=${recipeTypeInput.value.toLowerCase()} class='form'/>
   ${recipeTypeInput.value}</label>`);
}
