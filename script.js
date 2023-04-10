const supplierContainer = document.querySelector('#supplier-container');
const BASE_URL = 'http://example.com/api';


let category_data = [];
let channel_data = [];
let state_data = [];
let category_filter = document.querySelector("#category-select");
let state_filter = document.querySelector("#state-select");
let channel_filter = document.querySelector("#channel-select");
let container_information;




function getSuppliers(pageNumber) {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].state);
container_information = data;
          data.forEach(supplier => {

            // Genrating the text of filter
           if(!category_data.includes(supplier.category)){
             category_data.push(supplier.category);
           }

           if(!channel_data.includes(supplier.channel)){
            channel_data.push(supplier.channel);
           }
           if(!state_data.includes(supplier.state)){
            state_data.push(supplier.state);
           }

            console.log(category_data);

          // Creating the card dynamically  
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

      category_data.forEach((ele)=>{
category_filter.innerHTML += `<option value="${ele}">${ele}</option>`;
      })

      
      channel_data.forEach((ele)=>{
        channel_filter.innerHTML += `<option value="${ele}">${ele}</option>`;
              })
        

      state_data.forEach((ele)=>{
        state_filter.innerHTML += `<option value="${ele}">${ele}</option>`;
              })

     })
     
    .catch(error => console.error(error));
}
getSuppliers()