// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = []
// Collect employee data
const collectEmployees = function() {
  
  // TODO: Get user input to create and return an array of employee objects

  let addMoreEmployees = true;
  while (addMoreEmployees) {
    let firstName = prompt("Enter employee's first name:");
    
    
    let lastName = "";
    while (lastName === "") {
      lastName = prompt("Enter employee's last name:");
    }

    let salary = "";
    while (isNaN(parseFloat(salary)) || !isFinite(salary)) {
      salary = prompt("Enter employee's salary:");
    }
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };
    employeesArray.push({firstName, lastName, salary});
    const addMore = prompt("Do you want to add another employee? (yes/no)").toLowerCase();
    addMoreEmployees = addMore === "yes";
   
  }
  return employeesArray;
};



// Display the average salary
const displayAverageSalary = function(salaries) {
  // TODO: Calculate and display the average salary
  if (!Array.isArray(salaries) || salaries.length === 0) {
    console.log("No valid salaries provided.");
    return;
  }

  const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
  const averageSalary = totalSalary / salaries.length;

  console.log(`The average salary is: ${averageSalary.toFixed(2)}`);

};



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available");
    return null;
  }
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Payroll Audit: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
    return randomEmployee;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
