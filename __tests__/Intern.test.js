const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('generates an intern', () => {
    const intern = new Intern('Angel', '1', 'aescobar2045@gmail.com', 'UNCC');

    expect(intern.getRole()).toBe('Intern');
});

test('property for school', () => {
    const intern = new Intern ('Angel', '1', 'aescobar2045@gmail.com', 'UNCC');

    expect(intern.school).toBe('UNCC');
});

test('school method', () => {
    const intern = new Intern ('Angel', '1', 'aescobar2045@gmail.com', 'UNCC');

    expect(intern.getSchool()).toBe('UNCC');
});