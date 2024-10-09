
var x = document.getElementById("VIDEO"); 

 function playVid(element) { 
    element.play(); 
} 

function pauseVid() { 
  x.pause(); 
} 

function changeto(){
var x = document.getElementById("sub"); 

if (x.innerHTML == "Subscribe"){
x.innerHTML  = "Subscribed";
}
else{
    x.innerHTML  = "Subscribe";
}
}

function login(){
    var y= document.getElementById("log");
    if(y.innerHTML == "Login") 
    {y.innerHTML = "log out"; alert ("you are logedin");}
    else {y.innerHTML = "Login"; alert ("you are logedout");}

}

