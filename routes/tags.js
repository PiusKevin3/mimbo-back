const router = require('express').Router();

const TagsController = require('../controllers/tags');

// fetch all  data
router.get('/getAll/:typeNameValue', TagsController.getAll);

// fetch all  data where tags match
router.get('/getAllWithSameTagtype/:typeName/:tagName', TagsController.getAllWithSameTagtype);

// create 
router.post('/create', TagsController.create);


module.exports = router;
