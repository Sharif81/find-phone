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
        <p class="card-text">${phone.slug}</p>
      </div>
    </div>     
    `;

    ShowPhoneResult.appendChild(div);

  }
}


const showPhoneDetails = (phoneid) => {  
  const url = `https://openapi.programming-hero.com/api/phone/=${phoneid}`;
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.data))
}

showPhoneDetails();