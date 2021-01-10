function AutoPlay(){}

AutoPlay.prototype.run = function (player) {
  if(!player.muted){
    player.muted = true;
  }
  player.play();
  const btn = document.getElementById('playButton');
   btn.innerHTML = "||";
}



export default AutoPlay;