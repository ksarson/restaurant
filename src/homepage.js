const aboutParagraph1 = `Welcome to Cubone Café, a charming retreat nestled in the heart of the city.
    At Cubone Café, we celebrate the art of coffee and the joy of shared moments.
    Our mission is to provide a haven where people can escape, connect, and relish the simple pleasures of life.`;

const aboutParagraph2 = `Explore our thoughtfully crafted menu featuring premium coffee blends sourced from diverse corners of the globe.
Each cup at Cubone Café is a journey of flavors, from the bold intensity of our espresso to the nuanced profiles of our signature blends.
We are committed to sustainability, ensuring our coffee beans are ethically sourced, and we actively minimize our environmental footprint.`;

const aboutParagraph3 = `Join us at Cubone Café, where every cup is an invitation to savor the extraordinary.
    Immerse yourself in the perfect blend of flavors, the warm embrace of community, and the genuine connections forged over a shared love for exceptional coffee.
    Experience Cubone Café – where the love for coffee meets the heart of the community.`;

function createAbout() {
    const about = document.createElement('about');
    about.classList.add('homepage-content', 'about');

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = `<h1>About Us</h1><br><p>${aboutParagraph1}</p><br><p>${aboutParagraph2}</p><br><p>${aboutParagraph3}</p>`;

    about.appendChild(aboutText);

    return about;
}

function createHours() {
    const hours = document.createElement('hours');
    hours.classList.add('homepage-content', 'hours');

    const hoursText = document.createElement('div');
    hoursText.classList.add('hours-text');
    hoursText.innerHTML = `<h1>Hours of Operation</h1><br>
    ${createDailyHoursText('Sunday', 9, 7)}<br>
    ${createDailyHoursText('Monday', 7, 9)}<br>
    ${createDailyHoursText('Tuesday', 7, 9)}<br>
    ${createDailyHoursText('Wednesday', 7, 9)}<br>
    ${createDailyHoursText('Thursday', 7, 10)}<br>
    ${createDailyHoursText('Friday', 7, 10)}<br>
    ${createDailyHoursText('Saturday', 8, 11)}<br>`;

    hours.appendChild(hoursText);

    return hours;
}

function createDailyHoursText(dayOfTheWeek, startTime, endTime) {
    const hoursRow = `<strong>${dayOfTheWeek}</strong>: &nbsp; ${startTime}am - ${endTime}pm`;
    return hoursRow;
}

function createImage() {
    const homepageImageDiv = document.createElement('div');
    homepageImageDiv.classList.add('homepage-content', 'homepage-image-div');

    const homepageImage = document.createElement('img');
    homepageImage.classList.add('homepage-image');
    homepageImage.setAttribute('src', './img/coffeeHomepage.jpg');
    homepageImage.setAttribute('alt', 'coffeeHomepage');

    homepageImageDiv.appendChild(homepageImage);

    return homepageImageDiv;
}

function createHomepage() {
    const main = document.getElementById('main');

    main.appendChild(createAbout());
    main.appendChild(createHours());
    main.appendChild(createImage());
}

export default createHomepage;
