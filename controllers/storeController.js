const Product = require('../models/product')
const seed = require('../models/seed')


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// ROUTE     GET /products    (index)
const findAllProducts = (req, res) => {  
   
    Product.find({}, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { product: foundProduct })
        }
    })
}

// ROUTE      GET /products/new    (new)
const showNewView = (req, res) => {     
    res.render('New')
}

// ROUTE       DELETE /products/:id      (destroy)
const deleteOneProduct = (req, res) => {
    
        Product.findByIdAndDelete(req.params.id, (err, deletedProducts) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).redirect('/products')
            }
        })
    }


// ROUTE     PUT /products/:id       (update)
const updateOneProduct = (req, res) => {
    console.product(req.body)
    if (req.body.shipIsBroken === "on" || req.body.shipIsBroken === true ) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Product.findByIdAndUpdate(req.params.id, req.body, (err, foundProduct) => {
        console.product(req.body)
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`)
        }
    })
}

// ROUTE     POST /products     (create)
const createNewProduct = (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
   
    Product.create(req.body, (err, createdProduct) => {
        console.product(req.body)
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
            // res.status(200).redirect(`/products/${req.params.id}`)
        }
    })
}

// ROUTE      GET /products/:id/edit     (edit)
const showEditView = (req, res) => {
    
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { product: foundProduct })
        }
    })
}



// ROUTE       GET /products/seed      (seed)
const seedStarterData = (req, res) => {
    
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.product('deleted data.')
            console.product(seed.products)
          
            Product.create(seed.products, (err, createdProduct) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/products')
                }
            })
        }
    })
}

// ROUTE       GET /products/clear     (clear)
const clearProductData = (req, res) => {
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products/')
        }
    })
}

// ROUTE     GET /products/:id     (show)
const showOneProduct = (req, res) => {

    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { product: foundProduct })
        }
    })
}


module.exports = {
    findAllProducts,
    showNewView, 
    deleteOneProduct,
    updateOneProduct,
    createNewProduct,
    showEditView,
    seedStarterData,
    clearProductData,
    showOneProduct
}