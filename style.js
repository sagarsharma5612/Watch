// console.log(Products);

const Watch_Products = document.querySelector('.watch-products')

Watch_Products.innerHTML = Products.map((value) =>{
  const {id,img,name,price,quantity,desc} = value;


  return `
  <div class="products">
  <img src="${img}" alt="images">
  <div class="card-details">
  <h3>${name}</h3>
  <p>${price}</p>
  <p id="quantity">Quantity ${quantity}</p>
  </div>
  <div class="quantity">
  <button class="incri btn1" onclick="incri()">-</button>
  <button class="value">0</button>
  <button class="decri btn1" onclick="decri()">+</button>
  </div>
  <div class="cart">
  <button id="btn">Buy Now</button>
  <button id="btn" onclick="add_to_cart('${id}','${img}','${name}','${price}','${quantity}','${desc}'
  )">Add to Cart</button>
  </div>
  <div class="desc-container">
  <p class="desc">${desc}</p>
  </div>
  </div>
  `
})

const Incri = document.querySelectorAll('.incri')
const Decri = document.querySelector('.decri')
const Value = document.querySelector('.value')
const quantity = document.getElementById('quantity')

let count = 0

const decri = () =>{
  Value.innerText = count++;
}

const incri = () =>{
  if(count>0){
  Value.innerText = count--;
}
}






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxrr9gY3hHl86SuG0uv8nQa0NJHnmqFYqzCzrqM0w4wWDuE-B--j9r9iwch5FHZK6o/exec'

const form = document.forms['form-data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



