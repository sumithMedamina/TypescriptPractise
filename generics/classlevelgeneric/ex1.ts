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


class DatabaseClient<T>{

    constructor(conStr:T){
        for(var property in conStr){
            console.log(`${property} : ${conStr[property]}`);
        }
    }

    

let oracle2 = new DatabaseClient<Oracle>({userid:"scot",password:"tiger",database:"demd"});