class product_Model {
    constructor(srcImg, namePr, price, color, size, sale) {
        this.srcImg = srcImg;
        this.namePr = namePr;
        this.price = price;
        this.color = color;
        this.size = size;
        this.sale = sale;
    }
}

var product = [
    new product_Model(
        "/image/AoAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL", "2XL"]
    ),
    new product_Model(
        "/image/AoAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/polo-yody.jpg",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/AoAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/AoAdidas4.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/QuanAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/QuanAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
    new product_Model(
        "/image/QuanAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1.019.000đ",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901.000đ"
    ),
];

var container_Product = document.getElementsByClassName("products-container");

for (let index = 0; index < product.length; index++) {
    let productImg = document.createElement("img");
    productImg.setAttribute("src", product[index].srcImg);
    let inf = document.createElement("div");
    inf.classList.add("inf");
    let name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = product[index].namePr;
    inf.appendChild(name);
    let container_Price = document.createElement("div");
    container_Price.classList.add("container-price");
    inf.appendChild(container_Price);
    if (product[index].sale != undefined) {
        let sale = document.createElement("div");
        sale.classList.add("sale");
        sale.innerHTML = product[index].sale;
        container_Price.appendChild(sale);
        let price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML = product[index].price;
        container_Price.appendChild(price);
    } else {
        let price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML = product[index].price;
        price.setAttribute(
            "style",
            "font-weight: 600;color: black;font-size: 16px;margin: 5px 0px 8px 0px;font-family: montserrat;text-decoration:none;"
        );
        container_Price.appendChild(price);
    }

    let color = document.createElement("div");
    color.classList.add("color");
    for (
        let index_Color = 0;
        index_Color < product[index].color.length;
        index_Color++
    ) {
        let child_Color_1 = document.createElement("div");
        let child_Color_2 = document.createElement("div");
        child_Color_2.style.backgroundColor = product[index].color[index_Color];
        child_Color_1.appendChild(child_Color_2);
        color.appendChild(child_Color_1);
    }
    inf.appendChild(color);
    let size = document.createElement("div");
    size.classList.add("size");
    for (
        let index_Size = 0;
        index_Size < product[index].size.length;
        index_Size++
    ) {
        let child_Size = document.createElement("div");
        child_Size.innerHTML = product[index].size[index_Size];
        size.appendChild(child_Size);
    }
    inf.appendChild(size);
    let buy = document.createElement("button");
    buy.innerHTML = "Explore";
    inf.appendChild(buy);

    let productNode = document.createElement("div");
    productNode.classList.add("product");
    productNode.appendChild(productImg);
    productNode.appendChild(inf);
    container_Product[0].appendChild(productNode);
}

const btnExplore = document.querySelectorAll(
    ".list-popular-products-container .products-container .product .inf button"
);
btnExplore.forEach((element) => {
    let icon = document.createElement("img");
    icon.src = "/image/arrow_right_up_line.png";
    icon.style.height = "2cap";
    icon.style.opacity = "0";
    icon.style.transition =
        "opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    icon.style.transitionDelay =
        "0.2s";
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
