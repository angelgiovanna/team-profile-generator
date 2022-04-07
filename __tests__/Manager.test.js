const Manager = require('../lib/Manager');

test('generates a manager', () => {
    const manager = new Manager('Angel', '4', 'aescobar2045@gmail.com', '405');

    expect(manager.getRole()).toBe('Manager');
});

test('property for office number', () => {
    const manager = new Manager('Angel', '4', 'aescobar2045@gmail.com', '405');

    expect(manager.officeNumber).toBe('405');
});

test('office number method', () => {
    const manager = new Manager('Angel', '4', 'aescobar2045@gmail.com', '405');

    expect(manager.getOfficeNumber()).toBe('405');
});