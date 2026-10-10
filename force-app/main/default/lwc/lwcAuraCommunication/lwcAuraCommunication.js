import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;

    handleAura() {
        const event = new CustomEvent('sendMsg', {
            detail: {
                "msg": "Hello From LWC"
            }
        })
        this.dispatchEvent(event);
    }
}