const mongoose = require ('mongoose');


//define the mongodb connection url


const mongoURL = 'mongodb://localhost:27017/hotel'  //replace mydatabase with your database name


//set up mongoDB connection


mongoose.connect(mongoURL,{

    // useNewUrlParser: true, 
    // useUnifiedTopology: true

})

//get the default connection
//mongoose maintain the default connection object representing the MongoDB connection

const db  = mongoose.connection


//define the event listners for database connection

db.on('connected',()=>{

    console.log('connected to mongoDb server')

})

db.on('error',()=>{

    console.log('mongo connection error',err)

})

db.on('disconnected',()=>{

    console.log('dic-connected to mongoDb server')

})

//export the db connection

module.exports = db;