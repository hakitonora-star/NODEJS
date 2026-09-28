class Complex{
   private real:number;
   private imag:number;
   constructor(real:number,imag:number){
    this.real=real;
    this.imag=imag;
   }
   display():void{
    console.log(`${this.real}+i${this.imag}`);

   }
   add(C:Complex):void{
    this.real+=C.real;
    this.imag+=C.imag;
   }
 

}

let c1 = new Complex(5, 4);

c1.display();

let c2 = new Complex(6, 3);

c2.display();
c1.add(c2);
c1.display();
