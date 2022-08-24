const mongoose = require('mongoose')
const { stringify } = require('postcss')
const Schema= mongoose.Schema

const CategorySchema = new Schema(
    name:{
        type:string,require:true
     }
)

const ProductSchema = new Schema(
    name:{ type:string,require:true }
    adjective:{ type:string,require:true }
    description:{ type:string,require:true }
    price:{ type:string,require:true }
    category:{ type:string,require:true }
    
)

module.exports = mongoose.model('Product',ProductSchema);