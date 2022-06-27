class AutoPlay {

  constructor(){}

  run( mediaElement ){
    mediaElement.mute();
    mediaElement.play();
  }
}

export default AutoPlay;