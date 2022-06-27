class AutoPause {

  #_threshold;
  
  constructor(){
    this.#_threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind( this );
    this.handleVisibility = this.handleVisibility.bind( this );
  }
  
  get threshold(){
    return this.#_threshold;
  }
    
  
  run( mediaElement ){
    const observer = 
      new IntersectionObserver(this.handleIntersection, { threshold: this.threshold });
    this.playerInstance = mediaElement;

    observer.observe( this.playerInstance.mediaElement );

    document.addEventListener("visibilitychange", this.handleVisibility);
  }

  handleVisibility(){
   const isVisible = document.visibilityState === "visible";

   (isVisible) ? 
    this.playerInstance.play():
    this.playerInstance.pause();
  }

  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    (isVisible) ?
      this.playerInstance.play():
      this.playerInstance.pause();
  }
}

export default AutoPause;