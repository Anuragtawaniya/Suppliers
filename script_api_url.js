const supplierContainer = document.querySelector('#supplier-container');
const BASE_URL = 'http://example.com/api';

function getSuppliers(pageNumber) {
  fetch('./supplier.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
      data.forEach(supplier => {
        const card = document.createElement('div');
        card.classList.add('card');

        const category = document.createElement('p');
        category.innerText = `Category: ${supplier.category}`;

        const channel = document.createElement('p');
        channel.innerText = `Channel: ${supplier.channel}`;

        const requestDescription = document.createElement('p');
        requestDescription.innerText = `Request Description: ${supplier.request_description}`;

        const contactNumbers = document.createElement('p');
        contactNumbers.innerText = `Contact Numbers: ${supplier.contact_numbers}`;

        const state = document.createElement('p');
        state.innerText = `State: ${supplier.state}`;

        const district = document.createElement('p');
        district.innerText = `District: ${supplier.district}`;

        const sourceTime = document.createElement('p');
        sourceTime.innerText = `Source Time: ${supplier.source_time}`;

        card.appendChild(category);
        card.appendChild(channel);
        card.appendChild(requestDescription);
        card.appendChild(contactNumbers);
        card.appendChild(state);
        card.appendChild(district);
        card.appendChild(sourceTime);

        supplierContainer.appendChild(card);
      });
    })
    .catch(error => console.error(error));
}