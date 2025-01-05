var timer = 30;
var score=0;
var rn;

function makebubble(){
    var bubbles=''
for (let i = 0; i <= 159; i++) {
    let rn = Math.floor(Math.random()*10)
    bubbles +=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML= bubbles
};

function setscore(){
    document.querySelector("#score").innerHTML = score  
    score += 10;
};

function sethitvalue(){
    rn= Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=rn
};

function gethit(){
    document.querySelector("#pbtm").addEventListener("click",function(details){
        var clickednum = Number(details.target.textContent)
        if(clickednum==rn){
            setscore();
            sethitvalue();
            makebubble();
        }
    })
};

function settimer(){
    var interval = setInterval(() => {
         if(timer > 0){
         timer-- ;  
         document.querySelector("#timer").textContent=timer  
         }   
         else{
            
             gameOver()
         } 
     }, 1000);
 };

makebubble();
settimer();
sethitvalue();
gethit();
setscore();

function gameOver(){
    clearInterval(interval);
    document.querySelector("#pbtm").innerHTML=`<h1>Game Over<h1>
    <p>Your score is: ${score-10}`
    document.querySelector("#hit").textContent=0
}