const mongoose = require('mongoose');
// const { console } = require('window-or-global');

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });

mongoose.connection.once('open',function(){
    console.log('Mongodb is connected....')
}).on('error',function(error){
    console.log("error is ",error);
})