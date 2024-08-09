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
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17d79451-f6f2-4b5e-94ee-5c9ba460c2ef/AIR+MAX+DN+OLY.png",
        "Nike Air Max Dn",
        "4236400",
        ["white", "black", "green", "blue", "gray"],
        [
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "50",
            "51",
            "52",
        ],
        undefined,
        undefined,
        "giày"
    ),
    new product_Model(
        "261020052",
        "/public/image/P2.jpg",
        "Nike Solo Swoosh",
        "2741200",
        ["white", "gray", "brown", "green", "black"],
        ["XS", "S", "S Tall", "M", "M Tall", "L", "L Tall", "XL", "2XL"],
        "1943012",
        undefined,
        "áo"
    ),
    new product_Model(
        "261020054",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f4add04d-480d-415c-9ae8-ca8b047ddb5f/NIKE+ZOOMX+INVINCIBLE+RUN+FK+3.png",
        "Jordan Dri-FIT Sport",
        "3519000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "1726663",
        undefined,
        "giày"
    ),
    new product_Model(
        "261020051",
        "/public/image/P3.png",
        "Nike SB T-Shirt",
        "1119000",
        ["white", "black", "orangered", "green"],
        ["S", "M", "L", "XL", "2XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020055",
        "/public/image/P4.jpg",
        "Air Jordan T-Shirt",
        "1739000",
        ["cornflowerblue"],
        ["US XS", "US S", "US M", "US L", "US XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020056",
        "/public/image/P5.jpg",
        "Air Jordan Wordmark Hoodie",
        "2759000",
        ["blue"],
        ["US S", "US M", "US L", "US XL", "US 2XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020057",
        "/public/image/S3.png",
        "Nike Downshifter 13 Shoes",
        "2069000",
        ["black", "white", "gray"],
        ["39", "40", "41", "42", "43"],
        "1901000",
        undefined,
        "giày"
    ),
    new product_Model(
        "261020058",
        "/public/image/P6.png",
        "Nike Men's Fitness T-Shirt",
        "919000",
        ["white", "black", "orangered", "green"],
        ["S", "M", "L", "XL", "2XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "261020059",
        "./image/AoAdidas2.avif",
        "Jordan Dri-FIT Sport",
        "1019000",
        ["orangered"],
        ["M", "L", "XL", "2XL"],
        undefined,
        undefined,
        "áo"
    ),
    new product_Model(
        "2610200510",
        "./image/AoAdidas1.avif",
        "Jordan Dri-FIT Men Sport ",
        "2091000",
        ["blue"],
        ["M", "L", "XL"],
        "1099000",
        undefined,
        "áo"
    ),
    new product_Model(
        "2610200511",
        "/public/image/P7.png",
        "Nike Life Men's Short-Sleeve Knit",
        "1019000",
        ["white", "black", "orangered", "green"],
        ["M", "L", "XL"],
        "901000",
        undefined,
        "áo"
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
        "áo"
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
        "quần"
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
        "quần"
    ),
    new product_Model(
        "2610200517",
        "/public/image/S4.jpg",
        "Nike G.T. Hustle 3 EP Electric New Collection Limited Spring",
        "5869000",
        ["black"],
        ["EU 41"],
        "5000000",
        undefined,
        "giày"
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
        let idProduct = document.createElement("div");
        idProduct.innerHTML = product_array[index].id;
        idProduct.style.display = "none";
    }
}
