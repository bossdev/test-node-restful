module.exports = (data)=>{
    var tranform = {}
    tranform.id = data._id;
    tranform.name = data.name;
    tranform.age = data.age;
    tranform.salary = data.salary;
    tranform.birth = data.birth;

    return tranform;
}