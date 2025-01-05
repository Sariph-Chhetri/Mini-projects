let song = document.getElementById("song");
let progress = document.getElementById("progress"); // Use getElementById
let playIcon = document.getElementById("playIcon");
let interval;

song.onloadedmetadata = function() {
    progress.max = song.duration; // Set the max value of the progress bar
};

function playPause() {
    if (playIcon.classList.contains("fa-pause")) {
        song.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        clearInterval(interval); // Stop updating the progress bar when paused
    } else {
        song.play().then(() => {
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
            interval = setInterval(() => { 
                progress.value = song.currentTime;
                progress.max = song.duration;
            }, 500);
        }).catch((error) => {
            console.error('Error trying to play the song:', error);
        });
    }
}

progress.addEventListener('input', function() {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play().then(() => {
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
        }).catch((error) => {
            console.error('Error trying to play the song:', error);
        });
    }
});

// Optional: Handle the end of the song
song.addEventListener('ended', function() {
    clearInterval(interval);
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
});
