import { mainContent, createElementWithClass } from './home.js';

// Import all pizza image URLs
import salsiccia from '../images/pizzas/salsiccia.png';
import gamberi from '../images/pizzas/gamberi.png';
import pepe from '../images/pizzas/pepe.png';
import disgustoso from '../images/pizzas/disgustoso.png';
import colorato from '../images/pizzas/colorato.png';
import pomodoro from '../images/pizzas/pomodoro.png';
import crema from '../images/pizzas/crema.png';
import carne from '../images/pizzas/carne.png';

// consolidate all pizzas info in a single entity
const menus = [

  {
    name: 'Salsiccia',
    ingredients: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
    imgUrl: salsiccia,
  },

  {
    name: 'Gamberi',
    ingredients: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
    imgUrl: gamberi,
  },

  {
    name: 'Pepe',
    ingredients: 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
    imgUrl: pepe,
  },

  {
    name: 'Disgustoso',
    ingredients: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
    imgUrl: disgustoso
  },

  {
    name: 'Colorato',
    ingredients: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
    imgUrl: colorato
  },

  {
    name: 'Pomodoro',
    ingredients: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
    imgUrl: pomodoro
  },

  {
    name: 'Crema',
    ingredients: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
    imgUrl: crema
  },

  {
    name: 'Carne',
    ingredients: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
    imgUrl: carne
  }

] 

const menuContainer = createElementWithClass('div', 'menu');

// for each pizza object, create elements to contain/hold its information
menus.forEach(({name, ingredients, imgUrl}) => {
  const dishCon = createElementWithClass('div', 'dish');
  const descriptionCon = createElementWithClass('div', 'ingredients');
  const nameText = createElementWithClass('p');
  const ingreText = createElementWithClass('p');
  const imgCon = createElementWithClass('div', 'dish-img');
  const imgElement = createElementWithClass('img');

  nameText.textContent = name;
  ingreText.textContent = ingredients;
  descriptionCon.append(nameText, ingreText);

  imgElement.src = imgUrl;
  imgElement.alt = `A dish of ${name.toLowerCase()} pizza`
  imgCon.appendChild(imgElement);

  dishCon.append(descriptionCon, imgCon);
  menuContainer.appendChild(dishCon);
})

// populate page with menu tab
export function addMenuTab() {
  mainContent.appendChild(menuContainer);
}