import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    hasbody = false;
    hasActions = false;
    hasFooter = false;

    handleBodyChange(event) {
        this.hasbody = event.target.assignedElements.length > 0;
    }

    handleActionsChange(event) {
        this.hasActions = event.target.assignedElements.length > 0;
    }

    handleFooterChange(event) {
        this.hasFooter = event.target.assignedElements.length > 0;
    }

    get bodyClass() {
        return this.hasBody
            ? 'slds-card__body slds-card__body_inner'
            : 'slds-hide';
    }

    get actionsClass() {
        return this.hasActions
            ? 'slds-no-flex'
            : 'slds-hide';
    }

    get footerClass() {
        
        return this.hasFooter
            ? 'slds-card__footer'
            : 'slds-hide';
    }
}