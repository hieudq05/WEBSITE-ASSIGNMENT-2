const previous_button = document.getElementById("previous-button");
const next_button = document.getElementById("next-button");
const products = document.querySelectorAll(".product-container .product");
const product_container = document.querySelector(".product-container");

var width_product_image;
var index = 0;

console.log(previous_button);

previous_button.addEventListener("click", () => {
    width_product_image = products[0].clientWidth;
    if (index > 0) {
        index--;
        let value_translate = index*width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    } else {
        index=products.length-1;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    }
});

next_button.addEventListener("click", () => {
    width_product_image = products[0].clientWidth;
    if (index < products.length-1) {
        index++;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    } else {
        index = 0;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    }
});

class product_Model {
    constructor(srcImg, namePr, price, color, size, sale) {
        this.srcImg = srcImg;
        this.namePr = namePr;
        this.price = price;
        this.color = color;
        this.size = size;
        this.sale = sale;
    }
}

var product = [
    new product_Model(
        "/image/_ (1).jpeg",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL", "2XL"]
    ),
    new product_Model(
        "/image/_ (2).jpeg",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/Overview Archives - Rowan Fee Photography.jpeg",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/airbud_GG(1).webp",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/usb_Cable.webp",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/usb_power_charger.webp",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/watch(1).jpg",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/watch(2).jpg",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
];

var container_Product = document.getElementsByClassName("products-container");

for (let index = 0; index < product.length; index++) {
    let productImg = document.createElement("img");
    productImg.setAttribute("src", product[index].srcImg);
    let inf = document.createElement("div");
    inf.classList.add("inf");
    let name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = product[index].namePr;
    inf.appendChild(name);
    let container_Price = document.createElement("div");
    container_Price.classList.add("container-price");
    inf.appendChild(container_Price);
    if (product[index].sale != undefined) {
        let sale = document.createElement("div");
        sale.classList.add("sale");
        sale.innerHTML = product[index].sale;
        container_Price.appendChild(sale);
        let price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML = product[index].price;
        container_Price.appendChild(price);
    } else {
        let price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML = product[index].price;
        price.setAttribute(
            "style",
            "font-weight: 600;color: black;font-size: 16px;margin: 5px 0px 8px 0px;font-family: montserrat;text-decoration:none;"
        );
        container_Price.appendChild(price);
    }

    let color = document.createElement("div");
    color.classList.add("color");
    for (
        let index_Color = 0;
        index_Color < product[index].color.length;
        index_Color++
    ) {
        let child_Color_1 = document.createElement("div");
        let child_Color_2 = document.createElement("div");
        child_Color_2.style.backgroundColor = product[index].color[index_Color];
        child_Color_1.appendChild(child_Color_2);
        color.appendChild(child_Color_1);
    }
    inf.appendChild(color);
    let size = document.createElement("div");
    size.classList.add("size");
    for (
        let index_Size = 0;
        index_Size < product[index].size.length;
        index_Size++
    ) {
        let child_Size = document.createElement("div");
        child_Size.innerHTML = product[index].size[index_Size];
        size.appendChild(child_Size);
    }
    inf.appendChild(size);
    let buy = document.createElement("button");
    buy.innerHTML = "Buy";
    inf.appendChild(buy);

    let cart = document.createElement("button");
    let icon_Cart = document.createElement("img");
    icon_Cart.setAttribute("src", "/image/shopping_cart_2_line.png");
    cart.innerHTML= "Add to cart";
    inf.appendChild(cart);

    let productNode = document.createElement("div");
    productNode.classList.add("product");
    productNode.appendChild(productImg);
    productNode.appendChild(inf);
    container_Product[0].appendChild(productNode);
}
