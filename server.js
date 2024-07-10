const express = require('express')
const app = express()
const db = require ('./db');

// const Person = require('./models/Person')
// const MenuItem = require("./models/MenuItem")




const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


app.get('/', function (req, res) {
  res.send('Welcpome tro my hotel... ')
})


const personRoutes = require('./routes/personRoutes');
// app.use('/person', personRoutes);


// const menuItemRoutes = require('./routes/menuItemRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//app.use('/menu', menuItemRoutes) ;


//use the routers

app.use('/person', personRoutes) ;
app.use('/menu', menuItemRoutes) ;




app.listen(3000,()=>{
    console.log("listning on port 3000")
})









