async function getDrink(){
const drink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
const drinkData = await drink.json();
console.log(drinkData)
}
getDrink()