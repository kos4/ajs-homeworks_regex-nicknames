import Validator from '../classes/Validator';

test.each([
  ['t', true],
  ['1', false],
  ['tt', true],
  ['t3', false],
  ['t2t', true],
  ['2tddb_4v', false],
  ['t3333ds', false],
  ['t3333ds_', false],
  ['t3-333_ds', true],
  ['t3-3333_ds', false],
])('validate nickname "%s"', (nickname, expected) => {
  const validator = new Validator();
  expect(validator.validateUsername(nickname)).toBe(expected);
});
