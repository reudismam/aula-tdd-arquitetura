import Employee from "./Employee";

class EmployeeFilter {
    employeesEarningMoreThan(employees: Employee[], threshold: number) {
        let employessMoreThanThreshould = employees.filter(e => e.salary > threshold);        
        return employessMoreThanThreshould;
    }
}

export default EmployeeFilter;