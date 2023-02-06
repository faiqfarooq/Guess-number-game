'use strict';
// console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".message").textContent='🎉right Guess⚡ ' );
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=23;
// document.querySelector(".guess").value=10;
// console.log(document.querySelector(".guess").value);


let s_number=Math.trunc(Math.random()*30)+1;//trunc remove the decimal part and return only integer 

let score=20;
let highscore=0;
document.querySelector(".score").textContent=score;
document.querySelector(".check").addEventListener("click",function(){
const guess=Number(document.querySelector(".guess").value);
console.log( guess,typeof guess);

if(!guess){
    document.querySelector('.message').textContent='🚨 No Number 🚨 ';
}
else if(guess === s_number){

    document.querySelector("body").style.backgroundColor="#60b347";

    document.querySelector('.number').style.width='30rem';

    document.querySelector('.number').textContent=s_number;

    document.querySelector(".message").textContent='🎉 right Guess ⚡' ;
    if(score > highscore){
        highscore=score;
        document.querySelector(".highscore").textContent=score;
    }
    
    
}
else if(guess > s_number){
    if(score>1){
        document.querySelector('.message').textContent='Too High 📈 ';
        score--;
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector('.message').textContent='You Lost 😓 ';
        document.querySelector(".score").textContent=0;
    }

}
else if(guess < s_number){
    if(score>1){
        document.querySelector('.message').textContent='Too Low 📉 ';
        score--;
        document.querySelector(".score").textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Lost 😓 ';
            document.querySelector(".score").textContent=0;
        }
    }
   
   
  
});


document.querySelector(".again").addEventListener('click',function(){
    score=20;
    s_number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing... ';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width='15rem';
});