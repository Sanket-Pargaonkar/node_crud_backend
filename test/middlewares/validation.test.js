const test = require('node:test');
const assert = require('assert');

test('validateToken middleware test cases', async (t) => {
  //create mock express objects
  const req = Object.create({
    headers: { authorisation: undefined },
  });

  const res = Object.create({
    status: t.mock.fn(function () {}, { times: 1 }),
    send: t.mock.fn(() => {}, { times: 1 }),
  });
  const next = t.mock.fn(() => {}, { times: 1 });
  await t.test('should reject when token is empty', () => {
    const validateToken = require('../../src/middlewares/validation');
    req.headers.authorisation = '';
    validateToken(req, res, next);
    assert.strictEqual(next.mock.callCount(), 0);
    assert.strictEqual(res.status.mock.callCount(), 1);
    assert.strictEqual(res.send.mock.callCount(), 1);
  });
  next.mock.resetCalls();
  res.status.mock.resetCalls();
  res.send.mock.resetCalls();
  await t.test('should call next() when token is not empty', () => {
    const validateToken = require('../../src/middlewares/validation');
    req.headers.authorisation = 'token';
    validateToken(req, res, next);
    assert.strictEqual(next.mock.callCount(), 1);
    assert.strictEqual(res.status.mock.callCount(), 0);
    assert.strictEqual(res.send.mock.callCount(), 0);
  });
});
