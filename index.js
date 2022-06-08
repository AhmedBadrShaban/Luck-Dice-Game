 var randomNumber1 = Math.floor(6*Math.random()+1);
 var randomNumber2 = Math.floor(6*Math.random()+1);
document.querySelector(".dice img").setAttribute("src" , "images/dice"+randomNumber1+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src" , "images/dice"+randomNumber2+".png");
if(randomNumber1 > randomNumber2)
{
	document.querySelector(".container h1").innerHTML="Player 1 Wins 😄"
}
else if (randomNumber1 < randomNumber2) 
{

	document.querySelector(".container h1").innerHTML= "Player 2 Wins 😄"
}
else
{
		document.querySelector(".container h1").innerHTML=" No one Wins 🤡";
}


 //alert(randomNumber1);