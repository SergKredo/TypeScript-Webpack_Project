import { Cafe} from "./TS1";

export abstract class Product implements Cafe{
    protected name:string;
    protected cost: number;
    protected className_:string;
    public imgName: string;
    constructor(name: string, cost:number, className: string, imgName: string){
        this.name = name;
        this.cost = cost;
        this.className_ = className;
        this.imgName = imgName;
    }
    get className(){      
        return this.className_;
    }
    getInfo():string{
        return "";
    }
}
export abstract class Drink extends Product{
    protected volume:number;
    constructor(name:string, cost:number, volume:number, className: string, imgName: string){
        super(name, cost, className, imgName);
        this.volume = volume;
    }
    getInfo():string{
        return `${super.getInfo()}Напиток: ${this.name}, стоимость: ${this.cost} грн, объем: ${this.volume} л;`;
    }
    get className():string{
        return super.className;
    }
}
export abstract class Food extends Product{
    protected weight:number;
    constructor(name:string, cost:number, weight:number, className: string, imgName: string){
        super(name, cost, className, imgName);
        this.weight = weight;
    }
    getInfo():string{
        return `${super.getInfo()}Еда: ${this.name}, стоимость: ${this.cost} грн, вес: ${this.weight} кг;`;
    }
    get className():string{
        return super.className;
    }
}