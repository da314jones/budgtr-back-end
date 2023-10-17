const models = require('../models/models');

const removeTransaction = (req, res) => {
    const idx = parseInt(req.params.index);
    if (idx > 0 & idx < models.length) {
        const removedTransaction = models.splice(idx, 1);
        res.json(removedTransaction[0]); 
    } else {
        res.status(404).json({message: "Transaction not found"});
    }
};




module.exports = removedTransaction;