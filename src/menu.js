export default function loadMenu() {
  //page header content
  const content = document.querySelector('#content');
  content.innerHTML = "";
  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  const h2 = document.createElement('h2');
  h2.textContent = "Brilliant Combos Bursting with Flavor";
  content.appendChild(h1);
  content.appendChild(h2);

  //menu items
  const menuItemContainer = document.createElement('div');
  menuItemContainer.className = 'menu-items';
  content.appendChild(menuItemContainer);

  //dish type names
  let dishTypeNames = ['Soups', 'Salads', 'Entrees', 'Top Rated Dishes'];
  for (let i = 0; i < dishTypeNames.length; i++) {
    let dishTypeContainer = document.createElement('div');
    let dishTypeName = document.createElement('h3');

    dishTypeContainer.className = 'dish-type-container';
    dishTypeName.className = dishTypeNames[i].replace(/ /g, '');
    dishTypeName.textContent = dishTypeNames[i];
    menuItemContainer.appendChild(dishTypeContainer);
    dishTypeContainer.appendChild(dishTypeName);
  }
  const dishTypeContainers = document.querySelectorAll('.dish-type-container');
  
  //dish names
  const soupNames = ['French Onion', 'Daily Special'];
  for (let i = 0; i < soupNames.length; i++) {
    let soupName = document.createElement('p');
    soupName.textContent = soupNames[i];
    dishTypeContainers[0].appendChild(soupName);
  }
  const saladNames = ['House Salad', 'Beeza Salad', 'Poached Pear Salad'];
  for (let i = 0; i < saladNames.length; i++) {
    let saladName = document.createElement('p');
    saladName.textContent = saladNames[i];
    dishTypeContainers[1].appendChild(saladName);
  }
  const entreeNames = ['Rosemary Roasted Chicken', 'Mushroom Pappardelle', 'Pesto Pasta'];
  for (let i = 0; i < entreeNames.length; i++) {
    let entreeName = document.createElement('p');
    entreeName.textContent = entreeNames[i];
    dishTypeContainers[2].appendChild(entreeName);
  }
  const topRatedNames = ['Morrocan Chicken Salad Sandwich', 'Ham & Brie', 'Burger Provenance'];
  for (let i = 0; i < topRatedNames.length; i++) {
    let topRatedName = document.createElement('p');
    topRatedName.textContent = topRatedNames[i];
    dishTypeContainers[3].appendChild(topRatedName);
  }

  //nav active/inactive class
  const nav = document.querySelectorAll('li');
  nav[1].className = "active";
  nav[0].classList.remove('active');
  nav[2].classList.remove('active');
}  