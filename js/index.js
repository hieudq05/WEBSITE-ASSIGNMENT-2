const previous_button = document.getElementById("previous-button");
const next_button = document.getElementById("next-button");
const products = document.querySelectorAll(".product");
const product_container = document.querySelector(".product-container");

var width_product_image;
var index = 0;

setInterval(() => {
    width_product_image = products[0].clientWidth;
    let value_translate;
    if (index < products.length - 1) {
        value_translate = width_product_image * (index + 1);
        product_container.style.transform = `translateX(-${value_translate}px)`;
        index++;
    } else {
        console.log(index);
        product_container.style.transform = "translateX(0)";
        index = 0;
    }
}, 3000);
/*
previous_button.addEventListener("click", () => {
    width_product_image = products[0].clientWidth;
    let value_translate;
    if (index > 0) {
        value_translate = width_product_image * (index - 1);
        product_container.style.transform = `translateX(-${value_translate}px)`;
        index--;
    } else {
        value_translate = width_product_image * (products.length - 1);
        product_container.style.transform = `translateX(-${value_translate}px)`;
        index = products.length - 1;
    }
});

next_button.addEventListener("click", () => {
    width_product_image = products[0].clientWidth;
    let value_translate;
    if (index < products.length - 1) {
        value_translate = width_product_image * (index + 1);
        product_container.style.transform = `translateX(-${value_translate}px)`;
        index++;
    } else {
        console.log(index);
        product_container.style.transform = "translateX(0)";
        index = 0;
    }
});
*/
