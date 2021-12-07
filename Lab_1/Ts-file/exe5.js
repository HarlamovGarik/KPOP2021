function createCustomer(name, age, city) {
    if (age) {
        return console.log("name: " + name + ", age: " + age);
    }
    if (age && city) {
        return console.log("name: " + name + ", age: " + age + ", city: " + city);
    }
    if (city) {
        return console.log("name: " + name + ", city: " + city);
    }
    return console.log("name: " + name);
}
var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllWorkers() {
    return [{ Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst, id: 1 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 2 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 3 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id: 4 }];
}
function getWorkersNamesByCategory(all_workers, category) {
    if (category === void 0) { category = Category.Designer; }
    var workers = [];
    for (var _i = 0, all_workers_1 = all_workers; _i < all_workers_1.length; _i++) {
        var i = all_workers_1[_i];
        if (i.category == category) {
            workers.push(i.surname);
        }
    }
    return workers;
}
function logWorkersNames(log, default_fun) {
    if (default_fun === void 0) { default_fun = getAllWorkers(); }
    for (var _i = 0, log_1 = log; _i < log_1.length; _i++) {
        var i = log_1[_i];
        console.log(i);
    }
}
function getWorkerByID(id, worker) {
    if (worker.id == id) {
        return worker.Name + " " + worker.surname + " " + worker.salary;
    }
    return null;
}
function CheckOutWorkers(customer, workerIDs) {
    var workers = getAllWorkers();
    var availableWorkers = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var i = workers_1[_i];
        for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
            var j = workerIDs_1[_a];
            if (i.id == j) {
                if (i.available) {
                    availableWorkers.push((getWorkerByID(i.id, i)));
                }
            }
        }
    }
    console.log(customer);
    return availableWorkers;
}
function main_5() {
    createCustomer("Tom");
    createCustomer("Jack", 45);
    createCustomer("Mark", 19, "London");
    console.log(getWorkersNamesByCategory(getAllWorkers()));
    var myWorker = CheckOutWorkers("Ann", [1, 2, 4]);
    myWorker.forEach(function (value) { return console.log(value); });
}
main_5();
//# sourceMappingURL=exe5.js.map