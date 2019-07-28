var colors = pickrandomcolor(6);
 
var square = document.querySelectorAll(".square");

var pickedcolor = selectcolor();

var coldisplay= document.getElementById("coldisplay");

var messagedisplay=document.getElementById("message");

var game= document.querySelector(".game");

var newgame = document.getElementById("playagain");

var clickedcolor;

var easybutton= document.getElementById("leveleasy");
var hardbutton= document.getElementById("levelhard"); 



coldisplay.textContent=pickedcolor;
var count=0;
for(var i=0; i<square.length; i++){
     square[i].style.background = colors[i];

     square[i].addEventListener("click",function(){
        clickedcolor = this.style.background;
         if (clickedcolor === pickedcolor){
             messagedisplay.textContent="CORRECT!";
             samecolor(clickedcolor);
             game.style.background = clickedcolor;
             newgame.textContent="PLAY AGAIN"
         }else{
             this.style.background="black";
             messagedisplay.textContent="TRY AGAIN!";
             
        //  }else if(count>3){
        //     messagedisplay.textContent="ITS OVER YOU ARE NOOOB";
        //  }
         }
     });
}
//all square have same color upon selecting right one
function samecolor(colors){
    for(var i=0; i<square.length; i++){
        square[i].style.background=colors;
    }
}
//selecting random colors from array
function selectcolor(){
    var randomcolor = Math.floor(Math.random() * colors.length);
    return colors[randomcolor];
}
function pickrandomcolor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(generaterandomcolor());
    }
    return arr;
}
function generaterandomcolor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    
    return "rgb(" + red + ", " + green +", " + blue + ")";
}
var num;
        easybutton.addEventListener("click",function(){
        num=3;
        easybutton.classList.add("selected");
        hardbutton.classList.remove("selected");
        colors=pickrandomcolor(3);
        pickedcolor= selectcolor();
        game.style.background="brown";
        messagedisplay.textContent="";
        coldisplay.textContent=pickedcolor;
        for(var i=0; i<square.length; i++){
            if(colors[i]){
                square[i].style.background=colors[i];
            }else{
                square[i].style.display="none";
            }
        }
        game.style.background="white";
});
hardbutton.addEventListener("click",function(){
    num=6;
    easybutton.classList.remove("selected");
    hardbutton.classList.add("selected");
    colors=pickrandomcolor(6);
    pickedcolor=selectcolor();
    messagedisplay.textContent="";
    coldisplay.textContent=pickedcolor;
    for(var i=0; i<square.length; i++){
            square[i].style.background=colors[i];
            square[i].style.display="block";
        }
        game.style.background="white";
});

newgame.addEventListener("click",function(){
    if(num===3){
    colors=pickrandomcolor(num);
    pickedcolor=selectcolor();
    easybutton.classList.add("selected");
    hardbutton.classList.remove("selected");
    coldisplay.textContent=pickedcolor;
    messagedisplay.textContent="";
    for(var i=0; i<square.length; i++){
        if(colors[i]){
            square[i].style.background=colors[i];
        }else{
            square[i].style.display="none";
        }
      } 
    }
    else
    {
    colors=pickrandomcolor(6);
    pickedcolor=selectcolor();
    easybutton.classList.remove("selected");
    hardbutton.classList.add("selected");
    coldisplay.textContent=pickedcolor;
    messagedisplay.textContent="";
    for(var i=0; i<square.length; i++){
        square[i].style.background=colors[i];
        square[i].style.display="block";
        }
    }
        newgame.textContent="NEW COLOR";
        game.style.background="white";
 });
function lives(){
    
}






