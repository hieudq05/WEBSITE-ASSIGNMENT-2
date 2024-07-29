function chooseSize(btnSize) {
    btnSize.parentNode.childNodes.forEach((element) => {
        if (
            element.classList.toggle("button-size-active") === true &&
            element != btnSize
        ) {
            element.classList.toggle("button-size-active");
        }
    });
}

function chooseColor(btnColor) {
    btnColor.parentNode.parentNode.childNodes.forEach((element) => {
        if (
            element.classList.toggle("button-color-active") === true &&
            element != btnColor.parentNode
        ) {
            element.classList.toggle("button-color-active");
        }
    });
}

function up(btnUp) {
    btnUp.parentNode.childNodes[1].value++;
}

function down(btnDown) {
    if (btnDown.parentNode.childNodes[1].value > 1) {
        btnDown.parentNode.childNodes[1].value--;
    }
}

function exit(btnExit) {
    btnExit.parentNode.remove();
    document.getElementsByClassName("main-page")[0].classList.remove("disable");
}

var getMoreInf = (el) => {
    let mainPage = document.getElementsByClassName("main-page")[0];
    mainPage.classList.add("disable");
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
            btnExit.setAttribute("onclick", "exit(this)");
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
                price.style.backgroundColor = "rgb(247, 247, 247)";
                productInf.appendChild(price);
                let priceCurent = document.createElement("div");
                priceCurent.innerHTML = product[index].price;
                priceCurent.style.color = "black";
                priceCurent.style.textDecoration = "none";
                priceCurent.style.fontSize = "25px";
                priceCurent.classList.add("price-curent");
                price.appendChild(priceCurent);
            }
            let labelSize = document.createElement("div");
            labelSize.innerHTML = "Kích thước";
            labelSize.classList.add("label-size");
            productInf.appendChild(labelSize);
            let size = document.createElement("div");
            size.classList.add("size");
            productInf.appendChild(size);
            for (
                let index_Size = 0;
                index_Size < product[index].size.length;
                index_Size++
            ) {
                let sizeChild = document.createElement("button");
                sizeChild.innerHTML = product[index].size[index_Size];
                sizeChild.setAttribute("onclick", "chooseSize(this)");
                size.appendChild(sizeChild);
            }
            let labelColor = document.createElement("div");
            labelColor.innerHTML = "Màu sắc";
            labelColor.classList.add("label-color");
            productInf.appendChild(labelColor);
            let color = document.createElement("div");
            color.classList.add("color");
            productInf.appendChild(color);
            for (
                let index_Color = 0;
                index_Color < product[index].color.length;
                index_Color++
            ) {
                let colorChild = document.createElement("div");
                color.appendChild(colorChild);
                let buttonColor = document.createElement("button");
                buttonColor.style.backgroundColor =
                    product[index].color[index_Color];
                buttonColor.setAttribute("onclick", "chooseColor(this)");
                colorChild.appendChild(buttonColor);
            }
            let labelSoluong = document.createElement("div");
            labelSoluong.innerHTML = "Số lượng";
            labelSoluong.classList.add("label-count");
            productInf.appendChild(labelSoluong);
            let soLuong = document.createElement("div");
            soLuong.classList.add("count");
            productInf.appendChild(soLuong);
            let btnDown = document.createElement("button");
            btnDown.innerHTML = "-";
            btnDown.setAttribute("onclick", "down(this)");
            soLuong.appendChild(btnDown);
            let inputSoLuong = document.createElement("input");
            inputSoLuong.setAttribute("type", "number");
            inputSoLuong.setAttribute("value", "1");
            soLuong.appendChild(inputSoLuong);
            let btnUp = document.createElement("button");
            btnUp.innerHTML = "+";
            btnUp.setAttribute("onclick", "up(this)");
            soLuong.appendChild(btnUp);
            let control = document.createElement("div");
            control.classList.add("add");
            productInf.appendChild(control);
            let btnAddCart = document.createElement("button");
            btnAddCart.innerHTML = "Thêm vào giỏ hàng";
            control.appendChild(btnAddCart);
            let btnBuyNow = document.createElement("button");
            btnBuyNow.innerHTML = "Mua ngay";
            control.appendChild(btnBuyNow);
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
    element.parentNode.parentNode.childNodes[0].addEventListener(
        "click",
        () => {
            getMoreInf(element);
        }
    );
});
