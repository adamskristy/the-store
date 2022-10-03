// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of logs
const Log = require('../models/product')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllProducts,
    showNewView, 
    deleteOneProduct,
    updateOneProduct,
    createNewProduct,
    showEditView,
    seedStarterData,
    clearProductData,
    showOneProduct,
} = require('../controllers/storeController')


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllProducts)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneProduct)

// Setup "update" route
router.put('/:id', updateOneProduct)

// Setup "create" route
router.post('/', createNewProduct)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// CLEAR
router.get('/clear', clearProductData)

// Setup "show" route  
router.get('/:id', showOneProduct)


module.exports = router
