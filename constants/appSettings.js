const db = require('../database/database');

exports.executeQuery = async query => {
  return new Promise((resolve, reject) => {
    db.get().query(query, function(err, rows) {
      resolve(err ? err.message : rows);
    });
  });
};
