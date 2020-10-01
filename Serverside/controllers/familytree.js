const router = require('express').Router();
const bodyParser = require('body-parser');
const { module } = require('window-or-global');
const Familytree = require('../models/familytree.models');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true}));
//// Default router 
router.all(
    '/',
    function(req,res){
        return res.json({
            status: true,
            message: 'User controller wroking'
        })
    }
)


///// module exports

module.exports = router;
