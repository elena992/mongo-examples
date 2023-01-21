print("Employees");

// List all the employees.
print("1. List all Employees");
db.employees.find({}).forEach(printjsononeline);

// List all the employees
db.employees.find();

// Find the employee with whose name is Steve
db.employees.find({ name: "Steve" });

// Find all employees whose age is greater than 30
db.employees.find({ age: { $gt: 30 } });

//Find the employee whose extension is 2143
db.employees.find({ "phone.ext": "2143" });

//Find all employees that are over 30
db.employees.find({ "phone.ext": "2143" });
