import { LightningElement } from 'lwc';

export default class AccountChild1 extends LightningElement {
    searchTerm;
    
    handleChange(event) {
        console.log('line 7 handleChanges inside accountChild1 called');
        this.searchTerm = event.target.value;
    }

    handleClick(event) {
        console.log('line 12 handleClick inside accountChild1 called');
        const searchEvent = new CustomEvent('getsearchevent', {detail: this.searchTerm});
        this.dispatchEvent(searchEvent);
    }
}