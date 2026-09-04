const products = [
  {id:1, name:'Bamboo Toothbrush', price:99, img:'https://snodgrassking.com/wp-content/uploads/2020/07/Toothbrush1-scaled.jpg', ecoScore:90},
  {id:2, name:'Reusable Bottle', price:499, img:'https://suspire.in/cdn/shop/files/img_5681_ae7c90e1-e0a9-45e1-9386-5fe218d57ef5_1080x.jpg?v=1717482579', ecoScore:85},
  {id:3, name:'Cotton Tote Bag', price:249, img:'https://i.etsystatic.com/18798117/r/il/b686ab/4939909901/il_fullxfull.4939909901_ebcl.jpg', ecoScore:80},
  {id:4, name:'Solar Lantern', price:999, img:'https://image.made-in-china.com/202f0j00rmocNtySSgbe/Eco-Friendly-Solar-Lantern-with-Torch-Light-Solar-System-for-Home-and-Outdoor-Use-with-Verasol-Certificate.jpg', ecoScore:75},
  {id:6, name:'Solar Lantern', price:599, img:'https://m.media-amazon.com/images/I/71iRxk40ncL._AC_UF1000,1000_QL80_.jpg', ecoScore:50},
  {id:7, name:'Solar Lantern', price:399, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy87pY89SRULNzYdvT3DeCM7EdynHIwZLt9g&s', ecoScore:85},
  {id:8, name:'Solar Lantern', price:90, img:'https://thesustainablebrandsjournal.com/wp-content/uploads/2023/10/aaa-mbbLRRx6G-transformed-e1697954086537.jpg', ecoScore:95},
  {id:9, name:'Solar Lantern', price:79, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrugHjKeY6Vm7TJgrYLSHwtfx0uvDhhawPQ&s', ecoScore:105},
  {id:10, name:'Solar Lantern', price:17, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7SdTF46iJvmhrlkg9Wxcy_eU6RNYbIVMfw&s', ecoScore:55},
  {id:11, name:'Solar Lantern', price:1099, img:'https://www.qalara.com/blog/wp-content/uploads/2023/02/Featured.jpg', ecoScore:305},
  {id:12, name:'Solar Lantern', price:5099, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2rqQFvN16WUxRNzeK1WkdLbKPt0BO-TRzQ&s', ecoScore:255},
  {id:13, name:'Solar Lantern', price:4099, img:'https://rigidboxes.in/wp-content/uploads/al_opt_content/IMAGE/rigidboxes.in/wp-content/uploads/2024/09/creative-eco-friendly-packaging-1024x585.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=rigidboxes.in', ecoScore:155},
  {id:14, name:'Solar Lantern', price:378, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZwjIzOgD10qY0GnU87Pn-sS0_Alar1dxtw&s', ecoScore:98},
  {id:15, name:'Solar Lantern', price:720, img:'https://greendiary.com/wp-content/uploads/2017/05/Maja-Szczypek-hay-packet.jpg', ecoScore:23},
  {id:17, name:'Solar Lantern', price:11499, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvkHcZ-3meSJ0C_gLE0ApZclqgf4u7n4U7w&s', ecoScore:45},
  {id:18,name:'pen',price:49,img:'https://brownliving.in/cdn/shop/products/eco-friendly-pens-2-refillable-ball-pen-sustainable-wooden-pens-tbb-100-stationery-brown-living-232279.jpg?v=1682962196&width=1105', ecoScore:65}, 
  {id:19,name:'pen',price:49,img:'https://souvenir.net.in/wp-content/uploads/2019/09/esp1.jpg', ecoScore:45}, 
  {id:20,name:'pen',price:100,img:'https://m.media-amazon.com/images/I/812dlDRaFQL.jpg', ecoScore:15},
  {id:21,name:'pen',price:199,img:'https://uneako.com/wp-content/uploads/2020/03/3-8.webp', ecoScore:25}, 
  {id:22,name:'pen',price:59,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-la1AfDiMRQm5xs884ocA3lHOSSl-EJ8s7w&s', ecoScore:15}, 
  {id:23,name:'pen',price:79,img:'https://m.media-amazon.com/images/I/71sJEKPXW5L.jpg', ecoScore:25}, 
  {id:24,name:'pen',price:99,img:'https://seedpaperindia.in/cdn/shop/files/Untitleddesign-2024-04-11T105734.284.jpg?v=1712813271', ecoScore:55}, 
  {id:25,name:'pen',price:149,img:'https://www.buzzstore.in/ecommerce/upload/bcg/edit/eco-notebook-with-pen-and-sticky-pads-b50--21-2023-04.webp', ecoScore:45}, 
  {id:26,name:'pen',price:499,img:'https://seedballs.in/cdn/shop/files/GreenOfficeEssentialsSet_SeedPaperPen_BambooRuler_EcoSharpener.jpg?v=1745670528', ecoScore:45}, 
  {id:27,name:'pen',price:49,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmGac4K0u_3DE9euAd_ja_pJS_tBRJuVn5A&s', ecoScore:85}, 
  {id:30,name:'solar light',price:9000,img:'https://m.media-amazon.com/images/I/71MI4qv8TML.jpg', ecosystem:175},
  {id:31,name:'solar light',price:6788,img:'https://images.adsttc.com/media/images/5ed5/4a5a/b357/6538/ab00/048c/newsletter/aec-daily-solar-lighting_(3).jpg?1591036425',ecosystem:155},
  {id:32,name:'solar light',price:700,img:'https://www.energy.gov/sites/default/files/2021-10/outdoor_solar_14772849.jpg', ecosystem:55},
  {id:33,name:'comb',price:80,img:'https://brownliving.in/cdn/shop/products/neem-shampoo-comb-and-detangling-comb-192-06559-neem-dressing-comb-hair-comb-brown-living-360391.jpg?v=1682965286',ecosystem:5},
  {id:34,name:'spoon',price:50,img:'https://www.jiomart.com/images/product/original/rvih6cahbz/alu-freshh-disposable-wooden-spoon-16-cms-6-4-inch-length-pack-of-50-product-images-orvih6cahbz-p609338770-0-202406130413.jpg?im=Resize=(1000,1000)',ecosystem:5},
  {id:35,name:'fork',price:60,img:'https://i.etsystatic.com/6196057/r/il/6d19fb/3667530745/il_fullxfull.3667530745_mtee.jpg',ecosystem:5},
  {id:36,name:'bag',price:500,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr72ZG_3NNRxGoYdnOzl4HwuvejgTji88Nw&s',ecosystem:10},
  {id:37,name:'cotton bag',price:674,img:'https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Hand_Bags/YPB09HKG3NQZ_1.jpg&resizeTo=600',ecosystem:25},
  {id:38,name:'cup',price:100,img:'https://bamboostrawgirl.com/cdn/shop/products/ORGANICUP_PACKS_WHITE_01_20190411_WD_grande.jpg?v=1689334554',ecosystem:35},
  {id:39,name:'sweater',price:500,img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUXcIijvyNpWQ31Nz1O0v6PdmdUq4cUymymhTZcT9-YZvne0p9b2tx-8iSeVN91-WRWL56yo541TC6-qpBp8SEXunSwQ5j53KPLHb84TkguohwmGYmelPp8Q&usqp=CAc',ecosystem:100},
  {id:40,name:'carpet',price:2500,img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsMo_yc1ppSoBTjVSwRnPBCizL6EPNBZ4bZg5kL313IkvO5-yk6t7qpVwUDrBaLyQ3REgTHw-2_S80aDgowpnMksAqlR-7c2goqdo60C71JbnZaNgNScqv5y03&usqp=CAc',ecosystem:100},
  {id:41,name:'chair',price:1000,img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWKZoxKDjdWTcXrxUPpGe-Jdi2S-6YF7wertocDbHjYBC_oRiwPq7FWKWOD5RwNb229PTKbswu-eliREAS6M3FiRhsxvx5EjO-8nhsmo4X-L_Um7Sh3uWnPMu8aiQbUJt3g6VwCw&usqp=CAc',ecosystem:100},
  {id:42,name:'furniture',price:5000,img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRv5XebhazhVbdz7mPCZPeQiP7zpqtFKAZ9XoyidF-CaAvCXGWHUFnTB2lhaOektTcbwURIhHhG7bsdT9d2eWcTdF7-dDFoRYhmoZlIBgN7k1u8WTb87h6t_eLt63V-DQTe0OMGdOr0&usqp=CAc',eecosystem:105},
  {id:43,name:'table',price:10000,img:'https://griffinstudio.in/wp-content/uploads/2023/12/Organic_1.jpgecosystem',ecosystem:195},
  {id:59,name:'biodegradable floss',price:500,img:'https://i.etsystatic.com/19893040/r/il/93b2e2/5531706337/il_570xN.5531706337_lz14.jpg',ecosystem:25},
  {id:75,name:'compost bins',price:500,img:'https://m.media-amazon.com/images/I/71F9QwJI9TL.jpg',ecosystem:15},
  {id:44,name:'tote bags',price:577,img:'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/AUGUST/11/rUBO5quv_826e822ee1f342b2ba91284ea7aa331c.jpg',ecosystem:25},
  {id:76,name:'pela case',price:876,img:'https://thesustainablesuburbanites.com/wp-content/uploads/2023/03/IMG_0260-768x1024.jpeg',ecosystem:35},
  {id:45,name:'green toys',price:500,img:'https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/ATVPDKIKX0DER/dc40da62ba25c870a5636596186e5c13.w3000.h2000._CR81%2C414%2C2703%2C1351_SX750_SY375_.jpg',ecosystem:55},
  {id:84,name:'mud toys',price:549,img:'https://i.ytimg.com/vi/bvsqLvnd7IY/maxresdefault.jpg',ecosystem:35},
  {id:46,name:'ethical bags',price:749,img:'https://priyaasi.com/cdn/shop/products/TE-BG-30006-MLT.M2.jpg?v=1657793459',ecosystem:65},
  {id:47,name:'sustainable coffee',price:519,img:'https://shop.wayanadcraft.com/wp-content/uploads/2023/08/Photoroom_20240229_204532.jpeg',ecosystem:35},
  {id:48,name:'recycled cotton cloths',price:999,img:'https://thygesenapparel.com/wp-content/uploads/2023/11/organic-clothing-manufacturer-oem-service-1.webp',ecosystem:55},
  {id:49,name:'compostable audio accessories',price:999,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzf1GsHNGnl1RPxko6I51rzvNFW_l2YE8Iig&s',eosystem:55},
  {id:50,name:'led bulb',price:150,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUKOqhoykvmJe576mSUC-5ZRCg1ZS6kzEAQ&s',ecosystem:5},
  {id:51,name:'cotton pads',price:100,img:'https://evereve.in/cdn/shop/files/1_4440fb70-7331-44b9-bebc-6b8df76d34d2.jpg?v=1758023308',ecosysem:5},
  {id:73,name:'sanitary pads',price:59,img:'https://www.nahdionline.com/_next/image?url=https%3A%2F%2Fecombe.nahdionline.com%2Fmedia%2Fcatalog%2Fproduct%2Fp%2Fe%2Fpeesafe-organic-cotton-sanitary-pads-overnight-10-pads-20epng.png%3Fwidth%3D500%26height%3D500%26canvas%3D500%2C500%26optimize%3Dhigh%26bg-color%3D255%2C255%2C255%26fit%3Dbounds&w=256&q=75',ecosystem:5},
  {id:61,name:'organic soap bars',price:99,img:'https://m.media-amazon.com/images/I/71lTcgwguXL.AC_UF1000,1000_QL80.jpg',ecosystem:55},
  {id:62,name:'phone charger',price:599,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2t-xA9Rsfd7LUoba_dkYWjBedgRa5H-kiQ&s',ecosystem:55},
  {id:52,name:'pads',price:99,img:'https://uniclan.in/wp-content/uploads/2023/10/How-to-Choose-the-Right-Type-of-Sanitary-Pads-6.png',ecosystem:55},
  {id:54,name:'house cleaninr material',price:549,img:'https://m.media-amazon.com/images/I/71LEIsF48dL.UF1000,1000_QL80.jpg',ecosysttem:35},
  {id:55,name:'organic garland',price:199,img:'https://m.media-amazon.com/images/I/811JhaTrBZL.jpg',ecosystem:55},
];

let cart = JSON.parse(localStorage.getItem('ecoCart')) || [];
const $ = id => document.getElementById(id);

// Render featured products with side-by-side buttons
function renderFeatured() {
    const container = $('featuredGrid');
    if(!container) return;
    container.innerHTML = products.map(p => `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <span class="leaf-badge">🌿 ${p.ecoScore}</span>
          <div class="btn-row">
            <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            <button class="btn btn-success" onclick="buyNow(${p.id})">Buy Now</button>
          </div>
        </div>
      </div>
    `).join('');
}

// Add to cart
function addToCart(id){
    const p = products.find(x=>x.id===id);
    if(!p) return alert('Product not found');
    cart.push(p);
    localStorage.setItem('ecoCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${p.name} added to cart ✅`);
}

// Buy now: add to cart and go to cart page
function buyNow(id){
    const p = products.find(x=>x.id===id);
    if(!p) return alert('Product not found');
    let cart = JSON.parse(localStorage.getItem('ecoCart')) || [];
    cart.push(p);
    localStorage.setItem('ecoCart', JSON.stringify(cart));
    window.location.href = 'cart4.html';
}

// Update cart count in navbar
function updateCartCount() {
    const el = $('cartCount');
    if(el) el.innerText = cart.length;
}

// Remove item from cart
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('ecoCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('ecoCart', JSON.stringify(cart));
    location.reload();
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    updateCartCount();

    // Login button
    const loginbtn = $('loginbtn');
    if(loginbtn){
        loginbtn.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "auth.html";
        });
    }

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const ul = document.querySelector('nav ul');
    if(hamburger && ul){
        hamburger.addEventListener('click', () => {
            ul.classList.toggle('ham_active');
            const ham_child = hamburger.firstElementChild;
            if(ul.classList.contains('ham_active')){
                ham_child.classList.replace('fa-bars','fa-xmark');
            } else {
                ham_child.classList.replace('fa-xmark','fa-bars');
            }
        });
    }

    // Cart page logic
    if (window.location.pathname.includes("cart4.html")) {
        const cartItemsDiv = $('abhin');
        const cartTotalDiv = $('cartTotal');
        const checkoutBtn = $('checkoutBtn');
        const cart = JSON.parse(localStorage.getItem('ecoCart')) || [];

        if(cart.length === 0){
            if(cartItemsDiv) cartItemsDiv.innerHTML = `<p>No items in cart 🥲</p>`;
            if(cartTotalDiv) cartTotalDiv.textContent = '';
            return;
        }

        let total = 0;
        if(cartItemsDiv){
            cartItemsDiv.innerHTML = cart.map((item,index) => {
                total += item.price;
                return `
                  <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" width="100">
                    <div class="info">
                      <h3>${item.name}</h3>
                      <p>₹${item.price}</p>
                      <p>Eco Score: 🌿 ${item.ecoScore}</p>
                      <button onclick="removeItem(${index})" class="btn danger">Remove</button>
                    </div>
                  </div>
                `;
            }).join('');
        }

        if(cartTotalDiv) cartTotalDiv.innerHTML = `<h2>Total: ₹${total}</h2>`;

        if(checkoutBtn){
            checkoutBtn.addEventListener('click', () => {
                alert('Checkout successful (simulated) 🛍');
                localStorage.removeItem('ecoCart');
                location.reload();
            });
        }
    }
});


//buy


const orders = JSON.parse(localStorage.getItem('orders')) || [];
const container = document.getElementById('orderDetails');

if (orders.length === 0) {
  container.innerHTML = `<p>No orders yet.</p>`;
} else {
  container.innerHTML = '<h2>Your Orders</h2>';
  orders.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.style.border = '1px solid #ccc';
    orderDiv.style.padding = '10px';
    orderDiv.style.margin = '10px 0';
    orderDiv.style.borderRadius = '8px';
    orderDiv.innerHTML = `
      <img src="${order.productImage}" style="width:100px;border-radius:8px;"><br>
      <strong>${order.productName}</strong><br>
      Category: ${order.category}<br>
      Origin: ${order.origin}<br>
      Price: ₹${order.productPrice}<br>
      Name: ${order.buyerName}<br>
      Address: ${order.buyerAddress}<br>
      Payment: ${order.paymentMethod}<br>
      Ordered On: ${order.date}<br>
      <p style="color:green;font-weight:bold;">${order.status}</p>
    `;
    container.appendChild(orderDiv);
  });

}