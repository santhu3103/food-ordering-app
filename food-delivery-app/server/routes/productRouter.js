const express = require('express')

const router = express.Router()

const Product = require('../model/productMoudle')

router.get('./product',async (req, res)=> {
    try {
        const products=await Product.find()
        res.status(200).send ({data:products})
    } catch (err) {
        res.status.(400)send({error:err})    }
})

router.get('/product-by-categories',async(req.res)=>{
    try{

        const product = await Product
    }
})

module.exports = router