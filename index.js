console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let playPause = document.getElementById("playPause");
let myProgressBar = document.getElementById("myProgressBar");
let profile = document.getElementById("coverProfile");
let title = document.getElementById("songName");

let titleName = Array.from(document.getElementsByClassName("titleName"));
let albumList = Array.from(document.getElementsByClassName("albumList"));
let songAddedBy = Array.from(document.getElementsByClassName("songAddedBy"));
let songs = [
  {
    filePath: " songs/1.mp3",
    songName: "Baarishein",
    coverPath: "covers/1.png",
  },
  {
    filePath: "songs/2.mp3",
    songName: "Haaye Oye",
    coverPath: "covers/2.jpg",
  },
  {
    filePath: "songs/3.mp3",
    songName: "Ishq Mubarak",
    coverPath: "covers/3.png",
  },
  {
    filePath: "songs/4.mp3",
    songName: "Ishqan De Lekhe 2",
    coverPath: "covers/4.png",
  },
  {
    filePath: " songs/5.mp3",
    songName: "Meri Kamzori",
    coverPath: "covers/5.png",
  },
  {
    filePath: "songs/6.mp3",
    songName: "Naino Ki To Baat Naina Jane Hai",
    coverPath: "covers/6.png",
  },
  {
    filePath: "songs/7.mp3",
    songName: "Tenu Na Bol Pawaan",
    coverPath: "covers/7.png",
  },
  {
    filePath: "songs/8.mp3",
    songName: "Tu Aa Jaana",
    coverPath: "covers/8.png",
  },
  {
    filePath: "songs/10.mp3",
    songName: "Zakhmi Dil",
    coverPath: "covers/9.jfif",
  },
  {
    filePath: "songs/10.mp3",
    songName: "Zaroorat 2.0",
    coverPath: "covers/10.png",
  },
];

// audioElement.play();

//handeling play/pause button
playPause.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playPause.src = "pause-circle.svg";
  } else {
    audioElement.pause();
    playPause.src = "play-circle.svg";
  }
});

//Updating real time progressBar for every songs

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

//for previous songs

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  profile.src = songs[songIndex].coverPath;
  audioElement.play();
  audioElement.currentTime = 0;
  playPause.src = "pause-circle.svg";
  title.innerText = songs[songIndex].songName;
});

//For Next Songs

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  profile.src = songs[songIndex].coverPath;
  audioElement.play();
  audioElement.currentTime = 0;
  playPause.src = "pause-circle.svg";
  title.innerText = songs[songIndex].songName;
});

// Hadeling Onclick timeStamp and Updating real time progressBar for every songs
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
  if (progress == 100) {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    songName.innerText = songs[songIndex].songName;
    profile.src = songs[songIndex].coverPath;
    miniArtistName.innerText = songs[songIndex].artist;
    audioElement.play();
    audioElement.currentTime = 0;
    playPause.src = "pause-circle.svg";
    title.innerText = songs[songIndex].songName;
  }
});
