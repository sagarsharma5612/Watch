const AllProducts = [{
    id:1,
    img:'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=800&sh=800',
    name:'Titan Watch',
    price:'7,995',
    quantity:'5',
    desc:'Titan Blue Dial Analog with Date Watch for Men',
},
{
    id:2,
    img:'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/i/q/e/-original-imagnre8pbpnfhgz.jpeg?q=70',
    name:'Volt Analog Watch',
    price:'595',
    quantity:'8',
    desc:'Volt Analog Watch for Men',
},
{
    id:3,
    img:'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/i/z/j/1-d-mv01-brogr-mvmt-men-original-imagghhfqfzkju2e.jpeg?q=70',
    name:'Voyager Analog Watch',
    price:'7,897',
    quantity:'10',
    desc:'Voyager Watch Water Proof Watch for Men',
},
{
    id:4,
    img:'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/g/e/1-3011-professional-look-alix-men-original-imahykkegqwq8txj.jpeg?q=70',
    name:'Alike Watch',
    price:'2,995',
    quantity:'2',
    desc:'Water Proof Watch Watch for Men',
},
{
    id:5,
    img:'https://rukminim2.flixcart.com/image/612/612/kg8avm80-0/watch/t/i/u/pe000017d-peter-england-original-imafwgb7w9cbyumh.jpeg?q=70',
    name:'Peter England Watch',
    price:'1,883',
    quantity:'7',
    desc:'Peter England Watch for Men',
},
{
    id:6,
    img:'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/1/u/0/-original-imagsmxcfrpqstbf.jpeg?q=70',
    name:'Foosil Watch',
    price:'7,374',
    quantity:'8',
    desc:'Foosil Brand Watch for Men',
},
{
    id:7,
    img:'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/q/f/-original-imagsqbzdhmgdx3p.jpeg?q=70',
    name:'Timax',
    price:'1,998',
    quantity:'2',
    desc:'Water Proof',
},
{
    id:8,
    img:'https://rukminim2.flixcart.com/image/612/612/ktvucnk0/watch/t/n/d/twtg80smu09-timex-men-original-imag74m7fyjwgtds.jpeg?q=70',
    name:'Timax Watch',
    price:'1,885',
    quantity:'3',
    desc:'Timax Watch for Men',
},
]


console.log(AllProducts);

const Products_Container = document.querySelector('.products-container')


Products_Container.innerHTML = AllProducts.map((value) =>{
    
    const {id,img,name,price,quantity,desc} = value;

    
 
    return `
    <div class="products-details">
    <img src="${img}" alt="images">
    <div class="card-products">
    <h3>${name}</h3>
    <p>${price}</p>
    <p id="quantity">Quantity ${quantity}</p>
    </div>
    <div class="quantity-products">
    <button class="incri btn1" onclick="incri()">-</button>
    <button class="value">0</button>
    <button class="decri btn1" onclick="decri()">+</button>
    </div>
    <div class="cart-products">
    <button id="btn">Buy Now</button>
    <button id="btn" onclick="add_to_cart('${id}','${img}','${name}','${price}','${quantity}','${desc}'
    )">Add to Cart</button>
    </div>
    <div class="desc-products">
    <p class="desc">${desc}</p>
    </div>
    </div>
    `
})