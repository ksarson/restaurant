function createContactItem() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text');
    contactText.innerHTML = `<br><h1>Contact Us</h1><br>
    ${createContactInfo('Kolby', 'Owner', '(123) 456-7890', 'kolby@gmail.ca')}
    <br><br>
    ${createContactInfo('Lily', 'Manager', '(111) 111-1111', 'lily@gmail.ca')}
    <br><br>
    ${createContactInfo('Clay', 'Barista', '(999) 999-9999', 'clay@gmail.ca')}
    <br><br>`;
    contactDiv.appendChild(contactText);

    return contactDiv;
}

function createContactInfo(contactName, title, phone, email) {
    const contactRow = `<strong>${contactName}</strong><br><em>${title}<br></em>Phone: ${phone}<br>Email: ${email}`;
    return contactRow;
}

function createContact() {
    const main = document.getElementById('main');

    main.appendChild(createContactItem());
}

export default createContact;
