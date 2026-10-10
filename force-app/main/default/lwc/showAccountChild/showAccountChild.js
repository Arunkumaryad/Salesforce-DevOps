import { api, LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, unsubscribe } from 'lightning/messageService';
import Comrevo from '@salesforce/messageChannel/Comrevo__c';
import getAccountContacts from '@salesforce/apex/AccountClass.getAccountContacts';
import LightningConfirm from 'lightning/confirm';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowAccountChild extends LightningElement {

    subscription = null;

    accountId;
    accountName;

    title = 'Contacts';
    contacts = [];

    hasContacts = false;
    isAccountSelected = false;

    isAddContactClicked = false;
    isEditContactClicked = false;

    editableContactId;

    @api recordId;

    @wire(MessageContext)
    messageContext;


    connectedCallback() {
        this.handleSubscribe();
    }


    disconnectedCallback() {
        this.handleUnSubscribe();
    }


    handleSubscribe() {

        if (!this.subscription) {

            this.subscription = subscribe(
                this.messageContext,
                Comrevo,
                (message) => {

                    this.accountId = message.accountId;
                    this.accountName = message.accountName;

                    this.title = `${this.accountName}'s Contacts`;

                    this.getContacts();
                }
            );
        }
    }


    handleUnSubscribe() {

        if (this.subscription) {

            unsubscribe(this.subscription);

            this.subscription = null;
        }
    }


    async getContacts() {

        try {

            const result = await getAccountContacts({
                accountId: this.accountId
            });


            this.contacts = result;

            this.hasContacts = result.length > 0;

            this.isAccountSelected = true;


        } catch(error) {

            console.error('Fetch Contact Error:', error);

            this.showToast(
                'Error',
                error.body?.message || 'Unable to load contacts',
                'error'
            );
        }
    }



    handleContackClicked() {

        this.isAddContactClicked = true;
    }


    handleClose() {

        this.isAddContactClicked = false;
    }



    handleEditClick(event) {

        this.editableContactId =
            event.currentTarget.dataset.contactId;

        this.isEditContactClicked = true;
    }



    handleClickClose() {

        this.isEditContactClicked = false;
    }



    async handleSuccess() {

        this.isAddContactClicked = false;

        this.isEditContactClicked = false;

        await this.getContacts();
    }



    handleSave() {

        const form =
        this.template.querySelector('lightning-record-edit-form');

        if(form){
            form.submit();
        }
    }



    async handleDelete(event) {


        const contactId =
            event.currentTarget.dataset.contactId;


        if(!contactId){

            this.showToast(
                'Error',
                'Contact Id is missing',
                'error'
            );

            return;
        }



        const confirmed = await LightningConfirm.open({

            message:
            'Are you sure you want to delete this contact?',

            label:
            'Confirm Delete',

            theme:
            'warning'
        });



        if(!confirmed){

            return;
        }



        try {


            await deleteRecord(contactId);



            this.showToast(
                'Success',
                'Contact deleted successfully',
                'success'
            );



            await this.getContacts();



        } catch(error) {


            console.error(
                'Delete Contact Error:',
                JSON.stringify(error)
            );



            let message =
            'Unable to delete contact';



            if(error.body){

                if(error.body.message){

                    message = error.body.message;

                }

                else if(error.body.output?.errors?.length){

                    message =
                    error.body.output.errors[0].message;
                }
            }



            this.showToast(
                'Delete Failed',
                message,
                'error'
            );
        }
    }



    showToast(title, message, variant){

        this.dispatchEvent(

            new ShowToastEvent({

                title:title,

                message:message,

                variant:variant
            })
        );
    }

}