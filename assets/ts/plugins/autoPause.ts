import MediaPlayer from "../MediaPlayer";

class AutoPause {

  private _threshold: number;
  private _playerInstance: MediaPlayer;
  
  constructor(){
    this._threshold = 0.25;
    this._handleIntersection = this._handleIntersection.bind( this );
    this._handleVisibility = this._handleVisibility.bind( this );
  }
  
  get threshold(){
    return this._threshold;
  }
    
  
  public run( mediaElement: MediaPlayer ): void{
    const observer: IntersectionObserver = 
      new IntersectionObserver(this._handleIntersection, { threshold: this.threshold });
    this._playerInstance = mediaElement;

    observer.observe( this._playerInstance.mediaElement );

    document.addEventListener("visibilitychange", this._handleVisibility);
  }

  private _handleVisibility(){
   const isVisible: boolean = document.visibilityState === "visible";

   (isVisible) ? 
    this._playerInstance.play():
    this._playerInstance.pause();
  }

  private _handleIntersection(entries: IntersectionObserverEntry[]): void {
    const entry: IntersectionObserverEntry = entries[0];

    const isVisible: boolean = entry.intersectionRatio >= this.threshold;

    (isVisible) ?
      this._playerInstance.play():
      this._playerInstance.pause();
  }
}

export default AutoPause;