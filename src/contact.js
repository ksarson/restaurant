function createContactItem() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text');
    contactText.innerHTML = `<h1>Contact Us</h1><br>Contact Text`;

    contactDiv.appendChild(contactText);

    return contactDiv;
}

function createContact() {
    const main = document.getElementById('main');

    main.appendChild(createContactItem());
}

export default createContact;
