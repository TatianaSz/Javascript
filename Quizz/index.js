const options = document.getElementsByClassName("quizz-option");
let i=2;
let inter;
const firstPage= document.getElementById("one");
const timer = document.getElementById("timer");
const question = document.getElementById("quiz-question");
const answers = document.getElementById("quiz-answers");
//quenstions and answers
const htmlQuestions=[{question:"test question", 0:"answeA", 1:"answerB", 2:"answerC", 3:"answerD"}];
const cssQuestions=[];
const jsQuestions=[];
// ------------------
function showAnswers(){
    question.style.opacity="1";
question.textContent= htmlQuestions[0].question;
for(let i = 0; i<4;i++){
   [...answers.children][i].textContent=htmlQuestions[0][i];
}
;
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

