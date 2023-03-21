const { cloudinary } = require('../../../utils/cloudinary');
export default async function handler(req, res) {
    const { method } = req;//pegando tipo de requisição
    
    if (method === "POST") {
        try {
            const fileStr =req.body.data;
            
            const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
                upload_preset:'menu_produtos'
            })
            res.send(uploadedResponse)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }


}