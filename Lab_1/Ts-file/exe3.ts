enum Category{
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}
function getAllWorkers(){
    return [{Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst, id:12},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id:56},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 98},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id:2}]
}

function getWorkerByID(id:number, all_workers:{Name:string,surname:string, available:boolean, salary:number, category?:Category, id:number}[]): string{
    for(let worker of all_workers){
        if(worker.id == id){
            return worker.Name + " " + worker.surname + " " + worker.salary
        }
    }return null
}

function main_3(): void
{
    let workers = getAllWorkers()
    workers.forEach(value => {if(value.category == Category.Developer){
        console.log(value.Name + " " +value.surname)
    }})
}
main_3()