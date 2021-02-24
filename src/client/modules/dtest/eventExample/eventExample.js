import {LightningElement} from 'lwc'

export default class EventExample extends LightningElement {
    
    selectitem(event){
        console.log(event.target.value);
    }
    connectedCallback(){
        console.log("connected",this.template.querySelector("select"));
    }
    renderedCallback(){
        console.log("rendered",this.template.querySelector("select"));
        var selectElement=this.template.querySelector("select");
        var optionsArrray=Array.prototype.slice.call(selectElement.children);
        console.log(selectElement.children);
        optionsArrray.forEach(
            function(eachElement){
                console.log(eachElement.value);
                if(eachElement.value=="B"){
                    eachElement.setAttribute("selected","selected");
                }
            }
        );
    }
}