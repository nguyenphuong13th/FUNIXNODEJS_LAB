const products = [];
exports.getAddProduct = (req, res, next) => {
    res.render('add-product',
    {pageTitle:'Add-product',
    path : '/admin/add-product',
    activeAddProduct:true,
    formCss:true,productCss:true
    });
}
exports.postAddProduct = (req, res, next) => { // only for post requests url can be the same with get
    products.push({title:req.body.title});//pushing the title of the product to the products array
    res.redirect("/");//back to the root
}

exports.getProduct = (req, res, next) => {

    res.render('shop',{
        prods:products,
        pageTitle:'Shop',
        path:'/',
        hasprods:products.length >0,
        activeShop:true,
        productCSS:true,
    });//rendering the shop page we dont need to defined path because it is already defined in views folder, we dont need to write shop.pug because it is already defined in second-app.js we will use pug template engine, hasproducts is a variable that we will use to check if there are products in products array or not
}

