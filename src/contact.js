export default function loadContact() {

  const content = document.querySelector('#content');
  content.innerHTML = "";

  const h1 = document.createElement('h1');
  h1.textContent = "Contact";

  const h2 = document.createElement('h2');
  h2.textContent = "Give us a call to schedule a reservation";

  content.appendChild(h1);
  content.appendChild(h2);

  const nav = document.querySelectorAll('li');
  // nav.className.remove('active');
  nav[2].className = "active";
  nav[0].classList.remove('active');
  nav[1].classList.remove('active');
}  