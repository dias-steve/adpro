import axios from 'axios';

// api pour stripe

export const apiInstance = axios.create({
    baseURL:'http://localhost:5001/unadn-ed7cc/us-central1/api'// back firebase
});