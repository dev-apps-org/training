let express = require("express")
let router = express.Router()
let bodyParser = require("body-parser")

router.use(bodyParser.json());

router.route('/getProducts').get((request, response) => {
    
});

router.route('/addProduct').get((request, response) => {
    
});

router.route('/updateProduct').get((request, response) => {
    
});

router.route('/removeProduct').get((request, response) => {
    
});

module.exports = router;