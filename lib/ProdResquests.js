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

export const newProd = async (formData) => {
    try {
        const urlImg = await uploadImage(formData.img)
        formData['img'] = urlImg
        const response = await axios.post(`/api/products`, formData);
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}

export const updateProd = async (prodId, formData) => {
    try {
        const response = await axios.put(`/api/products/${prodId}`, formData);
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}


export const deleteProd = async (prodId) => {
    try {
        const response = await axios.delete(`/api/products/${prodId}`, prodId);
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
}

export const changeState = async (state, prodId,nameState) => {
    let newState=nameState.toString()
    const opt1  ={}
    opt1[newState]=state;
    const opt = {newState: state}
    try {
        const response = await axios.put(`/api/products/${prodId}`, opt1);
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

