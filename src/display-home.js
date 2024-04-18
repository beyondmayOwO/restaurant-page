import homeBackground from './assets/home-background.jpg';

export function displayHome() {
  //Home Background
  const homeBody = document.querySelector('body');
  homeBody.style.backgroundImage = `url(${homeBackground})`;
  homeBody.style.backgroundSize = 'cover';

  //Home Contents
  const content = document.querySelector('#content');

  const mainHeading = document.createElement('div');
  mainHeading.className = 'main-heading';
  mainHeading.textContent = 'Welcome to Burger Queen!';

  const mainDescription = document.createElement('div');
  mainDescription.className = 'main-description';
  mainDescription.textContent = 'Most juicy burger in town that will make you shake';

  const openHours = document.createElement('div');
  openHours.className = 'open-hours';
  openHours.textContent = 'Open Hours: 8am to 6pm';

  content.append(mainHeading, mainDescription, openHours);
}