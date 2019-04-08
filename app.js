const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('./database/database');
const user = require('./routes/users.routes');

const port = 8000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.use('/api/user', user);

db.connect(db.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.');
    process.exit(1);
    // eslint-disable-next-line no-useless-return
    return;
  }
  app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
  });
});
