const Product = require("../models/Product");

module.exports = {

  async add(request, response) {

    const { idReference, name, description, value, url } = request.body;

    const existProduct = await Product.findOne({ idReference: idReference });

    if (existProduct) {
      return response.json({ error: 'Product exist' });
    };

    const newProduct = await Product.create({
      idReference: idReference,
      name: name,
      description: description,
      value: value,
      url: url,
      likes: 0
    });

    return response.json(newProduct);
  },

  async findById(request, response) {
    const { idProduct } = request.headers;

    const selectProduct = await Product.findById(idProduct);

    return response.json(selectProduct);
  },

  async findAll(request, response) {
    const returnProducts = await Product.find();

    return response.json(returnProducts);
  },

  async deleteById(request, response) {

    const productDelete = await Product.deleteById(request.params.id);

    return response.json(productDelete);
  }
};