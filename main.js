var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

// icon.onclick = function(){
//     if(mySong.paused){
//         mySong.play();
//         icon.src = "images/pause-button.png";
//     }else{
//         mySong.pause();
//         icon.src = "images/play-button.png";
//     }
// }

function playMusic(){
    if(mySong.paused){
        mySong.play();
        icon.src = "images/pause-button.png";
        console.log("music is plyaing")
    }else{
        mySong.pause();
        icon.src = "images/play-button.png";
        console.log("music is paused")
    }
}    
//Add Event Listener
icon.addEventListener("click", playMusic)