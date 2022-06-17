'use strict'

import MediaPlayer from './MediaPlayer.js';


const video = document.querySelector("#video");
const playBtn = document.querySelector("#play-btn");



const player = new MediaPlayer( video );

playBtn.addEventListener("click", () => {
  (player.isPaused()) ? player.play() : player.pause();
})