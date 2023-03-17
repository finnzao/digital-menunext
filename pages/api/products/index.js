import dbConnect from "@/db/mongo";
import Product from "@/model/Menu";


export default async function handler(req, res) {
    const { method,
        query: { id }
    } = req;

    dbConnect();
    switch (method) {

        case 'GET':
            try {
                const products = await Product.find();
                res.status(200).json(products );
            } catch (err) {
                res.status(500).json(err);
            }
            break;

        case 'POST':
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product)
            } catch (err) {
                res.status(500).json(err)
            }
            break;

        case 'DELETE':
            try {
                await Product.findByIdAndDelete(id);
                res.status(200).json("O produto foi deletado");
            } catch (err) {
                res.status(500).json(err)
            }

            break;

        case 'PUT':
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
            break;


    }




}