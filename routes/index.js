const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

// Manage top-level request firs

// Defer path requests to a particular controller
//router.use('/about', require('../controllers/about.js'))
//router.use('/puppy', require('../controllers/puppy.js'))
router.get("/index", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
})
router.get("/customer", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("customers/index.ejs")
})
router.get("/products", function (req, res) {
    res.render("products.ejs")
})

router.get("/order", function (req, res) {
    res.render("order.ejs")
})

router.get("/orderLineItems", function (req, res) {
    res.render("orderLineItems/index.ejs")
})

router.get("/about", function (req, res) {
    res.render("about.ejs")
})

router.get("/contact", function (req, res) {
    res.render("contact.ejs")
})
//  router.get("/404", function (req, res) {
//   res.render("404.ejs")
//  })
router.use('/customer', require('../controllers/customer.js'));
//router.use('/product', require('../controllers/product.js'))
router.use('/orderLine', require('../controllers/orderLineItems.js'));
router.get(function (req, res) {
    res.render('404')
})
LOG.debug('END routing')
module.exports = router