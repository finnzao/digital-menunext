import dbConnect from "@/db/mongo";
import User from "@/model/Login";
import { v4 as uuid} from 'uuid';

export default async function handler(req, res) {
    const { 
        method,
        query: { id }
    } = req;

    dbConnect();
    switch (method) {


         case 'GET':
            try {
                const user = await User.find();
                res.status(200).json(user);
            } catch (err) {
                res.status(500).json(err);
            }
            break;

        case 'POST':
            try {
                const {email,password}=req.body;
                console.log(req.body)
                const userValid = await User.findOne({user:email})
                if(!userValid){
                    return res.status(422).json({msg:'User not found'})
                }
                //check password match
                const passwordValid = await User.findOne({password:password})

                if (!passwordValid){
                    return res.status(404).json({msg:'password not found'})
                }

                return { token:uuid()}
            } catch (err) {
                res.status(500).json(err)
            }
            break;

      

    }

}