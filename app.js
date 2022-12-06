const express = require('express');
const mongoose = require('mongoose');
const VisitorInfoIst = require('./models/visitorIPInfo');
require("dotenv").config();


// Dynamic Port Configuration
const port = process.env.PORT || 5500;

// express app
const app = express();

// mongoDB database url
const dbURL = process.env.MONGO_DB_URL; 

// connecting to mongoDb
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( (result) => {
        console.log("Connected to MongoDB!");
        app.listen(port);
    } ) 
    .catch( (err) => console.log(err) );



//register view engine
// app.set('view engine', 'ejs');


// middleware
app.use('/static', express.static(__dirname + '/static'));

//
app.use(express.urlencoded({ extended: true }));


// Home Page
app.get('/', (req, res)=>{
    res.sendFile('/views/index.html', {root: __dirname})
});

// Home Page Post Request
app.post('/', (req, res)=>{
    var visitorIp = req.body.ip;
    var visitorData = req.body;
    console.log("Visitor's IP: " + JSON.stringify(visitorData));
    
    const userInfo = new VisitorInfoIst(visitorData);

    
    userInfo.save()
    .then((result)=> {
        console.log("Data Saved: " + result);
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected on app termination');
        }); 
    })
    .catch((err)=>console.log(err));

});

// app.listen(port, ()=>{
//     console.log(`starting server on ${port}`);
// })


// Code Ends Here