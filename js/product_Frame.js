const size = document.querySelectorAll(".product-inf .size button");
size.forEach((element) => {
    element.addEventListener("click", () => {
        size.forEach((element1) => {
            if (
                element1.classList.toggle("button-size-active") === true &&
                element1 != element
            ) {
                element1.classList.toggle("button-size-active");
            }
        });
    });
});

const color = document.querySelectorAll(".product-inf .color div");
color.forEach((element) => {
    element.addEventListener("click", () => {
        color.forEach((element1) => {
            if (
                element1.classList.toggle("button-color-active") === true &&
                element1 != element
            ) {
                element1.classList.toggle("button-color-active");
            }
        });
    });
});

/*
const up = document.querySelectorAll(".product-inf .count button")[1];
const down = document.querySelectorAll(".product-inf .count button")[0];
const product_count = document.querySelector(".product-inf .count input");
up.addEventListener("click", () => {
    product_count.value++;
});
down.addEventListener("click", () => {
    if (product_count.value > 1) {
        product_count.value--;
    }
});*/

var getMoreInf = (el) => {
    let containerX = document.getElementsByClassName("products-container")[0];
    for (let index = 0; index < containerX.childNodes.length; index++) {
        if (containerX.childNodes[index] === el.parentNode.parentNode) {
            //Khởi tạo khung hiển thị sản phẩm
            let productFrame = document.createElement("div");
            productFrame.classList.add("product-frame");
            productFrame.style.display = "flex";
            //Thêm khung vào BODY
            document.getElementsByTagName("body")[0].appendChild(productFrame);
            //Khởi tạo nút exit & thêm vào khung
            let btnExit = document.createElement("button");
            btnExit.innerHTML = "X";
            btnExit.classList.add("exit");
            productFrame.appendChild(btnExit);
            //Khởi tạo div chứa element Ảnh & thêm vào khung
            let productImage = document.createElement("div");
            productImage.classList.add("product-image");
            productFrame.appendChild(productImage);
            //Khởi tạo element Ảnh & thên vào div cha
            let image = document.createElement("img");
            image.src = product[index].srcImg;
            productImage.appendChild(image);
            //Khởi tạo div chứa thông tin sản phẩm & thêm vào khung
            let productInf = document.createElement("div");
            productInf.classList.add("product-inf");
            productFrame.appendChild(productInf);
            //Khởi tạo div chứa tên & thêm vào div cha
            let divName = document.createElement("div");
            divName.innerHTML = product[index].namePr;
            divName.classList.add("name");
            productInf.appendChild(divName);
            //Khởi tạo div chứa flash-sale & thêm vào div cha
            if (product[index].sale !== undefined) {
                let flashSale = document.createElement("div");
                flashSale.classList.add("flash-sale");
                productInf.appendChild(flashSale);
                let titleFlashSale = document.createElement("div");
                titleFlashSale.innerHTML = "FLASH SALE";
                titleFlashSale.classList.add("title");
                flashSale.appendChild(titleFlashSale);
                let time = document.createElement("div");
                time.classList.add("time");
                flashSale.appendChild(time);
                let titleTime = document.createElement("div");
                titleTime.innerHTML = "Kết thúc trong";
                time.appendChild(titleTime);
                let timeCountDown = document.createElement("div");
                timeCountDown.classList.add("time-countdown");
                time.appendChild(timeCountDown);
                let hour = document.createElement("div");
                hour.innerHTML = new Date().getHours();
                setInterval(() => {
                    hour.innerHTML = new Date().getHours();
                }, 1000);
                timeCountDown.appendChild(hour);
                let min = document.createElement("div");
                min.innerHTML = new Date().getMinutes();
                setInterval(() => {
                    min.innerHTML = new Date().getMinutes();
                }, 1000);
                timeCountDown.appendChild(min);
                let sec = document.createElement("div");
                sec.innerHTML = new Date().getSeconds();
                setInterval(() => {
                    sec.innerHTML = new Date().getSeconds();
                }, 1000);
                timeCountDown.appendChild(sec);
                let price = document.createElement("div");
                price.classList.add("price");
                productInf.appendChild(price);
                let priceCurent = document.createElement("div");
                priceCurent.innerHTML = product[index].price;
                priceCurent.classList.add("price-curent");
                price.appendChild(priceCurent);
                let sale = document.createElement("div");
                sale.innerHTML = product[index].sale;
                sale.classList.add("sale");
                price.appendChild(sale);
            } else {
                let price = document.createElement("div");
                price.classList.add("price");
                price.style.borderRadius = "8px";
                price.style.marginTop = "35px";
                price.style.backgroundColor = "rgb(227, 227, 230)";
                productInf.appendChild(price);
                let priceCurent = document.createElement("div");
                priceCurent.innerHTML = product[index].price;
                priceCurent.style.color = "black";
                priceCurent.style.textDecoration = "none";
                priceCurent.style.fontSize = "20px";
                priceCurent.classList.add("price-curent");
                price.appendChild(priceCurent);
            }
        }
    }
};
const button_explore = document.querySelectorAll(
    ".list-popular-products-container .products-container .product button"
);
button_explore.forEach((element) => {
    element.addEventListener("click", () => {
        getMoreInf(element);
    });
});
/*
const button_exit = document.getElementsByClassName("exit")[0];
button_exit.addEventListener("click", () => {
    frame.style.display = "none";
});*/
