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
            productArr[
                index
            ].childNodes[0].childNodes[1].childNodes[1].childNodes[0].innerHTML =
                parsePrice(
                    cartProductArr[index].sale *
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
    for (
        let index = 0;
        index < productContainer.childNodes.length;
        index += 2
    ) {
        if (
            buttonDelete.parentNode.parentNode.parentNode.parentNode
                .parentNode === productContainer.childNodes[index]
        ) {
            let cartProductAfterDelete = JSON.parse(
                localStorage.getItem("cart")
            );
            cartProductAfterDelete.splice(index / 2, 1);
            localStorage.setItem(
                "cart",
                JSON.stringify(cartProductAfterDelete)
            );
            productContainer.removeChild(
                buttonDelete.parentNode.parentNode.parentNode.parentNode
                    .parentNode.nextSibling
            );
            productContainer.removeChild(
                buttonDelete.parentNode.parentNode.parentNode.parentNode
                    .parentNode
            );
        }
    }
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
        type.innerHTML =
            cartProduct.color.charAt(0).toUpperCase() +
            cartProduct.color.slice(1);
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
        selectList.value = cartProduct.size;
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
            let price = document.createElement("div");
            price.innerHTML = parsePrice(cartProduct.price * cartProduct.count);
            price.classList.add("price");
            inf2.appendChild(price);
        } else {
            let price = document.createElement("div");
            price.innerHTML = parsePrice(cartProduct.price * cartProduct.count);
            price.classList.add("price");
            price.style.textDecoration = "none";
            price.style.fontWeight = "500";
            price.style.color = "black";
            inf2.appendChild(price);
        }
    });
}

function updateCountCart(inputCount) {
    let productContainer = document.querySelector(
        ".container .list-product .product-container"
    );
    for (
        let index = 0;
        index < productContainer.childNodes.length;
        index += 2
    ) {
        if (
            inputCount.parentNode.parentNode.parentNode.parentNode.parentNode
                .parentNode === productContainer.childNodes[index]
        ) {
            let cartProductAfterUpdateCount = JSON.parse(
                localStorage.getItem("cart")
            );
            cartProductAfterUpdateCount[index / 2].count = inputCount.value;
            localStorage.setItem(
                "cart",
                JSON.stringify(cartProductAfterUpdateCount)
            );
        }
    }
}

function updateSizeCart(inputSize) {
    let productContainer = document.querySelector(
        ".container .list-product .product-container"
    );
    for (
        let index = 0;
        index < productContainer.childNodes.length;
        index += 2
    ) {
        if (
            inputSize.parentNode.parentNode.parentNode.parentNode.parentNode
                .parentNode === productContainer.childNodes[index]
        ) {
            let cartProductAfterUpdateSize = JSON.parse(
                localStorage.getItem("cart")
            );
            cartProductAfterUpdateSize[index / 2].size = inputSize.value;
            localStorage.setItem(
                "cart",
                JSON.stringify(cartProductAfterUpdateSize)
            );
        }
    }
}

function setName() {
    const userLoggedIn =
        JSON.parse(localStorage.getItem("accountLoggedIn")) == null
            ? "Đăng nhập"
            : JSON.parse(localStorage.getItem("accountLoggedIn"));
    var loginName = document.querySelector("nav > .menu > ul > a:nth-child(2)")
        .childNodes[0];
    switch (userLoggedIn) {
        case "Đăng nhập":
            loginName.innerHTML = userLoggedIn;
            loginName.parentNode.setAttribute("href", "/public/login.html");
            break;

        default:
            loginName.innerHTML = userLoggedIn.fullname;
            let popupLogOut = document.createElement("a");
            popupLogOut.innerHTML = "Đăng xuất";
            popupLogOut.style.display = "none";
            popupLogOut.style.color = "white";
            loginName.parentNode.addEventListener("mouseover", () => {
                popupLogOut.style.display = "flex";
            });
            loginName.parentNode.addEventListener("mouseout", () => {
                popupLogOut.style.display = "none";
            });
            popupLogOut.addEventListener("mouseover", () => {
                popupLogOut.style.display = "flex";
            });
            popupLogOut.addEventListener("mouseout", () => {
                popupLogOut.style.display = "none";
            });
            popupLogOut.setAttribute("href", "#");
            loginName.parentNode.appendChild(popupLogOut);
            loginName.parentNode.addEventListener("click", () => {
                localStorage.removeItem("accountLoggedIn");
                location.reload();
            });
            break;
    }
}

let cartProductArr =
    JSON.parse(localStorage.getItem("cart")) === null
        ? []
        : JSON.parse(localStorage.getItem("cart"));
displayCartProduct(cartProductArr, product);
displaySumPrice();
displayCountCart();
displayStatusCart();

var productCount = document.querySelectorAll(
    ".list-product .product-container .product .top .inf .inf1 .type2 .count input"
);
var btnDeleteProduct = document.querySelectorAll(
    ".list-product .product-container .product .top .inf .inf1 .control button"
);
var optionSize = document.querySelectorAll(
    ".list-product > .product-container > .product > .top > .inf > .inf1 > .type2 > .size > select"
);
productCount.forEach((count) => {
    count.addEventListener("change", () => {
        updateCountCart(count);
        displayCountCart();
        displaySumPrice();
    });
});
btnDeleteProduct.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
        deleteFromList(btnDelete);
        displayCountCart();
        displaySumPrice();
        displayStatusCart();
    });
});
optionSize.forEach((option) => {
    option.addEventListener("change", () => {
        updateSizeCart(option);
    });
});

setName();

const btnCheckOut = document.querySelector(
    ".container > .sum-price > .sum-price-container > button"
);
btnCheckOut.addEventListener("click", () => {
    if (cartProductArr.length !== 0) {
        if (localStorage.getItem("accountLoggedIn")) {
            alert("Thanh toán thành công");
            localStorage.removeItem("cart");
            location.reload();
        } else {
            alert("Vui lòng đăng nhập hoặc đăng ký để thanh toán!");
        }
    }
});
