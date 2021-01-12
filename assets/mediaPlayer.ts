class mediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.__initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'Relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }




  private __initPlugins() {
    
    this.plugins.forEach(plugins => {
      plugins.run(this);
    });

  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    const btn = document.getElementById('playButton');
    if (this.media.paused) {
      this.play();
      btn.innerHTML = "||";
    } else {
      this.pause();
      btn.innerHTML = "|>";
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    const btn = document.getElementById('unMute');
    if (this.media.muted) {
      this.unmute();
      btn.innerHTML = "mute";
    } else {
      this.mute();
      btn.innerHTML = "Unmute";
    }

  }
}


export default mediaPlayer;