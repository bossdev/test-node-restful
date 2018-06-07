module.exports = (data)=>{
    var tranform = {}
    tranform.id = data._id;
    tranform.email = data.email;
    tranform.password = data.password;

    return tranform;
}