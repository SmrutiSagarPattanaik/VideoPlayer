const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play & pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// update the play icon to pause icon and vice versa.
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause"></i>'
    }
}

function updateProgress() {
    progress.value = (video.currentTime/video.duration) * 100;

    // get minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    // get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML =`${mins}:${secs}`;
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}
 
// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change',setVideoProgress);


