import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {

    handleSlotChange() {
        const slotElement = this.template.querySelector('.slds-modal__footer');
        if(slotElement) {
            slotElement.classList.remove('slds-hide');
        }
    }
}