const User = require('../models/User');

module.exports = {


  async add(request, response) {

    const { name, user, password, email, phone } = request.body;

    existUser = await User.findOne({ user: user });

    console.log('Teste: ' + existUser);

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

  async getAll(request, response) {

    const returnUsers = User.getAll();

    return response.json(returnUsers);
  },

  async getByUserPassword(request, response) {
    const { user, password } = request.headers;

    returnUser = User.findOne({ user: user, password: password });

    return response.json(returnUser);
  }
}