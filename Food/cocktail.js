

let drinks=["Mojito"];
let drinksPic=["url('./images/mojito.svg')","url('./images/round.svg')","url('./images/triangle.svg')","url('./images/cham.svg')"];

let drinkImg = document.getElementsByClassName("drink-image")[0];
let alc = document.getElementsByClassName("alcohol");
drinkImg.style.backgroundImage=drinksPic[0];
let nav = document.getElementById("nav");


[...alc].forEach((al,i)=>al.addEventListener("click", function(){
    console.log(i)
    drinkImg.style.backgroundImage=drinksPic[i];
}))

async function getDrink(name){
    const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`+name);
    const drinkData = await drink.json();
    console.log(drinkData)
    }
    getDrink("mojito")
    //strDrink - name of drink
    //strIngredient1,2,3.... - ingredients
    //strInstructions - instructions