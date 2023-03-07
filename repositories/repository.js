import axios from 'axios';

const baseDomain = process.env.BASE_URL;

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const baseUrl = process.env.BASE_URL;
console.log(baseUrl);

export default axios.create( {
    baseUrl,
    headers: customHeaders
} );