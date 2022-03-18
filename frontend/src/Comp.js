import './App.css';
import React from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"



function bUTTON(props) {

    function ontoken(token) {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Sucessfull")
        }).catch(err => {
            console.log(JSON.parse(err))
        })
    }

    const priceForStripe = props.price * 100;
    const publishableKey = "pk_test_51KMszbSAnunTvqZjWMDlqBaxuTzAzQ6nfkeMrKe08KT0dGtHMJ1p0Q124mkShmJ3v1excgQcVQR1d5LSO9mR7gIe00yx9KWrNQ"
    return (<div className='App'>
        <StripeCheckout
            name="Kousik Pay"
            label="Pay Now"
            shippingAddress
            billingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description="Your Total Cost is"
            amount={priceForStripe}
            panelLabel='Pay'
            token={ontoken}
            stripeKey={publishableKey}
        />
    </div>
    );
}

export default bUTTON;