const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('an employee will be generated', () => {
    const employee = new Employee('Angel', '3', 'aescobar2045@gmail.com');

    expect(employee.getName()).toBe('Angel');
    expect(employee.getId()).toBe('3');
    expect(employee.getEmail()).toBe('aescobar2045@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});