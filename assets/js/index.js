'use strict'

import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/autoPlay';
import AutoPause from './plugins/autoPause';

const video = document.querySelector("#video");
const playBtn = document.querySelector("#play-btn");
const muteBtn = document.querySelector("#mute-btn");

const autoPlayPlugin = new AutoPlay();
const autoPausePlugin = new AutoPause();

const player = new MediaPlayer( video, [ autoPlayPlugin, autoPausePlugin ] );

playBtn.addEventListener("click", () => {
  (player.isPaused) ?
    player.play():
    player.pause();
});

muteBtn.addEventListener("click", () => {
  (player.isMuted) ?
    player.unmute():
    player.mute();
});

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => console.log(new Error(error)))
}
