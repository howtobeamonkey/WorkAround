import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee.js';

import Employee from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);

/* Print: Cadre: entryLevel
Tax: 500
Benefits: health
Bonus: 200
Reimbursement Eligibility: 5000

Cadre: midLevel
Tax: 5000
Benefits: health, housing
Bonus: 1000
Reimbursement Eligibility: 13000

Cadre: seniorLevel
Tax: 20000
Benefits: health, housing, wellness, gym
Bonus: 2000
Reimbursement Eligibility: 31000 */
