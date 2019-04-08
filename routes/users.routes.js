const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller');

router.get('/:uid', users.getUserUid);
router.post('/', users.saveUser);

module.exports = router;
