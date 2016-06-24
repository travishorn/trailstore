/*globals describe, it*/

'use strict';

var should = require('should');

var trailstore = require('../index');

describe('connect()', function () {
  it('throws error without a callback', function () {
    (function () {
      trailstore.connect();
    }).should.throw(Error);
  });

  it('calls back with a database object', function () {
    trailstore.connect(function (err, db) {
      should.not.exist(err);
      should.exist(db);
    });
  });
});
