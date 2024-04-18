export function displayAbout() {
  const content = document.querySelector('#content');

  const about = document.createElement('div');
  about.textContent = "Wanna know more about Burger Queen?";

  content.appendChild(about);
}