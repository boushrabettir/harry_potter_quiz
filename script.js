//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/
/*click count tracks the amount of clicks*/
var clickCount = 0;
var questionCount = 0;
var fredWeasleyScore = 0;
var georgeWeasleyScore = 0;
var ronWeasleyScore = 0;

var result = document.getElementById('result');
var restartb = document.getElementById("restart");


 // Store the number of answers clicked on

// Store HTML elements using the DOM


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3")


var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");


var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");


var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");


// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener('click', georgeWeasley);
q1a2.addEventListener('click', fredWeasley);
q1a3.addEventListener('click', ronWeasley);

q2a1.addEventListener('click', ronWeasley);
q2a2.addEventListener('click', georgeWeasley);
q2a3.addEventListener('click', fredWeasley);

q3a1.addEventListener('click', fredWeasley);
q3a2.addEventListener('click', ronWeasley);
q3a3.addEventListener('click', georgeWeasley);

q4a1.addEventListener('click', ronWeasley);
q4a2.addEventListener('click', georgeWeasley);
q4a3.addEventListener('click', fredWeasley);

q5a1.addEventListener('click', georgeWeasley);
q5a2.addEventListener('click', ronWeasley);
q5a3.addEventListener('click', fredWeasley);

q6a1.addEventListener('click', ronWeasley);
q6a2.addEventListener('click', fredWeasley);
q6a3.addEventListener('click', georgeWeasley);

q7a1.addEventListener('click', fredWeasley);
q7a2.addEventListener('click', georgeWeasley);
q7a3.addEventListener('click', ronWeasley);

restartb.addEventListener('click', reset);

// Functions will be here

function georgeWeasley() {
georgeWeasleyScore +=1;
questionCount +=1;

console.log("questionCount = " + questionCount + " georgeWeasleyScore = " + georgeWeasleyScore);


if (questionCount == 7){
  console.log("The quiz is done.");
  updateResult();

}

}



function fredWeasley() {
  fredWeasleyScore +=1;
  questionCount +=1;


  console.log("questionCount = " + questionCount + " fredWeasleyScore = " + fredWeasleyScore );


  if (questionCount == 7){
  console.log("The quiz is done.")
  updateResult();

}

}

function ronWeasley() {
ronWeasleyScore +=1;
questionCount +=1;

console.log("questionCount = " + questionCount + " ronWeasleyScore = " + ronWeasleyScore );


if (questionCount == 7){
  console.log("The quiz is done.");
  updateResult();

}

}



function updateResult() {
    if (georgeWeasleyScore >=3){
      result.innerHTML = "You are George Weasley!";
      console.log("You are George Weasley!"); 
      }
      else if (fredWeasleyScore >=3) {
      result.innerHTML = "You are Fred Weasley!";
       console.log("You are Fred Weasley!");
      }

      else if (ronWeasleyScore >=3) {
        result.innerHTML = "You are Ron Weasley!";
        console.log("you are Ron Weasley");
       }
      }
    



function reset() {
  questionCount = 0;
  fredWeasleyScore = 0;
  georgeWeasleyScore = 0;
  ronWeasleyScore = 0;
  result.innerHTML ="You are...";
}
