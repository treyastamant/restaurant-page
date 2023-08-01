import loadLanding from './landing.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

loadLanding();


const nav = document.querySelectorAll('li');
nav[0].addEventListener('click', loadLanding);
nav[1].addEventListener('click', loadMenu);
nav[2].addEventListener('click', loadContact);


