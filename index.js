var randomnumber1=Math.floor(6*(Math.random()))+1;
var randomimg="dice"+randomnumber1+".png";
var imgsrc=randomimg;
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",imgsrc);
var randomnumber2=Math.floor(6*(Math.random()))+1;
var randomimg2="dice"+randomnumber2+".png";
var imgsrc2=randomimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imgsrc2);
if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="Draw"
}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins."
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins."
}
