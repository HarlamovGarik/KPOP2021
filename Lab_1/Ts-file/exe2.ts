enum Category{
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}
function getAllWorkers(){
    return [{Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}]
}

function getWorkersNamesByCategory(category:number, all_workers:{Name:string,surname:string, available:boolean, salary:number, category?:Category}[]): string[]{
    if(category){
        let workers: string[]
        for (let i of all_workers){
            if (i.category == category){
                workers.push(i.surname)
            }
        }
        return workers
    }else return null

}

function logWorkersNames(log:string[]): void{
    for (let i of log){
        console.log(i)
    }
}