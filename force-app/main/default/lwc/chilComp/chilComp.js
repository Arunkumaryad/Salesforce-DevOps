import { LightningElement, api } from 'lwc';

export default class ChilComp extends LightningElement {
    @api message;
    @api cardHeading;
    @api number;
    @api isValid;
}