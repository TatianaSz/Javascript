const options = document.getElementsByClassName("quizz-option");
let i=2;
let inter;
const firstPage= document.getElementById("one");
const timer = document.getElementById("timer");
const question = document.getElementById("quiz-question");
const answers = document.getElementById("quiz-answers");

function showAnswers(){
console.log("answers")
}

function timerFunc(){
    timer.children[0].innerHTML=i;
    i--;
    if(i<0){
        timer.children[0].innerHTML="GO!";
        clearInterval(inter);
        setTimeout(function(){ timer.style.display="none"; showAnswers()}, 1000);
    }
}
function countTime(){
inter = window.setInterval(timerFunc, 1000);}

[...options].forEach(opt=>{opt.addEventListener("click", ()=>{firstPage.style.display="none"; timer.style.display="block"; countTime()})});

const htmlQuestions=[{question:"test question", a:"answeA", b:"answerB", c:"answerC", d:"answerD"}];
const cssQuestions=[];
const jsQuestions=[];