var DbConnection = /** @class */ (function () {
    function DbConnection() {
    }
    DbConnection.prototype.connect = function (connectionString) {
        for (var property in connectionString) {
            console.log("".concat(property, " : ").concat(connectionString[property]));
        }
    };
    return DbConnection;
}());
console.log("==Oracle==");
var oracle = new DbConnection();
oracle.connect({ userid: "scot", password: "tiger", database: "data" });
console.log("==Mysql==");
var mysql = new DbConnection();
mysql.connect({ uid: "jhon", host: "mysql", password: "hl12", dbName: "jai" });
console.log("==Mongodb==");
var mongodb = new DbConnection();
mongodb.connect({ url: "localhost//:120.0.0.1/2017" });
