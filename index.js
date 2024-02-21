const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb+srv://goliashok645:fB1CKfgzRIelHpDS@cluster0.zoay9mf.mongodb.net/rental_game')
.then(()=>{
    console.log("server Started")
    app.listen(5001,()=>{
        console.log("server started on the port 5001")
    })
})
.catch((err)=>{
    console.log(err)
})


// Explain what is Node, Express & Mongo and how they work together in details.

// How did you connect Mongo to your node application?

// What are events, event emitter and event loops??