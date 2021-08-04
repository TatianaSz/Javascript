

const drinksPic=["url('./images/mojito.svg')","url('./images/triangle.svg')","url('./images/cham.svg')","url('./images/round.svg')"];
const backstyles = [{
    background: "rgb(208,251,44)",
    background: "-moz-radial-gradient(circle at 100% 50%, rgba(208,251,44,1) 0%, rgba(114,255,27,1) 55%, rgba(147,255,150,1) 92%, rgba(205,235,220,1) 100%)",
    background: "-webkit-radial-gradient(circle at 100% 50%, rgba(208,251,44,1) 0%, rgba(114,255,27,1) 55%, rgba(147,255,150,1) 92%, rgba(205,235,220,1) 100%)",
    background: "radial-gradient(circle at 100% 50%, rgba(208,251,44,1) 0%, rgba(114,255,27,1) 55%, rgba(147,255,150,1) 92%, rgba(205,235,220,1) 100%)",
    },
    {
    background: "rgb(238,150,75)",
    background: "-moz-radial-gradient(circle at 70% 50%, rgba(238,150,75,1) 0%, rgba(238,66,102,1) 32%, rgba(239,118,122,1) 57%, rgba(246,231,203,1) 100%)",
    background: "-webkit-radial-gradient(circle at 70% 50%, rgba(238,150,75,1) 0%, rgba(238,66,102,1) 32%, rgba(239,118,122,1) 57%, rgba(246,231,203,1) 100%)",
    background: "radial-gradient(circle at 70% 50%, rgba(238,150,75,1) 0%, rgba(238,66,102,1) 32%, rgba(239,118,122,1) 57%, rgba(246,231,203,1) 100%)",
},
    {
    background: "rgb(251,25,29)",
    background: "-moz-radial-gradient(circle, rgba(251,25,29,1) 0%, rgba(244,93,1,1) 27%, rgba(255,218,34,1) 64%, rgba(255,254,185,1) 100%)",
    background: "-webkit-radial-gradient(circle, rgba(251,25,29,1) 0%, rgba(244,93,1,1) 27%, rgba(255,218,34,1) 64%, rgba(255,254,185,1) 100%)",
    background: "radial-gradient(circle, rgba(251,25,29,1) 0%, rgba(244,93,1,1) 27%, rgba(255,218,34,1) 64%, rgba(255,254,185,1) 100%)",
    },
    {
    background: "rgb(168,202,223)",
    background: "-moz-radial-gradient(circle at 90% 50%, rgba(168,202,223,1) 0%, rgba(42,157,143,1) 45%, rgba(60,163,154,1) 81%, rgba(97,139,74,1) 100%)",
    background: "-webkit-radial-gradient(circle at 90% 50%, rgba(168,202,223,1) 0%, rgba(42,157,143,1) 45%, rgba(60,163,154,1) 81%, rgba(97,139,74,1) 100%)",
    background: "radial-gradient(circle at 90% 50%, rgba(168,202,223,1) 0%, rgba(42,157,143,1) 45%, rgba(60,163,154,1) 81%, rgba(97,139,74,1) 100%)",
    }];

const drinkImg = document.getElementsByClassName("drink-image")[0];

const alc = document.getElementsByClassName("alcohol");
drinkImg.style.backgroundImage=drinksPic[0];
let nav = document.getElementById("nav");

const setStylesOnElement = function(styles, element){
    Object.assign(element.style, styles);
};

let el = document.getElementsByClassName("gradient")[0];

[...alc].forEach((al,i)=>al.addEventListener("click", function(e){
    e.preventDefault;
    //those three lines of code below are triggering reset of the animation ( ͡ʘ ͜ʖ ͡ʘ) magic!
    el.classList.remove("run-animation");
    void el.offsetWidth;
    el.classList.add("run-animation");
    drinkImg.style.backgroundImage=drinksPic[i];
    setStylesOnElement(backstyles[i],el)
}))

async function getDrink(name){
    const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`+name);
    const drinkData = await drink.json();
   
    }
    getDrink("mojito")
    //strDrink - name of drink
    //strIngredient1,2,3.... - ingredients
    //strInstructions - instructions