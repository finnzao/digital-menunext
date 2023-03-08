/** CONTROLER **/
import Product from "@/model/Menu";


//GET
async function getProd(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
}

//POST
async function postProd(req, res) {
    try {
        const product = await Product.create(req.body);//Usando o metodo do mongosse para criar tabela com o padrão da shecama
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}
//PUT
async function putProd(req, res) {
    try {
        const { prodId } = req.query;
        const formData = req.body;

        if (prodId && formData) {
            await Product.findByIdAndUpdate(prodId, formData);
            res.status(200).json(formData)
        }
        res.status(404).json({ error: "Produto não encontrado" })
    } catch (error) {
        res.status(404).json(error)
    }
}

//DELETE
async function deleteProd() {
    try {
        const { prodId } = req.query;
        const formData = req.body;
        if (prodId && formData) {
            await Product.findByIdAndDelete(prodId, formData);
            res.status(200).json(formData);
        }
        res.status(404).json({ error: "Produto não encontrado" })
    } catch (error) {
        res.status(404).json(error)
    }
}

export default [getProd, postProd, putProd];