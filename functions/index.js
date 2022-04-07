const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const axios = require('axios');
const { response } = require('express');
//functions.config().stripe.secret_key
const app = express();



app.use(cors({
  origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: 'eur',
    });

    res
      .status(200)
      .send(paymentIntent.client_secret);

  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      });
  }
})



app.post('/products/categories', async(req, res) =>{
  try{
    const {publickey} = req.body
    const options = {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin": true
      },
      url:process.env.REACT_APP_WOO_URL_API+"/products/categories?consumer_key="+publickey+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API,
    }
    axios.request(options).then((response)=>{
      res.json(response.data)
      return 1
    }).catch((error) => {
      console.error(error)
      throw(error)
    })
  }catch(error){
    res
    .status(500)
    .send("[Categories Access]"+err.message)
  }
})
app.post('/products/category', async(req, res) =>{
  try{
    const {publickey, categoryId} = req.body
    const options = {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin": true
      },
      url:process.env.REACT_APP_WOO_URL_API+"/products/categories/"+categoryId+"?consumer_key="+publickey+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API,
    }
    axios.request(options).then((response)=>{
      res.json(response.data)
      return 1
    }).catch((error) => {
      console.error(error)
      throw(error)
    })
  }catch(err){
    res
    .status(500)
    .send("[Category info Access]"+err.message)
  }
})

app.post('/products/bycategory', async(req, res) =>{
  try{
    const {publickey, categoryId} = req.body
    const options = {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin": true
      },
      url:process.env.REACT_APP_WOO_URL_API+"/products?category="+categoryId+"&status=publish&per_page=100&consumer_key="+publickey+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API,
    }
    axios.request(options).then((response)=>{
      res.json(response.data)
      return 1
    }).catch((error) => {
      console.error(error)
      throw(error)
    })
  }catch(err){
    res
    .status(500)
    .send("[Produit by categorie Access]"+err.message)
  }
})

app.post('/products/detail', async(req, res) =>{
  try{
    const {publickey, productId} = req.body
    const options = {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin": true
      },
      url:process.env.REACT_APP_WOO_URL_API+"/products/"+productId+"?status=publish&per_page=100&consumer_key="+publickey+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API,
    }
    axios.request(options).then((response)=>{
      res.json(response.data)
      return 1
    }).catch((error) => {
      console.error(error)
      throw(error)
    })
  }catch(err){
    res
    .status(500)
    .send("[Produit Detail Access]"+err.message)
  }
})

app.post('/shop', async(req, res) =>{
  try{
    const {publickey, order: data} = req.body
    const options = {
      method:'POST',
      headers: {
        "Access-Control-Allow-Origin": true
      },
      url:process.env.REACT_APP_WOO_URL_API+"/orders/?consumer_key="+publickey+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API,
      data
    }
    axios.request(options).then((response)=>{
      res.json(response.data)
      return 1
    }).catch((error) => {
      console.error(error)
      throw(error)
    })
  }catch(err){
    res
    .status(500)
    .send("[OrderCreation]"+err.message)
  }
})

app.post('/shopvalidation', async(req, res) =>{
  try{
    const {publickey, orderId, paymentIntentId} = req.body
    const data = {
      set_paid: true,
      transaction_id: paymentIntentId,
      payment_method: "card",
      payment_method_title: "Card",
      status: "processing"
    }
    const options = {
      method:'PUT',
      headers: {
        "Access-Control-Allow-Origin": true
      },
      url:process.env.REACT_APP_WOO_URL_API+"/orders/"+orderId+"?consumer_key="+publickey+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API,
      data,

    }
    axios.request(options).then((response)=>{
      res.json(response.data)
      return 1
    }).catch((error) => {
      console.error(error)
      throw(error)
    })
  }catch(err){
    res
    .status(500)
    .send("[OrderValidation]"+err.message)
  }
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send('404, Not Foundd.');
});
exports.api = functions.https.onRequest(app);
