var timer =100;
var score=0;
var rn;
function makebubble(){

    var storage ='';
    for(var i=0;i<=118;i++){
        var value = Math.floor(Math.random()*10); 
        storage += `<div class="bubble">${value}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = storage;
}
function hit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent =rn;
}
function runtimer(){
    var timerint = setInterval(() => {
        if(timer>0){

            timer--;
            document.querySelector("#timerval").textContent =timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Your score is ${score}</h1>`
        }
    }, 1000);
}
function incscore(){
    score+=10;
    document.querySelector("#incrscore").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",(dets)=>{
    var clikdnum = Number(dets.target.textContent)
    if(clikdnum === rn){
        incscore()
        makebubble()
        hit()
    }
})
runtimer()
makebubble()
hit()
