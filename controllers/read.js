const student=require("../models/newModel");

exports.readData=async(req,res)=>{
    try{
        if(!req.user)
        {
            res.send("unauthorized");
        }
        const result=await student.find({createdBy:req.user._id});
        console.log(result);

        res.render("display",{data:result});
        // res.status(208).json({
        //     message:"Data fetched successfully"
        // });
    }
    catch(err){
        res.status(505).json({
            message:"err.message"
        });
    }
};

exports.readDataByID=async(req,res)=>{
    try{
        const id=req.params.id;
        const result=await student.find({_id:id});
        console.log(result);
        res.render("unique",{data:result});
    }
    catch(err){
        res.status(505).json({
            message:err.message,
        });
    }
};