var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllWorkers() {
    return [{ Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst, id: 12 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 56 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 98 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id: 2 }];
}
function getWorkerByID(id, all_workers) {
    for (var _i = 0, all_workers_1 = all_workers; _i < all_workers_1.length; _i++) {
        var worker = all_workers_1[_i];
        if (worker.id == id) {
            return worker.Name + " " + worker.surname + " " + worker.salary;
        }
    }
    return null;
}
function main_3() {
    var workers = getAllWorkers();
    workers.forEach(function (value) {
        if (value.category == Category.Developer) {
            console.log(value.Name + " " + value.surname);
        }
    });
}
main_3();
//# sourceMappingURL=exe3.js.map