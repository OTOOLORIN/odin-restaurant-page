import './styles.css';
import { addHomeTab, doc, mainContent } from './home.js';

// default page load with home tab
addHomeTab();

const tabsCon = doc.querySelector('nav');
tabsCon.addEventListener('click', (e) => {
  // must click on only buttons
  if (e.target.localName !== 'button') return;
  // continue if button is clicked
  const tab = e.target;
  const tabClasses = Array.from(tab.classList);
  // stop execution if current tab is clicked
  if (tabClasses.includes('active')) return;

  // find the current tab
  const allTabs = Array.from(tabsCon.children);
  const currentTab = allTabs.filter((tab) => {
    const tabClasses = Array.from(tab.classList);
    return tabClasses.includes('active');
  })
  
  // change current tabs
  currentTab[0].classList.remove('active');
  tab.classList.add('active');
  // remove previous content from page
  mainContent.textContent = '';
   // repopulate page with new tab's content
   switch (tab.id) {
    case 'home':
      addHomeTab();
      break;
    case 'contact':
      break;
    case 'menu':
      break
   }
})