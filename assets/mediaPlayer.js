function mediaPlayer(config){
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.__initPlugins();
}

mediaPlayer.prototype.__initPlugins = function() {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted(){
      return this.media.muted;
    },

    set muted(value){
      this.media.muted = value;
    }
  };

   

  this.plugins.forEach(plugins => {
    plugins.run(player)
  }) 

}

mediaPlayer.prototype.play = function(){
  this.media.play();
}

mediaPlayer.prototype.pause = function (){
 this.media.pause();
}

mediaPlayer.prototype.togglePlay = function() {
  const btn = document.getElementById('playButton');
  if(this.media.paused){
    this.play();
    btn.innerHTML = "||";    
  } else {
    this.pause();
    btn.innerHTML = "|>";
  }
}

mediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}


mediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
}

mediaPlayer.prototype.toggleMute = function() {
  const btn = document.getElementById('unMute');
  if(this.media.muted){
    this.unmute();
    btn.innerHTML = "mute";
  } else {
    this.mute();
    btn.innerHTML = "Unmute";
  }
  
}







export default mediaPlayer;