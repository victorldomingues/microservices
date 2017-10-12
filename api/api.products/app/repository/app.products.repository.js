const Product = require("../models/app.product.model");
module.exports = {
    all: function (callback) {
        Product.all().then(products => {
            callback(products);
        }, error => {
            callback({
                error: error
            });
        });
    },
    get: function (id, callback) {
        Product.findById(id).then(product => {
            callback(product);
        })
    }
}