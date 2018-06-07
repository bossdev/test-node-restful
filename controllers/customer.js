const Customer = require('../models/customer');
var mongoose = require('mongoose');
var customerTranformer = require('../tranformer/customer');
var tranformer = require('../tranformer/tranformer');

exports.customer_list = (req,res,next)=>{
    // console.log(Customer.schema.obj.birth);
    // Customer.schema.obj.birth.required = false;
    
    var query = Customer.find();
    query.exec()
    .then((data)=>{
        var dataArray = tranformer.collect(data,customerTranformer);
        res.status(200).json(dataArray);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.customer_show = (req,res)=>{
    var customerId = req.params.customerId;

    var query = Customer.findById(customerId);
    query.exec()
    .then((data)=>{
        var dataArray = tranformer.item(data,customerTranformer);
        res.status(200).json(dataArray);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.customer_create = (req,res)=>{
    var formData = req.body;
    var formInputData = {
        _id: mongoose.Types.ObjectId(),
        name: formData.name,
        age: formData.age,
        salary: formData.salary,
        birth: formData.birth
    };
    
    var query = new Customer(formInputData);
    query.save()
    .then((data)=>{
        var dataArray = tranformer.item(data,customerTranformer);
        res.status(200).json(dataArray);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.customer_update = (req,res)=>{
    var customerId = req.params.customerId;
    var formData = req.body;
    var formInputData = {
        name: formData.name,
        age: formData.age,
        salary: formData.salary,
        birth: formData.birth
    };

    var query = Customer.where({_id:customerId});
    query.update(formInputData)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.customer_delete = (req,res)=>{
    var customerId = req.params.customerId;
    var query = Customer.remove({_id:customerId});
    query.exec()
    .then((data)=>{
        var dataArray = {
            status: 200,
            message: 'Delete customer (ID = '+customerId+') success'
        }
        res.status(200).json(dataArray);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}