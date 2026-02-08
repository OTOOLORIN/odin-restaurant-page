import img from '../images/chef.png';

export const doc = document;
export const mainContent = document.querySelector('#content');
export function createElementWithClass(tag, ...classes) {
  const element = doc.createElement(tag);
  if (classes.length > 0) {
    element.classList.add(...classes)
  }
  return element
}
function addHomeTab() {
  // create new elements to hold contents

  const homeContainer = createElementWithClass('div', 'home');
  const heroTextContainer = createElementWithClass('div');
  const primaryText = createElementWithClass('p');
  const secText = createElementWithClass('p');
  const imgContainer = createElementWithClass('div', 'img-container');
  const imgElement = createElementWithClass('img');
  const ctaContainer = createElementWithClass('div');
  const ctaText = createElementWithClass('p', 'cta');

  primaryText.textContent = 'Best pizza in your country';
  secText.textContent = 'Made with passion since 1950';
  heroTextContainer.append(primaryText, secText);

  imgElement.src = img;
  imgElement.alt = 'A happy chef holding a mug.'
  imgElement.style.width = '309px';
  imgElement.style.height = '309px';
  imgContainer.append(imgElement)

  ctaText.textContent = 'Order online or visit us!';
  ctaContainer.appendChild(ctaText);
  
  homeContainer.append(heroTextContainer, imgContainer, ctaContainer);
  mainContent.appendChild(homeContainer);
}