import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    name;
    handleClick() {
        this.isVisible = true;
    }

    handleNameChange(event) {
        this.name = event.target.value;
    }

    get handleName() {
        return this.name === 'hello';
    }
}