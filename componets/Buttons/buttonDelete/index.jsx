import React from 'react'
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';
const handleDelete = async (id) => {
    const urlBase = "http://localhost:3000/"
    try {
        const res = await axios.delete(
            `${urlBase}/api/products/` + id
        );
        ;//RECARREGANDO LISTA ,E ORGANIZANDO
    } catch (err) {
        console.log(err);
    }
};

function show(x) {
    console.log(x)
}
function ButtonDelete({ Prodid }) {
    return (
        <button onClick={() => handleDelete(Prodid)}><TiDelete /></button>
    )
}

export default ButtonDelete