// variables initialization
var Name:string ="Samsung tv";
var Price:number = 45000.56;
var Stock:boolean = true;
console.log(`
    Name:${Name}\n
    Price:${Price}\n
    Stock:${Stock}\n
`)

//array intialization
var categories:string[] = ["Men's Clothing","Women's Clothing","Jewellers"];
categories.map(category =>{
    console.log(category);
});

//object initialization
var tv:{name:string,price:number,stock:boolean,rating?:{rate:number,count:number}}={
    name:"SamsungTv",
    price: 450000.00,
    stock:true,
    rating:{rate:4.5,count:567}
}

console.log(`
     Name=${tv.name}\n
     Price=${tv.price}\n
     stock=${tv.stock}\n
     rating{rate = ${tv.rating?.rate}, count = ${tv.rating?.count}}
    `)


//Array of objects
var data:{Name:string,price:number}[]=[
    {"Name":"Samsung tab", "price":25000.90},
    {"Name":"apple tab", "price":78000.90}
]
data.map(item=>{
    console.log(item.Name);
})

//date 
var product:{name:string,mfd:Date} ={
    name:"samsung tv",
    mfd:new Date("2024-07-08")
}
console.log(`${product.name} is manufactured in ${product.mfd.toLocaleDateString()}`);

//regExpression
var regExp = /\+91\d{10}/;
var mobile = "+919876543210";
if(mobile.match(regExp)){
    console.log("mobile verified");
}else{
    console.log("not verified");
}


//function
function Hello(userName:string){
    console.log(`Hello ! ${userName}`);
}
var userName:string = "Sumith";
Hello(userName)

function addition(a:number,b:number):number{
    return a+b;
}
console.log(addition(1,2));


//optional parameters in function   
function Details(name:string,price:number,rating?:number){
    if(rating==undefined){
        console.log(`Name:${name}, Price:${price}`);
    }
    else{
        console.log(`Name:${name}, Price:${price},rating:${rating}`);
    }
}

Details("iphone",95000.90);
Details("iphone",95000.90,4.6);


interface Product{
name:string;
price:number;
stock:boolean;
rating?:{rate:number,count:number}
}

let productDetails:Product ={
    name:"Iphone",
    price:98000.90,
    stock:true,
    rating:{rate:4.5,count:987}
}
console.log(`name=${productDetails.name}\n price=${productDetails.price}\n stock=${productDetails.stock}\n rating={rate=${productDetails.rating?.rate}\n count=${productDetails.rating?.count}}`);


class Demo{
    static n=0;
    s=0;

     constructor(){
        Demo.n=Demo.n+1;
        this.s=this.s+1;
    }

  public    print():void{
        console.log(`
            n=${Demo.n}\n
            s=${this.s}
            `);
    }
}

let obj1 =new Demo();
obj1.print();

let obj2 =new Demo();
obj2.print();

let obj3 =new Demo();
obj3.print();


interface Iproduct{
    name:string;
    price:number;
    stock:boolean;
    qty:number;
    Total():number;
    Print():void;
}

interface ICategoryName{
    category:string;
}

class ProductInfo implements Iproduct,ICategoryName{
    public name: string = "Iphone";
    public price: number= 98000.90;
    public stock: boolean=true;
    public category: string="Electronics";
    public qty: number=2;

    Total(): number {
        return this.qty * this.price;
    }

    Print(): void {
        console.log(`
            name=${this.name}\n
            price=${this.price}\n
            stock=${this.stock}\n
            qty=${this.qty}\n
            total=${this.Total()}
            `)
    }

}

let Pdi = new ProductInfo();
Pdi.Print();