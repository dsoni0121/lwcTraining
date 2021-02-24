import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    name = 'World';

    handleInput(event) {
        this.name = event.target.value;
    }
}