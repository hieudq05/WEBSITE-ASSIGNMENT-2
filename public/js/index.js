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
            popupLogOut.style.color = "black";
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

//Hiển thị sản phẩm nổi bật
var container_Product_Array =
    document.getElementsByClassName("products-container");
let product_popular = product.slice(0, 4);
displayProduct(product_popular, container_Product_Array[0]);
//Hiển thị sản phẩm giảm giá
let product_sale = [];
product.forEach((element) => {
    if (element.sale !== undefined) {
        product_sale.push(element);
    }
});
displayProduct(product_sale, container_Product_Array[1]);

//Thêm hiệu ứng cho nút explore của sản phẩm
const btnExplore = document.querySelectorAll(
    ".list-popular-products-container .products-container .product .inf button"
);
btnExplore.forEach((element) => {
    let icon = document.createElement("img");
    icon.src = "/public/image/arrow_right_up_line.png";
    icon.style.height = "2cap";
    icon.style.opacity = "0";
    icon.style.transition =
        "opacity 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
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

//Thêm sự kiện nhấp vào nút explore của sản phẩm nổi bật (sự kiện hiển thị chi tiết của sản phẩm)
for (let indexBEP = 0; indexBEP < product_popular.length; indexBEP++) {
    btnExplore[indexBEP].addEventListener("click", () => {
        getMoreInf(
            btnExplore[indexBEP],
            product_popular.concat(product_sale),
            "products-container"
        );
    });
    btnExplore[indexBEP].parentNode.parentNode.childNodes[0].addEventListener(
        "click",
        () => {
            getMoreInf(
                btnExplore[indexBEP],
                product_popular.concat(product_sale),
                "products-container"
            );
        }
    );
}

for (
    let indexBES = product_popular.length;
    indexBES < product_popular.length + product_sale.length;
    indexBES++
) {
    btnExplore[indexBES].addEventListener("click", () => {
        getMoreInf(btnExplore[indexBES], product_sale, "products-container");
    });
    btnExplore[indexBES].parentNode.parentNode.childNodes[0].addEventListener(
        "click",
        () => {
            getMoreInf(
                btnExplore[indexBES],
                product_sale,
                "products-container"
            );
        }
    );
}

var btnUp = document.getElementsByClassName("up")[0];
window.onscroll = () => {
    if (
        document.body.scrollTop > 900 ||
        document.documentElement.scrollTop > 900
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

displayCountCart();
setName();

var divSearch = document.querySelector("nav > .menu > ul > div");
var btnSearch = document.querySelector("nav > .menu > ul > div > img");
var inputSearch = document.querySelector("nav > .menu > ul > div > input");
let countClickSearchBtn = 0;
divSearch.addEventListener("mouseover", () => {
    divSearch.childNodes[1].setAttribute(
        "src",
        "/public/image/Search_black.png"
    );
});
divSearch.addEventListener("mouseout", () => {
    divSearch.childNodes[1].setAttribute(
        "src",
        "/public/image/Search_white.png"
    );
});
btnSearch.addEventListener("click", () => {
    inputSearch.focus();
    inputSearch.style.width = "350px";
    inputSearch.style.padding = "0 0 0 10px";
});
inputSearch.addEventListener("keydown", (event) => {
    if (
        (event.key === "Enter" || event.keyCode === 13) &&
        inputSearch.value !== ""
    ) {
        location.href = `/public/allProduct.html?inputSearch=${inputSearch.value}`;
    }
});
