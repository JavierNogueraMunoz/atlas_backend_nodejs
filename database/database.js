var mysql = require('mysql');
var async = require('async');


exports.MODE_TEST = 'backend';
exports.MODE_PRODUCTION = 'backend';

var state = {
  pool: null,
  mode: null,
};

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'backend',
    port:3307,
  });

  state.mode = mode;
  done();
};

exports.get = function() {
  return state.pool;
};
