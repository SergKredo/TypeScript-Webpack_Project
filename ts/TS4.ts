import { Cafe } from "./TS1";
import { Product } from "./TS2";

export class ContentGenerator implements Cafe{
    protected name:string;
    protected cost: number;
    constructor(name: string, cost:number){
        this.name = name;
        this.cost = cost;
    }
    get className(){
        return "";
    }
    getInfo():string{
        return "";
    }
    static generateList(div:HTMLElement, data: Product[]): void{
        let divElem = div;
        let divImage = document.getElementsByClassName('imag')[0];
        let ul = document.createElement('ul');
        data.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = element.getInfo();
            li.className = element.className;
            li.onmouseover = function(){
                switch(element.imgName){
                    case 'pizza': {
                        divImage.className = 'imag pizza';
                        break;
                    }
                    case 'water': {
                        divImage.className = 'imag water';
                        break;
                    }
                    case 'ice-cream': {
                        divImage.className = 'imag iceCream';
                        break;
                    }
                    case 'cake': {
                        divImage.className = 'imag cake';
                        break;
                    }
                    case 'coffee': {
                        divImage.className = 'imag coffee';
                        break;
                    }
                    case 'beer': {
                        divImage.className = 'imag beer';
                        break;
                    }
                    default: break;
                }
            };
            console.dir(li);
            ul.append(li);
        });
        console.log(ul);
        console.log(divElem);
        divElem.append(ul);
    }
}