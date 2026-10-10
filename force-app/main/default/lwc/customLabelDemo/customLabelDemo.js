import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.customLabelOne';
import DESCRIPTION_TWO from '@salesforce/label/c.customLabelTwo';


export default class CustomLabelDemo extends LightningElement {
    LABEL = {
        descriptionOne: DESCRIPTION_ONE,
        descriptionTwo: DESCRIPTION_TWO
    }
}