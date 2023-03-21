
const button = document.getElementById('button');
button.addEventListener('click', function() {
    const salary = document.getElementById('basic-salary').value;
    const benefits = document.getElementById('benefits').value;
    const netSalary = calculateNetSalary(Number(salary) + Number(benefits)).netSalary;
    document.getElementById('payee-tax').textContent = calculateNetSalary(Number(salary) + Number(benefits)).payeeTax;
    document.getElementById('nhif-deduction').textContent = calculateNetSalary(Number(salary) + Number(benefits)).nhifContribution;
    document.getElementById('nssf-deduction').textContent = calculateNetSalary(Number(salary) + Number(benefits)).nssfDeduction;
    document.getElementById('net-salary').textContent = netSalary;
});



const TAX_RATES = {
    '1': { min: 0, max: 24000, rate: 0.1 },
    '2': { min: 24001, max: 40667, rate: 0.15 },
    '3': { min: 40668, max: 57333, rate: 0.20 },
    '4': { min: 57334, max: 74000, rate: 0.25 },
    '5': { min: 74001, max: 1000000, rate: 0.3 }
  };
  console.log(TAX_RATES)

  const NHIF_RATES = {
    '1': 150,
    '2': 300,
    '3': 400,
    '4': 500,
    '5': 600,
    '6': 750,
    '7': 850,
    '8': 900,
    '9': 1000,
    '10': 1100,
    '11': 1200
  };

  console.log(NHIF_RATES)
  
  const NSSF_EMPLOYEE_RATE = 0.06;
  const NSSF_EMPLOYER_RATE = 0.06;

//   function addingEventListener() {
//     const basicSalary = document.getElementById('basic-salary');
//     basicSalary.addEventListener('click', calculateNetSalary(){
//         return netSalary
//     });
    
// }



// const basicSalary = document.getElementById('basic-salary').addEventListener('click', calculateNetSalary);

// document.getElementById('basic-salary').addEventListener('click', calculateNetSalary);

// const benefits = document.getElementById('benefits');
// benefits.addEventListener('click', calculateNetSalary);

  // Define the function to calculate the payee tax
  function calculatePayeeTax(salary) {
    let tax = 0;
  
    for (let i = 1; i <= 5; i++) {
      if (salary > TAX_RATES[i].max) {
        tax += (TAX_RATES[i].max - TAX_RATES[i].min) * TAX_RATES[i].rate;
      } else {
        tax += (salary - TAX_RATES[i].min) * TAX_RATES[i].rate;
        break;
      }
    }
  
    return tax;
  }
  console.log(calculatePayeeTax(50000))
  
  // Define the function to calculate the NHIF contribution
  function calculateNHIF(salary) {
    for (let i = 11; i >= 1; i--) {
      if (salary >= NHIF_RATES[i]) {
        return NHIF_RATES[i];
      }
    }
    return 0;
  }

  console.log(calculateNHIF(50000))
  
  // Define the function to calculate the NSSF deduction
  function calculateNSSF(salary) {
    const employeeContribution = salary * NSSF_EMPLOYEE_RATE;
    const employerContribution = salary * NSSF_EMPLOYER_RATE;
  
    return { employee: employeeContribution, employer: employerContribution };
  }
  console.log(calculateNSSF(50000))
  
  // Define the function to calculate the net salary
  function calculateNetSalary(salary) {
    const payeeTax = calculatePayeeTax(salary);
    const nhifContribution = calculateNHIF(salary);
    const nssfDeduction = calculateNSSF(salary).employee;
  
    const deductions = payeeTax + nhifContribution + nssfDeduction;
    const netSalary = salary - deductions;
  
    return {
      basicSalary: salary,
      payeeTax: payeeTax,
      nhifContribution: nhifContribution,
      nssfDeduction: nssfDeduction,
      deductions: deductions,
      netSalary: netSalary
    };
  }
  console.log(calculateNetSalary(50000))