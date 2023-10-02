const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.route('/')
    // .get(loanController.getLoan)
    .get(loanController.getAllLoans)
    .post(loanController.createLoan)


router.route('/:id')
    .get(loanController.getLoanById)
    .patch(loanController.updateLoanById)
    .put(loanController.updateLoanById)
    .delete(loanController.deleteLoanById);

router.route('/byCustomer/:name')
    .get(loanController.getLoansByCustomerName);

module.exports = router;