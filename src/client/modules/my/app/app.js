import { LightningElement } from 'lwc';

export default class App extends LightningElement {
     vin="unknown";
     displaybutton=true;
    makeserverCall() {
        var that=this;
        var xhttp=new XMLHttpRequest();
        xhttp.open("GET","https://randomvin.com/getvin.php?type=real",true); 
        xhttp.onreadystatechange=function(){
            if(this.readyState==4){
                that.vin=this.responseText;
                that.displaybutton=false;
            }
        };
        xhttp.send();
    
    }
}
