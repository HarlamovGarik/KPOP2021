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
function createCustomerID(_a) {
    var name = _a.name, id = _a.id;
    return name + " " + id;
}
function main_4() {
    var customer = { name: "Ane", id: 10 };
    var myId = createCustomerID(customer);
    console.log(myId);
    var IdGenerator = function (_a) {
        var name = _a.name, id = _a.id;
        return createCustomerID({ name: name, id: id });
    };
    console.log(IdGenerator(customer));
}
main_4();
//# sourceMappingURL=exe4.js.map