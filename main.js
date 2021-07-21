var sides = [
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
]


var mains = [
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
];


var desserts = [
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
];

var currentFood;

var mealTypeForm = document.getElementById("type-form");
var inputValues = document.getElementsByName('meal-type');
var randomDishSection = document.getElementById('random-dish');



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

mealTypeForm.addEventListener('submit', getInputValue);

function getInputValue() {
  event.preventDefault();
  for (var i =0; i < inputValues.length; i++) {
    if (inputValues[i].checked) {
      currentFood = inputValues[i].value;
    }
  }
  randomFood()
}

function randomFood() {
  event.preventDefault();
  if (currentFood === "side") {
    currentFood = sides[getRandomIndex(sides)];
    randomDishSection.innerHTML = `<p>You should make: ${currentFood}!</p>`;
  }
}
