const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const dishSchema =new Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    description : {
        type: 'string',
        required: true
    }
},{
    timestamps : true
});

var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes