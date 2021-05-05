import { LightningElement, api} from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api videoUrl;

    @api
    get isPlaying() {
        const player =this.template.querySelector ('video');
        console.log('player--'+player);
        return player !==null && player.paused==false;
    }

    @api
    play() {
        console.log('--player--');
        const player = this.template.querySelector('video');
        
        //the player might not be in the DOM just yet
        if(player) {
            player.play();
        }
    }

    @api
    pause() {
        const player = this.template.querySelector('video');
        console.log('--player--'+player);
        if(player){
            player.pause();
        }
    }

    get videoType() {
        return 'video/' +this.videoUrl.split('.').pop();
    }
}