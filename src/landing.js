import loadMenu from './menu.js';

export default function loadLanding() {

  const content = document.querySelector('#content');
  content.innerHTML = "";

  const h3 = document.createElement('h3');
  h3.textContent = "Modern Take on the French Bistro Classics";

  const h1 = document.createElement('h1');
  h1.textContent = "Beeza Bistro";

  const h2 = document.createElement('h2');
  h2.textContent = "Brilliant Combos Bursting with Flavor";

  const button = document.createElement('button');
  button.textContent = "View Top Rated Dishes"
  button.addEventListener('click', loadMenu);

  content.appendChild(h3);
  content.appendChild(h1);
  content.appendChild(h2);
  content.appendChild(button);

  const nav = document.querySelectorAll('li');
  nav[0].className = "active";
  nav[1].classList.remove('active');
  nav[2].classList.remove('active');
}  