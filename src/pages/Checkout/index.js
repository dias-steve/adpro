import React from 'react';
import PaymentDetails from '../../components/PaymentDetails';
import './styles.scss';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from './../../stripe/config';


const stripePromise = loadStripe(publishableKey);
const Checkout = () => {

    return (
        <Elements stripe={stripePromise}>
         {/*<PaymentDetails />*/}
        </Elements>
    )

}

export default Checkout;