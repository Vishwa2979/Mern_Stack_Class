let products=[
    {
        name:"Watch",
        price:1500,
        image:"https://picsum.photos/id/1/300/200"
    },
    {
        name:"Shoes",
        price:2500,
        image:"https://picsum.photos/id/21/300/200"
    },
    {
        name:"Bag",
        price:1800,
        image:"https://picsum.photos/id/26/300/200"
    },
    {
        name:"Headphones",
        price:3000,
        image:"https://picsum.photos/id/48/300/200"
    }
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(){
    let search=document.getElementById("search").value.toLowerCase();

    let container=document.getElementById("products");
    container.innerHTML="";

    products
    .filter(product=>product.name.toLowerCase().includes(search))
    .forEach((product,index)=>{
        let div=document.createElement("div");
        div.className="product";

        div.innerHTML=`
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;

        container.appendChild(div);
    });
}

function addToCart(index){
    cart.push(products[index]);
    localStorage.setItem("cart",JSON.stringify(cart));
    document.getElementById("cartCount").textContent=cart.length;
}

document.getElementById("cartCount").textContent=cart.length;

displayProducts();