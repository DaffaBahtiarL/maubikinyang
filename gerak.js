    var img = document.getElementById("popcat");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("Audio.mp3");
    //gak pake sound dulu lagi benering 
    //buat komputer
img.addEventListener("mousedown", function(){
    IncreaseScore();
    img.src = "saya.png";
    Audio();
});
    
img.addEventListener("mouseup", function(){
    img.src = "kamu.png";
     Audio();
});
//buat hp
   img.addEventListener("touchstart", function(){
    IncreaseScore();
    img.src ="saya.png";
    Audio();
});
 img.addEventListener("touchend", function(){
    img.src = "kamu.png";
    audio();
});



  //mungking buat leaderboard ya bang (sunah)
  function IncreaseScore(){
           return count.innerHTML = score++
 }