function addToCart(productName = "elma", quantity) {
    console.log("sepete eklendi : " + productName);
    console.log("adet : " + quantity);
}

addToCart("mekin", 10);

let sayHello = () => {
    console.log("hello world");
}

sayHello();

let ogrenci = {
    bilgiAL: function () {
        console.log("mekin");
    }
}
ogrenci.bilgiAL();


function addtocart2(productName, quacity, unitPrica) {

}

addtocart2("elma", 2, 10);

function addToCart3(product) {
    console.log("ürün adı : " + product.productName);
    console.log("ürün adet : " + product.quantity);
    console.log("ürün fiyat : " + product.unitPrice);
}

let product1 = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
}
addToCart3(product1);

let product2 = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
};
let product3 = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
};
product2 = product3;
product2.productName = "karpuz";
console.log(product3.productName);
console.log(product2.productName);

function addToCart4(products5) {
    console.log(products5);
}

let products5 = [{
        ad: "asus",
        turu: "laptop",
        fiyat: "8699.99"
    },
    {
        ad: "acer",
        turu: "laptop",
        fiyat: "7699.99"
    },
    {
        ad: "monster",
        turu: "laptop",
        fiyat: "10.699.99"
    }
]

addToCart4(products5);
// bisey kelimesini kaldırmayı unutma ... ile olan kısım varsa her zaman sona atanır
function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(total);
    console.log(bisey);
}

add(12, 24);



let numbers = [30, 20, 10, 400, 200, 32, 42];
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [{
        name: "iç anadolu",
        nufus: "20M"
    },
    {
        name: "Marmara",
        nufus: "20M"
    },
    {
        name: "Karadeniz",
        nufus: "20M"
    },
    [
        ["ankara", "konya"],
        ["istanbul", "bursa"],
        ["sinop", "trabzon"],
    ]
];
console.log(icAnadolu.name);
console.log(marmara.name);
console.log(karadeniz.name);

console.log(icAnadolu.nufus);
console.log(marmara.nufus);
console.log(karadeniz.nufus);

console.log(icAnadoluSehirleri)

let newproductName, newunitPrice, newQuantity
({
    productName: newproductName,
    unitPrice: newunitPrice,
    quantity: newQuantity
} = {
    productName: "elma",
    unitPrice: 10,
    quantity: 5
})

console.log(newproductName);
console.log(newQuantity);
console.log(newunitPrice);