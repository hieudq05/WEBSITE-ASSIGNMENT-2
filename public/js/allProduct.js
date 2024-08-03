var containerProduct = document.getElementsByClassName("container-product")[0];
displayProduct(product, containerProduct);

const buttonFilter = document.querySelectorAll(
    ".container .list-container .filter .list-option button"
);
for (
    let indexBtnFilter = 0;
    indexBtnFilter < buttonFilter.length;
    indexBtnFilter++
) {
    buttonFilter[indexBtnFilter].addEventListener("click", () => {
        if (indexBtnFilter == 0) {
            if (
                getComputedStyle(buttonFilter[indexBtnFilter].childNodes[3])
                    .opacity == 0
            ) {
                buttonFilter[indexBtnFilter].childNodes[3].style.opacity = "1";
                buttonFilter[indexBtnFilter].style.border = "1px solid black";
                for (let index = 1; index < buttonFilter.length; index++) {
                    buttonFilter[index].childNodes[3].style.opacity = "0";
                    buttonFilter[index].style.border =
                        "1px solid rgb(206, 206, 206)";
                }
            } else {
                buttonFilter[indexBtnFilter].childNodes[3].style.opacity = "0";
                buttonFilter[indexBtnFilter].style.border =
                    "1px solid rgb(206, 206, 206)";
            }
        } else {
            if (
                getComputedStyle(buttonFilter[indexBtnFilter].childNodes[3])
                    .opacity == 0
            ) {
                buttonFilter[0].childNodes[3].style.opacity = "0";
                buttonFilter[0].style.border = "1px solid rgb(206, 206, 206)";
                buttonFilter[indexBtnFilter].childNodes[3].style.opacity = "1";
                buttonFilter[indexBtnFilter].style.border = "1px solid black";
            } else {
                buttonFilter[indexBtnFilter].childNodes[3].style.opacity = "0";
                buttonFilter[indexBtnFilter].style.border =
                    "1px solid rgb(206, 206, 206)";
            }
        }
    });
}

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
            getMoreInf(element, product, "container-product");
        }
    );
});

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

displayCountCart();
