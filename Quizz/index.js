const options = document.getElementsByClassName("quizz-option");
let i=3;
let inter;
const firstPage= document.getElementById("one");
const timer = document.getElementById("timer");

function timerFunc(){
    timer.children[0].innerHTML=i;
    console.log(timer.children[0]);
    i--;
    if(i<0){
        clearInterval(inter);
    }
}
function countTime(){
inter = window.setInterval(timerFunc, 1000);}

[...options].forEach(opt=>{opt.addEventListener("click", ()=>{firstPage.style.display="none"; timer.style.display="block"; countTime()})});

