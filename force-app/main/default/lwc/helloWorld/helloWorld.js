import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Arun Kumar';
    title = 'Salesforce Developer';

    // Getters examples
    users = ['Arun', 'Aman', 'Ravi', 'Kundan', 'Ramesh'];

    num1 = 10;
    num2 = 20;

    get firstUser() {
        return this.users[0];
    }

    get sum() {
        return this.num1 + this.num2;
    }

    handleClick(event) {
        this.title = event.target.value;
    }

    @track address = {
        city: 'Chennai',
        Code: '600001',
        state: 'Tamil Nadu',
        country: 'India'
    }

    handleChange(event) {
        this.address.city = event.target.value;
    }
    
}