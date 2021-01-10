import mediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';


const video = document.querySelector('video');    

    const player = new mediaPlayer({ el: video, 
        plugins: [ 
            new AutoPlay(),
            new AutoPause()        
        ]    
    });

    const button = document.querySelector('button'); 
    const unMute = document.getElementById('unMute');
    button.onclick = () => player.togglePlay();
    unMute.onclick = () => player.toggleMute();

     
