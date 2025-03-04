'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Aaj Ki Raat",
    album: "Stree 2",
    year: 2024,
    artist: "Madhubanti Bagchi × Divya Kumar",
    musicPath: "./assets/music/Aaj Ki Raat.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Jhumka",
    album: "Jhumka",
    year: 2023,
    artist: "Muza × Xefer",
    musicPath: "./assets/music/Jhumka.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Dilbar",
    album: "Satyameva Jayate",
    year: 2018,
    artist: "Dhvani Bhanushali × Neha Kakkar × Ikka Singh",
    musicPath: "./assets/music/Dilbar.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Chuttamalle",
    album: "Chuttamalle",
    year: 2017,
    artist: "Anurag Kulkarni × Ramya Behara",
    musicPath: "./assets/music/Chuttamalle.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Hookah Bar",
    album: "Khiladi 786",
    year: 2012,
    artist: "Himesh Reshammiya × Vineet Singh × Aman Trikha",
    musicPath: "./assets/music/Hookah Bar.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Laila Main Laila",
    album: "Raees",
    year: 2017,
    artist: "Pawni Pandey",
    musicPath: "./assets/music/Laila Main Laila.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Abhi Toh Party Shuru Hui Hai",
    album: "Khoobsurat",
    year: 2014,
    artist: "Badshah × Aastha Gill",
    musicPath: "./assets/music/Abhi Toh Party Shuru Hui Hai.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Achacho",
    album: "Achacho",
    year: 2009,
    artist: "Devan Ekambaram × Harini",
    musicPath: "./assets/music/Achacho.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Angaaron",
    album: "Angaaron",
    year: 2018,
    artist: "Ankit Tiwari",
    musicPath: "./assets/music/Angaaron.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Beni Khuley",
    album: "Beni Khuley",
    year: 2015,
    artist: "Nancy × Bappa Mazumder",
    musicPath: "./assets/music/Beni Khuley.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Chammak Challo",
    album: "Ra.One",
    year: 2011,
    artist: "Akon × Hamsika Iyer",
    musicPath: "./assets/music/Chammak Challo.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Chikni Chameli",
    album: "Agneepath",
    year: 2012,
    artist: "Shreya Ghoshal",
    musicPath: "./assets/music/Chikni Chameli.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Doyal Tor Laiga Re",
    album: "Doyal Tor Laiga Re",
    year: 2019,
    artist: "Imran Mahmudul × Porshi",
    musicPath: "./assets/music/Doyal Tor Laiga Re.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Kala Chashma",
    album: "Baar Baar Dekho",
    year: 2016,
    artist: "Amar Arshi × Badshah × Neha Kakkar",
    musicPath: "./assets/music/Kala Chashma.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Mere Mehboob",
    album: "Mere Mehboob",
    year: 1963,
    artist: "Mohammed Rafi",
    musicPath: "./assets/music/Mere Mehboob.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Millionaire",
    album: "Millionaire",
    year: 2018,
    artist: "Cash Cash × Digital Farm Animals × Nelly",
    musicPath: "./assets/music/Millionaire.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "O Saki Saki",
    album: "Batla House",
    year: 2019,
    artist: "Neha Kakkar × Tulsi Kumar × B Praak",
    musicPath: "./assets/music/O Saki Saki.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Sheila Ki Jawaani",
    album: "Tees Maar Khan",
    year: 2010,
    artist: "Sunidhi Chauhan × Vishal Dadlani",
    musicPath: "./assets/music/Sheila Ki Jawaani.mp3",
  },
  {
    backgroundImage: "./assets/images/bg.png",
    posterUrl: "./assets/images/bg.png",
    title: "Teri Baaton Mein",
    album: "Teri Baaton Mein",
    year: 2021,
    artist: "Stebin Ben × Shreya Ghoshal",
    musicPath: "./assets/music/Teri Baaton Mein.mp3",
  }
];




/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);