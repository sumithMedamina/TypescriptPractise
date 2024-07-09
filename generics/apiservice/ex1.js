var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.prototype.FetchData = function (response) {
        console.log(JSON.stringify(response));
    };
    return ApiService;
}());
var prod = new ApiService();
prod.FetchData({ Name: "iphone", price: 980000.00 });
prod.FetchData([{ Name: "iphone", price: 980000.00 }, { Name: "samsung", price: 950000.00 }]);
var emp = new ApiService();
emp.FetchData({ ename: "jhon", esalary: 78000.98 });
emp.FetchData([{ ename: "jhon", esalary: 78000.98 }, { ename: "scot", esalary: 67000.90 }]);
function Sum(x, y) {
    return x + y;
}
function Additon(a, b) {
    return Sum(a, b);
}
console.log(Additon(10, 30));
