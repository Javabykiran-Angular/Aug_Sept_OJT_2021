"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, sal, role) {
        this.fname = f;
        this.lname = l;
        this.salary = sal;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n        First Name  ::" + this.fname + "\n        Last Name   ::" + this.lname + "\n        Salary      ::" + this.salary + "\n        Role        ::" + this.dept.getRole() + "\n       ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
