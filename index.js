var _a, _b, _c, _d;
// variables initialization
var Name = "Samsung tv";
var Price = 45000.56;
var Stock = true;
console.log("\n    Name:".concat(Name, "\n\n    Price:").concat(Price, "\n\n    Stock:").concat(Stock, "\n\n"));
//array intialization
var categories = ["Men's Clothing", "Women's Clothing", "Jewellers"];
categories.map(function (category) {
    console.log(category);
});
//object initialization
var tv = {
    name: "SamsungTv",
    price: 450000.00,
    stock: true,
    rating: { rate: 4.5, count: 567 }
};
console.log("\n     Name=".concat(tv.name, "\n\n     Price=").concat(tv.price, "\n\n     stock=").concat(tv.stock, "\n\n     rating{rate = ").concat((_a = tv.rating) === null || _a === void 0 ? void 0 : _a.rate, ", count = ").concat((_b = tv.rating) === null || _b === void 0 ? void 0 : _b.count, "}\n    "));
//Array of objects
var data = [
    { "Name": "Samsung tab", "price": 25000.90 },
    { "Name": "apple tab", "price": 78000.90 }
];
data.map(function (item) {
    console.log(item.Name);
});
//date 
var product = {
    name: "samsung tv",
    mfd: new Date("2024-07-08")
};
console.log("".concat(product.name, " is manufactured in ").concat(product.mfd.toLocaleDateString()));
//regExpression
var regExp = /\+91\d{10}/;
var mobile = "+919876543210";
if (mobile.match(regExp)) {
    console.log("mobile verified");
}
else {
    console.log("not verified");
}
//function
function Hello(userName) {
    console.log("Hello ! ".concat(userName));
}
var userName = "Sumith";
Hello(userName);
function addition(a, b) {
    return a + b;
}
console.log(addition(1, 2));
//optional parameters in function   
function Details(name, price, rating) {
    if (rating == undefined) {
        console.log("Name:".concat(name, ", Price:").concat(price));
    }
    else {
        console.log("Name:".concat(name, ", Price:").concat(price, ",rating:").concat(rating));
    }
}
Details("iphone", 95000.90);
Details("iphone", 95000.90, 4.6);
var productDetails = {
    name: "Iphone",
    price: 98000.90,
    stock: true,
    rating: { rate: 4.5, count: 987 }
};
console.log("name=".concat(productDetails.name, "\n price=").concat(productDetails.price, "\n stock=").concat(productDetails.stock, "\n rating={rate=").concat((_c = productDetails.rating) === null || _c === void 0 ? void 0 : _c.rate, "\n count=").concat((_d = productDetails.rating) === null || _d === void 0 ? void 0 : _d.count, "}"));
var Demo = /** @class */ (function () {
    function Demo() {
        this.s = 0;
        Demo.n = Demo.n + 1;
        this.s = this.s + 1;
    }
    Demo.prototype.print = function () {
        console.log("\n            n=".concat(Demo.n, "\n\n            s=").concat(this.s, "\n            "));
    };
    Demo.n = 0;
    return Demo;
}());
var obj1 = new Demo();
obj1.print();
var obj2 = new Demo();
obj2.print();
var obj3 = new Demo();
obj3.print();
var ProductInfo = /** @class */ (function () {
    function ProductInfo() {
        this.name = "Iphone";
        this.price = 98000.90;
        this.stock = true;
        this.category = "Electronics";
        this.qty = 2;
    }
    ProductInfo.prototype.Total = function () {
        return this.qty * this.price;
    };
    ProductInfo.prototype.Print = function () {
        console.log("\n            name=".concat(this.name, "\n\n            price=").concat(this.price, "\n\n            stock=").concat(this.stock, "\n\n            qty=").concat(this.qty, "\n\n            total=").concat(this.Total(), "\n            "));
    };
    return ProductInfo;
}());
var Pdi = new ProductInfo();
Pdi.Print();
