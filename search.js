const searchBox = document.querySelector('.searchbox');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeClose = document.querySelector('.recipe-closeBtn');
const mainHeader = document.querySelector('header'); 
const searchForm = document.querySelector('.header form'); 

// Buy Now Modal Elements
let buyModal, buyModalContent, buyModalClose;

const ecoProducts = [
  {
    name: "Bamboo Toothbrush",
    category: "Personal Care",
    origin: "India",
    description: "A biodegradable toothbrush made from sustainable bamboo wood.",
    keywords: ["bamboo brush", "toothbrush", "brush", "bamboo toothbrush", "eco brush"],
    basePrice: 80,
    images: [
      "https://m.media-amazon.com/images/I/71Exe0IrXcL.jpg",
      "https://thebamboobae.com/cdn/shop/products/26-2.jpg?v=1663759177&width=1445",
      "https://m.media-amazon.com/images/I/91RdJnztUjL._AC_UF1000,1000_QL80_.jpg",
       "https://www.allurecosmetics.in/cdn/shop/files/182_d2c36146-4610-490d-869d-eda60ac6c658_1120x.jpg?v=1688949159",
      "https://thebamboobae.com/cdn/shop/products/26-2.jpg?v=1663759177&width=1445",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunbV4Tg_qXBtVwMtLUgGP7tYuD9OqR_yJAg&s",     
      "https://m.media-amazon.com/images/I/91RdJnztUjL._AC_UF1000,1000_QL80_.jpg",
      "https://i.etsystatic.com/20034269/r/il/0136a0/1936492330/il_fullxfull.1936492330_hhxi.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kEAgRU1_-vjJ5fuo8-NV1fRRbkoyWu4FUw&s",
      "https://chateaudusavon.com/cdn/shop/products/20150_1200x.jpg?v=1661780205",
      "https://personalisedfavours.com.au/cdn/shop/products/engraved-wooden-toothbrush-1_1_1024x1024.jpg?v=1677652274",
      "https://m.media-amazon.com/images/I/818HQZIZgZL._AC_UF1000,1000_QL80_.jpg",
      "https://tiimg.tistatic.com/fp/1/007/073/soft-pure-natural-eco-friendly-biodegradable-wooden-toothbrush-231.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/11/RP/GI/TL/140258896/natural-bamboo-tooth-brush-500x500.png",
      "https://wudbox.in/wp-content/uploads/2023/01/Wooden-Toothbrush-Holder-2-scaled.jpeg",
      "https://orossentials.com/cdn/shop/products/1_77b6ec95-7207-4d5e-bb39-a5820a51d071.png?v=1677228377&width=533",
      "https://www.allurecosmetics.in/cdn/shop/files/181_f97d2179-7e78-4e1c-ac7a-6d990f198856_1120x.jpg?v=1688949166",
      "https://image.made-in-china.com/202f0j00KvTolNEMfBkh/Eco-Friendly-Bamboo-Wooden-Toothbrush-for-Hotel-Room-Using.webp",
      "https://superflysoap.com/cdn/shop/files/CHILDSTOOTHBRUSH_200x200.jpg?v=1728565306",
      "https://www.thelostandfounddepartment.com.au/cdn/shop/products/20210525CrollWoodenToothbrushAdults-123_1024x1024.jpg?v=1622757385",
      "https://www.jiomart.com/images/product/original/rvqmxzod5t/avino-organic-bamboo-toothbrush-eco-friendly-wooden-vegan-toothbrushes-for-sensitive-gums-set-of-3-product-images-orvqmxzod5t-p604000191-0-202308222121.jpg?im=Resize=(1000,1000)",
      "https://naturalspasupplies.co.uk/cdn/shop/files/Wooden_toothbrush_loaded_with_walnut_powder.jpg?v=1761656430",
      "https://organicb.in/wp-content/uploads/2021/05/Organic-B-7.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstej4C7fsSPHDbJOVjh81JZLVAwj6kfOe0w&s",
      "https://img.freepik.com/free-vector/wooden-bamboo-toothbrush-dental-care-oral-hygiene-stomatological-product-wood-toiletries-templates-wood-tooth-brush-isolated-realistic-3d-vector-illustration_107791-4172.jpg",
      "https://organicindia.com/cdn/shop/files/3-Toothbrush_grande.jpg?v=1708949510",





    ],
    materials: ["Bamboo handle", "Plant-based bristles", "Compostable packaging"]
  },
  {
    name: "Reusable Steel Water Bottle",
    category: "Sustainable Living",
    origin: "USA",
    description: "A stainless-steel water bottle to reduce single-use plastic waste.",
    basePrice: 250,
    keywords: ["bottle", "water bottle", "plastic bottle", "pani bottle", "botal"],
    images: [
      "https://images.jdmagicbox.com/quickquotes/images_main/eco-friendly-bottles-2022061515-d18javew.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHgAbCSR12Oxw9QeLLac_YzyAl3GMOE_eig&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZ1rOtZUOy4m3hbbgp27D_IKXBkaO2_mwXQ&s",

       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sxXwnPHqD0w77a1nwLH86x6A25vz3nGRpQ&s",
      "https://5.imimg.com/data5/SELLER/Default/2023/3/296680754/OD/XB/NJ/12455541/7th-natural-21-01-2023-13374-copy-jpg.jpg",
      "https://packagingbee.co.uk/wp-content/uploads/2023/02/eco-friendly-bottle-packaging.webp",
      "https://images.jdmagicbox.com/quickquotes/images_main/eco-friendly-bottles-2022061515-mppdfk5y.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2b22c4db-43fb-4c38-b39d-f4ee23dc454b.__CR0,0,400,450_PT0_SX200_V1___.jpg",
      "https://m.media-amazon.com/images/I/81bHB5zrTCL._UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71yXhs+vEuL._AC_SL1500_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/81VinUJR0JL._AC_UL495_SR435,495_.jpg",
      "https://images.jdmagicbox.com/quickquotes/images_main/nirlon-copper-water-bottle-15-03-2022-10759-271064041-750a7zu6.jpg",
     
    ],
    materials: ["Stainless steel", "BPA-free lid"]
  },
  {
    name: "cotton products",
    category: " based on ecofriendly products",
    origin: "India",
    description: "ecofriendly products",
    basePrice: 450,
    keywords: ["cotton", "cotton pads", "cotton clothes", "cotton bags", "clothes"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGu-YBE1fTfMAe2f2HCjjEUx-pzZApmfKxw&s",
      "https://5.imimg.com/data5/DQ/DU/ZP/SELLER-72269125/buy-organic-cotton-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGu-YBE1fTfMAe2f2HCjjEUx-pzZApmfKxw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXISG5TSv-nZyvjHEEey4s4x3TBQA19Pwsw&s",
      "https://www.peesafe.com/cdn/shop/articles/635712532-__cotton-vs-synthetic-pad.jpg?v=1720518776&width=1500",
      "https://sanfe.in/cdn/shop/articles/Blog.png?v=1599310376",
      "https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2/static/img/product/199972/sanfe-bamboo-sanitary-pads-ultra-thin-natural-sanitary-napkins-day-pads-12-pads_7_display_1624943954_a8adb295.jpg",
      "https://5.imimg.com/data5/DQ/DU/ZP/SELLER-72269125/buy-organic-cotton-500x500.jpg",
       "https://vrittidesigns.com/wp-content/uploads/2020/08/IMG_0388.jpg",
       "https://www.thespruce.com/thmb/ChGbznQR-_RTq1aW-Gf-bEI-2Uo=/1800x1200/filters:no_upscale()/keep-cotton-clothes-looking-great-2147020-01-d767e712c483486e9e63b8c8818a494d.jpg",
       "https://media.istockphoto.com/id/1345934516/photo/natural-organic-cotton-t-shirts-and-cotton-plant-flowers-on-white-table-eco-clothes-fashion.jpg?s=612x612&w=0&k=20&c=EMLo2G_aBcJ9g2rVPinW01iNnscqgyD_wWz4-SnlR8A=",
       "https://cdn.shopify.com/s/files/1/0641/9152/9173/files/POMP_benefits_of_organic_cotton_clothing-min.png?v=1676546848",
       "https://media.istockphoto.com/id/1078545666/photo/stack-knitted-clothes-cotton-flower.jpg?s=612x612&w=0&k=20&c=A9fSvxLxkzZ05U3g99iXuoHC-M2qC289DqsfsAwGNtw=",
      "https://ninobambino.in/cdn/shop/articles/2_June_blog_banner.jpg?v=1654151593",
      "https://m.media-amazon.com/images/I/717tJH5vB3L._AC_UY1100_.jpg",
      "https://landing-page-backend.s3.ap-south-1.amazonaws.com/blog_page_prodimages/3b2cf19f-0710-465b-8444-e12628951bf3/Eco-friendly-Cotton-Clothing_auto.png",
      "https://cdn.shopify.com/s/files/1/0050/3264/0601/files/navy-blue-handspun-cotton-a-line-front-slit-maxi-dress-428433_1200x.jpg?v=1733557280",
      "https://brownliving.in/cdn/shop/files/sajjayen-dabu-block-print-organic-cotton-bamboo-linen-shirt-mens-shirt-s-vasudhaa-vastrram-vblhs6s001m5006-6336622.jpg?v=1755654153&width=900",
      "https://www.sanskrutistore.com/cdn/shop/collections/Cotton_Fabrics_Buy_Now_large.jpg?v=1580797082",
      "https://www.thespruce.com/thmb/x-Oc1E3NpkD0AGT9A9H3fsnv1xc=/1736x0/filters:no_upscale():max_bytes(150000):strip_icc()/keep-cotton-clothes-looking-great-2147020-Front-0e9db62794bf40769077980ed41bf8ba.jpg",
      "https://pomp.store/cdn/shop/articles/znz92h1hor8cdjtqx1cftqeriu6swbs95bqw0f968ck9ujbz_3.jpg?v=1676547961&width=1500",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb34fI9fuZGWT98mDuZqyesys-uJucEikthA&s",
      "https://whitewaterkids.com/cdn/shop/products/WHITEWATERKIDSUNISEXORGANICESSENTIALWHITEKURTA_BLUECHAMBRAYPANTS2.jpg?v=1613671480",
      "https://championcare.in/wp-content/uploads/2019/07/1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2pomkX35Km8mj07b4jVEUjHOw8riFJaXmw&s",
      "https://images.boldsky.com/img/2014/03/27-cotton-clothes.jpg",
      "https://i.pinimg.com/736x/fe/dc/18/fedc18bc0ee8c16870d6a8c0174e1b51.jpg",
      "https://www.creaturesofhabit.in/cdn/shop/files/DSCF0655.jpg?v=1698135905",
  "https://image.made-in-china.com/2f0j00RdUlcoAKnakp/Fashion-Children-Clothes-Summer-Cotton-Baby-Girl-Dresses-Comfortable-Girls-Clothing.webp",
  "https://cdn.mos.cms.futurecdn.net/2qYwtrdZmB4hKKDocZwD7k.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmGcAsRYZnB25BixDpiNNzDhEdDSjYg92uQ&s",
      
     
    ],
    materials: ["Organic cotton", "Reusable fabric"]
  },
   {
    name: "ecofriendly products",
    category: "products based on only ecofriendy products",
    origin: "USA",
    description: "ecofriendly products",
    basePrice: 250,
    keywords: ["bottle", "water bottle", "plastic bottle", "pani bottle", "botal","eco-friendly products","organic product","recyclable materials","natural cleaning product","zero waste product","plastic free alternative","green living essentials","environmental safe products","non toxic home products","water saving accessories","Eco parking solutions","ethical fashion","Eco kitchenware","refillable bottles","Eco baby product","Eco office supplies","energy efficient device","plant based materials","recycled paper goods","green technology","organic cotton clothing","wooden toys","solar lamps","Eco gardening tools","compost bins","Eco home applications","Eco yoga mats","Eco lunch box","pick up gift items","Eco pet product","solar chargers","organic tea and coffee","natural air fresheners","Eco cleaning brush","reusable cotton pads","organic skincare","Eco shampoo bars","recycled notebook","Eco shopping cards","Soy wax candle","handmade paper","Eco furniture polish","eco baby bottle"],
    images: [
      "https://images.jdmagicbox.com/quickquotes/images_main/eco-friendly-bottles-2022061515-d18javew.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHgAbCSR12Oxw9QeLLac_YzyAl3GMOE_eig&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZ1rOtZUOy4m3hbbgp27D_IKXBkaO2_mwXQ&s",

       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sxXwnPHqD0w77a1nwLH86x6A25vz3nGRpQ&s",
      "https://5.imimg.com/data5/SELLER/Default/2023/3/296680754/OD/XB/NJ/12455541/7th-natural-21-01-2023-13374-copy-jpg.jpg",
      "https://packagingbee.co.uk/wp-content/uploads/2023/02/eco-friendly-bottle-packaging.webp",
      "https://images.jdmagicbox.com/quickquotes/images_main/eco-friendly-bottles-2022061515-mppdfk5y.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2b22c4db-43fb-4c38-b39d-f4ee23dc454b.__CR0,0,400,450_PT0_SX200_V1___.jpg",
      "https://m.media-amazon.com/images/I/81bHB5zrTCL._UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71yXhs+vEuL._AC_SL1500_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/81VinUJR0JL._AC_UL495_SR435,495_.jpg",
      "https://images.jdmagicbox.com/quickquotes/images_main/nirlon-copper-water-bottle-15-03-2022-10759-271064041-750a7zu6.jpg",
    "https://kamereo.vn/blog/wp-content/uploads/2024/05/san-pham-than-thien-voi-moi-truong-thumbnail-1-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEddFMaLXcBmvnXYEZiSeSYQrgeIsAxfT7GA&s",
    "https://amwoodo.com/wp-content/uploads/2024/05/personal-care-a-scaled.jpg", 
    "https://amwoodo.com/wp-content/uploads/2024/05/personal-care-a-scaled.jpg",
    "https://i.guim.co.uk/img/media/b6bb78245a61c61fd659e4a06b34f32eab94241a/0_0_4129_2771/master/4129.jpg?width=700&quality=85&auto=format&fit=max&s=a192c33c32030f4ca16c5aa7f849f53c",
    "https://www.greenwashingindex.com/wp-content/uploads/2024/01/10-Essential-Eco-Friendly-Products-For-Green-Living.jpg",
    "https://a.storyblok.com/f/102007/768x432/94c9316db2/sustainable-packaging-paper-eco-friendly-disposable-tableware-plates-cups-bowls-recycling-signs.jpg/m/filters:quality(90)",
    "https://agaonthe.run/wp-content/uploads/2023/06/Eco-friendly_travel_products_Pinterest.png",
    "https://litextension.com/blog/wp-content/uploads/2023/08/cowpots.webp",
    "https://biodegradabletechsolutions.com/wp-content/uploads/2023/12/Sustainable-Living-Products.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gh9e5hDFTASLmBUfuy4_g4fEmcjkc9zo8A&s",
    "https://blogscdn.thehut.net/app/uploads/sites/31/2024/07/sustainable-beauty-pic_1720514638.png",
    "https://alidropship.com/wp-content/uploads/2023/11/Eco-Friendly-Product-Trends_02-min.jpg",
    "https://whatisgreenliving.com/wp-content/uploads/2024/04/What-Is-Eco-Friendly-Illustration.jpg",
    "https://www.letsbeco.com/cdn/shop/articles/front-view-natural_67663c62-2999-4f04-a270-966ad2fb2188.jpg?v=1758543373",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy87pY89SRULNzYdvT3DeCM7EdynHIwZLt9g&s",
    "https://i.pinimg.com/736x/45/15/e4/4515e4635a660fed93e7f6b3cb03a1ad.jpg",
    "https://cdn.shopify.com/s/files/1/0831/4814/4961/files/Doga-Dostu-Urun-Kullanmak-Neden-Onemlidir.jpg?v=1710840733",
    "https://i.ytimg.com/vi/OY5eba3jxmg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-2_elYBk5lIbUJL6NIWKiEzSALw",
    "https://i.ytimg.com/vi/OY5eba3jxmg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-2_elYBk5lIbUJL6NIWKiEzSALw",
    "https://5.imimg.com/data5/GV/SQ/LV/SELLER-92979007/areca-ecofriendly-disposable-products-500x500.jpg",
    "https://blog.nkrealtors.com/wp-content/uploads/2020/06/eco-friendly-home-products-and-decor.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgt0vXEZCvV7zGvNRlkPz-DQtclY6d4BI9g&s",
    "https://shop.arcedior.com/cdn/shop/articles/3D_Birchply_Multilayered_Wooden_World_Map_for_Wall.webp?v=1709368654&width=1200",
    "https://www.allcountyrecycling.com/blog/admin/uploads/2020/pexels-karolina-grabowska-4202919.jpg",
    "https://thegreenvibe.in/wp-content/uploads/2023/09/diy-craft-scaled.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/637bf6e60dfc2253ec817eec/0x0.jpg?format=jpg&crop=3564,2673,x0,y0,safe&height=900&width=1600&fit=bounds",
    "https://cdn.shopify.com/s/files/1/0091/5911/4831/files/WhatsApp_Image_2022-10-03_at_10.39.14_AM_1024x1024.jpg?v=1664790017",
    "https://handmadeearth.in/wp-content/uploads/2023/05/Eco_Friendly_Handmade_Kauna_Long_U_Bag-removebg-preview-1.png",
    "https://a.storyblok.com/f/165154/1280x720/5c2fd13928/hero-image_1280x720-1.jpg/m/",
    ],
    materials: ["ecofriendly products", "use ecofriendly and stay safe our enviroment"]
  },
];

// 🔍 Search Function
const fetchEcoProducts = (query) => {
  recipeContainer.innerHTML = "<h2>Searching Eco-Friendly Products...</h2>";

  setTimeout(() => {
    const results = ecoProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
    );

    recipeContainer.innerHTML = "";

    if (results.length === 0) {
      recipeContainer.innerHTML = `<h2>No eco-friendly products found for "${query}"</h2>`;
      return;
    }

    results.forEach(product => {
      product.images.forEach((imageUrl, i) => {
        const price = product.basePrice + (i * 30);
        const discount = Math.floor(Math.random() * 20) + 10;
        const finalPrice = Math.round(price - (price * discount / 100));

        const productDiv = document.createElement('div');
        productDiv.classList.add('recipe');
        productDiv.innerHTML = `
          <img src="${imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p><strong>Origin:</strong> ${product.origin}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> 
            <span style="color:green;">₹${finalPrice}</span> 
            <small style="text-decoration:line-through;color:gray;">₹${price}</small> 
            <span style="color:red;">(${discount}% off)</span>
          </p>
        `;

        // View Details Button
        const viewBtn = document.createElement('button');
        viewBtn.textContent = "View Details";
        viewBtn.addEventListener('click', () => openProductPopup(product));
        productDiv.appendChild(viewBtn);

        // Buy Now Button
        const buyBtn = document.createElement('button');
        buyBtn.textContent = "Buy Now";
        buyBtn.marginTop="2rem";
        buyBtn.style.marginLeft = "10px";
        buyBtn.addEventListener('click', () => openBuyModal(product));
        productDiv.appendChild(buyBtn);

        // 🛒 Add Cart Button
        const addCartBtn = document.createElement('button');
        addCartBtn.textContent = "Add Cart";
       // addCartBtn.style.display = "block";
        addCartBtn.style.marginRight = "10px ";
        addCartBtn.style.backgroundColor = "blue";
        addCartBtn.style.color = "white";
        addCartBtn.style.border = "none";
        addCartBtn.style.padding = "8px 15px";
        addCartBtn.style.borderRadius = "6px";
        addCartBtn.style.cursor = "pointer";
        addCartBtn.addEventListener('click', () => addToCart(product, finalPrice));
        productDiv.appendChild(addCartBtn);

        recipeContainer.appendChild(productDiv);
      });
    });
  }, 500);
};

// 🛒 Add to Cart Function
function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("ecoCart")) || [];
  cart.push({
    name: product.name,
    price: price,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("ecoCart", JSON.stringify(cart));
  alert(`${product.name} added to cart ✅`);
}

// 📦 Product Details Modal
const openProductPopup = (product) => {
  const materialsList = product.materials.map(m => `<li>${m}</li>`).join('');
  recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${product.name}</h2>
    <div class="image-gallery" style="display:flex;gap:10px;overflow-x:auto;">
      ${product.images.map(img => `<img src="${img}" alt="${product.name}" style="width:150px;border-radius:8px;">`).join('')}
    </div>
    <h3>Eco-friendly Materials:</h3>
    <ul class="ingredientList">${materialsList}</ul>
    <div class="recipeInstruction">
      <h3>Description</h3>
      <p>${product.description}</p>
    </div>
  `;
  recipeDetailsContent.parentElement.style.display = "block";
};

// Close Product Details
recipeClose.addEventListener('click', () => {
  recipeDetailsContent.parentElement.style.display = "none";
});

// 💰 Buy Now Modal
const openBuyModal = (product) => {
  const modal = document.createElement('div');
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.6)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.zIndex = "1000";

  const modalBox = document.createElement('div');
  modalBox.style.background = "gray";
  modalBox.style.padding = "20px";
  modalBox.style.borderRadius = "10px";
  modalBox.style.width = "90%";
  modalBox.style.maxWidth = "400px";

  modalBox.innerHTML = `
    <span id="buyClose" style="float:right;cursor:pointer;font-size:22px;">&times;</span>
    <h2>Buy ${product.name}</h2>
    <label>Name:<br><input type="text" id="buyerName" placeholder="Your Name"></label><br><br>
    <label>Address:<br><textarea id="buyerAddress" placeholder="Your Address"></textarea></label><br><br>
    <label>Payment Method:<br>
      <select id="paymentMethod">
        <option value="cod">Cash on Delivery</option>
        <option value="online">Online Payment</option>
      </select>
    </label><br><br>
    <button id="placeOrderBtn">Place Order</button>
  `;

  modal.appendChild(modalBox);
  document.body.appendChild(modal);

  document.getElementById('buyClose').onclick = () => modal.remove();

  document.getElementById('placeOrderBtn').onclick = () => {
    const name = document.getElementById('buyerName').value.trim();
    const address = document.getElementById('buyerAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;


if(input=""){
  onclck="placeholderBtn";
  alert("fill your input")
}

if(onclick="placeorderBtn"){
  alert("order confirm ");
  return;
}


    if (!name || !address) {
      alert("Please fill Name and Address.");
      return;
    }

    const order = {
      productName: product.name,
      productPrice: product.basePrice,
      buyerName: name,
      buyerAddress: address,
      paymentMethod: payment === "cod" ? "Cash on Delivery" : "Online Payment",
      date: new Date().toLocaleString()
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));

    // Redirect to myorder.html
    window.location.href = "myorder.html";
  };
};

// 🔎 Search Form Handler
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchTerm = searchBox.value.trim();

  if (searchTerm !== "") {
    mainHeader.style.display = "none"; 
    fetchEcoProducts(searchTerm);
  } else {
    recipeContainer.innerHTML = `<h2>Please type the eco-friendly product name</h2>`;
  }
});

searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchForm.dispatchEvent(new Event('submit'));
  }
});




