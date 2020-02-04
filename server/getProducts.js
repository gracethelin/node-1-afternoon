const products = require('../products.json');

const getProducts = (req, res) => {
    // const item = products.find(element => element.id === parseInt(req.params.id));
    //     res.status(200).send(products)
    // if (!item) {
    //         return res.status(500).send("item not in list");
    //     }
    if (req.query.price) {
    const items = products.filter(element => element.price >= parseInt(req.query.price))
    return res.status(200).send(items);
    }
    res.status(200).send(products);
}

 
   // find returns the item if it finds it, or undefined if not




module.exports = getProducts;