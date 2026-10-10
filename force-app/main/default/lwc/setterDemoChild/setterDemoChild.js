import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail;
    @api get details() {
        return this.userDetail;
    }

    set details(data) {
        let newAge = data.age*4;
        this.userDetail = { ...data, age: newAge, "location": "Gaur City Mall Noida" };
    }
}