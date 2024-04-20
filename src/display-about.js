export function displayAbout() {
  const content = document.querySelector('#content');

  const about = document.createElement('div');
  about.className = 'about';
  about.textContent = "Welcome to Burger Queen, where flavor reigns supreme. Nestled in the heart of the city, we offer a menu featuring three delectable options: the classic Cheese Burger, boasting melted cheese atop a juicy beef patty; the hearty Beef Burger, crafted with premium cuts of succulent beef and fresh toppings; and the tantalizing BBQ Chicken Burger, a savory sensation of tender grilled chicken smothered in rich barbecue sauce. Each bite is a symphony of taste, meticulously crafted with only the finest ingredients. Whether you're a burger aficionado or a newcomer to the scene, come indulge in the royalty of flavors at Burger Queen.";

  content.appendChild(about);
}