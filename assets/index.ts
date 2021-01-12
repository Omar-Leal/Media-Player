import mediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/ads';


const video = document.querySelector('video');    

    const player = new mediaPlayer({ el: video, 
        plugins: [ 
            new AutoPlay(),
            new AutoPause(), 
            new Ads(),        
        ]    
    });

    const button = document.querySelector('button'); 
    const unMute = document.getElementById('unMute');
    button.onclick = () => player.togglePlay();
    unMute.onclick = () => player.toggleMute();


    // if('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('../sw.js').catch(error => {
    //         console.log(error.message);
    //     });
    // }
     
