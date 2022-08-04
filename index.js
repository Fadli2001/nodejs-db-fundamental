const {
    createEmp,    
    deleteEmp,
    updateEmp,
    getEmpById,
    getAllEmp,
} = require('./src/repository/employeeResitory')
const Employee = require('./src/model/employee');
const http = require('http');


// console.log(`Create new Employee`);
// const newEmployee = Employee('','Fadli','Fauzan','2001-07-04','Cianjur','Jakarta');
// createEmp(newEmployee);
console.log('========================================');
console.log('Get All Employee');
getAllEmp();
console.log('========================================');
// console.log('Update Employee');
// const newEmployee1 = Employee('Update FirstName','Fauzan','2001-07-04','Cianjur','Jakarta','')
// updateEmp(newEmployee1);
// console.log('========================================');
console.log('Delete Employe by id');
deleteEmp('16');
console.log('========================================');



