import { LightningElement } from 'lwc';
//standard librirary
import {createMessageContext, releaseMessageContext, publish  } from 'lightning/messageService';
// add message Channel into this js
import kasrllc from '@salesforce/messageChannel/kasrllc__c';

export default class PublisherComponent extends LightningElement {

    context=createMessageContext();

    firstName;
    lastName;

    nameChangeHandler(event){
        this.lastName=event.target.value;

    }

    textChangeHandler(event){

        this.firstName=event.target.value;
    }    
    pulishHandler(event){

        event.preventDefault();
        let payload={
            recordId:this.firstName,
            recordData: this.lastName

        };

        console.log(payload);
        publish(this.context,kasrllc,payload)
}


}