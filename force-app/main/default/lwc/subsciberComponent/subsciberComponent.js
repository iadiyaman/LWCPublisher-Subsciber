import { LightningElement } from 'lwc';

//standar library
import {createMessageContext, 
        releaseMessageContext,
        APPLICATION_SCOPE,
        subscribe,
        unsubscribe  } from 'lightning/messageService';

import kasrllc from '@salesforce/messageChannel/kasrllc__c';

export default class SubsciberComponent extends LightningElement {

    recievedMessage;
    secondMessage;
    context=createMessageContext();
    subscription=null;

        connectedCallback(){
            this.subscribeMC();

        }

        subscribeMC(){
            if (!this.subscription) {
                this.subscription=subscribe(
                    this.context,kasrllc,(message)=>{
                        this.handleMessage(message);
                    },{scope:APPLICATION_SCOPE}
                );
            }
        }

        handleMessage(message){

            console.log('-------');
            console.log(message);
            console.log('-------');

                // (doğru ise) = ? (yanlış ise) : 
            this.recievedMessage = message ? 'first Name : '+ message.recordId : 'There is no message!!!';
            this.secondMessage = message ? 'Last Name : ' + message.recordData : 'There is no message!!!';

            
        }


}