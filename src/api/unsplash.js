import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d1liWFlSG4gji1vAnqiy1MqDSNFbb42NHgo0VWMCl5s'
    }
})
