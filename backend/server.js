import React, { startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../frontend/src/App';
import React, { startTransition } from 'react'
//import reportWebVitals from './reportWebVitals';


// DEPENDENCIES
const express = require('express')
const path = require("path");
const cors = require("cors");
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// CONFIGURATION
// https://levelup.gitconnected.com/how-to-start-every-full-stack-project-7c92e07f8693
const app = express()
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.use(cors());
app.get("/api", async (req, res) => {
    res.send({ data: "received" });
});
const PORT = process.env.PORT


// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Shoe Box'
    })
})

// CONTROLLERS 
const inventoryController = require('./src/controllers/inventory_controller')
app.use('/inventory', inventoryController)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listending on port: ${process.env.PORT}`)
})