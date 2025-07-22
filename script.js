const meals = [
  {
    day: "Monday",
    breakfast: "Yam & egg sauce + pap",
    lunch: "White rice with peppered goat meat & ugu",
    dinner: "Ogbono soup with fufu",
    snack: "Puff puff & tiger nuts",
    water: "3–4L throughout the day"
  },
  {
    day: "Tuesday",
    breakfast: "Akara & custard",
    lunch: "Fried rice with grilled chicken & coleslaw",
    dinner: "Eba & okra soup with ponmo",
    snack: "Chin chin & zobo",
    water: "Hydrate every hour"
  },
  {
    day: "Wednesday",
    breakfast: "Plantain & scrambled eggs with bread",
    lunch: "Jollof rice with turkey & steamed veggies",
    dinner: "Amala & ewedu with light stew",
    snack: "Boiled corn & coconut",
    water: "3L minimum"
  },
  {
    day: "Thursday",
    breakfast: "Moi moi & custard",
    lunch: "Ofada rice & ayamase sauce",
    dinner: "Yam porridge with ugu and smoked fish",
    snack: "Banana & cashew nuts",
    water: "Drink before and after meals"
  },
  {
    day: "Friday",
    breakfast: "Nkwobi or pepper soup & agidi",
    lunch: "Egusi soup with semo and grilled chicken",
    dinner: "Beans & dodo + boiled egg",
    snack: "Fruit mix (pawpaw, watermelon, cucumber)",
    water: "3.5L total"
  },
  {
    day: "Saturday",
    breakfast: "Akamu & fried yam with sauce",
    lunch: "Spaghetti jollof with turkey",
    dinner: "Fufu & oha soup",
    snack: "Donkwa & coconut water",
    water: "Frequent hydration"
  },
  {
    day: "Sunday",
    breakfast: "White rice & vegetable stew + 2 eggs",
    lunch: "Pounded yam & bitterleaf soup with beef",
    dinner: "Noodles & plantain",
    snack: "Tiger nuts & banana",
    water: "Sip water all day"
  }
];

const dayContainer = document.querySelector('.day-buttons');
const mealBtns = document.querySelector('.meal-buttons');
const mealDetails = document.getElementById('mealDetails');
const dayTitle = document.getElementById('day-title');

meals.forEach((item, index) => {
  const btn = document.createElement('button');
  btn.innerText = item.day;
  btn.addEventListener('click', () => showMeals(index));
  dayContainer.appendChild(btn);
});

function showMeals(index) {
  const day = meals[index];
  dayTitle.textContent = `🍴 ${day.day}'s Meal Plan`;

  mealBtns.innerHTML = '';
  mealDetails.innerHTML = '';

  ['breakfast', 'lunch', 'dinner', 'snack', 'water'].forEach(type => {
    const btn = document.createElement('button');
    btn.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    btn.onclick = () => {
      mealDetails.innerHTML = `<strong>${type.toUpperCase()}</strong>: ${day[type]}`;
    };
    mealBtns.appendChild(btn);
  });
}
