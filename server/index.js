const express = require(`express`);
let products = require(`../products.json`)
const app = express();
const port = 4545;
const getProducts = require(`./getProducts`)


// app.get(`/api/products`, (req, res) => {
//     res.status(200).send(products)
// })

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(port, () => {
    console.log(`its working ${port}`)
})

