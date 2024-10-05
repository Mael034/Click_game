const btn = document.getElementById("btnstart");
const textbtn = document.getElementById("START");
const display = document.getElementById("display");
const timerdisplay = document.getElementById("timerdisplay");
const indication = document.getElementById("indication");
const tryagain = document.getElementById("tryagain");
const tryagainbtn = document.getElementById("tryagainbtn");
const result = document.getElementById("result");
const btn10 = document.getElementById("10sec");
const btn20 = document.getElementById("20sec");
const btn30 = document.getElementById("30sec");
const btn60 = document.getElementById("60sec");
let startTimer = 6 ;
let sec = 0;
let dec = 0;
let score = 0;
let initialTimer = 0 ;
let SGame = true;
let tryagbtn = false;
let timer = false;
let Started = false;
let Ended = false;
let tabtn = document.createElement("DIV");

btn10.addEventListener("click", () =>{if (Started == false ){timer = 10; initialTimer = 10; indication.textContent = ""; }})
btn20.addEventListener("click", () =>{if (Started == false ){timer = 20; initialTimer = 20; indication.textContent = ""; }})
btn30.addEventListener("click", () =>{if (Started == false ){timer = 30; initialTimer = 30; indication.textContent = ""; }})
btn60.addEventListener("click", () =>{if (Started == false ){timer = 60; initialTimer = 60; indication.textContent = ""; }})

btn.addEventListener("click", () =>{
    if (!timer){
        indication.style.textDecoration = "underline" ;
        indication.style.textDecorationColor = "red";
    }
    if (timer != false && Started == false  && SGame == true ){ 
        SGame = null; setInterval(BStart,1000); 
    }
})

function BStart(){
    if(startTimer >= 2 && startTimer <= 6){
        startTimer--;
        textbtn.textContent="";
        display.textContent = startTimer;
        }else{
            if (dec == 0 && Started == false){
                display.textContent = "GO!";
                clearInterval(BStart);
                setTimeout(Score,500);
                Started = true;
                startTimer = null;
            }
        }
    }
function Score(){
    setInterval(Start,100);
       btn.addEventListener("click",() =>{
            if(  Ended == false && Started == true){
                score++; 
                display.textContent = "";
                textbtn.textContent = score ;   
            }
        })
}
function Start(){
    if( timer!= sec && Started == true){
        dec++;
        if (dec >= 10){ sec++; dec=0;}
        timerdisplay.textContent = sec + ':' + dec;
        }else{ 
            if (tryagbtn == false){
                timerdisplay.textContent ="";
                clearTimeout(Score);
                Ended = true;
                result.textContent = "Congratulation! Your score is " + score + " clicks for " + initialTimer + " secondes";
                tryagain.textContent = "try again?"
                clearInterval(Start);
                Tryagain();
            }
        }
}
function Tryagain(){
    tryagbtn = true ;
    let b = document.createTextNode("Try again");
    tryagainbtn.appendChild(tabtn);
    tabtn.appendChild(b);
    tabtn.style.backgroundColor = "transparent";
    tabtn.style.paddingTop = "5px";
    tabtn.style.paddingBottom = "5px";
    tabtn.style.paddingLeft = "8px";
    tabtn.style.paddingRight = "8px";
    tabtn.style.border = "1px solid black";
    tabtn.style.borderRadius ="500px";
    tabtn.addEventListener("click", () =>{
        location.reload()
    })
}

 