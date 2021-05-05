import { LightningElement } from 'lwc';

export default class MethodCaller extends LightningElement {
    video = "https://www.w3schools.com/tags/movie.mp4";

    handlePlay() {
        
        this.template.querySelector('dtest-video-player').play();
    }
    
    handlePause() {
        this.template.querySelector('dtest-video-player').pause();
    }
}