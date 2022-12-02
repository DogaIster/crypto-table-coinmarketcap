require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let response = null;
let PORT = '4000';
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(process.env.URL, {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.API_KEY,
                'Accept-Encoding': 'null',
            },
        });
    } catch (ex) {
        response = null;
        // error
        reject(ex);
    }
    if (response) {
        // success
        const json = response.data;
        resolve(json);
    }
});

app.get('/api', (req, res) => {
    res.send(response.data);
});

app.listen(PORT, () => {
    console.log(`Express server is running on ${PORT}`);
});
