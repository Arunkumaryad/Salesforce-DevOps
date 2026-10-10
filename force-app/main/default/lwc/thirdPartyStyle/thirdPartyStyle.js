import { LightningElement } from 'lwc';
import ANIMATE from '@salesforce/resourceUrl/animate';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ThirdPartyStyle extends LightningElement {
    renderedCallback() {
        loadStyle(this, ANIMATE + '/animate/animate.min.css')
        .then(() => {
            //success
            console.log('Style loaded successfully');
        }).catch(error => {
            console.error(error);
        })
    }
}