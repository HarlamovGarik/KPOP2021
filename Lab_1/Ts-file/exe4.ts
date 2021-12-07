enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

type customer = { name: string, id: number }

function getAllWorkers() {
    return [{
        Name: 'Ivan',
        surname: 'Ivanov',
        available: true,
        salary: 1000,
        category: Category.Business_analyst,
        id: 12
    },
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 56},
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 98},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id: 2}]
}

function createCustomerID({name, id}: { name: string, id: number }): string {
    return name + " " + id;
}


function main_4(): void {
    let customer = {name: "Ane", id: 10}
    let myId = createCustomerID(customer)
    console.log(myId)

    let IdGenerator = ({name, id}) => createCustomerID({name, id});

    console.log(IdGenerator(customer))
}

main_4()