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

function displaySumPrice() {
    const productArr = document.getElementsByClassName("product");
    const productSumPrice = document.querySelector(
        ".sum-price-container .sum .price"
    );
    const productTax = document.querySelector(
        ".sum-price-container .tax .price"
    );
    const productSumAll = document.querySelector(
        ".sum-price-container .sum-all .price"
    );
    let sumPrice = 0;
    for (let index = 0; index < productArr.length; index++) {
        if (
            productArr[index].childNodes[0].childNodes[1].childNodes[1]
                .childNodes[0].className === "sale"
        ) {
            productArr[
                index
            ].childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerHTML =
                parsePrice(
                    cartProductArr[index].price *
                        parseNumber(
                            productArr[index].childNodes[0].childNodes[1]
                                .childNodes[0].childNodes[2].childNodes[1]
                                .childNodes[1].value
                        )
                );
            sumPrice += parseNumber(
                productArr[index].childNodes[0].childNodes[1].childNodes[1]
                    .childNodes[1].innerHTML
            );
        } else {
            productArr[
                index
            ].childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerHTML =
                parsePrice(
                    cartProductArr[index].price *
                        parseNumber(
                            productArr[index].childNodes[0].childNodes[1]
                                .childNodes[0].childNodes[2].childNodes[1]
                                .childNodes[1].value
                        )
                );
            sumPrice += parseNumber(
                productArr[index].childNodes[0].childNodes[1].childNodes[1]
                    .childNodes[0].innerHTML
            );
        }
    }
    if (sumPrice === 0) {
        productSumPrice.innerHTML = "-";
        productTax.innerHTML = "-";
        productSumAll.innerHTML = "-";
    } else {
        productSumPrice.innerHTML = parsePrice(sumPrice);
        productTax.innerHTML = parsePrice(sumPrice / 20);
        productSumAll.innerHTML = parsePrice(sumPrice + sumPrice / 20);
    }
}

function deleteFromList(buttonDelete) {
    let productContainer = document.querySelector(
        ".container .list-product .product-container"
    );
    productContainer.removeChild(
        buttonDelete.parentNode.parentNode.parentNode.parentNode.parentNode
            .nextSibling
    );
    productContainer.removeChild(
        buttonDelete.parentNode.parentNode.parentNode.parentNode.parentNode
    );
}

function displayStatusCart() {
    let statusCart = document.getElementsByClassName("status")[0];
    let productArray = document.querySelectorAll(
        ".container .list-product .product-container .product"
    );
    if (productArray.length == 0) {
        statusCart.innerHTML =
            "Chưa có sản phẩm nào trong giỏ hàng. Bạn hãy mua sắm thêm rồi quay lại nhé😘";
    } else {
        statusCart.innerHTML = "";
    }
}

function displayCartProduct(productArr, allProductArr) {
    let productContainer =
        document.getElementsByClassName("product-container")[0];
    productArr.forEach((cartProduct) => {
        let product = document.createElement("div");
        product.classList.add("product");
        productContainer.appendChild(product);
        let line = document.createElement("hr");
        productContainer.appendChild(line);
        let top = document.createElement("div");
        top.classList.add("top");
        product.appendChild(top);
        let bottom = document.createElement("div");
        bottom.classList.add("bottom");
        product.appendChild(bottom);
        let image = document.createElement("img");
        image.setAttribute("src", cartProduct.srcImg);
        top.appendChild(image);
        let inf = document.createElement("div");
        inf.classList.add("inf");
        top.appendChild(inf);
        let inf1 = document.createElement("div");
        inf1.classList.add("inf1");
        inf.appendChild(inf1);
        let inf2 = document.createElement("div");
        inf2.classList.add("inf2");
        inf.appendChild(inf2);
        let productName = document.createElement("div");
        productName.innerHTML = cartProduct.namePr;
        productName.classList.add("productName");
        inf1.appendChild(productName);
        let type = document.createElement("div");
        type.innerHTML = cartProduct.color;
        type.classList.add("type");
        inf1.appendChild(type);
        let type2 = document.createElement("div");
        type2.classList.add("type2");
        inf1.appendChild(type2);
        let size = document.createElement("div");
        size.classList.add("size");
        type2.appendChild(size);
        let count = document.createElement("div");
        count.classList.add("count");
        type2.appendChild(count);
        let labelSize = document.createElement("div");
        labelSize.innerHTML = "Kích thước:";
        labelSize.classList.add("labelSize");
        size.appendChild(labelSize);
        let selectList = document.createElement("select");
        size.appendChild(selectList);
        allProductArr.forEach((objectProduct) => {
            if (objectProduct.id === cartProduct.id) {
                objectProduct.size.forEach((sizeChild) => {
                    let optionSize = document.createElement("option");
                    optionSize.innerHTML = sizeChild;
                    selectList.appendChild(optionSize);
                });
            }
        });
        let labelCount = document.createElement("div");
        labelCount.innerHTML = "Số lượng:";
        labelCount.classList.add("labelCount");
        count.appendChild(labelCount);
        let inputCount = document.createElement("input");
        inputCount.setAttribute("type", "number");
        inputCount.setAttribute("value", cartProduct.count);
        inputCount.setAttribute("min", "1");
        count.appendChild(inputCount);
        let control = document.createElement("div");
        control.classList.add("control");
        inf1.appendChild(control);
        let buttonDelete = document.createElement("button");
        control.appendChild(buttonDelete);
        let imgBtnDelete = document.createElement("img");
        imgBtnDelete.setAttribute("src", "/public/image/delete.png");
        buttonDelete.appendChild(imgBtnDelete);
        if (cartProduct.sale !== undefined) {
            let sale = document.createElement("div");
            sale.innerHTML = parsePrice(cartProduct.sale * cartProduct.count);
            sale.classList.add("sale");
            inf2.appendChild(sale);
        }
        let price = document.createElement("div");
        price.innerHTML = parsePrice(cartProduct.price * cartProduct.count);
        price.classList.add("price");
        inf2.appendChild(price);
    });
}

let cartProductArr = JSON.parse(localStorage.getItem("cart"));
displayCartProduct(cartProductArr, product);
displaySumPrice();
displayStatusCart();

var productCount = document.querySelectorAll(
    ".list-product .product-container .product .top .inf .inf1 .type2 .count input"
);
var btnDeleteProduct = document.querySelectorAll(
    ".list-product .product-container .product .top .inf .inf1 .control button"
);
productCount.forEach((count) => {
    count.addEventListener("change", () => {
        displaySumPrice();
    });
});
btnDeleteProduct.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
        deleteFromList(btnDelete);
        displaySumPrice();
        displayStatusCart();
    });
});
displayCountCart();

let cart = [
    new product_Model(
        "261020051",
        "./image/QuanAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        "white",
        "L",
        "901000",
        2,
        "áo"
    ),
    new product_Model(
        "261020052",
        "./image/QuanAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "1039000",
        "black",
        "XL",
        undefined,
        5,
        "áo"
    ),
];
