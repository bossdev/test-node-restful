const http = require('http');
const port = 3000;
var app = require('./app');
const server = http.createServer(app);

server.listen(port,function(){
    console.log('\x1b[36m%s\x1b[0m','server running at http://localhost:'+port+'');
    // var yo = 'defaultz';
    // var getTime = new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             console.log('time');
    //             yo = 'bos245';
    //             resolve('send data success');
    //             // reject('no has data');
    //         },3000);
    //     });
    
    // getTime
    // .then((text)=>{
    //     console.log(text +' / hello : '+yo);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });


    // try {
    //     if(3==5){
    //         console.log('its correct !');
    //     }else{
    //         console.log('its not correct !');
    //         throw 'error value is invalid';
    //     }
    // } catch (error) {
    //     console.log('err : '+error);
    // }
    
});
