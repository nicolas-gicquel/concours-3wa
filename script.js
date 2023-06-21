var overlay = document.getElementById("overlay");


function hideOverlay() {
    overlay.style.display = "none";
}


overlay.addEventListener("click", hideOverlay);

var audio = new Audio();


audio.src = "chanson.mp3";


function playSound() {
    audio.play();
}


var playButton = document.getElementById("overlay");
playButton.addEventListener("click", playSound);

var studentBlocks = document.querySelectorAll('.student-block');
var blocPhoto = document.getElementById('bloc');


studentBlocks.forEach(function(studentBlock) {
    blocPhoto.addEventListener('mouseover', function() {

        studentBlock.style.visibility = 'hidden';
    });

    blocPhoto.addEventListener('mouseout', function() {

        studentBlock.style.visibility = 'visible';
    });
});