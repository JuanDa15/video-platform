import { muteActions, reproductionActions } from './handlers/video-btns.handles';

class MediaPlayer {
  media;
  plugins;
  constructor(mediaElement, plugins) {
    this.media = mediaElement;
    this.plugins = plugins || [];

    this.initPlugins();
  }
  get mediaElement() {
    return this.media;
  }

  get isPaused() {
    return this.media.paused;
  }

  get isMuted() {
    return this.media.muted;
  }
  
  initPlugins(){
    this.plugins.forEach( plugin => {
      plugin.run( this );
    });
  }

  pause() {
    this.media.pause();
    reproductionActions('pause');
  }

  play() {
    this.media.play();
    reproductionActions('play');
  }

  mute() {
    this.media.muted = true;
    muteActions('mute');
  }

  unmute() {
    this.media.muted = false;
    muteActions('unmute');
  }
}

export default MediaPlayer;