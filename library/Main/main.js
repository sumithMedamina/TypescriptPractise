"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductComponent_1 = require("../components/ProductComponent");
console.log("***Iphone details***");
var iphone = new ProductComponent_1.ProductComponent();
iphone.Print();
console.log("===Shoe Details===");
var shoe = new ProductComponent_1.ProductComponent();
shoe.Name = "Nike pestro fly";
shoe.Price = 9800.98;
shoe.Qty = 2;
shoe.Print();