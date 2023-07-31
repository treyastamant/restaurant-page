export default function loadMenu() {

  const content = document.querySelector('#content');
  content.innerHTML = "";

  const h1 = document.createElement('h1');
  h1.textContent = "Menu";

  const h2 = document.createElement('h2');
  h2.textContent = "Brilliant Combos Bursting with Flavor";

  content.appendChild(h1);
  content.appendChild(h2);

  const nav = document.querySelectorAll('li');
  // nav.className.remove('active');
  nav[1].className = "active";
  nav[0].classList.remove('active');
  nav[2].classList.remove('active');
}  