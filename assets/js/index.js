'use strict'

import { muteActions, reproductionActions } from './handlers/video-btns.handles.js';

import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/autoPlay.js';
import AutoPause from './plugins/autoPause.js';

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
