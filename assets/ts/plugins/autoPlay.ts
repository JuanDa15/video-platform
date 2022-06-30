import MediaPlayer from "../MediaPlayer";

class AutoPlay {

  constructor(){}

  run( mediaElement: MediaPlayer ){
    mediaElement.mute();
    mediaElement.play();
  }
}

export default AutoPlay;