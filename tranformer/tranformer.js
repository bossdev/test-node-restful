exports.collect = (datas,tranfrom)=>{
    let dataRes = [];
    datas.forEach(function(v) {
        dataRes.push(tranfrom(v));
    });
    return dataRes;
}

exports.item = (datas,tranfrom)=>{
    let dataRes = tranfrom(datas)
    return dataRes;
}