const fs = require('fs');// working with file systems
const path = require('path');// importing path module to work with file
const p = path.join(path.dirname(require.main.filename),
        'data',
        'products.json'
        );// getting the path of the file which store the products.json

const getProductFromFile = cb =>{
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }else{
                cb(JSON.parse(fileContent))
            };
        });

}
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        getProductFromFile(products => {
            products.push(this);// should use arrow function or this will be a conext and will not refer to class anymore
            fs.writeFile(p, JSON.stringify(products), (err) => {console.log(err)})// writing the products.json file
        });

    }
    static fetchAll(cb) {
        // const p = path.join(path.dirname(require.main.filename),
        // 'data',
        // 'products.json');// getting the path of the file which store the products.json
        // fs.readFile(p, (err, fileContent) => {
        //     if (err) {
        //         cb([]);
        //     }
        //     cb(JSON.parse(fileContent));
        // });
        getProductFromFile(cb);
    }
}