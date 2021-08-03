

let drinks=["Mojito"];
let drinksPic=["url('./images/mojito.svg')"];

let drinkImg = document.getElementsByClassName("drink-image")[0];
console.log(drinkImg);
drinkImg.style.backgroundImage=drinksPic[0];
let nav = document.getElementById("nav");




async function getDrink(){
    const drink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const drinkData = await drink.json();
    
    }
    getDrink()