const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const __dirname = path.resolve()
app.use(express.static("../payment/build"));

// index.html for all page routes
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../payment", "build", "index.html"));
});

app.post('/send', (req, res) => {

    res.send('home is rendered  from simple server :)')

})


app.listen(8000, function () {
    console.log("Server started on port 8000");
});

app.post('/payment', (req, res) => {
    console.log("yes")
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    });
});