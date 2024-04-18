import './styles/style.css';
import { displayHome } from './display-home';
import { displayMenu } from './display-menu';
import { displayAbout } from './display-about';

const content = document.querySelector('#content');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

homeBtn.addEventListener('click', () => {
  content.textContent = '';
  displayHome();
})

menuBtn.addEventListener('click', () => {
  content.textContent = '';
  displayMenu();
})

aboutBtn.addEventListener('click', () => {
  content.textContent = '';
  displayAbout();
})

displayHome();