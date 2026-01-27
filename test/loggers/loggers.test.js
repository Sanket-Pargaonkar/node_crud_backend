const test = require('node:test');
const assert = require('node:assert');

test('the logger import should return a object', async (t) => {
  const logger = require('../../loggers/logger');
  assert.notStrictEqual(logger, undefined);
  await t.test('logger should have info object', () => {
    assert.equal(Object.prototype.hasOwnProperty.call(logger, 'info'), true);
  });
  await t.test('logger should have error object', () => {
    assert.equal(Object.prototype.hasOwnProperty.call(logger, 'error'), true);
  });
  await t.test('logger should have trace object', () => {
    assert.equal(Object.prototype.hasOwnProperty.call(logger, 'trace'), true);
  });
  await t.test('logger should have debug object', () => {
    assert.equal(Object.prototype.hasOwnProperty.call(logger, 'debug'), true);
  });
  await t.test('logger should have fatal  object', () => {
    assert.equal(Object.prototype.hasOwnProperty.call(logger, 'fatal'), true);
  });
});
