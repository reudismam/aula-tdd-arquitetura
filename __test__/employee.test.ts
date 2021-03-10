import EmployeeFilter from '../src/EmployeeFilter';
import Employee from '../src/Employee';

describe("Testes salários funcionarios", ()=>{
    it("Funcionários que ganham acima de um valor", ()=>{
        const employees:Employee[] = [
            { name: "Pedro", salary: 1000},
            { name: "Paulo", salary: 2000},
            { name: "Maria", salary: 3000}
        ]
        const employeeFilter = new EmployeeFilter();
        const earningMoreThan2000 = 
            employeeFilter.employeesEarningMoreThan(employees, 2000);
        expect(earningMoreThan2000).not.toContain(employees[0]);
        expect(earningMoreThan2000).not.toContain(employees[1]);
        expect(earningMoreThan2000).toContain(employees[2]);

        const earningMoreThan900 = 
            employeeFilter.employeesEarningMoreThan(employees, 900);
        expect(earningMoreThan900).toContain(employees[0]);
        expect(earningMoreThan900).toContain(employees[1]);
        expect(earningMoreThan900).toContain(employees[2]);
    });
});
