//Load express
const express = require('express')
const{application} = require ('express')
const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config')

// Bring in our packaged routes
const storeRoutes = require('./routes/storeRoutes')


require('dotenv').config()

//create our express app
const app = express()

//Identify our port
const port = process.env.PORT;

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())

// Main route
app.use('/products', storeRoutes)

// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()