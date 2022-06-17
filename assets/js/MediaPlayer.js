class MediaPlayer {
  #_media;
  constructor(mediaElement) {
    this._media = mediaElement;
  }

  isPaused() {
    return this._media.paused;
  }

  pause() {
    this._media.pause();
  }

  play() {
    this._media.play();
  }
}

export default MediaPlayer;