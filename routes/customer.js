const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const CustomerController = require('../controllers/customer');

router.get('/',checkAuth ,CustomerController.customer_list);
router.get('/:customerId' ,checkAuth,CustomerController.customer_show);
router.post('/',checkAuth ,CustomerController.customer_create);
router.put('/:customerId' ,checkAuth,CustomerController.customer_update);
router.delete('/:customerId' ,checkAuth,CustomerController.customer_delete);

module.exports = router;