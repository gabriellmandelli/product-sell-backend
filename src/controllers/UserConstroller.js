const User = require('../models/User');

module.exports = {

  async add(request, response) {

    const { name, user, password, email, phone } = request.body;

    existUser = await User.findOne({ user: user });

    if (existUser) {
      response.json({ menssage: 'Usuario informado já esta sendo utilizado.' });
    }

    const newProduct = await User.create({
      name,
      user,
      password,
      email,
      phone
    });

    return response.json(newProduct);
  },

  async findAll(request, response) {

    const returnUsers = await User.find();

    return response.json(returnUsers);
  },

  async findByUserPassword(request, response) {
    const { user, password } = request.headers;

    returnUser = await User.findOne({ user: user, password: password });

    return response.json(returnUser);
  }
}