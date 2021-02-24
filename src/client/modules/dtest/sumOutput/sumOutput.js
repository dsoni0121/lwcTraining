import {LightningElement} from 'lwc'

export default class SumOutput extends LightningElement {
    out;
    displaysum(event){
        console.log(event);
        this.out=event.detail.value;
    }

}