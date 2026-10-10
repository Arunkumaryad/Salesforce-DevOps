import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false;
    constructor() {
        super();
        console.log('Parent Constructor Called');
    }
    connectedCallback() {
        console.log('Parent ConnectedCallback Called');
    }
    renderedCallback() {
        console.log('Parent renderedCallback Called');
    }
    handleclick(event) {
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }
}