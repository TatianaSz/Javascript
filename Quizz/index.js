let options = [...document.getElementsByClassName("option")];
let i=2;
let inter;
let pointCount=0;
let clickedAnswer=false;
const firstPage= document.getElementById("one");
const timer = document.getElementById("timer");
const question = document.getElementById("quiz-question");
const answers = document.getElementById("quiz-answers");
const btn = document.getElementsByTagName("button")[0];
//quenstions and answers
const htmlQuestions=[{question:"test question", 0:"answeA", 1:"answerB", 2:"answerC", 3:"answerD", correrct:2}];
const cssQuestions=[];
const jsQuestions=[];
// ------------------
function randomQuestions(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(0,10);
}
//-------------------



function showAnswers(){
    question.style.opacity="1";
    btn.style.display="block";
question.textContent= htmlQuestions[0].question;
for(let i = 0; i<4;i++){
   [...answers.children][i].textContent=htmlQuestions[0][i];
   [...answers.children][i].addEventListener("click", ()=>{
    i==htmlQuestions[0].correrct?clickedAnswer=true:null;
    })
}
}

function nextQuestion(){
   clickedAnswer==true?pointCount++:null;
   console.log(clickedAnswer)
   clickedAnswer=false;
console.log(pointCount)
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

btn.addEventListener("click",nextQuestion)
options.forEach(opt=>{opt.addEventListener("click", ()=>{firstPage.style.display="none"; timer.style.display="block"; countTime();
switch(opt.dataset.type){
case "html":
    randomQuestions(htmlQuestions);
    break;
case "css":
    randomQuestions(cssQuestions);
    break;
case "js":
    randomQuestions(jsQuestions);
    break;
}
})});

