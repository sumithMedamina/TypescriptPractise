var DatabaseClient = /** @class */ (function () {
    function DatabaseClient(conStr) {
        this.connectionString = null;
        for (var property in conStr) {
            console.log("".concat(property, " : ").concat(conStr[property]));
        }
    }
    return DatabaseClient;
}());
var oracle2 = new DatabaseClient({ userid: "scot", password: "tiger", database: "demd" });
