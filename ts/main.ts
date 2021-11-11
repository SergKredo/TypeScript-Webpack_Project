import { Product } from "./TS2"
import { Beer, Cake, Coffee, IceCream, Pizza, Water } from "./TS3";
import { ContentGenerator } from "./TS4";

let listProduct: Product[] = [];
let divElement:HTMLElement = window.document.getElementById('mainDiv');

let drinkOne:Product = new Water('Morshinskay', 15, 1.5, 'drink', "water");
listProduct.push(drinkOne);

let foodOne:Product = new IceCream('Rude', 90, 0.5, 'food',"ice-cream");
listProduct.push(foodOne);

let foodOTwo:Product = new Cake('Roshen', 110, 0.5, 'food', "cake");
listProduct.push(foodOTwo);

let drinkTwo:Product = new Coffee('Capuchino', 35, 0.1, 'drink', "coffee");
listProduct.push(drinkTwo);

let drinkThree:Product = new Beer('Chernigovskoe', 75, 0.3, 'drink','beer');
listProduct.push(drinkThree);

let foodThree:Product = new Pizza('Margarita', 120, 0.4, 'food', 'pizza');
listProduct.push(foodThree);

console.log(listProduct);

ContentGenerator.generateList(divElement, listProduct);