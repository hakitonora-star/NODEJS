class Product {
   public name:string;
   private price:number|undefined;
   readonly category:string;//readonly means You can set the value once, but you cannot change it later.
   readonly tags:string[]
    constructor(name:string,category:string,price?:number){
        this.name=name;
        this.category=category;
        this.price=price;
        this.tags=['electronic','mobile'];
    }
    display():void{
     this.tags[0] = "PC";        
     this.tags.push("laptop");     
        console.log("Product name is",this.name, "and price is",this.price);

    }
    setPrice(p:number):void{
        if(p<=0) return ;
        this.price=p;

    }
}
const p1=new Product("Iphone","Phone",1800000);
p1.setPrice(50);

p1.display();
console.log(p1);
