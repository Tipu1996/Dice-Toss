var x;
x = Math.floor(Math.random() * 6) + 1;
var source = "images/dice" + x + ".png";
document.querySelectorAll("img")[0].setAttribute("src", source)


var y;
y = Math.floor(Math.random() * 6) + 1;
var source2 = "images/dice" + y + ".png";
document.querySelectorAll("img")[1].setAttribute("src", source2)

if(x > y){
  document.querySelector(".refresh").innerHTML = "Player1 Wins!"
}

else if(y > x){
  document.querySelector(".refresh").innerHTML = "Player2 Wins!"
}

else{
  document.querySelector(".refresh").innerHTML = "It's a DRAW :/"
}
