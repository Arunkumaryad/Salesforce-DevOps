import { LightningElement } from 'lwc';

export default class ChildToParentComponent extends LightningElement {
    showModal = false;
    msg;

    handleClick(event) {
        this.showModal = true;
    }

    handleClose(event) {
        console.log('Handle close event Called.');
        this.msg = event.detail;
        this.showModal = false;
    }
}