var arr = document.querySelectorAll(".img");
 for(var i=0;i<2;i++){
    arr[i].addEventListener("click",song);
 }
 function song(){
    var audio = new Audio("./birthdaysing.mp3");
    audio.play();
}
 