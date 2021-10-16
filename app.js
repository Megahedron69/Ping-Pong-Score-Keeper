/**************DOM VARIABLES***************/
const pscore1 = document.getElementById("p1score");
const pscore2 = document.getElementById("p2score");
const plusp1 = document.getElementById("button1");
const plusp2 = document.getElementById("button2");
const reset = document.getElementById("button3");
const target = document.getElementById("tscore");
/******************VARIABLES***************/
let score1 = 0;
let score2 = 0;
let winstatus = false;
let winningscr = parseFloat(target.options[target.selectedIndex].value);
/****************FUNCTIONS*****************/
const resets = () => {
  score1 = 0;
  score2 = 0;
  pscore1.style.color = "";
  pscore2.style.color = "";
  pscore1.textContent = score1;
  pscore2.textContent = score2;
  plusp1.disabled = false;
  plusp2.disabled = false;
  winstatus = false;
};
resets();

const win = () => {
  winningscr = parseFloat(target.options[target.selectedIndex].value);
  if (score1 === winningscr) {
    pscore1.style.color = "green";
    pscore2.style.color = "red";
    winstatus = true;
    plusp1.disabled = true;
    plusp2.disabled = true;
  } else if (score2 === winningscr) {
    pscore2.style.color = "green";
    pscore1.style.color = "red";
    winstatus = true;
    plusp1.disabled = true;
    plusp2.disabled = true;
  }
  return winstatus;
};
/****************EVENT LISTENERS************/
plusp1.addEventListener("click", function () {
  if (!winstatus) {
    score1++;
    console.log(score1);
    pscore1.textContent = score1;
    win();
  }
});

plusp2.addEventListener("click", function () {
  score2++;
  console.log(score2);
  pscore2.textContent = score2;
  win();
});

reset.addEventListener("click", resets);
