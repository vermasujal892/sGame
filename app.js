let gameSeq = [];
let userSeq = [];
let btns = ["b1", "b2", "b3", "b4"];
let highScore = 0;

let started = false;
level = 0;
let h2 = document.querySelector("h2");

let hscore = document.querySelector(".hscore");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game is started");
    started = true;
  }
  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
    userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  //chose random btn
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(idx) {


  if (gameSeq[idx] === userSeq[idx]) {
       if(userSeq.length == gameSeq.length){
          setTimeout(()=>{
           levelUp();

          },1000)
    }
  } else {
    h2.innerHTML = `Game Over! your score is <b> ${level}</b> <br> press Any key to Start`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(()=>{
    body.style.backgroundColor = "white";

    },150);

    if(level > highScore){
        highScore =level;
        hscore.innerText = highScore;

    }
    reset();
  }
}

function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


function reset(){
    started =false
    gameSeq =[];
    userSeq = [];
    level = 0 ;

}