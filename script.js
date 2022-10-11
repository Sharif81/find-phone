const findPhone = () => {
  const SearchField = document.getElementById('search-field');
  const SearchText = SearchField.value;
  SearchField.value = '';
  //  console.log(SearchText);  

  const url = `https://openapi.programming-hero.com/api/phones?search=${SearchText}`;
  fetch(url)
    .then(response => response.json())
    .then(data => ShowDisplayPhone(data.data))

}


const ShowDisplayPhone = (data) => {
  const ShowPhoneResult = document.getElementById("phone-display");
  ShowPhoneResult.textContent = '';
  for (const phone of data) {
  //  console.log(phone);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
   
    <div class="card">
     <div class="card-header mb-1">
     <h4 class="card-title">${phone.brand}</h4>
     </div>
      <img  src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>        
      </div>
      <div class="card-footer">
          <button onclick="LoadPhoneDetails('${(phone.slug)}')" type="button" class="btn btn-success btn-sm">Details</button>
      </div>
    </div>     
    `;

    ShowPhoneResult.appendChild(div);

  }
}


const LoadPhoneDetails = (id) => {  
  const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
  // console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data => ShowPhoneDetails(data.data))
}


const ShowPhoneDetails = (data) => {
  console.log(data);
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
      <div class="card">
          <div class="card-header mb-1">
            <h4 class="card-title">${data.brand}</h4>
          </div>
          <img  src="${data.image}" class="card-img-top w-50 mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6>Mainfeatures</h6> 
            <p><b>Chipset:</b> ${data.mainFeatures.chipSet}</p>
            <p><b>Display Size:</b> ${data.mainFeatures.displaySize}</p>   
            <p><b>Memory:</b> ${data.mainFeatures.memory}</p> 
            <p><b>Bluetooth:</b> ${data.others.Bluetooth}</p>
            <p><b>GPS:</b> ${data.others.GPS}</p>
            <p><b>NFC:</b> ${data.others.NFC}</p>
            <p><b>USB:</b> ${data.others.USB}</p>
            <p><b>WLAN:</b> ${data.others.WLAN}</p>        
          </div> 
          <div class="card-footer">
            <p><b>Release Date: </b> ${data.releaseDate}</p>
          </div>        
        </div>    
      `;

      phoneDetails.appendChild(div);

}