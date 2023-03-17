import axios from "axios";
export const getProds = async () => {
    const response = await axios.get('/api/products');
    const data =response.data
    return data
}

export const getProd = async (prodId) => {
    const response = await  axios.get(`/api/products/${prodId}`);
    const data =response.data
    if (data) return data;
    return {}
    //  json ? json : {};
}

//NEW PRODUCT
export const newProd = async (formData) => {
    try {
        const response = await axios.post(`/api/products`, formData);
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}

//UPDATE PRODUCT
export const updateProd = async (prodId, formData) => {
    try {
        const response = await axios.put(`/api/products/${prodId}`, formData);
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}

//DELETE PROD
export const deleteProd = async (prodId) => {
    try {
        const response = await axios.delete(`/api/products/${prodId}`, prodId);
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}

