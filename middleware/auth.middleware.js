const USER = require('../models/user.models');
const bcrypt = require('bcrypt');

const validateUser = async (req, res, next) => {
  try {
    let userData = await USER.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(404).send({
        message: 'This email has not been registered!',
      });
    }
    let isUserValid = bcrypt.compareSync(req.body.password, userData.password);
    if (!isUserValid) {
      return res.status(401).send({
        message: 'Invalid Credentials!',
      });
    }
    next();
  } catch (e) {
    res.status(500).send({
      mesage: `internal server  error ${e}`,
    });
  }
};
module.exports = { validateUser };
