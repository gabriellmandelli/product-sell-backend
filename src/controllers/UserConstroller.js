const User = require('../models/User');

module.exports = {

  async add(request, response) {

    const { name, user, password, email, phone } = request.body;

    existUser = await User.findOne({ user: user }, (error, result) => {
      if (error) {
        response.json(error)
      }
    });

    if (existUser) {
      response.json({ menssage: 'Usuario informado já esta sendo utilizado.' });
    }

    const newProduct = await User.create({
      name,
      user,
      password,
      email,
      phone
    }, (error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    });
  },

  async findAll(request, response) {
    await User.find((error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    });
  },

  async findByUserPassword(request, response) {
    const { user, password } = request.headers;

    returnUser = await User.findOne({ user: user, password: password }, (error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    });
  }
};