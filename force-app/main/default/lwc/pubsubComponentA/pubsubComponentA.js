import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubComponentA extends LightningElement {
    message;

    handleKeyUp(event) {
        this.message = event.target.value;
    }

    handleClick(event) {
        pubsub.publish('componentA', this.message);
    }
}