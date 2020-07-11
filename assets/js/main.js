
var songs = ["assets/songs/s1.mp3", "assets/songs/s2.mp3",
"assets/songs/s3.mp3", "assets/songs/s4.mp3"];

var poster = ["assets/images/1.jpg", "assets/images/2.jpg",
"assets/images/3.jpg", "assets/images/4.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;

window.onload = playSong;

function playSong() {

song.src = songs[currentSong];

songTitle.textContent = songs[currentSong];

song.play();
}

function playOrPauseSong() {

if (song.paused) {
	song.play();
	$("#play img").attr("src", "assets/images/Pause.png");
}
else {
	song.pause();
	$("#play img").attr("src", "assets/images/Play.png");
}
}

song.addEventListener('timeupdate', function () {

var position = song.currentTime / song.duration;

fillBar.style.width = position * 100 + '%';
});


function next() {

currentSong++;
if (currentSong > 3) {
	currentSong = 0;
}
playSong();
$("#play img").attr("src", "assets/images/Pause.png");
$("#image img").attr("src", poster[currentSong]);
$("#music-bg img").attr("src", poster[currentSong]);
}

function pre() {

currentSong--;
if (currentSong < 0) {
	currentSong = 3;
}
playSong();
$("#play img").attr("src", "assets/images/Pause.png");
$("#image img").attr("src", poster[currentSong]);
$("#music-bg img").attr("src", poster[currentSong]);
}

