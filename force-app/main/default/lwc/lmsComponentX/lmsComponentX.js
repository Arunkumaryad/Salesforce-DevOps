import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    @wire(MessageContext)
    context;
    receivedMessage;
    subscription;

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => 
            {this.handleMessage(message);},{scope: APPLICATION_SCOPE});
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'No Message Published';
    }

    unsubscribeMessage() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}