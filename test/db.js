/*globals describe, it*/

'use strict';

var trailstore = require('../index');

describe('db()', function () {
  it('errors when no args specified', function () {
    trailstore.db().should.be.true();
  });
});
