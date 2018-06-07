const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {type: String , required: true},
    age : Number,
    salary : {type: Number , required: true},
    birth: {
        type: Number , 
        required: function(){return this.age != null;}
    }
},{collection:'customer',versionKey: false});

module.exports = mongoose.model('Customer',customerSchema);