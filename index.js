 //1 importaciones
const express = require("express")
const app = express()
const mongoose  =require("mongoose")
const axios = require('axios').default;
const async = require("hbs/lib/async");



 //2 middlewares
 require('dotenv').config();

 const APIKEY = process.env.APIKEY;
 console.log(APIKEY);

 

 axios.get('https://api.stagingeb.com/v1/properties', {
    headers: {
      'X-Authorization': `${APIKEY}`
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })


 //3 ruteo

 app.get('/', (req, res) => {
  res.render('index', {title: 'Home'})
})

app.get('/', (req, res) => {
  res.send('Hello world!');
})


 //4 servidor
 app.listen(3000, () => {
     console.log("el servidor esta activado")
 })

