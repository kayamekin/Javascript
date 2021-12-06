let card = [{
        id: 1,
        productName: "Telefon",
        quantity: 3,
        unitPrice: 4000
    },
    {
        id: 2,
        productName: "bardak",
        quantity: 2,
        unitPrice: 30
    },
    {
        id: 3,
        productName: "kalem",
        quantity: 1,
        unitPrice: 20
    },
    {
        id: 4,
        productName: "şarj aleti",
        quantity: 2,
        unitPrice: 100
    },
    {
        id: 5,
        productName: "kitap",
        quantity: 3,
        unitPrice: 30
    },
    {
        id: 6,
        productName: "defter",
        quantity: 5,
        unitPrice: 150
    },

]

console.log("<ul>");
card.map(product => {
    console.log("<li>" +
        product.productName +
        ":" + product.unitPrice * product.quantity +

        "</li>")

});


console.log("</ul>");


let total = card.reduce((acc,product) => acc + product.unitPrice* product.quantity,0);
console.log(total);



let quantityOver2 = card.filter(product => product.quantity > 2);
console.log(quantityOver2);


function addToCart(sepet) {
    sepet.push({
        id: 7,
        productName: "ruhsat",
        quantity: 1,
        unitPrice: 20
    })
}


addToCart(card)
console.log(card);


let sayi = 10;

function sayiTopla(number) {
    number += 1;
    console.log(number)
}

sayiTopla(sayi);