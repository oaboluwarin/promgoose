import { ProductModel as Product } from '../models';

export default {
  addNewProduct(req, res, next) {
    let product = new Product(
      {
        name: req.body.name,
        price: req.body.price
      }
    );

    product.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send('Product Created successfully')
    })
  },

  getAllProducts(req, res) {
    Product.find({}, (err, products) => {
      if (err) return err;
      return res.send(products)
    })
  },

  editProduct(req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
      if (err) return err;
      res.send('Product udpated.');
    });
  },

  deleteProduct(req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) return err;
      res.send('Deleted successfully!');
    })
  }
}
