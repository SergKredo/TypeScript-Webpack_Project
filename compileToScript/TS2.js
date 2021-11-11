export class Product {
    constructor(name, cost, className, imgName) {
        this.name = name;
        this.cost = cost;
        this.className_ = className;
        this.imgName = imgName;
    }
    get className() {
        return this.className_;
    }
    getInfo() {
        return "";
    }
}
export class Drink extends Product {
    constructor(name, cost, volume, className, imgName) {
        super(name, cost, className, imgName);
        this.volume = volume;
    }
    getInfo() {
        return `${super.getInfo()}Напиток: ${this.name}, стоимость: ${this.cost} грн, объем: ${this.volume} л;`;
    }
    get className() {
        return super.className;
    }
}
export class Food extends Product {
    constructor(name, cost, weight, className, imgName) {
        super(name, cost, className, imgName);
        this.weight = weight;
    }
    getInfo() {
        return `${super.getInfo()}Еда: ${this.name}, стоимость: ${this.cost} грн, вес: ${this.weight} кг;`;
    }
    get className() {
        return super.className;
    }
}
//# sourceMappingURL=TS2.js.map