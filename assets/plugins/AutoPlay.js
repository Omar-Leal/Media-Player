function AutoPlay(){}

AutoPlay.prototype.run = function (player) {
  player.mute();
  player.play();
  const btn = document.getElementById('playButton');
   btn.innerHTML = "||";
}



export default AutoPlay;