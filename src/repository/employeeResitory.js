const pool = require('../config/db');
const {
    insertEmployee,
    updateEmployee,
    deleteEmployee,
    selectEmployee,
    selectEmployeeById
} = require('../utils/query');


const createEmp = (employee) => {
    pool.query(
        insertEmployee,
        [employee.firstName,employee.lastName,employee.dob,employee.pob,employee.address],
        (err,res)=> {
            err ? console.log(err):console.log(`Success create new Employee with id : ${res.rows[0].id}`);
        })
}

const getAllEmp = ()=>{
    pool.query(
        selectEmployee,(err,res) => {
            err ? console.log(err.stack) : console.log(res.rows);;
        }
    )
}

const deleteEmp = (id)=>{
    pool.query(deleteEmployee,[id], (err,res)=>{
        err ? console.log(err.stack):console.log(`Success Delete Emplotee with id : ${id}`);
    })
}

const updateEmp = (employee) => {
    pool.query(updateEmployee,[employee.firstName,employee.lastName,employee.dob,employee.pob,employee.address,employee.id], (err,res) => {
        err ? console.log(err) : console.log(`Success Update Employee : ${employee}`);
    })
}

const getEmpById = (id) => {
    pool.query(selectEmployeeById,[id],(err,res) => {
        err ? console.log(err): console.log(`Success get employee : ${res.rows[0]}`);;
    })
}

module.exports = {
    createEmp,
    getAllEmp,
    deleteEmp,
    updateEmp,
    getEmpById
};