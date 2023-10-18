const models = require('../models/models');

const deleteTransaction = (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx > 0 & idx < models.length) {
        const deletedTransaction = models.splice(idx, 1);
        res.json(deletedTransaction[0]); 
    } else {
        res.status(404).json({message: "Transaction not found"});
    }
};




module.exports = deleteTransaction;