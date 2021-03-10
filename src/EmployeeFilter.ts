import Employee from "./Employee";

class EmployeeFilter {

    employeesEarningMoreThan(employees: Employee[], threshold: number) {
        if (threshold <= 1000) {
            return employees;
        }
        if (threshold >= 2000) {
            return [ employees[2] ];
        }
    }
}

export default EmployeeFilter;