import './styles/style.css'
import homeBackground from './assets/home-background.jpg'

//Home Background
const homeBody = document.querySelector('body');
homeBody.style.backgroundImage = `url(${homeBackground})`;
homeBody.style.backgroundSize = 'cover';

//Home Contents
const content = document.querySelector('#content');

const mainHeading = document.createElement('div');
mainHeading.textContent = 'Welcome to Burger Queen!';

const mainDescription = document.createElement('div');
mainDescription.textContent = 'Most juicy burger in town that will make you shake';

const openHours = document.createElement('div');
openHours.textContent = 'Open Hours: 8am to 6pm';

content.append(mainHeading, mainDescription, openHours);

mainHeading.style.fontFamily = "Lobster", sans-serif;
mainDescription.style.fontFamily = "Roboto", sans-serif;
openHours.style.fontFamily = "Roboto", sans-serif;

console.log(123);