
interface IProoduct{
  Name:string;
  price:number;
}

interface Iemployee{
    ename:string;
    esalary:number;
}

class ApiService{

    FetchData<T>(response:T){
        console.log(JSON.stringify(response));
    }

}

let prod = new ApiService();
prod.FetchData<IProoduct>({Name:"iphone",price:980000.00});
prod.FetchData<IProoduct[]>([{Name:"iphone",price:980000.00},{Name:"samsung",price:950000.00}]);


let emp = new ApiService();
emp.FetchData<Iemployee>({ename:"jhon",esalary:78000.98});
emp.FetchData<Iemployee[]>([{ename:"jhon",esalary:78000.98},{ename:"scot",esalary:67000.90}]);

function Sum(x:any , y:any){
    return x+y;
}

function Additon<T>(a:T,b:T):T
{
    return Sum(a,b);
}

console.log(Additon<number>(10,30));