export class Product {
    sku!: string;
    name!: string;
    description!: string;
    unitPrice!: number;
    imageUrl!: string;
    active!: string;
    unitInStock!: string;
    dateCreated!: string;
    lastUpdated!: string;

    constructor(){
        this.sku= "a";
        this.name= "b";
        this.description= "c";
        this.unitPrice= 100;
        this.imageUrl= "e";
        this.active= "f";
        this.unitInStock= "g";
        this.dateCreated= "h";
        this.lastUpdated= "i";
    } 
    
}
export const prod:Product[]=[
    {sku: 'a',name: 'g',description:'c',unitPrice: 100,imageUrl:'assets/images/products/download.png',active: 'f',unitInStock: 'g',dateCreated: 'h',lastUpdated:'i'}
  ];
