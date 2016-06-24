'use strict';

var connect = function () {
  var cb;
  var db;

  if (typeof arguments[arguments.length - 1] !== 'function') {
    throw new Error('Last argument must be a callback function.');
  } else {
    cb = arguments[arguments.length - 1];
  }

  db = {
    collection: 'Will eventually be a function to work a collection.',
  };

  cb(null, db);
};

module.exports = connect;
