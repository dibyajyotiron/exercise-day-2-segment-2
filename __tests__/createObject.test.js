const createObject = require('../src/createObject');

describe('createObject', () => {
  test('should return an object with fname and lname as key with values as passed to function', () => {
    expect(createObject('anshu', 'rathee')).toBe({ fname: 'anshu', lname: 'rathee' });
  });
});
