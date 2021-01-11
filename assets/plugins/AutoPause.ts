import mediaPlayer from "../mediaPlayer";

class AutoPause {
private threshold: number;
player: mediaPlayer;

  constructor(){
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handlerVisibilitChange = this.handlerVisibilitChange.bind(this);
  }
  
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handlerVisibilitChange)
    
  }


  private handlerIntersection(entries: IntersectionObserverEntry[]){
    const entry = entries[0];

   const isVisible = entry.intersectionRatio >= this.threshold;

   if(isVisible) {
     this.player.play();
   } else {
     this.player.pause();
   }  


   

  }

  private handlerVisibilitChange() {
    const isVisible = document.visibilityState === "visible";
    if(isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }

    
  }

  
}




export default AutoPause; 