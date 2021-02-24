import {LightningElement} from 'lwc'

export default class Container extends LightningElement {
    result;
    displayresult(event){
        console.log(event);
        this.result=event.detail.value;
    }
    
}