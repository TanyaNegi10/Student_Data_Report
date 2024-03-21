const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const {setUser}=require("../services/auth");
const {v4:uuidv4}=require("uuid");
exports.handleSignupRequest = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hash = await bcrypt.hash(password, 10);
        const result = await User.create({ name, email, password: hash });
        
        // const result = await User.create({ 
        //     name:name,
        //     email: email,
        //     password: password });

        console.log(result);
        if (result != null) {
            res.redirect("http://localhost:3000/create");
        } else {
            res.status(503).json({
                message: "Some error",
            });
        }
    
    }
    catch (err) {
        console.log(err);
        console.log("not use")
    }
};

exports.handleLoginRequest = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(402).json({
                message: "Invalid email",
            });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(403).json({
                message: "Invalid password",
            });
        }

        // statefull 
        // const sessionId=uuidv4();
        // setUser(sessionId,user);
        // res.cookie("uid",sessionId);

        //stateless
        const token=setUser(user);
        res.cookie("uid",token);
        console.log("token",token);

        res.redirect("http://localhost:3000/create");
    }catch(err)
    {
        console.log(err);
    }
};
