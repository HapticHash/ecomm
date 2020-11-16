const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HnBe1AfPjopGlx481XfWi7nW8rIFmkmxfNoR7C1wixWxTfUnalarlOds0Mxeky088UkdVKe6yAhymdsH0ruEMGl00ukd4z6LM')

// API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment Request Recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "cad", 
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/ecomm-7c2ae/us-central1/api