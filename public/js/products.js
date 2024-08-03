class product_Model {
    constructor(id, srcImg, namePr, price, color, size, sale, count, type) {
        this.id = id;
        this.srcImg = srcImg;
        this.namePr = namePr;
        this.price = price;
        this.color = color;
        this.size = size;
        this.sale = sale;
        this.count = count;
        this.type = type;
    }
}

var product = [
    new product_Model(
        "261020053",
        "./image/AoAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL", "2XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020052",
        "./image/AoAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "1039000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020054",
        "./image/polo-yody.jpg",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "áo"
    ),
    new product_Model(
        "261020051",
        "./image/AoAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020055",
        "./image/AoAdidas4.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "quần"
    ),
    new product_Model(
        "261020056",
        "./image/QuanAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "orangered", "green"],
        ["M", "L", "XL"],
        undefined,
        undefined,
        "quần"
    ),
    new product_Model(
        "261020057",
        "./image/QuanAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "pink"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "áo"
    ),
    new product_Model(
        "261020058",
        "./image/QuanAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "áo"
    ),
    new product_Model(
        "261020059",
        "./image/AoAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL", "2XL"],
        undefined,
        "quần"
    ),
    new product_Model(
        "2610200510",
        "./image/AoAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "2091000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "1099000",
        undefined,
        "áo"
    ),
    new product_Model(
        "2610200511",
        "./image/polo-yody.jpg",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "quần"
    ),
    new product_Model(
        "2610200512",
        "./image/AoAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        undefined,
        undefined,
        "quần"
    ),
    new product_Model(
        "2610200513",
        "./image/AoAdidas4.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "áo"
    ),
    new product_Model(
        "2610200514",
        "./image/QuanAdidas1.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "orangered", "green"],
        ["M", "L", "XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "2610200515",
        "./image/QuanAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "pink"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "quần"
    ),
    new product_Model(
        "2610200516",
        "./image/QuanAdidas3.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "áo"
    ),
];

function displayProduct(product_array, container_Product) {
    for (let index = 0; index < product_array.length; index++) {
        let productImg = document.createElement("img");
        productImg.setAttribute("src", product_array[index].srcImg);
        let inf = document.createElement("div");
        inf.classList.add("inf");
        let name = document.createElement("div");
        name.classList.add("name");
        name.innerHTML = product_array[index].namePr;
        inf.appendChild(name);
        let container_Price = document.createElement("div");
        container_Price.classList.add("container-price");
        inf.appendChild(container_Price);
        if (product_array[index].sale != undefined) {
            let sale = document.createElement("div");
            sale.classList.add("sale");
            sale.innerHTML = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(product_array[index].sale);
            container_Price.appendChild(sale);
            let price = document.createElement("div");
            price.classList.add("price");
            price.innerHTML = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(product_array[index].price);
            container_Price.appendChild(price);
        } else {
            let price = document.createElement("div");
            price.classList.add("price");
            price.innerHTML = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(product_array[index].price);
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
            index_Color < product_array[index].color.length;
            index_Color++
        ) {
            let child_Color_1 = document.createElement("div");
            let child_Color_2 = document.createElement("div");
            child_Color_2.style.backgroundColor =
                product_array[index].color[index_Color];
            child_Color_1.appendChild(child_Color_2);
            color.appendChild(child_Color_1);
        }
        inf.appendChild(color);
        let size = document.createElement("div");
        size.classList.add("size");
        for (
            let index_Size = 0;
            index_Size < product_array[index].size.length;
            index_Size++
        ) {
            let child_Size = document.createElement("div");
            child_Size.innerHTML = product_array[index].size[index_Size];
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
        container_Product.appendChild(productNode);
    }
}
