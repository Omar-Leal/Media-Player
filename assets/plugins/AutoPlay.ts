import mediaPlayer from "../mediaPlayer";

class AutoPlay {
  constructor() { }

  run(player: mediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }

    player.play();
    const btn = document.getElementById('playButton');
    btn.innerHTML = "||";

  }
}

export default AutoPlay;