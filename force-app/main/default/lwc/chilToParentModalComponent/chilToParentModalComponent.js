import { LightningElement } from 'lwc';

export default class ChilToParentModalComponent extends LightningElement {
    handleClick(event) {
        const myEvent = new CustomEvent('close', {
            bubbles: true,
            detail: "Modal Closed Successfully!!."
        });
        this.dispatchEvent(myEvent);
    }

    footerHandler(event) {
        console.log('Footer button clicked');
    }
}