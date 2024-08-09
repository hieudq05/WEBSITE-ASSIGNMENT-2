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
    let cartProductArr =
        JSON.parse(localStorage.getItem("cart")) === null
            ? []
            : JSON.parse(localStorage.getItem("cart"));
    let count = 0;
    if (cartProductArr !== null) {
        cartProductArr.forEach((cartProduct) => {
            count += Number.parseInt(cartProduct.count);
        });
    } else {
        count = count_Product.innerHTML;
    }
    count_Product.innerHTML = count;
    let count_Product_In_Product_Frame = document.querySelector(
        ".product-frame .product-inf .add button:nth-child(2) div"
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
    let namePr = size[0].parentNode.parentNode.firstChild.innerHTML;
    let srcImg =
        size[0].parentNode.parentNode.parentNode.childNodes[1].childNodes[0].getAttribute(
            "src"
        );
    let price = parseNumber(
        document.querySelector(
            ".product-frame > .product-inf > .price > .price-curent"
        ).innerHTML
    );
    let id = document.getElementsByClassName("id")[0].innerHTML;
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
        if (sizeChild.className) {
            sizeIsChoosed = true;
        }
    });
    let colorIsChoosed = false;
    color.forEach((colorChild) => {
        if (colorChild.parentNode.className) {
            colorIsChoosed = true;
        }
    });

    if (colorIsChoosed === false) {
        color[0].parentNode.parentNode.style.outline = "2px solid black";
    }
    if (sizeIsChoosed === false) {
        size[0].parentNode.style.outline = "2px solid black";
    }
    if (colorIsChoosed === true && sizeIsChoosed === true) {
        let cartProductAdded = new product_Model();
        color.forEach((colorChild) => {
            if (colorChild.parentNode.className === "button-color-active") {
                cartProductAdded.color = colorChild.style.backgroundColor;
            }
        });
        size.forEach((sizeChild) => {
            if (sizeChild.className === "button-size-active") {
                cartProductAdded.size = sizeChild.innerHTML;
            }
        });
        cartProductAdded.count = count.value;
        cartProductAdded.id = id;
        cartProductAdded.namePr = namePr;
        cartProductAdded.price = price;
        cartProductAdded.sale = sale;
        cartProductAdded.srcImg = srcImg;
        cartProductAdded.type = undefined;
        let cartProductArr =
            JSON.parse(localStorage.getItem("cart")) === null
                ? []
                : JSON.parse(localStorage.getItem("cart"));
        cartProductArr.push(cartProductAdded);
        cartProductArr.sort((a, b) => a.id - b.id);
        localStorage.setItem("cart", JSON.stringify(cartProductArr));
        displayCountCart();
    }
}
