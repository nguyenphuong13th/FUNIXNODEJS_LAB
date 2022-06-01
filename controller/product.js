const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('add-product',
    {pageTitle:'Add-product',
    path : '/admin/add-product',
    activeAddProduct:true,
    formCss:true,productCss:true
    });
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title) // only for post requests url can be the same with get
    product.save();
    res.redirect("/");//back to the root
}

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products =>{
        res.render('shop',
        {prods:products,
        pageTitle:'Shop',
        path : '/',
        hasProducts:products.length > 0,
        activeShop:true,
        productCss:true
        });
    });

}

