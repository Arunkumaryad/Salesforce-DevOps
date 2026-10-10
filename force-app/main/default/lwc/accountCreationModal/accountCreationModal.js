import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountCreationModal extends NavigationMixin(LightningElement) {

    // Modal opens automatically
    showModal = true;

    handleCancel() {
        this.showModal = false;
    }

    handleSuccess(event) {
        const recordId = event.detail.id;

        console.log('Account Created: ' + recordId);

        // Close modal
        this.showModal = false;

        // Navigate to newly created Account
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}