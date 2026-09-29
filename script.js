// let title = document.querySelector(".product-card");
// function show(name) {
//     return `welcom ${name}`;

// }


// console.log(show("kim"))
// function show(name,age,...slils){
//     age=age||"m";
//     return `hello ${name} ,${age} , skills are ${slils.join(" ")}`;
// }
// console.log(show("kim",22,"car","red","blue"))
let products = [
    {
        id: 1, name: "Laptop",
        price: 20000,
        available: true
    },
    {
        id: 2,
        name: "Mouse",
        price: 500,
        available: true
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1000,
        available: false
    },
    {
        id: 4,
        name: "Phone",
        price: 15000,
        available: true
    },
    {
        id: 5,
        name: "Headphone",
        price: 800,
        available: false
    }
];
let productsName = products.map(item => item.name);
console.log(productsName);
let productsPrice = products.filter(item => item.price < 2000);
console.log(productsPrice);
let productsId = products.find(item => item.id === 3);
console.log(productsId);
products.forEach(item => {
    console.log(`Product:${item.name}-Price:${item.price}`)
})
let productsTrue = products.some(item => item.price > 18000);
console.log(productsTrue);
let productsAvailable = products.every(item => item.available);
console.log(productsAvailable);
let productsTotal = products.reduce((sum, item) => {
    return sum + item.price;
}, 0);
console.log(productsTotal);
