export function displayMenu() {
  const content = document.querySelector('#content');

  const menuList = document.createElement('div');
  menuList.className = 'menu-list';

  //Menu 1 - Cheese Burger
  const menu1 = document.createElement('div');
  menu1.className = 'menu';

  const menu1Title = document.createElement('div');
  menu1Title.className = 'menu-title';
  menu1Title.textContent = 'Cheese Burger';

  const menu1Ingredients = document.createElement('div');
  menu1Ingredients.className = 'menu-ingredients';
  menu1Ingredients.textContent = 'Beef Patty, Chedder Cheese, Grilled Onions & Tomatoes, Pickles, Lettuce, Katchup, Mayo, Mustard';

  const menu1Divider = document.createElement('hr');
  menu1Divider.className = 'divider';

  menu1.append(menu1Title, menu1Ingredients, menu1Divider);

  //Menu 2 - Beef Burger
  const menu2 = document.createElement('div');
  menu2.className = 'menu';

  const menu2Title = document.createElement('div');
  menu2Title.className = 'menu-title';
  menu2Title.textContent = 'Beef Burger';

  const menu2Ingredients = document.createElement('div');
  menu2Ingredients.className = 'menu-ingredients';
  menu2Ingredients.textContent = 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Katchup, Mayo, Mustard';

  const menu2Divider = document.createElement('hr');
  menu2Divider.className = 'divider';

  menu2.append(menu2Title, menu2Ingredients, menu2Divider);

  //Menu 3 - BBQ Chicken
  const menu3 = document.createElement('div');
  menu3.className = 'menu';

  const menu3Title = document.createElement('div');
  menu3Title.className = 'menu-title';
  menu3Title.textContent = 'BBQ Chicken';

  const menu3Ingredients = document.createElement('div');
  menu3Ingredients.className = 'menu-ingredients';
  menu3Ingredients.textContent = 'Grilled Chicken, Mozza Cheese, Grilled Onion, Lettuce, Mayo BBQ Sauce';

  menu3.append(menu3Title, menu3Ingredients);

  menuList.append(menu1, menu2, menu3);
  content.appendChild(menuList);
}