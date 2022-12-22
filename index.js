import "./index.css";
import IMG from './assets/img-js.png';

console.log('Hello World!');

const titleHTML = document.createElement('h1');
titleHTML.innerText = 'I love JavaScript';
const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.alt = 'js-image';
jsImageHTML.src = IMG;
document.body.append(titleHTML, jsImageHTML);