const User = require('../models/user');
var mongoose = require('mongoose');
var userTranformer = require('../tranformer/user');
var tranformer = require('../tranformer/tranformer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req,res)=>{
    var formData = req.body;
    var hashPassword = bcrypt.hashSync(formData.password,10);
    var formInputData = {
        _id: mongoose.Types.ObjectId(),
        email: formData.email,
        password: hashPassword
    };
    
    var query = new User(formInputData);
    query.save()
    .then((data)=>{
        var dataArray = tranformer.item(data,userTranformer);
        res.status(200).json(dataArray);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });  
};

exports.auth_token = (req,res)=>{
    var formData = req.body;
    User.findOne({email:formData.email})
    .then((userData)=>{
        if(userData){
            bcrypt.compare(formData.password, userData.password).then((result) => {
                if(result){
                    var token = jwt.sign(
                        {
                            id: userData._id,
                            email: userData.email,
                        }, 
                        'superbossza', 
                        {
                            expiresIn: 86400 // expires in 24 hours
                        }
                    );
                    res.status(200).json({
                        message: 'Auth success',
                        token: token
                    });
                }else{
                    res.status(500).json({
                        error: 'Auth failed'
                    });
                }
            });
        }else{
            res.status(500).json({
                error: 'User not found'
            });
        }
        
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
};