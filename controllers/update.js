const student=require("../models/newModel");

exports.updateData=async(req,res)=>{
    try{
        const id=req.params.id;

        const {name,age,marks}=req.body;

        const result=await student.updateOne(
            {_id:id},
            {
                $set:{
                    name:name,
                    age:age,
                    marks:marks,
                }
            })
        console.log(result);

        // const rsult=await student.findByIdAndUpdate(
        //     {_id:id},
        //     {
        //        name,
        //        age,
        //        marks, 
        //     });
        
        res.status(203).json({
            message:"Data updated successfully",
        })
    }
    catch(err){
        res.status(504).json({
            message:err.message,
        });
    }
};