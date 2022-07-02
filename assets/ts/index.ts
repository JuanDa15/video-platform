import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/autoPlay';
import AutoPause from './plugins/autoPause';
import AdsPlugin from './plugins/ads/index';

const video: HTMLMediaElement | null = document.querySelector("#video");
const playBtn: Element | null = document.querySelector("#play-btn");
const muteBtn: Element | null = document.querySelector("#mute-btn");


const player = new MediaPlayer( video!, [ new AutoPlay(), new AutoPause(), new AdsPlugin() ] );

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
