const Engineer = require('../lib/Engineer');

test('generates an engineer', () => {
    const engineer = new Engineer('Angel', '2', 'aescobar2045@gmail,com', 'angelgiovanna');

    expect(engineer.getRole()).toBe('Engineer');
});

test('property for github', () => {
    const engineer = new Engineer('Angel', '2', 'aescobar2045@gmail.com', 'angelgiovanna');

    expect(engineer.github).toBe('angelgiovanna');
});

test('github method', () => {
    const engineer = new Engineer('Angel', '2', 'aescobar2045@gmail.com', 'angelgiovanna');

    expect(engineer.getGithub()).toBe('https://github.com/angelgiovanna');
});