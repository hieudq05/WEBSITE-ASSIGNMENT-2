function parseNumber(price) {
    let numberString = price.replace(/[^\d]/g, "");
    let number = parseInt(numberString, 10);
    return number;
}

function parsePrice(number) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(number);
}

function displayCountCart() {
    let count_Product = document.querySelector("nav .menu ul a div");
    let cartProductArr = JSON.parse(localStorage.getItem("cart"));
    let count = 0;
    cartProductArr.forEach((cartProduct) => {
        count += Number.parseInt(cartProduct.count);
    });
    count_Product.innerHTML = count;
    let count_Product_In_Product_Frame = document.querySelector(
        ".product-frame .product-inf .add button:nth-child(3) div"
    );
    if (count_Product_In_Product_Frame !== null) {
        count_Product_In_Product_Frame.innerHTML = count;
    }
}

function addProductToCart() {
    let count = document.querySelector(
        ".product-frame .product-inf .count input"
    );
    let color = document.querySelectorAll(
        ".product-frame .product-inf .color button"
    );
    let size = document.querySelectorAll(
        ".product-frame > .product-inf > .size > button"
    );
    let price = parseNumber(
        document.querySelector(
            ".product-frame > .product-inf > .price > .price-curent"
        ).innerHTML
    );
    let sale;
    if (
        document.querySelector(
            ".product-frame > .product-inf > .price > .sale"
        ) === null
    ) {
        sale = undefined;
    } else {
        sale = parseNumber(
            document.querySelector(
                ".product-frame > .product-inf > .price > .sale"
            ).innerHTML
        );
    }

    let sizeIsChoosed = false;
    size.forEach((sizeChild) => {
        if (sizeChild.getAttribute("class") !== null) {
            sizeIsChoosed = true;
        }
    });
    let colorIsChoosed = false;
    color.forEach((colorChild) => {
        if (colorChild.getAttribute("class") !== null) {
            colorIsChoosed = true;
        }
    });
    if (colorIsChoosed === false) {
        
    }
}
