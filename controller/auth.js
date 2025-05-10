const bcrypt = require("bcrypt");
const User = require("../models/user");

// signup route handler
exports.signUp = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        // check if user already exist
        const existing_user = await User.findOne({email});
        if(existing_user){
           return res.status(400).json({
                success: false,
                message: "user aleady exist"
            });

        }

        // secure password
        let hashedPassword;
        try {
            
            hashedPassword = await bcrypt.hash(password, 10)


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error in hashing passwrd'
            })
        }

        // create entry for user
        const newUser = await User.create({
            name, email, password:hashedPassword, role
        })


        return res.status(200).json({
            success: true,
            message: "user created successfully"
        })
    } 
    catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "user cannot be registered, please try again later"
        })
    }
}