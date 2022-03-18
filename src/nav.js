import './style.css';
import home from './home.js';
import menu from './menu.js';


export default function displayNav() {

    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const navSpacer = document.createElement('span');
    navSpacer.classList.add('nav-spacer');

    const brandName = document.createElement('span');
    brandName.textContent = 'Tampopo Ramen';
    brandName.classList.add('nav-brand-name');

    const navUl = document.createElement('ul');
    navUl.classList.add('nav-list');

    const navLiHome = document.createElement('li');
    const navLiHomeLink = document.createElement('a');
    navLiHomeLink.href = '#';
    navLiHomeLink.textContent = 'Home';
    navLiHomeLink.classList.add('nav-links');
    navLiHomeLink.addEventListener('click', displayHome)

    const navLiMenu = document.createElement('li');
    const navLiMenuLink = document.createElement('a');
    navLiMenuLink.href = '#';
    navLiMenuLink.textContent = 'Menu';
    navLiMenuLink.classList.add('nav-links');
    navLiMenuLink.addEventListener('click', displayMenu)

    const navLiContact = document.createElement('li');
    const navLiContactLink = document.createElement('a');
    navLiContactLink.href = '#';
    navLiContactLink.textContent = 'Contact';
    navLiContactLink.classList.add('nav-links');

    navLiHome.appendChild(navLiHomeLink)
    navLiMenu.appendChild(navLiMenuLink)
    navLiContact.appendChild(navLiContactLink)
    navUl.append(navLiHome, navLiMenu, navLiContact)
    nav.append(brandName, navUl);

    return nav;
}
