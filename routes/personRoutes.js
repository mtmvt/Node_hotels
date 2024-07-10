const express = require('express');

const router = express.Router();
const Person = require('../models/Person'); // Adjust the path if needed





// app.post('/person', async(req,res)=>{
// router.post('/person', async(req,res)=>{
    router.post('/', async(req,res)=>{ //alternate by removing person and adding it to server.js
    try{
      const data = req.body //assuming the request body contains the person data
    
      //create a new person document using the mongo model
    
    const newPerson = new Person(data)
    
    //save the new person to the databse
    const response = await newPerson.save()
    console.log(' data saved')
    res.status(200).json(response)
    
    }
    
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
    
    })
    


    
//get method to get the person

// app.get('/person',async function (req, res) {
// router.get('/person',async function (req, res) {
    router.get('/',async function (req, res) { //alternate
    try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
  
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
    
  
  })



  
// parameterised url

// app.get('/person/:workType',  async(req,res)=>{
    // router.get('/person/:workType',  async(req,res)=>{
        router.get('/:workType',  async(req,res)=>{ //alternate

    try{
     
      const workType = req.params.workType;  //extract the worktype from the url parameter
    
    if(workType == 'chef'|| workType == 'manager' ||workType == 'waiter' ){
       const response = await Person.find({work: workType});
       console.log("response fetched")
       res.status(200).json(response);
    }else{
    
      res.status(404).json({err: "Invalid work Type"})
    }
    
    }catch(err){
      console.log(err);
        res.status(500).json({error:'internal server error'});
    
    }
      
    })


    //update method................................



    router.put('/:id', async (req, res) => {
        try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        const updatedPersonData = req.body; // Updated data for the person
        // Assuming you have a Person model
        
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
    });
    if (!response) {
    return res.status(404).json({ error: 'Person not found'
    });
    }
   
    // Send the updated person data as a JSON response
    console.log('data updated')
    res.status(200).json(response);

   
    } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
    }
    });






    //delete method................................

    router.delete('/:id', async (req, res) => {
        try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        // Assuming you have a Person model
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
        return res.status(404).json({ error: 'Person not found' });
        }

        console.log('data delete')
        res.status(200).json({message:"Person deleted successfully"});


        } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
        }
        })








    module.exports = router;