import { LightningElement, api } from 'lwc';

export default class ChildSliderComponent extends LightningElement {
    val = 10;

    changeHandler(event) {
        this.val = event.target.value;
    }

    @api resetSlider() {
        this.val = 50;
    }
}