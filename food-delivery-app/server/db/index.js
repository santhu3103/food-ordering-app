const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:2717/food-ordering', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db