import { muteActions, reproductionActions } from './handlers/video-btns.handles.js';

class MediaPlayer {
  #_media;
  #_plugins;
  constructor(mediaElement, plugins) {
    this.#_media = mediaElement;
    this.#_plugins = plugins || [];

    this.#_initPlugins();
  }
  get mediaElement() {
    return this.#_media;
  }

  get isPaused() {
    return this.#_media.paused;
  }

  get isMuted() {
    return this.#_media.muted;
  }
  
  #_initPlugins(){
    this.#_plugins.forEach( plugin => {
      plugin.run( this );
    });
  }

  pause() {
    this.#_media.pause();
    reproductionActions('pause');
  }

  play() {
    this.#_media.play();
    reproductionActions('play');
  }

  mute() {
    this.#_media.muted = true;
    muteActions('mute');
  }

  unmute() {
    this.#_media.muted = false;
    muteActions('unmute');
  }
}

export default MediaPlayer;