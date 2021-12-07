function createCustomer(name:string, age?:number, city?:string){
if(age){
 return console.log(`name: ${name}, age: ${age}`)
}
if(age && city){
    return console.log(`name: ${name}, age: ${age}, city: ${city}`)
}
if(city){
    return console.log(`name: ${name}, city: ${city}`)
}
return console.log(`name: ${name}`)
}

enum Category{
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}
function getAllWorkers(){
    return [{Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst, id:1},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id:2},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 3},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id:4}]
}

function getWorkersNamesByCategory(all_workers:{Name:string,surname:string, available:boolean, salary:number, category:Category}[], category = Category.Designer): string[]{
        let workers: string[]  = [];
        for (let i of all_workers){
            if (i.category == category){
                workers.push(i.surname)
            }
        }
        return workers


}
function logWorkersNames(log:string[], default_fun=getAllWorkers()): void{
    for (let i of log){
        console.log(i)
    }
}

function getWorkerByID(id:number, worker:{Name:string,surname:string, available:boolean, salary:number, category?:Category, id:number}): string{
    if(worker.id == id){
        return worker.Name + " " + worker.surname + " " + worker.salary
    }
    return null
}

function CheckOutWorkers(customer:string, workerIDs: number []):string[]{
    let workers = getAllWorkers()
    let availableWorkers:string[] = [];
    for(let i of workers){
        for(let j of workerIDs){
            if(i.id == j){
                if(i.available){
                    availableWorkers.push((getWorkerByID(i.id, i)))

                }
            }
        }
    }
    console.log(customer)
    return availableWorkers

}
function main_5(){
    createCustomer("Tom")
    createCustomer("Jack", 45)
    createCustomer("Mark", 19, "London")

    console.log(getWorkersNamesByCategory(getAllWorkers()))
    let myWorker = CheckOutWorkers("Ann", [1,2,4])
    myWorker.forEach(value => console.log(value))
}

main_5()