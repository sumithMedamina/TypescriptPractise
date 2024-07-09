interface Oracle{
    userid:string;
    password:string;
    database:string;
}

interface Mysql{
    host:string;
    uid:string;
    password:string;
    dbName:string
}

interface MongoDb{
    url:string
}


class DbConnection{
    connect<T>(connectionString:T){
           for(var property in connectionString){
            console.log(`${property} : ${connectionString[property]}`)
           }
    }
}
console.log("==Oracle==");
let oracle = new DbConnection();
oracle.connect<Oracle>({userid:"scot",password:"tiger",database:"data"});
console.log("==Mysql==");
let mysql = new DbConnection();
mysql.connect<Mysql>({uid:"jhon",host:"mysql",password:"hl12",dbName:"jai"});
console.log("==Mongodb==");
let mongodb = new DbConnection();
mongodb.connect<MongoDb>({url:"localhost//:120.0.0.1/2017"});