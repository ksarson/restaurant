import createHomepage from './homepage';
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Cubone Café';

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homepageButton = document.createElement('button');
    homepageButton.classList.add('nav-button', 'homepage-button');
    homepageButton.textContent = 'Homepage';
    nav.appendChild(homepageButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button', 'menu-button');
    menuButton.textContent = 'Menu';
    nav.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button', 'contact-button');
    contactButton.textContent = 'Contact';
    nav.appendChild(contactButton);

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Copyright © 2024 Kolby Sarson';
    footer.appendChild(footerText);

    const githubLink = document.createElement('a');
    githubLink.classList.add('github-icon');
    githubLink.href = 'https://github.com/ksarson/restaurant';
    githubLink.target = '_blank';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab', 'fa-github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    createContact();
}

export default initializeWebsite;
