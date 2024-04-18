export function displayMenu() {
  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.textContent = "Choose from menu!";

  content.appendChild(menu);
}