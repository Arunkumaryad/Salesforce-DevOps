import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    user = ['John', 'Jane', 'Doe', 'Smith', 'Alice', 'Bob', 'Charlie'];
    fetchDetails() {
        const element = this.template.querySelector('h1');
        element.style.border = '2px solid green';
        console.log('Element:', element);
        console.log('Element Text:', element.innerText);
        const userElement = this.template.querySelectorAll('.name');
        Array.from(userElement).forEach(item => {
            console.log('line 11 users: ', item.innerText);
            item.setAttribute('title', item.innerText);
        })
        const childElement = this.template.querySelector('.name');
        childElement.innerHTML = '<p>Hey I am a Child element.</p>';
    }
}