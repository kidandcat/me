const assert = require('assert');
const app = require('../../src/app');

describe('\'tweets\' service', () => {
  it('registered the service', () => {
    const service = app.service('tweets');

    assert.ok(service, 'Registered the service');
  });
});
