//Stateless
const jwt=require("jsonwebtoken");
const secret="taniya@123#";

exports.setUser=(user)=>{
    const payload={
        _id: user._id,
        email: user.email,
    };
    return jwt.sign(payload,secret);
};

exports.getUser=(token)=>{
    if(!token)
    {
        return null;
    }
    return jwt.verify(token,secret);
};



//Statefull
// const sessionToUser=new Map();
// exports.setUser=(id,user)=>{
//     sessionToUser.set(id,user);
// }

// exports.getUser=(id)=>{
//     return sessionToUser.get(id);
// }