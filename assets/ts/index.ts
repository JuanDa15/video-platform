import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/autoPlay';
import AutoPause from './plugins/autoPause';

const video: HTMLMediaElement | null = document.querySelector("#video");
const playBtn: Element | null = document.querySelector("#play-btn");
const muteBtn: Element | null = document.querySelector("#mute-btn");

const autoPlayPlugin: AutoPlay = new AutoPlay();
const autoPausePlugin: AutoPause = new AutoPause();

const player = new MediaPlayer( video!, [ autoPlayPlugin, autoPausePlugin ] );

playBtn?.addEventListener("click", () => {
  (player.isPaused) ?
    player.play():
    player.pause();
});

muteBtn?.addEventListener("click", () => {
  (player.isMuted) ?
    player.unmute():
    player.mute();
});

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => console.log(new Error(error)))
}
