import { LightningElement } from 'lwc';

export default class AccountParent extends LightningElement {
    searchParentTerm = '';

    handleEvent(event) {
        console.log('line 7 handleEvent in accountParent Called.');
        this.searchParentTerm = event.detail;
    }
}