import {LightningElement} from 'lwc'

export default class SumValue extends LightningElement {
    a;
    b;
    c;
    inputA(event){
        this.a=event.target.value;
    }
    inputB(event){
        this.b=event.target.value;
    }
    sumvalue(event){
        this.c=(this.a*1)+(this.b*1);
        console.log(this.c);
        var parsedInfo={
            detail:{
                value:this.c,
                msg:"test"
            }
        };
        var sumevent=new CustomEvent("sum",parsedInfo);
        this.dispatchEvent(sumevent);
    }
}