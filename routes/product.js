const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json(
        {
            message:'show data get product'
        }
    );
});

router.get('/:productId',(req,res)=>{
    var productId = req.params.productId;
    res.status(200).json(
        {
            message:'show data product = '+productId
        }
    );
});

router.post('/',(req,res)=>{
    var formData = req.body
    res.status(201).json(
        {
            message:'post - product',
            data: formData
        }
    );
});

router.put('/:productId',(req,res)=>{
    var productId = req.params.productId;
    res.status(201).json(
        {
            message:'update data put at product = '+productId
        }
    );
});

router.delete('/:productId',(req,res)=>{
    var productId = req.params.productId;
    res.status(201).json(
        {
            message:'delete data put at product = '+productId
        }
    );
});


module.exports = router;