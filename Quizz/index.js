let options = [...document.getElementsByClassName("option")];
let i=2;
let inter;
let pointCount=0;
let clickedAnswer=false;
let z=0;
const firstPage= document.getElementById("one");
const timer = document.getElementById("timer");
const question = document.getElementById("quiz-question");
const answers = document.getElementById("quiz-answers");
const btn = document.getElementsByTagName("button")[0];

function resize_to_fit() {
    let fontSize = window.getComputedStyle(answers).fontSize;
    answers.style.fontSize = (parseFloat(fontSize) - 1) + 'px';
    if(answers.clientHeight >= 300){
      resize_to_fit();
    }
  }


let chosenQuestions;
//quenstions and answers
const htmlQuestions=[{question:"What is the best way to apply bold styling to text?", 0:"<strong>", 1:"<bold>", 2:"<b>", 3:"font-weight:bold;", correrct:0},{question:"How do you confirm that a document is written in HTML5?", 0:"The server wraps the webpage in an HTML5 wrapper.", 1:"Use the <!DOCTYPE html> declaration that starts the document.", 2:"The browser receives encoding from the server to display the document with HTML5.", 3:"It is enclosed in a <html> tag.", correrct:1}];
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
    answers.style.display="block";
    btn.style.display="block";
question.textContent= chosenQuestions[z].question;
for(let i = 0; i<4;i++){
   [...answers.children][i].textContent=chosenQuestions[z][i];
   [...answers.children][i].addEventListener("click", function(){
    i==chosenQuestions[z].correrct?clickedAnswer=true:null;
    [...answers.children].forEach(l=>l.style.backgroundColor='#F4442E');
    this.style.backgroundColor='#cf194b';
    })
}
answers.style.fontSize = 32 + "px";
resize_to_fit()
}

function nextQuestion(){
   clickedAnswer==true?pointCount++:null;
   clickedAnswer=false;
console.log(chosenQuestions)
z++;
showAnswers();
[...answers.children].forEach(l=>l.style.backgroundColor='#F4442E');
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
    chosenQuestions=randomQuestions(htmlQuestions);
    break;
case "css":
    chosenQuestions=randomQuestions(cssQuestions);
    break;
case "js":
    chosenQuestions=randomQuestions(jsQuestions);
    break;
}
})});

