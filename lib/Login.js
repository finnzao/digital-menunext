import axios from "axios";
import {v4 as uuid} from "uuid";

export const getProds = async () => {
    const response = await axios.get('/api/products');
    const data = response.data
    return data
}

export const signInRequest = async (formData) => {
        try {
        const data = fetch('/api/login/', {
            method: 'POST',
            body: JSON.stringify({ data: formData }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
        return data
    } catch (err) {
        console.error(err);
    }
};






    //console.log(formData)
    //const response = await axios.post(`/api/login/`,formData);
    //console.log(response)

    //  json ? json : {};






