const Product = require("../models/Product");

module.exports = {

  async add(request, response) {

    const { idReference, name, description, value, url } = request.body;

    const existProduct = await Product.findOne({ idReference: idReference }, (error) => {
      if (error) {
        response.json(error)
      }
    });

    if (existProduct) {
      return response.json({ error: `Product exist: ${idReference}` });
    };

    await Product.create({
      idReference: idReference,
      name: name,
      description: description,
      value: value,
      url: url,
      likes: 0
    }, (error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result);
    });
  },

  async findById(request, response) {
    await Product.findById(request.params.id, (error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    });
  },

  async likeById(request, response) {

    const selectProduct = await Product.findById(request.params.id, (error) => {
      if (error) {
        response.json(error)
      }
    });

    selectProduct.likes++

    await selectProduct.save((error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    })
  },

  async findAll(request, response) {
    await Product.find((error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    });
  },

  async deleteById(request, response) {
    await Product.deleteById(request.params.id, (error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result);
    });
  },

  async deleteAll(request, response) {
    await Product.deleteMany((error, result) => {
      if (error) {
        response.json(error)
      }
      response.json(result)
    });
  }
};