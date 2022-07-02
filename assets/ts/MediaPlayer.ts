import { muteActions, reproductionActions } from './handlers/video-btns.handles';

class MediaPlayer {
  media: HTMLMediaElement;
  plugins: any[];
  container: HTMLDivElement;
  constructor(mediaElement: HTMLMediaElement, plugins: any[]) {
    this.media = mediaElement;
    this.plugins = plugins || [];
    this._initPlayer();
    this._initPlugins();
  }

  private _initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode?.insertBefore(this.container,this.media);
    this.container.appendChild(this.media);
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