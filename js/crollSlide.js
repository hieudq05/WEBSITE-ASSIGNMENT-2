const previous_button = document.getElementById("previous-button");
const next_button = document.getElementById("next-button");
const products = document.querySelectorAll(".product-container .product");
const product_container = document.querySelector(".product-container");

var index = 0;

previous_button.addEventListener("click", () => {
    width_product_image = products[0].clientWidth + 20;
    if (index > 0) {
        index--;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    } else {
        index = products.length - 3;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    }
});

next_button.addEventListener("click", () => {
    width_product_image = products[0].clientWidth + 20;
    if (index < products.length - 3) {
        index++;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    } else {
        index = 0;
        let value_translate = index * width_product_image;
        product_container.style.transform = `translateX(-${value_translate}px)`;
    }
});
