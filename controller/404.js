const path = require('path');//importing path module
exports.get404Error = (req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname,'views','404-Error.html'));//sending a response
    res.status(404).render('404-Error',
    {pageTitle:'page not found', path: path});//rendering the 404.pug file in views folder automatically
}