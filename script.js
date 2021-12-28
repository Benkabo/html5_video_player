// Select HTML5 video
const video = document.getElementById("#video");

// Set pause button to display :none by default
document.querySelector(".fa-pause").style.display = "none";

// Update progress bar
video.addEventListener("timeupdate", () => {
  let curr = (video.currentTime / video.duration) * 100;
  if (video.ended) {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
  }
  document.querySelector(".inner").style.display = `${curr}%`;
});

// pause or play the video
const play = (e) => {
    // Condition when to play the video
  if (video.paused) {
    document.querySelector(".fa-play").style.display = "none";
    document.querySelector(".fa-pause").style.display = "block";
    video.play();
  } else {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
    video.pause()
  }
};

// trigger fullscreen
const fullScreen = (e) => {
  e.preventDefault();
  video.requestFullscreen();
};

// download the video
const download = (event) => {
  event.preventDefault();
  let a = document.createElement("a");
  a.href = video.src;
  a.target = "_blank";
  a.download = "";
  document.body.appendChild(a);
  a.click();
};

// rewind the current time
const rewind = (event) => {
  video.currentTime = video.currentTime - (video.duration / 100) * 5;
};

// forward the current time
const forward = (event) => {
  video.currentTime = video.currentTime + (video.duration / 100) * 5;
};
