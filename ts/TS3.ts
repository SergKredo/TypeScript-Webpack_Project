import { Drink, Food } from "./TS2";

export class Water extends Drink{
   constructor(name:string, cost: number, volume:number, className: string, imgName: string){
       super(name, cost, volume, className, imgName);
   }
   getInfo():string{
       return super.getInfo();
   }
   get className(){
       return super.className;
   }
}
export class Beer extends Drink{
    constructor(name:string, cost: number, volume:number, className: string, imgName: string){
        super(name, cost, volume, className, imgName);
    }
    getInfo():string{
        return super.getInfo();
    }
    get className(){
        return super.className;
    }
}
export class Coffee extends Drink{
    constructor(name:string, cost: number, volume:number, className: string, imgName: string){
        super(name, cost, volume, className, imgName);
    }
    getInfo():string{
        return super.getInfo();
    }
    get className(){
        return super.className;
    }
}

export class IceCream extends Food{
    constructor(name:string, cost: number, weight:number, className: string, imgName: string){
        super(name, cost, weight, className, imgName);
    }
    getInfo():string{
        return super.getInfo();
    }
    get className(){
        return super.className;
    }
}
export class Pizza extends Food{
    constructor(name:string, cost: number, weight:number, className: string, imgName: string){
        super(name, cost, weight, className, imgName);
    }
    getInfo():string{
        return super.getInfo();
    }
    get className(){
        return super.className;
    }
}
export class Cake extends Food{
    constructor(name:string, cost: number, weight:number, className: string, imgName: string){
        super(name, cost, weight, className, imgName);
    }
    getInfo():string{
        return super.getInfo();
    }
    get className(){
        return super.className;
    }
}