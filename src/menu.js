//#region - Menu Items
const coffeeItem = `<h3>Coffee - $2.00 / $2.75 / $3.50</h3><br>Savor the bold essence of our premium coffee blend—a symphony of rich flavors meticulously brewed for your enjoyment.`;
const coffeeSrc = './img/coffeeImg.jpg';
const coffeeAlt = 'coffeeImg';

const teaItem = `<h3>Tea - $1.50 / $2.00 / $2.50</h3><br>Savor serene moments with our teas. Delicate blends offer a calming melody of flavors, artfully steeped for your enjoyment.`;
const teaSrc = './img/teaImg.jpg';
const teaAlt = 'teaHomepage';

const cappItem = `<h3>Cappuccino - $3.50 / $4.25 / $5.00</h3><br>Indulge in the velvety richness of our cappuccino. Perfectly layered espresso, steamed milk, and a luxurious foam create a blissful coffee experience.`;
const cappSrc = './img/cappuccinoImg.jpg';
const cappAlt = 'cappuccinoImg';

const macchiatoItem = `<h3>Macchiato - $4.00 / $4.75 / $5.50</h3><br>Indulge in our Macchiato. Espresso shots subtly adorned with velvety steamed milk, creating a harmonious blend of boldness and creaminess.`;
const macchiatoSrc = './img/macchiatoImg.jpg';
const macchiatoAlt = 'macchiatoImg';

const americanoItem = `<h3>Americano - $2.50 / $3.50 / $4.50</h3><br>Experience the simplicity of our Americano. Smooth espresso shots blended with hot water, creating a bold and invigorating coffee sensation.`;
const americanoSrc = './img/americanoImg.jpg';
const americanoAlt = 'americanoImg';

const cocoaItem = `<h3>Hot Cocoa - $2.00 / $2.50 / $3.00</h3><br>Embrace warmth with our decadent hot cocoa. Rich chocolate, steamed milk, and a cloud of whipped cream create a cozy indulgence.`;
const cocoaSrc = './img/hotCocoaImg.jpg';
const cocoaAlt = 'hotCocoaImg';
//#endregion

function createMenuItem(menuItem, imgSrc, imgAlt) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item-div');

    const menuText = document.createElement('div');
    menuText.classList.add('menu-text');
    menuText.innerHTML = menuItem;

    const menuImage = document.createElement('img');
    menuImage.classList.add('menu-image');
    menuImage.setAttribute('src', imgSrc);
    menuImage.setAttribute('alt', imgAlt);

    menuItemDiv.appendChild(menuText);
    menuItemDiv.appendChild(menuImage);

    return menuItemDiv;
}

function createMenu() {
    const main = document.getElementById('main');

    main.appendChild(createMenuItem(coffeeItem, coffeeSrc, coffeeAlt));
    main.appendChild(createMenuItem(teaItem, teaSrc, teaAlt));
    main.appendChild(createMenuItem(americanoItem, americanoSrc, americanoAlt));
    main.appendChild(createMenuItem(macchiatoItem, macchiatoSrc, macchiatoAlt));
    main.appendChild(createMenuItem(cappItem, cappSrc, cappAlt));
    main.appendChild(createMenuItem(cocoaItem, cocoaSrc, cocoaAlt));
}

export default createMenu;
