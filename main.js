var recipeTypes = {
  sides: [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
  ],

  entrees: [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
],

  desserts: [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
  ]
}

var currentFood;
var currentRecypeType;
var mealTypeForm = document.getElementById("type-form");
var inputValues = document.getElementsByName("meal-type");
var randomDishSection = document.getElementById("random-dish");
var clearButton = document.getElementById("clear-button");
var cookpotImage = document.getElementById("cookpot-icon");
var addRecipeButton = document.getElementById("add-recipe");
var addNewButton = document.getElementById("add-new-button");
var newRecipeForm = document.getElementById("add-new-form");
var recipeTypeInput = document.getElementById("recipe-type");
var recipeNameInput = document.getElementById("recipe-name");
var newRecipeSection = document.getElementById("new-recipe-form-box");

mealTypeForm.addEventListener('submit', getInputValue);
clearButton.addEventListener('click', clearView);
addRecipeButton.addEventListener('click', displayAddNewForm);
addNewButton.addEventListener('click', saveUserRecipe);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getInputValue() {
  event.preventDefault();
  for (var i =0; i < inputValues.length; i++) {
    if (inputValues[i].checked) {
      currentRecipeType = inputValues[i].value;
    }
  }
  randomFood()
};

function randomFood() {
  event.preventDefault();
  if (recipeTypes[currentRecipeType]) {
    currentFood = recipeTypes[currentRecipeType][getRandomIndex(recipeTypes[currentRecipeType])];
  } else if (currentRecipeType === "entire-meal") {
    currentFood = `${recipeTypes.entrees[getRandomIndex(recipeTypes.entrees)]} with a side of ${recipeTypes.sides[getRandomIndex(recipeTypes.sides)]} and ${recipeTypes.desserts[getRandomIndex(recipeTypes.desserts)]} for dessert`
  } else {
    window.alert("Choose a meal type: ");
    return false;
  }
  renderRandomFood();
};

function renderRandomFood() {
  clearButton.classList.remove("hidden");
  randomDishSection.innerHTML = `<p>You should make: <span class="random-result">${currentFood}!</span></p>`;
};

function clearView() {
  clearButton.classList.add("hidden");
  randomDishSection.innerHTML = "<img id='cookpot-icon' src='assets/cookpot.svg' alt='cookpot icon'>"
  mealTypeForm.reset();
};

function displayAddNewForm() {
  newRecipeSection.classList.remove("hidden");
};

function saveUserRecipe() {
  event.preventDefault();
  var recipeType = recipeTypeInput.value.toLowerCase();
  if (recipeTypes[recipeType]) {
    recipeTypes[recipeType].push(recipeNameInput.value);
  } else {
    recipeTypes[recipeType] = [recipeNameInput.value];
  }
  currentFood = recipeNameInput.value;
  newRecipeSection.classList.add("hidden");
  newRecipeForm.reset();
  renderRandomFood();
};
