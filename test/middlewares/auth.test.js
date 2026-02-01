const test = require('node:test');
const assert = require('assert');

test('test auth middleware', async (t) => {
  //create express object
  const req = Object.create({
    headers: { authorisation: '' },
    path: '',
  });
  const res = Object.create({
    statusCode: undefined,
    status: undefined,
    send: t.mock.fn(function () {}),
  });
  const next = t.mock.fn(function () {}, { times: 1 });
  const httpStatusCodes = require('http-status-codes');
  const auth = require('../../src/middlewares/auth');

  await t.test('Rejects when auth header is not present', () => {
    process.env.AUTH_HEADER = 'TEST';
    auth(req, res, next);
    assert.strictEqual(res.statusCode, httpStatusCodes.StatusCodes.UNAUTHORIZED);
    assert.strictEqual(res.status, httpStatusCodes.ReasonPhrases.UNAUTHORIZED);
    assert.strictEqual(next.mock.callCount(), 0);
  });

  await t.test('Rejects when auth header is not matching', () => {
    process.env.AUTH_HEADER = 'TEST';
    req.headers.authorisation = 'NOT TEST';
    auth(req, res, next);
    assert.strictEqual(res.statusCode, httpStatusCodes.StatusCodes.UNAUTHORIZED);
    assert.strictEqual(res.status, httpStatusCodes.ReasonPhrases.UNAUTHORIZED);
    assert.strictEqual(next.mock.callCount(), 0);
  });

  await t.test('next when auth header is matching', () => {
    process.env.AUTH_HEADER = 'TEST';
    req.headers.authorisation = 'TEST';
    auth(req, res, next);
    assert.strictEqual(next.mock.callCount(), 1);
  });
});
