import { ProductComponent } from "../components/ProductComponent";

console.log("***Iphone details***");
let iphone = new ProductComponent();
iphone.Print();

console.log("===Shoe Details===");
let shoe = new ProductComponent();
shoe.Name="Nike pestro fly";
shoe.Price=9800.98;
shoe.Qty=2;
shoe.Print();