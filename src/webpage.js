import createHomepage from './homepage';
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerImage = document.createElement('img');
    headerImage.classList.add('header-image');
    headerImage.setAttribute('src', './img/cubone.png');
    headerImage.setAttribute('alt', 'cubone');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-text');
    headerTitle.appendChild(headerImage);

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Cubone Café';
    headerTitle.appendChild(restaurantName);

    header.appendChild(headerTitle);
    header.appendChild(createNav());

    return header;
}

function createImage() {
    const homepageImageDiv = document.createElement('div');
    homepageImageDiv.classList.add('homepage-content', 'homepage-image-div');

    const homepageImage = document.createElement('img');
    homepageImage.classList.add('homepage-image');
    homepageImage.setAttribute('src', './img/coffeeShop.jpg');
    homepageImage.setAttribute('alt', 'coffeeShop');

    homepageImageDiv.appendChild(homepageImage);

    return homepageImageDiv;
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
    createHomepage();

    const homepageButton = document.querySelector('.homepage-button');
    const menuButton = document.querySelector('.menu-button');
    const contactButton = document.querySelector('.contact-button');

    homepageButton.addEventListener('click', () => {
        clearContent();
        createHomepage();
    });
    menuButton.addEventListener('click', () => {
        clearContent();
        createMenu();
    });
    contactButton.addEventListener('click', () => {
        clearContent();
        createContact();
    });
}

function clearContent() {
    const main = document.getElementById('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

export default initializeWebsite;
