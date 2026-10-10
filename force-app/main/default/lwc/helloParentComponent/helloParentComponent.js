import { LightningElement } from 'lwc';

export default class HelloParentComponent extends LightningElement {
    percentage = 10;

    handleChange(event) {
        this.percentage = event.target.value;
    }

    handleClick(event) {
        this.template.querySelector('c-child-slider-component').resetSlider();
    }
}