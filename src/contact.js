export default function loadContact() {

  const content = document.querySelector('#content');
  content.innerHTML = "";

  const h1 = document.createElement('h1');
  h1.textContent = "Contact";

  const h2 = document.createElement('h2');
  h2.textContent = "Give us a call to schedule a reservation";

  const h3 = document.createElement('h3');
  h3.textContent = '(000) 000-0000';
  h3.className = 'number';

  content.appendChild(h1);
  content.appendChild(h2);
  content.appendChild(h3);

  const nav = document.querySelectorAll('li');
  // nav.className.remove('active');
  nav[2].className = "active";
  nav[0].classList.remove('active');
  nav[1].classList.remove('active');
}  