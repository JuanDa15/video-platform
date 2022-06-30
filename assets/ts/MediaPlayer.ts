import { muteActions, reproductionActions } from './handlers/video-btns.handles';

class MediaPlayer {
  media: HTMLMediaElement;
  plugins: any[];
  constructor(mediaElement: HTMLMediaElement, plugins: any[]) {
    this.media = mediaElement;
    this.plugins = plugins || [];

    this._initPlugins();
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
  
  private _initPlugins(){
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