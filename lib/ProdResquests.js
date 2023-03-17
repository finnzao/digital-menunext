const BASE_URL = "http://localhost:3000/";
import axios from "axios";
export const getProds = async () => {
    const response = await axios.get('/api/products');
    //const response2 = await fetch(`${BASE_URL}api/products`);
    const data =response.data
    //console.log(response2)
    console.log(data)
    return data
    //const json = await response2.json();

}

export const getProd = async (prodId) => {
    const response = await fetch(`${BASE_URL}api/products/${prodId}`);
    const json = await response.json();
    if (json) return json;
    return {}
    //  json ? json : {};
}

//NEW PRODUCT
export const newProd = async (formData) => {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/products`, Options);
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error)
    }
}

//UPDATE PRODUCT
export const updateProd = async (prodId, formData) => {
    try {
        const Options = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/products/${prodId}`, Options);
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error)
    }
}

//DELETE PROD
export const deleteProd = async (prodId) => {
    try {
        const Options = {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        }

        const response = await fetch(`${BASE_URL}api/products/${prodId}`, Options);
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error)
    }
}

