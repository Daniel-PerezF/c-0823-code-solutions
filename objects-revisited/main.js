const business = {
  opens: '8am',
  closes: '4pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    george: {
      position: 'guitar',
      daysOfWeekWorking: ['M', 'T'],
    },
    john: {
      position: 'vocals',
      daysOfWeekWorking: ['W', 'Th'],
    },
    paul: {
      position: 'bass',
      daysOfWeekWorking: ['M', 'T', 'W'],
    },
    ringo: {
      position: 'drums',
      daysOfWeekWorking: ['T', 'W', 'TH'],
    },
  },
};

function addWeekends() {
  if (!business.daysOpen.includes('S')) {
    business.daysOpen.push('S');
  }
  if (!business.daysOpen.includes('Su')) {
    business.daysOpen.push('Su');
  }

  for (const employee in business.employees) {
    const daysOfWeekWorking = business.employees[employee].daysOfWeekWorking;
    if (!daysOfWeekWorking.includes('S')) {
      daysOfWeekWorking.push('S');
    }
    if (!daysOfWeekWorking.includes('Su')) {
      daysOfWeekWorking.push('Su');
    }
  }
}
addWeekends(business);

function createEmployees(user, jobTitles) {
  const numWeekdays = Math.floor(Math.random() * 5) + 1;
  const weekdaysWorking = [];
  const weekdays = ['M', 'T', 'W', 'Th', 'F'];
  while (weekdaysWorking.length < numWeekdays) {
    const random = Math.floor(Math.random() * weekdays.length);
    const day = weekdays[random];
    if (!weekdaysWorking.includes(day)) {
      weekdaysWorking.push(day);
    }
  }
  addWeekends();

  const isfullTime = checkFullTime(weekdaysWorking);
  const jobTitle = jobTitles.shift();

  return {
    name: user.name,
    position: jobTitle,
    daysOfWeekWorking: weekdaysWorking,
    fullTime: isfullTime,
  };
}

function checkFullTime(employee) {
  const weekdays = ['M', 'T', 'W', 'Th', 'F'];
  const weekend = ['S', 'Su'];
  const workingDays = employee.filter((day) => weekdays.includes(day));
  const totalDays = workingDays.concat(weekend);

  return totalDays.length > 5;
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/users';
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = xhr.response;

    const jobTitles = ['Accountant', 'Manager', 'Clerk', 'Janitor'];
    for (let i = 0; i < 4; i++) {
      const userData = data[i];
      const employee = createEmployees(userData, jobTitles);

      business.employees[userData.username] = employee;
    }
    business.totalEmployees = Object.keys(business.employees).length;
  });
  xhr.send();
}
addEmployees();

function deleteEmployee(employeeName) {
  if (business.employees && business.employees[employeeName]) {
    delete business.employees[employeeName];
    business.totalEmployees = Object.keys(business.employees).length;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  addWeekends();
  for (const employee in business.employees) {
    business.employees[employee].fullTime = checkFullTime(
      business.employees[employee].daysOfWeekWorking
    );
  }
  addEmployees();
  deleteEmployee('Bret');
});
console.log(business);
