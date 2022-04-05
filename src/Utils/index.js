import axios from 'axios';

// api pour stripe

export const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_URL_API// back firebase
});

export const apiOrderInstance = axios.create({
    baseURL: process.env.REACT_APP_WOO_URL_API+"/orders/?consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API
});