import mediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');    

    const player = new mediaPlayer({ el: video, plugins: [new AutoPlay()] });
    const muter = new mediaPlayer({ el: video});
   
    const button = document.querySelector('button'); 
    const unMute = document.getElementById('unMute');
    button.onclick = () => player.togglePlay();
    unMute.onclick = () => player.toggleMute();

     
