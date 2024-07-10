const express = require('express');
const router = express.Router();
const MenuItem = require("../models/MenuItem")




//post  method  for the MenuItems

router.post('/', async(req,res)=>{
    try{
      const data = req.body 
    const newMenu = new MenuItem(data)
    const response = await newMenu.save()
    console.log(' data saved')
    res.status(200).json(response)
    
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
    
    })
  
  

//get method  for the MenuItems

router.get('/',async function (req, res) {
    try{
      const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
  
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
    
  
  })

//parameterised  uurl

  router.get('/:taste', async (req, res) =>{
    try{

    const tasteType = req.params.taste; // // Extract the taste type from the URL parameter

    if(tasteType == 'Sweet' || tasteType == 'Sour' || tasteType =='Spicy' ){
        
    const response = await MenuItem.find({taste: tasteType});
    console.log('response fetched');
    res.status(200).json(response);
    }else{
    res.status(404).json({error: 'Invalid Taste type'});
    }
    }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    }
    })

  
  
  module.exports = router;




