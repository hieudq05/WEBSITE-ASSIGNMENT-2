//Hàm kiểm tra đăng nhập và hiển thị tên người dùng ở thanh điều khiển
function setName() {
    const userLoggedIn =
        JSON.parse(localStorage.getItem("accountLoggedIn")) == null
            ? "Đăng nhập"
            : JSON.parse(localStorage.getItem("accountLoggedIn"));
    var loginName = document.querySelector("nav > .menu > ul > a:nth-child(3)")
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

//Hàm thêm bộ lọc
function addFilter(FilterArray) {
    let listContainer = document.querySelector(
        ".container > .list-container > .filter > .list-option"
    );
    FilterArray.forEach((optionFilter) => {
        let option = document.createElement("button");
        listContainer.appendChild(option);
        let type = document.createElement("div");
        type.innerHTML =
            optionFilter.charAt(0).toUpperCase() + optionFilter.slice(1);
        option.appendChild(type);
        let icon = document.createElement("img");
        icon.setAttribute("src", "/public/image/check.png");
        option.appendChild(icon);
        if (optionFilter === "Tất cả") {
            let line = document.createElement("hr");
            listContainer.appendChild(line);
        }
    });
}

//Hàm thiết kế nút explore trong từng sản phẩm và sự kiện khi nhấp vào
function setMoreInfForProduct(productArray) {
    const btnExplore = document.querySelectorAll(
        ".list-product .container-product .product .inf button"
    );
    btnExplore.forEach((element) => {
        let icon = document.createElement("img");
        icon.src = "/public/image/arrow_right_up_line.png";
        icon.style.height = "2cap";
        icon.style.opacity = "0";
        icon.style.transition =
            "opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        icon.style.transitionDelay = "0.2s";
        element.appendChild(icon);
        element.style.display = "flex";
        element.style.alignItems = "center";
        element.style.gap = "5px";
        element.addEventListener("mouseover", () => {
            element.style.width = "100px";
            icon.style.opacity = "1";
        });
        element.addEventListener("mouseout", () => {
            element.style.width = "76px";
            icon.style.opacity = "0";
        });
    });
    btnExplore.forEach((element) => {
        element.addEventListener("click", () => {
            getMoreInf(element, product, "container-product");
        });
        element.parentNode.parentNode.childNodes[0].addEventListener(
            "click",
            () => {
                getMoreInf(element, productArray, "container-product");
            }
        );
    });
}

function clearProduct() {
    let containerProduct = document.querySelector(
        ".list-product > .container-product"
    );
    while (containerProduct.childNodes.length > 0) {
        containerProduct.childNodes[0].remove();
    }
}

function search(inputData) {
    let resultProduct = [];
    product.forEach((productObj) => {
        if (
            (productObj.type.toLowerCase().includes(inputData) ||
                productObj.namePr.toLowerCase().includes(inputData)) &&
            resultProduct.indexOf(productObj) === -1
        ) {
            resultProduct.push(productObj);
        }
        productObj.color.map((colorText) => {
            if (
                colorText.toLowerCase().includes(inputData) &&
                resultProduct.indexOf(productObj) === -1
            ) {
                resultProduct.push(productObj);
            }
        });
        productObj.size.map((sizeText) => {
            if (
                sizeText.toLowerCase().includes(inputData) &&
                resultProduct.indexOf(productObj) === -1
            ) {
                resultProduct.push(productObj);
            }
        });
    });
    return resultProduct;
}

//Tạo mảng chứa bộ lọc và gọi hàm thêm bộ lọc để hiển thị
let optionFilterArr = [];
product.forEach((productObj) => {
    let checkType = true;
    if (optionFilterArr.length === 0) {
        optionFilterArr.push(productObj.type);
    } else {
        optionFilterArr.forEach((optionFilter) => {
            if (productObj.type === optionFilter) {
                checkType = false;
            }
        });
        if (checkType === true) {
            optionFilterArr.push(productObj.type);
        }
    }
});
optionFilterArr.unshift("Tất cả", "Giảm giá");
addFilter(optionFilterArr);

//Hiển thị sản phẩm -> gọi hàm displayProduct()
var containerProduct = document.getElementsByClassName("container-product")[0];
displayProduct(product, containerProduct);

//Thiết kế thao tác khi bấm vào các nút bộ lọc
const buttonFilter = document.querySelectorAll(
    ".container .list-container .filter .list-option button"
);
buttonFilter[0].childNodes[1].style.opacity = "1";
buttonFilter[0].style.border = "1px solid black";
for (
    let indexBtnFilter = 0;
    indexBtnFilter < buttonFilter.length;
    indexBtnFilter++
) {
    buttonFilter[indexBtnFilter].addEventListener("click", () => {
        if (indexBtnFilter == 0) {
            if (
                getComputedStyle(buttonFilter[indexBtnFilter].childNodes[1])
                    .opacity == 0
            ) {
                buttonFilter[indexBtnFilter].childNodes[1].style.opacity = "1";
                buttonFilter[indexBtnFilter].style.border = "1px solid black";
                for (let index = 1; index < buttonFilter.length; index++) {
                    buttonFilter[index].childNodes[1].style.opacity = "0";
                    buttonFilter[index].style.border =
                        "1px solid rgb(206, 206, 206)";
                }
                clearProduct();
                displayProduct(product, containerProduct);
                setMoreInfForProduct(product);
            } else {
                buttonFilter[indexBtnFilter].childNodes[1].style.opacity = "0";
                buttonFilter[indexBtnFilter].style.border =
                    "1px solid rgb(206, 206, 206)";
                clearProduct();
            }
        } else {
            if (
                getComputedStyle(buttonFilter[indexBtnFilter].childNodes[1])
                    .opacity == 0
            ) {
                buttonFilter[0].childNodes[1].style.opacity = "0";
                buttonFilter[0].style.border = "1px solid rgb(206, 206, 206)";
                buttonFilter[indexBtnFilter].childNodes[1].style.opacity = "1";
                buttonFilter[indexBtnFilter].style.border = "1px solid black";
            } else {
                buttonFilter[indexBtnFilter].childNodes[1].style.opacity = "0";
                buttonFilter[indexBtnFilter].style.border =
                    "1px solid rgb(206, 206, 206)";
            }
            let productIsFiltered = [];
            if (buttonFilter[1].childNodes[1].style.opacity == 1) {
                product.forEach((productObj) => {
                    if (
                        productObj.sale !== undefined &&
                        productIsFiltered.indexOf(productObj) === -1
                    ) {
                        productIsFiltered.push(productObj);
                    }
                });
            }
            for (
                let indexFilter = 2;
                indexFilter < buttonFilter.length;
                indexFilter++
            ) {
                if (
                    buttonFilter[indexFilter].childNodes[1].style.opacity == 1
                ) {
                    product.forEach((productObj) => {
                        if (
                            productObj.type ===
                                buttonFilter[
                                    indexFilter
                                ].firstChild.innerHTML.toLowerCase() &&
                            productIsFiltered.indexOf(productObj) === -1
                        ) {
                            productIsFiltered.push(productObj);
                        }
                    });
                }
            }
            clearProduct();
            displayProduct(productIsFiltered, containerProduct);
            setMoreInfForProduct(productIsFiltered);
        }
    });
}

//Set hiển thị chi tiết sản phẩm
setMoreInfForProduct(product);

//Tạo nút khi bấm vào sẽ cuộn lên đầu trang
var btnUp = document.getElementsByClassName("up")[0];
window.onscroll = () => {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        btnUp.style.cursor = "pointer";
        btnUp.style.opacity = "1";
        btnUp.style.bottom = "100px";
    } else {
        btnUp.style.cursor = "default";
        btnUp.style.opacity = "0";
        btnUp.style.bottom = "50px";
    }
};
btnUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Hiển thị số lượng sản phẩm trong giỏ hàng
displayCountCart();

//Kiểm tra đăng nhập và hiển thị tên người dùng ở thanh điều khiển
setName();

var divSearch = document.querySelector("nav > .menu > ul > div");
var btnSearch = document.querySelector("nav > .menu > ul > div > img");
var inputSearch = document.querySelector("nav > .menu > ul > div > input");
let countClickSearchBtn = 0;
divSearch.addEventListener("mouseover", () => {
    divSearch.childNodes[1].setAttribute(
        "src",
        "/public/image/Search_white.png"
    );
});
divSearch.addEventListener("mouseout", () => {
    divSearch.childNodes[1].setAttribute(
        "src",
        "/public/image/Search_black.png"
    );
});
btnSearch.addEventListener("click", () => {
    inputSearch.style.width = "350px";
    inputSearch.style.padding = "0 0 0 10px";
    inputSearch.focus();
    if (inputSearch.value !== "" && inputSearch.style.width === "350px") {
        let result = search(inputSearch.value.toLowerCase());
        clearProduct();
        displayProduct(result, containerProduct);
        setMoreInfForProduct(result);
    }
});
inputSearch.addEventListener("keydown", (event) => {
    if (
        (event.key === "Enter" || event.keyCode === 13) &&
        inputSearch.value !== ""
    ) {
        let result = search(inputSearch.value.toLowerCase());
        clearProduct();
        displayProduct(result, containerProduct);
        setMoreInfForProduct(result);
    }
});

let dataSearchFromHome = new URLSearchParams(location.search);
if (dataSearchFromHome.get("inputSearch") !== null) {
    let result = search(dataSearchFromHome.get("inputSearch").toLowerCase());
    clearProduct();
    displayProduct(result, containerProduct);
    setMoreInfForProduct(result);
}
