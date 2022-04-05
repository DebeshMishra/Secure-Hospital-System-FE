

const axios = require('axios');

const APIKEY = "d62f29059d7d2a3a6941248f0656735a3666e568570a65b46d3e5af9ea629f13"
const from = "A7CB82B4035E341F62256EE5A4E848E4CC9B73A2"
const url = "https://api.simbachain.com/v1/G3SHS"

export const postClaimToBlockChain = async (data) => {
    const newdata = {...data};
    newdata['from'] = from;

    const response = await axios.post( url + "/Claim/", newdata, {
        headers: {
            'APIKEY': APIKEY,
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    });

    return response;
}

export const postTransactionToBlockChain = async (data) => {
    const newdata = {...data};
    newdata['from'] = from;

    const response = await axios.post( url + "/Transaction/", newdata, {
        headers: {
            'APIKEY': APIKEY,
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    });

    return response;
}