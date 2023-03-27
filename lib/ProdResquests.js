import axios from "axios";
export const getProds = async () => {
    const response = await axios.get('/api/products');
    const data = response.data
    return data
}

export const getProd = async (prodId) => {
    const response = await axios.get(`/api/products/${prodId}`);
    const data = response.data
    if (data) return data;
    return {}
    //  json ? json : {};
}
//UPLOAD
const uploadImage = async (base64EncodedImage) => {
    try {
        const data = fetch('/api/upload', {
            method: 'POST',
            body: JSON.stringify({ data: base64EncodedImage }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => data.url)
        return data
    } catch (err) {
        console.error(err);
    }
};
//NEW PRODUCT
export const newProd = async (formData) => {
    try {
        console.log(formData.img)
        const urlImg = await uploadImage(formData.img)
        formData['img'] = urlImg
        console.log(formData);
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

//CHANGE STATE
export const changeState = async (state, prodId) => {
    const opt = {
        "state": state
    }
    try {
        const response = await axios.put(`/api/products/${prodId}`, opt);
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

