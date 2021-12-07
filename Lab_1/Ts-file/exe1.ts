function getAllWorkers(){
    return [{Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}]
}

function logFirstAvailable ({Name,surname, available, salary}: {Name:string,surname:string, available:boolean, salary:number}){
console.log(`"Full name" ${Name +" "+ surname}\n "Available" ${available} "Salary ${salary}"`)
}

function logFirstAvailable_1(workers:{Name:string,surname:string, available:boolean, salary:number}[]): void{
    for(let worker of workers){
        if(worker.available)
        console.log(`"Full name:" ${worker.Name +" "+ worker.surname}`)

    }
}

