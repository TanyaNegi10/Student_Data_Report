const student = require("../models/newModel");

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;

        // const result=await student.deleteMany({_id:id});

        const result = await student.findByIdAndDelete(id);
        console.log(result);

        res.status(205).json({
            message: "Data deleted successfully",
        })
    }
    catch(err){
        res.status(504).json({
            message:err.message,
        })
    }
}