import { doc, mainContent, createElementWithClass } from './home.js';
import locationImg from '../images/restaurant-location.png';
export function addContactTab() {
  const contactContainer = createElementWithClass('div', 'contact');
  const addressCon = createElementWithClass('address');
  const telCon = createElementWithClass('p');
  const phyAddressCon = createElementWithClass('p');
  const imgCon = createElementWithClass('div');
  const imgElement = createElementWithClass('img');

  telCon.textContent = '📞 1243 666 3454';
  phyAddressCon.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
  addressCon.append(telCon, phyAddressCon);

  imgElement.src = locationImg;
  imgElement.alt = 'A map of where we are located. Come join us!';
  imgCon.appendChild(imgElement);
   contactContainer.append(addressCon, imgCon);

  //  populate page with tab content
  mainContent.appendChild(contactContainer);
}