import UserModel from "../model/User"
const jwt = require('jsonwebtoken');
const { compareSync } = require('bcrypt');

const loginController = (req, res)=>{
    console.log(req.body);
    UserModel.findOne({ username: req.body.email }).then(user => {
        //No user found
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Could not find the user."
            })
        }

        //Incorrect password
        console.log(compareSync(req.body.password, user.password));
        if (!compareSync(req.body.password, user.password)) {
            console.log();
            return res.status(401).send({
                success: false,
                khana:"so jao",
                message: "Incorrect password"
            })
        }else{

            const payload = {
                username: user.username,
                id: user._id
            }
    
            const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })
    
            return res.status(200).send({
                success: true,
                message: "Logged in successfully!",
                token: "Bearer " + token
            })
        }

        
    })
}
export default loginController