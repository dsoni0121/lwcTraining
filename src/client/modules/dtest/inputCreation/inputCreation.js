import{LightningElement} from 'lwc';

export default class InputCreation extends LightningElement {
     a=5;
     b=20;
     c;
     populatea(event){
        this.a=event.target.value;
     }
     populateb(event){
        this.b=event.target.value;
     }

     sumvalue() {
         this.c=(this.a*1)+this.b;
     }
}
