var DbClient = /** @class */ (function () {
    function DbClient() {
        this.connectionString = null;
    }
    return DbClient;
}());
var orc = new DbClient();
orc.connectionString = {
    url: "localhost://120939/"
};
console.log(JSON.stringify(orc));
