import {LightningElement} from 'lwc'

export default class SumValue extends LightningElement {
    val1;
    val2;
    val3;
    input1(event){
        this.val1=event.target.value;
    }
    input2(event){
        this.val2=event.target.value;
    }
    sumvalue(event){
        this.val3=(this.val1*1)+(this.val2*1);
        console.log(this.val3);
        var parsedInfo={
            detail:{
                value:this.val3,
                msg:"Sum of Value"
            }
        };
        var sumevent=new CustomEvent("res",parsedInfo);
        this.dispatchEvent(sumevent);
    }

    mulvalue(event){
        this.val3=(this.val1*1)*(this.val2*1);
        console.log(this.val3);
        var parsedInfo={
            detail:{
                value:this.val3,
                msg:"Mul. of value. "
            }
        };
        var mulevent=new CustomEvent("res",parsedInfo);
        this.dispatchEvent(mulevent);
    }

    divvalue(event){
        this.val3=(this.val1*1)/(this.val2*1);
        console.log(this.val3);
        var parsedInfo={
            detail:{
                value:this.val3,
                msg:"Div. of value. "
            }
        };
        var divevent=new CustomEvent("res",parsedInfo);
        this.dispatchEvent(divevent);
    }

    minvalue(event){
        this.val3=(this.val1*1)-(this.val2*1);
        console.log(this.val3);
        var parsedInfo={
            detail:{
                value:this.val3,
                msg:"Min. of value. "
            }
        };
        var minevent=new CustomEvent("res",parsedInfo);
        this.dispatchEvent(minevent);
    }

}