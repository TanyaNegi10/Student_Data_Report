const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 15,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        validate(val) {
            if (val < 0) {
                throw new Error("Age cant be negative");
            }
        },
    },
    marks: {
        type: Number,
        required: true,
        validate(val) {
            if (val < 0) {
                throw new Error("Marks cant be negative");
            }
        },
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
});
 const student=new mongoose.model("student100",StudentSchema);
 module.exports=student;