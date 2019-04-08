const user = require('../services/user.service');

exports.getUserUid = async (req, res) => {
  const response = await user.getUserUid(req.params.uid);
  res.send(response);
};
exports.saveUser = async (req, res) => {
  const response = await user.saveUser(req.body);
  res.send(response);
};
