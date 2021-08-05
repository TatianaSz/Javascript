

const drinksPic=["./images/mojito.svg","./images/triangle.svg","./images/cham.svg","./images/round.svg"];
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
const colors=["#53FF45", "#F991CC","#F3CA40","#48BEFF"];
const animations = [{animation: "rotate 6s linear infinite ,moveup 10s linear forwards"},
{animation: "rotate 6s linear infinite ,moveupp 10s linear forwards"},{ animation: "rotate 6s linear infinite ,moveup 10s linear forwards"},{animation: "rotate 6s linear infinite ,moveupp 10s linear forwards"}];

const drinkImg = document.getElementsByClassName("drink-image")[0];
let animationClass=document.getElementsByClassName("run-animation")[0]
let drinkback = document.getElementsByClassName("drink-recipe")[0];
let descDrinkName= document.getElementsByClassName("drink-name")[0];
let descDrinkIng=document.getElementsByClassName("drink-ingredients")[0];
let descDrinkRec = document.getElementsByClassName("drink-rec")[0];
const alc = document.getElementsByClassName("alcohol");

drinkImg.style.backgroundImage=drinksPic[0];

const setStylesOnElement = function(styles, element){
    Object.assign(element.style, styles);
};

let el = document.getElementsByClassName("gradient")[0];



[...alc].forEach((al,i)=>{al.addEventListener("click", function(e){
    e.preventDefault;
    setStylesOnElement({boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"},drinkback);
    descDrinkIng.innerHTML="";
    var bgImg = new Image();
    bgImg.onload = function(){
        drinkImg.style.backgroundImage = 'url(' + bgImg.src + ')';
        //those three lines of code below are triggering reset of the animation ( ͡ʘ ͜ʖ ͡ʘ) magic!
        el.style.animation = 'none'; //delete animation
        void el.offsetWidth; //reflow
        el.style.animation = null; //inherit the css animation again
        setStylesOnElement(animations[i],animationClass);
        setStylesOnElement(backstyles[i],el);
    };
    bgImg.src = drinksPic[i];
    drinkback.style.backgroundColor=colors[i];
    getDrink(al.dataset.id);
})}
)

async function getDrink(name){
    const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+name);
    const drinkData = await drink.json();
    const drinkes = drinkData.drinks[0];
    const drinkName = drinkes.strDrink;
    const instructions = drinkes.strInstructions;
    for (let i =1; drinkes['strIngredient'+i]!=null; i++){
         const ing = document.createElement("div")
         ing.textContent=drinkes['strIngredient'+i];
         descDrinkIng.appendChild(ing);
   }
    descDrinkName.textContent=drinkName;
    descDrinkRec.textContent=instructions;
    }
   
 