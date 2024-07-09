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


class DbClient<T>{
    public connectionString:T|null = null;
}

let orc = new DbClient<MongoDb>();
orc.connectionString={
    url:"localhost://120939/"
}


console.log(JSON.stringify(orc));