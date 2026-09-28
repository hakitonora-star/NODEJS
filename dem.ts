
type pairofNumbers=[number,number];
type pairofString=[number,string]
function linearSearch<T>(array:T[],x:T):[number,T]{
    for(let i=0;i<array.length;i++){
        if(array[i]==x) return [i,array[i]];

    }
    return [-1,x];


}
// function linearSearchString(array:string[],x:string):pairofString{
//     for(let i=0;i<array.length;i++){
//         if(array[i]==x) return [i,array[i]];

//     }
//     return [-1,""];


// }
console.log(linearSearch<number>([1,2,5,1,2,3,54,0,6,-2,3],-56));
console.log(linearSearch<number>([1,2,5,1,2,3,54,0,6,-2,3],-2));
console.log(linearSearch<string>(["abc","def","ghi","jkkl"],"ghi"));
console.log(linearSearch<string>(["abc","def","ghi","jkkl"],"ghijnfn"));

class Stack<T> {
    private arr: T[];

    constructor() {
        this.arr = [];
    }

    push(x: T): void {
        this.arr.push(x);
    }

    pop(): void {
        this.arr.pop();
    }

    top(): T | undefined {
        return this.arr[this.arr.length - 1];
    }

    display(): void {
        console.log(this.arr);
    }
}
const s = new Stack<number>();

s.push(10);
s.push(20);
s.push(30);

s.display();
console.log(s.top());

s.pop();

s.display();
const s2 = new Stack<string>();

s2.push("nskul");
s2.push("honey");
s2.push("shri");

s2.display();
console.log(s2.top());

s2.pop();

s2.display();



