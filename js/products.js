const  products = [
        {
            "id": 6,
            "title": "Apple iPhone 11",
            "image": "./images/products/iphone/iphone3.jpeg",
            "price": 760,
            "category": "Featured"
        },

        {
            "id": 3,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone2.jpeg",
            "price": 265,
            "category": "Special"
        },
        {
            "id": 4,
            "title": "Apple iPhone 11",
            "image": "./images/products/iphone/iphone2.jpeg",
            "price": 850,
            "category": "Special"
        },
        {
            "id": 8,
            "title": "Apple iPhone 11",
            "image": "./images/products/iphone/iphone4.jpeg",
            "price": 290,
            "category": "Featured"
        },
        {
            "id": 5,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone3.jpeg",
            "price": 250,
            "category": "Special"
        },

        {
            "id": 7,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone4.jpeg",
            "price": 365,
            "category": "Featured"
        },


        {
            "id": 10,
            "title": "Apple iPhone 11 Pro",
            "image": "./images/products/iphone/iphone5.jpeg",
            "price": 385,
            "category": "Special"
        },
        {
            "id": 11,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone6.jpeg",
            "price": 475,
            "category": "Special"
        },
        {
            "id": 13,
            "title": "Apple iPhone 11",
            "image": "./images/products/iphone/iphone6.jpeg",
            "price": 800,
            "category": "Trending"
        },
        {
            "id": 12,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone7.jpeg",
            "price": 850,
            "category": "Special"
        },

        {
            "id": 14,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone7.jpeg",
            "price": 360,
            "category": "Trending"
        },
        {
            "id": 9,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone5.jpeg",
            "price": 320,
            "category": "Special"
        },
        {
            "id": 15,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone8.jpeg",
            "price": 305,
            "category": "Trending"
        },
        {
            "id": 16,
            "title": "Samsung Galaxy",
            "image": "./images/products/sumsung/samsung6.jpeg",
            "price": 400,
            "category": "Special"
        },
        {
            "id": 17,
            "title": "Samsung Galaxy",
            "image": "./images/products/sumsung/samsung5.jpeg",
            "price": 550,
            "category": "Trending"
        },
        {
            "id": 2,
            "title": "Apple iPhone 11",
            "image": "./images/products/iphone/iphone1.jpeg",
            "price": 300,
            "category": "Special"
        },
        {
            "id": 18,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone9.jpeg",
            "price": 630,
            "category": "Trending"
        },
        {
            "id": 20,
            "title": "Samsung Galaxy",
            "image": "./images/products/sumsung/samsung4.jpeg",
            "price": 270,
            "category": "Special"
        },
        {
            "id": 19,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone10.jpeg",
            "price": 250,
            "category": "Trending"
        },
        {
            "id": 1,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone1.jpeg",
            "price": 265,
            "category": "Special"
        },
        {
            "id": 24,
            "title": "Samsung Galaxy",
            "image": "./images/products/sumsung/samsung2.jpeg",
            "price": 500,
            "category": "Featured"
        },
        {
            "id": 21,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone11.jpeg",
            "price": 700,
            "category": "Trending"
        },

        {
            "id": 25,
            "title": "Samsung Galaxy",
            "image": "./images/products/sumsung/samsung1.jpeg",
            "price": 450,
            "category": "Special"
        },
        {
            "id": 22,
            "title": "Samsung Galaxy",
            "image": "./images/products/sumsung/samsung3.jpeg",
            "price": 460,
            "category": "Trending"
        },
        {
            "id": 23,
            "title": "Sony WH-CH510",
            "image": "./images/products/headphone/headphone12.jpeg",
            "price": 600,
            "category": "Featured"
        }

    ];


const categoryCenter = document.querySelector(".category__center");
const filterBtns = document.querySelectorAll('.filter-btn');


//load items
window.addEventListener('DOMContentLoaded' ,function(){
  displayProductsItems(products)
});

//filter item
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const productCategory = products.filter(function (productItem){
            if(productItem.category === category){
                return productItem;
            }          
        });
        if(category === "All"){
            displayProductsItems(products);
        }else{
            displayProductsItems(productCategory)
        }
    })
})



function displayProductsItems(productsItems){
      let displayProducts = productsItems.map(function(item) {
        
        return `<div class="product category__products">
                     <div class="product__header">
                       <img src=${item.image} alt="${item.title}"/>
                     </div>
                     <div class="product__footer">
                       <h3>${item.title}</h3>
                       <div class="rating">
                         <svg>
                           <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                         </svg>
                         <svg>
                           <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                         </svg>
                         <svg>
                           <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                         </svg>
                         <svg>
                           <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                         </svg>
                         <svg>
                           <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                         </svg>
                       </div>
                       <div class="product__price">
                         <h4>$${item.price}</h4>
                       </div>
                       <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                     </div>
                   <ul>
                       <li>
                         <a data-tip="Quick View" data-place="left" href="#">
                           <svg>
                             <use xlink:href="./images/sprite.svg#icon-eye"></use>
                           </svg>
                         </a>
                       </li>
                       <li>
                         <a data-tip="Add To Wishlist" data-place="left" href="#">
                           <svg>
                             <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                           </svg>
                         </a>
                       </li>
                       <li>
                         <a data-tip="Add To Compare" data-place="left" href="#">
                           <svg>
                             <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                           </svg>
                         </a>
                       </li>
                   </ul>
                   </div> `;
    });
    displayProducts = displayProducts.join("")
    categoryCenter.innerHTML = displayProducts;
        // console.log(displayProducts)
}




  