const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:2717/food-ordering', (err)=>{
        if(!err) console.log('db connected');
        else console.log('err db');
    
    },{ useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db